import { MainContext } from "@/Functions/context"
import React, { useState } from "react"

export const MainProvider = ({children}: React.PropsWithChildren) => {
	const [navigationLinksShowed, showNavigationLinks] = useState<boolean>(false)
    const [mode, setMode] = useState<('light'|'dark')>('light')

	return (
		<MainContext.Provider value={{
            navigationLinksShowed, 
            showNavigationLinks: () => showNavigationLinks(curr => !curr),
            mode,
            setMode: () => setMode(curr => curr === 'light' ? 'dark' : 'light') 
        }}>
			<main>
				{children}
			</main>
		</MainContext.Provider>
	)
}
