export const ButtonsSection = ({handleCancel}: {handleCancel: () => void}) => {
  return (
    <div className="card-actions justify-between mt-6 pt-4 border-t border-base-300">
    <button
      type="button"
      className="btn btn-error btn-outline"
      onClick={handleCancel}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      Cancel Mission
    </button>
    <button type="submit" className="btn btn-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
      Accept Parameters
    </button>
  </div>
  );
};
