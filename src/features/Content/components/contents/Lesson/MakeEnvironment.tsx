import { CodeBlock } from "@/features/CodeBlock"

export const MakeEnvironment = () => {
  return (
    <div>
      <h1>環境の作成方法</h1>
      <p>
        ここでは Vite を使用して React の開発環境を作成する方法を説明します。
        Vite などの技術やツールについては本ページ後半の
        <a href="#使用技術・ツールについて">使用技術・ツールについて</a>
        のセクションでまとめて解説します。
      </p>

      <h2>npm をインストールする</h2>
      <p>
        Windows の場合は <a href="https://nodejs.org/ja">Node.js</a>
        をインストールしてください。
        正しくインストールされているかを確認するために、コマンドプロンプトを開いて以下のコマンドを実行します。
      </p>
      <CodeBlock code={"npm -v"} language={"bash"} headSymbol={"$"} />
      <p>バージョンが表示されたらインストールは成功です。</p>
      <p>
        バージョンが表示されない場合は Node.js
        のインストールが正しく行われていない可能性があります。 その場合は
        Node.js のインストールを再度行ってください。 それでも解決しない場合は
        <a href="https://nodejs.org/ja/docs/guides/getting-started-guide/">
          Node.js の公式ドキュメント
        </a>
        を参照してください。
      </p>

      <h2>Vite プロジェクトを作成する</h2>
      <p>
        Vite を使用してプロジェクトを作成します。
        コマンドプロンプトを開いて以下のコマンドを実行してください。
      </p>
      <CodeBlock
        code={"npm create vite@latest"}
        language={"bash"}
        headSymbol={"$"}
      />
      <p>
        対話式にいろいろなことを聞かれるので、以下のように入力してください。
      </p>
      <ul>
        <li>Project name:</li>
        <ul>
          <li>
            <CodeBlock code={"my-app"} language={"text"} headSymbol={"none"} />
          </li>
        </ul>
        <li>Select a framework:</li>
        <ul>
          <li>
            <CodeBlock code={"React"} language={"text"} headSymbol={"none"} />
          </li>
        </ul>
        <li>Select a variant:</li>
        <ul>
          <li>
            <CodeBlock
              code={"TypeScript"}
              language={"text"}
              headSymbol={"none"}
            />
          </li>
        </ul>
      </ul>
      <p>
        これで Vite のプロジェクトが作成されたと思います。
        続いて開発サーバを立ち上げるために以下のコマンドを実行してください。
      </p>
      <CodeBlock
        code={`cd my-app
npm install
npm run dev`}
        language={"bash"}
        headSymbol={"$"}
      />
      <p>
        <code>VITE vX.X.X ready in XXX ms</code>
        （X は任意の数字）
        のように表示されたら正しく開発サーバーが起動しています。 ブラウザで
        <a href="http://localhost:5173">http://localhost:5173</a>
        にアクセスして画面に「Vite + React」
        と表示されていれば環境の作成は成功です。
      </p>
      <p>
        開発サーバを終了したい場合は同コマンドプロンプト上で<code>q</code>
        を入力して Enter を押してください。
      </p>

      <h2>使用技術・ツールについて</h2>

      <h3>npm</h3>
      <p>
        npm (Node Package Manager) は Node.js
        に付属しているパッケージマネージャです。 そのため
        <a href="#npm をインストールする">npm をインストールする</a>
        のセクションで Node.js
        をインストールした際に自動的にインストールされていました。
      </p>
      <p>
        npm はプロジェクト内の依存関係を管理するために使用します。 npm
        を使用することで必要なライブラリをインストールしたりプロジェクトのビルドやテストを実行したりすることが簡単にできるようになります。
        プロジェクトで使用するパッケージ等の npm
        が監理する情報はプロジェクトのルートディレクトリにある package.json
        にすべて記載されています。
      </p>
      <p>
        例えばパッケージを追加したり削除したりする際には以下のようにコマンドを実行します。
      </p>
      <CodeBlock
        code={`# パッケージを追加するとき
npm install <package-name>

# パッケージを削除するとき
npm uninstall <package-name>`}
        language={"bash"}
        headSymbol={"$"}
      />
      <p>
        <a href="#Vite プロジェクトを作成する">Vite プロジェクトを作成する</a>
        のセクションでは<code>npm install</code>
        というコマンドを実行しましたが、ここではパッケージ名が指定されていません。
        パッケージ名を指定せずに実行すると package.json
        に記載されているパッケージすべてが自動でインストールされます。
        このコマンドはパッケージをインストールするだけなので、基本的には 1
        度実行すればそれ以降はもう実行する必要はありません。
      </p>
      <p>
        <a href="#Vite プロジェクトを作成する">Vite プロジェクトを作成する</a>
        のセクションではもう 1 つ<code>npm run dev</code>
        というコマンドを実行しましたが、こちらは開発サーバを立ち上げるためのコマンドです。
        <code>npm run</code>
        の後に続くコマンドは package.json
        に記載されているスクリプトを実行するためのコマンドです。 Vite
        を使用してプロジェクトを作成すると自動的に package.json
        の中にいくつかスクリプトが追加されますが、<code>dev</code>
        スクリプトもその内の 1 つです。
        この部分だけ抜粋すると以下のように記載されていると思います。
      </p>
      <CodeBlock
        code={`"scripts": {
  "dev": "vite",
  ...
}`}
        language={"json"}
      />
      <p>
        <code>npm run dev</code>を実行すると<code>vite</code>
        というコマンドが実行されて開発サーバが立ち上がるという仕組みです。
        つまり開発サーバを再度立ち上げる際は<code>npm run dev</code>
        を実行すれば良いということです。
      </p>

      <h3>Vite</h3>
      <p>
        Vite (/vit/) はフロントエンドの開発環境を構築するためのツールです。 Vite
        を使用することで開発サーバを立ち上げたりプロジェクトをビルドしたりすることが簡単にできるようになります。
        フロントエンドの開発環境を構築するためのツールは他にもいくつかありますが、Vite
        はその中でも特に人気のあるツールの 1 つです。
        比較的新しいツールで、特に軽量で高速なビルドが特徴です。
      </p>
      <p>
        <a href="#Vite プロジェクトを作成する">Vite プロジェクトを作成する</a>
        のセクションでは Vite
        を使用してプロジェクトを作成しましたが、ここからはそのときに対話式に入力した内容について少し触れます。
      </p>
      <p>
        <code>Project name:</code>
        <br />
        プロジェクトの名前を指定します。
        ここで指定した名前がプロジェクトのルートディレクトリ名になります。
        大文字を使用すると怒られるため、小文字と数字および記号の組み合わせで指定してください。
        ケバブケース（kebab-case）で指定するのが一般的です。
      </p>
      <p>
        <code>Select a framework:</code>
        <br />
        使用するフレームワークを指定します。 React を使用する場合は React
        を選択してください。 他にも Vue や Svelte
        などのフレームワークを選択することもできるため、アプリ要件に応じて選択してください。
      </p>
      <p>
        <code>Select a variant:</code>
        <br />
        使用する言語を指定します。 基本的にこだわりがなければ JavaScript
        ではなく TypeScript を使用することをオススメします。 TypeScript
        を使用することのメリットは後述の
        <a href="#TypeScript">TypeScript</a>
        のセクションで詳しく説明します。 また SWC とは Rust で書かれた
        JavaScript/TypeScript
        のトランスパイラであり、コンパイル速度を劇的に向上させることができます。
        しかし SWC はまだ開発中のため不安定な可能性があります。
        またエコシステムがまだあまり整っていません。
        これらが気になる場合は現時点では使用しないことをオススメします。 SWC
        を使用しない場合は Babel というトランスパイラを使用することになります。
      </p>
      <p>
        Vite の詳細については
        <a href="https://ja.vitejs.dev/guide/">公式ドキュメント</a>
        を参照してください。
      </p>

      <h3>TypeScript</h3>

      <h3>TSX</h3>

      <h3>Module CSS</h3>
    </div>
  )
}
