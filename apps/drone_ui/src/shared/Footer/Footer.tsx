import { AiStats } from './AiStats';
import { QuickLinks } from './QucikLinks';
import { QuickStatus } from './QuickStatus';

export const Footer = () => {
  return (
    <footer className="navbar bg-ai-dark border-t border-ai-light px-4">
      <div className="flex justify-between items-center w-full">
        <AiStats />
        <QuickStatus />
        <QuickLinks />
      </div>
    </footer>
  );
};
