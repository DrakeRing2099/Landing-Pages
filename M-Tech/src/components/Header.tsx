import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex flex-col items-center">
          <Image
            src="/DAU_header.png"
            alt="Dhirubhai Ambani University"
            width={120}
            height={120}
            className="mr-2 mt-2"
          />
          <div>
            <p className="text-xs text-gray-600">formerly known as DA-IICT</p>
          </div>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-black hover:text-blue-700 font-medium">
            Home
          </Link>
          <Link
            href="/admissions"
            className="text-black hover:text-blue-700 font-medium"
          >
            Admissions
          </Link>
          <Link
            href="/academics"
            className="text-black hover:text-blue-700 font-medium"
          >
            Academics
          </Link>
          <Link
            href="/campus-life"
            className="text-black hover:text-blue-700 font-medium"
          >
            Campus Life
          </Link>
          <Link
            href="/contact-us"
            className="text-black hover:text-blue-700 font-medium"
          >
            Contact Us
          </Link>
        </nav>

        <div className="flex justify-between items-center gap-6">
          <div className="flex flex-col px-4 py-4 border-r-2 border-blue-700">
            <h2 className="text-red-600 text-3xl italic">25</h2>
            <h3>years</h3>
          </div>
          <div className="text-left">
            <div className="text-blue-900 ">Accredited with</div>
            <div className="text-amber-500 font-bold text-xl">NAAC A+</div>
            <div className="text-blue-900 ">grade</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
