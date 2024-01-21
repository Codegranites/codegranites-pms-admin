import Button from '@ui/Button';
import Modal from '@ui/Modal';
import { Add, Document, DocumentDownload, Play, Share } from 'iconsax-react';
import React from 'react';

interface AttachNewFileProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export default function AttachNewFile({
  isOpen,
  onClose,
  title
}: AttachNewFileProps) {
  return (
    <Modal
      closeOnOverlayClick={true}
      isOpen={isOpen}
      closeModal={onClose}
      size="xl"
      title={`${title}`}
    >
      <div className="space-y-10 pt-10">
        <div className="py-4 border border-[#E1E1E1] rounded-2xl">
          <p className="text-lg leading-9 font-semibold flex items-center justify-between px-[18px]">
            <span>Documents</span>
            <span className="flex items-center gap-x-2 text-sm leading-6">
              <Add />
              Attach Docs
            </span>
          </p>
          <div>
            <ul className="px-6 pt-6 pb-4">
              <li className="flex items-center justify-between pb-2 border-b text-[#6F6F6F] font-normal">
                <div className="flex items-center gap-x-2 text-base leading-8">
                  <Document size={18} color={'#292D32'} />
                  <p>
                    <span className="text-header">Project proposal</span>{' '}
                    <span>.pdf</span>
                  </p>
                </div>
                <div className="flex items-center gap-x-5">
                  <p className="flex items-center gap-x-1">
                    <Share size={16} color="#292D32" />
                    <span>Share</span>
                  </p>
                  <p className="flex items-center gap-x-1">
                    <DocumentDownload size={16} color="#292D32" />
                    <span>Download</span>
                  </p>
                </div>
              </li>
            </ul>
            <p className="text-[#052C42] underline text-xs leading-4 ml-10 font-medium">
              See All
            </p>
          </div>
        </div>

        <div className="py-4 border border-[#E1E1E1] rounded-2xl px-[18px]">
          <p className="text-lg leading-9 font-semibold flex items-center justify-between border-b pb-1">
            <span>Prototype</span>
            <span className="flex items-center gap-x-2 text-sm leading-6">
              <Add />
              Attach Prototype
            </span>
          </p>

          <div className="flex flex-col pt-5 px-[38px]">
            <p className="flex items-center gap-x-2 text-sm leading-9 text-black font-medium">
              <span className="whitespace-nowrap">Prototype Link: </span>
              <span className="w-[80%] text-xs text-[#052642] font-normal underline">
                https://www.figma.com/proto/ABCDE12345/My-Project?page-id=67890%3A1&node-id=67891%3A456
              </span>
            </p>
            <div className="w-full bg-black py-16 flex items-center justify-center my-5">
              <p className="p-3 rounded-full border-[2px] border-white">
                <Play size="32" variant="Bold" color="#ffffff" />
              </p>
            </div>
            <div className="flex items-center gap-x-5 self-end">
              <p className="flex items-center gap-x-1">
                <Share size={16} color="#292D32" />
                <span>Share</span>
              </p>
              <p className="flex items-center gap-x-1">
                <DocumentDownload size={16} color="#292D32" />
                <span>Download</span>
              </p>
            </div>
          </div>
        </div>

        <Button type="button" className="rounded-lg w-full text-sm">
          Save changes
        </Button>
      </div>
    </Modal>
  );
}
