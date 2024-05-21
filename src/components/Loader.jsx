import React from "react";
import Loader from "react-js-loader";

function LoaderItem() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <Loader
        type="spinner-default"
        bgColor="blue"
        color="grey"
        title={"Loading"}
        size={100}
      />
    </div>
  );
}

export default LoaderItem;
