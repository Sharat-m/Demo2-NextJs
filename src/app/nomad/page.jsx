import Image from "next/image";
import styles from "./nomad.module.css";
const NomadPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="contact"
          className={styles.img}
          fill
        />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>

        <input type="text" placeholder="Name and surname" />
        <input type="text" placeholder="Email adress" />
        <input type="number" placeholder="Phone number" />
        <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
        <button>Send</button>
        </form>
      </div>
    </div>
  );
};
export default NomadPage;
