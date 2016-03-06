# Change package's name

## Project

- Options of migrate paths:
  - edit original one
  - mkdir new-repo

Atom project manager also needs to be updated for dev environment. `cmd + shift + p` -> Edit Project.

#### NPM
Deprecate old package

```bash
npm deprecate %ProjectName%@"<=put-latest-version-here" "WARNING: This project has been renamed to %NewProjectName%. Install using %ProjectName% instead."
```

#### GitHub
`git remote set-url origin new_url`

#### Change the occurrences in project
Atom: `cmd + shift + f`
- README.md
- package.json
