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
  const [isHoveredChiesadiSpalRosario, setIsHoveredChiesadiSpalRosario] = useState(false);
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
                <b>Affogata</b> tra le <b>risaie</b>, e con il <b>nucleo antico</b> circondato da <b>palazzoni</b> ricevuti in eredità dagli sconsiderati <b>anni ’60</b>, 
                visitare <b>Novara</b> può essere, in prima battuta, un’esperienza un po’ <b>malinconica</b>. Questo perché sembra soffrire di un profondo <b>disturbo 
                della personalità</b>, a causa del suo essere <b>città di pianura</b> in una <b>regione di montagna</b> e per il fatto di considerarsi 
                in <Link href='/lombardia' className='text-decoration-none color_link'>Lombardia</Link> nonostante la <b>geografia politica</b> si ostini a darle torto. 
                Messe da parte queste contraddizioni, superate le <b>architetture squadrate</b> e vagando con il <b>mento all’insù</b> tra le <b>silenziose strade del 
                centro</b>, la <b>mappa di</b> <strong>Novara</strong> appare d’un tratto come un <b>quadro sorprendente</b> e indaffarato. In cui la 
                proverbiale <b>concretezza lombarda</b> sembra fondersi con quello spirito <b>raffinato</b> e vagamente <b>trasognato</b> dei piemontesi, creando 
                un <b>amalgama speciale</b> che ha pochi rivali.
              </p>
              <h2 className='color-subtitle'>Cosa vedere a Novara tra palazzi della fede e storici</h2>
              <p>
                  I monumenti di <strong>Novara</strong> più importanti e amati sono il <b>Duomo</b>, il <b>Battistero</b> e la <b>Cupola di Antonelli</b>: tra 
                  bellezze architettoniche a cui è davvero impossibile resistere. Tra i <b>palazzi storici</b> quello dei fasti è senz’altro <b>Palazzo Tornielli 
                  Bellini</b>, oggi sede di una <b>Banca</b> ma visitabile in alcuni giorni dell’anno.
              </p>
            </div>
            <div className='row d-flex justify-content-center mx-0 mb-4'>
              <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Biella'>
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
                    href='/visite/piemonte/novara/chiesa_di_san_pietro_al_rosario'
                    onMouseEnter={() => setIsHoveredChiesadiSpalRosario(true)}
                    onMouseLeave={() => setIsHoveredChiesadiSpalRosario(false)}
                    >Chiesa di San Pietro al Rosario {isHoveredChiesadiSpalRosario && <i className="bi bi-chevron-right"></i>}
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
