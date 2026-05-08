type ArrowType = {
  img: string;
  onClick: () => void;
};

export function SwitchBtn({ img, onClick }: ArrowType) {
  return (
    <span
      onClick={onClick}
      className="w-[40px] h-[40px] rounded-full border border-gray-500 flex justify-center items-center shrink-0 cursor-pointer"
    >
      <img className="w-[16px] h-[16px]" src={img} alt="arrow" />
    </span>
  );
}
