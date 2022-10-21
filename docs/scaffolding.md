# 🐶ファイル生成(Scaffold)
ここまでで

* 🧩コンポーネント設計
* 📁ディレクトリ構成
* 🗃️状態管理
* 🧪テスト

を覗いてきました。  

ルールがあれば実装がスケールしやすくなりますが、一方で守るためにも相応のコストがかかります。  
だんだんと守られなくなり、最後には瓦解することがしばしばあります。

この問題を防ぐため、コストを下げ一貫性を保つために導入されているライブラリが **scaffdog** です。
* [Markdown Driven な scaffolding ツールを作った](https://blog.wadackel.me/2019/scaffdog/)
* [scaffdog - Github](https://github.com/cats-oss/scaffdog)

markdownのテンプレートを用意し、CLIからファイル一式を生成するツールとなります。

本リポジトリでは `.scaffdog` にそれぞれのコンポーネント用テンプレートが用意されており、またあらかじめ`npm scripts`が登録されています。
```js
  "component": "scaffdog generate component",
  "parts": "scaffdog generate parts",
  "features": "scaffdog generate features",
  "pages": "scaffdog generate pages",
  "hooks": "scaffdog generate hooks",
```
それぞれparts, features, pages, hooksフォルダに適したコンポーネントフォルダが生成されるコマンドです。
```bash
yarn parts
```
のように使用してください。  
実行すると対話が始まります。まずコンポーネント名が聞かれますので任意の名前を入力してください。
```bash
? Please enter a component name. SillverBullet
```
次に生成先に応じて`props`, `hooks`, `story`の有無ががYes/Noで質問されます。
デフォルト値が設定されており、Enterを押すとNoが入力されます。
```bash
? Is it have hooks? (Default false) (y/N) 
```

生成先を見ると、必要なファイル一式が生成されているのが確認できるはずです。
importなどの依存関係が解決されているため、`.story` などを含め短時間で実装できます。


例外的に`features`, `pages`の子孫ディレクトリでのコンポーネント生成のために
```bash
yarn component
```
コマンドが存在します。  
これは「🧩コンポーネント設計」のどれにも属さない自由なコンポーネントを作成できるコマンドです。
子孫への切り分けの際は`parts-component`, `model-component`のどれにも分類できないことがありますので、その際はこちらのコマンドを使用してください。

scaffdogを詳しく知りたい方は以下の参考文献をご覧ください。
* [Scaffdog で React コンポーネントに必要なファイルを自動生成する](https://shimotsu.hatenablog.com/entry/2022/01/21/192613)
* [scaffdogを使ってrails generate scaffold相当を手軽に実現する](https://zenn.dev/katsumanarisawa/articles/2aeced911e5a0c)
