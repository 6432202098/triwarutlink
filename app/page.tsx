"use client";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-800 text-white">
      {/* Profile Image */}
      <div className="w-32 h-32 mb-4 rounded-full overflow-hidden">
        <img
          src="PLE.webp"
          alt="Profile"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-1">Ple Triwarut</h1>
      <p className="text-sm text-gray-400 mb-6 text-center">
        Interested Job Position<br />
        CFX Artist / Rigging / 3D Generalist.
      </p>

      {/* Social Media Links */}
      <div className="flex gap-4 mb-8">
        <a
          href="https://www.youtube.com/@Ple_Studio1"
          target="blank"
          className="p-2 bg-white rounded-full hover:bg-red-600 transition-all"
        >
          <img
            src="YOUTUBE.svg"
            alt="YouTube"
            className="w-6 h-6"
          />
        </a>
        <a
          href="https://www.facebook.com/triwarut?mibextid=wwXIfr&mibextid=wwXIfr"
          className="p-2 bg-white rounded-full hover:bg-blue-600 transition-all"
        >
          <img
            src="FB.svg"
            alt="Facebook"
            className="w-6 h-6"
          />
        </a>
        <a
          href="https://www.instagram.com/triwarut?"
          target="blank"
          className="p-2 bg-white rounded-full hover:bg-pink-600 transition-all"
        >
          <img
            src="IG.svg"
            alt="Instagram"
            className="w-6 h-6"
          />
        </a>
      </div>

      {/* Buttons */}
      <div className="space-y-4 w-full max-w-xs mx-auto">
        <a
          href="https://triwarut.my.canva.site/ple-triwarut-portfolio"
          target="blank"
          className="flex items-center bg-white text-black py-3 px-4 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          <img
            src="port.svg"
            alt="Port Logo"
            className="w-8 h-8 mr-1"
          />
          <div className="flex-1 text-center">
            <span className="block font-semibold">PORTFOLIO</span>
            <span className="block text-sm font-normal text-gray-500">My Portfolio</span>
          </div>
        </a>
        <a
          href="https://www.behance.net/bloodben"
          target="blank"
          className="flex items-center bg-white text-black py-3 px-4 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          <img
            src="BE.svg"
            alt="Behance Logo"
            className="w-8 h-8 mr-1"
          />
          <div className="flex-1 text-center">
            <span className="block font-semibold">Behance</span>
            <span className="block text-sm font-normal text-gray-500">Portfolio of Design</span>
          </div>
        </a>
        <a
          href="https://www.tiktok.com/@ple_studio?_t=8sK9IXoVf5c&_r=1"
          target="blank"
          className="flex items-center bg-white text-black py-3 px-4 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          <img
            src="TIK.svg"
            alt="Tiktok Logo"
            className="w-8 h-8 mr-1"
          />
          <div className="flex-1 text-center">
            <span className="block font-semibold">Tiktok</span>
            <span className="block text-sm font-normal text-gray-500">Short videos of Design</span>
          </div>
        </a>
        <a
          href="#"
          className="flex items-center bg-white text-black py-3 px-4 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          <img
            src="mail.svg"
            alt="Contact Logo"
            className="w-8 h-8 mr-1"
          />
          <div className="flex-1 text-center">
            <span className="block font-semibold">Contact</span>
            <span className="block text-sm font-normal text-gray-500">For Working with me</span>
          </div>
        </a>
      </div>

      {/* Footer */}
      <footer className="font-semibold text-white text-xs mt-10 bg-gray-800 border border-white p-3 rounded-full">
        © triwarut
      </footer>
    </div>
  );
};

export default Page;
