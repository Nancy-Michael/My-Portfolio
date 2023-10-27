const textEl = document.getElementById('auto-text');
const navBar = document.querySelector('.navbar');
const navbarOffsetTop = navBar.offsetTop
const sections = document.querySelectorAll('section')
const navbarLinks = document.querySelectorAll('.navbar-link')
const progress = document.querySelector('.progress-bars-wrapper')
const progressBarPercents = [98, 95, 55, 88, 89];
const text = 'Coding Is My Passion!'

let idx = 1


writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++
    if (idx > text.length) {
        idx = 1
    }
    setTimeout(writeText, 200)
}

window.addEventListener('scroll', () => {
    mainFn();
})

function mainFn() {
    if (window.pageYOffset >= navbarOffsetTop) {
        navBar.classList.add('stickey')
    } else {
        navBar.classList.remove('stickey')
    }

    sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 10) {
            navbarLinks.forEach(navbarLink => {
                navbarLink.classList.remove('change')
            })
            navbarLinks[i].classList.add('change')
        }
    })

    if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
        document.querySelectorAll('.progress-percent').forEach((el, i) => {
            el.style.width = `${progressBarPercents[i]}%`
        })
    }
}

mainFn();

window.addEventListener('resize', () => {
    window.location.reload();
})
