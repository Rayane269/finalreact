import React from 'react';
import { Head } from '@inertiajs/react';
import { UnloggedLayout } from '@/Layouts/UnloggedLayout';
import { LoggedLayout } from '@/Layouts/LoggedLayout';
import { WelcomeUnloggedContent } from '@/Components/WelcomeUnloggedContent';

interface Props {
  canLogin: boolean;
  userLogged: boolean,
  canRegister: boolean;
  laravelVersion: string;
  phpVersion: string;
}

export default function Welcome({
  userLogged,
}: Props) {
  return (
    <>
      {userLogged ? <WelcomeUserLogged /> : <WelcomeUserUnlogged />}
    </>
  );
}

const WelcomeUserLogged = function() {
  return (
    <LoggedLayout>
      <Head title='Welcome' />
      <WelcomLoggedContent />
    </LoggedLayout>
  )
}

const WelcomeUserUnlogged = function() {
  return (
    <UnloggedLayout>
      <Head title='Welcome' />
      <WelcomeUnloggedContent />
    </UnloggedLayout>
  )
}

const WelcomLoggedContent = function()
{
  return (
    <>
      <h1>Salaut tous le monde</h1>
    </>
  )
}

