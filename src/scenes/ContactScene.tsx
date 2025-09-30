"use client"
import { useState } from "react"

export default function ContactScene() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '' // Hidden field to catch bots
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const { name, email, message, honeypot } = formData
    
    // Check honeypot (should be empty)
    if (honeypot) {
      return false
    }
    
    // Basic validation
    if (!name.trim() || name.length < 2) {
      alert('Please enter a valid name (at least 2 characters)')
      return false
    }
    
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address')
      return false
    }
    
    if (!message.trim() || message.length < 10) {
      alert('Please enter a message (at least 10 characters)')
      return false
    }
    
    // Check for suspicious patterns
    const suspiciousPatterns = [
      /http[s]?:\/\//i,
      /www\./i,
      /\.com/i,
      /\.net/i,
      /\.org/i,
      /click here/i,
      /buy now/i,
      /free money/i,
      /viagra/i,
      /casino/i
    ]
    
    const fullText = `${name} ${email} ${message}`.toLowerCase()
    for (const pattern of suspiciousPatterns) {
      if (pattern.test(fullText)) {
        alert('Your message contains suspicious content. Please try again.')
        return false
      }
    }
    
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isSubmitting) return
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    // Add a small delay to prevent rapid submissions
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const { name, email, message } = formData
    const subject = `DJ Booking Inquiry from ${name}`
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    const mailtoLink = `mailto:tangs.email@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoLink, '_blank')
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      message: '',
      honeypot: ''
    })
    
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  
  return (
    <section className="h-dvh w-dvw grid place-items-center p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <h2 className="text-4xl font-boldonse rgb-split">Booking</h2>
        
        {/* Honeypot field - hidden from users but visible to bots */}
        <input 
          name="honeypot"
          type="text"
          value={formData.honeypot}
          onChange={handleChange}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />
        
        <input 
          name="name"
          placeholder="Name" 
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-black/50 border border-white/20 rounded p-3 text-white"
          required
          minLength={2}
        />
        <input 
          name="email"
          type="email"
          placeholder="Email" 
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-black/50 border border-white/20 rounded p-3 text-white"
          required
        />
        <textarea 
          name="message"
          placeholder="Message" 
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-black/50 border border-white/20 rounded p-3 h-32 text-white"
          required
          minLength={10}
        />
        <button 
          type="submit"
          disabled={isSubmitting}
          className="bg-white/10 hover:bg-white/20 border border-white/30 rounded px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </section>
  )
}
