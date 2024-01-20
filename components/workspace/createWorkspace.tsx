'use client';

import * as React from 'react';

import { cn } from '@/utils/util';
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
import { Input } from '@ui/Input';
import { Label } from '@ui/label';

export default function DrawerDemo() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <span className="font-bold text-4xl items-start flex mb-6">Drawer</span>
      <div className="flex flex-col items-center w-full border rounded p-20 bg-white  mb-10 ">
        <DrawerSetup />
      </div>
    </div>
  );
}

function DrawerSetup() {
  const [open, setOpen] = React.useState(false);
  const { isDesktop } = useMediaQuery();

  // if (isDesktop) {
  //   return (
  //     <Dialog open={open} onOpenChange={setOpen}>
  //       <DialogTrigger asChild>
  //         <Button variant="outline">Create Workspace</Button>
  //       </DialogTrigger>
  //       <DialogContent className="sm:max-w-[425px]">
  //         <DialogHeader>
  //           <DialogTitle>Edit profile</DialogTitle>
  //           <DialogDescription>
  //                     {/* It seems you don&apos;t have any workspace at the moment.  */}
  //           </DialogDescription>
  //         </DialogHeader>
  //         <CreateForm />
  //       </DialogContent>
  //     </Dialog>
  //   );
  // }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button intent={'secondary'}>Create Workspace</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            {/* It seems you don&apos;t have any workspace at the moment.  */}
          </DrawerDescription>
        </DrawerHeader>
        <CreateForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button intent={'secondary'}>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function CreateForm({ className }: React.ComponentProps<'form'>) {
  return (
    <form className={cn('grid items-start gap-4', className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="name of workspace" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="workspace description" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  );
}
