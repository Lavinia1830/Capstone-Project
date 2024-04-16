import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function L_Aquila(props) {

    const [isHoveredAnfiteatroRomanoAmiternum, setIsHoveredAnfiteatroRomanoAmiternum] = useState(false);
    const [isHoveredBasilicadiSanBernardino, setIsHoveredBasilicadiSanBernardino] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='l_aquila' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>L'Aquila</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Il diamante dell’altopiano abruzzese</h2>
                    <p>
                        <strong>L’Aquila</strong> saprà conquistarvi con il suo ricchissimo patrimonio storico e architettonico.
                    </p>
                    <p>
                        Passeggiando per il centro storico, vi ritroverete nel cuore di un altopiano su cui sorge la città. Percorrete le due strade principali, Corso Vittorio Emanuele II e Corso Umberto I, che si incrociano perpendicolarmente e si incontrano ai Quattro Cantoni. 
                        Spostatevi poi in <Link href='/visite/abruzzo/l_aquila/piazza_del_duomo' className='text-decoration-none color_link'>Piazza del Duomo</Link>, nota anche come Piazza del Mercato. Qui sorge la <Link href='/visite/abrzzo/l_aquila' 
                        className='text-decoration-none color_link'>Cattedrale dei Santi Giorgio e Massimo</Link>, dalla facciata in stile neoclassico e arricchita da tre stemmi, gravemente danneggiata dal terremoto del 2009, è attualmente inagibile.
                    </p>
                    <p>
                        I lavori di ricostruzione e restauro del duomo sono iniziati il 27 febbraio 2023. Nella stessa Piazza sorge anche la <Link href='/visite/abruzzo/l_aquila/chiesa_santa_maria_del_suffragio' className='text-decoration-none color_link'>Chiesa Santa Maria del 
                        Suffragio</Link> , con la cupola neoclassica di oltre 35 metri e la facciata tardo-barocca. Anche questa chiesa è rimasta gravemente danneggiata dal terremoto del 2009 ed è sottoposta a lavori di restauro e consolidamento.
                    </p>
                    <p>
                        Nel quartiere Rivera fermatevi a fare qualche foto alla <Link href='/visite/abruzzo/l_aquila/fontana_delle_99_cannelle' className='text-decoration-none color_link'>Fontana delle 99 cannelle</Link>. Proprio questo numero è considerato il simbolo della città 
                        che, secondo la leggenda, sarebbe nata dall’unione degli abitanti di 99 castelli. Per questo, si dice che a L’Aquila ci siano 99 piazze, 99 chiese e 99 fontane.
                    </p>
                    <p>
                        Se capitate in città a fine estate, non perdetevi <b>La Perdonanza Celestiniana</b>, l’evento storico-religioso e mondano più importante della zona e ormai famoso in tutto il mondo. Il giorno clou è il 28 agosto, all’apertura della <b>Porta Santa della 
                        Basilica di Collemaggio</b>.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_L_Aquila'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/abruzzo/l_aquila/anfiteatro_romano_di_amiternum'
                            onMouseEnter={() => setIsHoveredAnfiteatroRomanoAmiternum(true)}
                            onMouseLeave={() => setIsHoveredAnfiteatroRomanoAmiternum(false)}
                            >Anfiteatro Romano di Amiternum {isHoveredAnfiteatroRomanoAmiternum && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_L_Aquila'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/abruzzo/l_aquila/basilica_di_san_bernardino'
                            onMouseEnter={() => setIsHoveredBasilicadiSanBernardino(true)}
                            onMouseLeave={() => setIsHoveredBasilicadiSanBernardino(false)}
                            >Basilica di San Bernardino {isHoveredBasilicadiSanBernardino && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
