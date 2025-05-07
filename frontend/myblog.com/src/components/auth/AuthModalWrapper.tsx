'use client';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import OtpForm from './OtpForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import ResetPasswordForm from './ResetPasswordForm';


export default function AuthModalWrapper({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<'login' | 'register' | 'otp' | 'forgot' | 'reset'>('login');
  const [email, setEmail] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm relative p-6">
        <button onClick={onClose} className="absolute top-3 right-3 text-xl text-gray-500 hover:text-black">
          <IoClose />
        </button>

        {step === 'login' && <LoginForm onSwitch={(s) => setStep(s)} />}
        {step === 'register' && <RegisterForm onNextOtp={(e) => { setEmail(e); setStep('otp'); }} />}
        {step === 'otp' && <OtpForm email={email} onSuccess={() => setStep('login')} />}
        {step === 'forgot' && <ForgotPasswordForm onNextOtp={(e) => { setEmail(e); setStep('reset'); }} />}
        {step === 'reset' && <ResetPasswordForm email={email} onSuccess={() => setStep('login')} />}
      </div>
    </div>
  );
}
