import { Link } from "../Link/Link"
import styles from "./Profile.module.scss"

export const Profile = () => {
  return (
    <div>
      <div>АИ</div>
      <div className={styles.info_wrapper}>
        <h1>Иван Иванов</h1>
        <div className={styles.link_wrapper}>
          <Link name="Telegram" link="https://t.me/garik_sukhanov"></Link>
          <Link name="GitHub" link="https://t.me/garik_sukhanov"></Link>
          <Link name="Resume" link="https://t.me/garik_sukhanov"></Link>
        </div>
      </div>
    </div>
  )
}