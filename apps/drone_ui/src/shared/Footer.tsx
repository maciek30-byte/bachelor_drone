export const Footer = () => {
  return (
    <footer className="navbar bg-ai-dark border-t border-ai-light px-4">
      <div className="flex justify-between items-center w-full">
        {/* AI Stats - Simplified */}
        <div className="stats shadow bg-ai-gray stats-horizontal">
          <div className="stat place-items-center p-2">
            <div className="stat-title text-xs text-ai-text">Decisions</div>
            <div className="stat-value text-sm text-ai-text">1,284</div>
          </div>
          
          <div className="stat place-items-center p-2">
            <div className="stat-title text-xs text-ai-text">Success</div>
            <div className="stat-value text-sm text-success">89%</div>
          </div>
          
          <div className="stat place-items-center p-2">
            <div className="stat-title text-xs text-ai-text">Response</div>
            <div className="stat-value text-sm text-info">1.2s</div>
          </div>
        </div>

        {/* Quick Status */}
        <div className="flex gap-2">
          <div className="badge badge-outline gap-2 text-ai-text">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            AI Active
          </div>
          <div className="badge badge-outline text-ai-text">v1.0.0</div>
        </div>

        {/* Quick Links */}
        <div className="flex gap-2">
          <button className="btn btn-xs btn-ghost text-ai-text hover:text-ai-green">Docs</button>
          <button className="btn btn-xs btn-ghost text-ai-text hover:text-ai-green">Logs</button>
          <button className="btn btn-xs btn-primary bg-ai-green border-ai-green hover:bg-ai-green/80">
            View All
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}