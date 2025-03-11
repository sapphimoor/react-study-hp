import { FaExternalLinkAlt } from "react-icons/fa"
import { useSearchParams } from "react-router-dom"
import styles from "./Header.module.css"

export const Header = () => {
  const [, setSearchParams] = useSearchParams()

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerTitle}>React 勉強会</div>
        <div className={styles.headerItem} onClick={() => setSearchParams()}>
          Home
        </div>
        <div
          className={styles.headerItem}
          onClick={() => setSearchParams({ content: "Introduction" })}
        >
          Docs
        </div>
      </div>
      <div className={styles.headerContainer}>
        <div className={styles.headerItem} onClick={() => {
          window.open("https://github.com/sapphimoor/react-study-hp", "_blank")
        }} >
          GitHub
          <FaExternalLinkAlt className={styles.linkIcon} />
        </div>
      </div>
    </header>
  )
}
