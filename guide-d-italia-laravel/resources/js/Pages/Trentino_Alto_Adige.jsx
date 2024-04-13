import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import {Card, CardBody} from 'react-bootstrap';
import { Link } from '@inertiajs/react';

export default function Trentino_Alto_Adige(props) {

    const [isHoveredTrento, setIsHoveredTrento] = useState(false);
    const [isHoveredRovereto, setIsHoveredRovereto] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='text-center trentino_alto_adige'>
                    <h1>Trentino Alto Adige</h1>
                </div>
                <div className='text-center margin mt-3'>
                    <p>
                        Il <strong>Trentino Alto Adige</strong> è una regione amministrativa dell'Italia settentrionale che confina con l'Austria a nord, con la Svizzera e la Lombardia a ovest e con il Veneto a sud e a est.
                    </p>
                    <p>
                        Comprende le province di Bolzano e di Trento ed il suo capoluogo regionale è Trento.
                    </p>
                    <p>
                        Il Trentino-Alto Adige costituisce dal 1948 (insieme al Friuli-Venezia Giulia, alla Sardegna, alla Sicilia e alla Valle d'Aosta) una <b>regione autonoma a statuto speciale</b>. La regione è infatti divisa in due aree con caratteri linguistici e culturali diversi: in Trentino si parla 
                        l'italiano, mentre in Alto Adige prevale il tedesco, accanto ad una minoranza che parla il ladino in alcune vallate delle Dolomiti.
                    </p>
                    <p>
                        Tra le garanzie regionali c'è quella di assicurare il mantenimento del <b>plurilinguismo</b>: il tedesco è equiparato all'italiano a tutti gli effetti.
                    </p>
                    <p>
                        La doppia denominazione di Trentino-Alto Adige mostra già nel nome che la regione è formata da due sezioni ben distinte, un tempo austriache ed entrate a far parte del Regno d'Italia nel 1918 col nome di <b>Venezia Tridentina</b>, per distinguerle dalla <b>Venezia Euganea</b>, l'odierno 
                        Veneto. Il Trentino, di lingua e cultura italiane, prende il suo nome da quello del capoluogo, Trento.
                    </p>
                    <p>
                        L'Alto Adige, che invece storicamente resta soprattutto di lingua e cultura tedesche, trae il nome dal fiume Adige, di cui occupa la sezione superiore del bacino idrografico. Si può anche definire, con denominazione storico-geografica, <b>Sud Tirolo</b>.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Trentino_Alto_Adige'>
                        <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/trento'
                                onMouseEnter={() => setIsHoveredTrento(true)}
                                onMouseLeave={() => setIsHoveredTrento(false)}
                                >Trento {isHoveredTrento && <i className="bi bi-chevron-right"></i>}
                            </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Trentino_Alto_Adige'>
                        <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/rovereto'
                                onMouseEnter={() => setIsHoveredRovereto(true)}
                                onMouseLeave={() => setIsHoveredRovereto(false)}
                                >Rovereto {isHoveredRovereto && <i className="bi bi-chevron-right"></i>}
                            </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
