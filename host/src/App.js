import React from 'react';
import Slides from './Slides';

const RemoteNewsList = React.lazy(() => import('remote/NewsList'))
const App = () => (
  <div>
    <h1>本地组件Slides</h1>
    <Slides />
    <h1>远程组件NewsList</h1>
    <React.Suspense fallback="loading NewsList">
      <div>123</div>
      <RemoteNewsList />
    </React.Suspense>
  </div>
)

export default App;