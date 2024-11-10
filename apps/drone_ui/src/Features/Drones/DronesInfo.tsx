export const DronesInfo = () => {
    // Mock data - in real app this would come from props or state
    const droneStats = {
        total: 12,
        active: 8,
        available: 4,
        battery: {
            high: 5,
            medium: 4,
            low: 3
        }
    };

    return (
        <div className="bg-base-200 h-full p-4">
            {/* Main Stats */}
            <div className="stats shadow w-full bg-base-100">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </div>
                    <div className="stat-title">Total Drones</div>
                    <div className="stat-value text-primary">{droneStats.total}</div>
                </div>
                
                <div className="stat">
                    <div className="stat-figure text-success">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </div>
                    <div className="stat-title">Active Drones</div>
                    <div className="stat-value text-success">{droneStats.active}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                    </div>
                    <div className="stat-title">Available Drones</div>
                    <div className="stat-value text-secondary">{droneStats.available}</div>
                </div>
            </div>

            {/* Battery Status */}
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="card bg-success text-success-content">
                    <div className="card-body p-4">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-lg font-bold">High Battery</span>
                        </div>
                        <div className="stat-value">{droneStats.battery.high}</div>
                        <div className="text-sm opacity-75">Above 75%</div>
                    </div>
                </div>

                <div className="card bg-warning text-warning-content">
                    <div className="card-body p-4">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span className="text-lg font-bold">Medium Battery</span>
                        </div>
                        <div className="stat-value">{droneStats.battery.medium}</div>
                        <div className="text-sm opacity-75">40% - 75%</div>
                    </div>
                </div>

                <div className="card bg-error text-error-content">
                    <div className="card-body p-4">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span className="text-lg font-bold">Low Battery</span>
                        </div>
                        <div className="stat-value">{droneStats.battery.low}</div>
                        <div className="text-sm opacity-75">Below 40%</div>
                    </div>
                </div>
            </div>
        </div>
    );
};