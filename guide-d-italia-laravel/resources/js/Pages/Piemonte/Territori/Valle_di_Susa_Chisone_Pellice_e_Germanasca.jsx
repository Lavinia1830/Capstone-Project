import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Valle_di_Susa_Chisone_Pellice_e_Germanasca(props) {
  
  const [isHoveredValdiSusa, setIsHoveredValdiSusa] = useState(false);
  const [isHoveredChisone, setIsHoveredChisone] = useState(false);
  const [isHoveredPellice, setIsHoveredPellice] = useState(false);
  const [isHoveredGermanasca, setIsHoveredGermanasca] = useState(false);
  
  return (
    <>
      <Head title="Valle di Susa, Chisone Pellice e Germanasca"/>
      <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
      >
        <main>
          <div className='vds_c_p_e_g' style={{ position: 'relative' }}>
            <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Valle di Susa, Chisone, Pellice e Germanasca </h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Territori</p>
          </div>
          <div className="margin mt-3">
            <p>
                Molti <b>puristi</b> della <b>montagna</b> disdegnano le <b>valli</b> più prossime al capoluogo regionale per l’eccessiva <b>antropizzazione</b> e 
                un’identità un po’ troppo <b>modaiola</b>, lontana dalle più <b>idilliche</b> sembianze dei territori confinanti. Tutto vero, e basta percorrere 
                la <Link href='/montagna/piemonte/val_di_susa' className='text-decoration-none color_link'>Val Susa</Link> in autostrada fino
                a <b>Bardonecchia</b> per rendersene conto. Ma per le stesse ragioni c’è invece chi si <b>innamorerà</b> di queste valli: la loro centralità 
                nella <b>storia</b> ha lasciato in dote un <b>patrimonio</b> artistico <b>strabiliante</b>, che spazia da <b>capolavori</b> pittorici 
                ad <b>architetture</b> militari e <b>superbi</b> edifici <b>sacri</b>; inoltre, la consolidata tradizione negli <b>sport invernali</b> e la 
                presenza di ottime <b>infrastrutture</b> e <b>servizi</b>, potenziati con i XX <b>Giochi Olimpici</b> invernali del <b>2006</b>, accompagna 
                l’inarrestabile <b>successo</b> di uno tra i più <b>imponenti comprensori</b> sciistici dell’intera Europa.<br/>
                E tutto questo non preclude la presenza di superbi <b>scenari naturali</b>, angoli <b>incontaminati</b>, <b>tradizioni secolari</b> e 
                addirittura <b>istituzioni religiose</b> sopravvissute miracolosamente alle <b>persecuzioni</b> di secoli interi. In definitiva, se siete alla 
                ricerca di un posto in cui ritirarvi per giorni in <b>contemplazione</b>, forse è meglio che guardiate due o tre valli più a sud; ma se dal 
                vostro <b>viaggio</b> esigete <b>esperienze molteplici</b> (sport, cultura e magari anche un <b>ristorante di tendenza</b>), allora questi sono 
                davvero i luoghi giusti per voi.
            </p>
          </div>
          <div className='row d-flex justify-content-center mx-0 mb-4'>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Vds_c_p_e_g'>
              <CardBody className='bottone'>
                <Link 
                className="bottone_link" 
                href='/montagna/piemonte/val_di_susa'
                onMouseEnter={() => setIsHoveredValdiSusa(true)}
                onMouseLeave={() => setIsHoveredValdiSusa(false)}
                >Val di Susa {isHoveredValdiSusa && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Vds_c_p_e_g'>
              <CardBody className='bottone'>
                <Link 
                className="bottone_link" 
                href='/montagna/piemonte/val_chisone'
                onMouseEnter={() => setIsHoveredChisone(true)}
                onMouseLeave={() => setIsHoveredChisone(false)}
                >Val Chisone {isHoveredChisone && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Vds_c_p_e_g'>
              <CardBody className='bottone'>
                <Link 
                className="bottone_link" 
                href='/montagna/piemonte/val_pellice'
                onMouseEnter={() => setIsHoveredPellice(true)}
                onMouseLeave={() => setIsHoveredPellice(false)}
                >Val Pellice {isHoveredPellice && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Vds_c_p_e_g'>
              <CardBody className='bottone'>
                <Link 
                className="bottone_link" 
                href='/montagna/piemonte/val_germanasca'
                onMouseEnter={() => setIsHoveredGermanasca(true)}
                onMouseLeave={() => setIsHoveredGermanasca(false)}
                >Val Germanasca {isHoveredGermanasca && <i className="bi bi-chevron-right"></i>}
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
