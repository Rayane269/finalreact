import { $ } from "./dom"

export function navigationLinksShowed(navigationLinks: HTMLElement): boolean
{
	const parent = navigationLinks.parentElement
	if (parent === null) {
		return false
	}

	return parent.classList.contains('navigationLinks-showed')
}

// export function showNavigationLinks(navigationLinks: HTMLElement): void
// {
// 	const parent = navigationLinks.parentElement
// 	if (parent === null) return

// 	const ulList = $('#navigation-ul-list', parent)?.children
// 	if (ulList !== undefined) {
// 		for (let index = 0; index < ulList.length; index++) {
// 			const li = ulList[index] as HTMLLIElement;
// 			li.style.animation = `apparition 0.8s 0.${index + 1}s cubic-bezier(0, 0, 0.11, 0.99) forwards`
// 		}
// 	}
	
// 	parent?.classList.add('navigationLinks-showed')
// 	document.addEventListener('click', e => actionWhenShowNavigationLinks(e, navigationLinks))
// }

export function actionWhenShowNavigationLinks(e: MouseEvent, navigationLinks: Element|null, onHideNavigation: CallableFunction)
{
	const target = e.target as HTMLElement
	if (navigationLinks === null) return
	const targetIsNavigationLinks = target === navigationLinks
	const targetIsChildOfNavigationLinks = navigationLinks?.contains(target)
	
	if (targetIsNavigationLinks || targetIsChildOfNavigationLinks) {
		return
	}
	console.log(target, targetIsChildOfNavigationLinks, targetIsNavigationLinks, 'action lors du clique')

	onHideNavigation()
}

// export function hideNavigationLinks(e: MouseEvent, navigationLinks: HTMLElement): void
// {
// 	e.preventDefault()
// 	const parent = navigationLinks.parentElement
// 	if (parent === null) return

// 	const ulList = $('#navigation-ul-list', parent)?.children
// 	if (ulList !== undefined) {
// 		for (let index = 0; index < ulList.length; index++) {
// 			const li = ulList[index] as HTMLLIElement;
// 			li.style.animation = 'none'
// 		}
// 	}
// 	parent?.classList.remove('navigationLinks-showed')
// 	document.removeEventListener('click', e => actionWhenShownavigationLinks(e, navigationLinks))
// }