import styles from "./services.module.css";

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.services__content}>
        <h1 className={styles.services__title}>Puja services</h1>
        <img
          className={styles.services__image}
          src="puja-services.png"
          alt="Puja Services flyer"
        />
      </div>
    </section>
  );
}
