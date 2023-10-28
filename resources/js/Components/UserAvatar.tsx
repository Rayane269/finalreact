import { getAcronyme } from "@/Functions/string"
import React from "react"

export const Avatar = ({user}: {user: {avatar?: string|null, fullname: string|null}}) =>
{
    return (
        <div className="avatar">
            {user.avatar ? <img src="" alt="" /> : <span>{getAcronyme(user.fullname ?? 'AZ')}</span>}
        </div>
    )
}