# 🗃️状態管理
* useState
* jotai

を利用します。

基本的にはuseStateを利用しpropsで子に受け渡しましょう。

![localstate](./images/localstate.png)

しかしコンポーネントの切り分ける呼び出しがあると**propsリレー(props drilling)** が発生します。

![propsdrilling](./images/propsdrilling.png)

これはその状態に関心がないコンポーネントにも状態がわたる、コンポーネントが密結合になるなどいくつか課題があります。  
そういった場合にはjotaiを用いてグローバルなStateを用いてください。

![globalstate](./images/globalstate.png)

これにより灰色のコンポーネントには状態がわたらず `view-component` としてレイアウトに専念することができます。また、末端のコンポーネントも `model-component` として状態とその表示に専念できるでしょう。

jotaiは、このようなスコープを持った状態共有やHooksと相性の良い状態管理ライブラリです。
類似ライブラリにRecoilがありますが、本テンプレートではよりシンプルなこちらを選定しました。  
https://jotai.org/  
キャラに独特の可愛さがありますね。

非常にシンプルでuseStateと似た使用感があります。
```tsx
//store.ts
import { atom } from 'jotai'

const countAtom = atom(0)

//Counter.tsx
import { useAtom } from 'jotai'

const Counter = () => {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div>
      {count} <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
};
```
グローバルStateはよくグローバル空間の汚染が懸念されます。
その際には状態を共有したい一つ上をProviderで囲ってあげましょう。
```tsx
import { Provider } from "jotai";

const SomeComponent = () => (
  <Provider>
    <SomeComponent />
  </Provider>
)
```
[こちらの動画](https://egghead.io/lessons/react-isolate-state-in-an-application-with-jotai-provider)で詳細な使い方が紹介されています。

Reactはアンマウント時に状態を初期化します。したがってProviderの利用はグローバルStateで厄介な[状態のリセットにも使える](https://github.com/pmndrs/jotai/issues/404)でしょう。


## API通信とキャッシュ戦略[WIP]
 global stateの代わりにswr/reaqtquery/urql/を用いること。model-componentでfetching stateを利用したcomponentの出しわけや、Suspenseに触れる。
