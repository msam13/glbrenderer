// src/App.jsx
import React from 'react';
import ModelViewer from './components/ModelViewer';
import GaussianSplatsViewer from './components/GaussianSplats3D.Viewer';

// const App = () => {
//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <ModelViewer />
//     </div>
//   );
// };

// export default App;


const App = () => {
  const filePath = '/assets/bonsai_trimmed.ksplat';

  return (
    <div>
      <h1>3D Viewer</h1>
      <GaussianSplatsViewer filePath={filePath} />
    </div>
  );
};

export default App;