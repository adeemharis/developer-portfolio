// import React from "react";
// import Lottie from "react-lottie";

// type Props = {
//   animationPath: string;
// };

// const GreetingLottie = ({ animationPath }: Props) => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     path: animationPath,
//   };

//   return (
//     <div onClick={() => null}>
//       {/* @ts-ignore */}
//       <Lottie options={defaultOptions} />
//     </div>
//   );
// };

// export default GreetingLottie;
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

type DisplayLottieProps = {
  animationPath: string;
};

const DisplayLottie = ({ animationPath }: DisplayLottieProps) => {
  if (typeof window === "undefined") {
    return null; // Render nothing on the server
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require(`../animations/${animationPath}`),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={300} width={300} />;
};

export default DisplayLottie;
