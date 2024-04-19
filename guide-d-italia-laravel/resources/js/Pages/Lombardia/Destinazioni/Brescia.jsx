import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Brescia(props) {

    const [isHoveredCastelloBrescia, setIsHoveredCastelloBrescia] = useState(false);
    const [isHoveredMuseoSantaGiulia, setIsHoveredMuseoSantaGiulia] = useState(false);
    const [isHoveredMartinengo, setIsHoveredMartinengo] = useState(false);
    const [isHoveredArnaldo, setIsHoveredArnaldo] = useState(false);

  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='brescia' style={{ position: 'relative' }}>
                <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Brescia</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Conclusa la visita, vi chiederete come mai una città simile, vero concentrato di capolavori e superbe attrazioni, non compaia nei circuiti turistici più affermati al fianco di Verona o Padova. Forse il suo fascino è un po’ più stropicciato e vissuto, meno sognante delle località più celebri. Per il resto, però, Brescia, con i monumenti grandiosi e le atmosfere garbate, 
                    le piazze metafisiche e i chiostri appartati, le vestigia di ere gloriose e di pagine tragiche della storia, ha il magnetismo e il ‘peso’ delle grandi città d’arte italiane. E allora visitate i monumenti più importanti; aggiratevi nelle silenziose contrade, dove strade acciottolate con pietre di fiume e palazzi dai colori pastello, così delicatamente padani, mai più 
                    alti di tre piani, si aprono in improvvisi cortili e giardini con fontane; inerpicatevi sui fianchi delle colline appena fuori dal centro, immergendovi in scenari naturali non meno ammalianti di quelli urbani; abbandonatevi alle delizie della vita serale e notturna, accorgendovi di come Brescia sappia essere prodiga anche con chi da una città pretende divertimenti, 
                    buon cibo, drink di qualità e concerti di musica dal vivo. Per convenire, infine, che ogni paragone è superfluo e improprio: Brescia non è solo una destinazione stupenda, ma, soprattutto, una città unica nel suo genere.
                </p>
            </div>
            <div className='row d-flex justify-content-center mx-0 mb-4'>
                <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Brescia'>
                    <CardBody className='bottone'>
                    <Link 
                        className="bottone_link" 
                        href='/visite/brescia/castello_di_brescia'
                        onMouseEnter={() => setIsHoveredCastelloBrescia(true)}
                        onMouseLeave={() => setIsHoveredCastelloBrescia(false)}
                        >Castello di Brescia {isHoveredCastelloBrescia && <i className="bi bi-chevron-right"></i>}
                    </Link>
                    </CardBody>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Brescia'>
                    <CardBody className='bottone'>
                    <Link 
                        className="bottone_link" 
                        href='/visite/brescia/museo_di_santa_giulia'
                        onMouseEnter={() => setIsHoveredMuseoSantaGiulia(true)}
                        onMouseLeave={() => setIsHoveredMuseoSantaGiulia(false)}
                        >Museo di Santa Giulia {isHoveredMuseoSantaGiulia && <i className="bi bi-chevron-right"></i>}
                    </Link>
                    </CardBody>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Brescia'>
                    <CardBody className='bottone'>
                    <Link 
                        className="bottone_link" 
                        href='/visite/brescia/palazzo_martinengo_di_brescia'
                        onMouseEnter={() => setIsHoveredMartinengo(true)}
                        onMouseLeave={() => setIsHoveredMartinengo(false)}
                        >Palazzo Martinengo di Brescia {isHoveredMartinengo && <i className="bi bi-chevron-right"></i>}
                    </Link>
                    </CardBody>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Brescia'>
                    <CardBody className='bottone'>
                    <Link 
                        className="bottone_link" 
                        href='/visite/brescia/piazza_arnaldo'
                        onMouseEnter={() => setIsHoveredArnaldo(true)}
                        onMouseLeave={() => setIsHoveredArnaldo(false)}
                        >Piazza Arnaldo {isHoveredArnaldo && <i className="bi bi-chevron-right"></i>}
                    </Link>
                    </CardBody>
                </Card>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
