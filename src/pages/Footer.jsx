export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">

        {/* brands */}
        <div>
          <h2 className="text-xl font-bold text-white">JobFinder</h2>
          <p className="mt-3 text-sm text-gray-400">
            Find your dream job easily. Save, apply and track jobs in one place.
          </p>
        </div>

        {/* quick links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Jobs</li>
            <li className="hover:text-white cursor-pointer">Saved Jobs</li>
            <li className="hover:text-white cursor-pointer">Login</li>
          </ul>
        </div>

        {/* support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">Email: support@jobportal.com</p>
          <p className="text-sm mt-1">Phone: +91 9978396522</p>
          <p className="text-sm mt-1">Ahmedabad, India</p>
        </div>

      </div>


    </footer>
  );
}