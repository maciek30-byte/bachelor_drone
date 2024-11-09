import { NotificationCenter } from '../NotificationCenter/NotificationCenter';

export const Header = () => {
  return (
    <div className="navbar bg-ai-dark border-b border-ai-light px-4">
      <div className="flex-1 flex items-center ml-100" style={{ marginLeft: '300px' }}>
        <a className="btn btn-ghost text-xl">
          <span className="text-ai-green font-bold">Drone</span>
          <span className="text-ai-text">Fleet</span>
        </a>
      </div>
      
      <div className="flex-none gap-4">
        <div className="form-control">
          <input 
            type="text" 
            placeholder="Search..." 
            className="input bg-ai-gray border-ai-light focus:border-ai-green focus:ring-1 focus:ring-ai-green text-ai-text w-64"
          />
        </div>
        
        <NotificationCenter isWidget={true} />
        
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ring-2 ring-ai-green">
            <div className="w-10 rounded-full">
              <img alt="Avatar" src="https://via.placeholder.com/40" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-ai-gray rounded-box w-52 border border-ai-light">
            <li><a className="text-ai-text hover:text-ai-green">Profile</a></li>
            <li><a className="text-ai-text hover:text-ai-green">Settings</a></li>
            <li><a className="text-ai-text hover:text-ai-green">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};