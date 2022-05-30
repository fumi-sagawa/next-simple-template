# 📁ディレクトリ構成
本構成は [bulletproof-react](https://github.com/alan2207/bulletproof-react/tree/master/src) をベースとしつつ以下の文献を参考に設計しました。感謝感謝です。
* [SPA Componentの推しディレクトリ構成について語る](https://zenn.dev/yoshiko/articles/99f8047555f700)
* [Reactのディレクトリ構成でAtomicデザインをやめた話](https://zenn.dev/brachio_takumi/articles/2ab9ef9fbe4159)
* [私の推しフロントエンドディレクトリ構成と気をつけたいポイント](https://zenn.dev/sakito/articles/af87061a5016e6)
* [【React/Vue.js】コンポーネント設計の（個人的）ベストプラクティス | Offers Tech Blog](https://zenn.dev/offers/articles/20220523-component-design-best-practice)
* [Atomic Designをやめてディレクトリ構造を見直した話](https://note.com/tabelog_frontend/n/n07b4077f5cf3)
  

ディレクトリ構成もまた自由度が高く、プロジェクトの保守性に大きく関係し、コンポーネントの設計と密接に関係があります。

したがって、本稿では
* どういった理由から
* どのディレクトリで
* どのコンポーネントを使うべきか

という視点から整理していきます。

こちらが早見表です。
|          | 配置するコンポーネント | 子ディレクトリ(components) |                          | 依存関係(参照先) |
| -------- | ----------- | ------------------- | ------------------------ | --------- |
| parts    | parts-component       | なし                  | parts                    |           |
| features | 指定無し        | あり                  | parts, 子ディレクトリ           |           |
| pages    | 指定無し        | あり                  | features, parts, 子ディレクトリ |           |

## 基本
まず初めに、各コンポーネントのベースがこちらになります。

![baseComponent](./images/components_basic_structure.png)

コンポーネントはフォルダごとに管理され、その中に各ファイルが機能ごとに分かれています。  

`Component.tsx`にコンポーネント設計でお伝えした構成のいずれかが入り、model-componentなどの場合はHooksが切り出される形となります。  
index.tsが用意されている理由はimportの冗長化を防ぐためです。Typescriptはフォルダ直下のindex.tsを省略し参照することができます。こちらは、`Component.tsx`の内容をそのまま`index.ts`に記述したいという考え方の方もいるかもしれません。本テンプレートでは、エディタの検索性向上のためこちらの方式をとっています。

以後オレンジ色のComponent図形が現れた場合、上記のファイルを包含するものとしてお読みいただければ幸いです。


## parts
![parts](./images/parts_structure.png)
その名の通り、グローバルに利用される `parts-component` を格納する場所です。
InputやButtonなど、汎用性の高いものが格納されます。すべてのコンポーネントフォルダはpartsフォルダ直下に配置され、平たい構造となります。

依存関係は同一階層のpartsコンポーネントのみです。
これは
* 状態を持たないpropsリレーであれば再利用性が損なわれないこと
* model-componentなどの状態を持つコンポーネントに依存したとたん再利用性が消えること

が理由となります。
複雑性が増すことからatomic designにおけるatoms, molecules, organisms相当のディレクトリは用意していません。
もし、コンポーネントが増加し管理しやすくしたい際は、機能的に分けた `Inputフォルダ`・`Buttonフォルダ`などを作ると良いかもしれません。


## features
![features](./images/features_structure.png)

## pages
![features](./images/features_structure.png)

