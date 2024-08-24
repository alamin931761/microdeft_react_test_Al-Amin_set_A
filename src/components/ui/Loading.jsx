import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <ReactLoading type="spokes" color="red" height={100} width={100} />
    </div>
  );
};

export default Loading;
