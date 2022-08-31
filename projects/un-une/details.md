---
title: "Un or Une ?"
index: 3
description: "A React+Firebase application which tells you whether a French noun is feminine (une) or masculine (un). Signed-in users can also save searched words."
tags: ["react", "firebase", "REST api", "tailwind-css"]
thumbnail: "/projects/thinking.svg"
thumbnailAlt: "A thumbnail displaying a thinking emoji"
screenshot: "/projects/unune.png"
website: "https://un-une.vercel.app/"
github: "https://github.com/mdtarhini/un-une"
---

## Motivation

Feminine or masculine? That is the question you often ask yourself as a French learner. There are some rules, but there are always exceptions, and if you are like me, you will always end up guessing the opposite. If you are in a similar situation, this app can be useful for you 😀
The idea came to my mind while implementing the dictionary app in my mac-os clone project, and I thought I could do it in a simple application with one task.

## Mainly used technologies

- At this stage I was quite familiar with **React functional components and hooks**. As it is a small app, I didn’t see the need to incorporate a global state manager such as redux.
- I took this project as an opportunity to learn and practice using **Tailwind-CSS**.
- The api calls in the application are handled by **axios**.
- Later in the project, I added **Firebase** so that authenticated users can save searched words to their favorites.

## What can be improved/added ?

- Currently, the application returns results for correctly spelled words only. You could easily imagine that someone who doesn’t know the gender of a noun won’t also know how to spell it correctly 😜. Thus, **word suggestions** when you type can be very helpful. Unfortunately, I did not find a free dictionary api that can be suitable for this task.
- If one day I decided to learn mobile applications development (why not), porting this project into a mobile app can be a good starting point.

## Credits

[@meetDeveloper](https://github.com/meetDeveloper) does a superb job with their [api](https://github.com/meetDeveloper/googleDictionaryAPI) which I used to get word fefinitions.
