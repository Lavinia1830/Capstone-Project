import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';
import { Carousel } from 'react-bootstrap';
import PortoanticoGenova1 from '../../../../assets/Liguria/Porto_antico_Genova_Liguria.jpg';
import PortoanticoGenova2 from '../../../../assets/Liguria/Porto_antico_Genova_Liguria1.jpg';
import PortoanticoGenova3 from '../../../../assets/Liguria/Porto_antico_Genova_Liguria2.jpg';
import PortoanticoGenova4 from '../../../../assets/Liguria/Porto_antico_Genova_Liguria3.jpg';
import PortoanticoGenova5 from '../../../../assets/Liguria/Porto_antico_Genova_Liguria4.jpg';
import PortoanticoGenova6 from '../../../../assets/Liguria/Porto_antico_Genova_Liguria5.jpg';
import PortoanticoGenova7 from '../../../../assets/Liguria/Porto_antico_Genova_Liguria6.jpg';
import PortoanticoGenova8 from '../../../../assets/Liguria/Porto_antico_Genova_Liguria7.jpg';
import PortoanticoGenova9 from '../../../../assets/Liguria/Porto_antico_Genova_Liguria8.jpg';
import PortoanticoGenova10 from '../../../../assets/Liguria/Porto_antico_Genova_Liguria9.jpg';


export default function Porto_Antico_di_Genova(props) {
  return (
    <>
        <Head title='Ponte Antico di Genova'/>
        <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
            <main>
                <div className='porto_antico_di_genova' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Porto antico di Genova</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Un’antica piazza marittima da vivere ancora oggi</h2>
                    <p>
                        <b>Antica zona portuale</b> riprogettata da <b>Renzo Piano nel 1992</b>, in occasione delle celebrazioni del <b>cinquecentenario della scoperta dell'America</b>, 
                        è divenuta oggi centro turistico della città dove è possibile <b>prendere l’aperitivo, cenare, fare shopping, guardare un film, pattinare su ghiaccio o tuffarsi 
                        in piscina</b>.
                    </p>
                    <p>
                        Arrivando in fondo al molo dove sono ubicati i <b>Magazzini del Cotone</b>, a un passo dalla Lanterna, <b>Genova e il suo Golfo</b> si lasciano ammirare in tutta 
                        la loro bellezza. <b>Le colline</b> fanno da sfondo a questo suggestivo panorama, colorate di giorno e illuminate di sera.
                    </p>
                    <p>
                        Oltre all’<b>Acquario</b>, altre attrazioni dell’area sono: l’<b>ascensore panoramico Bigo</b> (che riprende nella forma e nel nome le antiche gru da carico 
                        manuali), la <b>Biosfera</b> e la <b>Città dei Bambini e dei ragazzi</b>, museo ludico e interattivo per bambini tra i 2 e i 12 anni.
                    </p>
                    <p>
                        Gli spazi del <b>Porto Antico</b> sono diventati la <b>cittadella dell’intrattenimento e del tempo libero</b>, per i genovesi e per i turisti, e l’area 
                        è <b>ricca di eventi in estate e durante tutto l’anno</b>.
                    </p>
                    <p>
                        <b>L'Arena del Mare</b> e la <b>Piazza delle Feste</b>, che d’inverno si trasforma in pista per il pattinaggio su ghiaccio, ospitano <b>concerti di importanti 
                        artisti italiani ed internazionali, rassegne, festival</b> dedicati a tutte le espressioni della cultura e dell’arte, <b>cinema e spettacoli di ogni genere</b>, 
                        che riempiono di luci e suoni le serate genovesi.<br/>
                        I <b>Magazzini del Cotone</b> rappresentano inoltre un’eccezionale opportunità per <b>convegni, congressi e seminari di livello internazionale</b>.
                    </p>
                </div>
                {/* Questo è il comado per fare il carosello */}
                <div className='margin d-flex align-items-center justify-content-center'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                src={PortoanticoGenova1}
                                alt="Ascensore Spianata Castelletto"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={PortoanticoGenova2}
                                alt="Ascensore Spianata Castelletto"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={PortoanticoGenova3}
                                alt="Ascensore Spianata Castelletto"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={PortoanticoGenova4}
                                alt="Ascensore Spianata Castelletto"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={PortoanticoGenova5}
                                alt="Ascensore Spianata Castelletto"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={PortoanticoGenova6}
                                alt="Ascensore Spianata Castelletto"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={PortoanticoGenova7}
                                alt="Ascensore Spianata Castelletto"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={PortoanticoGenova8}
                                alt="Ascensore Spianata Castelletto"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={PortoanticoGenova9}
                                alt="Ascensore Spianata Castelletto"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={PortoanticoGenova10}
                                alt="Ascensore Spianata Castelletto"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6746.778335999264!2d8.922398889935302!3d44.41009743042567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d343e0e3211487%3A0xe71059f89344b7f4!2sPorto%20Antico%2C%20Genova%20GE!5e1!3m2!1sit!2sit!4v1712759359758!5m2!1sit!2sit"
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
