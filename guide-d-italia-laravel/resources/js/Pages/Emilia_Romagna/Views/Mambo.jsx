import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Mambo(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='mambo' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>MAMbo - Museo d'Arte Moderna di Bologna</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Il <strong>MAMbo è il Museo d’Arte Moderna di Bologna</strong>.<br/>
                        Con i suoi 9.500 mq dedicati alla cultura visiva e alla sperimentazione, la sede dell'ex forno del pane si qualifica come centro di produzione e  laboratorio critico della cultura contemporanea interdisciplinare.
                    </p>
                    <p>
                        Il museo <strong>MAMbo</strong> fa parte del circuito della Bologna Welcome Card. Per i possessori della Card l'accesso è gratuito. 
                    </p>
                    <p>
                        La Collezione Permanente del museo ripercorre la storia dell'arte italiana dal secondo dopoguerra a oggi vista attraverso l'esperienza dell'ex Galleria d'Arte Moderna di Bologna. <br/>
                        Attraverso un costante incremento del patrimonio garantito da restauri, nuove acquisizioni, donazioni e prestiti in comodato, la Collezione continua ad essere oggetto di ricerca e rinnovamento. <br/>
                        Da ottobre 2012 il percorso espositivo si articola in nove aree tematiche che documentano alcuni tra gli aspetti più innovativi della pratica artistica dalla seconda metà del Novecento fino a oggi: Arte e ideologia; 1977 – Arte e Azione; 1968. I – Nuove Prospettive; 1968. II - Arte Povera e dintorni; 
                        Forma 1; L'Informale; Arcangeli, l'Ultimo Naturalismo; Focus on Contemporary Italian Art e Nuove acquisizioni.
                    </p>
                    <p>
                        Il <strong>MAMbo</strong> è la sede principale dell'Istituzione Galleria d'Arte Moderna di Bologna, che comprende anche Museo Morandi e Casa Morandi, Museo per la Memoria di Ustica, Villa delle Rose e Residenza per artisti Sandra Natali. <br/>
                        Da novembre 2012 la sede di MAMBO ospita temporaneamente anche le collezioni del Museo Morandi. Il nuovo progetto espositivo analizza i temi e le stagioni che hanno caratterizzato l'attività di Giorgio Morandi e offre una rilettura del suo percorso anche attraverso i lavori di autori contemporanei che, 
                        in un inedito dialogo, enfatizzano l'importanza e la straordinaria attualità della sua ricerca.
                    </p>
                    <p>
                        Il museo dedica a importanti artisti italiani e internazionali ampie mostre monografiche, in una prospettiva aperta alla ricerca e alla dialettica tra le opere e il contesto espositivo. <br/>
                        La sua attività ha inaugurato il 5 maggio 2007 con “Vertigo. Il secolo di arte off-media dal Futurismo al web”, a cura di Germano Celant con Gianfranco Maraniello: una mostra di metodo che ha inteso documentare gli sconfinamenti e le contaminazioni stilistiche e tecnologiche dalle avanguardie storiche 
                        ai giorni nostri. <br/>
                        Significative esposizioni hanno fatto seguito all’apertura, si pensi a quelle dedicate a Luigi Ontani, Jeroen de Rijke e Willem de Rooij, Giuseppe Penone, Giorgio Morandi (coprodotta con il Metropolitan Museum of Art di New York), Trisha Donnelly, Sarah Morris e Seth Price, Gilberto Zorio, Matthew Day 
                        Jackson, Marcel Broodthaers, Plamen Dejanoff.
                    </p>
                    <p>
                        <strong>MAMbo</strong> è introduzione e didattica alle pratiche culturali più aggiornate: il Dipartimento educativo del museo ha l’obiettivo di avvicinare i visitatori di ogni genere ed età alle forme espressive del nostro tempo, dando strumenti adeguati per la loro comprensione. <br/>
                        Il Museo d’Arte Moderna di Bologna collabora con istituzioni culturali e accademiche al fine di promuovere occasioni di riflessione che coinvolgono pubblico e studiosi, stimolando il dibattito sulla cultura del presente.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1416.0845954553895!2d11.335473903755492!3d44.502838491900576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd359fa9629ab%3A0xd59cdea5c6b9111c!2sMAMbo%20-%20Museo%20d&#39;Arte%20Moderna%20di%20Bologna!5e1!3m2!1sit!2sit!4v1712999915452!5m2!1sit!2sit"
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
