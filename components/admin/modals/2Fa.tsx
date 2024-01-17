import React, { useState } from 'react';
import Modal from '@ui/Modal';
import Button from '@ui/Button';
import { Input } from '@/components/ui/Input';
import { Eye, EyeSlash } from 'iconsax-react';

function TwoFA({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [password, setPassword] = useState('');
  const [defaultInpType, setDefaultInpType] = useState<'password' | 'text'>(
    'password'
  );

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('Password submitted:', password);

    setPassword('');
  };

  return (
    <Modal
      closeOnOverlayClick
      isOpen={isOpen}
      closeModal={onClose}
      isCloseIconPresent={false}
      size="sm"
    >
      <div className="p-6">
        <div className="text-black mb-6 font-medium text-lg">
          <h2 className="text-3xl font-medium">Two-step verification</h2>
          <p>Please input your password</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="text-black font-medium mb-5 text-lg">
            Password
            <Input
              value={password}
              onChange={handlePasswordChange}
              rightIcon={
                defaultInpType === 'text' ? (
                  <Eye
                    color="#777"
                    onClick={() => setDefaultInpType('password')}
                  />
                ) : (
                  <EyeSlash
                    color="#777"
                    onClick={() => setDefaultInpType('text')}
                  />
                )
              }
              type={defaultInpType}
              intent={'default'}
              disabled={false}
              className="w-full text-black font-medium mt-4 mb-5"
            />
          </label>
          <Button
            type="submit"
            intent={'secondary'}
            className="w-full text-white text-lg font-medium"
          >
            Continue
          </Button>
        </form>
      </div>
    </Modal>
  );
}
export default TwoFA;
