import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ItalyMap from './ItalyMap';
import Footer from '@/Components/Footer';

export default function Home(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
    >
      <ItalyMap/>
      <Footer/>
    </AuthenticatedLayout>
  )
}
