import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Grappa_Valdostana(props) {

    const [isHoveredAosta, setIsHoveredAosta] = useState(false);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='grappa_valdostana' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Grappa Valdostana</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Enogastronomia</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        La <Link href='/valle_d_aosta' className='text-decoration-none color_link'>Valle d’Aosta</Link>, la più piccola regione d'Italia costellata dalle più alte vette delle Alpi come il Cervino, il Monte Rosa, il Gran Paradiso e sua maestà 
                        il <Link href='/montagna/valle_d_aosta/monte_bianco' className='text-decoration-none color_link'>Monte Bianco</Link>, ha una <b>grande tradizione nella distillazione di grappe</b>.
                    </p>
                    <p>
                        <b>Ideale digestivo dopo i ricchi pasti</b> a base di specialità locali, la <b>grappa della Val d’Aosta</b> si distingue per qualità nella produzione e gusto sopraffino.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Una produzione artigianale</h2>
                    <p>
                        Ma come mai la <b>grappa valdostana</b> è così buona? Il clima autunnale fresco e le vendemmie tardive favoriscono la conservazione delle vinacce.
                    </p>
                    <p>
                        Le grappe possono essere bianche, invecchiate in botti di rovere oppure, come accade spesso nelle case dei valdostani, aromatizzate con erbe, frutti, miele e spezie.
                    </p>
                    <p>
                        Dal profumo sottile e dal gusto secco, la procedura di realizzazione della grappa assomiglia a un rituale ed è legata a una tradizione familiare tramandata di generazione in generazione così come lo sono gli strumenti del mestiere, 
                        spesso antichissimi.<br/>
                        Una particolare regolamentazione regionale autorizza infatti, entro certi limiti, anche la <b>distillazione delle vinacce per il consumo familiare</b>. A questo si aggiunge anche la <b>produzione aziendale</b>, che ha permesso 
                        l’ampliamento della gamma pur continuando a rispettare i metodi d’antan che conferiscono al distillato un sapore e una genuinità unici nel genere.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Da Saint-Marcel a Quart: ognuno fa a modo suo</h2>
                    <p>
                        La piccola distilleria di montagna <b>La Valdôtaine di Saint-Marcel</b>, ad esempio, utilizza antichi alambicchi in rame lavorato a mano e dal respiro discontinuo per distillare piccole quantità di spiriti unici, resi inimitabili 
                        dalle acque ricche di minerali della sorgente Acqueverdi che dai monti precipitano a valle fino alla distilleria.
                    </p>
                    <p>
                        A Saint-Vincent trovate anche la <b>Distilleria Cortese</b>, famosa per le sue grappe delicate al palato.
                    </p>
                    <p>
                        La distilleria <b>Alpe di Hône</b>, nella bassa Valle d'Aosta, produce invece l'omonima grappa col giusto equilibrio tra l’aroma intenso e il gusto morbido e la <i>Grappa Gran Riserva</i> invecchiata lungamente in piccole botti di 
                        rovere di slavonia.
                    </p>
                    <p>
                        Le <b>distillerie Saint Roch di Quart</b>, nel cuore della regione, producono la storica <i>Grappa St. Orso</i> che prende il nome dal grande santo e dal famoso antico borgo di <Link href='/destinazioni/valle_d_aosta/aosta' 
                        className='text-decoration-none color_link'>Aosta</Link> che ospita l’omonima chiesa. Questa grappa richiama i profumi della tradizione, la dolcezza dell’uva valdostana e gli aromi dei paesaggi di montagna.<br/>
                        Le distillerie sono aperte al pubblico dal lunedì al venerdì dalle 08.30 alle 12.00 e dalle 13.30 alle 17.30, un’occasione per scoprire tutti i segreti dei famosi distillati e visitare l’antico <b>Borgo di Sant’Orso</b>.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Grappa_Valdostana'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/valle_d_aosta/aosta'
                            onMouseEnter={() => setIsHoveredAosta(true)}
                            onMouseLeave={() => setIsHoveredAosta(false)}
                            >Aosta {isHoveredAosta && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
