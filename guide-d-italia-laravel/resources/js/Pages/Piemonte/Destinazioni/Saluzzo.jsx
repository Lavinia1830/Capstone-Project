import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Saluzzo(props) {

  const [isHoveredCastellodiCastellar, setIsHoveredCastellodiCastellar] = useState(false);
  const [isHoveredPinacotecaMatteoOlivero, setIsHoveredPinacotecaMatteoOlivero] = useState(false);
  const [isHoveredCasaMuseoSilvioPellico, setIsHoveredCasaMuseoSilvioPellico] = useState(false);
  const [isHoveredMuseodellaMemoriaCarceraria, setIsHoveredMuseodellaMemoriaCarceraria] = useState(false);
  const [isHoveredMuseoCivicoCasaCavassa, setIsHoveredMuseoCivicoCasaCavassa] = useState(false);
  const [isHoveredPalazzoSarrioddeLaTour, setIsHoveredPalazzoSarrioddeLaTour] = useState(false);
  
  return (
    <>
      <Head title="Cuneo"/>
      <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
      >
        <main>
          <div className='saluzzo' style={{ position: 'relative' }}>
            <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Saluzzo</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
          </div>
          <div className="margin mt-3">
            <p>
              Provate a immaginare un borgo da cartolina, con stradine acciottolate, porticati, terrazzini fioriti, piazzette in cui si danno convegno gli innamorati, chiesette che profumano di spiritualità, facciate affrescate e l’immancabile fortezza 
              sulla sommità. Così avrete la <b>Saluzzo turistica</b>, che concretizza nella realtà gli svolazzi della fantasia. E se a rompere l’incantesimo ci sono i sobborghi industriali, è pur vero che le Alpi, con il Monviso che domina, ripagano la 
              vista.
            </p>
            <h2 className="color-subtitle">Saluzzo, cosa vedere nel salotto del Piemonte</h2>
            <p>
              La Saluzzo da visitare si snoda sulle colline nei dintorni di Cuneo, con il Monviso che guarda dalla sua postazione imponente questo borgo bellissimo e fotogenico. Alla <b>mappa di Saluzzo</b> aggiungete la posizione sensazionale, la ricca 
              offerta culturale, le succulente mele coltivate nei dintorni e capirete perché la città dell’antico marchesato costituisce una tappa fondamentale di un viaggio in Piemonte. Città della musica, con l’Antico Monastero dell’Annunziata nel 
              <b> centro storico di Saluzzo</b> a contenere l’esuberante bellezza delle note di chi si iscrive alla Scuola di Alto Perfezionamento Musicale, a Saluzzo il turismo si abbina alle passeggiate lente nel borgo, nel Giardino Botanico di Villa 
              Bricherasio e ovviamente nella casa in cui è nato Silvio Pellico.
            </p>
          </div>
          <div className='row d-flex justify-content-center mx-0 mb-4'>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Saluzzo'>
              <CardBody className='bottone'>
                <Link 
                className="bottone_link" 
                href='/visite/piemonte/saluzzo/castello_di_castellar'
                onMouseEnter={() => setIsHoveredCastellodiCastellar(true)}
                onMouseLeave={() => setIsHoveredCastellodiCastellar(false)}
                >Castello di Castellar {isHoveredCastellodiCastellar && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Saluzzo'>
              <CardBody className='bottone'>
                <Link 
                className="bottone_link" 
                href='/visite/piemonte/saluzzo/pinacoteca_matteo_olivero'
                onMouseEnter={() => setIsHoveredPinacotecaMatteoOlivero(true)}
                onMouseLeave={() => setIsHoveredPinacotecaMatteoOlivero(false)}
                >Pinacoteca Matteo Olivero {isHoveredPinacotecaMatteoOlivero && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Saluzzo'>
              <CardBody className='bottone'>
                <Link 
                className="bottone_link" 
                href='/visite/piemonte/saluzzo/casa_museo_silvio_pellico'
                onMouseEnter={() => setIsHoveredCasaMuseoSilvioPellico(true)}
                onMouseLeave={() => setIsHoveredCasaMuseoSilvioPellico(false)}
                >Casa Museo Silvio Pellico {isHoveredCasaMuseoSilvioPellico && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Saluzzo'>
              <CardBody className='bottone'>
                <Link 
                className="bottone_link" 
                href='/visite/piemonte/saluzzo/museo_della_memoria_carceraria'
                onMouseEnter={() => setIsHoveredMuseodellaMemoriaCarceraria(true)}
                onMouseLeave={() => setIsHoveredMuseodellaMemoriaCarceraria(false)}
                >Museo della Memoria Carceraria {isHoveredMuseodellaMemoriaCarceraria && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Saluzzo'>
              <CardBody className='bottone'>
                <Link 
                className="bottone_link" 
                href='/visite/piemonte/saluzzo/museo_civico_casa_cavassa'
                onMouseEnter={() => setIsHoveredMuseoCivicoCasaCavassa(true)}
                onMouseLeave={() => setIsHoveredMuseoCivicoCasaCavassa(false)}
                >Museo Civico Casa Cavassa {isHoveredMuseoCivicoCasaCavassa && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Saluzzo'>
              <CardBody className='bottone'>
                <Link 
                className="bottone_link" 
                href='/visite/piemonte/saluzzo/palazzo_sarriod_de_la_tour'
                onMouseEnter={() => setIsHoveredPalazzoSarrioddeLaTour(true)}
                onMouseLeave={() => setIsHoveredPalazzoSarrioddeLaTour(false)}
                >Palazzo Sarriod de La Tour {isHoveredPalazzoSarrioddeLaTour && <i className="bi bi-chevron-right"></i>}
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
