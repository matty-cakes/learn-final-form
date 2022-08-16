# Learn Final Form

## What is it?

What does it sound like (WDISL)?

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
