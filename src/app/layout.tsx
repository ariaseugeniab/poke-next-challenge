import type { Metadata } from 'next';
import './globals.css';
import MainNavbar from '@/components/shared/main-navbar';
import { UserContextProvider } from '@/context/user-context';
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
    <body>
      <QueryProvider>
        <UserContextProvider>
          <div className="min-h-screen p-8 gap-16 sm:pt-[55px] max-w-[1440px] w-full mx-auto flex flex-col">
            <MainNavbar />

            {children}
          </div>
        </UserContextProvider>
      </QueryProvider>
    </body>
  </html>
);

export default RootLayout;
