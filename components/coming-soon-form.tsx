"use client"

import { useState } from "react"
import { User, Mail, Phone, MapPin, CheckCircle } from "lucide-react"
import { toast } from "sonner"

export function ComingSoonForm() {
  const [submitted, setSubmitted] = useState(false)
  const [fading, setFading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
  })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxcdRa6jRkA6bmcFL6YlLi9GJvOtLNZ3lxC6P_nIQOoD1uxgNSeO8NC-wPmXdy9zIHz/exec", {
        method: "POST",
        body: new URLSearchParams({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          location: formData.city,
        }),
      })

      toast.success("Thank you for signing up!")
      setFading(true)
      setTimeout(() => {
        setSubmitted(true)
        setFading(false)
        setLoading(false)
      }, 300)
    } catch (error) {
      console.error("Submission error:", error)
      toast.error("An error occurred. Please try again.")
      setLoading(false)
    }
  }

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function resetForm() {
    setFading(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        city: "",
      })
      setFading(false)
    }, 300)
  }

  if (submitted) {
    return (
      <div
        className={`bg-card/80 backdrop-blur-md p-8 md:p-12 rounded-[2rem] md:rounded-3xl border border-mustard/20 shadow-xl text-center space-y-5 md:space-y-6 transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100 animate-fade-in-up"}`}
      >
        <div className="w-14 h-14 md:w-16 md:h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-600 mb-2 md:mb-4">
          <CheckCircle className="w-6 h-6 md:w-7 md:h-7" />
        </div>
        <h3 className="text-xl md:text-2xl font-serif font-medium text-brown-dark tracking-tight">
          With Love & Gratitude
        </h3>
        <p className="text-[0.95rem] md:text-sm font-semibold text-chilli tracking-wide uppercase">
          YOUR PLACE IN OUR KITCHEN IS RESERVED
        </p>
        <p className="text-[0.95rem] md:text-sm text-brown-light leading-relaxed max-w-sm mx-auto">
          Thank you for believing in us. Your name has been written on our kitchen wall,the sacred place where every order begins.
        </p>
        <p className="text-[0.95rem] md:text-sm text-brown-light leading-relaxed max-w-sm mx-auto">
          We're perfecting each batch with the same care Maa put into hers. Soon, a jar of warmth, tradition, and homemade love will find its way to your table.
        </p>
        <button
          onClick={resetForm}
          className="mt-4 text-[11px] md:text-xs font-medium text-terracotta-dark hover:text-chilli transition-colors border-b border-transparent hover:border-chilli pb-0.5"
        >
          Return to Form
        </button>
      </div>
    )
  }

  return (
    <div
      className={`bg-card/80 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-3xl border border-mustard/20 shadow-[0_20px_40px_rgba(69,26,3,0.05)] md:shadow-[0_30px_60px_rgba(69,26,3,0.05)] transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`}
    >
      <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-[11px] md:text-xs font-medium text-brown-dark mb-1.5 md:mb-2 ml-1">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brown-light/50">
              <User className="w-4 h-4 md:w-[18px] md:h-[18px]" />
            </div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full bg-base/50 border border-mustard/20 text-brown-dark text-[0.95rem] md:text-sm rounded-2xl pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/50 transition-all placeholder:text-brown-light/40"
              placeholder="Aarav Sharma"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          <div>
            <label className="block text-[11px] md:text-xs font-medium text-brown-dark mb-1.5 md:mb-2 ml-1">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brown-light/50">
                <Mail className="w-4 h-4 md:w-[18px] md:h-[18px]" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-base/50 border border-mustard/20 text-brown-dark text-[0.95rem] md:text-sm rounded-2xl pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/50 transition-all placeholder:text-brown-light/40"
                placeholder="hello@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-[11px] md:text-xs font-medium text-brown-dark mb-1.5 md:mb-2 ml-1">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brown-light/50">
                <Phone className="w-4 h-4 md:w-[18px] md:h-[18px]" />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-base/50 border border-mustard/20 text-brown-dark text-[0.95rem] md:text-sm rounded-2xl pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/50 transition-all placeholder:text-brown-light/40"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>
        </div>

        {/* Delivery City */}
        <div>
          <label className="block text-[11px] md:text-xs font-medium text-brown-dark mb-1.5 md:mb-2 ml-1">
            Delivery City / Area
          </label>
          <div className="relative">
            <div className="absolute top-[14px] md:top-4 left-0 pl-4 flex items-start pointer-events-none text-brown-light/50">
              <MapPin className="w-4 h-4 md:w-[18px] md:h-[18px]" />
            </div>
            <textarea
              rows={2}
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="w-full bg-base/50 border border-mustard/20 text-brown-dark text-[0.95rem] md:text-sm rounded-2xl pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/50 transition-all placeholder:text-brown-light/40 resize-none"
              placeholder="Where should we send the love?"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-mustard-dark text-primary-foreground py-3.5 md:py-4 rounded-2xl text-[0.95rem] md:text-sm font-medium tracking-wide hover:bg-mustard-deep hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : "Notify Me When It's Ready"}
        </button>
      </form>
    </div>
  )
}
