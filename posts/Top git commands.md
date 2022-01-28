---
title: "Top git commands"
publishedAt: "2021-04-21"
summary: "Some Git Commands that you will be using frequently."
image: "/images/gitBanner.jpg"
subject: "git"
writtenBy: "Saurabh Kulshrestha"
---

Git & GitHub has steadily risen from being just a preferred skill to a must-have skill for multiple job roles today. In this article, I will talk about the Top Git Commands that you will be using frequently while you are working with Git.
[More commands here](https://education.github.com/git-cheat-sheet-education.pdf)

Following are the Git commands which are being covered:

- git config
- git init
- git clone
- git add
- git commit
- git diff
- git reset
- git status
- git rm
- git log
- git show
- git tag
- git branch
- git checkout
- git merge
- git rebase
- git remote
- git push
- git fetch
- git pull
- git stash

## git config

`git config -global user.name “name"`

`git config -global user.email “email address ”`

This command sets the author name and email address respectively to be used with your commits.

## git init

`git init [repository name]`

This command is used to start a new repository.

## git clone

`git clone [url]`

This command is used to obtain a repository from an existing URL.

## git add

`git add [file]`

This command adds one or more files to the staging area.

`git add .`

This command adds one or more to the staging area.

## git commit

`git commit -m “ Type in the commit message ”`

This command records or snapshots the file permanently in the version history.

`git commit -am “ Type in the commit message ”`

This command commits any files you’ve added with the git add command and also commits any files you’ve changed since then with a message.

`git commit --amend | -m "message" | --no-edit`

This command modifies the latest commit avoiding repetition and making a new one.

## git diff

`git diff`

This command shows the file differences which are not yet staged.

`git diff –staged`

This command shows the differences between the files in the staging area and the latest version present.

`git diff [first branch id] [second branch id]`

This command shows the differences between the two branches mentioned.

## git reset

`git reset [file]`

This command unstages the file, but it preserves the file contents.

`git reset [commit]`

This command undoes all the commits after the specified commit and preserves the changes locally.

`git reset -hard [commit]`

This command discards all history and goes back to the specified commit.

## git status

`git status`

This command lists all the files that have to be committed.

## git rm

`git rm [file]`

This command deletes the file from your working directory and stages the deletion.

## git log

`git log`

This command is used to list the version history for the current branch.

`git log -follow[file]`

This command lists version history for a file, including the renaming of files also.

## git show

`git show [commit]`

This command shows the metadata and content changes of the specified commit.

## git tag

`git tag [commitID]`

This command is used to give tags to the specified commit.

## git branch

`git branch`

This command lists all the local branches in the current repository.

`git branch [branch name]`

This command creates a new branch.

`git branch -d [branch name]`

This command deletes the feature branch.

## git checkout

`git checkout [branch name]`

This command is used to switch from one branch to another.

`git checkout -b [branch name]`

This command creates a new branch and also switches to it.

## git merge

`git merge [branch name]`

This command merges the specified branch’s history into the current branch.

## git remote

`git remote add [variable name] [Remote Server Link]`

This command is used to connect your local repository to the remote server.

## git push

`git push [variable name] master`

This command sends the committed changes of master branch to your remote repository.

`git push -all [variable name]`

This command pushes all branches to your remote repository.

`git push [variable name] [branch name]`

This command sends the branch commits to your remote repository.

## git fetch

`git fetch [remote]`

Fetch all of the branches from the repository. This also downloads all of the required commits and files from the other repository.

`git fetch [remote] [branch]`

Same as the above command, but only fetch the specified branch.

`git fetch --all`

A power move which fetches all registered remotes and their branches:

`git fetch --dry-run`

The --dry-run option will perform a demo run of the command. It will output examples of actions it will take during the fetch but not apply them.

## git pull

`git pull [Repository Link]`

This command fetches and merges changes on the remote server to your working directory.

## git stash

`git stash save`

This command temporarily stores all the modified tracked files.

`git stash pop`

This command restores the most recently stashed files.

`git stash list`

This command lists all stashed changesets.

`git stash drop`

This command discards the most recently stashed changeset.