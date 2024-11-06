
const projectsLists = document.querySelector(".projects-lists")
const prevBtn = document.getElementById("prev")
const nextBtn = document.querySelector("#next")

prevBtn.addEventListener('click', function () {
    projectsLists.scrollBy({
        left: -500,
        behavior: 'smooth'
    })
})
nextBtn.addEventListener('click', function () {
    projectsLists.scrollBy({
        left: 500,
        behavior: 'smooth'
    })

})
