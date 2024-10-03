import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';
import { Carousel } from 'react-bootstrap';
import AscensoreSpianataCastelletto1 from '../../../../assets/Liguria/Ascensore_Spianata_Castelletto_Genova_Liguria.jpg';
import AscensoreSpianataCastelletto2 from '../../../../assets/Liguria/Ascensore_Spianata_Castelletto_Genova_Liguria1.jpg';
import AscensoreSpianataCastelletto3 from '../../../../assets/Liguria/Ascensore_Spianata_Castelletto_Genova_Liguria2.jpg';
import AscensoreSpianataCastelletto4 from '../../../../assets/Liguria/Ascensore_Spianata_Castelletto_Genova_Liguria3.jpg';
import AscensoreSpianataCastelletto5 from '../../../../assets/Liguria/Ascensore_Spianata_Castelletto_Genova_Liguria4.jpg';
import AscensoreSpianataCastelletto6 from '../../../../assets/Liguria/Ascensore_Spianata_Castelletto_Genova_Liguria5.jpg';
import AscensoreSpianataCastelletto7 from '../../../../assets/Liguria/Ascensore_Spianata_Castelletto_Genova_Liguria6.jpg';
import AscensoreSpianataCastelletto8 from '../../../../assets/Liguria/Ascensore_Spianata_Castelletto_Genova_Liguria7.jpg';


export default function Ascensore_Spianata_Castelletto(props) {
  return (
    <>
        <Head title="Ascensore Spianata Castelletto"/>
        <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
            <main>
                <div className='ascensore_del_castelletto' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>L'Ascensore Spianata Castelletto</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        <b>Suggestiva “terrazza” sospesa sul Centro Storico</b> con <b>vista spettacolare sulla città e sul porto</b>. Emozionante 
                        salirci con l'<b>ascensore liberty</b>.
                    </p>
                    <p className='text-center'>
                        <i>"Quando mi sarò deciso<br/>
                        d'andarci in paradiso<br/>
                        ci andrò con l'ascensore<br/>
                        di Castelletto…"</i><br/>
                        (Giorgio Caproni, da “L'ascensore”)
                    </p>
                    <p>
                        Da qui si possono ammirare <b>i tetti  delle vecchie case in ardesia</b>, materiale tipico in questa zona,  torri medievali 
                        e cupole barocche; in lontananza il mare animato da <b>navi moderne e da memorie antiche</b>.
                    </p>
                    <p>
                        Come quinte, le <b>alture della città punteggiate da parchi, ville, santuari e coronate da fortezze</b>.
                    </p>
                    <p>
                        Fino al <b>1849</b>, al posto di questo magnifico belvedere, affacciato sulla città, c'era la <b>fortezza di Castelletto</b>, 
                        che venne appunto spianata, a furor di popolo, dato che poteva costituire una temibile minaccia, in caso di occupazione nemica, 
                        per la città sottostante.
                    </p>
                    <p>
                        Dal <b>1910</b>, quando le fotografie di <b>Alinari</b> ne diffusero la bellezza, la spianata/belvedere di Castelletto è entrata 
                        nell'elenco delle <b>meraviglie genovesi da non perdere</b>. Oltre che dalla panoramicissima <b>Circonvallazione a Monte</b> (tracciata 
                        nella seconda metà del XIX secolo, a mezza costa), la spianata è raggiungibile in <b>ascensore</b>. L'ascensore, che sale 
                        da <b>Piazza Portello</b> a due passi da <b>Strada Nuova</b>, conserva tutt'ora il fascino liberty dell'epoca in cui venne realizzato.
                    </p>
                    <p>
                        Per raggiungere la <b>splendida terrazza panoramica di Castelletto</b> potete anche salire su per le <b>creuze</b>, le caratteristiche 
                        strade pedonali mattonate, che un tempo erano le "tangenziali" che portavano i viaggiatori fuori Genova, proprio quelle cantate 
                        da <b>Fabrizio De Andrè</b>.<br/>
                        Da <b>via Garibaldi</b>, subito dopo <b>Palazzo Bianco</b>, parte <b>Salita San Francesco</b>, che poi diventa <b>Salita a Spianata 
                        Castelletto</b>: in pochi passi si verrà trasportati dal brusio della città al <b>silenzio di case colorate, piccoli giardini 
                        fioriti</b> e di alcuni punti perfetti per scattare <b>fotografie indimenticabili</b>. O semplicemente, come fanno da sempre i genovesi, 
                        per prendersi un attimo di relax e assaporare con calma un gustoso <b>gelato</b> o una <b>granita fatta a regola d'arte</b>. 
                    </p>
                </div>
                {/* Questo è il comado per fare il carosello */}
                <div className='margin d-flex align-items-center justify-content-center'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                src={AscensoreSpianataCastelletto1}
                                alt="Ascensore Spianata Castelletto"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={AscensoreSpianataCastelletto2}
                                alt="Ascensore Spianata Castelletto"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={AscensoreSpianataCastelletto3}
                                alt="Ascensore Spianata Castelletto"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={AscensoreSpianataCastelletto4}
                                alt="Ascensore Spianata Castelletto"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={AscensoreSpianataCastelletto5}
                                alt="Ascensore Spianata Castelletto"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={AscensoreSpianataCastelletto6}
                                alt="Ascensore Spianata Castelletto"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={AscensoreSpianataCastelletto7}
                                alt="Ascensore Spianata Castelletto"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={AscensoreSpianataCastelletto8}
                                alt="Ascensore Spianata Castelletto"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                
                
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1686.6050326530321!2d8.931498639278363!3d44.413202631235166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d343e431582e1d%3A0xc6203d1cc3e614c7!2sAscensore%20Castelletto%20Ponente!5e1!3m2!1sit!2sit!4v1712758717247!5m2!1sit!2sit"
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
