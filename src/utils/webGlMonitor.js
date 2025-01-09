import React, { useEffect } from 'react';

const WebGLMonitor = () => {
  useEffect(() => {
    // Monitorear los contextos WebGL
    const glContexts = WebGLRenderingContext.prototype;
    console.log("WebGL contexts:", glContexts);
  }, []);

  return null; // No es necesario renderizar nada
};

export default WebGLMonitor;