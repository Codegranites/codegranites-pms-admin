'use client';

import * as React from 'react';
import Button from '@/components/ui/Button';
import { cn } from '@/utils/util';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form';
import { FormInput } from '../ui/FormInput';
import FormError from './FormError';
import FormSuccess from './FormSuccess';
import { CreateWorkSpaceSchema } from '@/schemas';
import { createWorkspace } from '@/actions/workspace';
import { Textarea } from '../ui/textarea';

const CreateWorkSpaceForm = () => {
  const [success, setSuccess] = React.useState<string | undefined>('');
  const [error, setError] = React.useState<string | undefined>('');
  const [isLoading, startTransition] = React.useTransition();

  const form = useForm<z.infer<typeof CreateWorkSpaceSchema>>({
    resolver: zodResolver(CreateWorkSpaceSchema),
    defaultValues: {
      workspaceName: '',
      description: ''
    }
  });

  const onSubmit = (values: z.infer<typeof CreateWorkSpaceSchema>) => {
    setError('');
    setSuccess('');

    React.startTransition(() => {
      createWorkspace(values).then(data => {
        setSuccess(data?.success);
        setError(data?.error);
      });
    });
  };
  return (
    <div className="">
      <Form {...form}>
        <form
          action=""
          className="flex flex-col mt-4 z-10 gap-y-2 min-[850px]:gap-y-6 "
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="workspaceName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold ">Workspace Name</FormLabel>
                <FormControl>
                  <FormInput
                    disabled={isLoading}
                    type="text"
                    {...field}
                    placeholder="Enter Workspace Name"
                    className=" w-full text-black h-[45px] sm:h-[56px] border text-md font-medium rounded-md focus-visible:ring-primary-light pr-10 sm:pr-9"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold ">Business Email</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isLoading}
                    {...field}
                    placeholder="Enter Workspace Description"
                    className="w-full text-black md:h-[200px] h-[150px] border text-md font-medium rounded-xl  border-[#e1e1e1] px-4 py-2 sidebar-scroll outline-none focus-visible:border-primary transition-all duration-300  resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
          <div className="flex relative items-center [perspective:300px] transform-gpu max-sm:w-full">
            <Button
              disabled={isLoading}
              className={cn(
                'w-full rounded-md my-3',
                isLoading ? '[&>div>span]:opacity-0' : ''
              )}
              type="submit"
              spinnerColor="#fff"
            >
              Create Workspace
            </Button>
            {isLoading && (
              <div className="button--loader absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateWorkSpaceForm;
