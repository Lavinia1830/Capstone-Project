import React, {useState}  from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import {Card, CardBody} from 'react-bootstrap';
import { Head, Link } from '@inertiajs/react';

export default function Liguria(props) {

    const [isHoveredGenova, setIsHoveredGenova] = useState(false);
    const [isHoveredCamogli, setIsHoveredCamogli] = useState(false);
    const [isHoveredSavona, setIsHoveredSavona] = useState(false);
    const [isHoveredLaSpezia, setIsHoveredLaSpezia] = useState(false);
    const [isHoveredImperia, setIsHoveredImperia] = useState(false);
    const [isHoveredSanremo, setIsHoveredSanremo] = useState(false);
    const [isHoveredRecco, setIsHoveredRecco] = useState(false);
    const [isHoveredPortofino, setIsHoveredPortofino] = useState(false);
    const [isHoveredCinqueterre, setIsHoveredCinqueTerre] = useState(false);

  return (
    <>
        <Head title='Liguria'/>
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='text-center liguria'>
                    <h1>Liguria</h1>
                </div>
                <div className='margin mt-3'>
                    <p>
                        C’è una regione in Italia dove le montagne non sono l’antitesi del mare, ma il loro suggestivo preludio: è la <strong>Liguria</strong>. È una 
                        terra difficile, inospitale, ma nei secoli i liguri hanno saputo modificarla mantenendo intatta la bellezza. Simboli dell’ingegno e fatica con 
                        cui questo miracolo è stato reso possibile sono le terrazze coltivate e le case-torri che si sviluppano in verticale.
                    </p>
                    <p>
                        Questo lavoro secolare ci ha regalato oggi un paesaggio unico capace di ammaliare visitatori da tutto il mondo. 
                        Le <Link href='/destinazioni/liguria/cinque_terre' className='text-decoration-none color_link'>Cinque Terre</Link> sono una delle 
                        immagini-simbolo dell’Italia per gli stranieri, una meta capace di contendere i primi posti nella classifica delle località più visitate a 
                        rivali del calibro di <Link href='/destinazioni/lazio/roma' className='text-decoration-none color_link'>Roma</Link>, <Link href='/destinazioni/veneto/venezia'
                        className='text-decoration-none color_link'>Venezia</Link>, <Link href='/destinazioni/toscana/firenze' className='text-decoration-none 
                        color_link'>Firenze</Link> e <Link href='/destinazioni/campania/napoli' className='text-decoration-none color_link'>Napoli</Link>. Ma non sono 
                        l’unica meraviglia che potrete ammirare durante una vacanza in Liguria.
                    </p>
                    <p>
                        <Link href='/destinazioni/liguria/genova' className='text-decoration-none color_link'>Genova</Link> è un capoluogo peculiare, un’intera città 
                        stretta tra mari e monti, un po’ Superba come viene chiamata ma anche vitale e, a suo modo, ospitale. Romanticismo ottocentesco e suggestioni 
                        letterarie vi attendono nei borghi del <Link href='/visite/liguria/golfo_del_tigullio' className='text-decoration-none color_link'>Golfo del 
                        Tigullio</Link> e del <Link href='/visite/liguria/golfo_dei_poeti' className='text-decoration-none color_link'>Golfo dei Poeti</Link>; se 
                        al silenzio e alla contemplazione preferite la vita mondana <Link href='/destinazioni/liguria/portofino' className='text-decoration-none 
                        color_link'>Portofino</Link> e <Link href='/destinazione/liguria/sanremo' className='text-decoration-none color_link'>Sanremo</Link> vi 
                        sapranno soddisfare.
                    </p>
                    <p>
                        Approfittate del bel clima della Liguria, una regione del nord con le piacevoli temperature del sud dove crescono in abbondanza fiori e 
                        vegetazione mediterranea. La Liguria si fa amare 365 giorni all’anno: con la nostra guida online organizzare da soli la vostra vacanza è 
                        facile, perché rimandare? Il vostro sogno inizia qui.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Città</h2>
                    <p>
                        Tra le città da non perdere in Italia <Link href='/destinazioni/liguria/genova' className='text-decoration-none color_link'>Genova</Link> merita
                        certamente di essere menzionata. È una meta unica, che unisce tradizioni marinare, cibo di strada tra i migliori d'Italia , caruggi dall’anima 
                        popolare accanto a eleganti vie fiancheggiate da sfarzosi palazzi, un Porto Antico rinato con moderne attrazioni che raccontano il legame 
                        indissolubile di Genova e il mare.
                    </p>
                    <p>
                        Una città ricca di sorprese è <Link href='/destinazioni/liguria/savona' className='text-decoration-none color_link'>Savona</Link>, spesso 
                        ridotta a “città dei crocieristi”. Ma è anche la città della Cappella Sistina fuori da Roma, del museo Apple più grande al mondo, di un 
                        panino tipico che non potete non assaggiare e altre interessanti attrazioni.
                    </p>
                    <p>
                        Altra città ingiustamente relegata a porto d’arrivo è <Link href='/destinazioni/liguria/la_sapienza' className='text-decoration-none 
                        color_link'>La Spezia</Link>, che invece può rappresentare un’ottima base per esplorare le <Link href='/destinazioni/liguria/le_5_terre' 
                        className='text-decoration-none color_link'>Cinque Terre</Link> e le incantevoli città del <Link href='/destinazioni/liguria/golfo_dei_poeti' 
                        className='text-decoration-none color_link'>Golfo dei Poeti</Link>.
                    </p>
                    <p>
                        <Link href='/destinazioni/liguria/imperia' className='text-decoration-none color_link'>Imperia</Link>, la più occidentale, è una città dalle 
                        due anime: il caratteristico quartiere di Porto Maurizio sorge su un promontorio, mentre Oneglia è adagiata lungo la foce di un torrente.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Cinque Terre</h2>
                    <p>
                        Chi ha poco tempo per visitare la Liguria va a colpo sicuro concentrando il weekend o la vacanza alle <Link href='/destinazioni/liguria/le_5_terre' 
                        className='text-decoration-none color_link'>Cinque Terre</Link>. Questi minuscoli borghi strappati al mare sono uno dei più bei esempi al mondo 
                        di intervento dell’uomo in armonia con la natura.
                    </p>
                    <p>
                        Tutto il mondo ci invidia <Link href='/destinazioni/liguria/le_5_terre/vernazza' className='text-decoration-none 
                        color_link'>Vernazza</Link>, <Link href='/destinazioni/liguria/le_5_terre/riomaggiore' className='text-decoration-none 
                        color_link'>Riomaggiore</Link>, <Link href='/destinazioni/liguria/le_5_terre/manarola' className='text-decoration-none 
                        color_link'>Manarola</Link>, <Link href='/destinazioni/liguria/le_5_terre/corniglia' className='text-decoration-none 
                        color_link'>Corniglia</Link> e <Link href='/destinazioni/liguria/le_5_terre/monterosso_al_mare' className='text-decoration-none 
                        color_link'>Monterosso al Mare</Link>: vorreste forse perderveli? Hanno dei tratti comuni (scorci romantici, case-torri dalle facciate variopinte, 
                        viste sul mare…), ma ognuno ha una sua caratteristica peculiare. Cercate di vederne quanti più possibili… o tutti, meglio ancora.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Altri borghi</h2>
                    <p>
                        Le Cinque Terre non sono gli unici borghi della Liguria che meritano una visita. Ce ne sono molti altri, alcuni noti, altri da scoprire. Qualche idea?
                    </p>
                    <p>
                        <Link href='/destinazioni/liguria/borghi/portovenere' className='text-decoration-none color_link'>Portovenere</Link>, <Link href='/destinazioni/liguria/borghi/lerici' 
                        className='text-decoration-none color_link'>Lerici</Link> e <Link href='/destinazioni/liguria/borghi/levanto' className='text-decoration-none 
                        color_link'>Levanto</Link> sono le città della Riviera di Levante che nell’Ottocento ammaliarono i poeti romantici inglesi.
                    </p>
                    <p>
                        Il romanticismo abbonda anche a <Link href='/destinazioni/ligure/borghi/camogli' className='text-decoration-none color_link'>Camogli</Link>, da cui 
                        si può raggiungere con un’emozionante gita in battello l’<Link href='/visite/liguria/abbazia_di_san_fruttuoso' className='text-decoration-none 
                        color_link'>Abbazia di San Fruttuoso</Link>, e <Link href='/destinazioni/liguria/borghi/finalborgo' className='text-decoration-none 
                        color_link'>Finalborgo</Link>, considerato uno dei borghi più belli d’Italia. Per un romanticismo di tutt’altro tipo, dalle cupe atmosfere, 
                        visitate <Link href='/destinazione/liguria/trioria' className='text-decoration-none color_link'>Triora</Link>, il Paese delle Streghe.
                    </p>
                    <p>
                        <Link href='/destinazione/liguria/portofino' className='text-decoration-none color_link'>Portofino</Link> è la capitale chic della Liguria, amata 
                        da vip e celebrità. Se non amate la mondanità potete rifugiarvi nei sentieri del parco, immersi in una natura rigogliosa.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Liguria'>
                        <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/liguria/genova'
                                onMouseEnter={() => setIsHoveredGenova(true)}
                                onMouseLeave={() => setIsHoveredGenova(false)}
                                >Genova {isHoveredGenova && <i className="bi bi-chevron-right"></i>}
                            </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Liguria'>
                        <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/liguria/savona'
                                onMouseEnter={() => setIsHoveredSavona(true)}
                                onMouseLeave={() => setIsHoveredSavona(false)}
                                >Savona {isHoveredSavona && <i className="bi bi-chevron-right"></i>}
                            </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Liguria'>
                        <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/liguria/la_spezia'
                                onMouseEnter={() => setIsHoveredLaSpezia(true)}
                                onMouseLeave={() => setIsHoveredLaSpezia(false)}
                                >La Spezia {isHoveredLaSpezia && <i className="bi bi-chevron-right"></i>}
                            </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Liguria'>
                        <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/liguria/imperia'
                                onMouseEnter={() => setIsHoveredImperia(true)}
                                onMouseLeave={() => setIsHoveredImperia(false)}
                                >Imperia {isHoveredImperia && <i className="bi bi-chevron-right"></i>}
                            </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Liguria'>
                        <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/liguria/sanremo'
                                onMouseEnter={() => setIsHoveredSanremo(true)}
                                onMouseLeave={() => setIsHoveredSanremo(false)}
                                >Sanremo {isHoveredSanremo && <i className="bi bi-chevron-right"></i>}
                            </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Liguria'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/liguria/camogli'
                            onMouseEnter={() => setIsHoveredCamogli(true)}
                            onMouseLeave={() => setIsHoveredCamogli(false)}
                            >Camogli {isHoveredCamogli && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Liguria'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/liguria/recco'
                            onMouseEnter={() => setIsHoveredRecco(true)}
                            onMouseLeave={() => setIsHoveredRecco(false)}
                            >Recco {isHoveredRecco && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Liguria'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/liguria/portofino'
                            onMouseEnter={() => setIsHoveredPortofino(true)}
                            onMouseLeave={() => setIsHoveredPortofino(false)}
                            >Portofino {isHoveredPortofino && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Liguria'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/liguria/cinque_terre'
                            onMouseEnter={() => setIsHoveredCinqueTerre(true)}
                            onMouseLeave={() => setIsHoveredCinqueTerre(false)}
                            >Cinque terre {isHoveredCinqueterre && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    </>
    
  )
}
