export function scroll(selector: HTMLElement | null){
	let offset = document.querySelector('header')?.clientHeight ?? 144
	if (selector) {
		window.scrollTo({
			behavior: 'smooth',
			top:
				selector.getBoundingClientRect().top - document.body.getBoundingClientRect().top - offset,
		})
	}
}
