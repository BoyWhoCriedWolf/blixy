import animationData from "assets/animations/anim-welcome.json";
import Lottie from "lottie-react";

const AminWelcome = () => {
  return (
    <div>
      <Lottie loop={true} autoPlay={true} animationData={animationData} />
    </div>
  );
};

export default AminWelcome;
