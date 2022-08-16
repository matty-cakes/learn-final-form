# Learn Final Form

![Demo](.meta/demo.png)

## What is it?

This is project whose intent is to make the learning of final form as simple as possible. There are a varity of issues in the way Final Forms docs and instructional materials are laid out, but this project is an attempt to soften some of those sharp edges to make working with library more fun!

## How do I set it up

- Create a project direction
    - `mkdir learn-final-form-broh && cd learn-final-form-broh`
- Initialize it as an NPM project 
    `npm init -y`
- Install some deps (including final form and a bundler)
    - `npm i --save-dev webpack-cli`
    - `npm i --save final-form`
- Create the following
    - An entrypoint file for webpack _src/index.js_ 
    - A _dist_ directory with an _index.html_ which looks for a _main.js_ in the same directory
    - A compile script (`webpack`) in your _package.json_
- Write your code!
