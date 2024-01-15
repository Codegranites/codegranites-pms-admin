'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import PasswordPopover from '@ui/passwordPopober';
import Button from '@ui/Button';
import { Input } from '@ui/Input';
import { Eye, EyeSlash } from 'iconsax-react';

const ResetPassword = () => {
  const initialPassword = 'jamestest2354'; // Mock initial password
  const [currentPassword, setCurrentPassword] = useState(initialPassword);
  const [newPassword, setNewPassword] = useState('');
  const [defaultInpType, setDefaultInpType] = useState<'password' | 'text'>(
    'password'
  );
  const [defaultInpTypeNew, setDefaultInpTypeNew] = useState<
    'password' | 'text'
  >('password');
  const [isResetDisabled, setIsResetDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const isStrongPassword = (password: string) => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
      password.length >= minLength &&
      hasUppercase &&
      hasLowercase &&
      hasDigit &&
      hasSpecialChar
    );
  };

  const handleChangePassword = () => {
    // Check if the current password is correct
    if (currentPassword === initialPassword) {
      // Check if the new password is strong
      if (isStrongPassword(newPassword)) {
        // Set loading state to true
        setIsLoading(true);

        // Mock API call
        setTimeout(() => {
          // Update currentPassword and show success message using toast
          setCurrentPassword(newPassword);
          toast.success('Password changed successfully!', {
            position: toast.POSITION.TOP_CENTER
          });

          // Reset loading state after completion
          setIsLoading(false);
        }, 1000);
      } else {
        toast.error(
          'New password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a digit, and a special character.',
          {
            position: toast.POSITION.TOP_CENTER
          }
        );
      }
    } else {
      toast.error('Current password is incorrect.', {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
    setIsResetDisabled(
      !isStrongPassword(e.target.value) || currentPassword === ''
    );
  };

  return (
    <div className="flex flex-col max-w-[680px] w-[620px] mt-5 justify-center">
      <h2 className="text-2xl font-medium mb-8">Change Your Password</h2>
      <div className="mb-4">
        <label
          htmlFor="currentPassword"
          className="block text-lg font-normal text-black"
        >
          Current Password
        </label>
        <Input
          type={defaultInpType}
          id="currentPassword"
          name="currentPassword"
          value={currentPassword}
          onChange={e => setCurrentPassword(e.target.value)}
          placeholder="Current Password"
          required
          rightIcon={
            defaultInpType === 'text' ? (
              <Eye color="#777" onClick={() => setDefaultInpType('password')} />
            ) : (
              <EyeSlash
                color="#777"
                onClick={() => setDefaultInpType('text')}
              />
            )
          }
          className="mt-1 p-2 w-full h-[60px] text-black border text-md mb-5 font-medium rounded-md"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="newPassword"
          className="block text-lg font-normal text-black"
        >
          New Password
        </label>
        <PasswordPopover password={newPassword}>
          <Input
            type={defaultInpTypeNew}
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={handlePasswordChange}
            placeHolder="New Password"
            required
            rightIcon={
              defaultInpTypeNew === 'text' ? (
                <Eye
                  color="#777"
                  onClick={() => setDefaultInpTypeNew('password')}
                />
              ) : (
                <EyeSlash
                  color="#777"
                  onClick={() => setDefaultInpTypeNew('text')}
                />
              )
            }
            className="mt-1 p-2 w-full text-black h-[60px] border text-md font-medium rounded-md"
          />
        </PasswordPopover>
      </div>
      <Button
        type="button"
        onClick={handleChangePassword}
        intent={'primary'}
        className="w-[200px] h-[60px] rounded-md"
        disabled={isResetDisabled}
        isLoading={isLoading}
        spinnerColor="#000"
      >
        Save Changes
      </Button>
    </div>
  );
};

export default ResetPassword;
