import animationData from "assets/animations/anim-client.json";
import Lottie from "lottie-react";
import { FC, PropsWithChildren } from "react";

const AminClient: FC<PropsWithChildren<{ loop?: boolean }>> = ({
  loop = true,
}) => {
  return (
    <div>
      <Lottie loop={loop} autoPlay={true} animationData={animationData} />
    </div>
  );
};

export default AminClient;
