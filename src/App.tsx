import{ Suspense } from 'react';

import RenderRouter from './routers';
export function App() {
  return (
    <div>
      <Suspense fallback={<div>...</div>}>
        <RenderRouter />
      </Suspense>
    </div>
  )
}