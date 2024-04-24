import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Specialità_Tipiche_Valdostane(props) {

    const [isHoveredAosta, setIsHoveredAosta] = useState(false);
    const [isHoveredCourmayeur, setIsHoveredCourmayeur] = useState(false);
    const [isHoveredMonteBianco, setIsHoveredMonteBianco] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='specialità_tipiche_valdostane' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Specialità Tipiche Valdostane</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Enogastronomia</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Siete arrivati in questo paradiso terrestre? Mettetevi comodi e studiate la <b>carta dei formaggi</b>, con la <b>fontina</b> in primis, regina dei <Link href='/enogastronomia/valle_d_aosta/prodotti_tipici_valdostani' className='text-decoration-none color_link'>prodotti 
                        valdostani</Link>. La riconoscete per il sapore dolce e per il colore giallo paglierino, più chiaro nelle forme prodotte in inverno, quando le mucche sono alimentate con il fieno, più intenso nella produzione estiva
                    </p>
                    <p>
                        Seguono prelibatezze, come la <b>toma di Gressoney</b>, il <b>salignon</b>, il <b>reblec</b>, la <b>brossa</b>, il <b>seras</b> e i <b>formaggi di capra</b>, ciascuno con una storia da raccontare. Ascoltateli e gustateli tutti.
                    </p>
                    <p>
                        Passate a classici come le <b>costolette alla valdostana</b>, la <b>polenta concia</b> e la “<b>soupe valpellineintze</b>” (zuppa alla valpellinese); ottima anche la <b>cacciagione</b>, i <b>camosci in salmì</b> (in “civet”), le <b>trote</b>, 
                        la “<b>carbonade</b>”, spezzatino di manzo, e la <b>fonduta</b>, piatto unico a base di formaggio, fuso in un’apposita pentola, per essere mangiato caldo.
                    </p>
                    <p>
                        Gustate gli insaccati, come il <b>Vallee d’Aoste jambon de Bosses</b>, prosciutto dalla speciale maturazione, i <b>Boudin</b> dal gusto raffinato, la <b>Saouseusse</b>, carne trita stagionata, il <b>Lard d’Arnad</b>, morbido lardo, il <b>Teuteun</b>, 
                        mammella bovina salmistrata, la <b>Motzetta</b>, aromatica carne essiccata.
                    </p>
                    <p>
                        Il microclima alpino è la gioia delle <b>mele</b>, che qui sviluppano sapori intesi. Assaggiate la <b>Red</b> e la <b>Gold delicious</b>, la <b>Jonagold</b> e la <b>Renetta</b>: crude o cotte, sono dolci e versatili, base di frullati, marmellate 
                        dolci o salate, da accompagnare a pregiate pietanze.
                    </p>
                    <p>
                        Dulcis in fundo, i dessert e i vini. Per i primi, assaggiate le <b>tegole</b>, i <b>torcettini</b> – tipici biscotti regionali - e il <b>blanc manger alla valdostana</b> con l’utilizzo di panna; per i secondi, posto d’onore a tutti, come i <b>bianchi 
                        Muller-Thurgau</b> e <b>Pinot nero</b> (vinificato in bianco) e i <b>rossi Pinot nero</b>, <b>Gamay</b>, <b>Torrette</b>, <b>Nus Rouge</b>.
                    </p>
                    <p>
                        Mangiato troppo? Ecco un bicchierino di <b>Genepì</b>, digestivo a base di erbe alpine, le artemisie. 
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Percorsi di rilievo con il caffè Valdostano</h2>
                    <p>
                        Vi proponiamo un itinerario tra <b>Chatillon</b>, <b>Fenìs</b>, <Link href='/destinazioni/valle_d_aosta/aosta' className='text-decoration-none color_link'>Aosta</Link> e <Link href='/destinazioni/valle_d_aosta/courmayeur' 
                        className='text-decoration-none color_link'>Courmayeur</Link>, verso il <Link href='/montagna/valle_d_aosta/monte_bianco' className='text-decoration-none color_link'>Monte Bianco</Link> e i suoi paesaggi di boschi, villaggi e rocce.
                    </p>
                    <p>
                        <b>Chatillon</b> è il paradiso del <b>miele</b>, da gustare in numerose varietà, dall’<b>acacia</b> alla <b>castagna</b>, dalla <b>melata di bosco</b> al <b>millefiori di montagna</b>, dal <b>rododendro</b> al <b>tarassaco</b> e al <b>tiglio</b>. Non 
                        perdetevi il pane alla panna acida e miele.
                    </p>
                    <p>
                        A <b>Fenìs</b>, a 10 chilometri di distanza, vi attendono il <b>capriolo alla valdostana</b>, la tipica fonduta, le <b>pappardelle al sugo di coniglio</b>, zuppe saporite con le verdure di stagione.
                    </p>
                    <p>
                        In altri 6 chilometri circa siete ad <b>Aosta</b>, capoluogo regionale, dove gustate, tra gli altri piatti, la <b>pèilà</b>, a base di farina di segale e di frumento, la <b>zuppa di castagne</b> e la <b>zuppa alla valpellinese</b>, con pane nero, 
                        fontina e verza.
                    </p>
                    <p>
                        Mentre salite verso <b>Courmayeur</b>, rimanete estasiati dai <b>vigneti</b> che salgono fino a 1000 metri di altitudine, producendo il <b>Blanc de Morgex et de La Salle</b>.
                    </p>
                    <p>
                        L’aria pura e l’acqua incontaminata di Courmayeur, a 1224 metri, conferiscono il sapore deciso a <b>salumi</b>, <b>carni</b>, <b>formaggi</b> e a <b>vini d’alta quota</b>. Ve ne accorgete gustando la fontina, il <b>Fromadzo</b> (formaggio vaccino 
                        a pasta semidura dalla lunga tradizione) o il <b>Lard d’Arnad</b>, celebre lardo locale.
                    </p>
                    <p>
                        Da qui, la cima del Monte Bianco è a 9 chilometri in linea d’aria: è giunto il momento di riscaldarvi con il <b>caffè valdostano</b> che si prepara in un basso recipiente di legno, tondo, con quattro, sei o otto beccucci attorno all’apertura centrale, 
                        da riempire di caffè bollente con scorza di limone e una generosa quantità di <Link href='/enogastronomia/valle_d_aosta/grappa_valdostana' className='text-decoration-none color_link'>grappa</Link>. E mentre il liquido si riscalda sul fuoco, si aggiunge una buona dose di 
                        zucchero. 
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Specitalità_Tipiche_Valdostane'>
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
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Specitalità_Tipiche_Valdostane'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/valle_d_aosta/courmayeur'
                            onMouseEnter={() => setIsHoveredCourmayeur(true)}
                            onMouseLeave={() => setIsHoveredCourmayeur(false)}
                            >Courmayeur {isHoveredCourmayeur && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Specitalità_Tipiche_Valdostane'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/montagna/valle_d_aosta/monte_bianco'
                            onMouseEnter={() => setIsHoveredMonteBianco(true)}
                            onMouseLeave={() => setIsHoveredMonteBianco(false)}
                            >Monte Bianco {isHoveredMonteBianco && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Piatti tipici</h2>
                    <h3 className="color-subtitle">La polenta concia</h3>
                    <p>
                        Un piatto rustico dal sapore robusto, ideale per scaldarvi nelle fredde giornate invernali, che sintetizza gli antichi prodotti della regione. La polenta concia valdostana è più cremosa delle sue cugine classiche, merito dell’aggiunta di formaggi 
                        fusi come la fontina o la toma. 
                    </p>
                    <h3 className="color-subtitle">Civet di camoscio</h3>
                    <p>
                        Siete davanti a uno dei piatti più amati della cucina tipica della Valle d’Aosta; quindi, è bene che sappiate che la parola civet indica una sorta di ragù preparato con cipolla, altre verdure e vino rosso. La sua preparazione è piuttosto lunga ed 
                        elaborata, ma il gusto vale l’impegno e l’attesa.
                    </p>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
