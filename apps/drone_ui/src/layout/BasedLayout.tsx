import { ReactNode } from 'react';
import { Footer } from '../shared/Footer/Footer';
import { Sidebar } from '../shared/Sidebar/Sidebar';
import { Header } from '../shared/Header';
interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto] bg-base-200">
      <Header />
      <div className="flex overflow-hidden">
        <div className="relative">
          <Sidebar />
        </div>
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </div>
  );
};
