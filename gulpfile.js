const gulp = require('gulp-async-tasks')(require('gulp'));

// custom modules
const batch = require('./lib/batch');
const batchco = require('./lib/batch-co');
const batchsample = require('./lib/batch-sample');

// task definition
gulp.task('canary',()=>{
  console.log('Hello gulp!');
});

gulp.task('batch',()=>{
  batch();
});

gulp.task('batch-co',()=>{
  batchco();
});

gulp.task('batch-sample',()=>{
  batchsample();
});

gulp.task('default',['canary']);


gulp.task('parallel',['canary','batch','batch-co','batch-sample']);

gulp.task('seq1',['batch:async']);
gulp.task('seq2',['seq1','batch-co:async'])
gulp.task('sequencial',['seq2','batch-sample:async'])
