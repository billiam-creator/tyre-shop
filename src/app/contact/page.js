'use client'

import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SIDE — Contact Info */}
        <div className="flex flex-col justify-center space-y-8">

          {/* Header */}
          <div>
            <h1 className="text-4xl font-black text-white uppercase italic tracking-tighter leading-none">
              Get <span className="text-orange-500">In Touch</span>
            </h1>
            <div className="h-1 w-8 bg-orange-500 mt-3"></div>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Need a tyre or battery? Reach out and we will get back to you fast.
              Serving all of Nairobi — pay on delivery.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                <HiPhone className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Phone</p>
                <p className="text-white font-semibold">+254 116 73345</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                <HiMail className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Email</p>
                <p className="text-white font-semibold">info@nairobilyres.co.ke</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                <HiLocationMarker className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Location</p>
                <p className="text-white font-semibold">Nairobi, Kenya</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Button - FIXED: Added the opening <a> tag */}
          <a
            href="https://wa.me/254116733450"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-4 rounded-xl transition-all active:scale-[0.97] w-fit"
          >
            <FaWhatsapp className="w-6 h-6" />
            <div>
              <p className="text-xs uppercase tracking-widest">Chat With Us</p>
              <p className="text-[10px] text-green-200 font-normal">Usually replies within minutes</p>
            </div>
          </a>
        </div>

        {/* RIGHT SIDE — Form */}
        <div className="bg-[#0d0d0d] border border-gray-800 rounded-xl p-8 shadow-2xl">
          <form className="space-y-5">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-[#161616] border border-gray-800 text-white text-sm px-3 py-2.5 rounded focus:outline-none focus:border-orange-500 transition-colors placeholder:text-gray-700"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Phone</label>
              <input
                type="tel"
                placeholder="+254 7XX XXX XXX"
                className="w-full bg-[#161616] border border-gray-800 text-white text-sm px-3 py-2.5 rounded focus:outline-none focus:border-orange-500 transition-colors placeholder:text-gray-700"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full bg-[#161616] border border-gray-800 text-white text-sm px-3 py-2.5 rounded focus:outline-none focus:border-orange-500 transition-colors placeholder:text-gray-700"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us what tyre size or brand you need..."
                className="w-full bg-[#161616] border border-gray-800 text-white text-sm px-3 py-2.5 rounded focus:outline-none focus:border-orange-500 transition-colors placeholder:text-gray-700 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase py-3 rounded transition-all active:scale-[0.97] tracking-widest"
            >
              Send Inquiry
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default ContactPage