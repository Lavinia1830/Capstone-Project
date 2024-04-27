import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/inertia-react';
import {Card, CardBody} from 'react-bootstrap';

export default function Champoluc(props) {

    const [isHoveredLaChiesaParrocchialediSanMartino, setIsHoveredLaChiesaParrocchialediSanMartino] = useState(false);
    const [isHoveredLaMostraPermanentedellArtiginatoTipico, setIsHoveredLaMostraPermanentedellArtiginatoTipico] = useState(false);
    const [isHoveredIlSantuariodiNotreDameduBonSecours, setIsHoveredIlSantuariodiNotreDameduBonSecours] = useState(false);

    return (
        <>
            <Head title="Champoluc"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='champoluc' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Champoluc</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il comune di <b>Ayas</b> si trova alla testata della meravigliosa valle solcata dal torrente Evançon e dominata dal massiccio del <Link href='/montagna/valle_d_aosta/monte_rosa' className='text-decoration-none color_link'>Monte Rosa</Link> e dalle sue altissime vette. 
                            Il paesaggio è molto vario, con ghiacciai e aspre pareti rocciose che fiancheggiano prati e pascoli dal lieve pendio. La località è frammentata in <b>numerosi villaggi</b>, ognuno con proprie caratteristiche paesaggistiche e architettoniche.<br/>
                            La località più conosciuta è <strong>Champoluc</strong>, a 1568 metri di quota, meta di vacanza sia in inverno sia nella stagione estiva. <b>Antagnod</b>, dove si trova il Municipio di Ayas, è invece un villaggio a 1710 metri di altitudine da cui si gode un magnifico 
                            panorama. Caratteristiche sono anche le frazioni di Frachey e Saint-Jacques e i villaggi di Crest e Mascognaz, dove le vecchie abitazioni, i tradizionali rascard, sono stati sapientemente conservati.<br/>
                            Occorre ricordare l’antica arte della lavorazione del legno e la produzione artigianale dei sabots, tipici zoccoli in legno utilizzati dai valligiani in ogni stagione dell’anno.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className='color-subtitle'>Cosa vedere</h2>
                        <ul className="lista">
                            <li>
                                <p>
                                    <Link href='/visite/valle_d_aosta/champoluc/la_chiesa_parocchiale_di_san_martino' className='text-decoration-none color_link'>La Chiesa Parrocchiale di San Martino</Link>: al suo interno si può ammirare uno <b>splendido altare barocco</b>, il più imponente della Valle. Presso il museo 
                                    parrocchiale di arte sacra è conservata una rarissima Madonna-scrigno.
                                </p>
                            </li>
                            <li>
                                <p>
                                <Link href='/visite/valle_d_aosta/champoluc/la_mostra_permanente_dell_artigianato_tipico' className='text-decoration-none color_link'>La mostra permanente dell’artigianato tipico</Link>: è ospitata nel centro storico di Antagnod presso la Maison Fournier, contraddistinta da una lunga 
                                    balconata in legno ed affiancata da una torre scalare cilindrica. 
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link href='/visite/valle_d_aosta/champoluc/il_santuario_di_notre_dame_du_bon_secours' className='text-decoration-none color_link'>Il santuario di Notre-Dame du Bon Secours</Link>: situato in località Barmasc, a 1828 metri di altitudine, era meta di processioni anche per la sorgente 
                                    d’acqua, considerata miracolosa, che sgorga dalle fondamenta della cappella.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Feste e Tradizioni</h2>
                        <ul className="lista">
                            <li>
                                <p>
                                    <Link href='/eventi/valle_d_aosta/champoluc/festa_delle_guide_alpine' className='text-decoration-none color_link'>Festa delle Guide Alpine</Link>: ogni estate, il 15 agosto, le guide alpine valdostane organizzano, in varie località della Valle d’Aosta, sfilate in divisa di 
                                    rappresentanza e dimostrazioni delle discipline della montagna.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link href='/eventi/valle_d_aosta/champoluc/fiaccolata_dei_maestri_di_scii' className='text-decoration-none color_link'>Fiaccolata dei maestri di sci</Link>: tradizionale appuntamento di fine anno con le fiaccolate dei maestri di sci, che illuminano con le loro spettacolari 
                                    scie i pendii delle piste del Crest.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className='row d-flex justify-content-center mx-0 mb-4'>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Champoluc'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/champoluc/la_chiesa_parocchiale_di_san_martino'
                                onMouseEnter={() => setIsHoveredLaChiesaParrocchialediSanMartino(true)}
                                onMouseLeave={() => setIsHoveredLaChiesaParrocchialediSanMartino(false)}
                                >La Chiesa Parrocchiale di San Martino {isHoveredLaChiesaParrocchialediSanMartino && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Champoluc'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/champoluc/la_mostra_permanente_dell_artigianato_tipico'
                                onMouseEnter={() => setIsHoveredLaMostraPermanentedellArtiginatoTipico(true)}
                                onMouseLeave={() => setIsHoveredLaMostraPermanentedellArtiginatoTipico(false)}
                                >La mostra permanente dell'artiginato... {isHoveredLaMostraPermanentedellArtiginatoTipico && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Champoluc'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/champoluc/il_santuario_di_notre_dame_du_bon_secours'
                                onMouseEnter={() => setIsHoveredIlSantuariodiNotreDameduBonSecours(true)}
                                onMouseLeave={() => setIsHoveredIlSantuariodiNotreDameduBonSecours(false)}
                                >Il Santuario di Notre-Dame du Bon... {isHoveredIlSantuariodiNotreDameduBonSecours && <i className="bi bi-chevron-right"></i>}
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
