// document.body.innerHTML=`
//   <div style="  margin-top:270px; width:100%;">
//      <p style="font-size:40px; font-weight:bold; text-align:center;">Hello everyone</p>
//     </div>
// `;

const newdiv=document.createElement("div");
document.body.append(newdiv);
const newptag=document.createElement("p");
newptag.textContent="Hello everyone";
newdiv.append(newptag);

newdiv.style.marginTop="270px";
newdiv.style.width="100%";
newptag.style.fontSize="40px";
newptag.style.fontWeight="bold";
newptag.style.textAlign="center";



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
    

