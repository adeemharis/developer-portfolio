import React from "react";
import Lottie from "react-lottie";

type Props = {
  animationPath: string;
};

const GreetingLottie = ({ animationPath }: Props) => {
  if (typeof window === "undefined") {
    // Return an empty placeholder if rendering on the server
    return null;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require(animationPath), // Ensure this is correctly resolved
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div onClick={() => null}>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
