import { cookies } from 'next/headers'
import decode from 'jwt-decode'

interface User {
  sub: string
  name: string
  avatarUrl: string
}

export function getUser(): User {
  const token = cookies().get('token')?.value
  console.log(cookies());

  if (!token) {
    throw new Error('Unauthenticated.')
  }
  
  const user: User = decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSnVuaW9yIiwiYXZhdGFyVXJsIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91Lzk1NDQzODcxP3Y9NCIsInN1YiI6ImMzMDIxYzdjLWFkOTItNGZjMC1hYWQxLWVjNGM1OGQ0OTMxNCIsImlhdCI6MTY4NDU1MDM5OSwiZXhwIjoxNjg3MTQyMzk5fQ.d3LLK7e3roJfLq-GAjU3eo4Kn_xn9xGhqQxMg2xPKjg")
  return user
}