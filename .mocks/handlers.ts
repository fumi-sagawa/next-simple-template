import { rest } from 'msw'
import { mockLogin } from './resolvers/login'
import { mockLogout } from './resolvers/logout'
import { mockBooks } from './resolvers/books'

export const handlers = [
  rest.post('/login', mockLogin),
  rest.post('/logout', mockLogout),
  rest.get('/books', mockBooks.get),
]
