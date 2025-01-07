import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Ancona(props) {

    const [isHoveredMANdelleMarche, setIsHoveredMANdelleMarche] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='ancona' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Ancona</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Crocevia di culture millenarie e straordina­rio amalgama di architetture e stili, Ancona vi conquisterà con il suo porto indaffarato e caotico, la decadente magnificenza dei palaz­zi medievali, il fascino orientale delle chie­se bizantine e le tracce della storia antica so­pravvissute alle bombe 
                        della seconda guerra mondiale. Ma non sarà amore a prima vista. Perché per apprezzare davvero Ancona do­vrete far sedimentare per bene i colori, i pro­fumi, le immagini e le emozioni che vi inve­stiranno non appena ci arriverete. Se non lo farete, rischierete di rimanere incastrati nel­ le 
                        profonde contraddizioni di questa città, in bilico tra le sublimi bellezze (come l’Arco di Traiano di Ancona, una vera chicca) che nasconde e gli incomprensibili scivoloni a cui si abban­dona.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Ancona, cosa vedere</h2>
                    <p>
                        Non lasciatevi scoraggiare se troverete qualche museo chiuso, aree arche­ologiche desolate e chiese in restauro. Go­detevi piuttosto la vivace Piazza del Plebi­scito, circondata dai locali dove si tira tardi tutte le notti; il panorama mozzafiato dalla splendida Cattedrale di San Ciriaco, ad 
                        Ancona una vera istituzione; i porta­li goticheggianti del centro e l’elegante Pas­setto, con le incredibili grotte che d’estate si trasformano in un divertente e frequentato villaggio vacanze sull’Adriatico. Impossibile poi, aprire la mappa di Ancona senza segnare tra le cose da vedere uno dei 
                        pilastri turistici della città: il <Link href='/visite/marche/ancona/duomo_di_ancona' className='text-decoration-none color_link'>Duomo di Ancona</Link>, appunto, incredibile esempio di architettura medievale. Poi scende­ te nei vicoli alle spalle del porto, tra l’odore pungente del mare, i 
                        polverosi magazzini tra­ boccanti di merci e le trattorie dove per se­ coli si sono incontrati commercianti prove­nienti da ogni angolo del Mediterraneo: An­cona vi si svelerà così in tutto il suo contra­ stante fascino. Nel <Link href='/visite/marche/ancona/teatro_delle_muse' 
                        className='text-decoration-none color_link'>Teatro delle Muse</Link>, Ancona risplende in uno dei campi in cui è maestra: lo spettacolo. E non è un caso che questo teatro sia uno dei più innovativi e all’avanguardia dell’intero Centro Italia.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Musei di Ancona</h2>
                    <p>
                        Il <Link href='/visite/marche/ancona/museo_tattile' className='text-decoration-none color_link'>Museo tattile di Ancona</Link>  (Museo Omero o Tattile Statale è il suo nome completo e ufficiale) punta proprio su questo senso la scoperta e l’esplorazione dei suoi ambienti: è un caso quasi unico 
                        al mondo e per questo, merita una visita. Così come il <Link href='/visite/marche/ancona/museo_archeologico' className='text-decoration-none color_link'>Museo Archeologico di Ancona</Link>, che si trova a Palazzo Ferretti e racconta la storia della regione attraverso manufatti e reperti 
                        proto-preistorici. In piazza Stracca, infine, si trova il bellissimo <Link href='/visite/marche/ancona/palazzo_degli_anziani' className='text-decoration-none color_link'>Palazzo degli Anziani</Link>, sede antica del palazzo municipale e oggi tra gli edifici e monumenti di Ancona più apprezzati.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Ancona'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/marche/ancona/museo_archeologico_nazionale_delle_marche'
                            onMouseEnter={() => setIsHoveredMANdelleMarche(true)}
                            onMouseLeave={() => setIsHoveredMANdelleMarche(false)}
                            >Museo Archeologico Nazinale... {isHoveredMANdelleMarche && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
