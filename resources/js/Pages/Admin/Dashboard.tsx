import React from 'react';
import { LoggedLayout } from '@/Layouts/LoggedLayout';
import { Head } from '@inertiajs/react';
import { AdministrationLayout } from '@/Layouts/AdministrationLayout';

export default function Dashboard() {
  return (
    <LoggedLayout>
      <Head title='Administration' />
      <AdministrationLayout>
        <DashbordContent />
      </AdministrationLayout>
    </LoggedLayout>
  );
}


const DashbordContent = function() {
  return (
    <div>
      salut
    </div>
  )
}


