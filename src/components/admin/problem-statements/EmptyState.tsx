import Image from 'next/image';
import emptyBoxImage from '../../../public/assets/empty-box.png';
import Button from '@ui/Button';
import { Add } from 'iconsax-react';

const EmptyState: React.FC<{ openNewIdeaModal: () => void }> = ({
  openNewIdeaModal
}) => {
  return (
    <div className="flex flex-col items-center gap-1 text-lg leading-9 font-normal">
      <Image
        src={emptyBoxImage}
        width={400}
        height={300}
        alt="image of an empty box"
      />
      <p>No Problem Statement</p>
      <p>Try creating one</p>
      <Button
        onClick={openNewIdeaModal}
        leftIcon={<Add />}
        className="text-sm leading-6 font-medium rounded-lg mt-5"
      >
        New Idea
      </Button>
    </div>
  );
};

export default EmptyState;
