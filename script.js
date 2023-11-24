const accesskey = 'z6T7x6sCQoqofSxUH49y7JAPgvUYgK072xGpfNbJ2s8'
const inputt = document.getElementById('inputt')
const inputfield = document.getElementById('input')
const searchresult = document.getElementById('search-result')
const display = document.getElementById('display')
const btn = document.getElementById('btn')
const shownorebtn = document.getElementById('search-more')

let keyword = ""
let page= 1

async function promis () {
  keyword = inputfield.value
 
  const url= `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12 `

  const response = await fetch(url)
  const data = await response.json()
  // console.log(data);

  if(page === 1){
    display.innerHTML = " "
  }

 
  const results = data.results
  results.map((result)=>{
    const image = document.createElement('img')
    image.src = result.urls.small
    const imglink = document.createElement('a')
    imglink.href = result.links.html
    imglink.target ="_blank" 
    imglink.appendChild(image)
    display.appendChild(imglink)
  })
  shownorebtn.style.display = "block"

}

inputt.addEventListener('submit', (e)=>{
  e.preventDefault()
  page=1
  promis()
})

shownorebtn.addEventListener("click", ()=>{
  page++;
  console.log(page);
 promis()
})



