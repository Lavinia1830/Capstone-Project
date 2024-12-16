import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Asti(props) {

    const [isHoveredCollegiatadiSanSecondo, setIsHoveredCollegiatadiSanSecondo] = useState(false);
    const [isHoveredPalazzoAlfieri, setIsHoveredPalazzoAlfieri] = useState(false);
    const [isHoveredPalazzoMazzetti, setIsHoveredPalazzoMazzetti] = useState(false);
    const [isHoveredCattedralediSMariaAssunta, setIsHoveredCattedralediSMariaAssunta] = useState(false);
    const [isHoveredChiesadiSMartino, setIsHoveredChiesadiSMartino] = useState(false);
    const [isHoveredCMdiSPietroeMA, setIsHoveredCMdiSPietroeMA] = useState(false);
    const [isHoveredMuseoeCriptadiSAnastasio, setIsHoveredMuseoeCriptadiSAnastasio] = useState(false);
    const [isHoveredPMArchivioStoricoeMdelP, setIsHoveredPMArchivioStoricoeMdelP] = useState(false);
    const [isHoveredPOeMdelR, setIsHoveredPOeMdelR] = useState(false);
    const [isHoveredTorreTroyana, setIsHoveredTorreTroyana] = useState(false);




    return (
      <>
        <Head title="Asti"/>
        <AuthenticatedLayout
          auth={props.auth}
          errors={props.errors}
        >
          <main>
            <div className='asti' style={{ position: 'relative' }}>
              <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Asti</h1>
              <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
              <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
            </div>
            <div className="margin mt-3">
              <p>
                  Dolci colline ricoperte da vigneti, antichi borghi, castelli arroccati e pievi romaniche nel verde della campagna: è la provincia di <a href='https://visit.asti.it/'
                  className='text-decoration-none color_link'>Asti</a>, cuore pulsante del <b>Monferrato</b> noto per la sua produzione vinicola. Qui, si assegna la Douja d’Or, un 
                  concorso enologico che ogni anno premia i migliori vini piemontesi.
              </p>
              <p>
                  La città di Asti, lungo l’antica via Francigena, è detta sin dal Medioevo <b>città delle cento torri</b>. Molte di esse ancora presenti, tra le quali la Torre Troyana 
                  del XIII secolo, alta 44 metri e simbolo della città. Da non perdere la <Link href='/visite/piemonte/asti/collegiata_di_san_secondo' className='text-decoration-none 
                  color_link'>Collegiata di San Secondo</Link>, la più grande chiesa gotica del <Link href='/piemonte' className='text-decoration-none color_link'>Piemonte</Link> dedicata 
                  a Santa Maria Assunta e San Gottardo, <Link href='/visite/piemonte/asti/palazzo_alfieri'className='text-decoration-none color_link'>Palazzo Alfieri</Link> dove nacque 
                  lo scrittore Vittorio Alfieri e il barocco <Link href='/visite/piemonte/asti/palazzo_mazzetti' className='text-decoration-none color_link'>Palazzo Mazzetti</Link>, oggi museo civico.
              </p>
              <p>
                  Tra i borghi più belli da scoprire ci sono <b>Cocconato d’Asti</b> con un magnifico panorama su Valle Versa, <b>Moncalvo</b> nota come la città più piccola 
                  d’Italia, <b>Mombaruzzo</b> celebre per i suoi amaretti e <b>Nizza Monferrato</b> dove si coltiva il cardo gobbo. Ad <b>Albugnano</b> si trova la splendida abbazia 
                  romanico-gotico di Vezzolano. Tra i <b>castelli</b> meritano una sosta Piea, San Martino Alfieri, Montiglio, Castell’Alfero e il trecentesco Costigliole d’Asti che 
                  ospita l’Istituto di cucina italiana per stranieri.
              </p>
              <p>
                  Parlando di cucina, non perdete le <b>delizie locali</b>: agnolotti, <Link href='/enogastronomia/piemonte/cueno/tartufo_bianco' className='text-decoration-none color_link'>tartufo</Link>, 
                  salumi e naturalmente la bagna cauda. In estate e autunno potete godervi anche un <b>picnic tra le vigne</b> a base di vini e formaggi locali.
              </p>
            </div>
            <div className='row d-flex justify-content-center mx-0 mb-4'>
              <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Asti'>
                <CardBody className='bottone'>
                  <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/asti/collegiata_di_san_secondo'
                  onMouseEnter={() => setIsHoveredCollegiatadiSanSecondo(true)}
                  onMouseLeave={() => setIsHoveredCollegiatadiSanSecondo(false)}
                  >Collegiata di San Secondo {isHoveredCollegiatadiSanSecondo && <i className="bi bi-chevron-right"></i>}
                  </Link>
                </CardBody>
              </Card>
              <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Asti'>
                <CardBody className='bottone'>
                  <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/asti/palazzo_alfieri'
                  onMouseEnter={() => setIsHoveredPalazzoAlfieri(true)}
                  onMouseLeave={() => setIsHoveredPalazzoAlfieri(false)}
                  >Palazzo Alfieri {isHoveredPalazzoAlfieri && <i className="bi bi-chevron-right"></i>}
                  </Link>
                </CardBody>
              </Card>
              <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Asti'>
                <CardBody className='bottone'>
                  <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/asti/palazzo_mazzetti'
                  onMouseEnter={() => setIsHoveredPalazzoMazzetti(true)}
                  onMouseLeave={() => setIsHoveredPalazzoMazzetti(false)}
                  >Palazzo Mazzetti {isHoveredPalazzoMazzetti && <i className="bi bi-chevron-right"></i>}
                  </Link>
                </CardBody>
              </Card>
              <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Asti'>
                <CardBody className='bottone'>
                  <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/asti/cattedrale_di_santa_maria_assunta'
                  onMouseEnter={() => setIsHoveredCattedralediSMariaAssunta(true)}
                  onMouseLeave={() => setIsHoveredCattedralediSMariaAssunta(false)}
                  >Cattedrale di S. Maria Assunta {isHoveredCattedralediSMariaAssunta && <i className="bi bi-chevron-right"></i>}
                  </Link>
                </CardBody>
              </Card>
              <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Asti'>
                <CardBody className='bottone'>
                  <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/asti/chiesa_di_san_martino'
                  onMouseEnter={() => setIsHoveredChiesadiSMartino(true)}
                  onMouseLeave={() => setIsHoveredChiesadiSMartino(false)}
                  >Chiesa di S. Martino {isHoveredChiesadiSMartino && <i className="bi bi-chevron-right"></i>}
                  </Link>
                </CardBody>
              </Card>
              <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Asti'>
                <CardBody className='bottone'>
                  <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/asti/complesso_monumentale_di_sant_pietro_e_museo_archeologico'
                  onMouseEnter={() => setIsHoveredCMdiSPietroeMA(true)}
                  onMouseLeave={() => setIsHoveredCMdiSPietroeMA(false)}
                  >Complesso Monumentale di S. Pietro... {isHoveredCMdiSPietroeMA && <i className="bi bi-chevron-right"></i>}
                  </Link>
                </CardBody>
              </Card>
              <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Asti'>
                <CardBody className='bottone'>
                  <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/asti/museo_e_cripta_di_santa_anastasio'
                  onMouseEnter={() => setIsHoveredMuseoeCriptadiSAnastasio(true)}
                  onMouseLeave={() => setIsHoveredMuseoeCriptadiSAnastasio(false)}
                  >Museo e Cripta di S. Anastasio {isHoveredMuseoeCriptadiSAnastasio && <i className="bi bi-chevron-right"></i>}
                  </Link>
                </CardBody>
              </Card>
              <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Asti'>
                <CardBody className='bottone'>
                  <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/asti/palazzo_mazzola_archivio_storico_e_museo_del_palio'
                  onMouseEnter={() => setIsHoveredPMArchivioStoricoeMdelP(true)}
                  onMouseLeave={() => setIsHoveredPMArchivioStoricoeMdelP(false)}
                  >Palazzo Mazzola, Archivio storico... {isHoveredPMArchivioStoricoeMdelP && <i className="bi bi-chevron-right"></i>}
                  </Link>
                </CardBody>
              </Card>
              <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Asti'>
                <CardBody className='bottone'>
                  <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/asti/palazzo_ottolenghi_e_museo_del_risorgimento'
                  onMouseEnter={() => setIsHoveredPOeMdelR(true)}
                  onMouseLeave={() => setIsHoveredPOeMdelR(false)}
                  >Palazzo Ottolenghi e Museo... {isHoveredPOeMdelR && <i className="bi bi-chevron-right"></i>}
                  </Link>
                </CardBody>
              </Card>
              <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Asti'>
                <CardBody className='bottone'>
                  <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/asti/torre_troyana'
                  onMouseEnter={() => setIsHoveredTorreTroyana(true)}
                  onMouseLeave={() => setIsHoveredTorreTroyana(false)}
                  >Torre Troyana {isHoveredTorreTroyana && <i className="bi bi-chevron-right"></i>}
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
