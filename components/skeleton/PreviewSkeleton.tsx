export default function PreviewSkeleton() {
  return (
    <div className="w-full flex flex-col mt-4  ">
      <div className="space-y-4  w-full ">
        <div className="bg-black/20 h-6 w-[40%] rounded-full animate-pulse [animation-delay:0.1s]" />
        <div className="flex w-[100% space-x-1">
          <div className="w-full space-y-2">
            <div className="animate-pulse [animation-delay:0.2s] bg-black/20 h-6 w-[70%] rounded-full" />
            <div className="animate-pulse [animation-delay:0.3s] bg-black/20 h-6 w-[80%] rounded-full" />
          </div>
        </div>
      </div>
      <div className="space-y-2 flex flex-col gap-y-2 my-10">
        <div className="animate-pulse [animation-delay:0.4s] bg-black/20 h-3 w-full rounded-full" />
        <div className="animate-pulse [animation-delay:0.5s] bg-black/20 h-3 w-full rounded-full" />
        <div className="animate-pulse [animation-delay:0.4s] bg-black/20 h-3 w-full rounded-full" />
        <div className="animate-pulse [animation-delay:0.3s] bg-black/20 h-3 w-full rounded-full" />
        <div className="animate-pulse [animation-delay:0.2s] bg-black/20 h-3 w-full rounded-full" />
        <div className="animate-pulse [animation-delay:0.1s] bg-black/20 h-3 w-full rounded-full" />
      </div>
    </div>
  );
}
