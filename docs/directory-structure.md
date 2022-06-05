# 📁ディレクトリ構成

ディレクトリ構成もまた自由度が高くプロジェクトの保守性に関係し、コンポーネントの設計と密接に関係があります。

したがって、本稿では
* ディレクトリで利用するコンポーネント
* 依存関係
* それらの理由

といった視点から整理していきます。

こちらが早見表です。
|          | 配置するコンポーネント | 子ディレクトリ(components) |           依存関係(参照先)                | 
| -------- | ----------- | ------------------- | ------------------------ | 
| parts    | parts-component       | なし                  | parts                    |           
| features | 指定無し        | あり                  | parts, 子ディレクトリ           |        
| pages    | 指定無し        | あり                  | features, parts, 子ディレクトリ |           

## 基本
まず初めに、各コンポーネントのベースがこちらになります。

![baseComponent](./images/components_basic_structure.png)

コンポーネントはフォルダごとに管理され、その中に各ファイルが機能ごとに分かれています。  

`Component.tsx` にコンポーネント設計でお伝えした構成のいずれかが入り、`model-component` などの場合はHooksが切り出される形です。  
`index.ts` が用意されている理由はimportの冗長化を防ぐためです。Typescriptはフォルダ直下のindex.tsを省略し参照することができます。こちらは、`Component.tsx`の内容をそのまま`index.ts`に記述したいという考え方の方もいるかもしれません。本テンプレートでは、エディタの検索性向上のためこちらの方式をとっています。

以後オレンジ色のComponent図形が現れた場合、上記のファイルを包含するものとしてお読みください。


## parts
![parts](./images/parts_structure.png)
その名の通り、グローバルに利用される `parts-component` を格納する場所です。

`Input` や `Button` など、汎用性の高いものが配置されます。すべてのコンポーネントフォルダはpartsフォルダ直下に配置されるため、平たい構造となります。

依存関係は同一階層のpartsコンポーネントのみです。
これは
* 状態を持たないpropsリレーであれば再利用性が損なわれないこと
* model-componentなどの状態を持つコンポーネントに依存したとたん再利用性が消えること

が理由となります。

複雑性が増すためatomic designにおけるatoms, molecules, organisms相当のディレクトリは用意していません。  
コンポーネントが増加し管理しにくい際は、機能的に分けた `Inputフォルダ`・`Buttonフォルダ`などを作ると良いかもしれません。


## features
![features](./images/features_structure.png)
再利用される「機能」を集めるディレクトリです。こちらは[bulletproof-react](https://github.com/alan2207/bulletproof-react)の設計思想を参考にしています。  
具体的な例を挙げるとダッシュボードやプロフィールで、ヘッダーやメニューなどを含めても良いかもしれません。カウンターなどの「機能」も(あまり使用例が思いつきませんが) `features`ディレクトリに入れてしまいましょう。

`features`ディレクトリで利用できるコンポーネント種別に制限はありません。しいていえば、特定の機能であることから外部との接続・状態管理が発生するため `model-component` が積極的に利用されるはずです。

プロフィールですと

1. ContainerやHooks層
   * 顔画像の取得、名前の取得
   * クリック時に画像アップロードモーダル表示
2. Presentational層
   * htmlタグとスタイリング

という形になりそうです。
このような形で定義しておけば「ロジックや状態を持ち、かつ再利用できるコンポーネント」として使えるわけですね。

* 状態を持たない、再利用性がある →  `partsディレクトリ` に `parts-component` 
* API通信や状態がある、ロジックがある、再利用性がある。 → `featuresディレクトリ` に `model-component`など

という切り分けをしましょう。
<br>
<br>

ここでおそらく気になることが、他のコンポーネント(「積極的に利用されるmodel-component以外)はどこで利用するかという点です。  

これは上記のプロフィール例の「クリック時の画像アップロードモーダル」に焦点を当てるとわかりやすいでしょう。

プロフィールを細分化すると
* 画像
* 名前
* アップロードモーダル

などに分けられます。これを1つの `.tsx` ファイルにまとめてしまうと視認性が低い状況に陥いります。  
そのため`featuresディレクトリ` には `componentsディレクトリ` が用意されており、その機能で利用されるコンポーネントの細分化します。
ここで `model-componet` 以外の `parts-component` などが持ち出されるわけです。  

今回で言うとアップロードモーダルなどは大きな機能となりますので、componentsの内部に`UploadModal`を切り出すと視認性が上がりそうです。

記事一覧などもわかりやすいかもしれません。
1. features直下で `ArticleList` を `model-component` で作る
2. `componentsディレクトリ` に `ArticleItem` を `parts-component` で作成し、親からpropsを受け取って表示する

という構成になります。

`componentsディレクトリ`の狙いは、子コンポーネントを切ることにより視認性を保ちつつ機能を小さな単位にまとめる、さらにグローバルへのコンポーネントの露出を防ぐことだということを抑えてください。
<br>
<br>

依存、参照先はcomponentsディレクトリかpartsディレクトリとなります。  
同一階層の参照はプロジェクトごとに決定しましょう。基本的には同一階層は参照せず単一機能とし、pagesで組み上げる方針が良いです。


## pages
![pages](./images/pages_structure.png)
featuresとよく似たディレクトリとなります。

わざわざpagesディレクトリを用意している理由は[こちら](https://zenn.dev/yoshiko/articles/99f8047555f700#page)の思想に則っているためです。
> src/pages 以下だとファイル名 = URLになるのでファイル名と付けたいコンポーネント名が必ずしも一致しなかったり、ルーティングの変更でディレクトリ階層間のファイルの移動が発生するので、そちらにComponent定義を巻き込みたくなかったためです。
こちらから発展し、**それぞれのフォルダは平置きされるべき**でしょう。ネストしてしまった場合一つのフォルダ移動が連鎖して他に影響を与えてしまうためです。

また、pagesの使用戦略はSPAかJamstackサイト制作などで方針が異なることが予想されます。  

SPAかつ再利用される機能が多い場合は、featuresディレクトリを積極的に利用するべきです。  
一方で、SPAでもpagesごとに機能が異なる場合は `pages/Component名/components` がよく利用されるでしょう。

Jamstackなwebサイト制作では、pages主体でパーツの組み上げや切り分け用途が多くなります。したがってpagesディレクトリを積極利用することになりそうです。

ただ、`model-component` を正しく利用していればpages→featuresの移植は簡単です。  
厳密なルールのために遅くなってしまうのであれば、「共有が必要そうであれば移す」という気持ちでも問題ないかもしれません。


##  参考
この項はとりわけたくさんの記事に助けられました。感謝感謝です。  
どれも素敵な記事ばかりですので、ぜひ読んでみて下さい。
* [bulletproof-react](https://github.com/alan2207/bulletproof-react) 
* [SPA Componentの推しディレクトリ構成について語る](https://zenn.dev/yoshiko/articles/99f8047555f700)
* [Reactベストプラクティスの宝庫！「bulletproof-react」が勉強になりすぎる件](https://zenn.dev/meijin/articles/bulletproof-react-is-best-architecture)
* [Reactのディレクトリ構成でAtomicデザインをやめた話](https://zenn.dev/brachio_takumi/articles/2ab9ef9fbe4159)
* [私の推しフロントエンドディレクトリ構成と気をつけたいポイント](https://zenn.dev/sakito/articles/af87061a5016e6)
* [【React/Vue.js】コンポーネント設計の（個人的）ベストプラクティス | Offers Tech Blog](https://zenn.dev/offers/articles/20220523-component-design-best-practice)
* [Atomic Designをやめてディレクトリ構造を見直した話](https://note.com/tabelog_frontend/n/n07b4077f5cf3)

<br>
<br>
<br>

[>>「🗃️状態管理」へ進む](./state-management.md)