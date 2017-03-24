const co = require('co');

/* promisified */
const pSampleJob1 = (resolve) =>{
  return new Promise((resolve)=>{
    sampleJob1(resolve);
  });
}
const sampleJob1 = (resolve) => {
  setTimeout(()=>{
    console.log('sample job1 done');
    resolve('fin1..');
  }, 1000);
}

/* promisified */
const pSampleJob2 = (resolve) =>{
  return new Promise((resolve)=>{
    sampleJob2(resolve);
  });
}
const sampleJob2 = (resolve) => {
  setTimeout(()=>{
    console.log('sample job2 done');
    resolve('fin2..');
  }, 200);
}

// entry point ------------------
const main = () =>{
  co(function *(){
    yield pSampleJob1(console.log);
    yield pSampleJob2(console.log);
    yield pSampleJob1(console.log);
    yield pSampleJob2(console.log);
  });
}
// module export ----------------
module.exports = main;

// debug -------------------------
// -------------------------------
if(require.main === module){
  // debug execution
  main();

}
