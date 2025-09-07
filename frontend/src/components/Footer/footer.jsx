
import { ArrowUpRight, Dribbble, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-gray-300 px-6 py">
      <div className="mx-auto flex gap-2">
        <div className="flex flex-col w-[35%] gap-2">
          <div className="flex gap-2">
            {/* Instagram */}
            <div className="bg-neutral-900 p-6 rounded-2xl flex flex-col justify-between hover:bg-neutral-800 transition">
              <div className="flex items-center justify-between">
                <Instagram className="text-2xl text-pink-500" />
                <ArrowUpRight className="text-gray-400" size={18} />
              </div>
              <h3 className="text-white mt-4 font-semibold">INSTAGRAM</h3>
              <p className="text-sm mt-2 text-gray-400">
                Share visually appealing snippets of our latest web projects.
              </p>
            </div>

            {/* Twitter */}
            <div className="bg-neutral-900 p-6 rounded-2xl flex flex-col justify-between hover:bg-neutral-800 transition">
              <div className="flex items-center justify-between">
                <Twitter className="text-2xl text-sky-400" />
                <ArrowUpRight className="text-gray-400" size={18} />
              </div>
              <h3 className="text-white mt-4 font-semibold">TWITTER</h3>
              <p className="text-sm mt-2 text-gray-400">
                Tweet about interesting coding challenges you’ve overcome.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            {/* Dribbble */}
            <div className="bg-neutral-900 p-6 rounded-2xl flex flex-col justify-between hover:bg-neutral-800 transition">
              <div className="flex items-center justify-between">
                <Dribbble className="text-2xl text-pink-400" />
                <ArrowUpRight className="text-gray-400" size={18} />
              </div>
              <h3 className="text-white mt-4 font-semibold">DRIBBBLE</h3>
              <p className="text-sm mt-2 text-gray-400">
                Showcase design elements of our web projects.
              </p>
            </div>

            {/* Behance */}
            <div className="bg-neutral-900 p-6 rounded-2xl flex flex-col justify-between hover:bg-neutral-800 transition">
              <div className="flex items-center justify-between">
                <Facebook className="text-2xl text-blue-500" />
                <ArrowUpRight className="text-gray-400" size={18} />
              </div>
              <h3 className="text-white mt-4 font-semibold">BEHANCE</h3>
              <p className="text-sm mt-2 text-gray-400">
                Create detailed presentations for our projects.
              </p>
            </div>
          </div>
        </div>
      <div className="flex flex-col w-[65%]">
          {/* Navigation */}
          <div className="bg-neutral-900 p-6 rounded-2xl md:col-span-2 lg:col-span-2 hover:bg-neutral-800 transition">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <h4 className="font-semibold text-white">Home</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-400">
                  <li><a href="#">Why Us</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">FAQ’s</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white">Services</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-400">
                  <li><a href="#">Web Development</a></li>
                  <li><a href="#">App Development</a></li>
                  <li><a href="#">Web Design</a></li>
                  <li><a href="#">Digital Marketing</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white">Projects</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-400">
                  <li><a href="#">Klothtink</a></li>
                  <li><a href="#">Zenith</a></li>
                  <li><a href="#">Novus</a></li>
                  <li><a href="#">Apex</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white">Blogs</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-400">
                  <li><a href="#">Business</a></li>
                  <li>
                    <a href="#">Design <span className="bg-gray-700 text-xs px-2 py-0.5 rounded">Soon</span></a>
                  </li>
                  <li>
                    <a href="#">Development <span className="bg-gray-700 text-xs px-2 py-0.5 rounded">Soon</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        {/* Newsletter */}
        <div className=" mt-8 bg-neutral-900 p-6 rounded-2xl flex items-center justify-between hover:bg-neutral-800 transition">
          <div>
            <h3 className="text-gray-400 text-sm">NEWSLETTER</h3>
            <p className="text-white text-lg font-semibold">SUBSCRIBE TO OUR NEWSLETTER</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-b border-gray-600 text-gray-300 focus:outline-none focus:border-white px-2 py-1"
            />
            <ArrowUpRight className="text-gray-400 cursor-pointer" size={20} />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className=" mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t border-gray-800 pt-4">
          <p>© 2024 NextGen. All rights reserved.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
