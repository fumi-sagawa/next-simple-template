# 🧪テスト



フロントエンド開発においてもテスト自動化はメジャーなものとなってきました。テストの必要性や方法論を掴むため、まずは以下の文献がおすすめです🦁
* [質とスピード（2022春版、質疑応答用資料付き）](https://speakerdeck.com/twada/quality-and-speed-2022-spring-edition)
* [フロントエンド（React Testing Library）で TDD（テスト駆動開発）をする](https://zenn.dev/higa/articles/34439dc279c55dd2ab95)


テストは大きく分類すると

* 静的(Static)テスト
* 単体(Unit)テスト
* 結合(Integration)テスト
* E2E(end to end)テスト

にわけられ、名称や範囲の違いからシナリオテストやビジュアルリグレッションテストなどが存在します。
詳細は[こちら](https://zenn.dev/koki_tech/articles/a96e58695540a7#%F0%9F%91%BD-%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%83%89%E3%81%AE%E3%83%86%E3%82%B9%E3%83%88%E3%81%AE%E7%A8%AE%E9%A1%9E)をご覧ください。

一方で、テスト自動化の導入はコストは決して低くなくメンテナンスの問題が否めません。  
メジャーになってきた傾向のあるフロントエンドのテストですが、テストに慣れていないメンバーが多い場合記述コストが高くつき過ぎてしまうケースも否めません。

たしかなことは**費用対効果が高ければ導入すべき**ということです。([資料](https://speakerdeck.com/twada/quality-and-speed-2022-spring-edition)🦁)

上記を全体的に鑑み、本リポジトリでは**記述コストとメンテナンスコストをできるだけ低く**漸進的なテストの導入を目指します。

## 方針
基本的に[先ほどの資料](https://zenn.dev/koki_tech/articles/a96e58695540a7)を踏襲します。
> 1. トレードオフの観点でバランスのよい結合テストを厚めに書く
> 2. E2E テストは、課金導線やタイムラインなどの、不具合が発生するとビジネス上のネガティブインパクトの大きい箇所だけ書く
> 3. 単体テストは、明らかにテストしなくても自明なロジックに対しては書かない。複雑性が高いビジネスロジックの関数に関しては書く
> 4. 静的テストはベースラインとして必ず引く。導入が後回しになればなるほど導入コストが跳ね上がるので、プロジェクトの最初に必ず入れる

これをベースに本リポジトリに落とし込んでいきましょう。

### 結合テスト
`model-component`に対して実行します。したがって対象は以下です。
- `src/components/features`
- `src/component/pages/Component`
- `src/component/pages/Component/components/Component`

`features`には再利用可能な`model-component`が格納されているため基本的に記述します。  
結合テストの区分は曖昧であるため`pages`のテスト戦略は場合によって異なります。API通信やビジネスロジックがトップの`pages/Component`に集中しているのであればこちらに記述すると良いでしょう。  
一方で、pagesは`view-component`のようにレイアウト的な役割が主なこともあるはずです。そのような切り分けの場合は子ディレクトリにmodel-componentが集中するはずですのでそちらにテストを書いていきましょう。

ツールは`Jest`と`testing-library`を用います。  

### E2Eテスト
基本的に必須ではありません。記述する場合は「不具合が発生するとビジネス上のネガティブインパクトの大きい箇所」に追加します。

ツールには`Playwright`を用います。

### 単体テスト
グローバルな`hooks`に対して記述します。各コンポーネントのロジックは結合テストでカバーされているため書かない想定です。
例外として、ロジックのあるような`parts`には記述した方が良いかもしれません。例を挙げるとスナックバーやモーダルなどになります。

ツールには`Jest`と`testing-library`を用います。

## 導入ツール
本プロジェクトには以下のツールを導入しています。
- [Storybook](https://storybook.js.org/)
- [Mock Service Worker](https://mswjs.io/)
- [Jest](https://jestjs.io/)
- [testing-library](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright](https://playwright.dev/)

それぞれの使い方と参考文献を以下に記載します。

### Storybook
カタログツールです。`src/parts`配下のコンポーネントを管理し再利用性を高めます。  
最近ですと`Storybook Playfunction`という機能が追加されテストの実行や可視化ができるようになりました。
大変便利な機能ではあるのですが、Storybookは破壊的な変更が多くまたストーリーの管理にもコストがかかります。
費用対効果を考えた際に重要なことは「コンポーネントの管理と再利用性の向上」であると考え、本リポジトリではカタログとテストは分離しコンポーネントの管理に専念してもらうこととしました。

[後述](./scaffolding.md)する`yarn parts`コマンドを実行すると`.story`ファイルが自動生成されます。

```tsx
import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { ComponentName } from './ComponentName'

export default {
  component: ComponentName,
} as ComponentMeta<typeof ComponentName>

export const Default: ComponentStoryObj<typeof ComponentName> = {
  args: { text: 'サンプルボタン', handleClick: action('ボタン押下') },
  parameters: {
    docs: {
      description: {
        component: 'Some component _markdown_',
      },
    },
  },
}
export const Story: ComponentStoryObj<typeof ComponentName> = {
  args: { text: 'サンプルボタン', handleClick: action('ボタン押下') },
  parameters: {
    docs: {
      description: {
        story: 'Some story **markdown**',
      },
    },
  },
}

```
`yarn parts`時にコンポーネント名の入力が求められ、そちらの内容が`ComponentName`として扱われ雛形が出力されます。  
したがって私たちが主に追記するのは`args`部です。サンプルコードの`text`や`handleClick`がコンポーネントの`props`に対応していますので、作成したコンポーネントに合わせて修正してください。
`parameters.docs.description`はStorybookのドキュメントに表示される説明文です。`component`はコンポーネントの、`story`はストーリーの説明文になります。

場合に応じて`Story`を増やし、バリエーションを増やすことが可能です。

**参考文献**
- [Component Story Format 3.0](https://storybook.js.org/blog/component-story-format-3-0/)
- [TypeScript + Storybook CSF3.0の書き方とユニットテストへの応用](https://zenn.dev/yukishinonome/articles/6bc6e33d579276)
- [TypeScript x React x Storybook のプロジェクトを CSF3.0 対応させようとして型問題でテンパったら読む記事](https://qiita.com/p_irisawa/items/3fab9b6a961503b4793b)

### Mock Service Worker
API通信をモック化するツールです。開発時やテストの際に仮のAPIサーバーとして用います。そもそもなぜこちらのツールを使うのか。という点についてはこちらをご覧ください。[なぜMock Service Workerなのか。入門編](https://zenn.dev/yoshii0110/articles/fb5261b3ff6c6c)


`.mocks`フォルダに必要なファイルが格納されており、主に`handler.ts`を編集しモックしたいエンドポイントとレスポンスを追加します。`.mocks/index.ts`をからエクスポートされている`server`もしくは`worker`が実行されることによりモッキングが開始します。  

本リポジトリではあらかじめ`_app.tsx`にて`worker.start()`が動くよう設定されていますので、開発時は`hander.ts`に記述を追加していくだけでモックAPIが追加可能です。
テスト時はコンポーネント単位、またnode環境で実行されるため別途mswを起動する必要があります。  
[こちら](https://mswjs.io/docs/getting-started/integrate/node#using-create-react-app)を参考に以下のようなコードを追加しましょう。
```ts
describe("コンポーネントのテスト", () => {
    // Establish API mocking before all tests.
    beforeAll(() => server.listen());
    // Reset any request handlers that we may add during the tests,
    // so they don't affect other tests.
    afterEach(() => server.resetHandlers());
    // Clean up after the tests are finished.
    afterAll(() => server.close());

    //以下にテストケースを記述
});
```


英語になってしまいますが、詳しい使い方は[公式ドキュメント](https://mswjs.io/)のDocsやExampleがよくまとまっています。

**参考文献**
- [フロントエンドのテストのモックには msw を使うのが最近の流行りらしい](https://zenn.dev/azukiazusa/articles/using-msw-to-mock-frontend-tests)
- [私のフロントエンドディレクトリ構成・テスト観点 2022](https://zenn.dev/takepepe/articles/nextjs-testing-strategy-2022)


### Jest/testing-library
単体、結合テスト用のライブラリです。本リポジトリでは主に`src/components/features`に対する結合テスト、`src/hooks`への単体テストに用います。

はじめに`Jest`と`testing-library`別のライブラリだということを抑えてください。  
まず、`Jest`はJavascript用のテストランナーであり以下のような関数のテストができます。
```js
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```
Nodeサーバーならこれで十分かもしれませんが、私たちの目指すゴールはReactのコンポーネントをテストすることです。したがって、`testing-library`を導入することによりJSXのレンダリングやHooksが動く環境を作りコンポーネントの要素取得やインタラクティブなテストを実現します。

```tsx
import { Sample } from "@/components/Sample";
import { render } from "@testing-library/react";

describe("Sampleコンポーネント", () => {
  test("should first", () => {
    const { getByText } = render(<Sample />);
    expect(getByText("Nextjs+Jestのサンプルサプリ")).toBeTruthy();
    expect(getByText("設定がすごく楽になりました。")).toBeTruthy();
  });
});
```
https://zenn.dev/miruoon_892/articles/e42e64fbb55137 より引用

より詳細を掴むには[ReactでTesting Library/Jestを使ってテストを学ぼう](https://reffect.co.jp/react/react-test#Testing_LibraryJest)や[Jest](https://jestjs.io/ja/docs/getting-started), [testing-library](https://testing-library.com/docs/react-testing-library/intro/)の公式ドキュメントがおすすめです。

**参考文献**
- [React Testing Libraryの使い方](https://qiita.com/ossan-engineer/items/4757d7457fafd44d2d2f)
- [フロントエンド（React Testing Library）で TDD（テスト駆動開発）をする](https://zenn.dev/higa/articles/34439dc279c55dd2ab95)
- [Next.js 12でJestの設定がかなり楽になった](https://zenn.dev/miruoon_892/articles/e42e64fbb55137)
- [私のフロントエンドディレクトリ構成・テスト観点 2022](https://zenn.dev/takepepe/articles/nextjs-testing-strategy-2022)

### Playwright
E2Eテスト用のライブラリです。`/e2e`に記述します。使い方は[公式ドキュメント](https://playwright.dev/docs/intro)を参考にしてください。
playwrightには[ユーザー操作によるテストコード自動生成機能](https://github.com/microsoft/playwright/blob/main/docs/src/codegen.md)があります。
本リポジトリでは以下のコマンドで実行可能です。
```bash
yarn test:e2e:codegen
```

**参考文献**
- [PlayWrightを用いたテスト自動化](https://www.cresco.co.jp/blog/entry/20355/)
- [Next.jsにPlaywright導入とnext-i18nextで多言語化](https://blog.photosynthesic.jp/2022/04/nextjs-playwright-next-i18next/)
- [PlaywrightでフロントエンドのE2Eテストを自動化してみた話](https://zenn.dev/mikana0918/articles/b6eb66377fb25a)

<br>
<br>
<br>

[>>「🐶ファイル生成(Scaffold)」へ進む](./scaffolding.md)