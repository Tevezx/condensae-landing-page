import { useEffect } from 'react'
import Button from '../../shared/ui/Button.jsx'
import styles from './PurchaseModal.module.css'
export default function PurchaseModal({ product, onClose }) {
 useEffect(()=>{const handleKey=(event)=>{if(event.key==='Escape')onClose()};window.addEventListener('keydown',handleKey);document.body.style.overflow='hidden';return()=>{window.removeEventListener('keydown',handleKey);document.body.style.overflow=''}},[onClose])
 if(!product)return null
 return <div className={styles.backdrop} role="presentation" onMouseDown={(event)=>{if(event.target===event.currentTarget)onClose()}}><section className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="purchase-title"><button className={styles.close} type="button" onClick={onClose} aria-label="Fechar janela">×</button><span className={styles.emoji}>🍮</span><span className="eyebrow">SIMULAÇÃO DE PEDIDO</span><h2 id="purchase-title">Um docinho a caminho!</h2><p>Você escolheu <strong>{product.name}</strong>, com {product.count} {product.count===1?'sachê':'sachês'} por <strong>R$ {product.price.toLocaleString('pt-BR',{minimumFractionDigits:2})}</strong>.</p><div className={styles.notice}>Esta é uma demonstração acadêmica. Nenhuma compra, cobrança ou envio será realizado.</div><Button onClick={onClose}>Beleza, entendi!</Button></section></div>
}
