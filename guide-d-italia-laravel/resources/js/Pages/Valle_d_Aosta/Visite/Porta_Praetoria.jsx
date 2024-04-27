import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/inertia-react';

export default function Porta_Praetoria(props) {
    return (
        <>
            <Head title="Porta Praetoria"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='porta_praetoria' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Porta Praetoria</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <strong>La Porta Praetoria</strong> era una delle quattro porte di accesso alla città ed è l’unica che si è perfettamente conservata sino ad oggi. La Porta costituiva l’ingresso monumentale della città romana di Aosta e si componeva di due torri, di un cortile interno ed 
                            aveva come oggi tre fornici: quello centrale riservato ai carri e i due laterali ai pedoni.
                        </p>
                        <p>
                            Porta Pretoria Aosta, così come tutti gli altri monumenti di epoca romana, fu realizzata in puddinga, ma durante la seconda metà del I sec d.C. il monumento subì un restyling con la posa del marmo verde bardiglio, proveniente dalle cave di Aymavilles e del marmo bianco di 
                            Carrara.
                        </p>
                        <p>
                            Nel Medioevo una delle torri fu abitata dalla potente famiglia di Port Sancti Ursi che riscuoteva pedaggi da tutti coloro che vi transitavano e vi eressero una cappella dedicata alla Santissima Trinità, distrutta durante i lavori di restauro in epoca fascista.
                        </p>
                        <p>
                            Ancora oggi la Porta Praetoria costituisce l’ingresso al <b>centro storico di Aosta</b> ed è uno dei monumenti più importanti della città.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d583.2798606555114!2d7.3230907821436775!3d45.73796158347414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920b03d6fec95%3A0x9fa0de3360fd0ba!2sPorta%20Pretoria!5e1!3m2!1sit!2sit!4v1713858424255!5m2!1sit!2sit"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                            className='mx-auto mappa'
                        ></iframe>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
        
    )
}
