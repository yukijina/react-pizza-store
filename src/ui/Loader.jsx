function Loader() {
  return (
    // inset - stretch background, top,bottom.right,left = 0
    // add opacity after color - this meaning background opacity 20%
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
