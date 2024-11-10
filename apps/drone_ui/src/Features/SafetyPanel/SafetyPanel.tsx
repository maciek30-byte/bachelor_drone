 export const SafetyPanel = () => {
    return (
      <div className="card w-150 bg-base-100 shadow-xl border-2 border-warning">
        {/* Header */}
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center justify-center">
            Safety Control Panel
          </h2>
          
          {/* Status Indicator */}
          <div className="alert alert-success mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>System AI: Active</span>
          </div>
  
          {/* Emergency Button */}
          <button className="btn btn-error btn-lg gap-2 mt-4" onClick={() => window.my_modal_1.showModal()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Shutdown AI and Switch to Operator
          </button>
  
          {/* Confirmation Modal */}
          <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg text-error">Warning!</h3>
              <p className="py-4">Are you sure you want to switch to manual control? This will override all AI decisions and recall all drones to base.</p>
              <div className="modal-action">
                <button className="btn btn-error">Yes, proceed</button>
                <button className="btn">Cancel</button>
              </div>
            </form>
          </dialog>
        </div>
      </div>
    );
  };
  
  export default SafetyPanel;