/**
 * This sample , I cannot waite async process completed .
 */
const Batch = require('batch');
const batch = new Batch;

batch.concurrency(1);

/* promisified */
const pSampleJob1 = () =>{
  return new Promise((resolve)=>{
    sampleJob1(console.log);
  });
}
const sampleJob1 = (resolve) => {
  setTimeout(()=>{
    console.log('sample job1 done');
    resolve('fin1..');
  }, 1000);
}

/* promisified */
const pSampleJob2 = () =>{
  return new Promise((resolve)=>{
    sampleJob2(console.log);
  });
}
const sampleJob2 = (resolve) => {
  setTimeout(()=>{
    console.log('sample job2 done');
    resolve('fin2..');
  }, 200);
}

// entry point --------------------
const main = () =>{
  batch.push(pSampleJob1());
  batch.push(pSampleJob2());
  batch.on('progress', (e)=>{});
  batch.end();
}

module.exports = main;

// debug -------------------------
// -------------------------------
if(require.main === module){
  // debug execution
  main();

}
