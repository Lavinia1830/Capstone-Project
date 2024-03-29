import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import Teatro_Romano from '../../../../assets/Valle_d_Aosta/Teatro_Romano_Valle_d_Aosta.jpg'
import CercaComponent from '@/Components/CercaComponent';
import { Link } from '@inertiajs/react';
import Arco_dAugusto_Aosta from '../../../../assets/Valle_d_Aosta/Arco_dAugusto_Aosta_Valle_d_Aosta.jpg';
import { Form, Image } from 'react-bootstrap';
import Porta_praetoria from '../../../../assets/Valle_d_Aosta/Porta_praetoria_Aosta_Valle_d_Aosta.jpg';

export default function Cosa_visitare_aosta_romana(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      
    >
      <main className='row'>
        <div className='col-lg-8'>
          <div className='margin'>
              <img src={Teatro_Romano} alt="Ponte Romano d'Aosta" className='mx-auto my-4' style={{width: 'auto', height: 'auto'}}/>
              <h1 className='color-title text-center mb-3'>Aosta Praetoria, visite alla scoperta di Aosta romana</h1>
              <hr className='w-25 border-3'/>
          </div>
          
          <div className='margin'>
            <h2>Visita Ad Aosta antica</h2>
            <p>
              La piccola ma graziosa città di Aosta si svela la passante come un'antica città romana fondata nel lontana 25 a.C. col nome di <strong>Augusta Praetoria.</strong> <br/>
              A quel tempo le truppe gidate dal legato tomano Aulo Terenzio Verrone occuparono la florida piana di Aosta, alla confluenza della <b>Dora Baltea</b> e del 
              Buthier e fondarono la colonia al fine di controllare le risorse minerarie del territorio nonché i valiche alpini.
            </p>
            <p>
              La nostra <strong>Aosta romana</strong> è ricca di punti di interesse che le sono valsi il soprannome di "<b>Roma delle Alpi</b>".
            </p>
            <ul className='lista'>
              <span>Contenuti</span>
              <li>
                <Link href='#First_Point_Header' className='text-decoration-none color_link'>1 Augusta Praetoria ovvero Aosta romana</Link>
              </li>
              <li>
                <Link href='#Second_Point_Header' className='text-decoration-none color_link'>2 L'arco d'Augusto</Link>
              </li>
              <li>
                <Link href='#Third_Point_Header' className='text-decoration-none color_link'>3 Porta Praetoria</Link>
              </li>
              <li>
                <Link href='#Fourth_Point_Header' className='text-decoration-none color_link'>4 Il Teatro di Augusta Praetoria</Link>
              </li>
              <li>
                <Link href='#Fifth_Point_Header' className='text-decoration-none color_link'>5 La cinta muraria</Link>
              </li>
              <li>
                <Link href='#Sixth_Point_Header' className='text-decoration-none color_link'>6 Il Foto di Augsta Praetoria</Link>
              </li>
            </ul>
          </div>
          <h2 className="color-subtitle text-center" id='First_Point_Header'>L'Arco d'Augusto</h2>
          <div className="immagine-container">
            <Image src={Arco_dAugusto_Aosta} alt="Arco di Augusto di Aosta" style={{margin:'0 auto'}}/>
            <p className="descrizione-immagine">
              Arrivando ad Aosta il Primo monumento che si incontra è l'<Link href='/luoghi_visite/arco_d_augusto' className='text-decoration-none color_link'>Arco di Augusto</Link>. L'arco 
              fu costruito per celebrare la figura dell'imperatore Augusto a cui era dedicata la colonia di <b>Auguta Praetoria Salassorum</b> (Aosta) e per celebarre la vittoria dei Romani 
              sulla popolazione dei Salassi che abitava la zona. <br />
              L'arco ha un unico fornice decorato con demi colonne corinzie e una trabeazione dorica. Al centro compeggia un Crocifisso aggiunto in epoca medievale. Sotto di esso in epoca 
              romana passaba la <b>Via delle Gallie</b>, la strada romana che collegava Eporedia (ivrea) con Aosta e da qui proseguiva verso l'<i>Alpis Graia</i>, ovvero il colle del Piccolo 
              San Bernardo. 
            </p>
          </div>
          <div className="card mb-3 margin">
            <div className="row g-0">
              <div className="col-md-4" style={{width: "540px;", height:'265px'}}>
                <Image src={Arco_dAugusto_Aosta} className="rounded-start" alt="Arco di Augusto di Aosta"/>
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <div className="card-body ">
                  <h2 className="card-title color-subtitle" id='First_Point_Header'>L'Arco d'Augusto</h2>
                  <p className="card-text">
                    Arrivando ad Aosta il Primo monumento che si incontra è l'<Link href='/luoghi_visite/arco_d_augusto' className='text-decoration-none color_link'>Arco di Augusto</Link>. L'arco 
                    fu costruito per celebrare la figura dell'imperatore Augusto a cui era dedicata la colonia di <b>Auguta Praetoria Salassorum</b> (Aosta) e per celebarre la vittoria dei Romani 
                    sulla popolazione dei Salassi che abitava la zona. <br />
                    L'arco ha un unico fornice decorato con demi colonne corinzie e una trabeazione dorica. Al centro compeggia un Crocifisso aggiunto in epoca medievale. Sotto di esso in epoca 
                    romana passaba la <b>Via delle Gallie</b>, la strada romana che collegava Eporedia (ivrea) con Aosta e da qui proseguiva verso l'<i>Alpis Graia</i>, ovvero il colle del Piccolo 
                    San Bernardo.                  
                </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="margin" style={{marginBottom: '200px'}}>
            <h3 className="card-title color-subtitle" id='First_Point_Header'>L'Arco d'Augusto</h3>
            <div style={{width: '410px'}} class="wp-caption alignleft me-2">
              <Image  class="size-medium" src={Arco_dAugusto_Aosta} alt="Arco di Augusto, Aosta" width="400" height="266"/>
              <p class="text-light mb-0">Arco di Augusto, Aosta</p>
            </div>
            <p>
              Il viaggiatore dell'epoca, in viaggio verso Augusta Praetoria, sarebbe stato accolto dal monumentale <Link href='/luoghi_visite/arco_d_augusto' className='text-decoration-none color_link'>Arco Onorario d'Augusto</Link>
              che voleva essere un segno eloquente della potenza di Roma. <br/>
              Esso aveva una funzione propagandistica e costituiva l'ingresso monumentale della città. Si tratta di un arco un solo fornice incorniciato da 10 semicolonne con scanalature verticali con capitelli corinzi corronate da
              tra beazione dorica fragiata da metope e triglifi. Alla sommità dell'arco in epoca romana, avremmo visto un attico con una scritta dedicatoria in onore dell'imperatore Augusto.
            </p>
          </div>
          <div className="margin ">
            <h3 className="card-title color-subtitle" id='Second_Point_Header'>Porta Praetoria</h3>
            <div style={{width: '410px'}} class="wp-caption alignright me-2">
              <Image  class="size-medium" src={Porta_praetoria} alt="Arco di Augusto, Aosta" width="400" height="266"/>
              <p class="text-light mb-0">Porta Praetoria</p>
            </div>
            <p>
              Il viaggiatore dell'epoca, in viaggio verso Augusta Praetoria, sarebbe stato accolto dal monumentale <Link href='/luoghi_visite/arco_d_augusto' className='text-decoration-none color_link'>Arco Onorario d'Augusto</Link>
              che voleva essere un segno eloquente della potenza di Roma. <br/>
              Esso aveva una funzione propagandistica e costituiva l'ingresso monumentale della città. Si tratta di un arco un solo fornice incorniciato da 10 semicolonne con scanalature verticali con capitelli corinzi corronate da
              tra beazione dorica fragiata da metope e triglifi. Alla sommità dell'arco in epoca romana, avremmo visto un attico con una scritta dedicatoria in onore dell'imperatore Augusto.
            </p>
          </div>
          
        </div>
        <CercaComponent/>
      </main>
      <Footer/>
    </AuthenticatedLayout>
  )
}
