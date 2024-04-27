import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/inertia-react';

export default function La_Brenva_Foula_di_Gorzé(props) {
    return (
        <>
            <Head title="La Brenva Foula di Gorzé"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main >
                    <div className='la_brenva_foula_di_gorzé' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>La Brenva Foula di Gorzé</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Si trova in località Gordzé, dopo Prarayer, il famoso larice secolare chiamato "Larix decidua" nominata la Brenva Foula di Gorzé, con una circonferenza di 522cm e altezza di 23,5 cm, pianta da 500 anni.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
        
    )
}
