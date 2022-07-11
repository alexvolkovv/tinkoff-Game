import { useCallback, useRef } from 'react'

export function useDebounce(callback: (value: string) => void, delay: number) {
  const timer = useRef<any>()

  const debouncedCallback = useCallback(
    (...args: any) => {
      if (timer.current) {
        clearTimeout(timer.current)
      }

      timer.current = setTimeout(() => {
        callback(args)
      }, delay)
    },
    [callback, delay]
  )

  return debouncedCallback
}
