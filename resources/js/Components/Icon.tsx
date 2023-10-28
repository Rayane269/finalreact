import React from "react"

type IconPropsType = {
    name: string,
    size: number,
    className?: string,
    onClick?: CallableFunction
}

export function Icon ({name, size, className, onClick}: IconPropsType) {
	const svgcClassName = `icon icon-${name}`
	const href = `/sprite.svg#${name}`

    const handleClick = (e: React.MouseEvent) => {
        onClick !== undefined && onClick(e)
    }
    
	return (
        <div onClick={handleClick} className={`gcrdt-icon ${className}`}>
            <svg className={svgcClassName} width={`${size}%`} height={`${size}%`}>
                <use xlinkHref={href} />
            </svg>
        </div>
	)
}
