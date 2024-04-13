import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Mappa_interattiva(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
          <div className='mappa_interettiva' style={{ position: 'relative' }}>
            <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>La reggia</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
          </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
