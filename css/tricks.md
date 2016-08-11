## Tips and tricks
- http://tympanus.net/codrops/2012/10/25/kick-start-your-project-a-collection-of-handy-css-snippets/
- http://tympanus.net/codrops/2012/11/20/learning-principles-for-improving-your-css/

## Tricky part of CSS
http://tympanus.net/codrops/2012/11/20/learning-principles-for-improving-your-css/
- The "I forgot to position the parent" trick
- The "stacking context" trick
  -  you can’t apply z-index to a child of an element (or a pseudo-element) which has already a stacking context (triggered by either z-index or opacity or a transform)
- The "I forgot to clear the floats" trick  
  - Your layout is going crazy. Blocks are flying everywhere. You’re crying because you don’t understand what you did wrong. Then check your floats! In most cases, you just forgot to clear them.
  - if a parent only contains floated elements, it will collapse on itself unless you clear the floats, or set its height / overflow.
