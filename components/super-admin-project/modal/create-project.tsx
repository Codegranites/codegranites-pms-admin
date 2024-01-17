'use client';

import Modal from '@ui/Modal';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  Add,
  ArrowDown2,
  ArrowRight,
  ArrowRight2,
  ArrowRight3,
  ArrowUp2
} from 'iconsax-react';
import { Input } from '@/components/ui/Input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@ui/SelectInput';
import Button from '@ui/Button';
import { useStateCtx } from '../../../context/StateContext';

function CreateProject() {
  const [open, setOpen] = useState<boolean>(false);
  const [isDdOpen, setIsDdOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>('');
  const { user } = useStateCtx();

  const closeModal = () => {
    setOpen(false);
  };
  return (
    // @loyalsfc the Button component is not responsive
    <>
      {/* <Button intent="secondary" className="rounded-lg">
				<Add /> New Project
			</Button> */}
      <button
        onClick={() => setOpen(true)}
        type="button"
        className="flex w-full max-w-[200px] md:max-w-[214px] items-center sm:gap-x-5 gap-x-2 bg-primary-light  text-white rounded-lg hover:opacity-80 transition-opacity duration-300 text-sm sm:text-base justify-center"
      >
        <Add size={24} />
        New Project
      </button>
      <Modal
        isOpen={open}
        closeModal={closeModal}
        title=""
        closeBtnClass="bg-transparent"
        size="lg"
      >
        <div className="max-h-[550px] px-4 overflow-scroll">
          <div className="relative flex items-center mb-6 text-header">
            <div className=" flex items-center gap-2 text-base">
              <Image src={user?.image} alt="user" width={32} height={32} />
              <span className="text-header">{user.name}</span>
              <ArrowRight2 />
              <span className="text-lg font-medium">New Project</span>
            </div>
          </div>
          <form action="" className="text-[#1C1C1C] space-y-4">
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
              <label
                htmlFor="project-description"
                className="text-base font-semibold"
              >
                Project Title
              </label>
              <textarea
                id="project-description"
                placeholder="Please describe your project (optional)"
                className="rounded-lg w-full block h-40 outline-none p-4 border border-[#E1E1E1] resize-none"
              />
            </div>
            <div>
              <label
                htmlFor="project-owner"
                className="text-base font-semibold"
              >
                Project Owner
              </label>
              <Input
                onChange={e => {
                  console.log(e.target.value);
                }}
                id="project-owner"
                type="text"
                intent={'primary'}
                disabled={false}
                placeHolder="Enter Project Owner's Name"
                className="w-full border"
              />
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
            <div>
              <label className="text-base font-semibold">Project Status</label>
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
                  <SelectValue placeholder="Project Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">
                    <span className="bg-[#B493A3] text-black rounded-full block py-1 px-3">
                      Pending
                    </span>
                  </SelectItem>
                  <SelectItem value="completed">
                    <span className="bg-green-500 text-black rounded-full block py-1 px-3">
                      Completed
                    </span>
                  </SelectItem>
                  <SelectItem value="progress">
                    <span className="bg-yellow-500 text-black rounded-full block py-1 px-3">
                      In progress
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2 pt-6">
              <Button
                intent={null}
                className="border border-primary-dark rounded-lg whitespace-nowrap"
              >
                <Add /> Attach Docs
              </Button>
              <Button
                intent={null}
                className="border border-primary-dark rounded-lg whitespace-nowrap"
              >
                <Add /> Add Prototype
              </Button>
              <Button
                intent="secondary"
                className="ml-auto rounded-lg whitespace-nowrap"
              >
                Create Project
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default CreateProject;
