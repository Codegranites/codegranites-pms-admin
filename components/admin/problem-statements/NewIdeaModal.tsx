import Button from '@ui/Button';
import Modal from '@ui/Modal';
import { Add } from 'iconsax-react';
import React from 'react';

export default function NewIdeaModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal
      closeOnOverlayClick={true}
      isOpen={isOpen}
      closeModal={onClose}
      size="sm"
      title="Problem Statement"
    >
      <form
        action=""
        className="text-base leading-[22px] flex flex-col gap-y-7 pt-8"
      >
        <div className="flex flex-col gap-y-2">
          <label htmlFor="title" className="font-semibold">
            Title
          </label>
          <input
            className="text-sm p-4 border border-[#E1E1E1] rounded-lg outline-none ring-0"
            placeholder="Enter Problem statement title"
            type="text"
            name="title"
            id="title"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="description" className="font-semibold">
            Description
          </label>
          <textarea
            rows={7}
            // columns={20}
            className="text-sm p-4 resize-none border border-[#E1E1E1] rounded-lg outline-none ring-0"
            placeholder="Please describe what you want in detail"
            name="description"
            id="description"
          ></textarea>
        </div>
        <div className="space-y-3">
          <p className="font-semibold">
            Attach files or protoype for reference
          </p>
          <div className="flex items-center gap-x-5">
            <Button
              leftIcon={<Add />}
              className="bg-transparent text-[#375668] border border-[#375668] rounded-lg hover:bg-[#375668] hover:text-white"
            >
              Attach Docs
            </Button>

            <Button
              leftIcon={<Add />}
              className="bg-transparent text-[#375668] border border-[#375668] rounded-lg hover:bg-[#375668] hover:text-white"
            >
              Add Prototype
            </Button>
          </div>
        </div>
        <Button
          type="submit"
          className="w-full rounded-lg text-sm mt-10 mb-2 font-medium"
        >
          Create Idea
        </Button>
      </form>
    </Modal>
  );
}
