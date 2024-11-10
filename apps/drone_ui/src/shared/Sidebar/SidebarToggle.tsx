interface SidebarToggleProps {
    isOpen: boolean;
    onClick: () => void;
}

export const SidebarToggle = ({ isOpen, onClick }: SidebarToggleProps) => {
    return (
        <button
            onClick={onClick}
            className={`fixed top-4 left-4 btn btn-circle btn-primary transform transition-transform duration-300 ${
                isOpen ? 'translate-x-56' : 'translate-x-0'
            }`}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
            {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            )}
        </button>
    );
};