import React from "react"

export const Hamburger = function({clicked}: {clicked: boolean}) {
	return (
		<button className={`msh-hamburger ${clicked ? 'is_active' : ''}`}>
			<span className="msh-hamburger-container">
				<span className="msh-hamburger-top"></span>
				<span className="msh-hamburger-middle"></span>
				<span className="msh-hamburger-bottom"></span>
			</span>
		</button>
	)
}