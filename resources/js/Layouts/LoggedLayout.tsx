import { GuideSidebarButton } from "@/Components/GuideSidebarButton"
import { RenderContentMenu, RenderHeaderMenu } from "@/Components/ModalMenu"
import { RenderContentNotification, RenderHeaderNotification } from "@/Components/ModalNotification"
import { MainProvider } from "@/Components/Provider"
import { TopBarAvatar } from "@/Components/TopBarAvatar"
import { TopBarNotificationButton } from "@/Components/TopBarNotificationButton"
import { $ } from "@/Functions/dom"
import { useDisplayModal } from "@/Hooks/useModal"
import { useAboutUserStore } from "@/Store/user"
import React, { forwardRef, useEffect, useRef, useState } from "react"

export const LoggedLayout = function({children}: React.PropsWithChildren) {
	const fetchUser = useAboutUserStore(state => state.fetchUser)

	useEffect(() => {
		fetchUser()
	}, [])

	return (
		<MainProvider>
			<ContentWrapper content={children} />
		</MainProvider>
	)
}

const ContentWrapper = function({content}: {content: React.ReactNode}) {
	const headerRef = useRef<HTMLHeadElement|null>(null)
	const contentRef = useRef<HTMLDivElement|null>(null)
	
	return (
		<>
			<HeaderRenderer ref={headerRef} />
			<ModalRenderer />
			<ContentRenderer ref={contentRef}>
				{content}
			</ContentRenderer>
		</>
	)
}

const HeaderRenderer = forwardRef<HTMLHeadElement>(function({}, ref) 
{
	return <header id="azd-masthead" ref={ref}>
		<nav className="gck-nav-masthead">
			<NavbarStartElement />
			{/* <NavbarCenterElement /> */}
			<NavbarEndElement />
		</nav>
	</header>
})

const NavbarStartElement = function()
{
	return (
		<div className="gck-nav-start">
			<GuideSidebarButton />
			<h1>LOGO</h1>
			{/* <Logo name="Log de l'app" size={100} className="gck-logo" /> */}
		</div>
	)
}

const NavbarEndElement = function()
{
	return (
		<div className="gck-nav-end">
			<TopBarNotificationButton />
			<TopBarAvatar />
		</div>
	)
}

const ContentRenderer = forwardRef<HTMLDivElement, React.PropsWithChildren>(function({children}, ref)
{
	return <div className="p-5" ref={ref}>{children}</div>
})

const ModalRenderer = function() 
{
	return (
		<ModalDropDown />
	)
}

const ModalDropDown = function ()
{
	const [modalType, setModalType] = useState<string|null>(null)
	const elementName = '#gcrdt-popup-dropdown'

	const handleSetPopUpTyep = () => {
		const element = $(elementName) as HTMLElement
		const typePopUp = element.getAttribute('popup') ?? null
		setModalType(typePopUp)
	}
	
	const displayed = useDisplayModal(elementName, handleSetPopUpTyep)
	
	return (
		<div id='gcrdt-popup-dropdown' className='gcrdt-popup-container' style={{display: 'none', outline: 'none', position: 'fixed'}}>
			<RenderDropDwonWrapper type={modalType} displayed={displayed} />
		</div>
	)
}

const RenderDropDwonWrapper = function({displayed, type}: {displayed: boolean, type: string|null})
{
	if (!displayed) return 
	return (
		<div className="popup-wrapper" >
			<div id="spinner"></div>
			<RenderHeader type={type} />
			<RenderContent type={type} />
		</div>
	)
}

const RenderHeader = function({type}: {type: string|null})
{
	switch (type) {
		case "menu":
			return <RenderHeaderMenu />
		case "notification":
			return <RenderHeaderNotification />
		default:
			break;
	}
}

const RenderContent = function({type}: {type: string|null})
{    
	switch (type) {
		case "menu":
			return <RenderContentMenu />
		case "notification":
			return <RenderContentNotification />
		default:
			break;
	}
}

