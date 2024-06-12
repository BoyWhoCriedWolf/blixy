import animationData from "assets/animations/anim-compliance.json";
import Lottie from "lottie-react";
import { FC, PropsWithChildren } from "react";

const AnimCompliance: FC<PropsWithChildren<{ loop?: boolean }>> = ({
  loop = true,
}) => {
  return (
    <div>
      <Lottie loop={loop} autoPlay={true} animationData={animationData} />
    </div>
  );
};

export default AnimCompliance;
