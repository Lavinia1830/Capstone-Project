import React from 'react';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import { Image } from 'react-bootstrap';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Cosa_vedere_ad_aosta_in_un_giorno from '../../../../assets/Valle_d_Aosta/Cosa_vedere_ad_aosta_in_un_giorno_Valle_d_Aosta.jpg';
import Arco_di_Augusto from '../../../../assets/Valle_d_Aosta/Arco_di_augusto_Aosta_cosa_vedere_ad_aosta_in_un_giorno_Valle_d_Aosta.jpg';
import Porta_Praetoria from '../../../../assets/Valle_d_Aosta/Porta_Praetoria_cosa_vedere_ad_aosta_in_un_giorno_Valle_d_Aosta.jpg';
import Teatro_romano from '../../../../assets/Valle_d_Aosta/Teatro_romano_Aosta_cosa_vedere_ad_aosta_in_un_giorno_Valle_d_Aosta.jpg';
import Collegiata_di_SantOrso from '../../../../assets/Valle_d_Aosta/Collegiata_di_SantOrso_cosa_vedere_ad_aosta_in_un_giorno_Valle_d_Aosta.jpg';




export default function Cosa_vedere_Aosta_in_un_giorno(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Cosa vedere ad Aosta in un giorno</h2>}
    >
      <main>
        <div className='margin'>
          <img src={Cosa_vedere_ad_aosta_in_un_giorno} alt="Ponte Romano d'Aosta" className='mx-auto my-4' style={{width: 'auto', height: 'auto'}}/>
          <h1 className='color-title text-center mb-3'>Cosa vedere ad Aosta in un giorno</h1>
          <hr className='w-25 border-3'/>
        </div>
        <div className='margin'>
          <p>
            Aosta, piccola cittadina al centro della Valle d'Aosta è la meta perfetta per una gita in giornata. <br/>
            In questo articolo scoprirai <strong>coasa vedere ad Aosta in un giorno</strong>, una passeggiata nella "Roma delle Alpi" per scoprire il suo passato millenario ed affascinati angoli insoliti.
          </p>
          
          <ul className='lista'>
            <span>Contenuti</span>
            <li>
              <Link href='#First_Point_Header' className='text-decoration-none color_link'>1 Arco di Augusto</Link>
            </li>
            <li>
              <Link href='#Second_Point_Header' className='text-decoration-none color_link'>2 Porta Praetoria</Link>
            </li>
            <li>
              <Link href='#Third_Point_Header' className='text-decoration-none color_link'>3 Teatro Romano</Link>
            </li>
            <li>
              <Link href='#Fourth_Point_Header' className='text-decoration-none color_link'>4 Criptoportico Forense</Link>
            </li>
            <li>
              <Link href='#Fifth_Point_Header' className='text-decoration-none color_link'>5 Collegiata di Sant'Orso</Link>
            </li>
            <li>
              <Link href='#Sixth_Point_Header' className='text-decoration-none color_link'>6 Basilicata Paleocristiana di San Lorenzo</Link>
            </li>
            <li>
              <Link href='#Seventh_Point_Header' className='text-decoration-none color_link'>7 Cattedrale di San Maria Assunta</Link>
            </li>
            <li>
              <Link href='#Eighth_Point_Header' className='text-decoration-none color_link'>8 Piazza Chanoux</Link>
            </li>
            <li>
              <Link href='#Ninth_Point_Header' className='text-decoration-none color_link'>9 Museo Archeologico</Link>
            </li>
            <li>
              <Link href='#Tenth_Point_Header' className='text-decoration-none color_link'>10 Area Megalitica di Saint Martin de Corléans</Link>
            </li>
            <li>
              <Link href='#Eleventh_Point_Header' className='text-decoration-none color_link'>11 Ponte Acquedotto Gran Avrou</Link>
            </li>
          </ul>
        </div>
        <div className="card mb-3 margin">
          <div className="row g-0">
            <div className="col-md-4">
              <Image src={Arco_di_Augusto} className="img-fluid rounded-start" alt="Arco di Augusto di Aosta"/>
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <div className="card-body ">
                <h2 className="card-title color-subtitle" id='First_Point_Header'>Arco di Augusto</h2>
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
        <div className="card mb-3 margin">
          <div className="row g-0">
            <div className="col-md-4">
              <Image src={Porta_Praetoria} className="img-fluid rounded-start" alt="Porta Praetoria di Aosta"/>
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <div className="card-body ">
                <h2 className="card-title color-subtitle" id='Second_Point_Header'>Porta Praetoria</h2>
                <p className="card-text">
                  Struttura con tre fornici di ingresso e due bastioni laterali, la Poerta Praetoria consentiva l'ingresso alla città romana. <br/>
                  Una porta volutamente monumentale che la notte veniva chiusa da possenti saracinische, di cui si possono vedere ancora oggi gli alloggiamenti. Durante il I secolo d.C. la porta
                  sarà abbellita da ricche lastre di marmo bardiglio e di Carrara. <br/>
                  In epoca medievale la Porta Peraetoria varrà poi occupata da una nobile famiglia che vivveva nella torre difensiva posta sul lato nord e che oggi ospita l'<a href='https://www.lovevda.it/it' 
                  className='text-decoration-none color_link'>Ufficio del Turismo</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 margin">
          <div className="row g-0">
            <div className="col-md-4">
              <Image src={Teatro_romano} className="img-fluid rounded-start" alt="Teatro Romano di Aosta"/>
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <div className="card-body ">
                <h2 className="card-title color-subtitle" id='Third_Point_Header'>Teatro Romano</h2>
                <p className="card-text">
                  Una volta entrati nel centro storico ecco uno dei monumenti romani più belli della città: il <Link href='/luoghi_visite/teatro_romano_di_aosta' className='text-decoration-none color_link'>Teatro Romano</Link>. <br/>
                  Le sue vestigia denotano l'imponenza della struttura e del monumento soprravvive ancora l'alta facciata meridionale lunga circa 60 metri ed alta ben 22.
                </p>
                <p className="card-text">
                  Passeggiando tra le rovine del teatro romano è possibile comprendere bene la struttura complessiva dell'edificio costituito da tre livelli di gradinate, lo spazio per l'orchestra, 
                  il prescenio e i locali di servizio. <br/>
                  Questo luogo suggestivo negli ultimi anni è stato scelto come cornice dei cuggestivi <Link to='/visite/mercatini_aosta' className='text-decoration-none color_link'>Mercatini di Natale di Aosta</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 margin">
          <div className="row g-0">
            <div className="card-body ">
              <h2 className="card-title color-subtitle" id='Fourth_Point_Header'>Criptoportico Forense</h2>
              <p className="card-text">
                Tra le cose assolutamente da vedere ad Aosta c'è il <Link href='/luoghi_visite/criptoportico_forense/' className='text-decoration-none color_link'>Criptoportico Forense</Link>. 
                Si tratta di una sorta di deambulatorio sottorraneo a forma di ferro di cavallo che circondava l'area sacra del foro romano in cui vi erano die templi gemelli. <br/>
                Il criptoportico è costituito da un doppio corridoio con volte a botte sostenute da robusti pilastri in cui si vive un'atmostrera rarefatta creata da un sapiente gioco di luci.
              </p>
            </div>
          </div>
        </div>
        <div className="card mb-3 margin">
          <div className="row g-0">
            <div className="col-md-4">
              <Image src={Collegiata_di_SantOrso} className="img-fluid rounded-start" alt="Collegiata di Sant'Orso di Aosta"/>
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <div className="card-body ">
                <h2 className="card-title color-subtitle" id='Fifth_Point_Header'>Collegiata di Sant'Orso</h2>
                <p className="card-text">
                  Appena fuori dalle mura romane il <b>borgo di Sant'Orso</b> nasce sui resti di un'antica necropoli romana dove fa da padrona la presenza della <Link href='/luoghi_visite/collegiata_di_sant_orso' 
                  className='text-decoration-none color_link'>Collegiata di Sant'Orso</Link>. Il complesso monumentale di Sant'Orso conta diversi edifici ed un sito di notevole interesse storico artistico. <br/>
                  La chiesa dedicata al Santo presenta una struttura e tre navate di impianto romanico ed alcuni elementi tardo-gotici inseriti a fine Quattrocento dal colto <b>Priore Giorgio di Challant.</b> 
                  Il priore Giorgio di Challant, uno dei maggiori mecenati che la Valle d'Aosta abbia mai conosciuto, inserisce sulla della chiesa la ghimberga di terra cotta e gli altri pinnacoli, oltre a 
                  far realizzare la bella facciata dell'adiacente Piorato.<br/>
                  Gli interni della chiesa consevano le trasformazioni volute dal Priore come le volte in muratura a crociera, i pregevoli stalli del coro e le vetrate. da non perdere la vista del pregevole 
                  mosaico del coro risalente al XII secolo e della cripta della chiesa.
                </p>
                <p className="card-text">
                  Accanto alla Chiesa, il <b>chiostro romanico</b> risalente al XII secolo, emana un fascino ed un'atmosfera particolare. Intorno ad una corte rettangolare si sviluppa il deambilatorio in cui 
                  le colonne decorate con capitelli istoriati raccontano scene del nuovo e dell'antico testamento oltre che alcuni momenti della vita di Sant'Orso. Alla figura di questo santo, si lega poi la 
                  millenaria <Link to='/visite/fiera_sant_orso' className='text-decoration-none color_link'>Fiera di Sant'Orso</Link> che si svolge ad Agosto il 30 e 31 gennaio di ogni anno. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </AuthenticatedLayout>
  )
}
