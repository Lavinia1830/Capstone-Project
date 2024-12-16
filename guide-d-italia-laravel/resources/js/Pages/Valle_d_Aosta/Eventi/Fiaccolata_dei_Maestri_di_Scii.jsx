import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Fiaccolata_dei_Maestri_di_Scii(props) {
    return (
        <>
            <Head title="Fiaccolata dei Maestri di Scii"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='fioccolata_dei_maestri_di_scii' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Fiaccolata dei Maestri di Scii</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Eventi</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <strong>La Fiaccolata dei Maestri di Sci</strong> di Champoluc è molto più di una semplice manifestazione sportiva. È un evento che incarna l'essenza dell'inverno nelle Alpi, mescolando <b>tradizione</b>, <b>spettacolo</b> e passione per lo sci.
                        </p>
                        <p>
                            In questa fiaccolata, gli <b>istruttori</b> di sci diventano veri e propri artisti, disegnando figure luminose sulla neve con le loro <b>fiaccole</b> mentre scendono lungo le piste. È uno spettacolo che incanta sia chi partecipa che chi guarda, trasformando la montagna in un 
                            palcoscenico magico illuminato dal bagliore delle fiaccole.
                        </p>
                        <p>
                            Ma la <strong>Fiaccolata dei Maestri di Sci</strong> va oltre lo spettacolo visivo. È un momento di connessione con la <b>natura</b> e con la <b>comunità</b> locale, in cui le persone si riuniscono per condividere la passione per lo sci e per celebrare l'inverno in tutto il 
                            suo splendore.
                        </p>
                        <p>
                            Per i partecipanti, sciare di notte con le fiaccole rappresenta anche un'esperienza unica e emozionante, che permette loro di vivere la montagna in un modo completamente diverso rispetto alla normale giornata sulle piste.
                        </p>
                        <p>
                            Inoltre, la Fiaccolata dei Maestri di Sci può essere accompagnata da eventi <b>collaterali</b>, come feste in rifugi di montagna, spettacoli di <b>fuochi</b> d'artificio o degustazioni di prodotti locali, che rendono l'intera esperienza ancora più indimenticabile.
                        </p>
                        <p>
                            In sintesi, la Fiaccolata dei Maestri di Sci di Champoluc è un evento che unisce <b>tradizione</b>, <b>spettacolo</b> e passione per lo sci, creando un'atmosfera unica e coinvolgente che resta impressa nella memoria di chiunque vi partecipi.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
        
    )
}
