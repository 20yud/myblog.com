'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import AuthModalWrapper from './auth/AuthModalWrapper';

export default function Navbar() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // 👈 lấy path hiện tại

  const handleSearch = () => {
    if (searchKeyword.trim()) {
      router.push(`/search?keyword=${encodeURIComponent(searchKeyword.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // 👇 Mỗi lần pathname đổi và là "/search" thì clear input
  useEffect(() => {
    if (pathname === '/search') {
      setSearchKeyword('');
    }
  }, [pathname]);

  return (
    <>
      <div className="bg-black text-white shadow-md sticky top-0 z-50 w-full ">
        <div className="max-w-screen-2xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/docs/img/logovecanhac.png"
              alt="Ticketbox"
              width={150}
              height={60}
              priority
            />
          </Link>

          {/* Search bar */}
          <div className="bg-white text-black flex items-center gap-2 border rounded px-4 py-3 w-full max-w-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 17a6 6 0 100-12 6 6 0 000 12zm7 0l-3-3"
              />
            </svg>
            <input
              type="text"
              placeholder="Bạn tìm gì hôm nay?"
              className="flex-grow focus:outline-none"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <span className="text-gray-300">|</span>
            <button
              className="text-black hover:cursor-pointer font-medium"
              onClick={handleSearch}
            >
              Tìm kiếm
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <Link href="/portfolio" className="hover:underline">
                    Portfolio
            </Link>
            <Link href="/notifications" className="hover:underline">
              Thông báo
            </Link>
            <span
              className="hover:underline cursor-pointer"
              onClick={() => setShowLoginModal(true)}
            >
              Đăng nhập | Đăng ký
            </span>
          </div>
        </div>
      </div>

      {showLoginModal && <AuthModalWrapper onClose={() => setShowLoginModal(false)} />}
    </>
  );
}
