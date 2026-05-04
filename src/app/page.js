'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { HiChevronDown } from 'react-icons/hi'
import Button from './components/Button'
import TyreCard from './components/TyreCard'
import FeatureCard from './components/FeatureCard'
import StatsBar from './components/StatsBar'
import { ShieldCheck, Truck, Wrench, Tag, Wallet, Headset, Users, Disc, Star, MapPin } from 'lucide-react'

const featuredTyres = [
  { brand: 'Michelin', model: 'Pilot Sport 5', price: '24,500', image: '/michelin.jpg', tag: 'Best Seller' },
  { brand: 'Goodyear', model: 'Eagle F1 Asymmetric 6', price: '19,800', image: '/goodyear.jpg', tag: 'High Grip' },
  { brand: 'Continental', model: 'SportContact 7', price: '31,000', image: '/sportcontact.jpg', tag: 'Premium' },
  { brand: 'Pirelli', model: 'P Zero PZ4', price: '28,900', image: '/pirelli.jpg', tag: 'Sport' },
]

const categories = ['All', 'High Performance', 'SUV / 4X4', 'Eco & Touring']

const featureCardsData = [
  { heading: 'Premium Quality Tyres', description: 'We stock only trusted brands that deliver superior performance, safety and durability.', icon: ShieldCheck },
  { heading: 'Fast Delivery', description: 'Quick and reliable delivery in Nairobi. Get your tyres when you need them.', icon: Truck },
  { heading: 'Expert Fitting', description: 'Professional fitting by experienced technicians using advanced equipment.', icon: Wrench },
  { heading: 'Competitive Pricing', description: 'Top quality tyres at the best prices. No hidden fees, just great value.', icon: Tag },
  { heading: 'Pay On Delivery', description: "Pay when your tyres are delivered and you're satisfied. Safe, simple, and convenient.", icon: Wallet, isActive: true, tag:'CASH ON DELIVERY' },
  { heading: '24/7 Customer Support', description: 'Our team is always ready to help you choose the right tyres and answer any questions.', icon: Headset },
]

const statsData = [
  { label: 'Happy Customers', value: '500+', icon: Users },
  { label: 'Tyres Sold', value: '1000+', icon: Disc },
  { label: 'Customer Rating', value: '4.8', icon: Star },
  { label: 'Proudly Serving', value: 'Nairobi', icon: MapPin },
]

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <main className="relative w-full text-white">

      {/* Background Image */}
      <Image
        src="/tyre_image2.jpg"
        alt="Background"
        fill
        className="object-cover -z-20"
        priority
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent -z-10" />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/25411673345"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-900/40 transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>

      {/* ---- SECTION 1 — HERO ---- */}
      <section className="snap-section relative flex flex-col justify-center px-10 md:px-24">
        <div className="max-w-2xl space-y-4 pt-20">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold px-4 py-1.5 rounded-full">
            <span>🇰🇪</span>
            <span>Nairobi&apos;s #1 Tyre Broker</span>
          </div>

          {/* Heading */}
          <div className="space-y-1">
            <h1 className="text-4xl md:text-5xl font-black leading-[1.1] uppercase tracking-tighter">
              Dominate the Road <br /> With Confidence
            </h1>
            <p className="text-lg md:text-xl font-semibold opacity-90 text-orange-500">
              Performance, Safety, and Style for Every Drive.
            </p>
          </div>

          {/* Subtext */}
          <p className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed">
            Explore our curated collection of premium tyres for passenger
            vehicles, SUVs, and performance cars. Delivered to you in Nairobi —
            pay on delivery.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <Link href="/tyres"><Button text="SHOP ALL TYRES" variant="solid" /></Link>
            <Link href="/tyres"><Button text="FIND YOUR TYRE SIZE" variant="outline" /></Link>
          </div>

          {/* Tyre Finder */}
          <div className="w-full max-w-lg bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl">
            <p className="text-[10px] font-bold text-gray-400 mb-2 tracking-[0.2em] uppercase">
              Start Your Tyre Finder
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Car Make"
                className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white outline-none focus:ring-1 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Car Model"
                className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white outline-none focus:ring-1 focus:ring-orange-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded text-[10px] tracking-widest uppercase transition-colors">
                FIND
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap gap-5">
            <div className="flex items-center gap-2">
              <span className="text-orange-500 font-black text-lg">500+</span>
              <span className="text-gray-400 text-xs uppercase tracking-widest">Tyre Brands</span>
            </div>
            <div className="w-px bg-gray-700 self-stretch" />
            <div className="flex items-center gap-2">
              <span className="text-orange-500 font-black text-lg">24hr</span>
              <span className="text-gray-400 text-xs uppercase tracking-widest">Delivery</span>
            </div>
            <div className="w-px bg-gray-700 self-stretch" />
            <div className="flex items-center gap-2">
              <span className="text-orange-500 font-black text-lg">100%</span>
              <span className="text-gray-400 text-xs uppercase tracking-widest">Pay On Delivery</span>
            </div>
            <div className="w-px bg-gray-700 self-stretch" />
            <div className="flex items-center gap-2">
              <span className="text-orange-500 font-black text-lg">🇰🇪</span>
              <span className="text-gray-400 text-xs uppercase tracking-widest">Nairobi Wide</span>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <HiChevronDown className="w-5 h-5" />
        </div>

      </section>

      {/*--------- SECTION 2 — FEATURED TYRES -------- */}
      <section className="snap-section flex flex-col justify-center px-10 md:px-24 py-20 bg-black/70 backdrop-blur-sm">

        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-orange-500 text-xs uppercase tracking-[0.3em] font-bold mb-1">Hand Picked For You</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
            Our Top Picks For The Road
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto text-sm">
            High-performance and reliable tyres, vetted by our experts in Nairobi.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-3 justify-center flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat
                  ? 'bg-orange-500 text-white'
                  : 'border border-white/20 text-gray-400 hover:border-orange-500 hover:text-orange-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tyre Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto w-full">
          {featuredTyres.map((tyre, index) => (
            <TyreCard
              key={index}
              brand={tyre.brand}
              model={tyre.model}
              price={tyre.price}
              image={tyre.image}
              tag={tyre.tag}
            />
          ))}
        </div>

        {/* See All */}
        <div className="flex justify-center mt-8">
          <Link
            href="/tyres"
            className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold text-xs uppercase px-8 py-3 rounded-full transition-all tracking-widest"
          >
            See All Tyres
          </Link>
        </div>

      </section>

      {/* --------SECTION 3 — WHY CHOOSE US + STATS ------*/}
      <section className="snap-section flex flex-col justify-center px-10 md:px-24 py-20 bg-black/80 backdrop-blur-sm">

        {/* Badge */}
        <div className="flex justify-center mb-3">
          <span className="border border-orange-500 text-orange-500 rounded-full py-1 px-5 text-[10px] font-bold uppercase tracking-widest">
            Why Choose Us
          </span>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black leading-tight uppercase tracking-tighter">
            Built For Performance.<br />
            Chosen For <span className="text-orange-500">Trust.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm mt-2">
            We make buying tyres simple, reliable, and worry-free.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto w-full">
          {featureCardsData.map((item, index) => (
            <FeatureCard
              key={index}
              heading={item.heading}
              description={item.description}
              icon={item.icon}
              isActive={item.isActive}
              tag={item.tag}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-7xl mx-auto w-full mt-4">
          {statsData.map((item, index) => (
            <StatsBar
              key={index}
              label={item.label}
              value={item.value}
              icon={item.icon}
            />
          ))}
        </div>

      </section>

    </main>
  )
}