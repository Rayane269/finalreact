import React from "react"
import { Icon } from "./Icon"

type LogoProps = {name: string, size: number, className?: string}

export const Logo = ({name, size = 100, className}: LogoProps) => {
    return (
        <Icon name={name} size={size} className={className} />
    )
}