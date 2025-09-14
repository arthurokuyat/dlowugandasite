"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  ShoppingCart,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Users,
  Truck,
  Shield,
  Star,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Header becomes smaller after scrolling 100px
      setIsScrolled(currentScrollY > 100)

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsHeaderVisible(false)
      } else {
        setIsHeaderVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadAPK = () => {
    // Firebase download URL for the APK
    const apkUrl =
      "https://firebasestorage.googleapis.com/v0/b/d-low-331b1.appspot.com/o/downloads%2FDlow-release%20%283%29.apk?alt=media&token=53844918-a9d2-474e-8120-70111fdfcebe"

    // Create a temporary link element to trigger download
    const link = document.createElement("a")
    link.href = apkUrl
    link.download = "dlow-uganda.apk"
    link.target = "_blank" // Open in new tab for better compatibility
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <div className="min-h-screen font-sans">
      {/* Dynamic Header Section */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-[#0e053b] text-white transition-all duration-300 ease-in-out ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled ? "py-1 md:py-2 shadow-lg backdrop-blur-md bg-[#0e053b]/95" : "py-2 md:py-4"}`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/images/dlow-logo.png"
              alt="Dlow Uganda Logo"
              width={540}
              height={225}
              className={`w-auto transition-all duration-300 ${
                isScrolled ? "h-8 sm:h-10 md:h-12 lg:h-14" : "h-12 sm:h-16 md:h-20 lg:h-24 xl:h-32"
              }`}
              priority
            />
          </div>
          <nav className="hidden lg:flex space-x-4 xl:space-x-6">
            <Link
              href="#home"
              className={`hover:text-[#f89c1c] transition-colors ${isScrolled ? "text-sm" : "text-sm xl:text-base"}`}
            >
              Home
            </Link>
            <Link
              href="#about"
              className={`hover:text-[#f89c1c] transition-colors ${isScrolled ? "text-sm" : "text-sm xl:text-base"}`}
            >
              About
            </Link>
            <Link
              href="#features"
              className={`hover:text-[#f89c1c] transition-colors ${isScrolled ? "text-sm" : "text-sm xl:text-base"}`}
            >
              Features
            </Link>
            <Link
              href="#contact"
              className={`hover:text-[#f89c1c] transition-colors ${isScrolled ? "text-sm" : "text-sm xl:text-base"}`}
            >
              Contact
            </Link>
          </nav>
          <Button variant="ghost" className="lg:hidden text-white p-1 md:p-2" onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={isScrolled ? "20" : "24"}
              height={isScrolled ? "20" : "24"}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-300"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={closeMobileMenu} />

          {/* Drawer */}
          <div
            className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#0e053b] text-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/20 flex-shrink-0">
                <div className="flex items-center">
                  <Image
                    src="/images/dlow-logo.png"
                    alt="Dlow Uganda Logo"
                    width={540}
                    height={225}
                    className="h-8 w-auto"
                    priority
                  />
                </div>
                <Button variant="ghost" size="sm" onClick={closeMobileMenu} className="text-white p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 6-12 12" />
                    <path d="m6 6 12 12" />
                  </svg>
                </Button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto">
                {/* Navigation Links */}
                <nav className="px-4 py-6">
                  <div className="space-y-4">
                    <Link
                      href="#home"
                      className="block py-3 px-4 text-lg font-medium hover:text-[#f89c1c] hover:bg-white/10 rounded-lg transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      🏠 Home
                    </Link>
                    <Link
                      href="#about"
                      className="block py-3 px-4 text-lg font-medium hover:text-[#f89c1c] hover:bg-white/10 rounded-lg transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      ℹ️ About
                    </Link>
                    <Link
                      href="#features"
                      className="block py-3 px-4 text-lg font-medium hover:text-[#f89c1c] hover:bg-white/10 rounded-lg transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      ⚡ Features
                    </Link>
                    <Link
                      href="#contact"
                      className="block py-3 px-4 text-lg font-medium hover:text-[#f89c1c] hover:bg-white/10 rounded-lg transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      📞 Contact
                    </Link>
                  </div>

                  {/* Download App Section */}
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-[#f89c1c] mb-2">📱 Get the App</h3>
                      <p className="text-sm text-white/80 mb-4">
                        Download Dlow Uganda now and start discovering amazing deals near you!
                      </p>
                    </div>
                    <Button
                      onClick={() => {
                        downloadAPK()
                        closeMobileMenu()
                      }}
                      className="w-full bg-[#f89c1c] hover:bg-[#e08a10] text-white rounded-xl py-3 text-base font-medium transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Download size={20} />
                      Download Now
                    </Button>
                  </div>

                  {/* Retailer Section */}
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-[#f89c1c] mb-2">🏪 For Retailers</h3>
                      <p className="text-sm text-white/80 mb-4">
                        Ready to boost your sales? Download the app and start listing your products with discounts to
                        attract nearby customers instantly!
                      </p>
                      <ul className="text-xs text-white/70 space-y-1 mb-4">
                        <li>• Create your shop profile in minutes</li>
                        <li>• Upload products with attractive discounts</li>
                        <li>• Reach customers within 500m radius</li>
                        <li>• Get instant booking notifications</li>
                        <li>• Track your sales and earnings</li>
                      </ul>
                    </div>
                    <Button
                      onClick={() => {
                        downloadAPK()
                        closeMobileMenu()
                      }}
                      className="w-full bg-gradient-to-r from-[#f89c1c] to-[#e08a10] hover:from-[#e08a10] hover:to-[#d17a0f] text-white rounded-xl py-3 text-base font-medium transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Download size={20} />
                      Start Selling Now
                    </Button>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-6 pt-6 border-t border-white/20 space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail size={16} className="text-[#f89c1c]" />
                      <span>dlowuganda@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone size={16} className="text-[#f89c1c]" />
                      <span>+256750781744</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-sm text-white/70 mb-3">Follow Us</p>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.instagram.com/dlowuganda.bcs?igsh=YzljYTk1ODg3Zg=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#f89c1c] transition-colors"
                      >
                        <Instagram size={20} />
                      </a>
                      <a
                        href="https://www.facebook.com/profile.php?id=61568307423930"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#f89c1c] transition-colors"
                      >
                        <Facebook size={20} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/dlow-uganda-a3ba67374"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#f89c1c] transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>
                </nav>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-white/20 flex-shrink-0">
                <p className="text-xs text-white/70 text-center">© 2025 Dlow Uganda</p>
                <p className="text-xs text-white/70 text-center mt-1">📱 Download & Start Saving!</p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-36"></div>

      {/* Hero Section */}
      <section id="home" className="bg-[#0e053b] text-white py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-6 md:gap-8 lg:gap-16">
            <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Find Nearby Discounts. Shop Smarter with Dlow.
              </h1>
              <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto lg:mx-0">
                Dlow helps you locate real-time discounts around you and connects you with nearby retailers offering
                unbeatable deals within 500 meters.
              </p>
              <Button
                onClick={downloadAPK}
                className="bg-[#f89c1c] hover:bg-[#e08a10] text-[#0e053b] px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto lg:mx-0"
              >
                <Download size={20} />
                Download Now
              </Button>
            </div>
            <div className="w-full lg:w-1/2 relative h-48 sm:h-56 md:h-64 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-white rounded-2xl">
                {/* Header with Dlow branding */}
                <div className="bg-white p-2 md:p-3 flex items-center justify-between border-b shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#4285f4] rounded flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-700">Kampala, Uganda</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-green-600 font-medium">Live</div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Real Google Maps Background */}
                <div className="relative h-full">
                  <Image
                    src="/images/kampala-map.jpeg"
                    alt="Real Google Maps of Kampala showing Dlow coverage area"
                    fill
                    className="object-cover"
                  />

                  {/* Overlay for better marker visibility */}
                  <div className="absolute inset-0 bg-black/10"></div>

                  {/* Your Location - Animated Blue Dot (Center of map) */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-4 h-4 bg-[#4285f4] rounded-full border-2 border-white shadow-lg z-10 relative"></div>
                      <div className="absolute inset-0 w-4 h-4 bg-[#4285f4] rounded-full animate-ping opacity-30"></div>
                      <div className="absolute inset-0 w-6 h-6 bg-[#4285f4] rounded-full animate-ping opacity-20 -top-1 -left-1"></div>
                    </div>
                  </div>

                  {/* Dlow Deal Markers positioned over real locations */}

                  {/* Marker near Owino Market */}
                  <div className="absolute top-[45%] left-[35%] transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-6 h-8 bg-[#f89c1c] rounded-t-full rounded-b-none shadow-lg flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-[#f89c1c]"></div>
                    </div>
                  </div>

                  {/* Marker near Nakasero */}
                  <div className="absolute top-[25%] left-[65%] transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-6 h-8 bg-red-500 rounded-t-full rounded-b-none shadow-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">50%</span>
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-red-500"></div>
                    </div>
                  </div>

                  {/* Marker near Old Kampala */}
                  <div className="absolute top-[35%] left-[45%] transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-6 h-8 bg-green-500 rounded-t-full rounded-b-none shadow-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">30%</span>
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-green-500"></div>
                    </div>
                  </div>

                  {/* Marker near Kibuli area */}
                  <div className="absolute bottom-[25%] right-[25%] transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-6 h-8 bg-purple-500 rounded-t-full rounded-b-none shadow-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">40%</span>
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-purple-500"></div>
                    </div>
                  </div>

                  {/* Marker near Mengo area */}
                  <div className="absolute bottom-[40%] left-[30%] transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-6 h-8 bg-orange-500 rounded-t-full rounded-b-none shadow-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">25%</span>
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-orange-500"></div>
                    </div>
                  </div>

                  {/* Info Card */}
                  <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-2 md:p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-gray-600">Within 500m radius</div>
                        <div className="text-sm md:text-base font-bold text-[#0e053b]">15 active deals</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-600">Best offer</div>
                        <div className="text-sm md:text-base font-bold text-red-500">Up to 50% off</div>
                      </div>
                    </div>
                  </div>

                  {/* Map Controls */}
                  <div className="absolute top-12 right-2 flex flex-col bg-white/90 backdrop-blur-sm rounded shadow-md">
                    <button className="p-1.5 border-b border-gray-200 hover:bg-gray-50 text-gray-600 font-bold text-sm">
                      +
                    </button>
                    <button className="p-1.5 hover:bg-gray-50 text-gray-600 font-bold text-sm">−</button>
                  </div>

                  {/* Google Maps Attribution */}
                  <div className="absolute bottom-2 right-2">
                    <div className="text-xs text-gray-500 bg-white/80 px-1 rounded">Maps</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Team Section - New Brand Awareness Section */}
      <section className="bg-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 lg:gap-16">
            <div className="w-full md:w-1/3 lg:w-1/4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/dlow-team-professional.jpeg"
                  alt="Dlow Uganda professional team helping local businesses"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 lg:w-3/4 space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#f89c1c]/10 text-[#f89c1c] px-4 py-2 rounded-full text-sm font-medium">
                <Shield size={16} />
                Trusted & Professional
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e053b]">
                Your Success is Our Priority
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Our dedicated team of professionals is committed to helping local businesses thrive through our
                innovative platform. With personalized support and cutting-edge technology, we're transforming how
                customers discover deals and how retailers connect with their community.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0e053b] rounded-full flex items-center justify-center">
                    <Users className="text-[#f89c1c]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Expert Support</h4>
                    <p className="text-xs text-gray-600">Professional guidance every step</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0e053b] rounded-full flex items-center justify-center">
                    <Shield className="text-[#f89c1c]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Trusted Platform</h4>
                    <p className="text-xs text-gray-600">Secure and reliable service</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0e053b] rounded-full flex items-center justify-center">
                    <MapPin className="text-[#f89c1c]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Local Focus</h4>
                    <p className="text-xs text-gray-600">Supporting Ugandan businesses</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0e053b] rounded-full flex items-center justify-center">
                    <Star className="text-[#f89c1c]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Proven Results</h4>
                    <p className="text-xs text-gray-600">Growing success stories</p>
                  </div>
                </div>
              </div>
              <Button
                onClick={downloadAPK}
                className="bg-[#0e053b] hover:bg-[#1a1060] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Download size={20} />
                Join Our Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-[#0e053b]">
              See Dlow in Action
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the key features of Dlow Uganda through these app screenshots and see how easy it is to find
              deals, connect with retailers, and save money.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Screenshot 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-[#0e053b] to-[#1a1060]">
                <Image
                  src="/images/app-screenshot-1.png"
                  alt="Explore listings and discounts"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-[#f89c1c] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-[#0e053b]">Explore Deals</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Browse through available discounts and special offers in your area with our intuitive marketplace
                  interface.
                </p>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-[#0e053b] to-[#1a1060]">
                <Image
                  src="/images/app-screenshot-2.png"
                  alt="Add to cart, book or request delivery"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-[#f89c1c] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-[#0e053b]">Book & Order</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Easily add items to cart, book products, or request delivery with just a few taps.
                </p>
              </div>
            </div>

            {/* Screenshot 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-[#0e053b] to-[#1a1060]">
                <Image
                  src="/images/app-screenshot-3.png"
                  alt="Get seller details instantly"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-[#f89c1c] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-[#0e053b]">Connect with Sellers</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Get instant access to seller information, contact details, and business locations.
                </p>
              </div>
            </div>

            {/* Screenshot 4 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-[#0e053b] to-[#1a1060]">
                <Image
                  src="/images/app-screenshot-4.png"
                  alt="Run an online business"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-[#f89c1c] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <h3 className="text-lg font-bold text-[#0e053b]">Grow Your Business</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Retailers can run their online business and get foot traffic from the comfort of their location.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button
              onClick={downloadAPK}
              className="bg-[#0e053b] hover:bg-[#1a1060] text-white px-8 py-4 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto"
            >
              <Download size={24} />
              Download Now & Try It Yourself
            </Button>
          </div>
        </div>
      </section>

      {/* About Section - Updated Content */}
      <section id="about" className="bg-white py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-8">What Is Dlow?</h2>
            <p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
              Dlow Uganda is a revolutionary mobile app that connects customers to retail shops offering discounted
              items within a 500-meter radius. Whether you're shopping for essentials or browsing deals, Dlow helps you
              save money while buying from nearby stores.
            </p>
            <p className="text-base md:text-lg max-w-4xl mx-auto mt-4 leading-relaxed">
              Built with both customers and retailers in mind, Dlow simplifies local shopping by combining live location
              tracking, discount discovery, and real-time in-app navigation.
            </p>
          </div>

          {/* For Customers Section */}
          <div className="mb-8 md:mb-16">
            <div className="flex items-center justify-center mb-6 md:mb-8">
              <Users className="text-[#0e053b] mr-3" size={32} />
              <h3 className="text-xl md:text-2xl font-bold text-[#0e053b]">For Customers</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#0e053b] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={24} className="md:hidden text-[#f89c1c]" />
                  <MapPin size={32} className="hidden md:block text-[#f89c1c]" />
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-2">Open the App</h4>
                <p className="text-sm md:text-base text-gray-600">See nearby shops with live discounts on your map.</p>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#0e053b] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart size={24} className="md:hidden text-[#f89c1c]" />
                  <ShoppingCart size={32} className="hidden md:block text-[#f89c1c]" />
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-2">Browse Deals</h4>
                <p className="text-sm md:text-base text-gray-600">
                  View discounted products from shops within your 500-meter radius.
                </p>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#0e053b] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="md:hidden text-[#f89c1c]"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hidden md:block text-[#f89c1c]"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-2">Book Products</h4>
                <p className="text-sm md:text-base text-gray-600">
                  Tap to reserve an item and notify the retailer instantly.
                </p>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#0e053b] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="md:hidden text-[#f89c1c]"
                  >
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hidden md:block text-[#f89c1c]"
                  >
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-2">Get Directions</h4>
                <p className="text-sm md:text-base text-gray-600">Navigate in-app to the shop using real-time GPS.</p>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#0e053b] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star size={24} className="md:hidden text-[#f89c1c]" />
                  <Star size={32} className="hidden md:block text-[#f89c1c]" />
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-2">Earn Rewards</h4>
                <p className="text-sm md:text-base text-gray-600">
                  Get tokens for every successful booking—redeem them for future benefits.
                </p>
              </div>
            </div>
          </div>

          {/* For Retailers Section */}
          <div className="mb-8 md:mb-16">
            <div className="flex items-center justify-center mb-6 md:mb-8">
              <ShoppingCart className="text-[#f89c1c] mr-3" size={32} />
              <h3 className="text-xl md:text-2xl font-bold text-[#f89c1c]">For Retailers</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              <div className="bg-[#f89c1c] text-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-lg md:text-xl font-bold mb-2">Create Shop Profile</h4>
                <p className="text-sm md:text-base opacity-90">Add your shop and register its real-time location.</p>
              </div>

              <div className="bg-[#f89c1c] text-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-lg md:text-xl font-bold mb-2">Upload Products</h4>
                <p className="text-sm md:text-base opacity-90">
                  Post items with discounts to attract nearby customers.
                </p>
              </div>

              <div className="bg-[#f89c1c] text-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-lg md:text-xl font-bold mb-2">Get Bookings</h4>
                <p className="text-sm md:text-base opacity-90">
                  Receive instant booking notifications when customers book products.
                </p>
              </div>

              <div className="bg-[#f89c1c] text-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-lg md:text-xl font-bold mb-2">Track Performance</h4>
                <p className="text-sm md:text-base opacity-90">
                  View your products, orders, and earnings from your dashboard.
                </p>
              </div>

              <div className="bg-[#f89c1c] text-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-lg md:text-xl font-bold mb-2">Monthly Subscription</h4>
                <p className="text-sm md:text-base opacity-90">
                  Keep your products visible with flexible subscription via mobile money.
                </p>
              </div>
            </div>
          </div>

          {/* Errand Delivery Program */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-2xl">
            <div className="flex items-center justify-center mb-6 md:mb-8">
              <Truck className="text-[#0e053b] mr-3" size={32} />
              <h3 className="text-xl md:text-2xl font-bold text-[#0e053b]">The Errand Delivery Program</h3>
            </div>
            <p className="text-base md:text-lg text-center mb-6 md:mb-8 max-w-3xl mx-auto">
              Dlow also supports an Errand Program, where trusted errand runners can deliver booked items on behalf of
              shops.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white p-4 md:p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-3">
                  <Shield className="text-green-500 mr-2" size={20} />
                  <h4 className="font-bold text-sm md:text-base">Secure Escrow System</h4>
                </div>
                <p className="text-xs md:text-sm text-gray-600">
                  Customer pays upfront, funds held securely until delivery completion.
                </p>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-3">
                  <Users className="text-blue-500 mr-2" size={20} />
                  <h4 className="font-bold text-sm md:text-base">Trusted Runners</h4>
                </div>
                <p className="text-xs md:text-sm text-gray-600">
                  Verified errand runners with refundable insurance deposits.
                </p>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#f89c1c] mr-2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <h4 className="font-bold text-sm md:text-base">Real-time Tracking</h4>
                </div>
                <p className="text-xs md:text-sm text-gray-600">
                  Track your delivery in real-time with transparent payment processing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="features" className="bg-[#f89c1c] py-8 sm:py-12 md:py-16 lg:py-24 text-[#0e053b]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-16">🚀 How Dlow Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
              <div className="bg-[#0e053b] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-white font-bold text-lg md:text-xl">
                1
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Find Deals Nearby</h3>
              <p className="text-sm md:text-base">
                Browse products with discounts within your 500-meter location radius.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
              <div className="bg-[#0e053b] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-white font-bold text-lg md:text-xl">
                2
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Book Instantly</h3>
              <p className="text-sm md:text-base">Reserve items with one tap - no online payment required upfront.</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
              <div className="bg-[#0e053b] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-white font-bold text-lg md:text-xl">
                3
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Pick Up or Deliver</h3>
              <p className="text-sm md:text-base">Get directions to the shop or use our errand delivery service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Retailer Call-to-Action Section */}
      <section className="bg-[#0e053b] text-white py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Are You a Retailer?</h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto mb-4 md:mb-6">
            Dlow helps you reach more customers, increase your visibility, and offer real-time deals from your shop.
            Download the app now and start boosting your sales today!
          </p>
          <div className="bg-[#f89c1c]/10 border border-[#f89c1c]/30 rounded-2xl p-4 md:p-6 max-w-3xl mx-auto mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-bold text-[#f89c1c] mb-3">🚀 Start Selling in Minutes!</h3>
            <ul className="text-sm md:text-base text-left space-y-2 max-w-2xl mx-auto">
              <li className="flex items-center gap-2">
                <span className="text-[#f89c1c]">✓</span>
                Create your shop profile and add your location
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#f89c1c]">✓</span>
                Upload products with attractive discounts
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#f89c1c]">✓</span>
                Reach customers within 500m of your shop
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#f89c1c]">✓</span>
                Get instant notifications when customers book items
              </li>
            </ul>
          </div>
          <Button
            onClick={downloadAPK}
            className="bg-[#f89c1c] hover:bg-[#e08a10] text-white rounded-2xl px-6 md:px-8 py-4 md:py-6 text-base md:text-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto"
          >
            <Download size={24} />
            Download & Start Selling
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Get in Touch</h2>
          <p className="text-center text-base md:text-lg mb-8 md:mb-12 text-gray-600 max-w-2xl mx-auto">
            Interested in joining Dlow as a customer, retailer, or errand runner? Send us a message and we'll keep you
            updated on our launch!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-[#f8f8f8] p-6 md:p-8 rounded-2xl">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-[#0e053b] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                    <Mail className="text-[#f89c1c]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm md:text-base">Email</h3>
                    <p className="text-sm md:text-base">dlowuganda@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#0e053b] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                    <Phone className="text-[#f89c1c]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm md:text-base">Phone</h3>
                    <p className="text-sm md:text-base">+256750781744</p>
                  </div>
                </div>

                <div className="bg-[#0e053b] text-white p-4 rounded-xl mt-6">
                  <h4 className="font-bold mb-2 text-sm md:text-base">💰 Transparent Payments</h4>
                  <p className="text-xs md:text-sm opacity-90">
                    All transactions powered through trusted local mobile money services like MTN Mobile Money and
                    Airtel Money.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <form
                action="https://formsubmit.co/dlowuganda@gmail.com"
                method="POST"
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-sm md:text-base">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="rounded-xl border-gray-300 focus:border-[#0e053b] focus:ring-[#0e053b] text-sm md:text-base"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-sm md:text-base">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    className="rounded-xl border-gray-300 focus:border-[#0e053b] focus:ring-[#0e053b] text-sm md:text-base"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block mb-2 font-medium text-sm md:text-base">
                    I'm interested as a:
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full rounded-xl border-gray-300 focus:border-[#0e053b] focus:ring-[#0e053b] text-sm md:text-base p-3"
                    required
                  >
                    <option value="">Select your interest</option>
                    <option value="customer">Customer</option>
                    <option value="retailer">Retailer</option>
                    <option value="errand-runner">Errand Runner</option>
                    <option value="investor">Investor/Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-sm md:text-base">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your interest in Dlow..."
                    className="rounded-xl border-gray-300 focus:border-[#0e053b] focus:ring-[#0e053b] text-sm md:text-base"
                    rows={4}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-[#0e053b] hover:bg-[#1a1060] text-white rounded-xl w-full py-3 md:py-4 text-sm md:text-base transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* App Store Coming Soon Section */}
      <section className="bg-gray-50 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[#0e053b]">
            📱 More Ways to Download Coming Soon!
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto">
            We're working hard to bring Dlow to your favorite app stores. Stay tuned for updates!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
            {/* Google Play Store */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg mb-4 hover:shadow-xl transition-shadow">
                <img
                  src="/images/google-play.png"
                  alt="Google Play Store"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#0e053b] mb-2">Google Play Store</h3>
              <p className="text-sm md:text-base text-gray-600 font-medium">Coming Soon</p>
            </div>

            {/* Apple App Store */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg mb-4 hover:shadow-xl transition-shadow">
                <img
                  src="/images/apple-store.jpeg"
                  alt="Apple App Store"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#0e053b] mb-2">Apple App Store</h3>
              <p className="text-sm md:text-base text-gray-600 font-medium">Coming Soon</p>
            </div>
          </div>

          <div className="mt-8 md:mt-12 bg-[#0e053b] text-white p-4 md:p-6 rounded-2xl max-w-2xl mx-auto">
            <h4 className="text-lg md:text-xl font-bold text-[#f89c1c] mb-2">🚀 Don't Wait - Download Now!</h4>
            <p className="text-sm md:text-base mb-4">
              While we prepare for the app stores, you can download the APK directly and start discovering deals today!
            </p>
            <Button
              onClick={downloadAPK}
              className="bg-[#f89c1c] hover:bg-[#e08a10] text-white rounded-xl px-6 py-3 text-sm md:text-base transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto"
            >
              <Download size={20} />
              Download APK Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0e053b] text-white py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm md:text-base">© 2025 Dlow Uganda. All Rights Reserved.</p>
              <p className="text-xs md:text-sm opacity-75 mt-1">📱 Download & Start Saving Today!</p>
            </div>

            <div className="flex space-x-4 md:space-x-6">
              <a
                href="https://www.instagram.com/dlowuganda.bcs?igsh=YzljYTk1ODg3Zg=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f89c1c] transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61568307423930"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f89c1c] transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.linkedin.com/in/dlow-uganda-a3ba67374"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f89c1c] transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
