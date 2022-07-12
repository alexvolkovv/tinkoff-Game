import { ComponentType } from 'react'
import { Login } from '../pages/Login/Login'
import { Home } from '../pages/Home/Home'
import { Room } from '../pages/Room/Room'

export type RouteType = {
  path: string
  component: ComponentType
  exact: boolean
}

export enum RouteTypes {
  LOGIN = '/login',
  HOME = '/',
  ROOM = '/room/:id',
}

export const publicRoutes: RouteType[] = [
  {
    path: RouteTypes.LOGIN,
    component: Login,
    exact: true,
  },
]

export const privateRoutes: RouteType[] = [
  {
    path: RouteTypes.HOME,
    component: Home,
    exact: true,
  },
  {
    path: RouteTypes.ROOM,
    component: Room,
    exact: true,
  },
]
