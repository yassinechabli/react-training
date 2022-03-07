import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from 'routes/routes';

function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
