
export const AiStats = () => {
  return (
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
  );
};