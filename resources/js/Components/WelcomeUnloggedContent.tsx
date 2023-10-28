import { MainContext } from "@/Functions/context"
import React, { useContext } from "react"
import { SignIn } from "./AuthAndRegisterButton"



export const WelcomeUnloggedContent = function()
{

  return (
    <div className='pages-unlogged'>
      <section className='about-header'>
        <HeaderRenderer />
        {/* <div className='h-full flex items-center'>
          <h1>Who we are & <br />what motivates us.</h1>
        </div> */}
      </section>
      <BodyRenderer />
      <FooterRenderer />
    </div>
  )
}

export const HeaderRenderer = function() {
  const {mode} = useContext(MainContext)

  return (
    <div className="flex justify-between mb-6">
      <div className="flex items-center gap-x-6">
        <Logo />
      </div>
      <SignIn mode={mode ?? 'light'} />
    </div>
  )
}

const Logo = function() {
  return <h2 className="text-2xl">LOGO</h2>
}

const HeaderNavigationPath = function() {
  return <span>navigation/path</span>
}

const BodyRenderer = function() {
  return (
    <div></div>
  )
}

const FooterRenderer = function() {
  return (
    <div></div>
  )
}