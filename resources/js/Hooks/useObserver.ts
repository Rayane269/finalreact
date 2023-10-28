export const useMutationObserver = function()
{
    let observer: MutationObserver|null = null;
    const observe = (targetElement: HTMLElement, callback: () => void, attributes: string[]) => 
    {
        const mutationCallback = (mutationsList: MutationRecord[], observer: MutationObserver) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes' && attributes.includes(mutation.attributeName as string)) {
                    callback()
                }
            }
        }

        observer = new MutationObserver(mutationCallback)
        const config = {attributes: true, attributesFilter: attributes}

        observer.observe(targetElement, config)
    }

    return {observe, disconnect: () => observer?.disconnect()}
}

export const useResizeObserver = function() 
{
    let observer: ResizeObserver|null = null;
    const observe = (targetElement: HTMLElement, callback: (entrie: ResizeObserverEntry) => void, options?: string[]) => 
    {
        const resizeCallback = (entries: ResizeObserverEntry[]) => {
            for (const entrie of entries) {
                callback(entrie)
            }
        }

        observer = new ResizeObserver(resizeCallback)
        observer.observe(targetElement)
    }

    return {observe, disconnect: () => observer?.disconnect()}
}