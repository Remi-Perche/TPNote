import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import WishlistProvider from './context/WishlistProvider.jsx'
import SearchProvider from './context/SearchProvider.jsx'

createRoot(document.getElementById('root')).render(
  <WishlistProvider>
    <SearchProvider>
      <App />
    </SearchProvider>
  </WishlistProvider>
)
