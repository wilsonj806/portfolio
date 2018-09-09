# Portfolio Version 2.0.0 Patch Notes

## Things to check:
 
  - Is the Sass as DRY as possible with what I know right now?
  - Is BEM being used properly?
  - Is all the content properly displayed on mobile, tablets, laptops, and desktops?
  - Is the typography okay?
  - Are the colors okay/ won't clash/ are visible?
  - Can I add onto the site in like 3 months without tearing my hair out?
  - Are the box-shadows visually consistent?
  - Are psuedo-states handled properly?

## Visual Differences:
  
  - New layout
  - Significantly less text/ content
    - but also takes significantly less time to go through all the content
  - More mobile friendly layout
  - Less colors
  - Has a proper contact form
    - the backend is handled by an external API though
  - Less white-space

## Differences in the mark up:

  - Sass is used for CSS preprocessing
    - hypothetically makes for DRY-er CSS  
  - BEM naming standard for the vast majority of CSS classes
    - CSS doesn't have as many unnecessary selector rules/ specificity as a result
  - No frameworks (e.g Bootstrap) are used
  - Uses tons of CSS Flexbox
  - The vast majority of sizing is done with relative units (*rem, vh, vw, %, etc*)
  - The vast majority of elements aren't statically sized (i.e no defined width and heights)
  - Final CSS size is 1kb bigger than the current one
  - Fonts are imported into the CSS instead

## Content to be added in a future patch:

  - Add a logo
  - Add a process breakdown page for select projects
  - Add tabs to the Works section for secondary content
  - Create a workflow.html page that outlines my general development process
  - Update the Works section with JavaScript projects as they are made
  
