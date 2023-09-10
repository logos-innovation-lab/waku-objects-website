export function scroll(selector: HTMLElement | null, navbar: boolean = false) {
	let offset = navbar ? document.querySelector('header')?.clientHeight ?? 144 : 0
	if (selector) {
		window.scrollTo({
			behavior: 'smooth',
			top:
				selector.getBoundingClientRect().top - document.body.getBoundingClientRect().top - offset,
		})
	}
}
