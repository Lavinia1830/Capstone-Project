import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Lerici(props) {
    return (
        <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
        <main>
            <div className='lerici' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Lerici</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Pur alle prese con problemi di sovraffollamento e conseguenti limitazioni al traffico delle auto, e benché non sia rimasta immune da un'edificazione massiccia e non sempre 
                    di qualità 
                </p>
            </div>
        </main>
        <Footer/>
        </AuthenticatedLayout>
    )
}
