import React from 'react';
import { LoginForm } from '../login-form';
import { Modal } from '@/shared/ui/modal';

interface LoginModalProps {
  lng: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ lng, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm lng={lng} />
    </Modal>
  );
};
