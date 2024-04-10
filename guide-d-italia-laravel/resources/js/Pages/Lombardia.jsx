import React, {useState}  from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import {Card, Button} from 'react-bootstrap';
import { Link } from '@inertiajs/react';

export default function Lombardia(props) {


    const [isHoveredMilano, setIsHoveredMilano] = useState(false);
    const [isHoveredBrescia, setIsHoveredBrescia] = useState(false);
    const [isHoveredBergamo, setIsHoveredBergamo] = useState(false);

  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
    >
        <main>
            <div className='text-center lombardia'>
                <h1>Lombardia</h1>
            </div>
            <div className='text-center margin mt-3'>
                <p>
                    La <strong>Lombardia</strong> è una regione dell'Italia Settentrionale. Il suo capoluogo, Milano, è un centro mondiale della moda e della finanza, con molti negozi e ristoranti di lusso. 
                    Il Duomo in stile gotico e la chiesa di Santa Maria delle Grazie, che ospita il dipinto "L'Ultima Cena" di Leonardo da Vinci, testimoniano secoli di arte e cultura. A nord di Milano, il lago di Como è un elegante località prealpina con uno straordinario panorama
                </p>
            </div>
            <div className='row d-flex justify-content-center mx-0 mb-4'>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Lombardia'>
                    <Card.Body className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/milano'
                            onMouseEnter={() => setIsHoveredMilano(true)}
                            onMouseLeave={() => setIsHoveredMilano(false)}
                            >Milano {isHoveredMilano && <i className="bi bi-chevron-right"></i>}
                        </Link>
                    </Card.Body>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Lombardia'>
                    <Card.Body className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/brescia'
                            onMouseEnter={() => setIsHoveredBrescia(true)}
                            onMouseLeave={() => setIsHoveredBrescia(false)}
                            >Brescia {isHoveredBrescia && <i className="bi bi-chevron-right"></i>}
                        </Link>
                    </Card.Body>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Lombardia'>
                    <Card.Body className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/bergamo'
                            onMouseEnter={() => setIsHoveredBergamo(true)}
                            onMouseLeave={() => setIsHoveredBergamo(false)}
                            >Bergamo {isHoveredBergamo && <i className="bi bi-chevron-right"></i>}
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
