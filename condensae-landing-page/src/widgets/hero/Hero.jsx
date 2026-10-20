import Button from '../../shared/ui/Button.jsx'
import styles from './Hero.module.css'
export default function Hero() {
  return <section className={styles.hero} id="inicio">
    <div className={styles.copy}>
      <span className={styles.eyebrow}><span>✦</span> UM DOCINHO DE IDEIA</span>
      <h1>A vontade bateu?<br/><span>CONDENSAÊ!</span></h1>
      <p>Todo o sabor do leite condensado em uma porção que cabe na sua rotina. Sem lata, sem colherada calculada, sem drama.</p>
      <div className={styles.actions}><Button onClick={() => document.querySelector('#kits')?.scrollIntoView({ behavior: 'smooth' })}>Quero experimentar <span aria-hidden="true">↗</span></Button><a href="#produto" className={styles.textLink}>Conheça o produto <span>↓</span></a></div>
      <div className={styles.note}><span>♡</span> Pequeno no tamanho. Gigante na vontade.</div>
    </div>
    <div className={styles.visual} aria-label="Ilustração decorativa de um sachê de leite condensado CONDENSAÊ">
      <div className={styles.sunburst}></div><span className={`${styles.sparkle} ${styles.sparkleOne}`}>✦</span><span className={`${styles.sparkle} ${styles.sparkleTwo}`}>✧</span>
      <div className={styles.sticker}>DOCE<br/>NA MEDIDA<br/><b>♡</b></div>
      <div className={styles.packet}><div className={styles.packetTop}></div><div className={styles.packetBrand}>CONDENSAÊ</div><div className={styles.packetDrip}></div><div className={styles.packetSubtitle}>LEITE CONDENSADO</div><div className={styles.packetWeight}>PORÇÃO INDIVIDUAL</div><div className={styles.packetBottom}></div></div>
      <div className={styles.caption}>seu momento<br/><b>mais docinho</b> 🍓</div>
    </div>
    <div className={styles.scrollHint} aria-hidden="true">↓ DESCE PRA ADOÇAR</div>
  </section>
}
