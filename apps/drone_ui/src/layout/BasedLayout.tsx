import { ReactNode } from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Sidebar } from '../components/Sidebar/Sidebar';

interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-base-200 relative z-0">
      {/* Header */}
      <Header />

      {/* Main Content Area with Sidebar */}
      <div className="flex overflow-hidden relative">
        {/* Sidebar */}
        <div className="relative z-30">
          <Sidebar />
        </div>
        
        {/* Main Content */}
        <main className="flex-1 relative z-10">
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};