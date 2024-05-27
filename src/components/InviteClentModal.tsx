'use client';

import * as React from 'react';
import Modal from './ui/Modal';
import { Input } from './ui/Input';
import Button from './ui/Button';
import Image from 'next/image';
import FormError from './forms/FormError';
import FormSuccess from './forms/FormSuccess';
import { toast } from 'react-toastify';
import { InviteToWorkspaceSchema } from '@/schemas';
import { InviteClient } from '@/actions/workspace';

function Invite({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [workspaceId, setWorkspaceId] = React.useState<string | null>(null);
  const [email, setEmail] = React.useState<string>('');
  const [success, setSuccess] = React.useState<string | undefined>('');
  const [error, setError] = React.useState<string | undefined>('');
  const [loading, setLoading] = React.useState(false);

  const workspacId = localStorage?.getItem('workspaceID');

  if (workspacId !== undefined) {
    setWorkspaceId(workspacId);
  } else {
    console.error('workspaceID is undefined');
  }

  const values = { workspaceId, email };

  const handleSubmit = async (e: React.FormEvent) => {
    setError('');
    setSuccess('');
    try {
      setLoading(true);

      if (values.workspaceId !== null) {
        const res = await InviteClient(values);
        setSuccess(res?.success);
        setError(res?.error);
      } else {
        console.error('workspaceID is null');
      }
    } catch (error) {
      console.error('An error occurred during form submission:', error);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
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
          <FormError message={error} />
          <FormSuccess message={success} />
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
export default Invite;
