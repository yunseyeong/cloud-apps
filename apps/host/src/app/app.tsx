import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Mfe1 = React.lazy(() => import('mfe1/Module'));
const Mfe2 = React.lazy(() => import('mfe2/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mfe1">Mfe1</Link>
        </li>
        <li>
          <Link to="/mfe2">Mfe2</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />
        <Route path="/mfe1" element={<Mfe1 />} />
        <Route path="/mfe2" element={<Mfe2 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
