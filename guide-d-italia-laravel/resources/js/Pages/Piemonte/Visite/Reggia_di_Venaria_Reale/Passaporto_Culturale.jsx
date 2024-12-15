import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Passaporto_Culturale(props) {
    return (
        <>
            <Head title="Ingressi Culturale"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='passaporto_culturale' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Passaporto Culturale</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Gratuiti e Ridotti</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La Reggia di Venaria è stata riconosciuta come museo <b>family and kids friendly</b> nell'ambito del progetto <a href='https://www.naticonlacultura.it/' className='text-decoration-none color_link'>Nati con la cultura</a>, per l’accessibilità fisica degli spazi, la presenza di elementi come fasciatoi, un’area relax, materiale dedicato 
                            ai più piccoli per rendere gradevole la permanenza e attività <i>ad hoc</i> durante tutto l’anno.
                        </p>
                        <p>
                            Il Progetto parte dal principio, attestato dalla ricerca scientifica, che l'Arte può trasformarsi in una potente risorsa di benessere, rigenerazione e potenziamento creativo per tutti gli esseri umani, già dai primi anni di vita, determinanti nello sviluppo della personalità e per lo sviluppo bio-psico-sociale.
                        </p>
                        <p>
                            Per facilitare l'incontro tra le famiglie e  i musei è stato ideato il <strong>Passaporto Culturale</strong>, che consente l'ingresso gratuito alla Reggia e ad altri 40 musei piemontesi ai bambini nel primo anno di vita insieme a due accompagnatori adulti.
                        </p>
                        <p>
                            Il Passaporto può essere richiesto compilando l'apposito form sul <a href='https://www.naticonlacultura.it/passaporto-culturale/' className='text-decoration-none color_link'>sito web Nati con la cultura</a>.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
