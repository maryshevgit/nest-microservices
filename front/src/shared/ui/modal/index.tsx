import { Dialog, Transition } from '@headlessui/react';
import {
  Fragment, ReactNode, useEffect, useState,
} from 'react';
import { cx } from 'class-variance-authority';
import { useTheme } from '@/shared/lib/hooks/useTheme';

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  lazy?: boolean
}

export const Modal = ({
  onClose, children, isOpen, lazy,
}: ModalProps) => {
  const { theme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) setIsMounted(true);
  }, [isOpen]);

  if (lazy && !isMounted) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 z-overlay" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto z-modal">
          <div className="flex min-h-full items-center justify-center p-4 text-center text-primary">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={cx(
                  theme,
                  'text-size_m leading-line_m font-main text-primary bg-color w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all',
                )}
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
