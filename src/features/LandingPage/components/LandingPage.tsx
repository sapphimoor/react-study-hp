import { ContentUtils } from "@/features/Content/utils/ContentUtils"
import { useNavigate } from "react-router-dom"
import styles from "./LandingPage.module.css"

export const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1 className={styles.title}>React おたすけ本</h1>
      <div className={styles.body}>
        <div className={styles.container}>
          <h2>React の学習</h2>
          <p>
            React 初学者向けの学習コンテンツを提供しています。 React
            の周辺知識や、実際の開発で役立つ Tips
            なども併せて学ぶことができます。
            すべてハンズオン形式のため、経験を積みながら React
            を身につけることができます。
            <p
              className={styles.learnMore}
              onClick={() => {
                navigate(ContentUtils.makeUrlParams("Lesson"))
              }}
            >
              Learn More
            </p>
          </p>
        </div>
        <div className={styles.container}>
          <h2>React リファレンス</h2>
          <p>
            環境作成の際の細かい設定など、リファレンスや備忘録のような形で活用することができます。
            将来的には辞書式にすることで、自分の知りたい情報が書いてある場所まで見出しから飛べるようにする予定です。
            <p
              className={styles.comingSoon}
              // onClick={() => {
              //   window.open(
              //     "https://github.com/sapphimoor/react-study-hp",
              //     "_blank"
              //   )
              // }}
            >
              Coming soon...
            </p>
          </p>
        </div>
        <div className={styles.container}>
          <h2>React を用いた実例</h2>
          <p>
            このサイトは React を用いて開発されています。
            このサイトで学習できる内容を使用しながら一から開発しています。
            どのように作られているか分かるようにソースコードも公開しています。
            React で作られた web ページの一例としてご活用ください。
            <br />
            <p
              className={styles.learnMore}
              onClick={() => {
                window.open(
                  "https://github.com/sapphimoor/react-study-hp",
                  "_blank"
                )
              }}
            >
              Learn More
            </p>
          </p>
        </div>
      </div>
    </div>
  )
}
