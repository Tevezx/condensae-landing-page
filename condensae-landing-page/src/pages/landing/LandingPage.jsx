import Header from '../../widgets/header/Header.jsx'
import Hero from '../../widgets/hero/Hero.jsx'
import Benefits from '../../widgets/benefits/Benefits.jsx'
import Uses from '../../widgets/uses/Uses.jsx'
import Pricing from '../../widgets/pricing/Pricing.jsx'
import BusinessInquiry from '../../features/business-inquiry/BusinessInquiry.jsx'
import Faq from '../../widgets/faq/Faq.jsx'
import Footer from '../../widgets/footer/Footer.jsx'
import styles from './LandingPage.module.css'

export default function LandingPage(){return <div className={styles.page}><Header/><main><Hero/><div className={styles.marquee} aria-label="Abriu, apertou, adoçou"><span>ABRIU ✦ APERTOU ✦ ADOÇOU ✦ ABRIU ✦ APERTOU ✦ ADOÇOU ✦</span></div><Benefits/><Uses/><Pricing/><BusinessInquiry/><Faq/><section className={styles.finalCta}><span aria-hidden="true">🍓 ✦ 🍮</span><h2>A vida já é cheia de coisa.<br/><em>O docinho não precisa ser.</em></h2><p>Seu próximo momento feliz pode caber num sachê.</p><a href="#kits">Escolher meu kit <span aria-hidden="true">↗</span></a></section></main><Footer/></div>}
