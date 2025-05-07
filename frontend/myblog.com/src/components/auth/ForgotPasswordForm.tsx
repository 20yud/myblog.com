'use client';

export default function ForgotPasswordForm({ onNextOtp }: { onNextOtp: (email: string) => void }) {
  const handleSubmit = () => {
    onNextOtp('fakeuser@example.com'); // giả lập gửi OTP
  };

  return (
    <div className="space-y-4">
      <h2 className="text-black  text-xl font-semibold text-center">Quên mật khẩu</h2>
      <input type="text" placeholder="Nhập email" className="text-black  w-full px-3 py-2 border rounded" />
      <button className="w-full py-2 bg-green-500 text-white rounded" onClick={handleSubmit}>Gửi mã OTP</button>
    </div>
  );
}
