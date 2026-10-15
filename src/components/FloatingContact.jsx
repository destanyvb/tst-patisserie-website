import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function FloatingContact() {
  return (
    <motion.a
      href="tel:+27217864200"
      aria-label="Call The Sweetest Thing Patisserie on 021 786 4200"
      title="Call us: 021 786 4200"
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 22 }}
    >
      {/* Pulse ring */}
      <span className="absolute inline-flex w-14 h-14 rounded-full opacity-30 animate-ping"
        style={{ background: '#2C2015' }} />

      {/* Button */}
      <motion.span
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-shadow hover:shadow-2xl cursor-pointer"
        style={{ background: '#2C2015' }}
      >
        <Phone size={22} strokeWidth={1.8} color="#FFFEF9" />
      </motion.span>

      {/* Tooltip label — appears on hover, left of the button */}
      <span className="absolute right-16 whitespace-nowrap font-body text-xs font-semibold text-espresso bg-cream border border-border rounded-full px-3 py-1.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        021 786 4200
      </span>
    </motion.a>
  )
}
