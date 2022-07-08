import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteTypes } from '../routes'
import { useAppSelector } from '../hooks/redux'

const AppRouter = () => {
  const currentUser = useAppSelector((state) => state.userReducer.user)

  return currentUser ? (
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
