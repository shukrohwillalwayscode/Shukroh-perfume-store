type ButtonProps = {
  children?: string;
  onClick?: () => void;
  className?: string;
};

export function Button({ children, onClick, className = "" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={` px-[60px] py-[10px] rounded-lg text-white bg-transparent  border-white border-3  font-bold text-[20px] ${className} `}
    >
      {children}
    </button>
  );
}
