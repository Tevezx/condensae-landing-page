import { useEffect, useRef, useState } from 'react'
import { useCart } from '../../shared/model/CartContext.jsx'
import Button from '../../shared/ui/Button.jsx'
import styles from './CartWidget.module.css'

const money = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function CartWidget() {
  const { items, setQuantity, removeItem, clearCart, totalQuantity, total } = useCart()
  const [open, setOpen] = useState(false)
  const [confirmation, setConfirmation] = useState(false)
  const closeButton = useRef(null)
  useEffect(() => { if (open) closeButton.current?.focus() }, [open])
  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])
  const finishOrder = () => { setConfirmation(true); clearCart() }

  return <>
    <button className={styles.cartButton} type="button" onClick={() => { setOpen(true); setConfirmation(false) }} aria-label={`Abrir carrinho, ${totalQuantity} itens`}>
      <span aria-hidden="true">🛍</span><span className={styles.cartLabel}>Sacola</span><span className={styles.count}>{totalQuantity}</span>
    </button>
    {open && <div className={styles.overlay} onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false) }}>
      <section className={styles.drawer} role="dialog" aria-modal="true" aria-labelledby="cart-title">
        <header className={styles.drawerHeader}><div><span className="eyebrow">SEU DOCINHO</span><h2 id="cart-title">Minha sacola <span aria-hidden="true">🍮</span></h2></div><button ref={closeButton} className={styles.close} type="button" onClick={() => setOpen(false)} aria-label="Fechar sacola">×</button></header>
        {confirmation ? <div className={styles.empty}><span className={styles.emptyIcon} aria-hidden="true">🎉</span><h3>Pedido simulado!</h3><p>Seu pedido de demonstração foi concluído. Nenhuma compra ou cobrança foi realizada.</p><Button onClick={() => { setConfirmation(false); setOpen(false) }}>Continuar explorando</Button></div> : items.length === 0 ? <div className={styles.empty}><span className={styles.emptyIcon} aria-hidden="true">🛍️</span><h3>Sua sacola está vazia</h3><p>Escolha um kit e deixe essa vontade mais doce.</p><Button onClick={() => { setOpen(false); document.querySelector('#kits')?.scrollIntoView({ behavior: 'smooth' }) }}>Ver os kits</Button></div> : <>
          <ul className={styles.items}>{items.map((item) => <li className={styles.item} key={item.id}><div className={styles.productIcon} aria-hidden="true">🍮</div><div className={styles.itemDetails}><strong>{item.name}</strong><span>{item.count} {item.count === 1 ? 'sachê' : 'sachês'} por kit</span><b>{money(item.price * item.quantity)}</b><div className={styles.quantity} aria-label={`Quantidade de ${item.name}`}><button type="button" onClick={() => setQuantity(item.id, item.quantity - 1)} aria-label={`Diminuir ${item.name}`}>−</button><output aria-live="polite">{item.quantity}</output><button type="button" onClick={() => setQuantity(item.id, item.quantity + 1)} disabled={item.quantity >= 99} aria-label={`Aumentar ${item.name}`}>+</button></div></div><button className={styles.remove} type="button" onClick={() => removeItem(item.id)} aria-label={`Remover ${item.name}`}>Remover</button></li>)}</ul>
          <div className={styles.summary}><div><span>Subtotal</span><strong>{money(total)}</strong></div><div><span>Frete</span><strong>Não calculado</strong></div><div className={styles.grandTotal}><span>Total ilustrativo</span><strong>{money(total)}</strong></div><p>Preços fictícios. Este fluxo é apenas uma simulação acadêmica.</p><Button className={styles.checkoutButton} onClick={finishOrder}>Finalizar pedido simulado <span aria-hidden="true">↗</span></Button><button className={styles.clear} type="button" onClick={clearCart}>Esvaziar sacola</button></div>
        </>}
      </section>
    </div>}
  </>
}
