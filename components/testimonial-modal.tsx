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
      'Agri Experience transformed our seed sector approach. Their expertise in value chain integration helped us reach 50,000 farmers within the first year.',
    author: 'Dr. Sarah Mwangi',
    role: 'Director',
    organization: 'African Seed Consortium',
    image: '🌾',
  },
  {
    id: 2,
    quote:
      'Their consultancy services are unparalleled. The team brought deep knowledge of regional markets and practical solutions that actually work.',
    author: 'James Kipchoge',
    role: 'Agricultural Manager',
    organization: 'East Africa Farmers Alliance',
    image: '🌱',
  },
  {
    id: 3,
    quote:
      'Working with Agri Experience elevated our entire seed production system. Their strategic guidance and on-ground support were instrumental to our success.',
    author: 'Grace Okonkwo',
    role: 'CEO',
    organization: 'West Africa Seeds Ltd',
    image: '🌻',
  },
  {
    id: 4,
    quote:
      'The team&apos;s understanding of African agricultural contexts is exceptional. They don&apos;t just provide reports—they build lasting partnerships.',
    author: 'Prof. David Kabir',
    role: 'Head of Agricultural Development',
    organization: 'Sahel Innovations',
    image: '🌾',
  },
  {
    id: 5,
    quote:
      'Our organization gained invaluable insights from their training programs. The capacity building approach was culturally sensitive and highly effective.',
    author: 'Amara Diallo',
    role: 'Program Director',
    organization: 'Farmer Empowerment Network',
    image: '🌻',
  },
  {
    id: 6,
    quote:
      'Agri Experience helped us navigate complex regulatory landscapes across multiple countries. Their network and expertise are truly unique.',
    author: 'Mohamed Hassan',
    role: 'Operations Director',
    organization: 'East Africa Seeds Initiative',
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
        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
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
                  "{current.quote}"
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
                      className="p-3 rounded-full bg-white border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={next}
                      className="p-3 rounded-full bg-white border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300"
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
                        className={`h-2 rounded-full transition-all duration-300 ${
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
