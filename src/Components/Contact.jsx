import React, { useState, useRef } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')

    // Using EmailJS — replace with your own service/template/publicKey
    // Sign up free at emailjs.com, set SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch(err) {
      setStatus('error')
    }
  }

  const contacts = [
    { icon: <FaEnvelope />, label: "Email", value: "sachiinprajapatii@gmail.com", href: "mailto:sachin@example.com", color: "bg-red-50 text-red-500" },
    { icon: <FaLinkedin />, label: "LinkedIn", value: "sachiin-prajapatii", href: "https://www.linkedin.com/in/sachiin-prajapatii", color: "bg-blue-50 text-blue-600" },
    { icon: <FaGithub />, label: "GitHub", value: "sachiinprajapatii1", href: "https://github.com/sachiinprajapatii1", color: "bg-gray-100 text-gray-700" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Greater Noida, India", href: null, color: "bg-green-50 text-green-600" },
  ]

  return (
    <section id="contact" className="py-20 px-8 bg-white">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-blue-600 font-medium text-sm uppercase tracking-widest mb-2">Get in touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Contact Me</h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mt-4"></div>
          <p className="text-gray-500 mt-4 max-w-md mx-auto text-sm">Have a project idea or want to collaborate? I'd love to hear from you. Let's build something great together!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left: Info */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">Let's talk</h3>
            <div className="space-y-4 mb-8">
              {contacts.map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.color} text-sm flex-shrink-0`}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-gray-700 font-semibold text-sm hover:text-blue-600 transition">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 font-semibold text-sm">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl text-white">
              <p className="font-bold text-lg mb-1">Open to opportunities</p>
              <p className="text-blue-100 text-sm">Currently available for freelance projects, internships, and full-time roles.</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available now</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:border-blue-500 transition bg-gray-50 hover:bg-white ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:border-blue-500 transition bg-gray-50 hover:bg-white ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition bg-gray-50 hover:bg-white"
              />

              <div>
                <textarea
                  name="message"
                  placeholder="Your message *"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:border-blue-500 transition bg-gray-50 hover:bg-white resize-none ${errors.message ? 'border-red-400' : 'border-gray-200'}`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <><FaPaperPlane size={14} /> Send Message</>
                )}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium text-center">
                  ✅ Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium text-center">
                  ❌ Something went wrong. Please try again.
                </div>
              )}

              <p className="text-xs text-gray-400 text-center">
                
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact