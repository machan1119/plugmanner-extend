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
      className={`rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[8px] xl:rounded-[8px] py-2 sm:py-3 md:py-3 lg:py-3 xl:py-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[20px] bg-primary font-clash font-semibold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-white leading-[16px] sm:leading-[18px] md:leading-[20px] lg:leading-[22px] xl:leading-[25px] transition-all duration-300 hover:bg-accent ${className}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
