import React from "react"
import { Icon } from "./Icon";
import { displayPopup } from "@/Functions/popup";

export const TopBarNotificationButton = () =>
{
    /**
     * 
     * @param {Event} e 
     */
    const handleDisplayPopup = function (e: React.MouseEvent) {
        e.stopPropagation()
        const position = e.currentTarget.getBoundingClientRect().left
        
        // Definir quelle type de pop up afficher
        // Definir la position où il doit s'afficher 
        // Afficher le pop up
        displayPopup(position, 'notification', 500)        
    }

    return (
        <div onClick={handleDisplayPopup}  className="gcrdt-topbar-notification">
            <span className="notification-count">9</span>
            <Icon className="link-icon" name={"notification"} size={80} />
        </div>
    )
}