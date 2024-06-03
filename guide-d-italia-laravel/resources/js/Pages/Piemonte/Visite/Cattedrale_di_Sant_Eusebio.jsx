import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Cattedrale_di_Sant_Eusebio(props) {
    return (
        <>
            <Head title="Cattedrale di Sant'Eusebio"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='cattedrale_di_sant_eusebio' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Cattedrale di Sant'Eusebio</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            L’attuale <strong>chiesa Cattedrale di Sant’Eusebio</strong> di Vercelli fu ricostruita nel <b>1570</b> per volere del <b>Cardinale Guido Ferrero</b> sulla 
                            preesistente <b>basilica paleocristiana</b>. Risale al <b>1581</b> il ritrovamento del corpo di <b>Santo</b>, ancora oggi conservato in <b>Cattedrale</b>. 
                            L’attuale struttura risale al <b>secolo XVI</b> per l’<b>abside</b>, al <b>secolo XVIII</b> per le <b>navate</b> e <b>transetto</b> mentre la <b>cupola</b> è 
                            databile al <b>XIX</b>. A partire dalla metà del <b>XX secolo</b> sono stati condotti alcuni interventi di <b>restauro</b> fino a giungere agli importanti 
                            lavori avviati nel <b>2009</b> sotto la guida dell’<b>Arcivescovo Enrico Masseroni</b> e conclusi nel <b>2012</b>. Esternamente l’edificio colpisce per 
                            l’<b>imponenza</b>: la <b>facciata settecentesca</b> (di <b>Benedetto Alfieri</b>) è sormontata dalle gigantesche statue dei <b>dodici Apostoli</b> e 
                            il <b>Redentore</b> con le rispettive attribuzioni (<b>XIX secolo</b>). La chiesa presenta pianta a <b>croce latina</b> a <b>tre navate</b> - una centrale 
                            maggiore e due laterali minori – divise in <b>cinque campate</b>, coperte da <b>volte a cupola</b> e sostenute da <b>massicci pilastri</b> sovrastati 
                            da <b>colonne in finto marmo</b>. In zona <b>absidale</b> si eleva la grande <b>cupola</b> e il pregevole <b>coro ligneo</b>; ancora più notevole è il 
                            monumentale <b>crocifisso di età romanica</b> (<b>X secolo</b>) realizzato in <b>legno ricoperto da una lamina d’argento lavorata a sbalzo</b> sul lato 
                            frontale. La <b>Cattedrale</b> vanta un numero considerevole di <b>cappelle</b> e <b>altari secondari</b> tra i quali ricordiamo la <b>cappella del Beato 
                            Amedeo IX di Savoia</b> e la <b>cappella della Madonna detta “dello schiaffo”</b>. Unico elemento superstite dell’<b>antica Cattedrale</b> è 
                            l’imponente <b>campanile</b> romanico edificato nel <b>XII secolo</b>: a <b>pianta quadrata</b>, con basamento in <b>antichi conci</b> e <b>lastre di 
                            pietra</b>; orizzontalmente è diviso da quattro parti con <b>file di archetti intrecciati</b> e verticalmente in tre zone da <b>semicolonne</b>.<br/>
                            La parte più recente del campanile è caratterizzata da un’ampia <b>cella campanaria</b> contornata da <b>tre arcate a tutto sesto</b> per ogni lato. <br/>
                            È storicamente infine importante ricordare la figura del <b>nunzio pontificio Monsignor Bonomi</b>, vescovo di Vercelli, che in qualità di tramite 
                            del <b>duca Emanuele Filiberto di Savoia</b> consegnò al cardinale <b>Federico Borromeo</b>, in occasione del suo primo pellegrinaggio a Torino, la più 
                            antica e prestigiosa <b>copia della Sindone</b>.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d754.6421240819811!2d8.421471160244833!3d45.330306686889834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47864c8a0a56301f%3A0x447e41d20abb1039!2sCattedrale%20di%20Sant&#39;Eusebio!5e1!3m2!1sit!2sit!4v1716383635093!5m2!1sit!2sit"
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
