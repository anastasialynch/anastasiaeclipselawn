import Link from "next/link";

export default function Gallery() {
  // Placeholder gallery items - replace with actual images
  const galleryItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    category: i % 3 === 0 ? "Lawn Care" : i % 3 === 1 ? "Garden Design" : "Hardscaping",
  }));

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-rose-500 bg-clip-text text-transparent">Anastasia&apos;s Eclipse Lawn</h1>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/#services" className="text-gray-700 hover:text-rose-500 transition-colors">Services</Link>
              <Link href="/#about" className="text-gray-700 hover:text-rose-500 transition-colors">About</Link>
              <Link href="/gallery" className="text-rose-500 font-medium">Gallery</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-rose-500 transition-colors">Contact</Link>
            </div>
            <Link 
              href="/#contact" 
              className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-rose-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl font-medium"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Gallery Header */}
      <section className="py-16 bg-gradient-to-br from-rose-50 via-green-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Work</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our portfolio of completed landscaping projects
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-rose-300 to-pink-400 flex items-center justify-center">
                  <div className="text-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-lg font-semibold mb-2">{item.title}</p>
                    <p className="text-sm opacity-90">{item.category}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">{item.title}</p>
                  <p className="text-white/80 text-sm">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-rose-50 via-green-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss how we can bring your vision to life
          </p>
          <Link 
            href="/#contact" 
            className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-rose-600 hover:to-pink-600 transition-all hover:shadow-xl font-semibold text-lg shadow-lg"
          >
            Get Your Free Consultation
          </Link>
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
                <li><Link href="/#services" className="hover:text-rose-400 transition-colors">Services</Link></li>
                <li><Link href="/#about" className="hover:text-rose-400 transition-colors">About</Link></li>
                <li><Link href="/gallery" className="hover:text-rose-400 transition-colors">Gallery</Link></li>
                <li><Link href="/#contact" className="hover:text-rose-400 transition-colors">Contact</Link></li>
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

