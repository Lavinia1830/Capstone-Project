import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Museo_d_Arte_Contemporanea_Internazionale(props) {
    return (
        <>
            <Head title="M.A.C.I.S.T. Museo d'Arte Contemporanea Internazionale senza tendenze"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='museo_d_arte_contemporanea_internazionele' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>M.A.C.I.S.T. Museo d'Arte Contemporanea Internazionale senza tendenze</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il progetto <strong>M.A.C.I.S.T. “Museo d’Arte Contemporanea Internazionale Senza Tendenze”</strong> nasce da un’idea del Maestro <b>Omar 
                            Ronda</b>, dalla sensibilità di alcuni collezionisti e molti artisti di <b>fama internazionale</b> che hanno deciso di donare e di mettere 
                            a disposizione le proprie opere con il fine di sostenere le attività di <b>prevenzione</b>, <b>cura e ricerca</b> della <b>Fondazione Edo 
                            ed Elvo Tempia</b> da 40 anni impegnata nella <b>lotta contro i tumori</b>. Per questo motivo il <strong>MACIST</strong> - essendo stato 
                            realizzato a beneficio di un <b>ente morale di eccellenza</b> sul territorio - si definisce come museo “<b>etico e democratico</b>”. La 
                            sfida etica che si pone il <stong>MACIST</stong> è quella di valorizzare e far conoscere l’<b>arte contemporanea mondiale</b>, senza 
                            tendenze e nelle sue migliori espressioni qualitative, sostenendo al contempo le attività di <b>ricerca oncologica</b>. In tal senso i 
                            visitatori del Museo rivestono il ruolo di <b>destinatari di cultura</b> e allo stesso tempo di <b>protagonisti attivi</b> nella lotta 
                            contro il cancro. Il <strong>MACIST</strong> si definisce inoltre come realtà “<b>democratica</b>” per due motivazioni: innanzitutto 
                            l’<b>accesso agli spazi museali</b> è completamente <b>libero e gratuito</b> sia per le collezioni permanenti che temporanee; in secondo 
                            luogo poiché non è presente una <b>tendenza artistica preponderante</b> tra le opere della collezione permanente. La <b>collezione 
                            permanente</b> costituisce un’interessante selezione delle più importanti <b>correnti artistiche contemporanee</b> dagli anni sessanta a 
                            oggi: <b>Pop Art</b>, <b>Nouveau Réalisme</b>, <b>Avanguardie e Avanguardie storiche</b>, <b>Arte povera</b>, <b>Neoespressionismo</b>, 
                            <b> Minimalismo</b>, <b>Transavanguardie</b>, <b>Arte concettuale</b>, <b>Nuovo Futurismo</b>, <b>Iperrealismo</b>. L’edificio che ospita 
                            il Museo, sapientemente restaurato, presenta una superficie superiore ai <b>700 m²</b> e si trova all’interno dell’antica “<b>Fabbrica 
                            dell’Oro</b>” (1901) di <b>Giuseppe Gualino</b> (padre del più noto <b>Riccardo</b>, grande imprenditore piemontese e collezionista 
                            d’arte), esempio di <b>archeologia industriale</b> e importante punto di riferimento per quanto riguarda l’arte orafa nell’Italia dei 
                            primi del novecento. Gli spazi si compongono innanzitutto di un’<b>esposizione permanente</b>, che raccoglie <b>150 opere e 
                            installazioni</b> di <b>130 artisti</b> italiani e internazionali (questi ultimi provenienti da ben <b>venti paesi</b> diversi). Il Museo 
                            si compone inoltre di una <b>sala per proiezioni video</b> e di una parte destinata esclusivamente a <b>mostre temporanee</b>. 
                            Dall’apertura a oggi sono state realizzate <b>dodici importanti mostre</b>, tutte di grande successo di <b>critica e pubblico</b>. La 
                            <b> Direzione artistica e la Presidenza</b> sono affidate a <b>Mariella Genova</b>, insieme a <b>Philippe Daverio</b>, <b>Presidente del 
                            Comitato d'Onore</b>. Il curatore del Museo è <b>Marco Bertazzoli</b>. <b>INFO</b>: orari di apertura <b>sabato</b> e <b>domenica ore 
                            15-19,30</b> (esclusi i mesi di <b>luglio</b> e <b>agosto</b>).
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d751.4277617195597!2d8.054539741176745!3d45.57105829047355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478620e4e8e41377%3A0x8bc2b6a607a8b7eb!2sCosta%20di%20Riva%2C%2011%2C%2013900%20Biella%20BI!5e1!3m2!1sit!2sit!4v1716302715057!5m2!1sit!2sit"
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
