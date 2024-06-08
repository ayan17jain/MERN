// const div=document.querySelector('div');

// console.log(div);

// div.innerHTML="<p>helo</p>";


// remove of paragraph fron div from any particular location
const res= document.querySelector('div');
const c=document.querySelector('p:nth-of-type(2');
res.removeChild(c); 

// element.remove delete a full element form the HTML document


// function getInfo(){
//    console.log("Btn Clicked");
//    const el=document.createElement("div")
//    const d= document.querySelector("div")
//     el.innerText= "my name is Ayan Jain"
//     d.prepend(el)
// }

function getInfo(e){
   console.log(e);
   e.target.style.backgroundColor='green';
   e.target.style.color='red';
 }