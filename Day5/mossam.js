// console.log("sj")
function fetch(){
    const url='
    https://weather.visualcrossing.com/
    VisualCrossingWebServices/
    rest/services/timeline/delhi?key=';

    fetch(url)
    .then((res)=>res.json())
    
    .then(renderUI);
}
fetchAPI()

function renderUI(data){
    const days = data.days;
    const row= document.createElement("tr")

    const cell1= document.createElement("th")
    cell1.innerText='Data';
    row.appendChild(cell1)

    const cell2= document.createElement("th")
    cell2.innerText='Data';
    row.appendChild(cell2)

    root.append(row);

    const childRow = document.createElement("row");
    const c1= document.createElement("th");
    cell1.innerText= 'Data';
    childRow.appendChild(c1)


    const c2= document.createElement("th");
    cell1.innerText= 'Data';
    childRow.appendChild(c2)
    root.appendChild(childRow);

    



    


}
renderUI();
