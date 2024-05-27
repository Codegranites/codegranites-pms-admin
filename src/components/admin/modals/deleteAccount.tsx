import Modal from '@ui/Modal';
import Button from '@ui/Button';
import { Trash } from 'iconsax-react';
import { DeleteModalProps } from '@/types';

function DeleteAccount({ isOpen, onClose, onDelete }: DeleteModalProps) {
  return (
    <Modal
      closeOnOverlayClick
      isOpen={isOpen}
      closeModal={onClose}
      isCloseIconPresent={false}
      size="md"
    >
      <div className="p-2">
        <p className="mb-7 text-center font-medium text-lg">
          Are you sure you want to delete your account? this cannot be reversed
        </p>
        <div className="flex justify-between">
          <Button onClick={onClose} className="text-white w-[200px] h-[56px]">
            Cancel
          </Button>
          <Button
            intent={'error'}
            className="text-white w-[200px] h-[56px]"
            onClick={onDelete}
            leftIcon={<Trash size="32" color="#ffffff" variant="Bold" />}
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}
export default DeleteAccount;
