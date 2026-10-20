import { useState } from 'react'
import { products } from '../../shared/data/content.js'
import { useCart } from '../../shared/model/CartContext.jsx'
import KitSelector from '../../features/kit-selector/KitSelector.jsx'
import Button from '../../shared/ui/Button.jsx'
import styles from './Pricing.module.css'

const money = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function Pricing() {
  const [selectedId, setSelectedId] = useState('six')
  const [feedback, setFeedback] = useState('')
  const { addItem } = useCart()
  const selected = products.find((product) => product.id === selectedId) ?? products[0]
  const addSelected = () => {
    addItem(selected)
    setFeedback(`${selected.name} adicionado à sua sacola!`)
    window.setTimeout(() => setFeedback(''), 3500)
  }
  return <section className={styles.section} id="kits">
    <div className={styles.heading}><span className="eyebrow">O TAMANHO DA SUA VONTADE</span><h2>Escolha seu <em>nível de formiguinha.</em></h2><p>Monte sua sacola com preços ilustrativos para esta demonstração.</p></div>
    <KitSelector products={products} selectedId={selectedId} onSelect={(id) => { setSelectedId(id); setFeedback('') }} />
    <div className={styles.checkout}><div><span>Seu combo escolhido</span><strong>{selected.count} {selected.count === 1 ? 'sachê' : 'sachês'} · {selected.name}</strong></div><div className={styles.total}><small>Preço ilustrativo por kit</small><strong>{money(selected.price)}</strong></div><Button onClick={addSelected}>Adicionar à sacola <span aria-hidden="true">＋</span></Button></div>
    <p className={styles.fineprint}>Valores fictícios, sem frete ou cobrança. Esta página não vende produtos reais.</p>
    <p className={styles.feedback} role="status" aria-live="polite">{feedback}</p>
  </section>
}
