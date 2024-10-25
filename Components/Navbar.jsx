import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white text-black h-32 flex items-center justify-between px-10 ">
      <div className="flex items-center">

        <img src="/images/logo.png" alt="Your Logo" className="h-[130px] w-[130px] p-4" />

        <Link className="ml-8" href="/plumbing">
          <Link href="/">Plumbing Services</Link>
        </Link>

        <Link className="ml-4" href="/about">
        <Link href="/">Get a free quote</Link>
        </Link>
      </div>


      <div className="flex items-center space-x-4">
       
        <button className="bg-white border-2 border-blue-600 hover:bg-blue-700 text-blue-500 hover:text-white font-bold 
        m:px-6 md:px-12 lg:px-12
        sm:py-1 md:py-1 lg:py-2 rounded">
        Schedule an Expert
        </button>

        <button className="bg-white border-2 border-red-700 
        hover:bg-red-700 text-red-500 hover:text-white font-bold 
        sm:px-6 md:px-12 lg:px-12
        sm:py-1 md:py-1 lg:py-2
        rounded">
        +1647-703-7407
        </button>

      </div>
    </nav>
  );
};

export default Navbar;