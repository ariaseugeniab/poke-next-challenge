import type { Metadata } from 'next';
import './globals.css';
import MainNavbar from '@/components/shared/main-navbar';
import { QueryProvider } from '@/providers/query-provider';

export const metadata: Metadata = {
  title: 'PokeNext',
  description: 'PokeNext: The primary pokedex app',
};
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className="antialiased">
      <QueryProvider>
        <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 max-w-[1440px] mx-auto flex flex-col">
          <MainNavbar />

          {children}
        </div>
      </QueryProvider>
    </body>
  </html>
);

export default RootLayout;
