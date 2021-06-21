## What is specificity?
> Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied.

## Calculating a selector's specificity (inline style, id, class|pseudo-class|attribute, element|pseudo-element)
A selector's specificity is calculated as follows:
- count the number of **ID** selectors in the selector (`= a`)
  - example: `#example`
- count the number of **class** selectors, **attributes selectors**, and **pseudo-classes** in the selector (`= b`)
  - example: `.example`, `[type="radio"]`, `:hover`
- count the number of **type** selectors and **pseudo-elements** in the selector (`= c`)
  - example: `h1`, `::before`
- **ignore** the universal selector (`= 0`), combinators, and `:not`
  - example: `*`, `+`, `>`, `~`, ` `, `||`, `:not`

> *Selectors inside the negation pseudo-class(`:not()`) are counted like any other, but the negation itself (`:not()`) does not count as a pseudo-class.*

```css
*               /* a=0 b=0 c=0 -> specificity =   0 */
LI              /* a=0 b=0 c=1 -> specificity =   1 */
UL LI           /* a=0 b=0 c=2 -> specificity =   2 */
UL OL+LI        /* a=0 b=0 c=3 -> specificity =   3 */
H1 + *[REL=up]  /* a=0 b=1 c=1 -> specificity =  11 */
UL OL LI.red    /* a=0 b=1 c=3 -> specificity =  13 */
LI.red.level    /* a=0 b=2 c=1 -> specificity =  21 */
#x34y           /* a=1 b=0 c=0 -> specificity = 100 */
#s12:not(FOO)   /* a=1 b=0 c=1 -> specificity = 101 */
```

## Read more
- [CSS 3 selectors](https://www.w3.org/TR/css3-selectors/)
- [MDN specificity page](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [Specifics on CSS specificity](https://css-tricks.com/specifics-on-css-specificity/)
- specificity:  Assigning property values, Cascading, and Inheritance https://www.w3.org/TR/CSS2/cascade.html
  - no ID http://csswizardry.com/2011/09/when-using-ids-can-be-a-pain-in-the-class/
- Quiz http://www.w3cplus.com/css/front-end-web-development-quiz.html
