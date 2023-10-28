import { SignIn, SignUp } from "@/Components/AuthAndRegisterButton";
import { MainProvider } from "@/Components/Provider";
import { MainContext } from "@/Functions/context";
import {
	defaultSidebarWidth, scaleContentWhenSidebarShowed, showedSidebarWidth
} from "@/Functions/demensions";
import { useResizeObserver } from "@/Hooks/useObserver";
import { Link } from "@inertiajs/react";
import React, {
	PropsWithChildren,
	Ref,
	forwardRef,
	useContext,
	useEffect,
	useRef,
} from "react";
import {motion, AnimatePresence, usePresence} from 'framer-motion'
import { Hamburger } from "@/Components/Hamburger";

type HeaderNavLinkType = {
  label: string,
  path: string,
  description: string
}

export const UnloggedLayout = ({children}: PropsWithChildren) =>
{
	return (
		<MainProvider>
			<ContentWrapper content={children} />
		</MainProvider>
	)
}

const ContentWrapper = function({content}: {content: React.ReactNode}) {
	const {observe: observerResize, disconnect: disconnectResize } = useResizeObserver()

	const navigationLinksRef = useRef<HTMLDivElement|null>(null)
	const navigationLinkContentRef = useRef<HTMLDivElement|null>(null)
	const { navigationLinksShowed } = useContext(MainContext)
	
	useEffect(() => {
		const linkContent = navigationLinkContentRef.current as HTMLElement
		const navigationLinks = navigationLinksRef.current as HTMLElement

		if (navigationLinksShowed) {
			if (screenSizeIsLarge()) {
				updateStyleElement(linkContent, {transform: `scale(${scaleContentWhenSidebarShowed})`})
			}
		}

		else {
			updateStyleElement(linkContent, {transform: 'scale(1)'})
		}
		
		/**
		 * Si l'ecran est plus large, on a un sidebar. les liens de navigation se positionne verticalement
		 * à côté de la page.  Sinon, on a un navbar et les liens seront en haut de la page de manière horizontale.
		 */
		const observeResizeWindows = (entrie: ResizeObserverEntry) => {
			const bodyWidth = entrie.borderBoxSize[0].inlineSize
			if (screenSizeIsLarge(bodyWidth)) {
				setSidebar()
			}

			else {
				setNavbar()
			}
		}

		const setSidebar = () => {
			// A chaque fois que le sidebar est visible, ce fonction est appéller et ça me dérange vraiment
			// puisqu'il remet la largeur à la valeur initila. donc pour rectifier le truc, 
			// je check si le sidebar est afficher, si c'est le cas je quitte cette fonction.
			if (navigationLinksShowed) return

			//reset les styles utilisé lorsque on avait un navbar
			updateStyleElement(navigationLinks, {width: defaultSidebarWidth})
			updateStyleElement(linkContent, {marginTop: '0'})
			
			// mettre à jour les styles requisent pour le sidebar
			updateStyleElement(
				linkContent, 
				{marginLeft: `${navigationLinksShowed 
					? navigationLinks.lastElementChild?.clientWidth
					: navigationLinks.firstElementChild?.clientWidth
				}px`
			})
			updateStyleElement(navigationLinks, {height: '100vh'})
		}

		const setNavbar = () => {
			navigationLinks.style.height = defaultSidebarWidth
			linkContent.style.marginLeft = '0'

			linkContent.style.marginTop = `${navigationLinks.clientHeight}px`
			navigationLinks.style.width = '100vw'
		}

		observerResize(document.body, observeResizeWindows)

		return () => {
			disconnectResize()
		}

	}, [navigationLinksShowed])

	return (
		<>
			<NavigationLinks ref={navigationLinksRef} />
			<NavigationLinkContent ref={navigationLinkContentRef}>
				{content}
			</NavigationLinkContent>
		</>
	)
}

const NavigationLinks = forwardRef(function ({}, ref: Ref<HTMLHeadElement>)
{
	const {navigationLinksShowed} = useContext(MainContext)
	const leftDimension = screenSizeIsLarge() ? defaultSidebarWidth : 0
	const navigationVariants = {
		visible: { left: leftDimension, transition: { left: { duration: .75 } } },
		hidden: { left: '-50vw', transition: { left: { duration: 0.75 } } }
	};

	return (
		<header 
			ref={ref} 
			className={`fixed z-10 left-0 top-0 text-${navigationLinksShowed ? 'white' : 'black'}`}
		>
			<ButtonBurger />
			<AnimatePresence>
				{navigationLinksShowed && 
					<MotionHeaderNavigations 
						variants={navigationVariants}
						animate={navigationLinksShowed ? 'visible' : 'hidden'}
						initial="hidden"
						exit="hidden"
					/>
				}
			</AnimatePresence>
		</header>
	)
})

const ButtonBurger = function() {
	const {navigationLinksShowed, showNavigationLinks} = useContext(MainContext)
	const wrapperButtonRef = useRef<HTMLDivElement|null>(null)

	const handleClick = (e: React.MouseEvent) => {
		if (!navigationLinksShowed) {
			showSidebar(e)
		}

		else {
			hideSidebar(e.nativeEvent)
		}
	}

	const showSidebar = (e: React.MouseEvent) => {
		if (showNavigationLinks === undefined) return
	
		showNavigationLinks(() => true)
		document.addEventListener('click', actionWhenShowNavigationLinks, true)
	}

	const hideSidebar = (e: MouseEvent) => {
		e.stopPropagation()
		const sidebarIsShowed = wrapperButtonRef.current?.classList.contains('is_active')
		if (!sidebarIsShowed || showNavigationLinks === undefined) return
		console.log(sidebarIsShowed, "hide sidebar")
		showNavigationLinks(() => false)
	}

	const actionWhenShowNavigationLinks = function(e: MouseEvent)
	{
		const navigationLinks = wrapperButtonRef.current?.nextElementSibling
		
		const target = e.target as HTMLElement
		const targetIsNavigationLinks = target === navigationLinks
		const targetIsChildOfNavigationLinks = navigationLinks?.contains(target)
		
		if (navigationLinks === null) return
		
		if (targetIsNavigationLinks || targetIsChildOfNavigationLinks) {
			return
		}

		document.removeEventListener('click', actionWhenShowNavigationLinks, true)
		hideSidebar(e)
	}

	return (
		<motion.div 
			style={{width: defaultSidebarWidth}} 
			onClick={handleClick} 
			className={`sidebar-btn cursor-pointer ${navigationLinksShowed ? 'is_active' : ''}`}
			ref={wrapperButtonRef}
		>
			<div className="text-logo">Lets go ... Nous allons gagner</div>
			<Hamburger clicked={navigationLinksShowed} />
		</motion.div>
	)
}

const HeaderNavigations = forwardRef<HTMLLIElement>(function({}, ref)
{
  const headerNavLinks: Array<HeaderNavLinkType> = 
	[
    {label: 'Industries', path: '#', description: "Les types d'entreprises avec les quelles nous travaillons"},
    {label: 'Services', path: '#', description: "Voir ce que nous faisons"},
    {label: 'Work', path: '#', description: "Jetez un oeil à ce que nous avons fait"},
    {label: 'About us', path: '/about', description: "Découvrez ce qui nous rend spécial"},
    {label: 'Contact us', path: '#', description: "N'hésitez pas à nous laisser un message"},
  ]

	const { mode } = useContext(MainContext)
	const currentMode = mode === 'light' ? 'dark' : 'light'
	const backGround = currentMode === 'dark' ? 'black' : 'white'
	const width = screenSizeIsLarge() ? `calc(${showedSidebarWidth} - (${defaultSidebarWidth}) - 20px)` : '90vw'

	const ulListVariant = {
    hidden: {opacity: 0, x: -60},
		show: {
			opacity: 1,
			x: 0,
			transition: {
				delayChildren: .75
			}
		},
  };

  return (
    <nav 
			style={{width, height: '100vh'}}
			className={`fixed z-10 bg-${backGround} overflow-auto h-screen flex justify-center`}
			ref={ref}
		>
			<div className="w-4/6 h-4/6 my-auto flex flex-col">
				<motion.ul 
					id="navigation-ul-list" 
					className="flex flex-col gap-y-5"
					variants={ulListVariant}
					initial="hidden"
					animate="show"
				>
					{headerNavLinks.map((link, index) => <NavLinkRenderer key={index} link={link} />)}
				</motion.ul>
				<motion.div 
					className="flex absolute mt-9 py-3 gap-4 w-full bg-black z-index sticky left-0 bottom-0"
				>
					<SignIn mode={currentMode} />
					<SignUp mode={currentMode} />
				</motion.div>
			</div>
    </nav>
  )
})

const MotionHeaderNavigations = motion(HeaderNavigations)

const NavLinkRenderer = function({link}: {link: HeaderNavLinkType})
{
  	const item = {
		hidden: {opacity: 0},
		show: {opacity: 1}
	}

  return (
    <motion.li 
			className="link-navigation-item"
			variants={item}
		>
      <Link href={link.path}>
				<h2 className="text-5xl">{link.label}</h2>
      </Link>
	  	<p className="mt-1">{link.description}</p>
    </motion.li>
  )
}

const NavigationLinkContent = forwardRef(function({children}: PropsWithChildren, ref: Ref<HTMLDivElement>)
{
	const {navigationLinksShowed} = useContext(MainContext)
	return (
		<div ref={ref} className="webcup-app-container">
			<div className="webcup-content">
				{children}
			</div>
		</div>
	)
})

const screenSizeIsLarge = function(screenSize?: number) {
	const largeSize = 700

	if (screenSize) {
		return screenSize > largeSize ? true : false
	}

	return document.body.offsetWidth > largeSize ? true : false 
}

type CSSStyles = {
	width?: string,
	height?: string,
	transform?: string,
	marginLeft?: string,
	marginTop?: string,
}

const updateStyleElement = function(element: HTMLElement, style: CSSStyles)
{
	Object.assign(element.style, style)
}