export const UserWidget = () => {
  return (
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
  );
};