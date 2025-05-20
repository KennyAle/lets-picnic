const NotFound = () => {
  return (
    <div className="w-full flex flex-col p-2 gap-2 items-center justify-center">
      <h1 className="font-bold text-xl tracking-tight">Page Not Found!</h1>
      <img className="rounded-3xl" src="/images/img_sorry.png" alt="" />
      <p className="font-bold text-xl tracking-tight">You need to go back.</p>
    </div>
  );
};

export default NotFound;
