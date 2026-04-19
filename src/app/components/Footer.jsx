import Link from "next/link"
import { FaFacebook } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { LuInstagram } from "react-icons/lu"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Tyres", href: "/tyres" },
  { label: "Batteries", href: "/batteries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-neutral-100 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-orange-500 mb-4">
              Nairobi Tyres
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-6">
              Premium performance and safety for your vehicle. Top-tier tyres
              and batteries delivered across Nairobi — pay on delivery.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <Link href="/" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                <LuInstagram className="w-5 h-5" />
              </Link>
              <Link href="/" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                <FaXTwitter className="w-5 h-5" />
              </Link>
              <Link href="/" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                <FaFacebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-orange-500 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-orange-500 mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p><span className="text-white font-semibold">Phone:</span> +254 116 73345</p>
              <p><span className="text-white font-semibold">Email:</span> info@nairobilyres.co.ke</p>
              <p><span className="text-white font-semibold">Location:</span> Nairobi, Kenya</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Nairobi Tyres. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer