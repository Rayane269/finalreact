import { $ } from "./dom"

export function displayPopup(position: number, type: string, width: number = 350)
{
    const popUpElement = $('#gcrdt-popup-dropdown')
    if (popUpElement === null) return

    popUpElement.style.width = `${width}px`
    popUpElement.style.display = 'block'
    popUpElement.style.left = `${position - (popUpElement.clientWidth + 5)}px`
    popUpElement.setAttribute('popup', type)
}
