import React, {useState}  from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import {Card, CardBody} from 'react-bootstrap';
import { Link } from '@inertiajs/react';

export default function Liguria(props) {

    const [isHoveredGenova, setIsHoveredGenova] = useState(false);
    const [isHoveredCamogli, setIsHoveredCamogli] = useState(false);
    const [isHoveredGolfoTiguglio, setIsHoveredGolfoTiguglio] = useState(false);
    const [isHoveredASanFruttuoso, setIsHoveredASanFruttuoso] = useState(false);

  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
    >
        <main>
            <div className='text-center liguria'>
                <h1>Liguria</h1>
            </div>
            <div className='text-center margin mt-3'>
                <p>
                    La <strong>Lombardia</strong> è una regione dell'Italia Settentrionale. Il suo capoluogo, Milano, è un centro mondiale della moda e della finanza, con molti negozi e ristoranti di lusso. 
                    Il Duomo in stile gotico e la chiesa di Santa Maria delle Grazie, che ospita il dipinto "L'Ultima Cena" di Leonardo da Vinci, testimoniano secoli di arte e cultura. A nord di Milano, il lago di Como è un elegante località prealpina con uno straordinario panorama
                </p>
            </div>
            <div className='row d-flex justify-content-center mx-0 mb-4'>
                <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Liguria'>
                    <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/genova'
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
                        href='/destinazioni/camogli'
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
                        href='/destinazioni/golfo_del_tigullio'
                        onMouseEnter={() => setIsHoveredGolfoTiguglio(true)}
                        onMouseLeave={() => setIsHoveredGolfoTiguglio(false)}
                        >Golfo del Tigullio {isHoveredGolfoTiguglio && <i className="bi bi-chevron-right"></i>}
                    </Link>
                    </CardBody>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Liguria'>
                    <CardBody className='bottone'>
                    <Link 
                        className="bottone_link" 
                        href='/destinazioni/abbazia_di_san_fruttuoso'
                        onMouseEnter={() => setIsHoveredASanFruttuoso(true)}
                        onMouseLeave={() => setIsHoveredASanFruttuoso(false)}
                        >Abbazia di San Fruttuoso {isHoveredASanFruttuoso && <i className="bi bi-chevron-right"></i>}
                    </Link>
                    </CardBody>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Liguria'>
                    <CardBody className='bottone'>
                    <Link 
                        className="bottone_link" 
                        href='/destinazioni/baia_di_san_fruttuoso'
                        onMouseEnter={() => setIsHoveredASanFruttuoso(true)}
                        onMouseLeave={() => setIsHoveredASanFruttuoso(false)}
                        >Baia di San Fruttuoso {isHoveredASanFruttuoso && <i className="bi bi-chevron-right"></i>}
                    </Link>
                    </CardBody>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Liguria'>
                    <CardBody className='bottone'>
                    <Link 
                        className="bottone_link" 
                        href='/destinazioni/le_5_terre'
                        onMouseEnter={() => setIsHoveredASanFruttuoso(true)}
                        onMouseLeave={() => setIsHoveredASanFruttuoso(false)}
                        >Le 5 terre {isHoveredASanFruttuoso && <i className="bi bi-chevron-right"></i>}
                    </Link>
                    </CardBody>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Liguria'>
                    <CardBody className='bottone'>
                    <Link 
                        className="bottone_link" 
                        href='/destinazioni/recco'
                        onMouseEnter={() => setIsHoveredASanFruttuoso(true)}
                        onMouseLeave={() => setIsHoveredASanFruttuoso(false)}
                        >Recco {isHoveredASanFruttuoso && <i className="bi bi-chevron-right"></i>}
                    </Link>
                    </CardBody>
                </Card>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
