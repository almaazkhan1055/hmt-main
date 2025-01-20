import React, { useEffect, useRef } from "react";

const ArcLeft = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 0.65;
    ctx.beginPath();

    ctx.arc(95, 50, 40, 0.5 * Math.PI, Math.PI);
    ctx.stroke();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="rotate-[-90deg] absolute top-[-70px] right-[17px] text-white"
    ></canvas>
  );
};

export default ArcLeft;
