import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import { Image } from 'react-bootstrap';
import Salotto from '../../../../../assets/Piemonte/Castello_mandria_salotto_reggia_reale_Torino_Piemonte.jpg';

export default function Gli_Appartamenti_Reali(props) {
    return (
        <>
            <Head title="Gli Appartamenti Reali"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='appartamenti_reali' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Gli Appartamenti Reali</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p className='fst-italic text-center'>
                            Gli Appartamenti di Vittorio Emanuele II di Savoia e di Rosa Vercellana (la Bela Rosin), nel Parco della Mandria, sono costituiti da più di 20 ambienti.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <Image src={Salotto} className='mx-auto w-50'/>
                    </div>
                    <div className='margin mt-3'>
                        <p>
                            Gli Appartamenti di Vittorio Emanuele II di Savoia e di Rosa Vercellana (la Bela Rosin), immersi nella natura del <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/castello_mandria/il_parco_della_mandria' className='text-decoration-none color_link'>Parco della Mandria</Link>, sono pervenuti ad 
                            oggi <b>completamente arredati</b> dai preziosi manufatti, dalle opere d'arte, dai tessuti, dagli arredi e dalle suppellettili delle antiche collezioni sabaude che permettono, durante la visita, di godere a pieno del gusto del primo re d'Italia. 
                        </p>
                        <p>
                            Responsabile delle scelte decorative e d'arredo fu l'architetto di corte <b>Domenico Ferri</b>, che promosse un significativo cantiere figurativo tutt'oggi perfettamente conservato nella successione delle diverse sale.
                        </p>
                        <p>
                            Le sale che costituiscono gli Appartamenti Reali del Castello sono pervenute ad oggi ricche delle preziose collezioni commissionate da Vittorio Emanuele II di Savoia e sono state completamente riallestite secondo le documentazioni archivistiche. 
                        </p>
                        <p>
                            Grazie ad un finanziamento straordinario più di 100 capolavori dell'arte, 1200 mq di superfici decorate, 60 arredi, 130 mq di tessuti preziosi e 80 mq di raffinatissime carte da parati, sono stati <b>completamente restaurati</b>.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
