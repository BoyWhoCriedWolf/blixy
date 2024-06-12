import animationData from "assets/animations/anim-meeting.json";
import Lottie from "lottie-react";
import { FC, PropsWithChildren } from "react";

const AminMeeting: FC<PropsWithChildren<{ loop?: boolean }>> = ({
  loop = true,
}) => {
  return (
    <div>
      <Lottie loop={loop} autoPlay={true} animationData={animationData} />
    </div>
  );
};

export default AminMeeting;
