import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Palazzo_Comunale(props) {
    return (
        <>
            <Head title="Palazzo Comunale"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='palazzo_comunale' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Palazzo Conumale</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il <strong>Palazzo Comunale</strong> di <b>Alba</b>, situato nella regione del <Link href='/piemonte' 
                            className='text-decoration-none color_link'>Piemonte</Link> in Italia, è uno degli edifici più rappresentativi della città. 
                            La sua storia è ricca e affonda le radici nel <b>medioevo</b>.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Origini e Costruzione</h2>
                        <p>
                            Il <strong>Palazzo Comunale</strong> di <b>Alba</b> ha origini molto antiche, risalenti al <b>XII secolo</b>, periodo in cui 
                            Alba era un libero <b>comune</b>. L'edificio venne eretto per ospitare il consiglio comunale e per fungere da centro delle 
                            attività politiche e amministrative della città. Inizialmente, il palazzo era più semplice rispetto alla struttura attuale e 
                            rifletteva le caratteristiche architettoniche del tempo.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Ampliamenti e Ristrurazioni</h2>
                        <p>
                            Nel corso del <b>XV secolo</b>, Alba conobbe un periodo di espansione economica e politica, che rese necessaria l'espansione 
                            del palazzo comunale. Venne aggiunta una nuova ala e furono realizzate modifiche strutturali per adeguare l'edificio alle 
                            nuove esigenze. Questi interventi conferirono al palazzo una maggiore imponenza e funzionalità.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Interventi del XVII e XVIII secolo</h2>
                        <p>
                            Durante il <b>XVII</b> e il <b>XVIII secolo</b>, il palazzo fu oggetto di ulteriori <b>ristrutturazioni</b> e <b>ammodernamenti</b>. 
                            Vennero introdotti elementi architettonici in stile <b>barocco</b> e <b>neoclassico</b>, come decorazioni elaborate, stucchi 
                            e affreschi. Questi interventi riflettevano il gusto estetico dell'epoca e contribuirono a rendere il palazzo un simbolo di 
                            prestigio e potere.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Architettura e Decorazioni</h2>
                        <p>
                            La facciata del palazzo presenta un'architettura imponente con un grande <b>portico</b> e <b>finestre</b> in stile gotico e 
                            rinascimentale. L'ingresso principale è decorato con elementi scultorei che raffigurano simboli della città e dello stato. 
                            All'interno, il palazzo è arricchito da <b>affreschi</b> e <b>stucchi</b> realizzati da artisti locali e non, che decorano 
                            le pareti e i soffitti delle sale principali. Queste opere d'arte rappresentano scene storiche, allegorie e motivi decorativi 
                            tipici del periodo.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Funzione Attuale</h2>
                        <p>
                            Attualmente, il <strong>Palazzo Comunale</strong> continua a essere il cuore amministrativo della città di <b>Alba</b>. 
                            Ospita gli uffici del <b>sindaco</b>, del <b>consiglio comunale</b> e di altre figure amministrative cruciali. Inoltre, il 
                            palazzo è sede di eventi culturali, mostre e manifestazioni che celebrano la storia e la cultura della città. La sala 
                            consiliare, in particolare, è un luogo di grande rilevanza, dove si svolgono le riunioni del consiglio comunale e altre cerimonie 
                            ufficiali.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Significato Storico e Culturale</h2>
                        <p>
                            Il Palazzo Comunale di Alba rappresenta un importante simbolo della <b>storia</b> e della <b>cultura</b> della città. La sua 
                            lunga e complessa storia riflette le vicende politiche, economiche e sociali che hanno caratterizzato Alba nel corso dei secoli. 
                            Come sede del governo locale, il palazzo ha svolto un ruolo cruciale nella gestione e nello sviluppo della città, diventando un 
                            punto di riferimento per la comunità. Oggi, il palazzo non è solo un edificio amministrativo, ma anche un luogo di memoria storica 
                            e di identità culturale per gli abitanti di Alba.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Eventi e Celebrazioni</h2>
                        <p>
                            Il Palazzo Comunale è anche il centro di numerose <b>celebrazioni</b> ed eventi pubblici. Durante l'anno, ospita manifestazioni 
                            culturali come concerti, mostre d'arte e convegni. Questi eventi contribuiscono a mantenere vivo il legame tra il palazzo e la 
                            comunità locale, oltre a promuovere la conoscenza della storia e della cultura della città tra i visitatori.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Conservazione e Restauri</h2>
                        <p>
                            Nel corso degli anni, il Palazzo Comunale ha beneficiato di vari interventi di <b>restauro</b> e <b>conservazione</b> volti a 
                            preservarne l'integrità storica e architettonica. Questi lavori sono stati fondamentali per mantenere l'edificio in buone 
                            condizioni e per garantire che possa continuare a svolgere la sua funzione per le generazioni future.
                        </p>
                        <p>
                            In conclusione, il <strong>Palazzo Comunale</strong> di <b>Alba</b> è un edificio di grande importanza storica, culturale e 
                            architettonica. La sua storia millenaria, le sue trasformazioni architettoniche e il suo ruolo continuo nella vita della 
                            città ne fanno un simbolo duraturo e prezioso per Alba e i suoi abitanti.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641.5890019477055!2d8.035329867315973!3d44.70091992424434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d2b342d45c5807%3A0x850833188cf4a9b1!2sComune%20di%20Alba!5e1!3m2!1sit!2sit!4v1722947047889!5m2!1sit!2sit"
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
