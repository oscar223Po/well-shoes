import { useLayoutEffect } from "react"

export const useLockBodyScroll = (locked: boolean) => {
	useLayoutEffect(() => {
		const body = document.body

		const scrollY = window.scrollY

		if (locked) {
			body.style.position = "fixed"
			body.style.top = `-${scrollY}px`
			body.style.left = "0"
			body.style.right = "0"
			body.style.overflow = "hidden"
			body.style.width = "100%"
		} else {
			body.style.position = ""
			body.style.top = ""
			body.style.left = ""
			body.style.right = ""
			body.style.overflow = ""
			body.style.width = ""

			window.scrollTo(0, scrollY)
		}

		return () => {
			body.style.position = ""
			body.style.top = ""
			body.style.left = ""
			body.style.right = ""
			body.style.overflow = ""
			body.style.width = ""
		}
	}, [locked])
}
