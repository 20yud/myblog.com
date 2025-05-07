'use client';

import { ReactNode } from 'react';
import { IoClose } from 'react-icons/io5';

export default function ModalOverlay({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-[400px] rounded-xl overflow-hidden">
        <div className="bg-green-500 px-6 py-4 flex justify-between items-center relative">
          <h2 className="text-white font-bold text-xl">{title}</h2>
          <button
            onClick={onClose}
            className="absolute right-4 top-3 text-white text-2xl"
          >
            <IoClose />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
