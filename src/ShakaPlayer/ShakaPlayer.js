import React, { useEffect, useRef, useState } from "react";
import shaka from "shaka-player";

const ShakaPlayer = () => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Angel One (DASH)",
      thumbnail:
        "https://storage.googleapis.com/shaka-demo-assets/angel-one/poster.jpg",
      url: "https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd",
    },
    {
      id: 2,
      title: "Big Buck Bunny (DASH)",
      thumbnail:
        "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",
      url: "https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths/dash.mpd",
    },
    {
      id: 3,
      title: "Sintel (HLS)",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/commons/6/66/Sintel_poster.jpg",
      url: "https://storage.googleapis.com/shaka-demo-assets/sintel/hls.m3u8",
    },
  ];

  useEffect(() => {
    const video = videoRef.current;
    const player = new shaka.Player(video);

    playerRef.current = player;
    player.addEventListener("error", (e) => console.error("Error", e.detail));

    return () => {
      player.destroy();
    };
  }, []);

  const playVideo = async (url) => {
    const player = playerRef.current;
    const video = videoRef.current;

    try {
      await player.load(url);
      setCurrentVideo(url);
      video.play();
    } catch (error) {
      console.error("Error loading video", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h2>🎬 React Shaka Player Video Gallery</h2>

      {/* Video Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          margin: "20px 0",
        }}
      >
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => playVideo(video.url)}
            style={{
              width: "200px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
              overflow: "hidden",
              cursor: "pointer",
              background:
                currentVideo === video.url ? "#d1e7dd" : "white",
              transition: "transform 0.2s",
            }}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              style={{ width: "100%", height: "120px", objectFit: "cover" }}
            />
            <div style={{ padding: "10px" }}>
              <h4
                style={{
                  fontSize: "14px",
                  color: "#333",
                  margin: "0",
                  fontWeight: "600",
                }}
              >
                {video.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Video Player */}
      <video
        ref={videoRef}
        width="640"
        controls
        style={{
          borderRadius: "10px",
          boxShadow: "0 0 10px #999",
        }}
      ></video>
    </div>
  );
};

export default ShakaPlayer;
