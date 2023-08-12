let menuBtn = document.getElementById("menuBtn")
let sideBar = document.getElementById("sideBar")
let videoContainer = document.getElementById("videoContainer")



menuBtn.addEventListener('click',()=>{
    sideBar.classList.toggle("resize-sidebar")//toggle is to add or remove classes through buttons
    videoContainer.classList.toggle("wider-container")
})

