import { createBrowserRouter } from 'react-router-dom'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import App from './App'
import Categories from './pages/categories'
import MenuPage from './pages/menu'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'categories', element: <Categories /> }, // Add categories route
      { path: 'menu', element: <MenuPage /> },
    ]
  }
])