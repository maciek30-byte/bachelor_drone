import { Link } from 'react-router-dom';

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

export const SidebarLink = ({ to, icon, label, isActive }: SidebarLinkProps) => {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
        ${isActive 
          ? 'bg-ai-green/20 text-ai-green' 
          : 'text-ai-text hover:bg-ai-light hover:text-ai-green'
        }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};