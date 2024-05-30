import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Cuneo(props) {

  const [isHoveredPiazzaGalimberti, setIsHoveredPiazzaGalimberti] = useState(false);
  const [isHoveredPiazzadellaTorre, setIsHoveredPiazzadellaTorre] = useState(false);
  const [isHoveredContradaMondovì, setIsHoveredContradaMondovì] = useState(false);
  const [isHoveredLanghe, setIsHoveredLanghe] = useState(false);



  return (
    <>
      <Head title="Cuneo"/>
      <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
      >
        <main>
          <div className='cuneo' style={{ position: 'relative' }}>
            <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Cuneo</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
          </div>
          <div className="margin mt-3">
            <p>
              Plasmata come cittadella militare dai Savoia, <Link href='/destinazione/piemonte/cuneo' 
              className='text-decoration-none color_link'>Cuneo</Link> sorge presso la confluenza dei corsi d'acqua Stura e Gesso, su un "cùneo" la cui 
              caratteristica conformazione ne ha ispirato il nome. Il centro storico si snoda attorno a <Link href='/visite/piemonte/cuneo/piazza_galimberti' 
              className='text-decoration-none color_link'>piazza Galimberti</Link>, elegante salotto cittadino circondato da palazzi porticati. Via Roma, 
              l’arteria principale, è costeggiata da edifici di interesse architettonico quali il <Link href='/visite/piemonte/cuneo/palazzo_della_torre' 
              className='text-decoration-none color_link'>Palazzo della Torre</Link>, sormontato dalla Torre Civica di fondazione trecentesca, Casa Basso con 
              le sue antiche decorazioni in mattoni e Casa Quaglia, la cui facciata è affrescata con motivi araldici. Un angolo tipico e meno affollato è 
              l’antico ghetto ebraico, la <Link href='/visite/piemonte/cuneo/contrada_mondovì' className='text-decoration-none color_link'>Contrada Mondovì</Link>, 
              con diverse botteghe storiche.
            </p>
            <p>
              Se vi trovate in città, non dimenticatevi di assaggiare i cuneesi, il tipico cioccolatino a base di meringa e rum. Per i palati più raffinati, 
              le <Link href='/territori/piemonte/cuneo/langhe' className='text-decoration-none color_link'>Langhe</Link> sono senz’altro una tappa obbligata 
              tra <b>Barolo</b>, cittadina da cui prende il nome il famoso vino rosso, e <b>Alba</b>, con il suo pregiato <Link href='/enogastronomia/piemonte/cueno/tartufo_bianco'
              className='text-decoration-none color_link'>tartufo bianco</Link>. Ogni anno gli esemplari più prestigiosi vengono battuti all’asta per scopi 
              benefici.
            </p>
            <p>
              Raggiungete il <Link href='/visite/piemonte/cuneo/castello_di_racconigi' className='text-decoration-none color_link'>castello di Racconigi</Link> con il 
              suo bellissimo parco. Di proprietà dei Savoia dal XIV secolo, dal 1997 fa parte dei beni dell’UNESCO. Poco distante è visitabile 
              il <a href='https://cicogneracconigi.it/' className='text-decoration-none color_link'>Centro Cicogne Anatidi</a>, specializzato nella salvaguardia 
              delle cicogne. In questa oasi verde è possibile osservarle e fare un pic nic: una gita ideale da fare con i bambini.
            </p>
          </div>
          <div className='row d-flex justify-content-center mx-0 mb-4'>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cuneo'>
              <CardBody className='bottone'>
                <Link 
                className="bottone_link" 
                href='/visite/piemonte/cuneo/piazza_galimberti'
                onMouseEnter={() => setIsHoveredPiazzaGalimberti(true)}
                onMouseLeave={() => setIsHoveredPiazzaGalimberti(false)}
                >Piazza Galimberti {isHoveredPiazzaGalimberti && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cuneo'>
              <CardBody className='bottone'>
                <Link 
                className="bottone_link" 
                href='/visite/piemonte/cuneo/palazzo_della_torre'
                onMouseEnter={() => setIsHoveredPiazzadellaTorre(true)}
                onMouseLeave={() => setIsHoveredPiazzadellaTorre(false)}
                >Palazzo della Torre {isHoveredPiazzadellaTorre && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cuneo'>
              <CardBody className='bottone'>
                <Link 
                className="bottone_link" 
                href='/visite/piemonte/cuneo/contrada_mondovì'
                onMouseEnter={() => setIsHoveredContradaMondovì(true)}
                onMouseLeave={() => setIsHoveredContradaMondovì(false)}
                >Contrada Mondovì {isHoveredContradaMondovì && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cuneo'>
              <CardBody className='bottone'>
                <Link 
                className="bottone_link" 
                href='/territori/piemonte/cuneo/langhe'
                onMouseEnter={() => setIsHoveredLanghe(true)}
                onMouseLeave={() => setIsHoveredLanghe(false)}
                >Langhe {isHoveredLanghe && <i className="bi bi-chevron-right"></i>}
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
