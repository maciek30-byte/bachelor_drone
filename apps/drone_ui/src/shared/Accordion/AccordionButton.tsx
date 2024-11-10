interface AccordionButtonProps {
    activeList: 'decisions' | 'incidents',
    setActiveList: React.Dispatch<React.SetStateAction<'decisions' | 'incidents'>>,
    label: string,
    value: 'decisions' | 'incidents'
}

export const AccordionButton = ({ activeList, setActiveList, label, value }: AccordionButtonProps) => {
  return (
    <button 
    onClick={() => setActiveList(value)}
    className={`flex-1 rounded-box text-center font-bold transition-colors
      ${activeList === value
        ? 'bg-ai-dark text-ai-green border-2 border-ai-green' 
        : 'bg-ai-gray text-ai-text hover:bg-ai-dark'}`}
    >
      {label}
    </button>
  );
};
