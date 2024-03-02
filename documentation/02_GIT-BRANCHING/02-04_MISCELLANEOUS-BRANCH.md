# Git Operations : `miscellaneous` Branch

The purpose of this file is to document the workflow of the Git operations for the `miscellaneous` Branch of this project.

## 🔥 Pre-Requisites

Make Sure you have completed the workflow of the file `01_INITIAL-SETUP.md` inside `documentation` Directory.

## Creating a new branch `miscellaneous`

```sh
git branch miscellaneous
```

## Pushing The New Branch To Remote Git

```sh
git push origin miscellaneous
```

## Checking Out To The New Created Branch

```sh
git checkout miscellaneous
```

## Pushing the code to Remote Branch `miscellaneous` (For the 1st Time)

```sh
git push
git push --set-upstream origin miscellaneous
```

## Checking Git Status

```sh
git status
```

## Adding File(s) To Git Repository

```sh
git add file-name
```

## Commit With A Tag & A Message

Reference : [Git Commit Message Template](../../GIT-COMMIT-TEMPLATE.md)

```sh
git commit -m "miscellaneous : Message"
```

## Pushing the code to Remote Branch `miscellaneous` (For the 1st Time)

```sh
git push
git push --set-upstream origin miscellaneous
```

## Checking out to `dev` branch

```sh
git checkout dev
```

## <ins>Merging `miscellaneous` branch with `dev` branch</ins>

- Note: `-no-ff` tells Git to retain all commit messages prior to the merge.
- This will make tracking changes easier in the future.

```sh
git merge miscellaneous --no-ff
```

## Commit with a Tag & Message of why the merge is necessary

```sh
miscellaneous : Message
```

- Enter `i`
- After finishing, press `esc` and type `:wq` to save and exit

## Pushing Local Contents To Git Remote

```sh
git push
```

## Making all branches aligned with `dev` branch

```sh
git checkout dev
git pull
git checkout commited-branch-name
git merge dev
git push
```

> The branches which are not aligned with the `dev` branch is not required to be up to date with `dev` branch unless required.

```sh
git checkout not-aligned-branch
git merge dev
git push
```

### For the 1st Time Only
<b>If the branch has no previous pushes</b>

```sh
git push --set-upstream origin not-aligned-branch
```

> The above processes will be repeated for creating any branches, commiting messages and pushing it to Remote Github Repository. Just change the branch name of `not-aligned-branch` and you are good to go 🚀 ... .. .