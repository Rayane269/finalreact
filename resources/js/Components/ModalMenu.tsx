import React from "react"
import { Avatar } from "./UserAvatar"
import { substring } from "@/Functions/string"
import { Icon } from "./Icon"
import { useAboutUserStore } from "@/Store/user"
import { Link } from "@inertiajs/react"
import { router } from "@inertiajs/core"
import useRoute from "@/Hooks/useRoute"
import useTypedPage from "@/Hooks/useTypedPage"

export const RenderHeaderMenu = () =>
{
    const {props} = useTypedPage()
    const user = props.auth.user

    return (
        <div className='popup-header header-menu'>
            <div className="about-user-profile"> 
                <Avatar user={{fullname: user?.name ?? ''}}/>
                <AboutUserProfile />
            </div>
        </div>
    )
}

export const RenderContentMenu = () =>
{
    const {props} = useTypedPage()
    const user = props.auth.user
    const route = useRoute()
    const links = 
    [
        {path: '#', label: 'Gérer mon compte', icon: 'user-circle-gear'},
        {path: '#', label: 'Apparence : thème claire', icon: 'theme'},
    ]

    const handleLogout = (e: React.FormEvent) => {
        e.preventDefault()
        router.post(route('logout'))
    }

    return (
        <div className="popup-content content-menu">
            {links.map((link, i) => 
                <LinkMenu key={i} label={link.label} path={link.path} icon={link.icon} />
            )}
            {user?.is_admin === true &&
                <Link href='/administration' className='link-menu'>
                    <Icon className="link-icon" size={80} name='admin' />
                    <span className="link-label">Administration</span>
                </Link>
            }

            <div onClick={handleLogout} className='link-menu cursor-pointer'>
                <Icon className="link-icon" size={80} name='logout' />
                <span className="link-label">Déconnexion</span>
            </div>
            
        </div>
    )
}

const AboutUserProfile = function() 
{
    const user = useAboutUserStore(state => state.user)
    return (
        <div className='about-profile'>
            <span>{substring(user?.name ?? '', 30)}</span>
            <span className="email">{substring(user?.email ?? '', 40)}</span>
        </div>
    )
}

export function LinkMenu({label, icon, path, className}: {label: string, icon: string, path: string, className?: string})
{
    return (
        <Link href={path} className={`link-menu${className ?? ''}`}>
            <Icon className="link-icon" size={80} name={icon} />
            <span className="link-label">{label}</span>
        </Link>
    )
}