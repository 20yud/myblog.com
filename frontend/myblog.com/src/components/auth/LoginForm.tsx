'use client';

import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function LoginForm({ onSwitch }: { onSwitch: (step: string) => void }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className=" text-black text-xl font-semibold text-center">Đăng nhập</h2>

      <input
        type="text"
        placeholder="Nhập email hoặc số điện thoại"
        className="text-black w-full px-3 py-2 border rounded"
      />

      <div className="text-black relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Nhập mật khẩu"
          className="w-full px-3 py-2 border rounded pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute top-3 right-3 text-gray-600"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      <button className="w-full py-2 bg-green-300 text-black rounded">Tiếp tục</button>

      <p
        onClick={() => onSwitch('forgot')}
        className="text-sm text-blue-500 text-center cursor-pointer"
      >
        Quên mật khẩu?
      </p>

      <div className="text-black text-sm text-center">
        Chưa có tài khoản?{' '}
        <span
          onClick={() => onSwitch('register')}
          className="text-green-600 font-semibold cursor-pointer hover:underline"
        >
          Tạo tài khoản ngay
        </span>
      </div>

      <div className="my-4 text-center relative">
        <hr className="border-t" />
        <span className="absolute left-1/2 -translate-x-1/2 bg-white px-2 text-sm text-gray-500 -mt-2">Hoặc</span>
      </div>

      <button className="text-black w-full border py-2 rounded flex items-center justify-center gap-2">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5"
        />
        <span>Tiếp tục với Google</span>
      </button>

      <button className="text-black w-full border py-2 rounded flex items-center justify-center gap-2 mt-2">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
          alt="Facebook"
          className="w-5 h-5"
        />
        <span>Tiếp tục với Facebook</span>
      </button>

      <p className="text-xs text-center text-gray-400 mt-4">
        Bằng việc tiếp tục, bạn đã đọc và đồng ý với{' '}
        <a href="#" className="text-green-600 underline">Điều khoản sử dụng</a> và{' '}
        <a href="#" className="text-green-600 underline">Chính sách bảo mật</a> của Vecanhac
      </p>
    </div>
  );
}
