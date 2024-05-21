import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Museo_biellese_degli_alpini(props) {
    return (
        <>
            <Head title="Museo biellese degli alpini 'Il Sentiero della Memoria'"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='museo_biellese_degli_alpini' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo biellese degli alpini 'Il Sentiero della Memoria'</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Le <b>radici</b> del Museo sono la “<b>Mostra nazionale delle truppe alpine</b>” del <b>1952</b>, trasformata in struttura permanente il 
                            <b> 15 settembre 1972</b>, in occasione del <b>50° Anniversario</b> di fondazione della Sezione di Biella, come “<b>Museo delle Truppe 
                            Alpine Mario Balocco – per non dimenticare</b>”; con il trasferimento della <b>nuova sede</b> di via Ferruccio Nazionale, 5 in Biella, 
                            assume la denominazione “<b>Museo biellese degli Alpini – Il sentiero della memoria</b>”. Ogni sala ospita i cimeli di uno specifico 
                            periodo storico delle Truppe Alpine, quali la <b>costituzione del Corpo degli Alpini</b>, la partecipazione alla <b>battaglia di Adua 
                            del 1896</b> (il museo ospita <b>quattro pezzi d’artiglieri</b>a della battaglia), l’epoca della <b>Grande Guerra 1915-1918</b> con 
                            <b> armi</b>, <b>preziosi cimeli e immagini delle montagne</b> ove si fronteggiarono alpini e austriaci: chiude il periodo un <b>esemplare 
                            dell’obice 75/13 dell’artiglieria alpina</b>. Quindi l’<b>Africa Orientale</b>, il <b>Fronte Occidentale</b>, <b>Albania</b>, <b>Grecia </b> 
                            e <b>Montenegro</b> fino ad arrivare al <b>sacrificio in Russia</b> delle Divisioni Alpine <b>Cuneense</b>, <b>Julia</b> e <b>Tridentina</b>. 
                            Una sala è dedicata alla <b>Scuola Militare Alpina di Aosta</b>, mentre non manca il ricordo dei più significativi interventi dell’<b>A.N.A.  
                            in tempo di pace</b>: <b>Friuli</b>, <b>Irpinia</b>, <b>Valtellina</b>, <b>Asilo di Rossosch</b>, <b>Cascina Carrubi</b>, fino a quelli per 
                            l’<b>alluvione in Piemonte</b>. Infine, <b>preziosissima</b> e <b>unica</b>, la sala che ospita il “<b>Sacrario della Gloria</b>” con 
                            le <b>205 fotografie del volto degli Alpini decorati di Medaglia d’Oro al Valor Militare</b>: all’<b>altare</b> che orna il Sacrario, si 
                            sono aggiunti (donati dalla famiglia) l’<b>altare da campo</b>, i <b>paramenti</b> e altri <b>oggetti sacri</b> che accompagnarono <b>Padre 
                            Giovanni Brevi</b> nella terribile <b>prigionia in Russia dal 1942 al 1954</b>. Il Museo è meta di continue visite di <b>scolaresche</b>, 
                            <b>alpini</b> e <b>cittadini</b> provenienti da numerose regioni italiane. <b>INFO: Orari di apertura</b>: <b>mercoledì</b> e <b>venerdì
                            ore 15-19</b>  in altri orari su prenotazione, <b>visite guidate</b> per <b>gruppi</b> e <b>scuole</b>.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1503.3134436734979!2d8.074035474020127!3d45.55394233424997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786213987d82f83%3A0xa9186a6fdd664671!2sVia%20Ferruccio%20Nazionale%2C%205%2C%2013900%20Biella%20BI!5e1!3m2!1sit!2sit!4v1716300468503!5m2!1sit!2sit"
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
