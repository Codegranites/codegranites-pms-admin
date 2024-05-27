'use client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@ui/select';
import { useState } from 'react';
import { LanguageProps } from '@/types';

const selectFilters: LanguageProps[] = [
  { id: 1, label: 'English', value: 'english' },
  { id: 2, label: 'Spanish', value: 'spanish' },
  { id: 3, label: 'French', value: 'french' },
  { id: 4, label: 'German', value: 'german' },
  { id: 5, label: 'Italian', value: 'italian' },
  { id: 6, label: 'Chinese', value: 'chinese' },
  { id: 7, label: 'Japanese', value: 'japanese' },
  { id: 8, label: 'Russian', value: 'russian' },
  { id: 9, label: 'Arabic', value: 'arabic' }
];

const LangPrefences = () => {
  const [selectedValue, setSelectedValue] = useState(selectFilters[0].value);

  return (
    <div className="w-[620px] max-w-[680px]  items-center flex-col md:flex-row gap-y-4 ">
      <div className="flex-col items-center gap-x-1 text-black w-full ">
        <span className="hidden sm:inline-block font-medium mb-4   text-2xl dark:text-white">
          Language
        </span>

        <Select
          onValueChange={value => setSelectedValue(value)}
          defaultValue="english"
        >
          <SelectTrigger className="w-full select-none h-[70px] py-3 text-lg font-medium dark:bg-primary dark:text-white">
            <SelectValue placeholder={selectedValue} />
          </SelectTrigger>
          <SelectContent className="backdrop-blur-xl bg-white/80">
            <SelectGroup>
              {selectFilters.map(filter => (
                <SelectItem
                  key={filter.id}
                  value={filter.value}
                  className="hover:bg-[#becbd7] text-xl capitalize dark:text-white dark:bg-primary dark:border-none cursor-pointer"
                >
                  {filter.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default LangPrefences;
