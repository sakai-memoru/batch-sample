/**
 * batch-batchflow
 *  @fileoverview batch sample with batchflow.js library
 *  FIXME not available for batch job parallel execution
 */
const flow = require('batchflow');

const sampleJob1 = (resolve) => {
  setTimeout(()=>{
    console.log('sample job1 done');
    resolve('fin1..');
  }, 1000);
}

const sampleJob2 = (resolve) => {
  setTimeout(()=>{
    console.log('sample job2 done');
    resolve('fin2..');
  }, 200);
}

// entry point --------------------
 const processary = [
    sampleJob1,
    sampleJob2
 ];

const main = () =>{
  let results = [];
  flow(processary).sequential()
  .each((i,fn,done)=>{
    fn(()=>results.push(i));
  })
  .end(()=>{
    console.log(results)
    console.log('--- all finished')
  });
}

const mainParallel = () =>{
  flow(processary).parallel()
  .each((i,fn,done)=>{
    fn(console.log)
  })
  .end(()=>{
    console.log('--- all finished')
  });
}

// debug -------------------------
// -------------------------------
if(require.main === module){
  // debug execution
  main();
  //mainParallel();
}
