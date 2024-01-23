'use client';

import * as React from 'react';

import Modal from '@ui/Modal';
import useMediaQuery from '@/hooks/use-media-query';
import Button from '@ui/Button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@ui/Input';
import { Label } from '@ui/label';
import CreateWorkSpaceForm from '../forms/createworkspaceform';

export default function CreateaWorkspaceButton() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <span className="font-bold text-4xl items-start flex mb-6 text-header dark:text-gray-100">
        Create WorkSpace
      </span>
      <div className="flex flex-col items-center w-full border rounded p-20 bg-white dark:bg-primary  mb-10 dark:border-primary-light ">
        <CreateWorks />
      </div>
    </div>
  );
}
function CreateWorks() {
  const [open, setOpen] = React.useState(false);
  const { isDesktop, isMobile, isTablet } = useMediaQuery();

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button intent={'secondary'}>Create Workspace</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Begin your journey</DialogTitle>
            <DialogDescription>
              It seems you don&apos;t have any workspace at the moment. Kindly
              create one with us
            </DialogDescription>
          </DialogHeader>
          <CreateWorkSpaceForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button intent={'secondary'}>Create Workspace</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Begin your journey</DrawerTitle>
          <DrawerDescription>
            It seems you don&apos;t have any workspace at the moment. Kindly
            create one with us
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-5">
          <CreateWorkSpaceForm />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
