# Next.js Template Repository
- Next.js
- eslint
- prettier
- husky
- jest
- react-testing-library
- scaffdog
- renovate bot
- pathpida

# directory rule
**src/pages**
- componentsのpage内コンポーネントをimportするだけに留め、この中でJSXを書くことは極力なくす

**src/components**
- layout (レイアウトに関する抱擁コンポーネント)
- model (何らかのモデル概念に依存したコンポーネント)
- page (ページコンポーネント)
- ui (汎用的なコンポーネント)

**その他**
- コンポーネントはcontainer, presenterパターンを意識する
- pages内はpage extensionの記法でロジックとページごとにファイルを分ける
- testファイルとstoriesファイルは各コンポーネントと同じディレクトリに配置
- FC/VFCは使わない