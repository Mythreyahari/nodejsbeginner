


// settimeout
// setinterval
// cleartimeout
// clearinterval
// setimmediate

function runSetTimeoutExample():void{
     console.log("1.setTimeout example started");
     setTimeout(()=>{
         console.log("2.This run after the 2 second");
         
     },2000)

     console.log("3.This runs immediately node doesn't wait");
     
 };

 function runClearTimeoutExample():void{
      const timeId = setTimeout(()=>{
          console.log("This thing won't run its will be cancelled");
          
      },1000);
      clearTimeout(timeId);
      console.log("4. 1 second timer was cancelled");
      
 };
// setInterval is going to run the callback again and again after the fixed delay
function runSetIntervalExample():void{
         let count = 0;
       const intervalId = setInterval(()=>{
             count++;
             console.log(`5.setInterval tick:${count}`);
             
             if(count===3){
                clearInterval(intervalId);
                console.log("6.Interval stopped");
         } 
    },1000)
};
 
function runSetImmediateExample():void{
     setImmediate(()=>{
        console.log("7.setImeediate executed");
        
     });
     console.log("8.executes the synchronuous operation");
     
}
//  runSetTimeoutExample();
//  runClearTimeoutExample();
// runSetIntervalExample();
runSetImmediateExample();


