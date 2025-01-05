import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function La_Freccia_di_Diana_il_trenino_dei_Giardini(props) {
    
    return (
        <>
            <Head title="La Freccia di Diana: il trenino dei Giardini"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='la_freccia_di_diana' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>La freccia di Diana: il trenino dei Giardini</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p className='color-subtitle text-center'>
                            La Freccia di Diana, un simpatico trenino, accompagna i visitatori lungo le scenografie verdi del Parco basso fino ai suggestivi resti del Tempio di Diana
                        </p>
                    </div>
                    <div className="my-3">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/V6EeExPHoj0" 
                            title="La Freccia di Diana" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen
                            className='mx-auto'
                        >
                        </iframe>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Giro del Parco basso di cierca 25 minuti con Trenino (una carrozza è anche dodata di riscaldaento per l'inverno) per 50 posti (con pedana per 1 posto 
                            per diversamente abile).
                        </p>
                        <p>
                            I bambini sotto i 14 anni devono essere accompagnati da un adulto.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
