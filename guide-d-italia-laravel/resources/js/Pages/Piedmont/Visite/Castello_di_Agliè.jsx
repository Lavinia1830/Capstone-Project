import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';

export default function Castello_di_Agliè(props) {
    return (
        <>
            <Head title="Castello di Agliè"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='castello_di_agliè' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello di Agliè</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il <b>nucleo originario</b> del <b>castello</b> risale verosimilmente al <b>XII secolo</b>, periodo in cui la dinastia 
                            dei <b>San Martino</b> si stava affermando nell’area <b>canavesana</b>. La prima trasformazione dell’originario <b>fortilizio</b> fu 
                            operata nel <b>1646</b> per volontà del conte <b>Filippo San Martino</b>, secondo un progetto che viene fatto risalire 
                            ad <b>Amedeo di Castellamonte</b>.
                        </p>
                        <p>
                            Alla morte di <b>Filippo di Agliè</b> il castello si presentava come una struttura sostanzialmente <b>simmetrica</b> a 
                            due <b>corti</b>, una interna e l’altra aperta verso il <b>borgo</b>; la facciata est era già caratterizzata dalle 
                            due <b>torri-padiglione</b> affacciate sul <b>giardino</b> ordinato a <b>parterres</b>.
                        </p>
                        <p>
                            Nel <b>1763</b> il castello fu acquistato dai <b>Savoia</b> come appannaggio del secondogenito 
                            di <b>Carlo Emanuele III</b>, <b>Benedetto Maria Maurizio</b>, duca del <b>Chiables</b>e: venne allora intrapreso un nuovo, 
                            grandioso progetto di riqualificazione del complesso ad opera dell’architetto <b>Ignazio Birago di Borgaro</b>. Il borgo 
                            stesso fu coinvolto nel vasto programma di rinnovamento, con l’edificazione dell’attuale <b>parrocchiale</b>, collegata al 
                            castello da una <b>galleria coperta</b> a due piani, tuttora esistente. Birago chiamò ad <b>Agliè</b> artisti cari alla 
                            corte torinese: i fratelli <b>Filippo e Ignazio Collino</b> per la statuaria delle <b>fontane</b>, lo 
                            stuccatore <b>Giuseppe Bolina</b> per gli apparati decorativi del grande <b>atrio d’ingresso</b>. Furono inoltre sistemati 
                            i <b>giardini</b> e il <b>parco</b>, risolto in termini di rigorosa <b>simmetria verde</b>, con uno specchio d’acqua lungo 
                            l’asse longitudinale.
                        </p>
                        <p>
                            Durante la dominazione <b>napoleonica</b> il castello fu trasformato in <b>ospizio</b>, il parco <b>lottizzato</b> e 
                            venduto a privati; nel <b>1823</b> rientrò nei possedimenti <b>reali</b> e due anni dopo ebbe inizio l’ultimo intervento 
                            di aggiornamento degli <b>appartamenti</b>, voluto dal re <b>Carlo Felice</b>. Il castello venne riarredato dagli artisti 
                            di corte; lo scultore <b>Giacomo Spalla</b> allestì la <b>Sala Tuscolana</b>, ove sono tuttora collocati i reperti rinvenuti 
                            nella <b>villa Rufinella</b> presso <Link href='/destinazioni/lazio/frascati' className='text-decoration-none color_link'>Frascati</Link>, 
                            proprietà di <b>Carlo Felice</b> e della <b>regina Maria Cristina</b>. Nella seconda metà dell’<b>Ottocento</b> fu riallestita 
                            la <b>Galleria Verde</b> e portato il parco alla sua consistenza attuale, abbandonando le simmetrie verdi per l’impianto di 
                            gusto <b>romantico</b> visibile ancora oggi. Venduto allo <b>Stato</b> nel <b>1939</b>, il castello è stato destinato 
                            a <b>museo</b> di sé stesso, lasciandone immutate strutture e arredi.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2260.098518755139!2d7.766855549785007!3d45.36217483727738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47888871609bea97%3A0x92c3809816e8c2e9!2sCastello%20Ducale%20di%20Agli%C3%A8!5e1!3m2!1sit!2sit!4v1716566813056!5m2!1sit!2sit"
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
