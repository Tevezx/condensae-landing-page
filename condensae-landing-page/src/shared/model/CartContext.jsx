import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const addItem = useCallback((product) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      return [...current, { ...product, quantity: 1 }]
    })
  }, [])
  const setQuantity = useCallback((id, quantity) => {
    setItems((current) => quantity <= 0 ? current.filter((item) => item.id !== id) : current.map((item) => item.id === id ? { ...item, quantity: Math.min(99, quantity) } : item))
  }, [])
  const removeItem = useCallback((id) => setItems((current) => current.filter((item) => item.id !== id)), [])
  const clearCart = useCallback(() => setItems([]), [])
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const value = useMemo(() => ({ items, addItem, setQuantity, removeItem, clearCart, totalQuantity, total }), [items, addItem, setQuantity, removeItem, clearCart, totalQuantity, total])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart precisa ser usado dentro de CartProvider')
  return context
}
