import { RadioButtonChecked } from "@material-ui/icons";
import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Webcam from "react-webcam";
import { setCameraImage } from "./features/cameraSlice";
import "./WebcamCapture.css";

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imageSrc));
    console.log(imageSrc)
    history.push('/preview')
  }, [webcamRef]);

  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
      <RadioButtonChecked
        className="webcamCapture__button"
        onClick={capture}
        fontSize="large"
      />
    </div>
  );
};

export default WebcamCapture;
