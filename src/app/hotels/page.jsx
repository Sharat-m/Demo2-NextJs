import Image from "next/image";
import styles from "./hotels.module.css";

const HotelPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}> Hotel Booking</h1>
        <p className={styles.subtitle}>
          Explore thousands of hotel booking sites at once
        </p>

        <div>
  <textarea name="" id="" cols="150" rows="5"></textarea>
</div>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>Best Price</h1>
            <p>Get the best value for your money every time you travel</p>
          </div>
          <div className={styles.box}>
            <h1>Compare</h1>
            <p>Browse through the best hotels and find exclusive deals</p>
          </div>
          <div className={styles.box}>
            <h1>Traveler Friendly</h1>
            <p>The booking system trusted by 400 million travelers</p>
          </div>
        </div>
      </div>

      {/* <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="about image"
          fill
          className={styles.img}
        />
      </div> */}
    </div>
  );
};
export default HotelPage;
