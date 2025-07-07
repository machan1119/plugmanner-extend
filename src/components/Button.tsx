export function MainButton({
  title,
  className,
  handleClick,
}: {
  title: string;
  className?: string;
  handleClick?: () => void;
}) {
  return (
    <button
      className={`rounded-[8px] py-4 px-6 bg-primary font-clash font-semibold text-[20px] text-white leading-[25px] ${className}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
