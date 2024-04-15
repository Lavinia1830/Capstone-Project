import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';
import Footer from '@/Components/Footer';

export default function Veneto(props) {

    const [isHoveredVenezia, setIsHoveredVenezia] = useState(false);
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='text-center veneto'>
                    <h1>Veneto</h1>
                </div>
                <div className='text-center margin mt-3'>
                    <p>
                        Il <strong>Veneto</strong> è una delle mete turistiche più conosciute e ambite al mondo grazie al suo patrimonio culturale, alle sue città ricche di attrazioni uniche, al suo paesaggio e alla varietà di ambienti ed ecosistemi. 
                    </p>
                    <p>
                        Da sempre ricco e prosperoso, dopo la caduta dell'Impero d'Occidente e l'invasione dei Longobardi, il territorio del Veneto è stato diviso per secoli tra la zona continentale, sotto il dominio longobardo, e quella costiera dove nel 697 inizia il periodo di splendore 
                        della <b>Repubblica di Venezia</b>.
                    </p>
                    <p>
                        Il sistema feudale inizia a cedere dall'anno 1000 e i liberi comuni si trasformano in potenti signorie nei 2 secoli successivi. È in questo periodo che <b>Ezzelino III da Romano</b> diventa signore di Verona, Vicenza e Padova. Nei decenni successivi il dominio veneziano 
                        raggiunge l'entroterra e le magnifiche ville palladiane, progettate dall'architetto Palladio per le famiglie più importanti della Serenissima, vengono erette in quegli anni.
                    </p>
                    <p>
                        L'arrivo di Napoleone e la dominazione austriaca vengono confinati nel passato dopo la terza guerra d'indipendenza nel 1866, ma durante la <b>prima guerra mondiale</b> il Veneto fu nuovamente teatro di scontri, con la zona del <b>Piave</b> rimasta per mesi luogo della 
                        resistenza degli italiani.
                    </p>
                    <p>
                        Rappresentato in tutto il mondo dalla splendida <Link href='/destinazioni/venezia' className='text-decoration-none color_link'>Venezia</Link> con la sua laguna, le <b>piccole isole veneziane</b>, <b>Piazza San Marco</b> e il suggestivo <b>Canal Grande</b>, il Veneto 
                        vanta alcune delle più belle città italiane.
                    </p>
                    <p>
                        <Link href='/destinazioni/verona' className='text-decoration-none color_link'>Verona</Link>, la città di <i>Romeo e Giulietta</i> e dell'imponente <b>Arena</b>, vi incanta con un centro storico ricco di monumenti romani che sposano l'arte rinascimentale.
                    </p>
                    <p>
                        <Link href='/destinazioni/Vicenza' className='text-decoration-none color_link'>Vicenza</Link>, scrigno dei tesori del Palladio, è una città da scoprire vicolo per vicolo a partire dal <Link href='/visite/veneto/vicenza/teatro_olimpico' className='text-decoration-none 
                        color_link'>Teatro Olimpico</Link> e dalla maestosa <Link href='/visite/veneto/vicenza/basiliza_palladiana' className='text-decoration-none color_link'>Basilica Palladiana</Link>.
                    </p>
                    <p>
                        A pochi chilometri sorge <Link href='/destinazioni/padova' className='text-decoration-none color_link'>Padova</Link>, la città di Sant’Antonio con le sue famose piazze, la <Link href='/visite/veneto/padova/basilica_del_santa' className='text-decoration-none 
                        color_link'>Basilica del Santo</Link> e la <Link href='/visite/veneto/padova/cappella_degli_scrovegni' className='text-decoration-none color_link'>Cappella degli Scrovegni</Link>, interamente ricoperta dagli <b>affreschi di Giotto</b>.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Veneto'>
                        <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/venezia'
                                onMouseEnter={() => setIsHoveredVenezia(true)}
                                onMouseLeave={() => setIsHoveredVenezia(false)}
                                >Venezia {isHoveredVenezia && <i className="bi bi-chevron-right"></i>}
                            </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
