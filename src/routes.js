import React from 'react'

const Home = React.lazy(() => import('./views/Home'))
const CountdownView = React.lazy(() => import('./views/Timer'))

const routes = [
  { path: '/', name: 'Home', element: Home, exact: true },
  { path: '/countdown', name: 'CountdownView', element: CountdownView, exact: true },
]

export default routes
