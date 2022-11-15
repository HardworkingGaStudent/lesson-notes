// const featured_list = document.getElementById("featured-list")
// const newLi = document.createElement("li")

// newLi.innerText = "mcnuggets is awesome"

// featured_list.appendChild(newLi)
// console.log(featured_list)

// const search_bar = document.getElementsByClassName("search-bar")
// console.log(search_bar)
// console.log(search_bar[0])

// let h2Element = document.querySelector(".page-heading")
// let h2ElementAll = document.querySelectorAll(".page-heading")
// let h2ElementList = document.getElementsByClassName("page-heading")
// console.log(h2Element)
// console.log(h2ElementList)
// console.log(h2ElementAll)

// let h2Element = document.querySelector("h2")
// console.log(h2Element)
// h2Element.innerText = h2Element.innerText+"!!!"

// h2Element.innerHTML = '<span>some textsss</span>'

// let pElements = document.querySelectorAll(".paragraph")
// console.log(pElements)

let liElements = document.querySelectorAll("#featured-list li")
console.log(liElements)

let firstItemInList = liElements[0]
firstItemInList.style.color='red'
console.log(liElements[0])

firstItemInList.style.fontSize = '35px'

liElements[1].innerText = "jamboree sandwich at the jambo-ree"

let body = document.querySelector("body")
let newImg = document.createElement("img")
newImg.setAttribute('src','./disneyland.jpg')
newImg.setAttribute('id','this-is-an-id')

body.append(newImg)

console.log(newImg)

newImg.remove()

