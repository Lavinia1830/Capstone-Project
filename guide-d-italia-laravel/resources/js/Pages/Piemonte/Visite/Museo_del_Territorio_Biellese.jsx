import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Museo_del_Territorio_Biellese(props) {
    return (
        <>
            <Head title="Museo del Territorio Biellese"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='museo_del_territorio' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo del Territorio Biellese</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il <strong>Museo del Territorio Biellese</strong> è il museo della <b>Città di Biella</b> che raccoglie testimonianze dell’intero territorio da <b>Viverone al Lago della Vecchia</b>, 
                            dalla <b>Bessa al Monte Rubello</b>. La visita al museo, collocato entro il <b>chiostro</b> addossato alla <b>basilica di San Sebastiano</b>, permette di compiere un <b>viaggio nel 
                            tempo</b> che parte dalla <b>preistoria</b> sino al <b>Novecento</b>. Il Museo è stato inaugurato nel <b>dicembre 2001</b> per raccogliere e conservare il <b>patrimonio biellese</b> e 
                            si è arricchito nel corso degli anni con l’allestimento di varie sezioni: nel <b>maggio 2011</b> è stata inaugurata la <b>sezione archeologica</b> che si apre con i <b>fossili marini 
                            del Biellese</b> - quando era sommerso dal mare - prosegue con la <b>Bessa</b>, la <b>necropoli romana di Cerrione</b> e di <b>Biella</b> sino al <b>Medioevo dolciniano</b>. Un 
                            allestimento di grande impatto che, anche grazie al <b>multimediale</b>, crea suggestioni, emozioni e può essere apprezzato da chi voglia recuperare un <b>forte legame</b> con 
                            l’<b>identità del territorio</b>, la sua <b>storia</b>, la <b>cultura</b> e il <b>gusto</b> di una area alpina e di confine. A <b>giugno 2016</b> il Museo rinnova ancora i propri 
                            spazi con l'esposizione delle <b>collezioni storico-artistiche</b>. Nel grande salone al primo piano, a partire dalle <b>testimonianze pittoriche del XII secolo</b>, è possibile 
                            seguire l'evoluzione della <b>cultura figurativa</b> e del <b>gusto collezionistico locale</b>: opere cinquecentesche provenienti dalle più illustri <b>botteghe vercellesi</b>, 
                            lasciano il posto a dipinti <b>caravaggeschi</b> e di <b>scuola veneta settecentesca</b> che testimoniano l'ambiente culturale entro cui lavorarono i <b>fratelli Galliari</b>. Le 
                            collezioni di <b>Ottocento</b> e <b>Novecento</b> permettono di presentare la <b>pittura piemontese di paesaggio</b> con notevoli dipinti di <b>Antonio Fontanesi</b>, <b>Marco 
                            Calderini</b>, <b>Giovanni Giani</b> e <b>Giovanni Piumati</b> e inserire in un contesto culturale artistico più ampio la produzione di <b>Lorenzo Delleani</b>. 
                            Capolavoro <b>divisionista</b> è l'opera di <b>Emilio Longoni</b>, che apre il percorso alla suggestione di un contesto biellese di inizio Novecento di eccellenza, da cui provengono 
                            opere di <b>Carlo Carrà</b> e dei maggiori esponenti delle <b>Avanguardie storiche</b> della prima metà del Novecento, come <b>Renè Magritte</b>, <b>Paul Klee</b>, <b>Max Ernst</b>, 
                            <b> Marc Chagall</b>, <b>Joan Mirò</b> e dei connazionali <b>Giacomo Balla</b> e <b>Lucio Fontana</b>. Infine, a completamento della Sezione archeologica, ha recentemente inaugurato la 
                            nuova sezione <b>Viaggiare sull'acqua nel Biellese antico</b>, con l'esposizione di un eccezionale reperto ligneo, una <b>piroga monossile di età romana</b> proveniente dal <b>Lago di 
                            Bertignano</b> che, insieme a nuovi reperti da insediamenti lacustri, affronta il tema degli <b>scambi e commerci</b> dalla <b>preistoria al Medioevo</b>, e nel <b>2018</b> è stata 
                            inaugurata la sezione <b>Culture Precolombiane</b>, con reperti che appartengono alle culture che fiorirono nel <b>Mesoamerica</b>, nell’<b>area intermedia</b> (Messico, Costa Rica, 
                            Nicaragua) e nei <b>territori andini</b> prima dell’arrivo dei <b>conquistadores</b>. Orario di apertura: <b>mercoledì</b> e <b>sabato: 15,00 – 18,30</b>; <b>Giovedì</b> – <b>venerdì </b> 
                            e <b>domenica 10-12,30</b> e <b>15-18,30</b>.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d716.1817711670308!2d8.04909189354546!3d45.56439429919451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478620e7fdf89de1%3A0xd110a0f5710614a9!2sMuseo%20del%20Territorio%20Biellese!5e1!3m2!1sit!2sit!4v1716286613087!5m2!1sit!2sit"
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
