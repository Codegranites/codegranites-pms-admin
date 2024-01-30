'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Button from '../ui/Button';
import { Input } from '../ui/Input';
import { Copy } from 'iconsax-react';

function Workspace() {
  const [workspaceName, setWorkspaceName] = useState<string>('Code granites');
  return (
    <div className="py-10 max-w-lg mx-auto">
      <div className="pb-10">
        <div className="flex gap-9 flex-col sm:flex-row">
          <Image
            src="/workspace-default.png"
            height={150}
            width={150}
            alt="Workspace Image"
          />

          <div className=" space-y-3 max-w-[250px]">
            <Button className="bg-transparent border border-[#E1E1E1] rounded-lg text-header w-full px-8  text-sm block">
              Change Photo
            </Button>
            <Button className="bg-transparent border border-[#E1E1E1] rounded-lg text-error w-full  px-8 text-sm block">
              Delete Photo
            </Button>
          </div>
        </div>
        <p className="flex flex-col pt-2 text-sm">
          <span>Choose a logo for your workspace. </span>
          <span>Recommended size is 256 x 256</span>
        </p>
      </div>
      <main className="py-10 border-y border-y-[#E1E1E1]">
        <div className="mb-4">
          <label
            htmlFor="workspaceName"
            className="block font-normal text-sm text-[#1C1C1C]"
          >
            Workspace Name
          </label>
          <Input
            type="text"
            id="workspaceName"
            name="workspaceName"
            value={workspaceName}
            onChange={e => setWorkspaceName(e.target.value)}
            placeholder="Workspace Name"
            required
            className="mt-1 p-2 w-full h-[60px] text-black border text-md mb-5 font-medium rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="workspaceNameUrl"
            className="block font-normal text-sm text-[#1C1C1C]"
          >
            Workspace Url
          </label>
          <Input
            type="text"
            id="workspaceNameUrl"
            name="workspaceNameUrl"
            value={'Codegranites.app/' + workspaceName}
            placeholder="Workspace Name"
            required
            className="mt-1 p-2 w-full h-[60px] text-black border text-md mb-5 font-medium rounded-md"
          />
        </div>
        <div className=" space-y-4">
          <Button className="flex rounded-lg px-8 ml-auto">
            <span className="flex gap-2">
              <Copy color="#FFF" variant="TwoTone" height={16} /> copy
            </span>
          </Button>
          <Button className="flex rounded-lg px-12">Update</Button>
        </div>
      </main>
      <div className="space-y-4 pt-10">
        <p className="text-sm text-header">
          If you want to permanently delete this workspace and all its data,
          including but no limited to users, Problem statements, projects click
          the button below
        </p>
        <Button
          className="flex rounded-lg px-12 bg-transparent text-error border-error border"
          intent={'secondary'}
        >
          Update
        </Button>
      </div>
    </div>
  );
}

export default Workspace;
