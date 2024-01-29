'use client';

import React, { useEffect, useState } from 'react';
import Button from '@ui/Button';
import { Input } from '@/components/ui/Input';
import Image from 'next/image';
import { useStateCtx } from '@/context/StateContext';

//simulator
const fetchImagesFromBackend = async () => {
  /*
  try {
    const response = await fetch('/api/images');
    const data = await response.json();
    return data.images;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
  */

  return ['/profile/mock.svg', '/profile/mock2.svg', '/profile/mock3.svg'];
};

function Profile() {
  const { user } = useStateCtx();
  const [images, setImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleChangeImage = async () => {
    // Simulating asynchronous image change
    setTimeout(async () => {
      const backendImages = await fetchImagesFromBackend();
      if (backendImages.length > 0) {
        setImages(backendImages);
        const newIndex = (currentImageIndex + 1) % backendImages.length;
        setCurrentImageIndex(newIndex);
      }
    }, 1000);
  };

  const handleDeleteImage = () => {
    // Remove the current image from the array
    const newImages = [...images];
    newImages.splice(currentImageIndex, 1);

    // Update state and handle empty state
    setImages(newImages);
    if (newImages.length === 0) {
      setCurrentImageIndex(0); // Reset to the first image if the array becomes empty
    } else if (currentImageIndex === newImages.length) {
      setCurrentImageIndex(currentImageIndex - 1); // Adjust index if the last image was deleted
    }
  };

  useEffect(() => {
    fetchImagesFromBackend().then(backendImages => {
      if (backendImages.length > 0) {
        setImages(backendImages);
      }
    });
  }, []);
  return (
    <>
      <div className="w-[620px] max-w-[680px] px-[32px] justify-center items-center">
        <div className="mr-[80px] mt-9 flex justify-center items-center">
          <div className="relative w-full flex-col pr-6 justify-center ">
            <Image
              src={user.image ?? images[currentImageIndex]}
              alt="user"
              width={250}
              height={250}
              className="rounded-full"
            />
            <div className="flex flex-col  max-[1139px]:hidden group-hover:w-full group-hover:flex md:mb-4">
              <span className="text-black text-lg font-medium mt-5 dark:text-white">
                Email
              </span>
              <span
                className="text-[#282828] text-lg dark:text-white"
                title={user.email}
              >
                {user.email}
              </span>
            </div>
          </div>
          <div className="flex-col">
            <Button
              className="border w-[206px] h-[70px] mb-5 bg-transparent text-black dark:text-primary text-[20px] font-medium leading-4 dark:bg-white hover:text-white transition-colors duration-100 hover:duration-500"
              onClick={handleChangeImage}
            >
              Change Photo
            </Button>
            <Button
              className="border w-[206px] h-[70px] bg-transparent text-[#FF0000] hover:bg-[#FF0000] dark:bg-[red] dark:text-white dark:border-none text-[20px] font-medium leading-4 hover:text-white hover:font-medium transition-colors duration-100 hover:duration-500"
              onClick={handleDeleteImage}
            >
              Delete Photo
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
