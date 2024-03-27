import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ItalyMap from './ItalyMap';
import Footer from '@/Components/Footer';

export default function Home(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>}
    >
      <ItalyMap/>
      <Footer/>
    </AuthenticatedLayout>
  )
}
