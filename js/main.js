const nav = document.querySelector('.navbar-collapse');
const allNavItems = document.querySelectorAll('.nav-link')
const footerYear = document.querySelector('.footer_year')

const handleNav = () => {
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('show')
		})
	})

}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
nav.addEventListener('click', handleNav)