import Image from 'next/image'
import Link from 'next/link'
import Button from './components/Button'

export default function Home() {
  return (
    <main className="relative h-screen w-full flex flex-col overflow-hidden text-white">

      {/* Background Image */}
      <Image
        src="/tyre_image2.jpg"
        alt="Background"
        fill
        className="object-cover -z-20"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent -z-10" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-start pt-28 px-10 md:px-24">
        <div className="max-w-2xl space-y-3">

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
            <Link href="/tyres">
              <Button text="SHOP ALL TYRES" variant="solid" />
            </Link>
            <Link href="/tyres">
              <Button text="FIND YOUR TYRE SIZE" variant="outline" />
            </Link>
          </div>

          {/* Tyre Finder */}
          <div className="w-full max-w-lg bg-black/40 backdrop-blur-md p-5 rounded-xl border border-white/10 shadow-2xl">
            <p className="text-[10px] font-bold text-gray-400 mb-3 tracking-[0.2em] uppercase">
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
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded text-[10px] tracking-widest uppercase">
                FIND
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}