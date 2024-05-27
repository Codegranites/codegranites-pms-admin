export default function SkeletonBio() {
  return (
    <div className="w-full flex flex-col gap-y-3   ">
      <div className="animate-pulse [animation-delay:0.4s] bg-black/20 h-3 w-full rounded-full" />
      <div className="animate-pulse [animation-delay:0.5s] bg-black/20 h-3 w-full rounded-full" />
      <div className="animate-pulse [animation-delay:0.4s] bg-black/20 h-3 w-full rounded-full" />
      <div className="animate-pulse [animation-delay:0.3s] bg-black/20 h-3 w-full rounded-full" />
      <div className="animate-pulse [animation-delay:0.2s] bg-black/20 h-3 w-full rounded-full" />
      <div className="animate-pulse [animation-delay:0.1s] bg-black/20 h-3 w-full rounded-full" />
    </div>
  );
}
