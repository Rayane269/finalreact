import React from 'react'
import { Icon } from './Icon'
import { routes } from '@/Functions/links'
import { Link, usePage } from '@inertiajs/react'

export const GuideAdministrationRenderer = () => {
	return (
		<div className='gck-guide-renderer' id="guide-content">
			<RenderSections />
		</div>
	)    
}

const RenderSections = function()
{
	return (
		<div className="sections">
			<RenderBaseSection />
		</div>
	)
}

const RenderBaseSection = function() 
{
	return (
		<div className='gck-guide-section-renderer'>
			<RenderBaseLinks />
		</div>
	)
}

const RenderBaseLinks = function()
{
	const links = [
		{label: 'Dashbord', path: routes.dashbord, icon: 'home'},
		{label: 'Dashbord', path: routes.dashbord, icon: 'home'},
		{label: 'Dashbord', path: routes.dashbord, icon: 'home'},
	]

	return (
		<>
			{links.map((link, index) => (
				<div className='mck-guide-entry-renderer' key={index}>
					<LinkWrapper label={link.label} path={link.path} icon={link.icon} />
				</div>
			))}
		</>
	)
}   

type PropsLink = {label: string, icon: string, path: string, className?: string}

const LinkWrapper = function({label, icon, path, className=''}: PropsLink)
{
	const { url } = usePage()
	console.log(url, 'hai')
	return (
		<Link 
			className={url === path ? `link-menu clicked ${className}` : `link-menu ${className}`}
			href={path}
		>
			<Icon className="link-icon" size={80} name={icon} />
			<span className="link-label">{label}</span>
		</Link>
	)
}