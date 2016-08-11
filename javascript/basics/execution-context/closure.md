# Closure

Closures are **functions** that refer to **independent (free) variables** (variables that are used locally, but defined in an enclosing scope). In other words, these functions **'remember' the environment in which they were created**.

- a free variable is one that is placed not in the own environment, but probably in some surrounding environments.
  - that a free variable may the same be as bound (i.e. found in some parent environment)
  - or unbound. (ReferenceError)

## Other explanations
> An inner function always has access to the vars and parameters of its outer function, even after the outer function has returned… - Crockford
