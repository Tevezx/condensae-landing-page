import MobileMenu from '../../features/mobile-menu/MobileMenu.jsx'
import CartWidget from '../cart/CartWidget.jsx'
import styles from './Header.module.css'
export default function Header() {
  return <header className={styles.header}>
    <a className={styles.brand} href="#inicio" aria-label="CONDENSAÊ — início"><span className={styles.logoMark}>C!</span><span>CONDENSAÊ<small>ABRIU, APERTOU, ADOÇOU.</small></span></a>
    <div className={styles.actions}><MobileMenu /><CartWidget /></div>
  </header>
}
