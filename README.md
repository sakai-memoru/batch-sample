# batch-sample

> id 170324-644ea0ab
> trello : batch.js

## Overview
- Batch application sample

## Description

## Installation
```bash
$ npm install
```

## Usage
```bash
$ npm start
```

### gulp
```bash
$ gulp batch-co
$ gulp batch
$ gulp batch-sample
```

## Examination
- [x] FIXME batch-sample:processのfunctionをpromisifyして、処理を実装する。
- [x] FIXME batch-sample:gulpのtaskとして、処理を実装する。
- [ ] FIXME batch-sample:gulpで、一部のtaskをpromise対応で実行する。
- [ ] FIXME batch-sample:mainもpromisifyするべきか

## Wrapping up
### What I understood !
- **Make processes with Promise**
- **Using with co.js , execute sequetially processes.**

## Reference
co  
https://github.com/tj/co

batch.js  
https://github.com/visionmedia/batch

node-batchflow  
https://github.com/jprichardson/node-batchflow

- - - -
Using Node.js async queue to control batch jobs  
http://glynnbird.tumblr.com/post/56234140267/using-nodejs-async-queue-to-control-batch-jobs

gulp-promise
https://github.com/alexsaves/gulp-promise
gulp-sync
https://github.com/kaminaly/gulp-sync

// --- end of file --- //
