import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import ShoppingPanel from './components/shopping-panel'
import { CartProvider } from './contexts/CartContext'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <CartProvider>
      <div className={`app min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
        <Header 
          darkMode={darkMode} 
          toggleTheme={toggleTheme}
        />
        
        <main className="flex-grow">
          <Outlet />
        </main>
        
        <ShoppingPanel />
      </div>
    </CartProvider>
  )
}

export default App