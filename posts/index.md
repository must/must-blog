> :Hero src=https://images.unsplash.com/photo-1480506132288-68f7705954bd?w=1993&h=600&fit=crop&q=80, \
> target=desktop, mode=dark, leak=188px

> :Hero src=https://images.unsplash.com/photo-1480506132288-68f7705954bd?w=1200&h=600&fit=crop&q=80, \
> target=mobile, mode=dark, leak=96px

> :Hero src=https://images.unsplash.com/photo-1544133065-4c9fe678b4dd?w=1993&h=600&fit=crop&q=80, \
> target=desktop, mode=light, leak=188px

> :Hero src=https://images.unsplash.com/photo-1544133065-4c9fe678b4dd?w=1200&h=600&fit=crop&q=80, \
> target=mobile, mode=light, leak=96px

> :PageHead color=white
>
> Eugene's Coding Blog

> :Author src=github

<br>

So this is my personal blog where I talk about tech stuff I encounter. Right now I am working on
[`coding.blog`](https://coding.blog) and [**CODEDOC**](https://codedoc.cc), and trying to push
capabilities of JAMStack blogs to their limits.

<br><br><br>

## Yet Another Frontend Framework

So a while back, I was working on [CONNECT-platform](https://connect-platform.com). The web-based
editor for connect platform is built using Angular, and I had a lot of headache optimizing it
to a marginally acceptable level of performance. The issue was Angular's change detection,
as it got pretty confused due to the rather complicated flow of data in the editor.

I ended up doing more work for pushing Angular out of my way, along with the fact that explicitly
controlling the change propagation flow simply meant a lot of the benefits of Angular were already
gone. As a result, I decided to create _Yet Another Frontend Framework_, built around explicit
description of flow of change.

> :Buttons
> > :Button label=Read The Story, url=/yaff/part1

<br><br><br>

## For the Fun of It

Just for the fun of it, have this snippet of a simply frontend that gets pokemon information
from their name, using [**CONNECTIVE HTML**](https://github.com/CONNECT-platform/connective-html)
and [**RxJS**](https://learnrxjs.io):

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

<br><br>

> :DarkLight
> > :InDark
> >
> > _Hero Image by [Anas Alshanti](https://unsplash.com/@otenteko) from [Unsplash](https://unsplash.com)._
>
> > :InLight
> >
> > _Hero Image by [Monika Pot](https://unsplash.com/@ramoni) from [Unsplash](https://unsplash.com)._

