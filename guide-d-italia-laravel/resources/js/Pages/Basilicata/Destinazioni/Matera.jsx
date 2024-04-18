import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Matera(props) {

    const [isHoveredCasaGrottaneiSassidiMatera, setIsHoveredCasaGrottaneiSassidiMatera] = useState(false);
    const [isHoveredSassidiMatera, setIsHoveredSassidiMatera] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='matera' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Matera</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        <strong>Matera</strong> è una delle città ancora abitate tra le più antiche del mondo.
                        Un luogo magico che custodisce, nelle sue grotte naturali scavate nella roccia, le testimonianze di insediamenti dell’uomo a partire dal paleolitico. Nel corso dei secoli quelli che sarebbero diventati il simbolo della città, sono stati modellati 
                        in strutture sempre più complesse nei due grandi anfiteatri naturali in cui si è sviluppato il nucleo originale.
                    </p>
                    <p>
                        Quando si visita Matera, situata su un altopiano calcareo della Basilicata caratterizzato da profonde fessure, burroni, rocce e caverne, si ha la sensazione di entrare in un presepe. Case, chiese, monasteri ed eremi sono costruiti nelle <b>grotte 
                        naturali della Murgia</b> in un panorama così suggestivo da esser stato scelto per ambientare film come "La passione di Cristo" di Mel Gibson e "Il Vangelo secondo Matteo" di Pier Paolo Pasolini. Siete pronti a perdervi nelle meraviglie di questa 
                        città unica al mondo?
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Storia e curiosità su Matera</h2>
                    <p>
                        La <b>storia di Matera</b> inizia nella preistoria, come testimoniano i numerosi <b>vasi in ceramica risalenti al Neolitico antico</b> rinvenuti nelle grotte.<br/>
                        Ai primi popoli nomadi che si affacciarono sulla Murgia ne seguirono altri dediti alla pastorizia che si stabilirono sul colle della <b>Civita</b>, fondando il primo nucleo della città.
                    </p>
                    <p>
                        Dopo la caduta dell'Impero Romano d'Occidente e la riconquista degli imperatori bizantini, Matera fu a lungo sotto il controllo dei Longobardi e dei Saraceni fino alla discesa dei <b>Normanni in Italia</b> nel 1042.
                        È a questo periodo che risalgono le <b>chiese rupestri</b> che costellano il territorio della città, scavate nella roccia e decorate con affreschi ed elementi scultorei. Parallelamente al nucleo storico dal XIII secolo iniziò a svilupparsi la città 
                        nuova di Matera, con rioni molto eleganti realizzati dai più noti architetti italiani.
                    </p>
                </div>
                <div className='margin mt-3'>
                    <h2 className="color-subtitle">Cosa vedere a Matera: i luoghi da non perdere</h2>
                    <p>
                        Superato lo stupore iniziale provocato da questo suggestivo patrimonio culturale e architettonico unico, bisogna decidere <b>cosa vedere a Matera</b>cosa vedere a Matera e da dove iniziare l'esplorazione di questa "seconda Betlemme".<br/>
                        Il modo migliore è partire dal nucleo storico, i cosiddetti <Link href='/visite/basilicata/matera/punti_panoramici' className='text-decoration-none color_link'>Sassi di Matera</Link>, i due quartieri dichiarati Patrimonio dell'Umanità UNESCO nel 1993.
                    </p>
                    <p>
                        Scoprire i Sassi significa passeggiare nella storia della città, muovendosi tra le grotte e i <b>cunicoli sotterranei del Sasso Caveoso</b>, dove le antiche case grotta sono rimaste intatte nei secoli, e perdersi tra le <b>botteghe del Sasso Barisano</b>, 
                        fermandosi nei tanti belvedere per ammirare gli scorci unici che questa città riesce a regalare.<br/>
                        Visitate la <b>Casa Grotta del Casalnuov</b>o per scoprire come si viveva in questi ambienti fino al 1958, quando la popolazione abbandonò le grotte si spostò nei quartieri più moderni.
                    </p>
                    <p>
                        Ad est della città, nel <Link href='/montagna/basilicata/parco_della_murgia' className='text-decoration-none color_link'>Parco della Murgia Materana</Link>, prendetevi del tempo per visitare le chiese rupestri di Matera che rappresentano uno dei tratti 
                        distintivi e più spettacolari dell'insediamento. Oltre 150 siti di culto costruiti tra l'Alto Medioevo e il XIX secolo, legati a specifiche fasi storiche, sociali e religiose del territorio.
                    </p>
                    <p>
                        Da non perdere la <b>Cripta del Peccato Originale</b>, una chiesa rupestre risalente al periodo longobardo caratterizzata da un ciclo di affreschi che le ha fatto meritare l'appellativo di "Cappella Sistina del rupestre".
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Cosa fare in giro per Matera</h2>
                    <p>
                        Perdersi per i vicoli e le <b>stradine di Matera alla ricerca di cosa fare</b> rappresenta l'occasione migliore per scoprire le tante meraviglie della città.<br/>
                        Nel Sasso Caveoso potrete comprendere meglio usi e costumi degli abitanti degli antichi Rioni Sassi con una visita alla <b>Storica Casa Grotta di Vico Solitario</b>, un vero museo arredato coi mobili e gli attrezzi autentici del periodo in cui era abitata.
                    </p>
                    <p>
                        La <b>Piazzetta Pascol</b>i, tra i punti panoramici più belli di Matera, è un balcone sui Sassi in cui fermarsi e farsi ammaliare dalla città e da cui accedere al <b>Museo Nazionale</b> ospitato in Palazzo Lanfranchi con la sua collezione di arte medievale 
                        e moderna.
                    </p>
                    <p>
                        Se vi trovate a Matera il giorno di Pasqua potete assistere all'evento più suggestivo della città, la <b>Via Crucis</b> che da <b>piazza Sedile</b>piazza Sedile si snoda per il centro storico ripercorrendo tappa dopo tappa le ultime ore di vita di Gesù, 
                        dall'ultima cena alla pietra dell’Unzione, con le statue di Gesù morto, dell'Addolorata e di Gesù flagellato portate a spalla dai confratelli della <b>Confraternita di Gesù flagellato</b>.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">I luoghi insoliti di Matera da scoprire</h2>
                    <p>
                        Per la sua particolare conformazione, <b>Matera è una città ricca di luoghi insoliti da scoprire</b>.<br/>
                        A due passi dal Duomo di Matera lasciatevi incantare dall'antica <a href='https://fondoambiente.it/luoghi/casa-noha' className='text-decoration-none color_link'>Casa Noha</a>, una struttura in tufo con soffitti a volta e delicati intagli e cornici che vi farà 
                        ripercorrere la storia di Matera grazie a un innovativo progetto di comunicazione curato dal FAI.
                    </p>
                    <p>
                        In pieno centro storico, sotto la piazza di Vittorio Veneto, si nasconde il <b>Palombaro Lungo</b> un’imponente cisterna per la raccolta dell'acqua realizzata in diverse fasi a partire dal XVI secolo. Potete visitarlo grazie ad agevoli passerelle sospese 
                        sull'acqua e avere così un assaggio della <b>Matera Sotterranea</b>.
                    </p>
                    <p>
                        E se volete emozionarvi con una vista unica e suggestiva sulla città, il <Link href='/visite/basilicata/matera/belvedere_di_murgia_timone' className='text-decoration-none color_link'>Belvedere di Murgia Timone</Link> vi attende nel cuore del <b>Parco della Murgia 
                        Materana</b>.<br/>
                        È da questo punto che potete godere, soprattutto sul finire della giornata, dell'effetto presepe per cui è famosa la città.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Matera'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/basilicata/matera/casa_grotta_nei_sassi_di_matera'
                            onMouseEnter={() => setIsHoveredCasaGrottaneiSassidiMatera(true)}
                            onMouseLeave={() => setIsHoveredCasaGrottaneiSassidiMatera(false)}
                            >Casa Grotta nei Sassi di Matera {isHoveredCasaGrottaneiSassidiMatera && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Matera'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/basilicata/matera/punti_panoramici'
                            onMouseEnter={() => setIsHoveredSassidiMatera(true)}
                            onMouseLeave={() => setIsHoveredSassidiMatera(false)}
                            >Sassi di Matera {isHoveredSassidiMatera && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
