# 🧩コンポーネント設計
Reactのコンポーネントは見た目、ロジック、状態など様々な役割を持ちます。一方で記述の自由度が高いため、秩序のないコードが生まれがちです。  
またテストの自動化やカタログ化を考慮した際、API通信や状態と密結合は望ましくありません。

以上から本リポジトリでは
* 見た目があるか
* props(引数)を持つか
* 状態/ロジックを含むか
* 外部との通信を持つか
  
という観点からコンポーネントを細分化します。

こちらが早見表です。

|                 | 見た目(View) | props | 状態(State) | ロジック | API通信 | 
| --------------- | --------- | ----- | --------- | ---- | ----- |
| view-component  | ○         | ×     | ×         | ×    | ×     | 
| parts-component | ○         | ○     | △         | △    | ×     |
| model-component | ○         | △     | ○         | ○    | ○     |
| process-component       | ○         | ○     | ○         | ○    | ○     |


## view-component
見た目だけのコンポーネントであり、状態やpropsを持ちません。   
html・cssの代わりや、コンポーネントの集約のために利用します。
```tsx
// 例
export const Component = () => {
  return <p>サンプルテキスト</p>
}
```

## parts-component
引数によるViewの表示、イベントの発火を担うコンポーネントです。カタログ化されるべきコンポーネントであり、基本的に状態を持たず内部の情報は親から渡されます。
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


## model-component
状態を持つことが目的のコンポーネントです。状態はLocal, Global両方を指し、またmodel層であるため外部とのAPI連携が可能です。

コンポーネント内部で状態を定義すると、カタログ化や後々のコンポーネント切り出しの際に不便です。
したがって`model-component`では`Container/Presentational pattern`を用いています。

```tsx
import { useCounter } from "./useCounter"
import { Button } from "@/components/parts/Button"

//Container
export const Counter = () => {
  const {count, increment, decrement} = useCounter()
  return (
    <CounterView 
      title={count}
      increment={increment}
      decrement={decrement}
    />
  )
}

//Presentational
type CounterViewProps = {
  title: string;
  increment: () => void;
  decrement: () => void;
}

export const CounterView = (props: CounterViewProps) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <Button onClick={props.increment} text={'+'} />
      <Button onClick={props.increment} text={'-'} />
    </div>
  )
}

```
上記は単純な例ですが、API通信からの返却値を表示するとなるとタグの増加が予想されます。

こちらの対処法として、他の場所で利用する可能性があるコンポーネントを作成する際はグローバルな `components/parts` ディレクトリに移動させます。その場所でしか利用しないコンポーネントが出来上がる際は下階層に `components` ディレクトリを切りましょう。

[>>「📁ディレクトリ構成」参照](./directory-structure.md)


## process-component

model-componentのcontainerにpropsを用意した全ての特徴を持つコンポーネントです。名称に少し違和感があるため、各自で変更いただければ幸いです。

親から子への純粋なprops受け渡しであれば`parts-component`で事足りますので、こちらに渡るpropsは何らかの処理が施されることとなります。

したがって、**propsに渡ってきたものを関数(やHooks初期化時の引数)に渡す**というパターンが多くなるはずです。
```tsx
// import { useTodoItem } from "./useTodoItem"
import type {Todo} from "../types/useTodo"
//  type Todo = {
//   text: string;
//   id: number;
//   checked: boolean;
// };

//Container
type TodoItemProps = {
  item: Todo;
  onEdit: (id: number, text: string) => void;
  onCheck: (id: number) => void;
}

export const TodoItem = (props:TodoItemProps) => {
  // const {handleEdit, handleCheck} = useTodoItem(props.item.id, props.onEdit, props.onCheck)
  const handleEdit = (event) =>{
    props.onEdit(props.id ,event.target.value)
  }
  const handleCheck = () => {
     props.onCheck(props.id)
  }

  return (
    <TodoItemView 
     item={item}
     handleEdit={handleEdit}
     handleCheck={handleCheck}
    />
)}

//Presentational
type TodoItemViewProps = {
  item:Todo
  handleCheck: () => void;
  handleEdit: (event) => void;
}

export const TodoItemView = (props: TodoItemViewProps) => {
  return (
    <li>
      <input
       type="checkbox"
       checked={props.item.checked}
       onChange={props.handleCheck}
      />
      <input
       type="text"
       disabled={props.item.checked}
       value={props.item.text}
       onChange={props.handleEdit}
      />
    </li>
  )
}
```
身近なToDoリストを例に挙げてみましたが、複雑さはいわゆる通常の記法より増しているように思えます。

上記の例を小ない行数で書くと以下です。
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
スッキリしました。個人的にもこちらが好きです。一方で、コンポーネント内部に関数が定義されているなどロジックがview側に露出している懸念があります。  

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
