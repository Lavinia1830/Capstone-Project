import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Cattedrale_di_San_Lorenzo(props) {
    return (
        <>
            <Head title="Cattedrale di San Lorenzo"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='cattedrale_di_san_lorenzo' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Cattedrale di San Lorenzo</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La <strong>cattedrale di San Lorenzo</strong> è <b>il principale luogo di culto cattolico di Alba</b>, chiesa madre 
                            dell’omonima diocesi.<br/>
                            L’attuale <strong>Cattedrale di San Lorenzo</strong> fu costruita tra il 1486 e il 1517 per volere del <b>vescovo 
                            di Alba Andrea Novelli</b>: prendendo possesso della diocesi, nel 1483, aveva notato lo stato di forte degrado in 
                            cui versava la cattedrale e ne promosse la ricostruzione. Dell’antica chiesa, <b>già esistente nell’XI secolo</b>, 
                            furono mantenuti soltanto il campanile, i tre portali e il portico della facciata e la cripta; le altre parti, 
                            pericolanti, vennero abbattute.
                        </p>
                        <p>
                            Nel 1577 e nel 1584, la cattedrale ha ricevuto la visita apostolica del vescovo di Bergamo Gerolamo Regazzoni prima, 
                            poi dell’arcivescovo di Amalfi Giulio Rossino; entrambi indicarono degli interventi da fare necessariamente per 
                            adeguare la chiesa, ed in particolare il suo presbiterio, ai dettami del Concilio di Trento. Nel 1626, in seguito a 
                            due terremoti, <b>crolla la volta a crociera della navata centrale</b>, che viene sostituita nel 1652.
                        </p>
                        <p>
                            Nel corso dei secoli XVIII e XIX, la cattedrale fu oggetto di restauri di consolidamento e dotata di nuovi altari e 
                            cappelle, fra cui l’<b>altare dedicato a san Teobaldo</b> e quello del Santissimo Sacramento. Nel 1878 venne terminata 
                            la facciata e, nel 1870, al posto della monofora centrale, vi viene aperto un grande rosone circolare.
                        </p>
                        <p>
                            A partire dal 1871, viene realizzato, da diversi artisti, l’apparato decorativo ad affresco delle volte e delle pareti.
                        </p>
                        <p>
                            Tra il 2007 e il 2009, è stato realizzato il nuovo presbiterio ai piedi della scalinata che conduce a quello antico.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Esterni</h2>
                        <p>
                            L’imponente edificio <b>in stile gotico</b> è caratterizzato di mattoncini rossi del paramento murario. Prospetta sulla 
                            piazza con l’alta facciata a salienti, suddivisa in tre sezioni da pilastri a pianta quadrata in corrispondenza delle 
                            tre navate interne. Nella parte inferiore, la facciata presenta il pronao, con arcate a sesto acuto. Mentre nelle due 
                            sezioni laterali si aprono due monofore gotiche gemelle, in quella centrale vi è l’ampio rosone circolare, del 1870.
                        </p>
                        <p>
                            La facciata è decorata da quattro bassorilievi raffiguranti i simboli dei quattro evangelisti: da sinistra, l’<b>angelo 
                            di Matteo, il leone di Marco, il bue di Luca e l’aquila di Giovanni</b>. Al disotto del rosone, invece, vi è una statua 
                            di San Lorenzo Martire. Queste sculture, realizzate nel 1878, sono opera dello scultore milanese Luigi Cocchio.
                        </p>
                        <p>
                            Alla sinistra dell’abside, vi è l’alta torre campanaria, risalente al XIII secolo e modificata nel 1477. In essa si 
                            aprono quattro ordini di finestre: dal basso, un ordine di monofore, due ordini bifore e un ordine di quadrifore 
                            (soltanto le due aperture centrali, però, sono aperte). La copertura è tramite una cuspide in mattoni a pianta ottagonale.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Interno</h2>
                        <p>
                            L’interno della chiesa è scandito in tre <b>alte navate di quattro campate</b> ciascuna, con profondo transetto in 
                            corrispondenza della quarta campata. Le navate, coperte con volta a <b>crociera dipinta a cielo stellato</b>, sono 
                            suddivise da arcate a sesto acuto poggianti su pilastri polistili bicromatici.
                        </p>
                        <p>
                            Lungo le navate laterali, si aprono sei cappelle, tre per lato. Tra queste, la prima a sinistra è il battistero, con 
                            fonte battesimale in marmo scuro di recente costruzione (2007). <br/>
                            Fra le opere più importanti custodite nella chiesa, vi è la Lastra tombale del vescovo Andrea Novelli, opera dello 
                            scultore Antonio Carloni. Dello stesso autore è l’altare di San Teobaldo, realizzato tra il 1514 e il 1517. Questo è 
                            costituito dall’altare propriamente detto, da una predella, dalla pala e dalla cimasa.
                        </p>
                        <p>
                            Nella terza campata della navata centrale, ai piedi della scalinata che conduce al presbiterio tridentino, rialzato 
                            rispetto al resto della chiesa per la presenza della sottostante cripta, vi è il nuovo presbiterio, realizzato fra 
                            il 2007 e il 2009 per volere dell’allora vescovo di Alba Sebastiano Dho. In stile moderno, è costituito dall’altare 
                            a pianta quadrata, affiancato a sinistra dall’ambone e e a destra dalla nuova cattedra.
                        </p>
                        <p>
                            Nell’abside maggiore, ai lati dell’altare barocco, vi sono gli stalli lignei del coro, del XVI secolo, in totale 34. 
                            Sulla sinistra, la coeva cattedra vescovile con baldacchino.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d677.4130497116923!2d8.194450937292878!3d44.89876204699224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787932fb98ddd1d%3A0x8840cc7be2f0001!2sCattedrale%20di%20Asti!5e1!3m2!1sit!2sit!4v1720621604181!5m2!1sit!2sit"
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
