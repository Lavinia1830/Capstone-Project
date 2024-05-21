import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Biella(props) {

  const [isHoveredQuartieredelPiazzo, setIsHoveredQuartieredelPiazzo] = useState(false);
  const [isHoveredMeBo, setIsHoveredMeBo] = useState(false);
  const [isHoveredFila, setIsHoveredFila] = useState(false);
  const [isHoveredCittadellarte, setIsHoveredCittadellarte] = useState(false);
  const [isHoveredMuseodelTerritorio, setIsHoveredMuseodelTerritorio] = useState(false);

  return (
    <>
      <Head title="Biella"/>
      <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
      >
        <main>
          <div className='biella' style={{ position: 'relative' }}>
            <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Biella</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
          </div>
          <div className="margin mt-3">
            <p>
              Città storicamente nota per la produzione di filati e lane, Biella ha molto da offrire al viaggiatore: <b>chiese e antichi palazzi</b> abbondano tra le vie del centro storico, affiancati 
              da prestigiosi luoghi di cultura, commissionati negli ultimi due secoli dalla classe imprenditoriale cittadina e, ancor prima, dall’aristocrazia locale.
            </p>
            <p>
              Per secoli fedele alla dinastia Savoia, Biella (anticamente chiamata Bugella) custodisce gran parte dei suoi punti di interesse all’interno dei <Link href='/visite/piemonte/biella/quartiere_del_piazzo' 
              className='text-decoration-none color_link'>quartiere del Piazzo</Link> e del <b>Piano</b>: il primo è il nucleo più antico e collinare della città e domina dall’alto il secondo, che si 
              è invece sviluppato più recentemente lungo le sponde del torrente Cervo.
            </p>
            <p>
              Per scoprire il passato più fastoso e prestigioso di Biella, l’appuntamento è tra i viottoli colorati e panoramici del Piazzo, raggiungibile anche con la <b>funicolare</b> di piazza Curiel. Per 
              darsi allo shopping, alle eccellenze enogastronomiche e all’arte contemporanea, converrà invece dirigersi verso il quartiere del Piano, dove perdersi tra il <Link href='/visite/piemonte/biella/mebo' 
              className='text-decoration-none color_link'>MeBo Menabrea Botalla Museum</Link>, la <Link href='/visite/piemonte/biella/fondazione_fila_museum' 
              className='text-decoration-none color_link'>Fondazione FILA Museum</Link> e la <Link href='/visite/piemonte/biella/cittadellarte_forndazione_pistoletto' 
              className='text-decoration-none color_link'>Cittadellarte - Fondazione Pistoletto</Link>.
            </p>
            <p>
              Da quando molte fabbriche locali hanno subito gli effetti della deindustrializzazione, la comunità biellese ha cominciato a investire maggiormente sulle risorse culturali e naturalistiche del 
              territorio.
            </p>
            <p>
              Forse non tutti sanno inoltre che Biella e il suo territorio è anche terra di acqua, una terra irrigata dall'acqua piovana delle Alpi che scorre nei canali, nei torrenti, arrivando alle risaie 
              e alimentando mulini. È un’acqua che nasce 1500 metri sotto terra, priva di durezza, ottima per lavare e rifinire i tessuti preziosi che hanno reso famosa la città.
            </p>
            <p>
              A coronamento di questo impegno dal 2019 Biella rientra a buon diritto tra le <b>Città creative Unesco</b>, per il suo ruolo passato e presente di polo d’innovazione per il settore tessile.
            </p>
          </div>
          <div className='row d-flex justify-content-center mx-0 mb-4'>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Biella'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/biella/quartiere_del_piazzo'
                  onMouseEnter={() => setIsHoveredQuartieredelPiazzo(true)}
                  onMouseLeave={() => setIsHoveredQuartieredelPiazzo(false)}
                  >Quartiere del Piazzo {isHoveredQuartieredelPiazzo && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Biella'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/biella/mebo'
                  onMouseEnter={() => setIsHoveredMeBo(true)}
                  onMouseLeave={() => setIsHoveredMeBo(false)}
                  >MeBo {isHoveredMeBo && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Biella'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/biella/fondazione_fila_museum'
                  onMouseEnter={() => setIsHoveredFila(true)}
                  onMouseLeave={() => setIsHoveredFila(false)}
                  >Fondazione Fila Museum {isHoveredFila && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Biella'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/biella/cittadellarte_forndazione_pistoletto'
                  onMouseEnter={() => setIsHoveredCittadellarte(true)}
                  onMouseLeave={() => setIsHoveredCittadellarte(false)}
                  >Cittadellarte - Fondazione Pistoletto {isHoveredCittadellarte && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Biella'>
              <CardBody className='bottone'>
                <Link 
                  className="bottone_link" 
                  href='/visite/piemonte/biella/museo_del_territorio_biellese'
                  onMouseEnter={() => setIsHoveredMuseodelTerritorio(true)}
                  onMouseLeave={() => setIsHoveredMuseodelTerritorio(false)}
                  >Museo del Territorio Biellese{isHoveredMuseodelTerritorio && <i className="bi bi-chevron-right"></i>}
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
