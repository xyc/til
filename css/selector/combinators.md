## [Combinators](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors#Combinators)

Combinators can select elements with specific **former siblings** or children with specific **parent/ancestor** (the [reverse](http://stackoverflow.com/questions/4220327/css-selector-element-with-a-given-child) is not possible)

## General sibling selectors
The '~' combinator selects nodes that follow (not necessarily immediately) the former specified element, if both elements shared the same parent.
Syntax: A ~ B
Example: p ~ span will match all <span> elements that follow a <p> element inside the same element.

```css
.eldersibling ~ .me
```

## Adjacent sibling selectors
The '+' combinator selects nodes that immediately follow the former specified element.
Syntax: A + B
Example: ul + li will match any <li> that immediately follows a <ul>.

```css
.prevsibling + .me
```

## Child selectors
The `>` combinator selects nodes that are direct children of the former specified element.
Syntax: A > B
Example: ul > li will match all <li> elements that are inside a <ul> element.

```css
.parent > .immediate-children
```

## Descendant selectors
The ' ' combinator selects nodes that are children (not necessary direct children) of the former specified element.
Syntax: A B
Example: div span will match any <span> element that is inside a <div> element.

```css
.ancestor .descendent

/* <div class="class1 class2"></div> */
.class1.class2 {

}
```
