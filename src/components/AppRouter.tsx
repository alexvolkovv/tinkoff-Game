import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteTypes } from '../routes'

const AppRouter = () => {
  const isAuth: boolean = true

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path={'*'} element={<Navigate to={RouteTypes.HOME} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path={'*'} element={<Navigate to={RouteTypes.LOGIN} />} />
    </Routes>
  )
}

export default AppRouter
