import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';
import Footer from '@/Components/Footer';

export default function Friuli_Venezia_Giulia(props) {

    const [isHoveredTrieste, setIsHoveredTrieste] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='text-center friuli_venezia_giulia'>
                    <h1>Friuli Venezia Giulia</h1>
                </div>
                <div className='text-center margin mt-3'>
                    <p>
                        Il suo <b>patrimonio culturale ricco e variegato</b>, frutto di contaminazione tra diverse culture e popolazioni, vi sedurrà, così come le infinite proposte all'insegna del relax, dello sport e del divertimento che renderanno la vostra vacanza indimenticabile.
                    </p>
                    <h2 className='color-subtitle'>Origini e cenni storici sul Friuli Venezia Giulia</h2>
                    <p>
                        A lasciare il segno nella storia del <strong>Friuli Venezia Giulia</strong>, territorio situato in una naturale zona di passaggio, sono stati i Veneti, gli Euganei e i Gallo-Celti. La civiltà del bronzo portò nella regione la diffusione dei <i>castellari</i>, 
                        <b>borghi fortificati arroccati sulle alture</b> nei quali gli abitanti del villaggio si dedicavano all'allevamento degli animali.
                    </p>
                    <p>
                        Il nome Friuli è di origine romana e deriva dalla città di Forum Iulii, oggi Cividale del Friuli: fondata da Giulio Cesare divenne, dopo la distruzione di <Link href='/destinazione/aquileia' className='text-decoration-none color_link'>Aquileia</Link> per mano 
                        degli Unni, il capoluogo della <i>Regio X Venetia et Histria</i>, una delle regioni in cui l'Italia era divisa. Il passaggio dell'Impero Romano è testimoniato anche dalla <b>via Julia Augusta</b>, un'importante strada che collegava Aquileia con il Norico, 
                        risistemata una prima volta all'epoca di Giulio Cesare.
                    </p>
                    <p>
                        Aquileia fu una fiorente città portuale romana, fondata come colonia e divenuta poi capitale della Regio X. Qui vi prosperava una comunità cristiana fortemente legata alla Chiesa patriarcale di Alessandria d'Egitto e la città, nel 318, richiamò anche <b>Sant'Ambrogio</b>.
                    </p>
                    <p>
                        Importante realtà storica, il <b>patriarcato di Aquileia</b>, creato come principato ecclesiastico del Sacro Romano Impero, è stato una delle più grandi diocesi di tutto il periodo del medioevo europeo.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Città principali in Friuli Venezia Giulia</h2>
                    <p>
                        Se siete in vacanza nel Friuli Venezia Giulia, non perdete per niente al mondo <strong>Trieste</strong>, <b>città di mare dalla bellezza struggente</b>, moderna e antica allo stesso tempo. Perla affacciata sull’Alto Adriatico, nel golfo omonimo, mostra ancora i 
                        segni delle sue origini romane: il suo porto, dichiarato porto franco nel 1719 da Carlo VI d'Asburgo, imperatore del Sacro Romano Impero, è oggi primo per traffico merci in Italia, con un terminal passeggeri sempre più importante per via della riduzione del 
                        passaggio delle grandi navi a Venezia.
                    </p>
                    <p>
                        Visitate il <b>Castello di Miramare</b>, costruito come residenza per l'arciduca Ferdinando Massimiliano d'Asburgo e per la moglie Carlotta del Belgio: il suo vasto parco è ricco di piante rare, sculture e laghetti. Poi la maestosa <b>Piazza Unità d'Italia</b>, 
                        che ha ospitato teste coronate, marinai, mercanti e letterati di tutte le epoche.
                    </p>
                    <p>
                        A una settantina di chilometri verso l’interno, ecco <b>Udine</b>, rivale di Trieste alla quale è legata storicamente da un rapporto di odio e amore. <i>Piccola Venezia sulla terraferma</i>, come viene chiamata grazie alla sua armonia architettonica e al suo 
                        patrimonio architettonico e artistico, è altrettanto imperdibile: fate una passeggiata per <b>Piazza della Libertà</b> con le sue logge e i porticati, le bifore e le trifore; spostatevi verso la <b>Loggia del Lionello</b>, palazzo simbolo dall’origine antica a 
                        stravagante; dedicate un po’ di tempo a visitare il <b>Castello di Udine</b>, che ospita al suo interno ricchi musei.
                    </p>
                    <p>
                        Poi c’è <b>Pordenone</b>, <i>La città dipinta</i>, per via dei palazzi affrescati che rendono prezioso il centro storico. Dinamica e creativa, è sede di grandi eventi artistici, musicali e letterari di respiro internazionale.
                    </p>
                    <p>
                        <b>Aquileia</b> considerata uno dei più importanti siti archeologici dell’Italia Settentrionale, talmente rilevanti che dal 1998 le rovine paleocristiane di Aquileia sono patrimonio mondiale UNESCO.
                    </p>
                    <p>
                        Infine, <b>Gorizia</b>, una piccola e piacevole città il cui passato asburgico si mostra prepotentemente nei palazzi e nei giardini che la arricchiscono. Un meraviglioso simbolo della travagliata storia del Novecento europeo.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Friuli_Venezia_Giulia'>
                        <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/trieste'
                                onMouseEnter={() => setIsHoveredTrieste(true)}
                                onMouseLeave={() => setIsHoveredTrieste(false)}
                                >Trieste {isHoveredTrieste && <i className="bi bi-chevron-right"></i>}
                            </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
