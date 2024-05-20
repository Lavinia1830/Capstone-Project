import React,{useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Novara(props) {

  const [isHoveredCupolaSanGaudenzio, setIsHoveredCupolaSanGaudenzio] = useState(false);
  const [isHoveredBasilicaSanGaudenzio, setIsHoveredBasilicaSanGaudenzio] = useState(false);
  const [isHoveredCattedraleSantaMariaAssunta, setIsHoveredCattedraleSantaMariaAssunta] = useState(false);
  const [isHoveredTeatroCoccia, setIsHoveredTeatroCoccia] = useState(false);
  const [isHoveredPiazzaMartiri, setIsHoveredPiazzaMartiri] = useState(false);
  const [isHoveredCastelloVisconteoSforzesco, setIsHoveredCastelloVisconteoSforzesco] = useState(false);
  const [isHoveredPalazzodelMercato, setIsHoveredPalazzodelMercato] = useState(false);
  const [isHoveredBroletto, setIsHoveredBroletto] = useState(false);
  const [isHoveredMuraRomane, setIsHoveredMuraRomane] = useState(false);

  return (
    <>
      <Head title="Novara"/>
      <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
      >
          <main>
            <div className='novara' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Novara</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
            </div>
            <div className="margin mt-3">
              <p>
                  Affogata tra le risaie, e con il nucleo antico circondato da palazzoni ricevuti in eredità dagli sconsiderati anni ’60, visitare Novara può essere, in prima battuta, un’esperienza un po’ malinconica. Questo perché sembra soffrire di un profondo disturbo della personalità, a causa del suo essere città di pianura in una 
                  regione di montagna e per il fatto di considerarsi in Lombardia nonostante la geografia politica si ostini a darle torto. Messe da parte queste contraddizioni, superate le architetture squadrate e vagando con il mento all’insù tra le silenziose strade del centro, la mappa di Novara appare d’un tratto come un quadro sorprendente e indaffarato. In cui la proverbiale concretezza lombarda sembra fondersi con quello spirito raffinato e vagamente trasognato dei piemontesi, creando un amalgama speciale che ha pochi rivali.
              </p>
              <h2 className='color-subtitle'>Cosa vedere a Novara tra palazzi della fede e storici</h2>
              <p>
                  I monumenti di Novara più importanti e amati sono il Duomo, il Battistero e la Cupola di Antonelli: tra bellezze architettoniche a cui è davvero impossibile resistere. Tra i palazzi storici quello dei fasti è senz’altro Palazzo Tornielli Bellini, oggi sede di una Banca ma visitabile in alcuni giorni dell’anno.
              </p>
            </div>
            <div className='row d-flex justify-content-center mx-0 mb-4'>
              <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Novara'>
                <CardBody className='bottone'>
                  <Link 
                    className="bottone_link" 
                    href='/visite/piemonte/novara/cupola_di_san_gaudenzio'
                    onMouseEnter={() => setIsHoveredCupolaSanGaudenzio(true)}
                    onMouseLeave={() => setIsHoveredCupolaSanGaudenzio(false)}
                    >La Cupola di San Guadenzio {isHoveredCupolaSanGaudenzio && <i className="bi bi-chevron-right"></i>}
                  </Link>
                </CardBody>
              </Card>
              <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Novara'>
                <CardBody className='bottone'>
                  <Link 
                    className="bottone_link" 
                    href='/visite/piemonte/novara/basilica_di_san_gaudenzio'
                    onMouseEnter={() => setIsHoveredBasilicaSanGaudenzio(true)}
                    onMouseLeave={() => setIsHoveredBasilicaSanGaudenzio(false)}
                    >La Bisilica di San Gaudenzio {isHoveredBasilicaSanGaudenzio && <i className="bi bi-chevron-right"></i>}
                  </Link>
                </CardBody>
              </Card>
              <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Novara'>
                <CardBody className='bottone'>
                  <Link 
                    className="bottone_link" 
                    href='/visite/piemonte/novara/cattedrale_santa_maria_assunta'
                    onMouseEnter={() => setIsHoveredCattedraleSantaMariaAssunta(true)}
                    onMouseLeave={() => setIsHoveredCattedraleSantaMariaAssunta(false)}
                    >La Cattedrale Santa Maria Assunta {isHoveredCattedraleSantaMariaAssunta && <i className="bi bi-chevron-right"></i>}
                  </Link>
                </CardBody>
              </Card>
              <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Novara'>
                <CardBody className='bottone'>
                  <Link 
                    className="bottone_link" 
                    href='/visite/piemonte/novara/teatro_coccia'
                    onMouseEnter={() => setIsHoveredTeatroCoccia(true)}
                    onMouseLeave={() => setIsHoveredTeatroCoccia(false)}
                    >Teatro Coccia {isHoveredTeatroCoccia && <i className="bi bi-chevron-right"></i>}
                  </Link>
                </CardBody>
              </Card>
              <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Novara'>
                <CardBody className='bottone'>
                  <Link 
                    className="bottone_link" 
                    href='/visite/piemonte/novara/piazza_martini'
                    onMouseEnter={() => setIsHoveredPiazzaMartiri(true)}
                    onMouseLeave={() => setIsHoveredPiazzaMartiri(false)}
                    >Piazza Martini {isHoveredPiazzaMartiri && <i className="bi bi-chevron-right"></i>}
                  </Link>
                </CardBody>
              </Card>
              <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Novara'>
                <CardBody className='bottone'>
                  <Link 
                    className="bottone_link" 
                    href='/visite/piemonte/novara/castello_visconteo_sforzesco'
                    onMouseEnter={() => setIsHoveredCastelloVisconteoSforzesco(true)}
                    onMouseLeave={() => setIsHoveredCastelloVisconteoSforzesco(false)}
                    >Il Castello Visconteo Sforzesco {isHoveredCastelloVisconteoSforzesco && <i className="bi bi-chevron-right"></i>}
                  </Link>
                </CardBody>
              </Card>
              <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Novara'>
                <CardBody className='bottone'>
                  <Link 
                    className="bottone_link" 
                    href='/visite/piemonte/novara/palazzo_del_mercato'
                    onMouseEnter={() => setIsHoveredPalazzodelMercato(true)}
                    onMouseLeave={() => setIsHoveredPalazzodelMercato(false)}
                    >Il Palazzo del Mercato {isHoveredPalazzodelMercato && <i className="bi bi-chevron-right"></i>}
                  </Link>
                </CardBody>
              </Card>
              <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Novara'>
                <CardBody className='bottone'>
                  <Link 
                    className="bottone_link" 
                    href='/visite/piemonte/novara/broletto'
                    onMouseEnter={() => setIsHoveredBroletto(true)}
                    onMouseLeave={() => setIsHoveredBroletto(false)}
                    >Il Broletto {isHoveredBroletto && <i className="bi bi-chevron-right"></i>}
                  </Link>
                </CardBody>
              </Card>
              <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Novara'>
                <CardBody className='bottone'>
                  <Link 
                    className="bottone_link" 
                    href='/visite/piemonte/novara/mura_romane'
                    onMouseEnter={() => setIsHoveredMuraRomane(true)}
                    onMouseLeave={() => setIsHoveredMuraRomane(false)}
                    >Le Mura Romane {isHoveredMuraRomane && <i className="bi bi-chevron-right"></i>}
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
