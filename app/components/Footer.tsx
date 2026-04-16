import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight">
              NextEra<span className="text-teal">CX</span>
            </Link>
            <p className="mt-3 text-sm text-gray-400 max-w-xs">
              Strategic CX operations consulting for DTC and SaaS brands ready to scale.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-teal transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-teal transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-teal transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-teal transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/contact" className="hover:text-teal transition-colors">
                  Book a Strategy Call
                </Link>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/mathiasdorr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} NextEraCX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
