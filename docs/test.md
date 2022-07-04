# 🧪テスト
フロントエンド開発においても、テスト自動化はメジャーなものとなってきました。テストの必要性や方法論は以下の文献がわかりやすいです🦁
* [質とスピード（2022春版、質疑応答用資料付き）](https://speakerdeck.com/twada/quality-and-speed-2022-spring-edition)
* [フロントエンド（React Testing Library）で TDD（テスト駆動開発）をする](https://zenn.dev/higa/articles/34439dc279c55dd2ab95)


一方で、テスト自動化の導入はコストが高くメンテナンスの問題も発生します。

以上から本リポジトリでは

* Storybook
* jest(React Testing Library)

の二つに絞り導入しています。

## Storybook
コンポーネントをStorybookに集約することによりコンポーネント単体での開発を可能にし、コミュニケーションコストの削減を狙います。

**Storybookの対象は主にpartsディレクトリ** です。カタログ登録の費用対効果から定めました。

記法は[Component Story Format 3.0(CSF3.0)](https://storybook.js.org/blog/component-story-format-3-0/)に統一します。
```jsx
import { MyComponent } from './MyComponent';

export default {
  component: MyComponent,
};

export const Index = {};
```

## jest (React Testing Library)
**プロジェクトルートのHooksに対する単体テストとして利用**します。
再利用するロジックに不具合があってはいけませんのでクオリティを担保しましょう。

<br>

---

## 追加のテスト戦略
テストは大きく分類すると

* 静的(Static)テスト
* 単体(Unit)テスト
* 結合(Integration)テスト
* E2E(end to end)テスト

にわけられ、名称や範囲の違いからシナリオテストやビジュアルリグレッションテストなどが存在します。

正直奥が深く筆者はまだまだ全体像を掴みきれていません。~~そもそもテスト碌に書けていません。~~

たしかなことは**費用対効果が高ければ導入すべき**ということです。  
しかし費用にも

* 導入コスト
* 記述コスト
* メンテナンスコスト

など多様に存在します。  

ネットを見るとメジャーになってきた傾向のあるフロントエンドのテストですが、テストに慣れていないメンバーが多い場合導入コストが高くつき過ぎてしまうでしょう。

ですので、追加のテスト戦略は納期やメンバーのテスト慣れと相談しつつ導入していくのが良いです。

追加導入するとして、妥当な選択肢は次の３つでしょう。

* jest(React Testing Library), Storybook Play function を用いたpartsに対する**単体テスト**
* jest(React Testing Library), Storybook Play function を用いたfeaturesに対する**結合テスト**
* cypress または playwright を用いた**E2Eテスト**

インターネット上に知見が多いのは前者の jest と cypress 。  
今後の効率化を見据えて投資するのであれば Storybook Play functions(with Jest) と playwright が良さそうです。

なお、本リポジトリにはおそらくデファクトになるであろうStorybook Play functionsとJestでのコンポーネントテストがあらかじめ組み込まれています。  

したがって本リポジトリの機能をフル活用すると
- Typescriptによる静的テスト
- JestによるHooksへの単体テスト
- Play functionsによるpartsコンポーネントへの単体テスト(任意)
- Play functionsによるfeatuersコンポーネントへの結合テスト

のテストが可能です。

<br>

---
本リポジトリのテスト戦略は以下の文献がベースです。

- [私の推しフロントエンドディレクトリ構成と気をつけたいポイント](https://zenn.dev/sakito/articles/af87061a5016e6)
- [Reactアプリケーションのテスト戦略](https://speakerdeck.com/0906koki/reactapurikesiyonfalsetesutozhan-lue)
- [Storybook 駆動開発 @ CSF3.0](https://zenn.dev/takepepe/articles/storybook-driven-development)

またそれぞれの文献から重要な考え方を抜粋しますので、こちらを押さえておくと勘所が掴みやすくなると思います。

> Testing TrophyではIntegration Test層のテストが一番多くなります。このIntegration Testの中で先程述べたcomponentsやfunctionsがテストされているイメージです。各部分にテストを書いてないと不安になるのも分かりますが、元々Testing Trophyはカバレッジを100%にするのが目的ではありません。ユーザーから見た機能がカバーされていることを大事にしています。なのでユーザーにとって見る面であるルートのindex.tsxにIntegration Testを書くことを意識します。  
> 
> storiesでは、Interaction Testを1つ書くことをオススメします。Interaction Testを書くことで機能単位でE2Eテスト(統合テスト)を書くことができます。  
> 
> 
> 「私の推しフロントエンドディレクトリ構成と気をつけたいポイント」より


> 結合テストを中心に書く
>
> 結合テストは、実装速度、実行時間、カバーする範囲でバランスが良い
>  
> エコシステムが充実してきている  
> ・APIモックとしてMSW  
> ・React Testing Library  
> ・Storybook play functions
> 
> 書く対象は、Container Component
> 
> Container Copmonentに対して結合テストを書くことで、ユーザシナリオベースでテスト書きやすく、テストカバー範囲も大きい
> 
>「Reactアプリケーションのテスト戦略」より

「結合テストのコストパフォーマンスが良く、Storybook Play functionsの登場により目視でテストが描きやすく、再利用可能になった(さらにコストが低下した)」と要約できるかもしれません。

Storybookのカタログ化を積極的に行う。  
Play functionsでインタラクションも書いてみる。  
余裕があれば一括でチェックできるようJestに持っていく。  

というように漸進的に取り入れられれば、それぞれのチームにおける最高効率を負担なく達成できるでしょう。

<br>

## その他参考文献
- [StorybookでMock Service Worker (MSW) を使えるようにする。](https://zenn.dev/rabbit/articles/dd9b04940b93fe)
- [TypeScript + Storybook CSF3.0の書き方とユニットテストへの応用](https://zenn.dev/yukishinonome/articles/6bc6e33d579276)



<br>
<br>
<br>

[>>「🐶ファイル生成(Scaffold)」へ進む](./scaffolding.md)