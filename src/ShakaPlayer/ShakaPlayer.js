import React, { useEffect, useRef, useState } from "react";
import shaka from "shaka-player";

const ShakaPlayer = () => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [playerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current; // Get the video element
    const player = new shaka.Player(video); // Create a Shaka Player instance

    playerRef.current = player; // Store player instance for future use

    // Listen for errors
    player.addEventListener("error", onErrorEvent); // Attach error event listener

    // Try loading a DASH or HLS stream
    const manifestUri =
      "https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd";

    player
      .load(manifestUri)
      .then(() => {
        console.log("Video is ready to play!");
        setPlayerReady(true);
      })
      .catch(onError); // onError is executed if the asynchronous load fails

    function onErrorEvent(event) {
      onError(event.detail);
    }

    function onError(error) {
      console.error("Error code", error.code, "object", error);
    }

    // Cleanup on unmount
    return () => {
      player.destroy();
    };
  }, []);
  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>🎬 React Shaka Player Example</h2>
      <video
        ref={videoRef}
        width="500"
        height="350"
        controls
        autoPlay
        style={{ borderRadius: "10px", boxShadow: "0 0 10px #999" }}
      ></video>
    </div>
  );
};

export default ShakaPlayer;
