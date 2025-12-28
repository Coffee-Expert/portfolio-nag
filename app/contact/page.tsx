"use client"

import type React from "react"

import { useState } from "react"
import { Send, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
    budget: "",
    timeline: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const resetForm = () => {
    setSubmitted(false)
    setFormData({
      name: "",
      email: "",
      projectType: "",
      message: "",
      budget: "",
      timeline: "",
    })
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#1a0b2e] via-[#160b2b] to-[#0f0520]">
        <div className="relative w-full max-w-2xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12">
          <div className="text-center space-y-6">
            <div className="text-6xl">✨</div>
            <h2 className="text-3xl font-light text-white">Thank You!</h2>
            <p className="text-white/70 text-lg">
              Your message has been received. I'll get back to you within 24-48 hours!
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                onClick={resetForm}
                className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white"
              >
                Send Another Message
              </Button>
              <Link href="/">
                <Button className="bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/30 text-white">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#1a0b2e] via-[#160b2b] to-[#0f0520]">
      <div className="w-full max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-3">Let's Talk</h1>
            <p className="text-white/60">Tell me about your project and let's create something beautiful together</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-purple-400/50 focus:bg-white/10 focus:outline-none transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-purple-400/50 focus:bg-white/10 focus:outline-none transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Project Type */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Project Type</label>
                <select
                  required
                  value={formData.projectType}
                  onChange={(e) => handleInputChange("projectType", e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-purple-400/50 focus:bg-white/10 focus:outline-none transition-all duration-300"
                >
                  <option value="" className="bg-[#1a0b2e]">
                    Select a project type
                  </option>
                  <option value="branding" className="bg-[#1a0b2e]">
                    Branding & Identity
                  </option>
                  <option value="print" className="bg-[#1a0b2e]">
                    Print Design
                  </option>
                  <option value="digital" className="bg-[#1a0b2e]">
                    Digital Design
                  </option>
                  <option value="illustration" className="bg-[#1a0b2e]">
                    Illustration
                  </option>
                  <option value="other" className="bg-[#1a0b2e]">
                    Other
                  </option>
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Timeline</label>
                <input
                  type="text"
                  value={formData.timeline}
                  onChange={(e) => handleInputChange("timeline", e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-purple-400/50 focus:bg-white/10 focus:outline-none transition-all duration-300"
                  placeholder="e.g., 2-3 weeks"
                />
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Budget Range (Optional)</label>
              <input
                type="text"
                value={formData.budget}
                onChange={(e) => handleInputChange("budget", e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-purple-400/50 focus:bg-white/10 focus:outline-none transition-all duration-300"
                placeholder="e.g., $500 - $1000"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Project Details</label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-purple-400/50 focus:bg-white/10 focus:outline-none transition-all duration-300 resize-none"
                placeholder="Tell me about your project, goals, and any specific requirements..."
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/30 hover:border-purple-400/50 text-white transition-all duration-300 py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white mr-2" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
