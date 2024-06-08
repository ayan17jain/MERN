// let arr=[2, 10, 21, 32];


// function printPretty(elem){
//     console.log(':', elem);
// }

// function printArray(arr){
// for(let i=0; i<arr.length;i++){
//     printPretty(arr[i]);
// }    
// arr.forEach(printPretty);
// }

// printArray(arr);




// function printPretty(elem){
//          console.log(':', elem);
//     }
// setTimeout(printPretty, 10000)





// console.log('GEC start');

// function printPretty(){
//     console.log('preetyStart');
//     let ans= 2+3;
//     console.log(ans);
//     console.log('prettyEnd');
// }

// setTimeout(printPretty, 10000);
// console.log('GEC end');




// console.log('Start');
// const req= fetch('https://dummyjson.com/products/1')
// const res = req.then(res => res.json())
// res.then((data)=>console.log(data));
// console.log(res)
// console.log('end')





console.log("......APP STARTED.......");

function callAPI(){
    fetch("https://newsapi.org/v2/top-headlines?country=in&apikey=308b38fb77af4af2a09452c19f2894cf")
    .then((res)=>{
        console.log(res)
        return res.json();
    })
    .then((data)=>{
        renderUI(data);
    })
    }


    //Call API
    function renderUI(data){
        const root=document.getElementById("root")

        const articles= data.articles
        for(let i=0; i<articles.length;i++){
            const ar= articles[i];
            const div= document.createElement(div);
            div.setAttributes("class", "news-card");
            const h3 = document.createElement("h3");
            h3.innerText = ar.title;
            const p= document.createElement("p");
            const img= document.createElement("img");
            img.src= ar.urlToImage;
            div.appendChild(h3);
            div.appendChild(img);
            root.appendChild(div);
        }
        // const root = document.getElementById("root");
        // const div = document.createElement("div");
        // div.innerText = 'card';
        // root.appendChild(div);
     }

    
    callAPI();