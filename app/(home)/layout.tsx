import LenisProvider from '@/components/LenisProvider';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <LenisProvider>{children}</LenisProvider>;
}
