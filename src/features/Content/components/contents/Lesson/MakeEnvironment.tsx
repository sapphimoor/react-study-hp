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
      <p>
        また 2 度目以降の環境構築時や既に npm や VSCode
        がインストールされている環境では
        <a href="#npm をインストールする">npm をインストールする</a>および
        <a href="VSCode をインストールする">VSCode をインストールする</a>
        のセクションの手順は不要です。 これらの手順以外を実行してください。
      </p>
      <h2>環境作成手順</h2>
      <h3>npm をインストールする</h3>
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
      <h3>Vite プロジェクトを作成する</h3>
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
      <h3>VSCode をインストールする</h3>
      <p>
        <a href="https://code.visualstudio.com/Download">VSCode の公式サイト</a>
        からインストーラをダウンロードして実行してください。
      </p>
      <p>
        インストールが完了したら VSCode を起動してください。 VSCode
        のターミナルを開いて以下のコマンドを実行してください。 ターミナルは
        <code>Ctrl+@</code>で開けます。
      </p>
      <CodeBlock code={"npm -v"} language={"bash"} headSymbol={"$"} />
      <p>
        バージョンが表示されたらインストールは成功です。
        バージョンが表示されず以下のようなエラーが生じた場合は次のセクションを参照ください。
      </p>
      <CodeBlock
        code={
          "このシステムではスクリプトの実行が無効になっているため、*****ファイルを読み込むことができません。"
        }
        language={"text"}
        headSymbol={"none"}
      />
      <br />
      <h4>VSCode で npm が実行できないとき</h4>
      <p>
        VSCode のターミナルで npm
        が実行できない場合は以下の手順を試してください。
      </p>
      <ol>
        <li>VSCode を起動します</li>
        <li>
          コマンドパレットを開き
          <code>Preferences: Open User Settings (JSON)</code>を実行します
        </li>
        <ul>
          <li>
            コマンドパレットは<code>Ctrl+Shift+P</code>で開けます
          </li>
        </ul>
        <li>開いたファイルに以下を追記して保存します</li>
        <ul>
          <li>
            追記前の末尾にカンマがない場合は、カンマを追加してから追記してください
          </li>
          <li>
            ファイル内に何も記述がない場合は、波かっこを記入してからその中に以下内容を記述してください
          </li>
        </ul>
        <CodeBlock
          code={`   "terminal.integrated.env.windows": {
        "PSExecutionPolicyPreference": "RemoteSigned"
    },`}
          language={"json"}
        />
        <li>VSCode を再起動します</li>
        <ul>
          <li>
            再起動は<code>Ctrl+Shift+P</code>でコマンドパレットを開き
            <code>Developer: Reload Window</code>
            を実行します
          </li>
        </ul>
      </ol>
      <p>
        npm が実行できるようになったか確認するために再度 VSCode
        のターミナルを開いて以下のコマンドを実行してください。
      </p>
      <CodeBlock code={"npm -v"} language={"bash"} headSymbol={"$"} />
      <p>バージョンが表示されたら VSCode で npm を実行する準備は完了です。</p>
      <h3>VSCode の環境設定をする</h3>
      <p>VSCode の環境設定を行います。</p>
      <ol>
        <li>VSCode を起動します</li>
        <li>
          <a href="#Vite プロジェクトを作成する">Vite プロジェクトを作成する</a>
          で作成したプロジェクトのディレクトリを開きます
        </li>
        <ul>
          <li>
            ディレクトリは<code>Ctrl+K Ctrl+O</code>で開けます
          </li>
        </ul>
        <li>
          開いたディレクトリ直下に <code>.vscode</code>
          という名前のディレクトリを作成します
        </li>
        <li>
          <code>.vscode</code>ディレクトリ以下に<code>settings.json</code>
          という名前のファイルを作成し、以下を記述して保存します
          <CodeBlock
            code={`{
  // ファイル保存時の設定
  "editor.codeActionsOnSave": {
    // eslintによるfix処理を行う
    "source.fixAll.eslint": "explicit",
    // importの整理を行う
    "source.organizeImports": "explicit"
  },
  // tsファイルについての設定
  "[typescript]": {
    // フォーマッタのデフォルトをPrettierにする
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // tsxファイルについての設定
  "[typescriptreact]": {
    // フォーマッタのデフォルトをPrettierにする
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // jsonファイルについての設定
  "[json]": {
    // タブサイズを2に設定する
    "editor.tabSize": 2
  },
  // ファイル保存時に自動的にフォーマットする
  "editor.formatOnSave": true,
  // デフォルトのCSSのLintを止めて、StylelintによるLintを行うための設定
  "css.validate": false
}`}
            language={"json"}
          />
        </li>
        <li>
          <code>.vscode</code>ディレクトリ以下に
          <code>extensions.json</code>
          という名前のファイルを作成し、以下を記述して保存します
          <CodeBlock
            code={`{
    "recommendations": [
        "clinyong.vscode-css-modules",
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "ionutvmi.path-autocomplete",
        "pucelle.vscode-css-navigation",
        "stylelint.vscode-stylelint",
    ]
}`}
            language={"json"}
          />
        </li>
        <li>
          コマンドパレットを開き<code>Developer: Reload Window</code>
          を実行します
          <ul>
            <li>
              コマンドパレットは<code>Ctrl+Shift+P</code>で開けます
            </li>
          </ul>
        </li>
        <li>
          画面右下 に「拡張機能の推奨」が表示されるので、<code>Install</code>
          をクリックして拡張機能をインストールします
        </li>
      </ol>
      <p>
        <code>src/App.tsx</code>を開いてファイルを保存すると import
        文の順番が整理されていたりファイル内の様々な場所にセミコロンが挿入されたりしたら
        VSCode の環境設定は成功です。
      </p>
      <h3>React のプロジェクト設定をする</h3>
      <p>React のプロジェクト設定を行います。</p>
      <ol>
        <li>ターミナルで以下のコマンドを実行します</li>
        <ul>
          <li>
            ターミナルは<code>Ctrl+@</code>で開けます
          </li>
        </ul>
        <CodeBlock
          code={`npm i -D prettier eslint-config-prettier vite-tsconfig-paths`}
          language={"bash"}
          headSymbol={"$"}
        />
        <li>
          <code>eslint.config.js</code>の中身を以下で上書きして保存します
        </li>
        <CodeBlock
          code={`import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier/flat"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import globals from "globals"
import tseslint from "typescript-eslint"

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintConfigPrettier,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: { react: { version: "detect" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  }
)`}
          language={"json"}
        />
        <li>
          プロジェクトのルートディレクトリに<code>.prettierrc.json</code>
          を作成し、以下を記述して保存します
        </li>
        <CodeBlock
          code={`{
  "printWidth": 80,
  "tabWidth": 2,
  "singleQuote": false,
  "semi": false,
  "trailingComma": "all"
}`}
          language={"json"}
        />
        <li>
          プロジェクトのルートディレクトリに<code>.prettierignore</code>
          を作成し、以下を記述して保存します
        </li>
        <CodeBlock
          code={`# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Artifacts
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# JSON (Optional):
*.json

# Docs (Optional):
*.md`}
          language="text"
        />
        <li>
          <code>tsconfig.app.json</code>の中身を以下で上書きして保存します
        </li>
        <CodeBlock
          code={`{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,

    /* Paths */
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
    },
  },
  "include": ["src"]
}`}
          language={"json"}
        />
        <li>
          <code>vite.config.ts</code>の中身を以下で上書きして保存します
        </li>
        <CodeBlock
          code={`import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
})`}
          language={"ts"}
        />
      </ol>
      <p>
        <code>src/App.tsx</code>
        を開いてファイルを保存するとファイル内の様々な場所にあったセミコロンがなくなったら
        React のプロジェクト設定は成功です。
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
      <p>
        TypeScript は JavaScript を拡張した言語です。
        特に静的型付けが導入されているのが特徴です。
        静的型解析とは、コンパイル時に型解析を行うことで実行時に発生する可能性のある型エラーを事前に検出することができる機能です。
        これによりコードの可読性や保守性が向上し、バグの発生を減らすことができます。
        さらにテキストエディタと連携することで、この型情報を利用してコード補完やリファクタリングなどの支援を受けることもできます。
      </p>
      <p>
        一方で JavaScript
        は動的型付けであり、実行時に型が変更される可能性があります。
        そのため実行時に実装者が意図しない型エラーが発生する可能性があります。
        TypeScript を使用することで JavaScript
        の欠点を補うことができるため、現在プロジェクトでは TypeScript
        が使用されることが多くなっています。
      </p>
      <p>
        TypeScript の学習には
        <a href="https://typescriptbook.jp/">サバイバルTypeScript</a>
        がおすすめです。 中でもまずは
        <a href="https://typescriptbook.jp/tutorials">作って学ぶTypeScript</a>
        から始めてみて、 TypeScript のイメージを掴んだら
        <a href="https://typescriptbook.jp/reference">読んで学ぶTypeScript</a>
        を学習してみると良いと思います。
        それぞれ注意点があるので次の節を参照ください。
      </p>
      <p>
        <a href="https://typescriptbook.jp/tutorials">作って学ぶTypeScript</a>
        では
        <a href="https://typescriptbook.jp/tutorials/make-a-simple-function-via-cli">
          簡単な関数を作ってみよう
        </a>
        および
        <a href="https://typescriptbook.jp/tutorials/react-like-button-tutorial">
          Reactでいいねボタンを作ろう
        </a>
        だけ実施してみてください。 特に前者の
        <a href="https://typescriptbook.jp/tutorials/make-a-simple-function-via-cli">
          簡単な関数を作ってみよう
        </a>
        に関しては先ほど作成した環境の上で実施できるので、サイト内の誘導にある「開発環境の準備」は実施しなくて大丈夫です。
        ただし<code>tsc</code>を実行する場所のみ<code>npx tsc</code>
        と読み替えてください。
      </p>
      <p>
        <a href="https://typescriptbook.jp/reference">読んで学ぶTypeScript</a>
        では主に
        <a href="https://typescriptbook.jp/reference/object-oriented">
          オブジェクト指向
        </a>
        の節までを学習しておくと良いです。
        ただし分量が多く途中で飽きてしまう可能性もあるため、ざっと目を通してどんな書き方があるかをとりあえず把握する程度でも問題ありません。
        読んでいる途中で気になること・試したいことがあったらぜひ作成した環境上で実際にコードを書いて試してみてください。
        TypeScript をコンパイルしたりコンパイルした JavaScript
        ファイルを実行したりするのが面倒くさいという場合は
        <a href="https://paiza.io/ja">paiza.io</a>もおすすめです。
        このサイトでは Web
        上でいろいろな言語の実行環境を整えてくれており、TypeScript
        も実行できます。
      </p>
      <h3>TSX</h3>
      <p>
        TSX (TypeScript XML) は JSX に TypeScrpit
        を書けるように拡張したものです。 React
        コンポーネントを書きやすくしながら TypeScript
        の恩恵も得られるため、基本的に React を記述する際は TSX
        ファイルを作成します。
      </p>
      <h3>CSS Modules</h3>
      <p>
        CSS Modules は、CSS
        をコンポーネントごとに分けて安全に使えるようにしたものです。 通常の CSS
        ではクラス名がソーコード全体に影響しますが、CSS Modules
        を使うと各ファイル固有になってくれます。
      </p>
      <p>
        具体例で言うと、<code>hoge.css</code>と<code>huga.css</code>でそれぞれ
        <code>title</code>というクラスを作成したとします。
      </p>
      <CodeBlock
        code={`/* hoge.css */
.title {
  font-size: 20px;
}`}
        language={"css"}
      />
      <br />
      <CodeBlock
        code={`/* huga.css */
.title {
  font-weight: bold;
  color: #5195e1;
}`}
        language={"css"}
      />
      <p>
        この場合<code>font-size</code>
        <code>font-weight</code>
        <code>color</code>すべてを持った<code>title</code>というクラスが 1
        つできることになります。
      </p>
      <CodeBlock
        code={`.title {
  font-size: 20px;
  font-weight: bold;
  color: #5195e1;
}`}
        language={"css"}
      />
      <p>
        一方、CSS Modules を使用し<code>hoge.module.css</code>と
        <code>huga.module.css</code>を作成した場合はそれぞれ固有の
        <code>title</code>クラスができます。
      </p>
      <p>
        このようにクラス名を固有にするために冗長な名前を考えたり意図しない不具合を避けるためにクラス名を
        Excel 等で管理する必要がなくなるため、CSS Modules
        は有用な選択肢となります。
      </p>
      <p>
        使い方は簡単です。 まずファイル名の拡張子を<code>.module.css</code>
        とします。 クラス名はキャメルケース (camelCase) で記述します。
        使用したい TSX ファイルから CSS ファイルをインポートします。
        そして使用したい要素の className
        プロパティに作成したクラスを指定します。
      </p>
      <CodeBlock
        code={`/* hoge.module.css */
.title {
  font-size: 20px;
  font-weight: bold;
  color: #5195e1;
}`}
        language={"css"}
      />
      <br />
      <CodeBlock
        code={`// Hoge.tsx
import styles from "hoge.module.css"

const Hoge = () => {
    return <div className={styles.title}>タイトル！</div>
}`}
        language={"ts"}
      />
      <br />
      <h3>VSCode</h3>
      <h3>VSCode の環境設定について</h3>
      <h3>React の環境設定について</h3>
    </div>
  )
}
