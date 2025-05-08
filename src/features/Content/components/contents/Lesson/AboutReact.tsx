import { CodeBlock } from "@/features/CodeBlock"
import { ContentUtils } from "@/features/Content/utils/ContentUtils"

export const AboutReact = () => {
  return (
    <div>
      <h1>Reactとは</h1>
      <p>
        この章では React とはどのような技術なのかを説明します。
        キーワードは目次の通りです。
      </p>

      <h2>フロントエンド</h2>
      <p>
        Web システムやアプリケーションにおいて、Web
        ページのことをフロントエンドと言います。
        反対にサーバー側で動作し、通信等を用いてフロントエンドとやり取りを行うシステムやアプリケーションをバックエンドと言います。
      </p>
      <p>
        フロントエンドは主に、後述する HTML・CSS・JavaScript
        などの技術を用いて作成されます。
      </p>

      <h2>HTML</h2>
      <p>
        HTML (HyperText Markup Language) は Web
        ページを作成するための言語で、マークアップ言語と呼ばれるものの 1
        つです。 Web
        ページの構造を作成するために使用され、テキストや画像、リンクなどの要素を配置するためのルールを提供します。
        HTML は要素をタグと呼ばれるもので囲むことで構造を記述していきます。
        例えば、見出しや段落、リスト、リンク、画像などを配置するためのタグが用意されています。
      </p>
      <CodeBlock
        code={`<h1>これは見出しです</h1>
<h2>見出しには 1～6 のレベルがあります</h2>
<h3>上から順にレベル 1～3 の見出しを例示してみました</h3>

<p>これは段落です</p>
<p>タグで囲みなおすことで新しい段落を作成できます</p>

<ul>
  <li>これはリストの項目です</li>
  <li>リストは順序なしと順序付きがあります</li>
  <li>これは順序なしです</li>
</ul>

<ol>
  <li>これは順序付きリストの項目です</li>
  <li>順序なしも順序付きもレベル下げができます</li>
  <ol type="i">
    <li>これはレベル下げです</li>
  </ol>
</ol>

<a href="https://google.com">これはリンクです</a>

<img src="/images/img_sample.jpg" alt="これは画像です" />`}
        language={"html"}
      />
      <p>これは実際に表示すると以下のようになります。</p>

      <blockquote>
        <h1 data-nosider>これは見出しです</h1>
        <h2 data-nosider>見出しには 1～6 のレベルがあります</h2>
        <h3 data-nosider>上から順にレベル 1～3 の見出しを例示してみました</h3>
        <p>これは段落です</p>
        <p>タグで囲みなおすことで新しい段落を作成できます</p>
        <ul>
          <li>これはリストの項目です</li>
          <li>リストは順序なしと順序付きがあります</li>
          <li>これは順序なしです</li>
        </ul>
        <ol>
          <li>これは順序付きリストの項目です</li>
          <li>順序なしも順序付きもレベル下げができます</li>
          <ol type="i">
            <li>これはレベル下げです</li>
          </ol>
        </ol>
        <a href="https://google.com">これはリンクです</a>
        <img src="/images/img_sample.jpg" alt="これは画像です" />
      </blockquote>

      <p>
        次の章（
        <a href={ContentUtils.makeUrlParams("Lesson/MakeEnvironment")}>
          環境の作成方法
        </a>
        ）で環境を作成すると実際に書きながら学習できるようになるため、具体的なリファレンス等はそちらに記載します。
      </p>

      <h2>CSS</h2>
      <p>
        CSS (Cascading Style Sheets) は HTML で作成した Web
        ページの見た目を定義するための言語です。 HTML
        では構造を作成することができますが、見た目やレイアウトを変更することはできません。
        そこで CSS を使用してフォントや色、余白、配置などを指定します。 CSS
        はセレクタと呼ばれる要素を指定するためのルールを使用してスタイルを適用します。
        例えば、特定のクラスや ID
        を持つ要素に対してスタイルを適用することができます。
      </p>
      <CodeBlock
        code={`.test-style {
  font-size: 20px;
  font-weight: bold;
  color: #5195e1;
  background-color: #f0f0f0;
  padding: 10px;
  text-align: center;
}`}
        language={"css"}
      />
      <p>これは実際に表示すると以下のようになります。</p>
      <blockquote>
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#5195e1",
            backgroundColor: "#f0f0f0",
            padding: "10px",
            textAlign: "center",
          }}
        >
          これは CSS のスタイルを適用した例です
        </div>
      </blockquote>
      <p>
        こちらも次の章（
        <a href={ContentUtils.makeUrlParams("Lesson/MakeEnvironment")}>
          環境の作成方法
        </a>
        ）で環境を作成すると実際に書きながら学習できるようになるため、具体的なリファレンス等はそちらに記載します。
      </p>

      <h2>JavaScript</h2>
      <p>
        JavaScript は Web
        ページに動的な機能を追加するためのプログラミング言語です。 HTML
        で作成した構造に対してユーザ操作やイベントに応じて動的に変更を加えることができます。
        例えば、ボタンをクリックしたときに特定の処理を実行したりデータを取得して表示したりすることができます。
      </p>
      <CodeBlock
        code={`<button id="myButton">クリックしてね</button>
<script>
  document.getElementById("myButton").addEventListener("click", () => {
    alert("ボタンがクリックされました");
  });
</script>`}
        language={"html"}
      />
      <p>これは実際に表示すると以下のようになります。</p>
      <blockquote>
        <button
          onClick={() => {
            alert("ボタンがクリックされました")
          }}
        >
          クリックしてね
        </button>
      </blockquote>
      <p>
        JavaScript は元々は Web 上でしか動作しない言語でしたが、Node.js
        などの登場により現在はサーバーサイドでも良く使用される言語の 1
        つとなりました。 さらには React Native
        などのフレームワークを使用することで iOS や Android
        のアプリケーションを開発することもできるようになりました。 これにより
        JavaScript
        はフロントエンドだけではなく、バックエンドやモバイルアプリケーションの開発など幅広く使用できる言語となりました。
      </p>
      <p>
        こちらは実際に書きながら学習できるツールがあります。
        しかし上位互換となる TypeScript
        という言語が存在するため、どうせなら最初からそちらを学習した方が効率的です。
        TypeScript については次の章（
        <a href={ContentUtils.makeUrlParams("Lesson/MakeEnvironment")}>
          環境の作成方法
        </a>
        ）で触れるため具体的なリファレンス等はそちらに記載します。
      </p>

      <h2>JSX</h2>
      <p>
        JSX (JavaScript XML) は JavaScript の構文拡張で、JavaScript 内に HTML
        タグを記述する際に使用されます。 JSX を使用しなくても React
        コンポーネントを記述できますが、JSX
        を使用した方がより簡易的に記述できるため基本的には JSX を使用します。
        JSX は JavaScript のコードとしてコンパイルされるため、通常の JavaScript
        と同様に動作します。
      </p>
      <CodeBlock
        code={`const MyComponent = () => {
  const hoge = "通常の JavaScript と同様に変数や関数も書けます"

  return (
    <div>
      <p>自由に HTML タグを埋め込めます</p>
      {
        /* HTML タグの子要素中に JavaScript を書きたい場合は波かっこで囲みます */
        \`もちろん式の評価「\${hoge}」もできます\`
      }
    </div>
  )
}`}
        language={"jsx"}
      />
      <br />

      <h2>宣言的</h2>
      <p>
        React
        を使用しているとたまに「宣言的」という単語を耳にするようになります。
        宣言的とは「何を達成したいか」のみを記述し、「どのように達成するか」はライブラリ側に委ねるスタイルのことを指します。
        反対に、命令的な UI
        とは「どのように達成するか」も記述するスタイルのことを指します。 React
        では HTML タグや自作したコンポーネントを記述することで UI
        部分を作成しており、これが宣言的と言われる所以です。
      </p>
    </div>
  )
}
