import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';
import Footer from '@/Components/Footer';

export default function Torino(props) {



  const [isHoveredPalazzoReale, setIsHoveredPalazzoReale] = useState(false);
  const [isHoveredMuseoCinema, setIsHoveredMuseoCinema] = useState(false);
  const [isHoveredMuseoEgizio, setIsHoveredMuseoEgizio] = useState(false);
  const [isHoveredPortaPalazzo, setIsHoveredPortaPalazzo] = useState(false);
  const [isHoveredPalazzoMadama, setIsHoveredPalazzoMadama] = useState(false);
  const [isHoveredDuomoSanGiovanni, setIsHoveredDuomoSanGiovanni] = useState(false);
  const [isHoveredPoeParcoValentino, setIsHoveredPoeParcoValentino] = useState(false);
  const [isHoveredReggiadiVenariareale, setIsHoveredReggiadiVenariareale] = useState(false);
  const [isHoveredMontedeiCappuccini, setIsHoveredMontedeiCappuccini] = useState(false);
  const [isHoveredPiazzaSanCarlo, setIsHoveredPiazzaSanCarlo] = useState(false);
  const [isHoveredBasilicadiSuperga, setIsHoveredBasilicadiSuperga] = useState(false);
  const [isHoveredChiesaGranMadre, setIsHoveredChiesaGranMadre] = useState(false);
  const [isHoveredEataly, setIsHoveredEataly] = useState(false);
  const [isHoveredGAM, setIsHoveredGAM] = useState(false);
  const [isHoveredMAO, setIsHoveredMAO] = useState(false);
  const [isHoveredMurazzi, setIsHoveredMurazzi] = useState(false);
  const [isHoveredMuseoNRisorgimentoI, setIsHoveredMuseoNRisorgimentoI] = useState(false);
  const [isHoveredMuseoAutomobile, setIsHoveredMuseoAutomobile] = useState(false);
  const [isHoveredMuseoSindone, setIsHoveredMuseoSindone] = useState(false);
  const [isHoveredQuadrilateroRomano, setIsHoveredQuadrilateroRomano] = useState(false);

  return (
    <>
      <Head title="Torino"/>
      <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
      >
        <main>
          <div className='torino' style={{ position: 'relative' }}>
            <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Torino</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
          </div>
          <div className='margin mt-3'>
            <p>
              Capitale sabauda della metà del XVI secolo, Torino fu per breve tempo la sede del Parlamento nazionale dopo l'Unità e fu il luogo di nascita dell'industria italiana: colossi come la Fiat attrassero centinaia di migliaia di immigrati dal Sud, che
              furono alloggiati in quartieri appositamente costruiti come Mirafiori. A partire da metà degli anni '90 tutto è cambiato. La città-fabbrica in due decenni si è trasformata in una città d'arte di quelle che tutto il mondo invidia all'Italia. 
              L'hardware c'era tutto: le sollenni architetture sabaude, la <i>Grandeur</i> da ex capitale politica, il rigore da capitale intellettuale, la quinta delle Alpi, la profumata tradizione gastronomica, la vicinanza al <i>loisir</i> delle Langhe. <br/>
              Oggi le guide di Torino puntano tutto sul suo essere elegante e raffinata, splendida e altera. Ma anche giovane, allegra, piena di vita notturna. Saranno i locals a dirvi quanto amano perdersi nelle sue piazze immerse o nei vicoli che si addentrano 
              nel quartiere del Quadrilatero Romano. E non potete fare a meno di prenderli ad esempio, perché la Torino da vedere, oggi, è molto di più di ciò che era in passato.
            </p>
          </div>
          <div className="margin mt-3">
            <h2 className='color-subtitle'>Torino, da vedere nella città dei portici</h2>
            <p>
              Verrebbe di dire che Torino sia la più bella delle città italine mono note (o la meno nota dalle più belle città italiane). E quindi, forse, la più sorprendente di tutte. Dopo i Giochi Invernali del 2006 che hanno acceso la vita sulle cime intorno alla 
              città, anche il capoluogo è diventato improvvisamente il centro della vita turistica delle regione Piemonte.
            </p>
          </div>
          <div className="margin mt-3">
            <h2 className='color-subtitle'>Da non perdere a Torino</h2>
            <p>
              Visitare Torino in un giorno non soddisferà la vostra curiosità, perchè c'è tanto da vedere, tanto da scoprire. Ma un itinerario che va dalla Stazione Porta Nuova al salotto della città, ovvero Piazza San Carlo, poi continua sotto i portici e sfocia in 
              Piazza Castello sarà comunque meglio di niente. I musei di Torino - da quello Egizio al bellissimo Museo del Cinema, passando per il MAO (Museo di Arte Orientale) sono il passatempo ideale per chi vuole conoscere Torino, visitare la città dal punto di 
              vista dell'offerta culturale.
            </p>
          </div>
          <div className="margin mt-3">
            <h2 className='color-subtitle'>Torino, informazioni per visitarla</h2>
            <p>
              Se si approva in treno alla stazione Porta Nuova, il gioco è fatto: un piccolo attraversamanto in Piazza Carlo Felice e si è in centro, pronti per percorrerlo tutto con qualche deviazione: quella in Via Garibaldi, che si snoda poi nei vicoli del Quadrilatero; 
              quella in via Po, da cui si accede alla incredibile Piazza Carignano.
            </p>
          </div>
          <div className='row d-flex justify-content-center mx-0 mb-4'>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Torino'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/torino/palazzo_reale'
                  onMouseEnter={() => setIsHoveredPalazzoReale(true)}
                  onMouseLeave={() => setIsHoveredPalazzoReale(false)}
                  >Palazzo Reale {isHoveredPalazzoReale && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Torino'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/torino/museo_nazionale_del_cinema'
                  onMouseEnter={() => setIsHoveredMuseoCinema(true)}
                  onMouseLeave={() => setIsHoveredMuseoCinema(false)}
                  >Museo Nazionale del Cinama {isHoveredMuseoCinema && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Torino'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/torino/museo_egizio'
                  onMouseEnter={() => setIsHoveredMuseoEgizio(true)}
                  onMouseLeave={() => setIsHoveredMuseoEgizio(false)}
                  >Museo Egizio {isHoveredMuseoEgizio && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Torino'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/torino/porta_palazzo_e_il_balôn'
                  onMouseEnter={() => setIsHoveredPortaPalazzo(true)}
                  onMouseLeave={() => setIsHoveredPortaPalazzo(false)}
                  >Porta Palazzo e Il Balôn {isHoveredPortaPalazzo && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Torino'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/torino/palazzo_madama'
                  onMouseEnter={() => setIsHoveredPalazzoMadama(true)}
                  onMouseLeave={() => setIsHoveredPalazzoMadama(false)}
                  >Palazzo Madama {isHoveredPalazzoMadama && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Torino'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/torino/duomo_di_san_giovanni'
                  onMouseEnter={() => setIsHoveredDuomoSanGiovanni(true)}
                  onMouseLeave={() => setIsHoveredDuomoSanGiovanni(false)}
                  >Duomo di San Giovanni {isHoveredDuomoSanGiovanni && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Torino'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/torino/po_e_parco_del_valentino'
                  onMouseEnter={() => setIsHoveredPoeParcoValentino(true)}
                  onMouseLeave={() => setIsHoveredPoeParcoValentino(false)}
                  >Po e Parco del Valentino {isHoveredPoeParcoValentino && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Torino'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/torino/reggia_di_venaria_reale'
                  onMouseEnter={() => setIsHoveredReggiadiVenariareale(true)}
                  onMouseLeave={() => setIsHoveredReggiadiVenariareale(false)}
                  >Reggia di Venaria Reale {isHoveredReggiadiVenariareale && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Torino'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/torino/monte_dei_cappuccini'
                  onMouseEnter={() => setIsHoveredMontedeiCappuccini(true)}
                  onMouseLeave={() => setIsHoveredMontedeiCappuccini(false)}
                  >Monte dei Cappuccini {isHoveredMontedeiCappuccini && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Torino'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/torino/piazza_san_carlo'
                  onMouseEnter={() => setIsHoveredPiazzaSanCarlo(true)}
                  onMouseLeave={() => setIsHoveredPiazzaSanCarlo(false)}
                  >Piazza San Carlo {isHoveredPiazzaSanCarlo && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Torino'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/torino/basilica_di_superga'
                  onMouseEnter={() => setIsHoveredBasilicadiSuperga(true)}
                  onMouseLeave={() => setIsHoveredBasilicadiSuperga(false)}
                  >Basilica di Superga {isHoveredBasilicadiSuperga && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Torino'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/torino/chiesa_della_gran_maria_di_dio'
                  onMouseEnter={() => setIsHoveredChiesaGranMadre(true)}
                  onMouseLeave={() => setIsHoveredChiesaGranMadre(false)}
                  >Chiesa della Grande Madre di Dio {isHoveredChiesaGranMadre && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Torino'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/torino/eataly'
                  onMouseEnter={() => setIsHoveredEataly(true)}
                  onMouseLeave={() => setIsHoveredEataly(false)}
                  >Eataly {isHoveredEataly && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Torino'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/torino/gam'
                  onMouseEnter={() => setIsHoveredGAM(true)}
                  onMouseLeave={() => setIsHoveredGAM(false)}
                  >GAM {isHoveredGAM && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Torino'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/torino/museo_d_arte_orientale'
                  onMouseEnter={() => setIsHoveredMAO(true)}
                  onMouseLeave={() => setIsHoveredMAO(false)}
                  >MAO - Museo di Arte Orientale {isHoveredMAO && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Torino'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/torino/murazzi'
                  onMouseEnter={() => setIsHoveredMurazzi(true)}
                  onMouseLeave={() => setIsHoveredMurazzi(false)}
                  >Murazzi {isHoveredMurazzi && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Torino'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/torino/museo_nazionale_del_risorgimento_italiano'
                  onMouseEnter={() => setIsHoveredMuseoNRisorgimentoI(true)}
                  onMouseLeave={() => setIsHoveredMuseoNRisorgimentoI(false)}
                  >Museo Risorgimento Italiano {isHoveredMuseoNRisorgimentoI && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Torino'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/torino/museo_dell_automobile'
                  onMouseEnter={() => setIsHoveredMuseoAutomobile(true)}
                  onMouseLeave={() => setIsHoveredMuseoAutomobile(false)}
                  >Museo dell'Automobile {isHoveredMuseoAutomobile && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Torino'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/torino/museo_della_sindone'
                  onMouseEnter={() => setIsHoveredMuseoSindone(true)}
                  onMouseLeave={() => setIsHoveredMuseoSindone(false)}
                  >Museo della Sindone {isHoveredMuseoSindone && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Torino'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/torino/quadrilateo_romano'
                  onMouseEnter={() => setIsHoveredQuadrilateroRomano(true)}
                  onMouseLeave={() => setIsHoveredQuadrilateroRomano(false)}
                  >Quadrilatero romano {isHoveredQuadrilateroRomano && <i className="bi bi-chevron-right"></i>}
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
