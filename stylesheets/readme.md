# Portfolio stylesheet Read Me

## Table of Contents

- [File Structure](#file-structure)
- [Naming Convention](#naming-convention)
- [Mixin Overview](#mixin-overview)
  - [Basic Mixins](##basic-mixins) 
  - [Content Mixins](##content-mixins)
- [SCSS Variables](#scss-variables)

## File structure (copy and pasted from initial read me)
```
stylesheets
│
├─ _mixins
│     ├─ _box.scss
│     └─ _text.scss
│
├─ _modules
│     ├─ _buttons.scss
│     └─ _colors.scss
│
├─ _partials
│     ├─ _base.scss
│     ├─ _contact.scss
│     ├─ _intro.scss
│     ├─ _nav.scss
│     └─ _works.scss
│
├─ main.scss
├─ main.css
└─ readme.md
```
## Naming convention

Using [BEM](http://getbem.com/introduction/)

BEM(Block__Element--Modifier) in short is a naming scheme that tries to give your elements clear, defined names.

As an example, here's the hiearchy for the cards used in the Works section with a little extra that **IS NOT** in the main `index.html` file:
```
.card, .card--danger
  ├─ .card__img, .img--blk-border
  ├─ .card__icon-row
  │   └─ .card__icon
  │
  └─ .card__p
```

So we have `.card` which represents our block
  - What makes it a block is that it's a standalone element that doesn't really depend on any other element to give it a purpose
In addition, we have `.card__icon-row` which represents an element
  - An element is a component that cannot exist on its own
We also have `.card--danger` which represents a modifier
  - A modifier is used to change the appearance or behavior of an element
  - So for `.card--danger` we would be changing the color

Note that the above example pulled from `index.html` might actually not be the best use of BEM. Refactoring is definitely going to need to happen


## Mixin overview

This will needs subsections at some point

```scss
  @mixin sameMarginY($val)
  @mixin samePaddingY($val)
  @mixin shadow__
  @mixin stdButton
  @mixin stdParagraph
  @mixin headingText($txtSize, $align)
  @mixin stdContentSection($width)
```
### Basic mixins

`sameMarginY` and `samePaddingY` are mixins that set the Y padding and margin for top and bottom to be the same value
  - see below for implementation
  ```scss
    @mixin sameMarginY($val){
        margin-top:$val;
        margin-bottom:$val;
    }
  ```

`shadow__` can have either *In*, *Low*, *Mid* as modifiers, and the mixin sets the *box-shadow* of an element
  - The difference between the modifiers is how the shadow is cast and therefore how high an element is percieved to be 

### Content Mixins

`stdButton` defines what a standard button should look like and in its current form is a static mixin
  - It's located in `_modules/_button.scss`
  - It includes:
    - width and height 
    - *border*, and *border-radius*
    - text color
    - for now it includes a *background-color*
      - also includes a `button:hover` color
  - will want to include different button colors/ button modifiers at some point

`stdParagrah` defines what a standard paragraph element looks like
  - It's located in `_mixins/_text.scss`
  - It includes:
    - *text-indent*
    - `@mixin centerSides` which sets left and right margin to `auto`
    - `@mixin stdWidth` which sets width to 90% of the parent element
      - *This needs to be phased out*

`headingText($txtSize,$align)` which defines what a heading element will look like
  - It includes the following dynamic properties:
    - `$txtSize`, which controls *font-size*
    - `$align`, which controls *text-align*
  - It includes the following static properties:
    - *font-family*, which is set to the font *Lato*
    - *font-weight*, which is set to *400*, the default value

`stdContentSection($width)` defines what a standard section looks like
  - It's located in`_mixins/_base.scss`
  - Standard section in this case being the intro, works, and contact sections
  - The dynamic property for this mixin is the width which is assigned a vlue via the `$width` variable
  - The static properties are as follows:
    - `@mixin txtStd`
    - `@mixin shadowLow`
    - `@mixin centerSides` which sets left and right margin to `auto`
    - `@mixin sectionSpacing` which includes

## SCSS variables
```scss
  $tablet: "screen and (min-width:767px) and (max-width:1022px)";
  $laptop: "screen and (min-width:1024px)and (max-width:1440px)";
  $desktop: "screen and (min-width:1441px)"; 
```
