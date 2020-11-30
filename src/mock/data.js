import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'HanjukuEngineer', // e.g: 'Name | Developer'
  lang: 'ja', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio site!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kento',
  subtitle: 'I love egg sunny-side up!',
  cta: 'Me, too !',
  ctc: 'More hard...'
};

// ABOUT DATA
export const aboutData = {
  img: 'bighead.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.wantedly.com/secret_profiles/cQqdHaLx1A_4MNNk5Xd-gQsnuicvb_QF',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'corgi.jpg',
    title: 'Corgi (大学生のための講義情報口コミサイト)',
    info: '従来の「講師主体・建前主義、一方向性の講義情報」を「学生主体・本音主義、双方向性の口コミ」へと変えたかったから',
    info2: 'データベース設計(postsをユーザーのサブコレクションにするかどうか)',
    info3: '親しみやすいUI、認証状態による機能制限・デザインの変更、メモ化によるパフォーマンス改善,firestoreに対するクエリの実行',
    info4: 'React(CRA), Redux Toolkit, Material-UI, Firebase(Authentication,FireStore,Hosting), react-router-dom',
    url: 'https://redux-spa.web.app/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'blog.jpg',
    title: 'Blog with Next.js',
    info: '思考を整理してアウトプットするための場所(自分だけのQiitaのようなもの)が欲しかった、SSG + CDNの爆速ページ構築をしてみたかった、UtilityFirstに基づいたTailwindCSSの書き心地を試したかった',
    info2: `①CSR,SSR,SSGそれぞれの技術の相違点と使いどころに関する理解→それぞれ実際に実装して挙動を見比べることで理解を深めた。
    ②tailwindcssのインテリセンス効かない問題→VScodeのsettingjsonの各項目を理解し、適切に設定するこどで解決。`,
    info3: 'getStaticPropsによる爆速SSG、getStaticPathsによる動的ページ遷移、簡易ライブラリの自作',
    info4: 'React(Next.js), TypeScript, TailwindCSS, remark, vercel',
    url: 'https://nextjs-blog-alpha-topaz.vercel.app/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'breakfast.jpg',
    title: 'Hanjuku Engineer(this portfolio)',
    info: "ユーザーフレンドリー(Core Web Vitals準拠)で、楽しく閲覧出来るようなポートフォリオサイトをパパっと作りたい！",
    info2: '①デプロイ先でフリーズした(localでは動いていた)、②テキストを変数化してしまったためタグを柔軟に使えない',
    info3: 'いまの自分(まだまだ未熟だけど好奇心は燃え盛っている)を半熟の目玉焼きに見立てて、朝ごはんをテーマにサイト設計！(100vh毎に半熟の目玉焼き、レタス、食パンと切り替わります。ボタンはベーコンです！)',
    info4: 'React(Gatsby.js), Sass, Bootstrap, Netlify, Blobmaker, GetWaves',
    url: 'https://laughing-kare-0c08e3.netlify.app/',
    repo: 'https://github.com/pocketech/portfilio-gatsby', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pokedex.jpg',
    title: 'Pokedex with swr',
    info: '外部データを取得するときの長い記述に嫌気がさしたため。→SWR(stale-while-revalidate)を使えば手軽に、宣言的にデータフェッチ出来るらしい！ TailwindCSSの記述慣れをしたかったため。',
    info2: '①「Cannot read property \'map\' of undefined」が実行時に発動→データフェッチに先んじてプロパティアクセスが走っているため→Optional chaining演算子を用いることでエラーは出なくなったが、データ描画コンポーネントがレンダリングされず、、→一からプロジェクトを作り直すことで解決。 ② 取得したデータを型安全にすること(未達)→コード記述量が膨大になるため断念(現状anyで対応)→aspidaというライブラリがあるらしいため使用を検討',
    info3: 'カスタムフックを用いてロジックとViewの分離に成功したシンプルなコンポーネント、swrを用いた宣言的な記述',
    info4: 'React(CRA), TypeScript, SWR, TailwindCSS, CSSGrid, GitHubPages',
    url: 'https://pocketech.github.io/pokedex-typescript-swr/',
    repo: 'https://github.com/pocketech/pokedex-typescript-swr', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'hakuyowasedatech@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/pochi2pocket',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/pocketech',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
