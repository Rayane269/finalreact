export function $(selector: string, element?: HTMLElement): HTMLElement|null
{
  return element ? element.querySelector(selector) : document.querySelector(selector) || null
}

export function $$(selector: string, element?: HTMLElement)
{
  const list = element ? element.querySelectorAll(selector) : document.querySelectorAll(selector) || null
  return Array.from(list)
}

interface ElementAttributes {
  [key: string]: string | Function;
}

export function createElement(tagName: string|Function, attributes: ElementAttributes, ...children: any[]) {
  if (typeof tagName == 'function') {
    return tagName(attributes)
  }
  
  const e: HTMLElement = document.createElement(tagName)

  for (const k of Object.keys(attributes || {})) {
    const attributeValue = attributes[k]

    if (typeof attributeValue === 'function' && k.startsWith('on')) {
      const eventType = k.substring(2)
      e.addEventListener(eventType, attributeValue as EventListener)
    } 
    
    else
      e.setAttribute(k, String(attributeValue))
  }

  //On met Tous les enfants au meme niveau (applatir le tableau children)
  children = children.reduce((acc, child) => {
    return Array.isArray(child) ? [...acc, ...child] : [...acc, child]
  }, []) 

  for (const child of children) {
    if (typeof child === 'number' || typeof child === 'string') {
      e.appendChild(document.createTextNode(child.toString()))
    } else if (child instanceof HTMLElement) {
      e.appendChild(child)
    } else {
      console.error("Impossible d'ajouter l'element", child, typeof child)
    }
  }

  return e
}