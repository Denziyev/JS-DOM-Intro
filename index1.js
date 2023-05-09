document.body.innerHTML=`
  <div style="  margin-top:270px; width:100%; align-items:center;">
     <p style="font-size:40px; font-weight:bold; text-align:center;">Hello everyone</p>
    </div>
`;


    setTimeout(()=>{
        document.body.style.backgroundColor="red";
    },0);
    setTimeout(()=>{
        document.body.style.backgroundColor="blue";
    },1000);
    setTimeout(()=>{
        document.body.style.backgroundColor="pink";
    },2000);
    setInterval(()=>{
        setTimeout(()=>{
            document.body.style.backgroundColor="red";
        },0);
        setTimeout(()=>{
            document.body.style.backgroundColor="blue";
        },1000);
        setTimeout(()=>{
            document.body.style.backgroundColor="pink";
        },2000);
    },3000)
    

