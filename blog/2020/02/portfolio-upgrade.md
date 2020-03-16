---
title: How I Upgraded My Portfolio
author: Wilson Jiang
created_at: 2020-02-24 17:47:10
year: 2020
---
# How I Upgraded My Portfolio
Hey, so if you're reading this, that means my new portfolio is up in some way shape or form. It's light on content for now, but this is wildly preferable to what I had before. This article is a short run down on the upgrade process.

## What Was v2.0.0?
Before we can get into the nitty gritty of how I upgraded my portfolio, I feel it's important to go over the old portfolio. The old portfolio was a static site built with plain HTML and Sass hosted on Github Pages. I made it mobile first, and I tried to make the project highlights as easy and quick of a browsing experience as possible.

Design-wise, I had a full research, mockup, iterate process and the end result, while simple, was pretty good.

Since it was entirely static assets, it was quite a lot of work to update the portfolio with new content or pages so that fell off very quickly.

## v3.0 Requirements
v2.0 was pretty nice at the time, but it's been quite literally 2 years since I made it so some upgrades were necessary. At the moment, I'm very comfortable with React, and I've started to get into using Vue, so I wanted to use one of the two to build my portfolio. In addition, I wanted to be able to easily add new content into the site without having to manually generate new pages.

Deciding between Vue and React was actually pretty easy. I knew my app was going to be very simple, and require very little state to hang around. That kind of disqualifies React as writing JSX feels more involved than writing with Vue's templating syntax.

> As an aside, the choice between the two isn't actually that important. Both frameworks would have done the job fine, and choosing one framework means you're also taking on the downsides of that framework.

> In this situation, it means amongst other things, having a smaller community to find help in, more rigid rendering rules, and the framework having a potentially shaky future since it was developed outside of a company.

>Basically, don't get hung on what framework is better, use the tool that's right for the job, and don't get  dogmatic about someone's tool choices.

As for how I handled content, there are a multitiude of options(CMS, Headless CMS, etc), but the one I wanted to check out was static site generation. Static site generation(or generators) lets you use React or Vue to build your pages and components, while also letting you build pages from your static content and data. In the end the static site generator builds all of the required pages from the data and from the templates you made. Very slick!

Vue's static site generation framework is [Gridsome](https://gridsome.org/). It uses GraphQL to query your data, and while it's super young, it's still solid. It also features a growing plugin library that can handle a variety of things from finding and including files into GraphQL, to transforming Markdown into your Vue pages.

## Designing The Layout
Next up was designing a layout that would present everything I wanted in a user-friendly way. The current layout wasn't bad, but I felt that it had a bit too much going on in comparison to what I wanted. So went and did some research on web dev portfolios again with an emphasis on simplistic layouts and designs.

I ended up with the below list of portfolios:
- [Tim O'Mahony](https://timmyomahony.com/)
- [Ben Bate](https://benbate.com/)
- [Tania Rascia](https://www.taniarascia.com/)

The above portfolios, while simplistic, were all stylistically unique. Imitating that would be difficult since I don't have nearly as much content to put on there, but is still worth doing. I ended up doing a layout that was a wombo combo of the three in some way, which you can find on my [portfolio](https://wilsonjiang.netlify.com/).

Just like the v2.0 portfolio, it features cards for projects, and a short blurb, but the big difference is there's a dedicated About page and Projects page. In addition, some pages you can't actively navigate to right now as there isn't enough content to justify it.

## Coding
The actual coding part of this was pretty wicked fast once I felt comfortable with what I planned to do. In comparison to my first portfolio, which took a month, this took about 12 days. There was some configuration stuff I had to mess with and several layout changes along the way, but other than that the development process was pretty fluid.

Writing Vue templates felt faster than writing a React component in a lot of ways, and conditional rendering feels way nicer. In addition, the simple layout meant very simple styling, so most of the styling didn't grow long enough to be extracted. Not to mention, that there was very little JavaScript that needed to be written, which meant less reasoning about what's changing and what needs to render and etc.

I did hit a small roadbump in querying for my data via GraphQL, but the bundled GraphQL GUI is super handy for testing and there's very minimal special Gridsome syntax to make sure we can query our data. Getting past that was not a huge issue and the GUI basically made everything possible.

## What's Next
The portfolio's "done", but there's some extra tasks to do. First and foremost, I need to add more content; projects-wise, 3 is probably fine to start, but only having one blog article is not great. I also need to add in the Blogs page and the Contact page, with the contact page being a bit lower priority(unless I go freelancing).

Other than that, there's rolling tasks like the below:
- fix wonky responsiveness
- update sections with better designs as I get better at design
- update the code to keep up with future releases(Vue, Gridsome, etc)
- add extra pages for other hobbies and the like
- pagination!

Obviously the list isn't comprehensive, and there's definitely going to be more that will be done as time goes on.