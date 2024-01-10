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
        <h1 className={styles.hours__title}>Mandir hours</h1>
        <div className={styles.hours__text}>
          <table>
            <tr>
              <td>
                <strong>Mon</strong>
              </td>
              <td>9:00 AM - 1:00 PM; 5:00 PM - 9:00 PM</td>
            </tr>
            <tr>
              <td>
                <strong>Tue</strong>
              </td>
              <td>9:00 AM - 1:00 PM; 5:00 PM - 9:00 PM</td>
            </tr>
            <tr>
              <td>
                <strong>Wed</strong>
              </td>
              <td>9:00 AM - 1:00 PM; 5:00 PM - 9:00 PM</td>
            </tr>
            <tr>
              <td>
                <strong>Thu</strong>
              </td>
              <td>9:00 AM - 1:00 PM; 5:00 PM - 9:00 PM</td>
            </tr>
            <tr>
              <td>
                <strong>Fri</strong>
              </td>
              <td>9:00 AM - 1:00 PM; 5:00 PM - 9:00 PM</td>
            </tr>
            <tr>
              <td>
                <strong>Sat</strong>
              </td>
              <td>9:00 AM - 9:00 PM</td>
            </tr>
            <tr>
              <td>
                <strong>Sun</strong>
              </td>
              <td>9:00 AM - 9:00 PM</td>
            </tr>
          </table>
        </div>
        <h3 className={styles.hours__info}>
          The only Mandir in Irvine is for, by, and of the devotees. 100% of all
          contributions go to the Mandir and not to any individual.
        </h3>
      </div>
    </section>
  );
}
