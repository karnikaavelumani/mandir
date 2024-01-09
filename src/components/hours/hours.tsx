import styles from "./hours.module.css";

export default function Hours() {
  return (
    <section className={styles.hours}>
      <img
        className={styles.hours__image}
        src="donation-flyer.png"
        alt="Donation Flyer"
      />
      <div className={styles.hours__content}>
        <h1 className={styles.hours__title}>HOURS</h1>
        <p className={styles.hours__text}>
          9:00 AM - 1:00 PM; 5:00 PM - 9:00 PM 
          9:00 AM - 1:00 PM; 5:00 PM - 9:00 PM 
          9:00 AM - 1:00 PM; 5:00 PM - 9:00 PM 
          9:00 AM - 1:00 PM; 5:00 PM - 9:00 PM 
          9:00 AM - 1:00 PM; 5:00 PM - 9:00 PM 
          9:00 AM - 9:00 PM 
          9:00 AM - 9:00 PM
        </p>
      </div>
    </section>
  );
}
