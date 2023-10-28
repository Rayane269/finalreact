import { displayPopup } from '@/Functions/popup'
import React from 'react'
import { Avatar } from './UserAvatar'
import { useAboutUserStore } from '@/Store/user'
import useTypedPage from '@/Hooks/useTypedPage'

export const TopBarAvatar = () =>
{ 

    // const user = useAboutUserStore((state) => state.user)   
    const { props } = useTypedPage()
    const user = props.auth.user
    
    console.log(user, 'heheh')
    const handleDisplayPopup = function (e: React.MouseEvent) {
        e.stopPropagation()
        const position = e.currentTarget.getBoundingClientRect().left
        
        // Definir quelle type de pop up afficher
        // Definir la position où il doit s'afficher 
        // Afficher le pop up
        displayPopup(position, 'menu')        
    }

    return (
        <button onClick={handleDisplayPopup}>
            <Avatar user={{fullname: user?.name ?? null}}/>
        </button>
    )
}

