---
title: 5 Lessons From Arbor Logger
author: Wilson Jiang
created_at: 2020-04-29
estimated_read_time: '4.5 min'
description: A rundown of five lessons I learned from building the NYC Arbor Logger project.
year: 2020
---

# {{ $frontmatter.title}}
I recently finished a simple full stack project and learned a good amount from it! I decided to share a couple of things that I think might help you on your developer journey.

For some background on this project, I wanted to build a full stack project with a Flask backend, all while using open source data to make data visualizations on a React frontend. The scope of this project wasn't super large and since I didn't have to do any data analysis, processing the data is straight forwards.

That said, here are five things I learned in the process of making this project!

## 1) Automating basic tasks is not overkill
This seems kind of obvious, but while writing Cypress tests and using TravisCI to validate my small app's code is overkill, using TravisCI to automate my deploys to Github Pages was definitely not. It saved a lot of repetitive work merging pull requests, then pulling those changes locally so that I can run my deploy script manually. Troubleshooting config issues might not be nearly as fun, but being able to "set it once and forget it" gives me time to work on other things and I'm definitely doing this for my future projects.

And just as a quick illustration, I've added a small graphic overviewing both workflows:
```
Open Pull Request => Validate/ merge changes => Manually pull changes locally => Manually run deploy script => Repeat

Configure CI/ Troubleshoot CI config => Open Pull Request => Validate/ merge Changes => CI handles deploy => Repeat
```

## 2) Cypress and Jest would go great together if I made tests for both
I learned about Cypress as an end To end testing framework(see this [Kent C Dodds post](https://kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests) if you're not sure what that is) a while ago and wanted to check it out for this project. Previously I used a combination of Jest and React Testing Library in my last project in order to weirdly handle unit tests, integration tests, and even end to end tests.

That wasn't my most favorite thing in the world and as you can probably tell. Some of the tests for full app layouts probably belong in a series of end to end tests rather than leaving them in Jest.

In the context of this app, the end to end tests were simple, but were very easy to implement in Cypress. There's not a lot of complicated functionality in the app, but being able to validate about 85% of the app with Cypress is very powerful. If I were to increasescale the complexity of the app, then I'm confident that I'd end up making tests with both Jest and Cypress, where Jest tests can focus on functionality of components, and Cypress tests can focus on functionality of the whole app.

## 3) React.useEffect is about synchronizing state, not lifecycle
Every once and a while you need to relearn or rethink something you thought you were familiar with. The `useEffect()` hook was that for me during this project. I learned React before React Hooks was released, so I learned about class components and the component lifecycle. So, when I learned React Hooks, and the `useEffect()` hook, I think I ended up thinking that `useEffect()` was like `componentDidMount()` and such.

The `useEffect()` hook is not that, and through Dan Abramov's [article](https://overreacted.io/a-complete-guide-to-useeffect/) on `React.useEffect` and Hooks, I had to relearn how that hook worked.

The short version is that `useEffect()` is more about data synchronization rather than lifecycle. So it's not that the hook goes through `componentWillMount`, `componentShouldUpdate`, but it's more that it's checking for changes, and then performing that effect if state and props in the dependency array chance.

This gave me the chance to rework some wonky data flow and synchronization as a result of relearning previous mental models. In the end, I ended up dumping some unnecessary local state and made the component update values at very set times.

## 4) Caching data is great
I also took the time to learn to use Redis in this app. Granted there isn't a lot of caching going on, but being able to cache a dataset of 3000+ entries is pretty nice. If I wanted to go further, I could have converted the React app into an isomorphic app and take advantage of caching the entire generated markup. Scaling it up, if there was user authentication like for my last project, I could have cached the markup for authenticated users and send that to their browsers when requested for even faster interactivity times.

## 5) D3 is not a data visualization library
D3 is not a data visualization library. This is kind of straight-forwards, but D3 doesn't not directly manipulate HTML elements. It does however, bind data to nodes in a tree and then decides what to render to the user based on the data. This is based on a Mike Bostock [article](https://bost.ocks.org/mike/selection/) on how D3 selections work and it's super important because this single principle is what D3 is built around.

It lets D3 be super flexible since you can programmatically adjust your markup as your data changes, but it comes at the cost of complexity. Understanding how D3 selects and binds data is super important and makes D3 much more powerful as a library as you can pretty much build any HTML you want with your data.