import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar bg-white shadow-lg relative z-50 px-6">
      <div className="container mx-auto flex justify-between items-center py-3">
        {/* Logo or Home Link */}
        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-purple-600 transition-all">
          EmpowerHer 👩‍💼
        </Link>

        {/* Navigation Links - No Dropdowns */}
        <ul className="menu menu-horizontal space-x-6 text-gray-700">
          <li>
            <Link href="/dashboard" className="hover:text-purple-600">Dashboard</Link>
          </li>
          <li>
            <Link href="/resources" className="hover:text-purple-600">Resources</Link>
          </li>
          <li>
            <Link href="/community" className="hover:text-purple-600">Community</Link>
          </li>
          <li>
            <Link href="/learning" className="hover:text-purple-600">Learning</Link>
          </li>
          <li>
            <Link href="/business-tools" className="hover:text-purple-600">Business Tools</Link>
          </li>
          <li>
            <Link href="/events" className="hover:text-purple-600">Events</Link>
          </li>
          <li>
            <Link href="/help" className="hover:text-purple-600">Help</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
