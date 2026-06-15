'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, X } from 'lucide-react'
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog'

interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  organization: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'Partnering with Agri Experience to assist to grow the Kenyan seed industry made my work ever so enriching as it brought on board global and regional perspectives with which to benchmark our reform initiatives. Our partnership and collaboration with Agri Experience has been instrumental in enabling review of seed regulations meant to facilitate the growth and development of the Kenyan seed industry. The wealth of experience and the ability to link actors across the seed industry spectrum is one strength on which Agri Experience stands out.',
    author: 'David Ombalo Otieno',
    role: 'Principal Agricultural Officer',
    organization: 'Kenya Ministry of Agriculture, Livestock and Fisheries (Agricultural Policy Research and Regulation)',
    image: '🌾',
  },
  {
    id: 2,
    quote:
      'The Agri Experience team has a passion for agricultural development matched by decades of professional experience. Their commitment to delivering top quality work on every project makes them a joy to work with.',
    author: 'Dr. Edward Mabaya',
    role: 'Principal Investigator, The African Seed Access Index (TASAI)',
    organization: 'Cornell University',
    image: '🌱',
  },
  {
    id: 3,
    quote:
      'The partnership with Agri Experience has been a very valuable one. Through quality interactive teaching for about a decade, an experienced practitioner at Agri Experience has equipped multiple cohorts of our PhD students in plant breeding with knowledge and skills in seed business management. Our fruitful collaboration with Agri Experience has allowed the majority of our graduates, in partnerships with the private sector, to release improved varieties of staple crops soon after graduation. This has given credence to our philosophy of training African plant breeders on African crops, in Africa, for Africa, for maximum impact on agricultural productivity.',
    author: 'Eric Danquah, PhD',
    role: 'Professor and Founding Director',
    organization: 'WACCI, University of Ghana',
    image: '🌻',
  },
  {
    id: 4,
      quote:
      'Agri Experience has made great strides working with partners to revolutionize the Kenyan seed sector. With experienced, motivated and skilled staff, Agri Experience has supported innovative approaches such as the use of scratch-off labels to mark seed packets, thus ensuring traceability, and farmer use of appropriate and authentic seed. There is now better coordination in the seed sector through the Seed Trade Association of Kenya, better working relationships with the regulatory body and the government, and more space to operate for the private sector seed companies - a great achievement!',
    author: 'Ali Hassan Mohammed',
    role: 'Portfolio Director',
    organization: 'Kenya Markets Trust',
    image: '🌾',
  },
  {
    id: 5,
    quote:
      'Agri Experience is always miles ahead in being innovative. Many participants during our seed company meeting were swept off their feet when Agri Experience walked everyone through their work showing how, by the click of a button, a farmer in any part of Kenya can know the top recommended crop varieties for their ecology, the latest varieties, and special traits of varieties. We hope they can extend similar services to many more countries.',
    author: 'Dr. George Bigirwa',
    role: 'Head of Seed Research and Systems Development',
    organization: 'Alliance for a Green Revolution in Africa',
    image: '🌱',
  },
]

export default function TestimonialModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded font-semibold hover:shadow-lg transition duration-200"
      >
        <Quote size={20} />
        Read Client Stories
      </motion.button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl border-mint p-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-to-br from-mint via-cream to-white p-8 md:p-12"
            >
              {/* Close Button */}
              <DialogClose className="absolute top-4 right-4 p-2 hover:bg-white rounded-lg transition-colors z-50">
                <X size={20} className="text-dark-green" />
              </DialogClose>

              {/* Decorative Quote Icon */}
              <div className="absolute top-8 left-8 opacity-10">
                <Quote size={60} className="text-primary" />
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-6">
                {/* Quote */}
                <motion.blockquote
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="text-2xl md:text-3xl font-serif font-bold text-dark-green leading-relaxed"
                >
                  &ldquo;{current.quote}&rdquo;
                </motion.blockquote>

                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="flex items-start gap-4 pt-6 border-t-2 border-primary/20"
                >
                  <div className="text-5xl">{current.image}</div>
                  <div>
                    <p className="font-bold text-lg text-dark-green">{current.author}</p>
                    <p className="text-primary font-semibold">{current.role}</p>
                    <p className="text-dark-blue-gray text-sm">{current.organization}</p>
                  </div>
                </motion.div>

                {/* Navigation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="flex items-center justify-between pt-6"
                >
                  <div className="flex gap-2">
                    <button
                      onClick={prev}
                      className="p-3 rounded bg-white border-2 border-primary text-primary hover:bg-primary/10 transition duration-200"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={next}
                      className="p-3 rounded bg-white border-2 border-primary text-primary hover:bg-primary/10 transition duration-200"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  {/* Indicators */}
                  <div className="flex gap-2">
                    {testimonials.map((_, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        whileHover={{ scale: 1.2 }}
                        className={`h-2 rounded-full transition duration-200 ${
                          idx === currentIndex
                            ? 'w-8 bg-primary'
                            : 'w-2 bg-primary/30 hover:bg-primary/50'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Counter */}
                  <div className="text-sm font-semibold text-dark-blue-gray">
                    {currentIndex + 1} / {testimonials.length}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </>
  )
}

