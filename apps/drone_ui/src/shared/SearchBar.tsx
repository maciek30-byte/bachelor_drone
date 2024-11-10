export const SearchBar = () => {
  return (
    <div className="form-control">
          <input 
            type="text" 
            placeholder="Search..." 
            className="input bg-ai-gray border-ai-light focus:border-ai-green focus:ring-1 focus:ring-ai-green text-ai-text w-64"
          />
        </div>
  );
};