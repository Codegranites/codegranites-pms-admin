import Button from '@ui/Button';
import Modal from '@ui/Modal';
import React, { useState } from 'react';

interface EditProblemStatementProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

interface ProblemObjProps {
  title: string;
  description: string;
}

export default function EditProblemStatement({
  isOpen,
  onClose,
  title,
  description
}: EditProblemStatementProps) {
  const [problemObj, setProblemObj] = useState<ProblemObjProps>({
    title: title,
    description: description
  });

  function handleProblemObjChange(e: any) {
    const { name, value } = e.target;
    setProblemObj(prev => ({ ...prev, [name]: value }));
  }
  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      closeModal={onClose}
      size="sm"
      title="Edit problem statement"
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
            value={problemObj.title}
            onChange={handleProblemObjChange}
            className="text-sm font-medium p-4 border border-[#E1E1E1] rounded-lg outline-none ring-0"
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
            value={problemObj.description}
            onChange={handleProblemObjChange}
            rows={7}
            // columns={20}
            className="text-sm font-medium p-4 resize-none border border-[#E1E1E1] rounded-lg outline-none ring-0"
            placeholder="Please describe what you want in detail"
            name="description"
            id="description"
          ></textarea>
        </div>

        <Button
          type="submit"
          className="w-full rounded-lg text-sm mt-10 mb-2 font-medium"
        >
          Save Changes
        </Button>
      </form>
    </Modal>
  );
}
