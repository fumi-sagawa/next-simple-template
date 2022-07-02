# 🧩コンポーネント設計
Reactのコンポーネントは見た目、ロジック、状態など様々な役割を持ちます。一方で記述の自由度が高いため、秩序のないコードが生まれがちです。  
またテストの自動化やカタログ化を考慮した際、API通信や状態と密結合は望ましくありません。

以上から本リポジトリでは
* 見た目(Style)を持つか
* props(引数)を持つか
* 状態/ロジックを含むか
* 外部通信やStoreへの依存があるか
  
という観点からコンポーネントを細分化します。

こちらが早見表です。

|                                      | 見た目(Style) | props | 状態(State) | ロジック | Store, API通信 |
| ------------------------------------ | ---------- | ----- | --------- | ---- | ------------ |
| view-component                       | ○          | ×     | ×         | ×    | ×            |
| parts-component<br>(presentational) | ○          | ○     | △         | △    | ×            |
| model-component<br>(container)      | △          | △     | ○         | ○    | ○            |

本項のコンポーネント設計はDanさんの[「Presentational and Container Components」](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)が元となっています。ReactHooksの登場によりロジック分離の状況が変わりましたが、重要な考え方ですので読んだことがない方は一読ください。

以下重要な部分を抜粋しておきます。

> **Presentational Component**
> - 見た目にこだわる。
> - 内部にはプレゼンテーショナルコンポーネントとコンテナコンポーネント**の両方を含むことができ、通常、いくつかのDOMマークアップとそれ自身のスタイルを持ちます。
> - 多くの場合、this.props.childrenを介した封じ込めを許可します。
> - Fluxのアクションやストアなど、アプリの他の部分に依存しないこと。
> - データの読み込みや変異の方法を指定しない。
> - データとコールバックをプロップス経由で排他的に受信します。
> - 独自の状態を持つことは稀である（持つ場合はデータではなくUIの状態である）。
> - ステート、ライフサイクルフック、パフォーマンスの最適化が必要でない限り、機能コンポーネントとして記述されます。
> - 例 Page、Sidebar、Story、UserInfo、List。

> **Container Component**
> - 物事の仕組みに関心がある。
> - 内部には、プレゼンテーショナルコンポーネントとコンテナコンポーネントの両方を含むことができますが、通常は、いくつかのラップdivを除いて、それ自身のいかなるDOMマークアップも持たず、いかなるスタイルも持つことはありません
> - プレゼンテーショナルコンポーネントや他のコンテナコンポーネントにデータとビヘイビアを提供する。
> - Fluxのアクションを呼び出し、これをプレゼンテーショナルコンポーネントのコールバックとして提供する。
> - データソースとして機能することが多いため、ステートフルであることが多い。
> - 通常、手書きではなく、React Redux のconnect()、Relay のcreateContainer()、Flux Utils のContainer.create()などの高次コンポーネントを用いて生成されることがほとんどです。
> - 例 UserPage、FollowersSidebar、StoryContainer、FollowedUserList。

<br>

## view-component
見た目だけのコンポーネントであり、状態やpropsを持ちません。   
html,cssの代わりやレイアウト、コンポーネントの集約のために利用します。
```tsx
// 例
export const Component = () => {
  return <p>サンプルテキスト</p>
}
```

```tsx
// 例
export const Profile = () => {
  return (
    <div>
      <Icon/>
      <UserInfo/>
    </div>
  )
}
```
<br>

## parts-component
引数によるViewの表示、イベントの発火を担う(Presentationalな)コンポーネントです。カタログ化されるべきコンポーネントであり、UI以外の状態(State)を持たず内部の情報は親から渡されます。
```tsx
// 例
type ButtonProps = {
  handleClick: () => void
  text: string
}

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

```
<br>

## model-component
**状態を持ち処理を行う**ことが主目的の(Container)コンポーネントです。
状態はLocal, Global両方を指し、また外部とのAPI連携が可能です。

```tsx
import { useCounter } from "./useCounter"
import { Button } from "@/components/parts/Button"
import {Title} from "@/components/parts/Title"
import styles from './Counter.module.scss'

export const Counter = () => {
  const {count, increment, decrement} = useCounter()
  return (
    <div className={styles.container}>
      <p>Cont: {count}<p>
      <Button onClick={increment} text={'+'} />
      <Button onClick={decrement} text={'-'} />
    </div>
  )
}
```
上記の構造はテスト自動化やチームの方針によって形が変わります。
ポイントは
- Styleとロジックが混在することが許容できるか
- モックサーバ(関数)を用意して、テストする際にAPI通信をMockできるか

の２点です。
まずCounterの別実装はこのようになります。

```tsx
import { useCounter } from "./useCounter"
import { Button } from "@/components/parts/Button"
import {Title} from "@/components/parts/Title"
import styles from './Counter.module.scss'

//Container
export const Counter = () => {
  const {count, increment, decrement} = useCounter()
  return (
    <CounterView 
      count={count}
      increment={increment}
      decrement={decrement}
    />
  )
}

//Presentational
type CounterViewProps = {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const CounterView = (props: CounterViewProps) => {
  return (
    <div className={styles.container}>
      <p>{props.count}</p>
      <Button onClick={props.increment} text={'+'} />
      <Button onClick={props.increment} text={'-'} />
    </div>
  )
}

```
このように `model-component` は`Container/Presentationalパターン`として分けることができます。
メリットには
- ロジックとViewの切り分けが明確に行える
- Viewコンポーネントを用意することでカタログ化する際に外部依存を排除することができる

のようなものが挙げられます。

一方で記述量が増えることも事実です。
また、ロジックの切り分けに目を向けると、そもそもHooksを切り出している時点でViewとロジックの切り分けは完了しています。

チームの方針にもよりますが、**基本的には１つ目の設計に対してコンポーネントの結合テストを行うのが良い**でしょう。  
とはいえモックを逐一用意するのにコストがかかるのも事実です。その場合はViewコンポーネントは切り分けViewをカタログ化、Hooksと合わせてそれぞれでテストする方針になりそうです。







<br>

## 補足：引数(props)を持ち内部ロジックを持つコンポーネント
- feature配下なら特に気にする必要はない
  - ただ、外部通信やstoreの呼び出しがあるのであればmodel-component(Container)を利用し依存は切り分けるべき
- 再利用の可能性があるならapi通信とstoreの呼び出しは必ず避ける

開発を進めていくとこれは「どのコンポーネントとして扱うべきなのか…？」と疑問に思うことがあります。
次の項の[「📁ディレクトリ構成」](./directory-structure.md)と関わる部分です。


特に問題となるパターンが「引数(props)があり、内部で値の処理が行われる」コンポーネントです。

ToDoリストのアイテムを例に取ると次のようなコンポーネントです。

```tsx
import type {Todo} from "../types/useTodo"
//  type Todo = {
//   text: string;
//   id: number;
//   checked: boolean;
// };

type Props = {
  item: Todo;
  onEdit: (id: number, text: string) => void;
  onCheck: (id: number) => void;
}

export const TodoItem = (props: Props) => {
  return (
    <li>
      <input
       type="checkbox"
       checked={props.item.checked}
       onChange={() => onCheck(props.item.id)}
      />
      <input
       type="text"
       disabled={props.checked}
       value={props.text}
       onChange={(e) => onEdit(props.item.id, e.target.value)}
      />
    </li>
  )
}
```
一方で、コンポーネント内部に関数が定義されているなどロジックがview側に露出している懸念があります。  

この１つ目と2つ目、どちらが適した記法なのでしょうか。

おそらく考えるべきは、そもそも何のために`Container/Presentational Pattern`を用いていたかということです。

これは大まかに分けて
* コンポーネント化
* カタログ化(Storybookへの登録しやすさ)
* テストしやすさ

のためでした。

この観点から見ると
* Hooksを切り出したところでテストの必要がない
* ２つ目のコンポーネントでもStorybookへの登録に問題はない
* 今回のケースでは、テストはHooksではなくコンポーネントに対して行われるべき

ということがわかります。今回の例は `parts-component` の拡張としても捉えられるでしょう。
<br>
<br>

これまでたくさん方が考案されてきたように、「これが正解」というコンポーネント設計はおそらくありません。

今回のようなケースのために、「カタログ化/テストが可能であれば関数の定義はOK」などのルールを定めておくと安心してプロジェクトが進められそうです。

<br>
<br>
<br>

[>>「📁ディレクトリ構成」へ進む](./directory-structure.md)
