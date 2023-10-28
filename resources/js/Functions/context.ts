import { SetStateAction, createContext } from "react";

type DefaultMainValues = {
	navigationLinksShowed: boolean,
	showNavigationLinks?: React.Dispatch<React.SetStateAction<boolean>>,
    mode: ('light'|'dark'),
    setMode?: () => void
}

export const MainContext = createContext<DefaultMainValues>({navigationLinksShowed: false, mode: 'light'})
