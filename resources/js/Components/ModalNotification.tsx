import React from "react"
import { Avatar } from "./UserAvatar"

type NotificationType = {
    fullname: string,
    object: string,
    createdAt: string,
    read: boolean
}

export const RenderHeaderNotification = () =>
{
    return (
        <div className='popup-header header-notification'>
            <h1>Notifications</h1>
        </div>
    )
}

export const RenderContentNotification = () =>
{
    const notifications = [
        {fullname: "Abdoul-wahid Hasasni", object: 'a monté un dossier de prêt sur gage', createdAt: '2 min', read: true},
        {fullname: "Abdoul-karim Ibrahim", object: 'a validé une attestation d\'evaluation de gage', createdAt: '10 min', read: true},
        {fullname: "Radjabou sandi Islam", object: 'a évalué une gage', createdAt: '24 min', read: true},
        {fullname: "Imamou Mina", object: 'a validé une attestation d\'evaluation de gage', createdAt: '2h', read: false},
        {fullname: "Nasma Abdoulfatah", object: 'a validé une attestation d\'evaluation de gage', createdAt: '1h', read: false},
        {fullname: "Faidji M'madi", object: 'a validé une attestation d\'evaluation de gage, à validé une attestation d\'evaluation de gage, à validé une attestation d\'evaluation de gage', createdAt: '0 min', read: true},
        {fullname: "Absoir Ahamada", object: 'a validé une attestation d\'evaluation de gage, à validé une attestation d\'evaluation de gage', createdAt: '10 min', read: false},
        {fullname: "Elamine Mze Issa", object: 'a validé une attestation d\'evaluation de gage', createdAt: '1 min', read: false},
        {fullname: "Badrou dine Ahamada", object: 'a validé une attestation d\'evaluation de gage', createdAt: '9 min', read: true},
    ]

    return (
        <div className="popup-content">
            {notifications.map((notification, i) => <Notification key={i} data={notification} />)}
        </div>
    )
}

const Notification = function({data}: {data: NotificationType})
{
    return(
        <a href="#" className='popup-notification'>
            <div className='notification-start'>
                <div className='read'>{data.read && <span></span>}</div>
                <Avatar user={data}/>
            </div>

            <div className="message">
                <div className='message-content'>{`${data.fullname } ${data.object}`}</div>
                <span className='message-created-at'>il y a {data.createdAt}</span>
            </div>
        </a>
    )
}