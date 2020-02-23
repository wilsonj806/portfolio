# Portfolio
## Status
[**Live Site**](https://wilsonj806.github.io/portfolio/)

[![Git latest release](https://img.shields.io/github/tag/wilsonj806/portfolio.svg)](https://github.com/wilsonj806/portfolio)
## Overview
This is my personal web development portfolio. It'll showcase projects, any blog articles I happen to write, and some other stuff.

## Roadmap for v3.0.0
### Requirements
Version 3.0.0 is like a year or two overdue and will be done differently to version 2.0.0. The below are the requirements for the new version:
1) It should streamline submission of new projects without the need for a CMS
2) It should be mobile friendly
3) It should be downloadable on a phone(i.e PWA)
4) It should have a form for emailing me

### Fulfilling the Requirements
So most of the above requirements can be fulfilled by using some kind of static site generator. Right now [Gatsby.js](http://gatsbyjs.org/) is the gold standard for React, but I want to use [Gridsome](http://gridsome.org/) for Vue.js as the site isn't going to be complicated, and Vue's syntax is a lot easier and faster to work with.

This handles adding content, and the downloadable portion of the requirements. For mobile friendliness, that's mostly a design requirement, so that's not too difficult.

Contact form might be funky, but since it's 2020, I can run a Firebase function to handle emails and probably email sanitation. Alternatively we can use Netlify to handle it, as we're probably deploying to it anyways.

### Timeline
Timeline looks like this:
```
  Setup Gridsome => Design Layout => Implement Projects => Implement Blog(low priority) => Deploy To Netlify
```

After that anything goes, and shouldn't require massive amounts of maintenance asides from new Gridsome/ Vue releases.