const CloseButton = ({ onClose }: { onClose: () => void }) => {
  return (
    <button
      onClick={onClose}
      className="text-gray-800 dark:text-white focus:outline-none"
    >
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
  );
};

export default CloseButton;
