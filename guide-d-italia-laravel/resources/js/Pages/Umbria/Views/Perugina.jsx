import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle } from 'react-bootstrap';
import Storia_perugina_fondazione_1907 from '../../../../assets/Umbria/Storia_perugina_fondazione_1907_Perugia_Umbria.jpg';
import Storia_perugina_1917_cacao from '../../../../assets/Umbria/Storia_perugina_1917_cacao_Perugia_Umbria.jpg';
import Storia_perugina_primo_negozio_1919 from '../../../../assets/Umbria/Storia_perugina_primo_negozio_1919_Perugia_Umbria.jpg';
import Storia_perugina_brevetto_tavoletta_luisa_1921 from '../../../../assets/Umbria/Storia_perugina_brevetto_tavoletta_luisa_1921_Perugia_Umbria.jpg';
import Storia_perugina_nascita_bacio_1922 from '../../../../assets/Umbria/Storia_perugina_nascita_bacio_1922_Perugia_Umbria.jpg';
import Storia_perugina_grande_assortimento_1923 from '../../../../assets/Umbria/Storia_perugina_grande_assortimento_1923_Perugia_Umbria.jpg';
import Storia_perugina_tre_re_dimmi_di_si_1924 from '../../../../assets/Umbria/Storia_perugina_tre_re_dimmi_di_si_1924_Perugia_Umbria.jpg';
import Storia_perugina_cioccolatino_liu_1939 from '../../../../assets/Umbria/Storia_perugina_cioccolatino_liu_1939_Perugia_Umbria.jpg';
import Storia_perugina_banane_1925 from '../../../../assets/Umbria/Storia_perugina_banane_1925_Perugia_Umbria.jpg';
import Storia_perugina_sponsorizza_quattro_moschettieri_1934 from '../../../../assets/Umbria/Storia_perugina_sponsorizza_quattro_moschettieri_1934_Perugia_Umbria.jpg';
import Storia_perugina_cioccolato_mercato_massa_1955 from '../../../../assets/Umbria/Storia_perugina_cioccolato_mercato_massa_1955_Perugia_Umbria.jpg';
import I_Baci_sono_parole_1957 from '../../../../assets/Umbria/I_Baci_sono_parole_1957_Perugia_Umbria.jpg';
import Storia_perugina_nuovi_prodotti_1965 from '../../../../assets/Umbria/Storia_perugina_nuovi_prodotti_1965_Perugia_Umbria.jpg';
import Storia_perugina_tubo_baci_1981 from '../../../../assets/Umbria/Storia_perugina_tubo_baci_1981_Perugia_Umbria.jpg';
import Storia_perugina_nestle_1988 from '../../../../assets/Umbria/Storia_perugina_nestle_1988_Perugia_Umbria.jpg';
import Casa_del_Cioccolato_1997 from '../../../../assets/Umbria/Casa_del_Cioccolato_1997_Perugia_Umbria.jpg';
import Storia_perugina_nero_2005 from '../../../../assets/Umbria/Storia_perugina_nero_2005_Perugia_Umbria.jpg';
import Casa_del_Cioccolato_2007 from '../../../../assets/Umbria/Casa_del_Cioccolato_2007_Perugia_Umbria.jpg';
import Storia_perugina_asilo_sole_amico_2008 from '../../../../assets/Umbria/Storia_perugina_asilo_sole_amico_2008_Perugia_Umbria.jpg';
import Baci_bianco_final_2011 from '../../../../assets/Umbria/Baci_bianco_final_2011_Perugia_Umbria.jpg';
import Storia_perugina_nudi_2014 from '../../../../assets/Umbria/Storia_perugina_nudi_2014_Perugia_Umbria.jpg';
import Baci_fondentissimo_2015 from '../../../../assets/Umbria/Baci_fondentissimo_2015_Perugia_Umbria.jpg';
import Storia_perugina_tablo_2016 from '../../../../assets/Umbria/Storia_perugina_tablo_2016_Perugia_Umbria.jpg';
import Perugina_GranBlocchi_2017 from '../../../../assets/Umbria/Perugina_GranBlocchi_2017_Perugia_Umbria.jpg';
import Nero_ruby_story_ridim_2018 from '../../../../assets/Umbria/Nero_ruby_story_ridim_2018_Perugia_Umbria.jpg';
import Gran_raw_ridim_2019 from '../../../../assets/Umbria/Gran_raw_ridim_2019_Perugia_Umbria.jpg';


















export default function Perugina(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='perugina' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Perugina</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        La storia della Perugina, mitica casa di produzione dolciaria e vanto di un’intera città, va in scena tra gli spazi espositivi della <b>Casa del cioccolato e museo storico Perugina</b>, ospitata nello stabilimento del quartiere industriale S. Sisto, nella periferia meridionale 
                        di <Link href='/destinazioni/umbria/perugia' className='text-decoration-none color_link'>Perugia</Link>, dove si può ammirare anche un edificio tutto in acciaio e dai colori accessi, dalla forma circolare che somiglia quasi a un disco volante: è la Mediateca Sandro Penna. 
                    </p>
                    <p>
                        Lungo il percorso si scoprono e approfondiscono decine di aneddoti ed episodi di vita aziendale che legano la storia della Perugina a molti momenti storici dell’Italia novecentesca. Fu fondata nel 1907 da un gruppo di imprenditori, tra cui Francesco Buitoni (erede della nota 
                        famiglia di pastai di Sansepolcro), mentre, da un’idea di Luisa Spagnoli, è nel 1922 che fa la sua apparizione il “primo Bacio”, diventato poi il simbolo di tante feste (San Valentino, Festa della mamma o del papà), con le celebri frasi scritte su un fogliettino che tutti almeno 
                        una volta hanno conservato. Insomma un cioccolatino che ha fatto storia e che è ancora sulla cresta dell’onda, grazie alla sua bontà e grazie a campagne pubblicitarie di successo e efficaci operazioni di marketing, come la recente “limited edition” firmata Dolce&Gabbana.
                    </p>
                    <p>
                        Con gli occhi ancora pieni delle immagini regalate da filmati, fotografie di archivio e racconti di creatività imprenditoriale, sarà poi il momento di osservare dall’alto i macchinari e gli operai della fabbrica Perugina al lavoro, prima di concludere il percorso con una dolce 
                        degustazione di cioccolato e altri dolciumi. 
                    </p>
                        Il museo richiede una prenotazione obbligatoria, si consiglia quindi di programmare la visita in anticipo, specie se per caso si volesse anche partecipare a un corso e passare qualche ora imparando a lavorare il cacao, a temperare il cioccolato e a miscelare ingredienti vari seguiti 
                        da un maestro cioccolatiere.
                </div>
                <div className='margin mt-3'>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Storia_perugina_fondazione_1907} alt="Storia Perugina fondazione 1907" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>1907</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>La società Perugina</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        <b>30 novembre 1907</b>: a Perugia <b>Francesco Buitoni</b>, <b>Leone Ascoli</b>, <b>Francesco Andreani</b> e <b>Annibale Spagnoli</b> creano un laboratorio di confetti destinato a diventare un’industria, <stron>La Società Perugina</stron>® per la produzione di confetti.
                                    </CardText>
                                    <CardText>
                                        Nell’estate del <b>1915</b> la società si trasferisce a <b>Fontivegge</b>, in periferia, in una fabbrica costruita su un terreno pagato 30.000 Lire. Si completa il <b>processo produttivo</b>: entrano in funzione la linea di <b>produzione del cacao in polvere</b> e le presse 
                                        idrauliche per l’estrazione del burro di cacao.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Storia_perugina_1917_cacao} alt="Storia Perugina 1917 cacao" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>1917</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>Cacao</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        È il <b>1917</b>: nasce il <b>Cacao Perugina</b>®. Il <b>Cacao Perugina</b>® è il riferimento del <b>gusto di cacao</b> per gli italiani e da sempre è garanzia di risultato nelle creazioni di tutti i giorni.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Storia_perugina_primo_negozio_1919} alt="Storia Perugina primo negozio 1919" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>1919</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>Il primo negozio</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        <b>1919: Perugina</b>® apre <b>il primo negozio in Italia</b>. In America, il <b>primo store</b> arriverà nel 1939. Dove? Sulla Fifth Avenue, la strada più prestigiosa di <b>New York</b>.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Storia_perugina_brevetto_tavoletta_luisa_1921} alt="Storia Perugina brevetto tavoletta Luisa 1921" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>1921</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>Tavolettoa Luisa</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        <b>1921</b>: viene registrato il <b>brevetto</b> della <b>tavoletta Luisa</b>®, che deve il suo nome all’intuitiva <b>Luisa Spagnoli</b>. Con il suo gusto <b>inconfondibile</b>, diventa subito un prodotto 
                                        di punta capace di resistere al passaggio del tempo e delle mode.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Storia_perugina_nascita_bacio_1922} alt="Storia Perugina nascita bacio 1922" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>1922</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>Signorina, un bacio per favore</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        <b>1922</b>: Nasce un <b>nuovo cioccolatino</b> dalle mani di Luisa, il <b>Cazzotto</b>, che Giovanni Buitoni rinomina <b>Bacio® Perugina®</b>, l’inconfondibile dolce messaggero d’amore.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Storia_perugina_grande_assortimento_1923} alt="Storia Perugina nascita bacio 1922" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>1923</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>Il grande assortimento</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        <b>1923</b>: la famiglia Buitoni acquisisce il controllo dell’azienda che diventa, semplicemente, <b>Perugina</b>®. Nel 1929 <b>Giovanni Buitoni</b> inventa la prima <b>scatola di cioccolatini</b> già confezionata e nascono le scatole di lusso del <b>Grande Assortimento Perugina</b>®.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Storia_perugina_tre_re_dimmi_di_si_1924} alt="Storia Perugina nascita bacio 1922" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>1924</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>Dimmi di sì e tre re</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        “<b>Liù</b> ti prego <b>Dimmi di Sì</b>”: è all’inizio degli anni ’20 che iniziano le prime schermaglie amorose tra <b>Giovanni Buitoni</b> e <b>Luisa Spagnoli</b>. È proprio in quel momento che nascono i croccanti della <b>tradizione Perugina</b>®, <b>Dimmi di Sì</b> e <b>Tre Re</b>®: mandorle e nocciole 
                                        ricoperte da un delizioso strato di <b>cioccolato fondente</b>.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Storia_perugina_banane_1925} alt="Storia Perugina banane 1925" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>1925</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>Banan Perugina</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        È all’inizio degli anni '20 che risale una delle <b>specialità della tradizione Perugina</b>®: frutto precluso alla maggioranza degli italiani per prezzo e reperibilità. Nasce così il <b>cioccolatino dalla forma e gusto unico</b>, sapiente sinuoso contrasto tra dolcezza interna e squisita <b>copertura 
                                        di cioccolato fondente</b>.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Storia_perugina_sponsorizza_quattro_moschettieri_1934} alt="Storia Perugina sponsorizza quattro moschettieri 1934" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>1934</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>I quattro Moschettieri</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        <b>1934</b>: <b>I Quattro Moschettieri</b> è il programma radiofonico più seguito dagli italiani e <b>Perugina</b>® lo sponsorizza. Non solo: nasce un <b>concorso a premi</b> che rimarrà nella memoria di intere generazioni.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Storia_perugina_cioccolatino_liu_1939} alt="Storia Perugina cioccolatino liu 1939" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>1939</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>Liù</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        Un vero e proprio peccato di <b>crema bianca e granella di biscotto</b>, un <b>cioccolatino unico</b>, patrimonio di marca che porta il nome con cui <b>Giovanni Buitoni</b>, uno dei quattro soci fondatori di <b>Perugina</b>®, apostrofava amorevolmente <b>Luisa Spagnoli</b>.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Storia_perugina_cioccolato_mercato_massa_1955} alt="Storia Perugina cioccolato mercato massa 1955" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>1955</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>Nuove Intuizioni</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        <b>1955</b>: La Guerra è finita, il <b>boom economico</b> è alle porte e <b>Perugina</b>® è per tutti gli italiani “Il dono delle ore liete”. <b>Giovanni Buitoni</b> ha un’intuizione nuova e decisiva: “il cioccolato si regala sì, ma si mangia anche”. Un pensiero che porterà l’azienda e i suoi prodotti 
                                        verso il <b>mercato di massa</b>. L’entrata in borsa della società, invece, sarà nel 1972.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={I_Baci_sono_parole_1957} alt="I Baci sono parole 1957" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>1957</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>Dolce carosello</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        <b>1 febbraio 1957</b>, ore 20.30. Va in onda la <b>prima puntata di Carosello</b> e uno spot <b>Perugina</b>® arriva nello stesso anno. Tra i testimonial, anche <b>Vittorio Gassman</b> a cui seguiranno, tra gli altri, <b>Corrado</b> e <b>Frank Sinatra</b>.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Storia_perugina_nuovi_prodotti_1965} alt="Storia Perugina nuovi prodotti 1965" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>1965</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>Dolci novità</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        <b>1965</b>: <b>nuovo stabilimento</b> produttivo, <b>nuovi prodotti</b>. <b>Caramelle in stick</b>, <b>snack</b>, il <b>Carrarmato</b>, le prime <b>barrette al cioccolato</b>, i <b>Cingolato</b> e il <b>Cibon</b> del 1967 con riso soffiato.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Storia_perugina_tubo_baci_1981} alt="Storia Perugina tubo baci 1981" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>1981</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>Tubiamo?</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        <b>1981</b>: la rivoluzione arriva con il <b>Tubo Baci</b>®. Un <b>pack innovativo</b> e trasgressivo per un pubblico nuovo e curioso, i <b>giovani</b>: Tubiamo?
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Storia_perugina_nestle_1988} alt="Storia Perugina Nestle 1988" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>1988</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>Perugina® e Nestlé</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        <b>1988</b>: <b>Nestlé Italiana Spa acquisisce Perugina</b>® e porta lo stabilimento a essere uno dei principali di Nestlé in Europa per la <b>produzione del cioccolato</b>.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Casa_del_Cioccolato_1997} alt="Casa del Cioccolato 1997" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>1997</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>Il museo storico</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        <b>1997</b>: dal ricco <b>archivio Perugina®-Buitoni</b> nasce il <b>Museo Storico Perugina</b>®, uno degli esempi più di successo e più affascinanti di un <b>saper fare tutto italiano</b>.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Storia_perugina_nero_2005} alt="Storia Perugina nero 2005" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>2005</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>Nero® Perugina®</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        <b>2005</b>: <b>Perugina</b>® presenta la <b>nuova varietà</b> dei piaceri del fondente, <b>Nero</b>®, un’esperienza di piacere che coinvolge i sensi e la mente.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Casa_del_Cioccolato_2007} alt="Casa del Cioccolato 2007" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>2007</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>La Casa del Cioccolato</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        <b>2007</b>: In occasione del <b>centenario di Perugina</b>®, nasce <b>La Casa del Cioccolato</b>: un luogo unico al mondo, dove compiere un percorso emozionante, dal <b>Museo</b> alla visita alla <b>Fabbrica</b>. Fino alla <b>Scuola di Cioccolato</b>, dove seguire i <b>corsi dei Maestri Pasticceri </b> 
                                        per creare piccoli capolavori di bontà.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Storia_perugina_asilo_sole_amico_2008} alt="Storia Perugina asilo sole amico 2008" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>2008</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>L'asilo e il prodotto sole amico</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        <b>2008</b>: nasce l’<b>asilo nido Perugina</b>®, un nido aziendale aperto ai bambini del territorio. L’anno dopo, con il progetto <b>Sole Amico</b> si installano dei <b>parchi fotovoltaici</b> per produrre <b>energia solare</b> pulita senza emissioni inquinanti.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Baci_bianco_final_2011} alt="Baci Bianco Final 2011" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>2011</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>Baci® Perugina® bianco</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        <b>2011</b>: <b>Baci</b>® <b>Perugina</b>® cambia abito e si veste di un <b>candido bianco</b>, quello del cioccolato bianco che ricopre il morbido cuore di gianduia e granella di nocciola. Il risultato è un contrasto inaspettato di colori e di sapori, eppure perfettamente armonico e dal gusto equilibrato.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Storia_perugina_nudi_2014} alt="Storia Perugina nudi 2014 " style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>2014</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>I nudi</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        <b>2014</b>: I <b>Maestri della Scuola del Cioccolato Perugina</b>®, eredi creativi di <b>Luisa Spagnoli</b>, reinventano I <b>Nudi</b>, l’intuizione senza incarto. Nello stesso anno nasce <b>Baci</b>® <b>Perugina</b>® <b>Latte</b>, dolce coccola di <b>cioccolato al latte</b>.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Baci_fondentissimo_2015} alt="Baci Fondentissimo 2015" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>2015</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>Baci® Perugina® fondentissimo 70%</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        <b>2015</b>: Per gli estimatori del cioccolato fondente, <b>Baci</b>® <b>Perugina</b>® crea una variante raffinata. Il morbido cuore al gianduia è arricchito dalla granella di semi di cacao e dalla nocciola intera croccante. La doppia copertura di <b>cioccolato fondente 70%</b> regala un momento di 
                                        piacere puro e persistente.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Storia_perugina_tablo_2016} alt="Storia Perugina tablo 2016" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>2016</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>Tablò®, un esplosione di gusto</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        <b>2016</b>: una forma unica per una vera e proprio <b>esplosione di gusto</b> in una <b>tavoletta avvolgente</b>, <b>Perugina</b>® <b>Tablò</b>®. Un’esperienza sensoriale e coinvolgente, promossa da uno <b>spot</b> nuovo e innovativo, che vede la regia del visionario artista israeliano <b>Gal Muggia</b>.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Perugina_GranBlocchi_2017} alt="Perugina GranBlocchi 2017" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>2017</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>La nuova linea baking</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        <b>2017</b>: Perugina® lancia la linea completa per dolci. Partendo dai suoi prodotti icona e leader storici di mercato, Perugina® Cacao e Perugina®  Gocce, ne rinnova l'immagine e  lancia <b>una nuova variante di Cacao Extra Dark</b>. Allo stesso tempo Perugina®  rivoluziona il mondo dei blocchi di 
                                        cioccolato lanciando Perugina® GranBlocco: una gamma completa per tutti coloro che cercano <b>un cioccolato di qualità e di grande personalità</b>, per dare un tocco speciale ad ogni creazione. Nella versione Extra dark 50%, extra dark 70%, unico nel segmento blocchi, e latte 30%. Perugina® propone 
                                        così <b>un'offerta completa per tutti i gusti</b> e per ogni tipo di dolce si voglia realizzare. Prodotti con un'immagine curata nei minimi dettagli, con tante idee di ricette stampate sulle confezioni, per dare il massimo del servizio al consumatore, e <b>tutta la qualità di Perugina per fare di ogni 
                                        dolce un Gran Dolce</b>.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Nero_ruby_story_ridim_2018} alt="Nero ruby story ridim 2018 " style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>2018</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>Perugina® Nero® e Baci® Perugina® edizione limitata con face di caccao Ruby</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        Perugina® Nero®:
                                    </CardText>
                                    <CardText>
                                        Un <b>sapore puro ed intenso</b>, un <b>carattere forte e ben definito</b>, questo è <b>Perugina</b>® <b>Nero</b>®. Una ricetta unica, un'inconfondibile esperienza di gusto grazie alle fave di cacao abilmente tostate.
                                    </CardText>
                                    <CardText>
                                        Baci® Perugina® edizione limitata con fave di cacao Ruby:
                                    </CardText>
                                    <CardText>
                                        Baci® Perugina® lancia per la prima volta in Italia un tartufo a base di <b>fave di cacao Ruby naturali</b>. Tutti gli amanti del cioccolato possono ora provare un'esperienza di gusto davvero sorprendente: il <b>perfetto equilibrio</b> tra il rivestimento al cioccolato Ruby, il gusto leggermente acido 
                                        che ricorda i frutti di bosco, la croccante nocciola e il morbido cuore pieno di cacao.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Gran_raw_ridim_2019} alt="Storia Perugina nascita bacio 1922" style={{height: 'auto'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>2019</h2></CardTitle>
                                    <CardSubtitle><h3 className='color-subtitle'>Perugina® le ricette creative® I Granellati e Perugina® Nero® raw taste</h3></CardSubtitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        Perugina® le ricette creative® i Granellati:
                                    </CardText>
                                    <CardText>
                                        <b>Praline golose</b> realizzate con spirito artigianale per veri ed autentici momenti di piacere. Ogni pralina è <b>unica e irresistibile</b>: morbido ripieno, ricoperto da un raffinato cioccolato fondente o al latte, coronato da una visibile ricchezza di ingredienti naturali, noci e frutta; per creare 
                                        un gusto e una consistenza unici. <b>I Granellati</b> rappresentano un <b>piacere autentico</b> a prima vista, visibilmente autentico.
                                    </CardText>
                                    <CardText>
                                        Baci® Perugina® edizione limitata con fave di cacao Ruby:
                                    </CardText>
                                    <CardText>
                                        Baci® Perugina® lancia per la prima volta in Italia un tartufo a base di <b>fave di cacao Ruby naturali</b>. Tutti gli amanti del cioccolato possono ora provare un'esperienza di gusto davvero sorprendente: il <b>perfetto equilibrio</b> tra il rivestimento al cioccolato Ruby, il gusto leggermente acido 
                                        che ricorda i frutti di bosco, la croccante nocciola e il morbido cuore pieno di cacao.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.396243964568!2d12.334500762652794!3d43.08030399124538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ea6d748c9d137%3A0x90e97cda8e69e78!2sCASA%20DEL%20CIOCCOLATO%20PERUGINA%20Prenotazione%20Obbligatoria!5e1!3m2!1sit!2sit!4v1713251293681!5m2!1sit!2sit"
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
