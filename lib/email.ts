import nodemailer from 'nodemailer'

export interface ContactSubmission {
  name: string
  email: string
  organization?: string
  message: string
  locale?: string
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

/**
 * Creates and returns the nodemailer transporter using environment variables.
 * Returns null if SMTP_PASS is not provided.
 */
export function getMailTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com'
  const port = Number(process.env.SMTP_PORT || 465)
  const secure = process.env.SMTP_SECURE !== undefined ? process.env.SMTP_SECURE === 'true' : port === 465
  const user = process.env.SMTP_USER || 'info@agri-experience.com'
  const pass = process.env.SMTP_PASS

  if (!pass) {
    return null
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  })
}

/**
 * Generates the notification email sent to info@agri-experience.com
 */
function generateTeamNotificationEmail(submission: ContactSubmission) {
  const safeName = escapeHtml(submission.name.trim())
  const safeEmail = escapeHtml(submission.email.trim())
  const safeOrg = submission.organization?.trim() ? escapeHtml(submission.organization.trim()) : 'Not specified'
  const safeMessage = escapeHtml(submission.message.trim()).replace(/\n/g, '<br/>')
  const locale = (submission.locale || 'en').toUpperCase()

  const now = new Date()
  const dateFormatted = now.toLocaleString('en-US', {
    timeZone: 'Africa/Nairobi',
    dateStyle: 'full',
    timeStyle: 'medium',
  })

  const subject = `[Website Inquiry] ${submission.name}${submission.organization ? ` (${submission.organization})` : ''}`

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${subject}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1f2937; margin: 0; padding: 0; background-color: #f3f4f6; }
    .container { max-width: 600px; margin: 30px auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .header { background: #1A4D2E; color: #ffffff; padding: 28px 32px; }
    .header h1 { margin: 0 0 4px 0; font-size: 22px; font-weight: 700; }
    .header p { margin: 0; font-size: 13px; opacity: 0.9; }
    .content { padding: 32px; }
    .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .info-table td { padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #f3f4f6; }
    .info-table td.label { font-weight: 600; color: #4b5563; width: 130px; }
    .info-table td.value { color: #111827; }
    .message-box { background: #f9fafb; border-left: 4px solid #1A4D2E; padding: 20px; border-radius: 6px; font-size: 14px; color: #1f2937; margin-top: 16px; line-height: 1.6; }
    .footer { padding: 20px 32px; background: #f9fafb; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; text-align: center; }
    .reply-badge { display: inline-block; background: #e0f2fe; color: #0369a1; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-top: 16px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Inquiry</h1>
      <p>Received via the Agri Experience official website</p>
    </div>
    <div class="content">
      <table class="info-table">
        <tr>
          <td class="label">From:</td>
          <td class="value"><strong>${safeName}</strong></td>
        </tr>
        <tr>
          <td class="label">Email:</td>
          <td class="value"><a href="mailto:${safeEmail}" style="color: #1A4D2E; text-decoration: underline;">${safeEmail}</a></td>
        </tr>
        <tr>
          <td class="label">Organization:</td>
          <td class="value">${safeOrg}</td>
        </tr>
        <tr>
          <td class="label">Submitted (EAT):</td>
          <td class="value">${dateFormatted} (Nairobi Time)</td>
        </tr>
        <tr>
          <td class="label">Site Language:</td>
          <td class="value">${locale}</td>
        </tr>
      </table>

      <h3 style="font-size: 14px; color: #374151; margin: 24px 0 8px 0; text-transform: uppercase; letter-spacing: 0.05em;">Message:</h3>
      <div class="message-box">
        ${safeMessage}
      </div>

      <div style="text-align: center;">
        <span class="reply-badge">You can reply directly to this email to reach ${safeName}</span>
      </div>
    </div>
    <div class="footer">
      Agri Experience Website Notification System • Watermark Business Park, Spring Court, Karen, Nairobi, Kenya
    </div>
  </div>
</body>
</html>
`

  const text = `
NEW CONTACT INQUIRY - AGRI EXPERIENCE WEBSITE
----------------------------------------------
From:         ${submission.name}
Email:        ${submission.email}
Organization: ${submission.organization || 'Not specified'}
Submitted:    ${dateFormatted} (EAT)
Language:     ${locale}

MESSAGE:
----------------------------------------------
${submission.message}

----------------------------------------------
Reply directly to this email to respond to ${submission.name}.
`

  return { subject, html, text }
}

/**
 * Generates the automated acknowledgment email sent to the respondent
 */
function generateRespondentAcknowledgmentEmail(submission: ContactSubmission) {
  const isFrench = submission.locale === 'fr'
  const safeName = escapeHtml(submission.name.trim())
  const safeMessage = escapeHtml(submission.message.trim()).replace(/\n/g, '<br/>')

  const subject = isFrench
    ? `Merci d'avoir contacté Agri Experience`
    : `Thank you for contacting Agri Experience`

  const greeting = isFrench
    ? `Bonjour ${safeName},`
    : `Dear ${safeName},`

  const intro = isFrench
    ? `Nous vous remercions d'avoir contacté <strong>Agri Experience</strong>. Nous avons bien reçu votre demande et notre équipe examine actuellement votre message.`
    : `Thank you for reaching out to <strong>Agri Experience</strong>. We have received your inquiry and our team is currently reviewing your message.`

  const mission = isFrench
    ? `Que votre demande porte sur le renforcement des systèmes semenciers, nos études techniques, nos plateformes numériques ou un partenariat potentiel, nous vous remercions de votre intérêt pour notre travail en Afrique subsaharienne. Un membre de notre équipe vous répondra dans les plus brefs délais.`
    : `Whether your inquiry concerns seed systems development, technical studies, digital platforms, or a prospective partnership, we appreciate your interest in our mission across sub-Saharan Africa. A member of our team will follow up with you promptly.`

  const recapTitle = isFrench
    ? `Copie de votre message :`
    : `A copy of your message for your records:`

  const signoff = isFrench
    ? `Bien cordialement,`
    : `Warm regards,`

  const teamTitle = isFrench
    ? `L'équipe Agri Experience`
    : `The Agri Experience Team`

  const officeLocation = isFrench
    ? `Siège : Watermark Business Park, Spring Court, Karen. Nairobi, Kenya`
    : `Head Office: Watermark Business Park, Spring Court, Karen. Nairobi, Kenya`

  const html = `
<!DOCTYPE html>
<html lang="${isFrench ? 'fr' : 'en'}">
<head>
  <meta charset="utf-8">
  <title>${subject}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #2d3748; margin: 0; padding: 0; background-color: #f7fafc; }
    .container { max-width: 600px; margin: 30px auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 14px rgba(0,0,0,0.04); }
    .header { background: #1A4D2E; color: #ffffff; padding: 36px 32px 32px 32px; text-align: center; }
    .header h1 { margin: 0 0 6px 0; font-size: 24px; font-weight: 700; letter-spacing: -0.02em; }
    .header p { margin: 0; font-size: 13px; opacity: 0.85; text-transform: uppercase; letter-spacing: 0.08em; }
    .content { padding: 36px 32px; }
    .greeting { font-size: 16px; font-weight: 600; color: #1A4D2E; margin-bottom: 16px; }
    .lead { font-size: 15px; color: #374151; margin-bottom: 16px; line-height: 1.7; }
    .copy-box { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 18px 20px; margin: 24px 0; }
    .copy-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #6b7280; margin-bottom: 8px; }
    .copy-text { font-size: 13.5px; color: #4b5563; line-height: 1.6; font-style: italic; }
    .signoff { margin-top: 28px; font-size: 14px; color: #374151; }
    .signoff strong { color: #1A4D2E; display: block; margin-top: 4px; font-size: 15px; }
    .footer { padding: 24px 32px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #718096; text-align: center; line-height: 1.6; }
    .footer a { color: #1A4D2E; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Agri Experience</h1>
      <p>Transforming Seed Systems Across Sub-Saharan Africa</p>
    </div>
    <div class="content">
      <div class="greeting">${greeting}</div>
      <p class="lead">${intro}</p>
      <p class="lead">${mission}</p>

      <div class="copy-box">
        <div class="copy-title">${recapTitle}</div>
        <div class="copy-text">${safeMessage}</div>
      </div>

      <div class="signoff">
        ${signoff}
        <strong>${teamTitle}</strong>
      </div>
    </div>
    <div class="footer">
      <div>${officeLocation}</div>
      <div style="margin-top: 4px;">
        Tel: <a href="tel:+254202626888">+254 (20) 2626888</a> • Email: <a href="mailto:info@agri-experience.com">info@agri-experience.com</a>
      </div>
      <div style="margin-top: 6px;">
        <a href="https://agri-experience.com">agri-experience.com</a>
      </div>
    </div>
  </div>
</body>
</html>
`

  const text = `
${isFrench ? 'AGRI EXPERIENCE - ACCUSÉ DE RÉCEPTION' : 'AGRI EXPERIENCE - INQUIRY ACKNOWLEDGMENT'}
----------------------------------------------------------------------
${greeting}

${intro.replace(/<[^>]+>/g, '')}

${mission.replace(/<[^>]+>/g, '')}

${recapTitle}
----------------------------------------------------------------------
${submission.message}

----------------------------------------------------------------------
${signoff}
${teamTitle}

${officeLocation}
Tel: +254 (20) 2626888 / +254 (719) 554 154
Email: info@agri-experience.com
Web: https://agri-experience.com
`

  return { subject, html, text }
}

/**
 * Handles sending both the team notification and respondent acknowledgment emails.
 */
export async function sendContactEmails(submission: ContactSubmission): Promise<{ success: boolean; simulated: boolean; error?: string }> {
  const teamEmail = generateTeamNotificationEmail(submission)
  const respondentEmail = generateRespondentAcknowledgmentEmail(submission)

  const transporter = getMailTransporter()

  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'info@agri-experience.com'
  const senderEmail = process.env.CONTACT_FROM_EMAIL || `"Agri Experience" <${process.env.SMTP_USER || 'info@agri-experience.com'}>`

  // If no SMTP password configured, log simulated message and succeed gracefully
  if (!transporter) {
    console.warn('[Contact API] SMTP_PASS not configured. Simulating email dispatch:')
    console.log('[Team Notification]', {
      to: receiverEmail,
      from: senderEmail,
      replyTo: submission.email,
      subject: teamEmail.subject,
    })
    console.log('[Respondent Acknowledgment]', {
      to: submission.email,
      from: senderEmail,
      replyTo: receiverEmail,
      subject: respondentEmail.subject,
    })
    return {
      success: true,
      simulated: true,
    }
  }

  // Send Email 1: Notification to Agri Experience team
  await transporter.sendMail({
    from: senderEmail,
    to: receiverEmail,
    replyTo: `"${submission.name}" <${submission.email}>`,
    subject: teamEmail.subject,
    text: teamEmail.text,
    html: teamEmail.html,
  })

  // Send Email 2: Automated acknowledgment to respondent
  await transporter.sendMail({
    from: senderEmail,
    to: `"${submission.name}" <${submission.email}>`,
    replyTo: receiverEmail,
    subject: respondentEmail.subject,
    text: respondentEmail.text,
    html: respondentEmail.html,
  })

  return {
    success: true,
    simulated: false,
  }
}
