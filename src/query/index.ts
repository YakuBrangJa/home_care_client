import {User} from '@/types/user.type'
import {createQuery, QueryCache, QueryClient} from '@tanstack/solid-query'

export const queryClient = new QueryClient()

export const queryCache = new QueryCache({
  onError: (error) => {
    console.log(error)
  },
  onSuccess: (data) => {
    console.log(data)
  },
  onSettled: (data, error) => {
    console.log(data, error)
  },
})

export function signupUser () {
  return createQuery(() => ({
    queryKey: ['signup'],
    queryFn: async (): Promise<User> => {
      const response = await fetch('http://localhost:9000')
      return await response.json()
    },
  }))
}

export function getUsers () {
  return createQuery(() => ({
    queryKey: ['users'],
    queryFn: async (): Promise<User[]> => {
      const response = await fetch('http://localhost:9000/users')
      return await response.json()
    },
  }))
}
