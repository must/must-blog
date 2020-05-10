> :Hero src=https://images.unsplash.com/photo-1480506132288-68f7705954bd?w=1993&h=600&fit=crop&q=80, \
> target=desktop

> :Hero src=https://images.unsplash.com/photo-1480506132288-68f7705954bd?w=1200&h=600&fit=crop&q=80, \
> target=mobile

# Eugene's Tech Blog

> :Author src=github

<br>

So this is my personal blog where I talk about tech stuff I encounter. Right now I am working on
[`coding.blog`](https://coding.blog) and [**CODEDOC**](https://codedoc.cc), and trying to push
capabilities of JAMStack blogs to their limits.

I'll write stuff in more detail, but since you are here, lets have a fun code snippet on getting
pokemon info using [**RxJS**](https://learnrxjs.io), 
[**CONNECTIVE HTML**](https://github.com/CONNECT-platform/connective-html) and 
[**RxMetics**](https://loreanvictor.github.io/rxmetics):

```tsx
/** @jsx renderer.create */

import { Renderer, ref } from '@connectv/html';        // @see [CONNECTIVE HTML](https://github.com/CONNECT-platform/connective-html)
import { ajax } from 'rxjs/ajax';                      // @see [RxJS](https://learnrxjs.io)
import { BehaviorSubject, merge } from 'rxjs';         // @see [RxJS](https://learnrxjs.io)
import { switchMap, debounceTime, mapTo, map, share } from 'rxjs/operators';  // @see [RxJS](https://learnrxjs.io)
import { not } from 'rxmetics';                        // @see [RxMetics](https://loreanvictor.github.io/rxmetics)


const POKE_API = 'https://pokeapi.co/api/v2/pokemon/';

/*!*/const name = new BehaviorSubject('charizard');
/*!*/const data = name.pipe(
/*!*/  debounceTime(300),                                                     // --> wait a bit until typing is finished
/*!*/  switchMap(name => ajax.getJSON(POKE_API + name + '/')),                // --> get pokemon info
/*!*/  map(res => JSON.stringify(res, null, 2)),                              // --> make it presentable
/*!*/  share(),                                                               // --> share it so we don't do multiple requests
/*!*/);
/*!*/const loading = merge(name.pipe(mapTo(true)), data.pipe(mapTo(false)));  // --> when typing, loading is true, when data is here, its false

const renderer = new Renderer();
renderer.render(
/*!*/  <fragment>
/*!*/    <input type="text" placeholder="pokemon name" _state={name}/>
/*!*/    <pre hidden={loading}>{data}</pre>
/*!*/    <div hidden={not(loading)}>Loading ...</div>
/*!*/  </fragment>
)
.on(document.body);
```

> :Buttons
> > :Button label=Try It, url=https://stackblitz.com/edit/late-night-pokemon-fun
>
> > :CopyButton

---

_Hero Image by [Anas Alshanti](https://unsplash.com/@otenteko) from [Unsplash](https://unsplash.com)._

> :ToCPrevNext