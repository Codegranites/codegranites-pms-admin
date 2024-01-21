'use client';

import Modal from '@ui/Modal';
import { Add, ArrowDown2, ArrowRight2, ArrowUp2 } from 'iconsax-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { useStateCtx } from '../../../context/StateContext';
import { Input } from '@/components/ui/Input';
import { SelectItem } from '@ui/select';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue
} from '@ui/SelectInput';
import Button from '@ui/Button';

function CreateTransaction({ btnClass }: { btnClass?: string }) {
  const [open, setOpen] = useState<boolean>(false);
  const { user } = useStateCtx();
  const [isDdOpen, setIsDdOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>('');

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        type="button"
        className={
          'flex w-full max-w-[200px] md:max-w-[214px] items-center sm:gap-x-5 gap-x-2 bg-primary-light  text-white rounded-lg hover:opacity-80 transition-opacity duration-300 text-sm sm:text-base justify-center ' +
          btnClass
        }
      >
        <Add size={24} />
        New Transaction
      </button>
      <Modal
        isOpen={open}
        closeModal={closeModal}
        title=""
        closeBtnClass="bg-transparent"
        size="lg"
      >
        <div>
          <div className="relative flex items-center mb-6 text-header">
            <div className=" flex items-center gap-2 text-base">
              <Image src={user?.image} alt="user" width={32} height={32} />
              <span className="text-header">{user.name}</span>
              <ArrowRight2 />
              <span className="text-lg font-medium">New Transaction</span>
            </div>
          </div>
          <form action="" className=" space-y-6">
            <div>
              <label htmlFor="project-name" className="text-base font-semibold">
                Project Title
              </label>
              <Input
                onChange={e => {
                  console.log(e.target.value);
                }}
                id="project-name"
                type="text"
                intent={'primary'}
                disabled={false}
                placeHolder="Enter Project Name"
                className="w-full border"
              />
            </div>
            <div>
              <label htmlFor="project-name" className="text-base font-semibold">
                Amount
              </label>
              <Input
                onChange={e => {
                  console.log(e.target.value);
                }}
                id="project-amount"
                type="text"
                intent={'primary'}
                disabled={false}
                placeHolder="NGN 000,000.00"
                className="w-full border"
              />
            </div>
            <div>
              <label className="text-base font-semibold">Payment Type</label>
              <Select
                onOpenChange={() => setIsDdOpen(!isDdOpen)}
                onValueChange={(value: any) => setSelectedValue(value)}
              >
                <SelectTrigger
                  rightIcon={
                    isDdOpen ? (
                      <ArrowUp2 />
                    ) : selectedValue.length === 0 ? (
                      <ArrowDown2 />
                    ) : (
                      <span className="text-primary">{selectedValue}</span>
                    )
                  }
                  className="w-full h-12 outline-none focus:outline-none"
                >
                  <SelectValue placeholder="Initial/Final" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="initial">Initial</SelectItem>
                  <SelectItem value="final">Final</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label
                htmlFor="project-due-date"
                className="text-base font-semibold"
              >
                Due Date
              </label>
              <Input
                onChange={e => {
                  console.log(e.target.value);
                }}
                id="project-due-date"
                type="date"
                intent={'primary'}
                disabled={false}
                placeHolder="DD/YY/YYYY"
                className="w-full border"
              />
            </div>
            <Button intent="secondary" className="rounded-lg mx-auto">
              Add Transaction
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default CreateTransaction;
