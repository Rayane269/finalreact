import { User } from "@/Store/user"

type CurrentUser = {
    user: User,
    isAdmin: boolean
}

export function getCurrentUser(): CurrentUser
{
    return {
        user: {fullname: "Azad Js"},
        isAdmin: true
    }
}