import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from 'pages/Home';
import { CharacterDetails } from 'pages/CharacterDetails';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="character/:id" element={<CharacterDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
