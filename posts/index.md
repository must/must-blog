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
> Must's Coding Blog

> :Author src=github

<br>

So this is my personal blog where I talk about tech stuff I encounter. Right now I am working on
[`coding.blog`](https://coding.blog) and [**CONNECT platform**](https://connect-platform.com).

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

> :DarkLight
> > :InDark
> >
> > _Hero Image by [Anas Alshanti](https://unsplash.com/@otenteko) from [Unsplash](https://unsplash.com)._
>
> > :InLight
> >
> > _Hero Image by [Monika Pot](https://unsplash.com/@ramoni) from [Unsplash](https://unsplash.com)._

