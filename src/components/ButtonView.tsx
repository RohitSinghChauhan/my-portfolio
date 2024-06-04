import BtnAnimate from "./BtnAnimate";

const ButtonView = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <BtnAnimate
      className="rounded-md dark:bg-primary bg-secondary p-3"
      onClick={onClick}
    >
      <p className="text-black dark:text-white text-sm ">{label}</p>
    </BtnAnimate>
  );
};

export default ButtonView;
