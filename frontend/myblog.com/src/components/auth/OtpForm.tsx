'use client';

export default function OtpForm({ email, onSuccess }: { email: string; onSuccess: () => void }) {
  return (
    <div className="space-y-4">
      <h2 className="text-black  text-xl font-semibold text-center">Xác thực OTP</h2>
      <p className="text-sm text-gray-600 text-center">Mã OTP đã gửi tới {email}</p>
      <input type="text" placeholder="Nhập mã OTP" className="text-black  w-full px-3 py-2 border rounded" />
      <button className="w-full py-2 bg-green-500 text-white rounded" onClick={onSuccess}>Xác nhận</button>
    </div>
  );
}
