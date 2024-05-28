import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Cuneo(props) {

  const [isHoveredPNdelleLamedelSesia, setIsHoveredPNdelleLamedelSesia] = useState(false);
  
  return (
    <>
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
              Plasmata come cittadella militare dai Savoia, <a href='https://www.visitcuneese.it/dettaglio-ufficio-turistico/-/d/ufficio-turistico-di-cuneo-iat-' 
              className='text-decoration-none color_link'>Cuneo</a> sorge presso la confluenza dei corsi d'acqua Stura e Gesso, su un "cùneo" la cui 
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
              le <Link href='/visite/lombardia/cuneo/langhe' className='text-decoration-none color_link'>Langhe</Link> sono senz’altro una tappa obbligata 
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
                href='/visite/piemonte/vercelli/basilica_di_sant_andrea'
                onMouseEnter={() => setIsHoveredBasilicadiSantAndrea(true)}
                onMouseLeave={() => setIsHoveredBasilicadiSantAndrea(false)}
                >Basilica di Sant'Andrea {isHoveredBasilicadiSantAndrea && <i className="bi bi-chevron-right"></i>}
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
