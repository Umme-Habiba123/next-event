import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          MyWebsite
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-6 text-gray-600 font-medium">
            <li>
              <Link href="/" className="hover:text-gray-900 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-900 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-gray-900 transition">
                Events
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-900 transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
