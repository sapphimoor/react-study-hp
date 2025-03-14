import styles from "./LandingPage.module.css"

import { CodeBlock } from "@/features/CodeBlock"

export const LandingPage = () => {
  return (
    <div>
      <h1 className={styles.title}>React のきほん</h1>
      <div className={styles.body}>
        <h2>React ってなに？</h2>
        <p>
          <a href={"https://ja.react.dev/"}>React</a> は Meta が開発した
          JavaScript ライブラリです。 React を使うことで Web
          アプリケーションを効率的に開発することができます。 特に、React
          はコンポーネント指向の開発が得意です。
          これによりアプリケーションを小さな部品に分割して開発することができ、メンテナンス性や再利用性が向上します。
          <CodeBlock
            code={`
const HelloWorld = () => {
  return <div>Hello, React!</div>
}

const App = () => {
  return (
    <div>
      <HelloWorld />
      <HelloWorld />
    </div>
  )
}
          `}
            language={"tsx"}
          />
        </p>
        <p>
          近年では React は企業からも注目されており、Web
          アプリケーションのフロントエンド開発の主流となっています。
        </p>
        <h2>初心者から中級者まで</h2>
        <p>
          このサイトでは React の基本から応用まで学ぶことができます。 初めて
          React を学ぶ方は React
          に使用する技術をハンズオン形式で学ぶことができます。 既に React
          を使ったことがある方は、環境作成の際の細かい設定など、リファレンスや備忘録のような形で活用できます。
          さらにチーム開発の際の Tips など、実践的な内容も取り扱っています。
          <br />
          ぜひ日々の React ライフのお供としてご活用ください。
        </p>
      </div>
    </div>
  )
}
