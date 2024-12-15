import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ItalyMap from './ItalyMap';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Home(props) {
  return (
    <>
      <Head title="Home"/>
      <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
      >
        <ItalyMap/>
        <Footer/>
      </AuthenticatedLayout>
    </>
  )
}