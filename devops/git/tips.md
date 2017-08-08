## I have pulled the changes from remote, but there're lots of merge conflicts. I want to abort the merge.
http://stackoverflow.com/questions/101752/i-ran-into-a-merge-conflict-how-can-i-abort-the-merge
`git merge --abort` is equivalent to `git reset --merge` when MERGE_HEAD is present.

## I want to merge conflicts
Tools: Atom merge-conflict, source tree

## I have changes locally, and have merged a pull request on remote. I want to apply the remote changes and continue my previous work.
See [stash](https://git-scm.com/book/en/v1/Git-Tools-Stashing).

```sh
git stash
git pull origin master
git stash list
git stash apply
```z
