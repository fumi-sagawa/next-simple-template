# 🧪テスト
フロントエンド開発においても、テスト自動化はメジャーなものとなってきました。テストの必要性や方法論は以下の文献がわかりやすいです🦁
* [質とスピード（2022春版、質疑応答用資料付き）](https://speakerdeck.com/twada/quality-and-speed-2022-spring-edition)
* [フロントエンド（React Testing Library）で TDD（テスト駆動開発）をする](https://zenn.dev/higa/articles/34439dc279c55dd2ab95)
* [Reactアプリケーションのテスト戦略](https://speakerdeck.com/0906koki/reactapurikesiyonfalsetesutozhan-lue)


一方で、テスト自動化の導入はコストが高くメンテナンスの問題も発生します。

以上から本リポジトリでは

* Storybook
* jest(React Testing Library)

の二つに絞り導入しています。

## Storybook
本リポジトリの用途的に、テストというよりカタログ用ツールになるかもしれません。コンポーネントをStorybookに集約することによりコンポーネント単体での開発を可能にし、コミュニケーションコストの削減を狙います。

**Storybookの対象は主にparts・featuresディレクトリ** です。

これは、上記と同じ理由(開発しやすさ向上とコミュニケーションコスト削減)から定めました。

記法は[Component Story Format(CSF)](https://storybook.js.org/docs/react/api/csf)に統一します。
```jsx
import { MyComponent } from './MyComponent';

export default {
  title: 'Path/To/MyComponent',
  component: MyComponent,
};

export const Basic = () => <MyComponent />;
```

## jest (React Testing Library)
**Hooksに対する単体テストとして利用**します。

本リポジトリはロジックを基本的にHooksに切り分けます。
バグを防ぐ・後々のリファクタリングのためにテストを書いて動作を担保しましょう。


## 追加のテスト戦略
テストは大きく分類すると

* 静的(Static)テスト
* 単体(Unit)テスト
* 結合(Integration)テスト
* E2E(end to end)テスト

にわけられ、名称や範囲の違いからシナリオテストやビジュアルリグレッションテストなどが存在します。

正直奥が深く筆者は全体像を掴みきれていません。~~そもそもテスト碌に書けていません。反省。~~

ただひとつたしかなことは「費用対効果が高ければ導入すべき」ということです。
しかし「費用」にも

* 導入コスト
* 記述コスト
* メンテナンスコスト

など様々に存在します。  

SNSの投稿や記事を見るとメジャーになってきた傾向のあるフロントエンドのテストですが、テストに慣れていないメンバーが多い場合導入コストが高くつき過ぎてしまうでしょう。

したがって、追加のテスト戦略は納期やメンバーのテスト慣れと相談しつつ導入していくのが良いかもしれません。

追加導入するとして、妥当な選択肢は次の二つです

* jest(React Testing Library), Storybook Play function を用いた**結合テスト**
* cypress または playwright を用いた**E2Eテスト**

インターネット上に知見が多いのは前者の jest と cypress 。  
今後の効率化を見据えて投資するのであれば Storybook Play function(with Jest) と playwright が良さそうです。


参考文献を添付しますので、深掘りしたい方はこちらをご覧ください。

* [React テスト応用、テストに悩む人へ](https://zenn.dev/tkdn/books/react-testing-patterns)
* [E2EテストフレームワークのCypressに入門した](https://zenn.dev/manalink/articles/manalink-cypress-introduce)
* [PlaywrightでフロントエンドのE2Eテストを自動化してみた話](https://zenn.dev/mikana0918/articles/b6eb66377fb25a)
* [Storybook 駆動開発 @ CSF3.0](https://zenn.dev/takepepe/articles/storybook-driven-development)


<br>
<br>
<br>

[>>「🐶ファイル生成(Scaffold)」へ進む](./scaffolding.md)