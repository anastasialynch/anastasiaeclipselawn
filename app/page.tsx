import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-rose-500 bg-clip-text text-transparent">Anastasia&apos;s Eclipse Lawn</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#services" className="text-gray-700 hover:text-rose-500 transition-colors">Services</Link>
              <Link href="#about" className="text-gray-700 hover:text-rose-500 transition-colors">About</Link>
              <Link href="/gallery" className="text-gray-700 hover:text-rose-500 transition-colors">Gallery</Link>
              <Link href="#contact" className="text-gray-700 hover:text-rose-500 transition-colors">Contact</Link>
            </div>
            <Link 
              href="#contact" 
              className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-rose-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl font-medium"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-rose-50 to-pink-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your
                <span className="bg-gradient-to-r from-green-700 to-rose-500 bg-clip-text text-transparent block">Outdoor Space</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional landscaping services that bring your vision to life. 
                From lawn care to garden design, we create beautiful, sustainable outdoor environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#contact" 
                  className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-rose-600 hover:to-pink-600 transition-all hover:shadow-xl text-center font-semibold shadow-lg"
                >
                  Free Consultation
                </Link>
                <Link 
                  href="#services" 
                  className="border-2 border-rose-400 text-rose-600 px-8 py-4 rounded-full hover:bg-rose-50 transition-all text-center font-semibold"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <svg className="w-32 h-32 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg font-medium">Beautiful Landscapes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive landscaping solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gradient-to-br from-rose-50 via-green-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-rose-100">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lawn Care & Maintenance</h3>
              <p className="text-gray-600 leading-relaxed">
                Regular mowing, fertilizing, and seasonal care to keep your lawn healthy and vibrant year-round.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gradient-to-br from-rose-50 via-green-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-rose-100">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Garden Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Custom garden designs that reflect your style and enhance your property&apos;s beauty and value.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gradient-to-br from-rose-50 via-green-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-rose-100">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hardscaping</h3>
              <p className="text-gray-600 leading-relaxed">
                Patios, walkways, retaining walls, and outdoor living spaces built to last.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-gradient-to-br from-rose-50 via-green-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-rose-100">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Irrigation Systems</h3>
              <p className="text-gray-600 leading-relaxed">
                Smart irrigation solutions for efficient water management and healthy landscapes.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="bg-gradient-to-br from-rose-50 via-green-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-rose-100">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Seasonal Cleanup</h3>
              <p className="text-gray-600 leading-relaxed">
                Spring and fall cleanup services to prepare your landscape for the changing seasons.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="bg-gradient-to-br from-rose-50 via-green-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-rose-100">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tree & Shrub Care</h3>
              <p className="text-gray-600 leading-relaxed">
                Pruning, trimming, and health maintenance for trees and shrubs to ensure optimal growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-rose-50 via-green-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With years of experience and a passion for creating beautiful outdoor spaces, 
                we bring expertise, dedication, and attention to detail to every project.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                    <p className="text-gray-600">Licensed and insured professionals with extensive training</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
                    <p className="text-gray-600">We stand behind our work with satisfaction guarantees</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Eco-Friendly Practices</h3>
                    <p className="text-gray-600">Sustainable solutions that protect the environment</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <svg className="w-32 h-32 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg font-medium">Trusted & Reliable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your outdoor space? Contact us for a free consultation.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-rose-50 via-green-50 to-pink-50 p-8 md:p-12 rounded-2xl shadow-lg border border-rose-100">
              <form 
                action="https://formspree.io/f/YOUR_FORM_ID" 
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-rose-600 hover:to-pink-600 transition-all hover:shadow-xl font-semibold text-lg shadow-lg"
                >
                  Request Free Consultation
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-500 text-center">
                {/* Note: Replace YOUR_FORM_ID with your actual Formspree form ID */}
                {/* Get free form at: https://formspree.io/ */}
              </p>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="grid md:grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-rose-500 mb-2">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 font-medium">Call Us</p>
                    <p className="text-gray-900 font-semibold">(555) 123-4567</p>
                  </div>
                  <div>
                    <div className="text-rose-500 mb-2">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 font-medium">Email Us</p>
                    <p className="text-gray-900 font-semibold">info@eclipselawn.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-rose-400 bg-clip-text text-transparent mb-4">Anastasia&apos;s Eclipse Lawn</h3>
              <p className="text-gray-400">
                Creating beautiful outdoor spaces that enhance your property and lifestyle.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#services" className="hover:text-rose-400 transition-colors">Services</Link></li>
                <li><Link href="#about" className="hover:text-rose-400 transition-colors">About</Link></li>
                <li><Link href="/gallery" className="hover:text-rose-400 transition-colors">Gallery</Link></li>
                <li><Link href="#contact" className="hover:text-rose-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@eclipselawn.com</li>
                <li>Hours: Mon-Fri 8AM-6PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Anastasia&apos;s Eclipse Lawn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
