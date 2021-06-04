import React from 'react';

const RemoteNewsList = React.lazy(() => import('remote/NewsList'))
const RemoteSlides = React.lazy(() => import('host/Slides'))

const App = () => (
  <div>
    <h1>远程组件NewsList</h1>
    <React.Suspense fallback="loading NewsList">
      <RemoteSlides />
      <RemoteNewsList />
    </React.Suspense>
  </div>
)

export default App;