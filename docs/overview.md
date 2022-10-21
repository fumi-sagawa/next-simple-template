# 概要
シンプルで使いやすいNext.jsですが、効率の良い開発を行うためには設計などの仕組みや外部ライブラリが必要となります。
本リポジトリはその最低限の構成を作り、素早いプロジェクトのスタート・メンバー間の共通言語を形成するために作成しました。

## 導入ライブラリ
* eslint
* prettier
* Next.js
* jotai
* axios
* swr
* jest
* react-testing-library
* msw
* storybook
* scaffdog

なお、linterの設定は「[りあクト！第４版](https://oukayuka.booth.pm/items/2368045)」を参考にしています。
詳細は同書籍「第 7 章 リンターとフォーマッタでコード美人に」をご覧ください。

## はじめ方

```
# インストール
yarn

# 開発環境立ち上げ
yarn dev

# ビルド
yarn build

# 静的出力
yarn export
```
<br>
<br>
<br>

[>>「🧩コンポーネント設計」へ進む](component-design.md)