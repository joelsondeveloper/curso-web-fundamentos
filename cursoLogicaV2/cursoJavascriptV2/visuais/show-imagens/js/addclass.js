document.body.classList.remove("no-js")
const imgAddClass = [...document.querySelectorAll(".card img[data-addclass-on-scroll]")]

window.addEventListener("scroll", verificarScroll)

function isGettingOut(element) {
    const rect = element.getBoundingClientRect()
    return rect.top < window.innerHeight && rect.bottom > 0
}

function verificarScroll() {
    imgAddClass.forEach(img => {
        if (isGettingOut(img)) {
            setTimeout(() => {
                img.classList.add(img.getAttribute("data-addclass-on-scroll"))
            }, img.getAttribute("data-addclass-on-scroll-delay") || 0)
        }
    })
}