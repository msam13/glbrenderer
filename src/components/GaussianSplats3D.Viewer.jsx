import React, { useEffect, useRef } from 'react';
import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d';

const GaussianSplatsViewer = ({ filePath }) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    const viewer = new GaussianSplats3D.Viewer({
      cameraUp: [0, -1, -0.6],
      initialCameraPosition: [-1, -4, 6],
      initialCameraLookAt: [0, 4, 0],
    });

    viewerRef.current = viewer;

    viewer.addSplatScene(filePath, {
      splatAlphaRemovalThreshold: 5,
      showLoadingUI: true,
      position: [0, 1, 0],
      rotation: [0, 0, 0, 1],
      scale: [1.5, 1.5, 1.5],
    }).then(() => {
      viewer.start();
    });

    // Cleanup function to stop the viewer when the component is unmounted
    return () => {
      viewer.stop();
      viewerRef.current = null;
    };
  }, [filePath]);

  return <div id="viewer-container" />;
};

export default GaussianSplatsViewer;
