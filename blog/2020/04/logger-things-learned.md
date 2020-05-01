---
title: Five Things I Learned From Making NYC Arbor Logger
author: Wilson Jiang
created_at: 2020-04-29
estimated_read_time:
year: 2020
wip: 'true'
---

# Five Things I Learned From Making NYC Arbor Logger
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

## 3) React Hooks is about synchronizing state, not lifecycle

## 4) Caching data is great

## 5) D3 is not a data visualization library