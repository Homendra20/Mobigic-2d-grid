let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header")
let logoSpan = document.querySelectorAll(".logo")

window.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        logoSpan.forEach((span , index)=>{
            setTimeout(()=>{
span.classList.add("active")
            },(index + 1 )* 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span,index)=>{
                setTimeout(()=>{
                    span.classList.remove("active")
                    span.classList.add("fade")

                },(index+1)*50);
            });
        },2000);

        setTimeout(()=>{
            intro.style.top = "-100vh"
        },2300)
    })
})


let body = document.querySelector("body")
let container = document.createElement("div");
let originalgrid = []

let getGrids = []


// creating two input fields and appending it to body
body.appendChild(container)
container.style = 'width:90%;  height:90vh;  background:#fff ; display:flex; align-items:center ; justify-content:center; flex-direction:column; flex-wrap:wrap';

let inputContainer = document.createElement("div");
container.appendChild(inputContainer);
container.style = ' width:80% ; min-width:500px; margin:auto ; height:200px; display:flex; flex-direction:column; align-items:center ;  ';

let rowInput = document.createElement("input");
rowInput.setAttribute("type", "number")
rowInput.setAttribute("placeholder", "Please Enter Number Of  Rows")
let css = 'width:90%; padding:5px; margin: 10px; text-align:center; outline: none ; border-radius:10px ;font-size:14px ; font-weight:600'
rowInput.style = css
let columnInput = document.createElement("input");
columnInput.style = css
columnInput.setAttribute("type", "number")
columnInput.setAttribute("placeholder", "Please Enter Number Of  Columns")

// creating div to create grid inside
let gridholder = document.createElement("div");
gridholder.style = ' display:grid; align-items:center; margin:20px ';
body.appendChild(gridholder);

let searchholder = document.createElement("div")

searchholder.style = 'display:inline-block; margin:20px 0;'

//creating search field to search letter inside grids
let search = document.createElement("input");
search.setAttribute("type", "text");
search.setAttribute("placeholder", " search result");
search.style = ' border-radius:8px; text-align:center; padding:8px 3px'
searchholder.appendChild(search)

let searchbutton = document.createElement("button");
searchbutton.innerHTML = "Search"
searchbutton.value = search

searchbutton.style = 'padding:5px; margin:0 10px b;'
searchholder.appendChild(searchbutton)


//creating button to show desired 2D grids On Click
let button = document.createElement("button");
button.innerHTML = "Create"
 button.style = 'width:100px; padding:8px 3px ; font-weight:bold; border-radius:10px ; float:right; margin:20px 0 ' 


//Fucntion to highlight words
searchbutton.addEventListener('click', () => {
     searchword(search.value)
  
})
button.addEventListener("click", () => {

    if (gridholder.firstChild !== null) {
        gridholder.firstChild.remove()
    }
    let grids = document.createElement("div")
    grids.style = 'margin:auto; padding:5px ; border:3px solid black;'
    gridholder.appendChild(grids)

    let alphas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let c = rowInput.value;
    let r = columnInput.value

    // 
    for (var i = 0; i < c; i++) {
        originalgrid[i] = [];
        getGrids[i] = [];
        for (var j = 0; j < r; j++) {
            let g = document.createElement("div")
              g.setAttribute("id",i+""+j)
              g.setAttribute("class","cells")
            let char = alphas.charAt(Math.floor(Math.random() * alphas.length));
            g.style = 'border: 1px solid black;  display:inline-block ; width:50px;height:50px; text-align:center;line-height:50px;'
            g.innerHTML = char
            grids.appendChild(g)

            originalgrid[i][j] = char
            getGrids[i][j] = g;
        }
        grids.appendChild(document.createElement("br"))
    }
    //  
})
inputContainer.appendChild(rowInput)
inputContainer.appendChild(columnInput)
inputContainer.appendChild(button)
inputContainer.appendChild(searchholder)

     R = rowInput.value;
    C = columnInput.value;
    let grid = originalgrid;
    console.log(grid);

function searchword(word){
    

//  For horizontal match

let Positions= []

for (let i = 0; i < grid.length; i++) {
 
    let comp = ''
    for (let j = 0; j < (grid.length - word.length+1 ); j++) {
       
        comp = ''
        for (let k = 0; k < word.length; k++) {
          console.log(i,j+k);
          console.log(grid[i][j+k]);
           comp = comp + grid[i][j + k];
            if (comp == word) {
                for (let k = 0; k < word.length; k++) {
                    Positions.push([i, j + k])
                    comp = ''
                }
            }

        }
    }
}


//  For vertical match
for (let i = 0; i < (grid.length - word.length + 1); i++) {
    for (let j = 0; j <grid.length; j++) {
        comp = ''
        for (let k = 0; k < word.length; k++) {
            comp = comp + grid[i + k][j]
            if (comp == word) {
                for (let k = 0; k < word.length; k++) {

                    Positions.push([i + k, j])
                    comp = ''
                }
            }

        }
    }

}

//  For diagonal match
for (let i = 0; i < (grid.length - word.length + 1); i++) {
    comp = ''
    for (let j = 0; j <(grid.length - word.length + 1); j++) {

        comp = ''
        for (let k = 0; k < word.length; k++) {
            comp = comp + grid[i + k][j + k]
            if (comp == word) {
                for (let k = 0; k < word.length; k++) {
                    Positions.push([i + k, j + k])
                    comp = ''

                }
            }

        }
    }
}

for(let i=0;i<Positions.length;i++){
    id=Positions[i][0]+""+Positions[i][1]
    let highlight=document.getElementById(id)
    highlight.style.color='blue'
  
}

}


