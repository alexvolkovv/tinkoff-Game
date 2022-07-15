import { useCallback } from 'react'

export const useInterval = (callback: Function, interval: number) => {
  return useCallback((...args: any) => {
    return setInterval(() => {
      callback(args)
    }, interval)
  }, [])
}
