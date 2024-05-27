'use client';

import { useStateCtx } from '@/context/StateContext';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

function LenisProvider({ children }: { children: React.ReactNode }) {
  const { anyModalOpen } = useStateCtx();
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return <ReactLenis root>{children}</ReactLenis>;
}

export default LenisProvider;
