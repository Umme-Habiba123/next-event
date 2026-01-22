import Link from "next/link";

const Header = () => {
  const isLoggedIn = false; // পরে auth থেকে আসবে

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          MyWebsite
        </Link>

        <div className="flex items-center gap-8">
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

          {/* Auth Buttons */}
          <div>
            {isLoggedIn ? (
              <button
                className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="px-6 py-2 rounded-md bg-gray-300 text-black hover:text-white hover:bg-black transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
