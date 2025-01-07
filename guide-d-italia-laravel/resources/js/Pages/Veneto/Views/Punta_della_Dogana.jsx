import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Punta_della_Dogana(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='punta_della_dogana' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Punta della Dogana</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Ad appena due anni dall’acquisizione di Palazzo Grassi, nel 2009 François Pinault espande il suo progetto culturale a Venezia attraverso il restauro dello storico complesso di <strong>Punta della Dogana</strong>.
                    </p>
                    <p>
                        I magazzini della Dogana da Mar, uno spazio commerciale completato nella sua forma attuale nel 1682, sono stati riprogrettati dall’architetto Giuseppe Benoni sulla base del preesistente complesso architettonico quattrocentesco, creato per spostare la sede operativa doganale 
                        dalla zona dell’Arsenale. Punta della Dogana si colloca in un punto strategico di Venezia: all’imbocco del Canal Grande, vicino alla Basilica Santa Maria della Salute di Baldassarre Longhena, da qui si possono ammirare sia San Marco che l’Isola di San Giorgio Maggiore.
                    </p>
                    <div className='mb-3 d-flex justify-content-center'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/xzF4wfFSY1w?si=xlFarbjZzmaIjPIu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <p>
                        Il complesso monumentale di Punta della Dogana presenta una pianta triangolare che è rimasta inalterata nel tempo e, in corrispondenza della torretta nella sua parte terminale, un gruppo scultoreo raffigurante due Atlanti che sorreggono un globo terrestre in bronzo dorato, in 
                        cima al quale si erge la statua della Fortuna che, muovendosi, indica la direzione in cui soffia il vento. Al termine del loro funzionamento, negli anni Ottanta del secolo scorso, i magazzini versano in uno stato di degrado fino al 2007, quando per la salvaguardia e il recupero 
                        di questo monumento emblematico della città viene indetto un bando del Comune di Venezia a cui François Pinault partecipa con un progetto di riqualificazione firmato da Tadao Ando, riuscendo ad assicurarsi il cantiere di Punta della Dogana. Con una campagna di restauro basata 
                        sull’idea di mantenere in equilibrio memoria storica e innovazione tecnologica, in poco più di un anno l’architetto giapponese riporta alla luce le pareti in mattoni e le capriate lignee originali, agisce sulle fondamenta per porre l’edificio al riparo sia dall’umidità sia dagli 
                        effetti delle alte maree, e lo trasforma in uno spazio dal carattere spettacolare e discreto al tempo stesso.
                    </p>
                    <p>
                        Dando valore al passato si procede sul recupero della struttura: all’interno Tadao Ando ha agito sugli elementi che erano stati modificati nel tempo eliminando le aggiunte moderne, giustapponendo materiali e forme contemporanee come le pareti in cemento a vista, e crea ex novo 
                        un immersivo Cubo in cemento armato, posto nell’ambiente centrale a doppia altezza, conferendo al cemento dignità di materiale nobile, come già sperimentato in altri famosi progetti. Questo spazio singolare, che viene progettato con lo stesso principio simbolico che si ritrova 
                        anche nella Rotonda della Bourse de Commerce a Parigi, costituisce una parentesi geometrica degli spazi che attraversa verticalmente il centro della pianta triangolare di Punta della Dogana. Questa scatola di calcestruzzo a tutta altezza, il cuore pulsante dell’intero ambiente, 
                        presenta l’accostamento di una pavimentazione tradizionale veneziana da esterno, a masegni, e i muri in cemento armato, lisci e setosi al tatto, in grado di creare una dimensione d’introspezione.
                    </p>
                    <p>
                        All’esterno si opta per una restituzione coerente dello stile funzionale e privo di decorazioni superflue della Dogana da Mar originale, intervenendo solamente sulle aperture, nelle quali Tadao Ando inserisce la citazione a un architetto particolarmente importante per la Venezia 
                        contemporanea: le griglie ortogonali di acciaio che costituiscono le aperture esterne, infatti, sono un rimando al portone del negozio Olivetti delle Procuratie Vecchie che affacciano su Piazza San Marco, opera di Carlo Scarpa.
                    </p>
                    <p>
                        Il restauro dell’architetto giapponese, terminato nel 2009, permette di compiere una “camminata nell’arte”: un’esperienza contemporaneamente all’interno dell’arte, dell’architettura e della città di Venezia, che entra attraverso le ampie finestre a mezzaluna. Un luogo nato con 
                        funzione esclusivamente commerciale, viene riconvertito liberando i suoi ambienti il più possibile in modo da fornire spazi dilatati in grado di ospitare anche le opere più monumentali della Pinault Collection.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.9773623161705!2d12.334257876599148!3d45.43095133565609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1d6aaad59b9%3A0x627311602a64b76d!2sPunta%20della%20Dogana!5e1!3m2!1sit!2sit!4v1712994671700!5m2!1sit!2sit"
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
    )
}
