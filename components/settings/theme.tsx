'use client';

import { Input } from '@/components/ui/Input';
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
import Button from '@ui/Button';
import { LanguageProps } from '@/types';
import { ThemeProps, useThemeContext } from '@/context/ThemeCtx';

const selectFilters: LanguageProps[] = [
  { id: 1, label: 'Light', value: 'light' },
  { id: 2, label: 'Dark', value: 'dark' },
  { id: 3, label: 'Automatic', value: 'system' }
];

const ThemePrefences = () => {
  const { theme, setTheme } = useThemeContext();
  // const [theme, setTheme] = useState<ThemeProps>(theme);

  return (
    <div className="w-[620px] max-w-[680px]  items-center flex-col md:flex-row gap-y-4 mb-8 ">
      <div className="flex-col items-center gap-x-1 text-black w-full ">
        <span className="hidden sm:inline-block font-medium mb-4   text-2xl">
          Theme
        </span>

        <Select
          onValueChange={value => setTheme(value as ThemeProps)}
          defaultValue={
            selectFilters.find(filter => filter.value === theme)?.value
          }
        >
          <SelectTrigger className="w-full select-none h-[70px] py-3 text-lg font-medium">
            <SelectValue
              placeholder={selectFilters
                .find(filter => filter.value === theme)
                ?.label?.toString()}
            />
          </SelectTrigger>
          <SelectContent className="backdrop-blur-xl bg-white/80">
            <SelectGroup>
              {selectFilters.map(filter => (
                <SelectItem
                  key={filter.id}
                  value={filter.value}
                  className="hover:bg-[#becbd7] text-xl capitalize"
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

export default ThemePrefences;
