import React, { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";

const TopLoadingBar = ({ loaded }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    loaded && setProgress(loaded);
  }, [loaded]);
  const barColor = "#f11946";
  return (
    <LoadingBar
      color={barColor}
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
  );
};

export default TopLoadingBar;
