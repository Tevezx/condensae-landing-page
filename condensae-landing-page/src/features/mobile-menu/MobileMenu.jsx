import { useState } from 'react'
import styles from './MobileMenu.module.css'

const links = [['#produto', 'O produto'], ['#como-usar', 'Como usar'], ['#kits', 'Kits'], ['#comercial', 'Para negócios']]
export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  return <div className={styles.wrapper}>
    <button className={styles.toggle} type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
    <nav className={`${styles.nav} ${open ? styles.open : ''}`} aria-label="Navegação principal">
      {links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className={styles.cta} href="#kits" onClick={() => setOpen(false)}>Quero provar <span aria-hidden="true">↗</span></a>
    </nav>
  </div>
}
