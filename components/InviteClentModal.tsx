'use client';

import React, { useState } from 'react';
import Modal from './ui/Modal';
import { Input } from './ui/Input';
import Button from './ui/Button';
import Image from 'next/image';
import { toast } from 'react-toastify';

function InviteClient({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name && email) {
      toast.success('Invite sent suceffully');
    } else {
      toast.error('Please fill in both name and email fields.');
    }
  };
  return (
    <Modal
      closeOnOverlayClick
      isOpen={isOpen}
      closeModal={onClose}
      isCloseIconPresent={false}
      size="md"
      className="max-w-[678px]"
    >
      <div className="flex flex-col items-center justify-center self-center mx-[51px] my-[22px] max-w-[588px]">
        <span className="text-[24px] leadig-[48px] font-medium mb-2">
          Invite Client to Workspace
        </span>
        <Image src="/invite.svg" alt="invite" width={500} height={223} />
        <form
          onSubmit={handleSubmit}
          className="w-full items-center justify-center flex flex-col"
        >
          <div className="mb-2 w-full">
            <label
              htmlFor="name"
              className="block text-[#1C1C1C] text-[16px]  mb-[8px] leading-[22px] font-semibold"
            >
              Full Nmae
            </label>
            <Input
              type="text"
              id="name"
              value={name}
              placeholder="Jane Doe"
              onChange={e => setName(e.target.value)}
              className="w-full p-[16px] text-black text-[14px] rounded font-medium"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="email"
              className="block text-[#1C1C1C] text-[16px] font-semibold mb-[8px] leading-[22px]"
            >
              Email
            </label>
            <Input
              type="email"
              id="email"
              value={email}
              placeholder="example@example.com"
              onChange={e => setEmail(e.target.value)}
              className="w-full p-[16px] rounded text-black text-[14px] font-medium"
            />
          </div>
          <Button
            type="submit"
            className="bg-[#2E577D] text-white p-[16px] rounded-lg max-w-[188px] max-h-[56px] items-center justify-center text-[14px] leading-[22px] font-medium"
          >
            Send Invite
          </Button>
        </form>
      </div>
    </Modal>
  );
}
export default InviteClient;
