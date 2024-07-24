const Preloader = ({ className }) => {
  return (
    <div
      className={`h-full w-full fixed top-0 right-0 bottom-0 left-0 bg-[#FD6061] flex items-center justify-center ${className}`}
    >
      <img src="/egg.gif" alt="preloader" className="w-[320px] h-[240px]" />
    </div>
  );
};

export default Preloader;
