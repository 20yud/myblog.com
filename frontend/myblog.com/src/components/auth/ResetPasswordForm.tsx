'use client';

export default function ResetPasswordForm({ email, onSuccess }: { email: string; onSuccess: () => void }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-center">Tạo mật khẩu mới</h2>
      <input type="password" placeholder="Mật khẩu mới" className="w-full px-3 py-2 border rounded" />
      <input type="password" placeholder="Xác nhận mật khẩu" className="w-full px-3 py-2 border rounded" />
      <button className="w-full py-2 bg-green-600 text-white rounded" onClick={onSuccess}>Đặt lại mật khẩu</button>
    </div>
  );
}
