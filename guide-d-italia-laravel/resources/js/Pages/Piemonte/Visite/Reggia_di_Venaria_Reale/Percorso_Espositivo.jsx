import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';
import { Image } from 'react-bootstrap';
import Bortolan_percorso_espositivo_palazzo_reale from '../../../../../assets/Piemonte/Bortolan_percorso_espositivo_palazzo_reale_Torino_Piemonte.jpg';

export default function Percorso_Espositivo(props) {
    return (
        <>
            <Head title="Percorso Espositivo"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='percorso_espositivo' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Percorso Espositivo</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='text-center color-subtitle fst-italic'>
                            Il Teatro di Storia e Magnificenza, il percorso espositivo della Reggia è incentrato sulla storia e l’arte sabauda.
                        </h3>
                        <Image src={Bortolan_percorso_espositivo_palazzo_reale} className='mx-auto w-50'/>
                    </div>
                    <div className="margin mt-3">
                        <h2 className='text-center color-subtitle fst-italic'>Teatro di Storia e Magnificenza</h2>
                        <p>
                            L'incantevole scenario del palazzo seicentesco con la <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/i_capolavori/sala_di_diana' className='text-decoration-none color_link'>Sala di Diana</Link>, l’eleganza della <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/i_capolavori/galleria_grande' 
                            className='text-decoration-none color_link'>Galleria Grande</Link> con le musiche di <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/la_reggia/galleria_grande' className='text-decoration-none color_link'>Brian Eno</Link>, la  solennità della <Link 
                            href='/visite/piemonte/torino/reggia_di_venaria_reale/i_capolavori/cappella_di_sant_uberto' className='text-decoration-none color_link'>Cappella di Sant’Uberto</Link> e la grandiosità delle <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/i_capolavori/scuderie_juvarriane'
                             className='text-decoration-none color_link'>Scuderie juvarriane</Link>, capolavori settecenteschi di <b>Filippo Juvarra</b>, il suggestivo allestimento sulla vita di corte <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/ripopolare_la_reggia_di_petr_greenaway' 
                             className='text-decoration-none color_link'>Ripopolare la Reggia</Link>, di Peter Greenaway, rappresentano la cornice ideale del <i>Teatro di Storia e Magnificenza</i>.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
