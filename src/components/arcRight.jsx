import React, { useEffect, useRef } from "react";

const ArcRight = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 0.65;
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 0.5 * Math.PI);
    ctx.stroke();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="rotate-90 absolute right-[-165.5px] bottom-[-166px] text-white  "
    ></canvas>
  );
};

export default ArcRight;
