#!/bin/bash

# (will prompt for password)
curl -u 'hchiam' https://api.github.com/user/repos -d '{"name":"learning-react-2dnote", "description":"Practice React by incorporating my _2DNote project"}'
git remote add origin 'git@github.com:hchiam/learning-react-2dnote.git'
git add .
git commit -m "Set up repo"
git remote set-url origin https://github.com/hchiam/learning-react-2dnote.git
git push --set-upstream origin master
echo; echo -------; echo;
git status
