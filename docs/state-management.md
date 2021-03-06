# ðï¸ç¶æç®¡ç
* useState
* jotai

ãå©ç¨ãã¾ãã

åºæ¬çã«ã¯useStateãå©ç¨ãpropsã§å­ã«åãæ¸¡ãã¾ãããã

![localstate](./images/localstate.png)

ãããã³ã³ãã¼ãã³ãã®åãåããå¼ã³åºããããã¨**propsãªã¬ã¼(props drilling)** ãçºçãã¾ãã

![propsdrilling](./images/propsdrilling.png)

ããã¯ãã®ç¶æã«é¢å¿ããªãã³ã³ãã¼ãã³ãã«ãç¶æãããããã³ã³ãã¼ãã³ããå¯çµåã«ãªããªã©ããã¤ãèª²é¡ãããã¾ãã  
ãããã£ãå ´åã«ã¯jotaiãç¨ãã¦ã°ã­ã¼ãã«ãªStateãç¨ãã¦ãã ããã

![globalstate](./images/globalstate.png)

ããã«ããç°è²ã®ã³ã³ãã¼ãã³ãã«ã¯ç¶æããããã `view-component` ã¨ãã¦ã¬ã¤ã¢ã¦ãã«å°å¿µãããã¨ãã§ãã¾ããã¾ããæ«ç«¯ã®ã³ã³ãã¼ãã³ãã `model-component` ã¨ãã¦ç¶æã¨ãã®è¡¨ç¤ºã«å°å¿µã§ããã§ãããã

jotaiã¯ãã®ãããªåã°ã­ã¼ãã«ãªç¶æå±æãHooksã¨ç¸æ§ã®è¯ãç¶æç®¡çã©ã¤ãã©ãªã§ãã
é¡ä¼¼ã©ã¤ãã©ãªã«Recoilãããã¾ãããæ¬ãã³ãã¬ã¼ãã§ã¯ããã·ã³ãã«ãªãã¡ããé¸å®ãã¾ããã  
https://jotai.org/  
ã­ã£ã©ã«ç¬ç¹ã®å¯æããããã¾ãã­ã

éå¸¸ã«ã·ã³ãã«ã§useStateã¨ä¼¼ãä½¿ç¨æãããã¾ãã
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
ã°ã­ã¼ãã«Stateã¯ããç©ºéã®æ±æãæ¸å¿µããã¾ãã
ãã®éã«ã¯ç¶æãå±æãããä¸ã¤ä¸ãProviderã§å²ã£ã¦ããã¾ãããã
```tsx
import { Provider } from "jotai";

const SomeComponent = () => (
  <Provider>
    <SomeComponent />
  </Provider>
)
```
Providerã¯[ãã¡ãã®åç»](https://egghead.io/lessons/react-isolate-state-in-an-application-with-jotai-provider)ã§è©³ç´°ãªä½¿ãæ¹ãç´¹ä»ããã¦ãã¾ãã

ä¸æ¹ã§ãããã¯æ³¨æããªãã¦ã¯ãªããªãå®è£ãã¿ã¼ã³ã§ãããã£ããglobalã«ä½¿ç¨ãããç¶æããã£ãã¨ãã¦ããProviderãå­å¨ããã¨ãã®ä¸ã§ã¯å¥ã®ç¶æã¨ãã¦æ±ããã¦ãã¾ãã¾ãã  
ä¾ãæããã¨ããã¹ããã¯ãã¼ã®è¡¨ç¤º/éè¡¨ç¤ºã®ç¶æãå¥ãã®ã¨ãã¦æ±ããã¦ãã¾ããã±ã¼ã¹ãæãããã¾ãã

**åºæ¬ã¯ `Provider-less mode` ã§å©ç¨ãã`feature/Componentå`ã»`pages/Componentå` ç´ä¸ã§å®ç¾©ãæ¬ä¼¼çãªã¹ã³ã¼ããç²å¾ããã** ç¹æ®ãªã±ã¼ã¹ã§ `Provider` ãå©ç¨ããã¨è¯ãã§ãããã



## APIéä¿¡ã¨ã­ã£ãã·ã¥æ¦ç¥

ã°ã­ã¼ãã«ãªç¶æã¨APIéä¿¡ã¯å¯æ¥ãªé¢ä¿ã«ããã¾ããä¾ãã°ããã¦ã¼ã¶ã¼æå ±ãèª­ã¿è¾¼ãã§ãã®ç¶æãã­ã£ãã·ã¥ãã¦ä½¿ãåãããªã©ã§ãã  
Reactã«ã¯ãµã¼ãã¼éä¿¡ãã­ã£ãã·ã¥ããããã«ä»ã«ãã¡ã¸ã£ã¼ãªææ®µããã¾ãã

ããã
* [react-query](https://react-query.tanstack.com/)
* [swr](https://swr.vercel.app/ja)
* [apollo client](https://www.apollographql.com/)
* [urql](https://formidable.com/open-source/urql/)

ãªã©ã§ãã[bulletproof-react](https://github.com/alan2207/bulletproof-react/blob/master/docs/state-management.md#server-cache-state)ã§ãç´¹ä»ããã¦ãã¾ãã®ã§ãã¡ãããè¦§ãã ããã

ä¸è¨ã®ã©ã¤ãã©ãªãç«¯çã«ã¾ã¨ããã¨
1. æå ±ããã§ãããã
2. æå ±ãã©ã¤ãã©ãªå´ã«ã¨ã£ã¦ãã(ã­ã£ãã·ã¥åãã)
3. æ¬¡åãã§ããæã«ã­ã£ãã·ã¥ããæå ±ãè¿ã(ç¡ç¨ãªAPIéä¿¡ãé¿ãé«éåãå³ã)

ã¨ããå½¹å²ãæã¤ãã®ã¨ãªãã¾ãã

ãã£ã¦ããããã¨ã¯ã·ã³ãã«ã§ãããç§ãã¡ã¨ãã¦ã¯ç¶æãsetããæéãªã©ãæ¸ãã¾ãã®ã§ä¾¿å©ã§ããä¸æ¹ã§ãã­ã£ãã·ã¥ãä½¿ç¨ãããã¨ã«ãªãã¾ãã®ã§é©åã«æ±ããªããã°å¤ãæå ±ãè¿ã£ã¦ãããªã©ã®åé¡ãçãã¾ãã

ãããã®ã©ã¤ãã©ãªã®æ ¹åºã«ã¯ `stale-while-revalidate` ã¨ããèãæ¹ãããã¾ããæ­£ããéç¨ããããã«ããå°å¥åã«ä¸åº¦è§¦ãã¦ããã¨è¯ãã§ãããã[åè](https://zenn.dev/uttk/articles/b3bcbedbc1fd00#swr-%E3%81%A8%E3%81%AF%E4%BD%95%E3%81%8B%EF%BC%9F)

(ãªããjotaiã«ãasyncãªæå ±ãä¿æããæ¹æ³ã¯ããã¾ãã®ã§ããã¼ã ã§ç¸è«ã®ä¸ã©ã¤ãã©ãªãå°å¥ãã¦ãã ãã)

## ã³ã³ãã¼ãã³ãã®åºãåãã¨Suspense
ä¸è¨ã®ã©ã¤ãã©ãªã¯ãªã¯ã¨ã¹ããé£ã°ãéã«
* data
* fetching(isLoading)
* error

ãªã©ã®ç¶æãè¿å´ãã¦ããã¾ãã  ã¾ããReactã¯ããã¾ã§é¢æ°ãã¼ã¹ã§ãã

ãããã£ã¦ã³ã³ãã¼ãã³ãã®åºããããè¿å´å¤ãåå²ãããã«ã¯ä»¥ä¸ã®ãããªãã¿ã¼ã³ãä½¿ãã¾ãã
```jsx

import useSWR from 'swr'

function Profile() {
  const { data, error } = useSWR('/api/user', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
```
[swrå¬å¼ããå¼ç¨](https://swr.vercel.app/ja#%E6%A6%82%E8%A6%81)

ã¨ã©ã¼ãçãããå¤±æã®è¡¨ç¤ºãããã¼ã¿ããªããã°ã­ã¼ãã£ã³ã°ãè¿ãã¨ããå½¢ã§ãã­ã

åºæ¬ã¯ãã¡ãã®å®è£ã§åé¡ããã¾ããããReact 18ããä¼¼ãæ©è½ã¨ãã¦ `Suspense` ãå°å¥ããã¦ãã¾ããã¾ã `Suspense` ã¯ããã©ã¼ãã³ã¹åä¸ã«ãå¯ä¸ãã¾ãã[åè](https://qiita.com/uhyo/items/bbc22022fe846fd2b763)

å®è£æ¹æ³ã¨ãã¦ã¯
* å¯¾å¿ã©ã¤ãã©ãªãä½¿ç¨ãã
* Suspenseã§å²ã
* fallbackç¨ã®ã³ã³ãã¼ãã³ããæå®ãã

ã¨ããç¨åº¦ã§ãã®ã§è² æã¯å¤§ããããã¾ããã  

```jsx
<Suspense fallback={<div>ãµã¹ãã³ãããããããè¡¨ç¤ºããã</div>}>
  {/* âãµã¹ãã³ãããªãã£ãããããè¡¨ç¤ºããã */}
  <MyComponent />
</Suspense>
```
[Reactã®Suspenseå¯¾å¿éåæå¦çãææ¸ããããã³ãºãªã³ ããå¼ç¨](https://zenn.dev/uhyo/books/react-concurrent-handson/viewer/what-is-suspense)

ãããç»å ´ãã¦éããªãæè¡ã§ãããã¨ãåé¨å®è£ãå°ãç¹ç°ã§ããããå°å¥ã¯ãã¼ã ã§è©±ãåã£ã¦æ±ºå®ãã¾ãããã

<br>
<br>
<br>

[>>ãð§ªãã¹ããã¸é²ã](./test.md)