'use client';

import { useState } from 'react';

export default function RegisterForm({ onNextOtp }: { onNextOtp: (email: string) => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (!email || !password || !confirmPassword) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }
    if (password !== confirmPassword) {
      alert('Mật khẩu không khớp');
      return;
    }
    onNextOtp(email); // Gửi OTP (giả lập)
  };

  return (
    <div className="space-y-4">
      <h2 className="text-black text-xl font-semibold text-center">Đăng ký</h2>

      <input
        type="email"
        placeholder="Nhập email"
        className="w-full px-3 py-2 border rounded text-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Mật khẩu"
        className="w-full px-3 py-2 border rounded text-black"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="Nhập lại mật khẩu"
        className="w-full px-3 py-2 border rounded text-black"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button
        className="w-full py-2 bg-green-500 text-white rounded font-semibold"
        onClick={handleSubmit}
      >
        Gửi mã OTP
      </button>
    </div>
  );
}
