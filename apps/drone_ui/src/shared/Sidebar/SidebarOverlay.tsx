interface SidebarOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SidebarOverlay = ({ isOpen, onClose }: SidebarOverlayProps) => {
    if (!isOpen) return null;
    
    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-30"
            onClick={onClose}
        />
    );
};