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
      className={`cursor-pointer rounded-[8px] py-3 xl:py-4 px-[20px] bg-primary hover:bg-[#007645] active:bg-primary/50 font-clash font-semibold text-white leading-[11px] text-[14px] lg:text-[18px] lg:leading-[20px] xl:text-[20px] xl:leading-[25px] ${className}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
