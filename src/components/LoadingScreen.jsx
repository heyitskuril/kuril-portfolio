export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="mb-4 text-4xl font-mono font-bold">Hello World<span className="animate-blink ml-1"></span></div>

        <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-1/3 bg-blue-600 animate-loading"></div>
        </div>
    </div>
  );
}