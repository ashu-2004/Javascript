let btn=document.querySelector("#btn1");
console.log(btn);
let light=1;
let body=document.querySelector("body");
btn.addEventListener("click",()=>{
    if(light==1)
        {
            light=0;
            body.style.backgroundColor="black";
            btn.style.color="blue";
        }else{
            light=1
            btn.style.color="black";
            body.style.backgroundColor="white";;
        }
});