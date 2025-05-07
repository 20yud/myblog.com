import {
    FaFacebookF,
    FaYoutube,
    FaTiktok,
    FaInstagram,
  } from "react-icons/fa";
  
  const Footer = () => {
    return (
      <footer className="w-full border-t mt-16 bg-white dark:bg-black text-gray-600 dark:text-gray-300">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo + Description */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-black dark:text-white">Vecanhac.com</h2>
            <p className="mt-2 text-sm">
              Nền tảng đặt vé sự kiện âm nhạc hàng đầu Việt Nam.
            </p>
          </div>
  
          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-semibold text-base mb-2">Thông tin</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:underline">Giới thiệu</a></li>
              <li><a href="/contact" className="hover:underline">Liên hệ</a></li>
              <li><a href="/terms" className="hover:underline">Điều khoản</a></li>
              <li><a href="/privacy" className="hover:underline">Chính sách bảo mật</a></li>
            </ul>
          </div>
  
          {/* Social Icons */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold text-base mb-2">Kết nối với chúng tôi</h3>
            <div className="flex justify-center md:justify-end gap-4 text-lg">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <FaFacebookF />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                <FaYoutube />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white">
                <FaTiktok />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="text-center text-xs py-4 border-t border-gray-200 dark:border-gray-700">
          &copy; {new Date().getFullYear()} Vecanhac.com. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  