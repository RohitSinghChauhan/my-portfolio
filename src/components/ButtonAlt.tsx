const ButtonAlt = ({
  label,
  onClick,
  icon,
}: {
  label: string;
  onClick: () => void;
  icon: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 border-b border-gray-200 dark:border-[#262626]
 text-gray-200 dark:text-[#262626]"
    >
      <p>{label}</p>
      {icon}
    </button>
  );
};

export default ButtonAlt;
