import { ComponentType } from 'react'
import { Login } from '../pages/Login/Login'
import { Home } from '../pages/Home/Home'
import { Game } from '../pages/Game'

export type RouteType = {
  path: string
  component: ComponentType
  exact: boolean
}

export enum RouteTypes {
  LOGIN = '/login',
  HOME = '/',
  GAME = '/game',
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
    path: RouteTypes.GAME,
    component: Game,
    exact: true,
  },
]
