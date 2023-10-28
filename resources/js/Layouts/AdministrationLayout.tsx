import { GuideAdministrationRenderer } from "@/Components/AdminGuide"
import React from "react"

export const AdministrationLayout = function({children}: React.PropsWithChildren) {
    return (
			<div className="administration-container">
				<div className='guide-wrapper'>
					<div id="guide-space"></div>
					<GuideAdministrationRenderer />
				</div>
				<div className="admin-navigation-content">
					{children}
				</div>
			</div>
    )
}