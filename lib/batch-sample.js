/**
 * batch-sample.js
 *  using batch.js
 * ---------------------------------------------------
 * functional process implement
 * As result, finally I can do this function with lodash library.
 */
const Batch = require('batch');
const batch = new Batch;

// functional process
const process = (resolve,reject,elm)=>{
  const retStr = elm.name + ':' + elm.address;
  const err = null;
  console.log(retStr);
  resolve(err, retStr);
}

// entry point --------------------------
const main = () => {
  const items = [
    {name : 'suzuki.ichiro',address:'koto-ku'},
    {name : 'suzuki.jiro',address:'sumida-ku'},
    {name : 'suzuki.saburo',address:'katsushika-ku'},
    {name : 'suzuki.shiro',address:'edogawa-ku'}
  ];

  batch.concurrency(1);

  items.forEach((item)=> {
    batch.push((done)=>{
      process(done,{},item);
    });
  });

  batch.on('progress', (evnt)=>{
    // console.log(batlog)
    console.log((evnt.complete / evnt.total * 100) + ' %');
  });

  batch.end((err, result)=>{
    if(err){console.dir(err)}
    console.log(result);
  });
}
// module exports ------------------------
module.exports = main;

// debug -------------------------
// -------------------------------
if(require.main === module){
  // debug execution
  main();

}
