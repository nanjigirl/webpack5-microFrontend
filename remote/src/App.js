import React from 'react';
import NewsList from './NewsList';

const RemoteSlides = React.lazy(() => import('host/Slides'))

const App = () => (
  <div>
    <h1>本地组件NewsList1</h1>
    <NewsList />
    <h1>远程组件Slides</h1>
    <React.Suspense fallback="Loading Slides">
      <RemoteSlides />
    </React.Suspense>
  </div>
)

export default App;