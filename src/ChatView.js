import React, { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./ChatView.css";
import { selectSelectedImage } from "./features/appSlice";

function ChatView() {
  const selectedImage = useSelector(selectSelectedImage);
  const history = useHistory();

  useEffect(() => {
    if (!selectedImage) {
      exit();
    }
    return () => {};
  }, [selectedImage]);

  const exit = () => {
    history.replace("/chats");
  };

  const UrgeWithPleasureComponent = () => (
    <CountdownCircleTimer
      isPlaying
      duration={10}
      strokeWidth={6}
      size={50}
      colors={[
        ["#004777", 0.33],
        ["#F7B801", 0.33],
        ["#A30000", 0.33],
      ]}
    >
      {({ remainingTime }) => {
        if (remainingTime === 0) {
          exit();
        }
        return remainingTime;
      }}
    </CountdownCircleTimer>
  );

  return (
    <div className="chatView">
      <img onClick={exit} src={selectedImage} alt="" />
      <div className="chatView__timer">
      {UrgeWithPleasureComponent()}
      </div>
    </div>
  );
}

export default ChatView;
