import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';


export default function Dove_le_stelle_si_avvicinano_di_una_spanna(props) {
    return (
        <>
            <Head title="Dove le stelle si avvicinano di una spanna in più"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='dove_le_stelle_si_avvicinano_di_una_spanna' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Dove le stelle si avvicinano di una spanna in più</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p className='fst-italic text-center'>
                            Un'installazione di Giovanni Anselmo nei Giardini della Reggia
                        </p>
                    </div>
                    <div className='mb-3'>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/DUbQ4ZjVPg0" 
                            title="Dove le stelle si avvicinano di una spanna in più" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen
                            className='mx-auto'>
                        </iframe>
                    </div>
                    <div className='margin mt-3'>
                        <p>
                            L'opera <i>Dove le stelle si avvicinano di una spanna in più</i> di Giovanni Anselmo, grande maestro contemporaneo, è costituita da <b>sei gigantesche lastre di granito nero</b>, con sopra scandita e incisa in profondità la scritta che dà origine al titolo e rimanda a 
                            una <b>sorta di bradisismo alto approssimativamente quanto la misura di una mano aperta</b>; l’opera, su cui si può salire, consente alle stelle, che notte e giorno si avvicendano sulla sua verticale, di avvicinarsi di una spanna in più.
                        </p>
                        <p>
                            Giovanni Anselmo, artista di straordinaria levatura, nasce nel 1934 a Borgofranco d’Ivrea, ma da sempre vive e lavora a Torino. <b>Esponente di spicco dell’Arte Povera</b> e figura centrale di quel gruppo di artisti, in larga maggiorana torinesi (come Mario e Marisa Merz, 
                            Giuseppe Penone e Gilberto Zorio), assurti a fama internazionale a cominciare dagli anni ’70 grazie all’impegno intellettuale del compianto critico d’arte e curatore Germano Celant.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
