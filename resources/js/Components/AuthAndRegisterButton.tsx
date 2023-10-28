import { Link } from "@inertiajs/react"
import React from "react"
import route from "ziggy-js"

export const SignIn = function({mode}: {mode: ('light'|'dark')}) {
	return (
		<Link className={`btn-signin ${mode}`} href={route('login')}>
			Se connecter
		</Link>
	)
}

export const SignUp = function({mode}: {mode: ('light'|'dark')}) {
	return (
		<Link className={`btn-signup ${mode}`} href={route('register')}>
			S'inscrire
		</Link>
	)
}
