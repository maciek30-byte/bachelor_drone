export const Footer = () => {
    return (
      <footer className="footer p-4 bg-base-300 text-base-content">
        <div className="flex justify-between items-center w-full">
          {/* AI Stats - Simplified */}
          <div className="stats shadow bg-base-200 stats-horizontal">
            <div className="stat place-items-center p-2">
              <div className="stat-title text-xs">Decisions</div>
              <div className="stat-value text-sm">1,284</div>
            </div>
            
            <div className="stat place-items-center p-2">
              <div className="stat-title text-xs">Success</div>
              <div className="stat-value text-sm text-success">89%</div>
            </div>
            
            <div className="stat place-items-center p-2">
              <div className="stat-title text-xs">Response</div>
              <div className="stat-value text-sm text-info">1.2s</div>
            </div>
          </div>

          {/* Quick Status */}
          <div className="flex gap-2">
            <div className="badge badge-outline gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              AI Active
            </div>
            <div className="badge badge-outline">v1.0.0</div>
          </div>

          {/* Quick Links */}
          <div className="flex gap-2">
            <button className="btn btn-xs btn-ghost">Docs</button>
            <button className="btn btn-xs btn-ghost">Logs</button>
            <button className="btn btn-xs btn-primary">
              View All
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    );
};