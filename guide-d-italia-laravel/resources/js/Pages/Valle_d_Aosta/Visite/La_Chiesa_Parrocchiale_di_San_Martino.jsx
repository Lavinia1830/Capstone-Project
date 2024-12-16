import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function La_Chiesa_Parrocchiale_di_San_Martino(props) {
    return (
        <>
            <Head title="La Chiesa Parrocchiale di San Martino"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='la_chiesa_parrocchiale_di_san_martino' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>La Chiesa parrocciale di San Martino</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il <b>borgo di Antagnod</b>, nel comune di Ayas, è uno dei borghi più belli d’Italia e gode di un bel panorama sul Monte Rosa.
                            Merita la vista la <b>chiesa di San Martino</b> con il suo imponente e <b>prezioso altare barocco</b>.
                        </p>
                        <p>
                            L’attuale edificio, a pianta rettan­golare, con tre navate separate da colonne monolitiche di pietra verde, locale, e volte a padiglione, è il risultato di un ri­facimento ottocente­sco. Dedicata a San Martino di Tours, la nuova 
                            chiesa fu infatti consacrata il 24 ottobre 1852.
                        </p>
                        <p>
                            Della chiesa primitiva, a tre navate con enormi pilastri ed archi a pieno centro, resta la parte inferiore dei muri perimetrali e del coro. Il presbiterio fu sopraelevato una prima volta verso il 1600, quando fu costruito il 
                            primo altare barocco, e poi ancora nel 1700, quando questo altare fu rifatto e portato alle dimensioni attuali. Le tre navate furono demolite nelle volte, nei pilastri e nella parte superiore dei muri perimetrali nel 1851 dal 
                            parroco Dandrès, che provvide a sostituire i pilastri con delle magnifiche colonne in pietra locale, monolitiche, e a sopraelevare tutto l’edificio. Le volte, nella loro armoniosa struttura, servono a dare slancio a tutta la 
                            chiesa.
                        </p>
                        <p>
                            Sono molti gli elementi degni di nota di questa chiesa.
                        </p>
                        <ul className='lista'>
                            <li>
                                <p>
                                    <b>ltare maggiore</b>: frutto di vari secoli di lavoro (1500-1800), è diviso orizzontalmente in tre fasce. La zona centrale è dell’inizio del secolo XVIII (ma le cinque statue nelle nicchie sono certamente più antiche 
                                    e si possono assegnare al secolo XVI). La zona inferiore e la superiore furono realizzate nel 1713 dagli intagliatori Gilardi e Minaldi della Valsesia. Verso la metà del secolo XIX, il parroco Dandrès fece rifare il 
                                    tabernacolo. L’altare fu consacrato il 29 maggio 1716.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>Battistero</b>: scolpito nel 1838, al tempo del parroco Dandrès, vi è raffigurata la scena di San Giovanni Battista che battezza Gesù mentre lo Spirito Santo, sotto forma di colomba, si posa su Gesù e il Padre 
                                    attorniato dagli angeli dice: “Questo è il mio figlio prediletto, ascoltatelo”.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>Pulpito</b>: in legno di noce, vi sono scolpite alcune scene del Vangelo. Al di sopra vi è una sorta di baldacchino che serviva per diffondere la voce del predicatore.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>Cantoria</b>: anch’essa in legno di noce, presenta dodici teste scolpite, caratteristiche e fortemente espressive nel loro genere. Anche l’organo di questa chiesa è uno tra i più interessanti e preziosi che si 
                                    trovino in Valle d’Aosta.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>Campanile</b>: fu probabilmente costruito assieme alla chiesa nel secolo XV. Nel 1856-57 l’arciprete Dandrès ne fece demolire la freccia, lo rialzò di 10 metri ed aggiunse una cupola di stile bizantino, sotto 
                                    la quale collocò una statua di marmo della Madonna Immacolata. Arricchì poi il campanile di un magnifico concerto di dieci campane, intonate fra loro, che formano uno stupendo “carillon” nei giorni di festa. Il 
                                    campanile ha un’altezza di 49 metri.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>Altari laterali</b>: a destra, a partire dall’ingresso, l’altare di S. Anselmo e quello di S. Giuseppe, del XIX sec.; l’altare della Vergine, del XVII sec., rimaneggiato nell’Ottocento, con statua della Madonna 
                                    di Oropa. A sinistra, sempre dall’ingresso, l’altare di S. Antonio e l’altare del Rosario, del XIX sec.; l’altare della SS. Trinità, del XVII sec., rimaneggiato nell’Ottocento. Di quest’epoca è la tela, del pittore 
                                    Curtaz di Gressoney, raffigurante la Trinità e La Sacra Famiglia.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>Portale</b>: risalente al 1839, è in legno di noce e vi sono raffigurati avvenimenti della vita di S.Martino di Tours. La celebre scena della condivisione del mantello con il povero, ritratta sulla lunetta 
                                    sovrastante la porta, è invece anteriore (1779).
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>Vetrate</b>: datano dei primi anni del XX secolo.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d534.1514599435513!2d7.688320594243686!3d45.8129258772674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788c8693c2bb395%3A0xfdef79b43e69f3eb!2sChiesa%20Parrocchiale%20di%20San%20Martino!5e1!3m2!1sit!2sit!4v1713954048058!5m2!1sit!2sit"
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
