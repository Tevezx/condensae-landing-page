import LandingPage from '../pages/landing/LandingPage.jsx'
import { CartProvider } from '../shared/model/CartContext.jsx'

export default function App() {
  return <CartProvider><LandingPage /></CartProvider>
}
