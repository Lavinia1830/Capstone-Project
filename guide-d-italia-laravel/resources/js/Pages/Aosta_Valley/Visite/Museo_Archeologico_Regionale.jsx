import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Museo_Archeologico_Regionale(props) {
    return (
        <>
            <Head title="Museo Archeologico Regionale"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='museo_archeologico_regionale' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo Archeologico Regionale di Aosta</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Nella prima sala, dedicata al tema del collezionismo e alla memoria del canonico Justin Boson, primo direttore del Regio Museo nel 1929, sono esposte alcune formelle e lucerne nord-africane oltre ad alcune tavolette sumere appartenenti al gruppo dei testi economici della III 
                            Dinastia di Ur (2100-2000 a.C. circa).<br/>
                            Sulla suggestione degli assi commerciali e culturali dall’area mesopotamica e anatolica e della trasmissione di modelli di monumenti megalitici, trovano collocazione alcune delle <i>stele antropomorfe</i> ritrovate ad Aosta nello straordinario sito archeologico di 
                            Saint-Martin-de-Corléans; nelle vetrine sono esposti reperti rinvenuti in Valle d’Aosta che vanno dal Mesolitico fino all’epoca dei Salassi.
                        </p>
                        <p>
                            Proseguendo nella visita inizia il lungo momento consacrato alla romanizzazione che prende le mosse dal plastico di <i>Augusta Prætoria</i> e dal miliario costantiniano posto lungo la via delle Gallie.<br/>
                            Seguono le due sale dedicate ai rituali funerari dove sono presentati alcuni corredi rinvenuti all’interno delle tombe, oltre alla ricostruzione del letto funerario della necropoli di San Rocco situata all’ingresso orientale della città romana. Gli spazi dedicati all’epigrafia 
                            funeraria e ai culti della regione espongono vari reperti su cui spiccano il noto <i>Balteo bronzeo</i> con scene di battaglia tra Barbari e Romani e il <b>busto di Giove Graio</b> in argento sbalzato, rinvenuto sul Colle del Piccolo San Bernardo, associato a un ricco corredo 
                            rituale. L’edilizia pubblica è rappresentata sia da una raccolta di stampe con i principali monumenti aostani, sia da frammenti scultorei e porzioni di affreschi, mentre la vita quotidiana è presentata attraverso le suppellettili da tavola e da cottura allestite attorno alla 
                            ricostruzione di un <i>thermopolium</i> (locale pubblico dove si servivano vivande e bevande) di modello pompeiano. L’esposizione sulla romanità si conclude con reperti relativi agli ornamenti personali, al lusso e al benessere.
                        </p>
                        <p>
                            L’epoca cristiano-medievale trova espressione nella piccola sala che chiude il percorso con l’esposizione dell’ambone dell’VIII secolo, rinvenuto negli scavi della Cattedrale di Aosta, e alcuni corredi funerari, dal IV al XIV secolo, tra cui i bicchieri decorati in oro con 
                            teoria di Santi e la spada di cavaliere con speroni proveniente da Sant’Orso.
                        </p>
                        <p>
                            Nei sotterranei del Museo Archeologico Regionale sono conservati i resti dello spigolo sud-ovest della torre orientale della <i>Porta Principalis Sinistra</i>, una delle quattro porte urbiche di <i>Augusta Prætoria</i>, con i piani d’uso romani e l’unico tratto di terrapieno, 
                            con relativo muro di controscarpa, ancora addossato ad un tratto delle mura romane.
                        </p>
                        <p>
                            Il Museo ospita inoltre la prestigiosa <b>collezione numismatica “Pautasso”</b>, esposizione di monete dall’età greca fino al periodo sabaudo. Importante il nucleo delle monete celtiche, galliche e padane.
                        </p>
                        <p>
                            La sala della <b>Collezione Carugo</b> ospita reperti della civiltà etrusca, dell’antico Egitto e della Mesopotamia.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d778.5762165492692!2d7.31543910242506!3d45.738606920443985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920b705e2dc8d%3A0xc6d0c65824987871!2sMuseo%20Archeologico%20Regionale!5e1!3m2!1sit!2sit!4v1713860720269!5m2!1sit!2sit"
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
