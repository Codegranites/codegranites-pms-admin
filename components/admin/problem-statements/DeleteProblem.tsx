import Button from '@ui/Button';
import Modal from '@ui/Modal';
import { Trash } from 'iconsax-react';
import React from 'react';

export default function DeleteProblem({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal
      isCloseIconPresent={false}
      // closeOnOverlayClick={true}
      isOpen={isOpen}
      closeModal={onClose}
      size="lg"
    >
      <div className="space-y-6">
        <p className="text-center text-lg leading-9 w-[80%] mx-auto">
          Are you sure you want to delete prolem statement “John doe project”?
          this cannot be reversed
        </p>
        <div className="flex items-center text-lg font-medium gap-x-[10px] w-[90%] mx-auto">
          <Button onClick={onClose} type="button" className="rounded-lg w-full">
            Cancel
          </Button>
          <Button
            type="button"
            leftIcon={<Trash variant="Bold" size={24} />}
            className="rounded-lg bg-[#FF3333] w-full"
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}
