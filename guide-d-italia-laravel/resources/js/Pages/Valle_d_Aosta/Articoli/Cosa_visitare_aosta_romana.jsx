import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import Teatro_Romano from '../../../../assets/Valle_d_Aosta/Teatro_Romano_Valle_d_Aosta.jpg'
import CercaComponent from '@/Components/CercaComponent';
import { Link } from '@inertiajs/react';
import { Image } from 'react-bootstrap';
import Arco_di_Augusto from '../../../../assets/Valle_d_Aosta/Arco_dAugusto_Aosta_Valle_d_Aosta.jpg';
import Porta_Praetoria_Aosta from '../../../../assets/Valle_d_Aosta/Porta_Praetoria_Aosta_Valle_d_Aosta1.jpg';
import Teatro_romano_di_Aosta from '../../../../assets/Valle_d_Aosta/Teatro_romano_di_Aosta_Valle_d_Aosta.jpg';
import Criptoportico_forense_di_Aosta from '../../../../assets/Valle_d_Aosta/Criptoportico_forense_di_Aosta_Valle_d_Aosta.jpg';









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
          <div className="card margin mb-3 px-3 pt-3">
            <div className="row g-0 ">
              <h2 className='color-subtitle' id='First_Point_Header'>Augusta Praetoria ovvero Aosta romana</h2>
              <p className="card-text">
                Augusta Praetoria fu fondata secondo il modello del <b>castrum romano</b>, ovvero una pianta rettangolare delimitata da forti mura fiancheggiate da ben 20 torri. L'accesso
                alla città ara garantito da quattro porte, una per ogni punta cardinale. <br/>
                Augusta Praetoria era inoltre attraversata da due strade principali: il <b>Decumano Massimo</b> da est a ovest ed il <b>Carlo Massimo</b> da nord a sud. I vari quartieri 
                erano a loro volta delimitati da cardi e decumani minori. tutti gli edifici pubblici, come il foro, le terme, il teatro e l'anfitestro foruno costruiti nell'angolo nord-oriente 
                della città e delimitati proprio delle due vie maggiori. <br/>
                Al di fuori della cinta muraria si trovavano le necropoli, e nella zona sud gli orti ed i frutteti.
              </p>
            </div>
          </div>
          <div className="card mb-3 margin">
            <div className="row g-0 ">
              <div className="col-md-4">
                <Image src={Arco_di_Augusto} className="rounded-start photo-card-city" id='Second_Point_Header' alt="Arco di Augusto di Aosta"/>
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <div className="card-body ">
                  <h2 className="card-title color-subtitle">Arco di Augusto</h2>
                  <p className="card-text">
                    Il viaggiatore dell'epoca, in viaggio verso Augusta Praetoria, sarebbe stato accolto dal monumentale <Link href="/luoghi_visite/arco_d_augusto" className='text-decoration-none color_link'>Arco Orario d'Augusto</Link> che voleva essere un segno elequente della potenza di Roma. <br/>
                    Esso aveva una funzione propagandistica e costituiva l'ingrasso monumentale della città. Si tratta di un orco ad un solo fornice incorniciato da 10 semicolonne con scanalature verticali con capitelli corinzi coronate da trabeazione dorica fragiata da metope e triglifi. Alla sommità 
                    dell'arco, in epoca romana, avremmo visto un attico con una scritta dedicatoria in onore dell'imperatore Augusto.
                </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 margin">
            <div className="row g-0 ">
              <div className="col-md-4">
                <Image src={Porta_Praetoria_Aosta} className="rounded-start photo-card-city" id='Third_Point_Header' alt="Porta Preatoria"/>
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <div className="card-body ">
                  <h2 className="card-title color-subtitle">Porta Praetoria</h2>
                  <p className="card-text">
                    La sciato alle proprie spalle il monumentale Arco d'Augusto a circa 300 metri sarebbe giunto alla <Link href='/luoghi_visite/porta_praetoria' className='text-decoration-none color_link'>Porta Praetoria</Link> che cstituisce la principale porta di ingresso della città ed è attualmente
                    l'unica che si è conservata. <br/> 
                    Essa si componeva di 2 torri rettangolari a tre piani, di un cortile interno usato come cortile d'armi ad era a tre fornici. Il fornice centrale era riservato ai carri, mentr quelli laterali riservati erano riservati ai pedoni. Controlla da guardi, la Porta Praetoria era ulteriormente 
                    protetta da possenti saracinische.
                </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 margin">
            <div className="row g-0 ">
              <div className="col-md-4">
                <Image src={Teatro_romano_di_Aosta} className="rounded-start photo-card-city" id='Fourth_Point_Header' alt="Porta Preatoria"/>
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <div className="card-body ">
                  <h2 className="card-title color-subtitle">Il Teatro di Augusta Praetoria</h2>
                  <p className="card-text">
                    Superata La Porta Praetoria, si entrava nel centro storico di Aosta dove vi era il quartiere degli spettacoli. <br/>
                    Il <Link href='/luoghi_visite/teatro_romano_di_aosta' className='text-decoration-none color_link'>teatro</Link> doveva avere tre livelli diversi di cavea, la bassa, la media e l'altra cavea. Il palco era separato dal pubblico da una struttuta muraria (pulpitum) sul quale c'era il 
                    palcoscenico dove gli attori recitavano tragedie e commedie usando costumi e maschere che aiutavano a meglio identificare i personaggi. <br/>
                    Il tutto circondato e protetto da quattro eleganti facciate. <br/>
                    Oggi il <strong>teatro romano di Aosta</strong> anche la <Link to='/visite/mercatini_aosta' className='text-decoration-none color_link'>location per i bei Mercatini di Natele nel periodo natalizio</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card margin mb-3 px-3 pt-3">
            <div className="row g-0 ">
              <h2 className='color-subtitle' id='Fifth_Point_Header'>La cinta muraria</h2>
              <p>
                Prima di uscire dalla zona degli spettacoli, il viaggiatore non poteva non volgere lo sguardo verso la <strong>cinta muraria</strong> di epoca romana che qui si conserva ancora piuttosto bene. All'epoca i Romani avevano dotato la città di un monumentale cinta, che non aveva solo una 
                funzione strategicomilitare, ma la cura posta nella sua realizzazione, l'imponenza delle porte e la funzione estetica oltre che bellica svolta dalle torri che ne scandivano il perimetro, ne facevano uno strumento politico e propagandistico.
              </p>
            </div>
          </div>
          <div className="card mb-3 margin">
            <div className="row g-0 ">
              <div className="col-md-4">
                <Image src={Criptoportico_forense_di_Aosta} className="rounded-start photo-card-city" id='Sixth_Point_Header' alt="Il Foro di Augusta Praetoria"/>
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <div className="card-body ">
                  <h2 className="card-title color-subtitle">Il Foro di Augusta Praetoria</h2>
                  <p className="card-text">
                    Usciti dalla zona degli spettacoli si ritorna al Decumano Massimo per raggiungere la centralissima <b>Piazza Chanoux</b>. La piazza attualmente costituisce il centro nevralgico della città, dove tutto converge.
                  </p>
                  <p className="card-text">
                    L'itinerario proseguiva poi al foro, il cuore religioso e giuridico di Aosta romana. Del foro romano sappiamo che era costituito da due parti: asud la platea forense, fulcro della vita cittadina circondata da un porticato con botteghe e uffici; a nord l'area sacra sopraelevata 
                    con due templi gemelli. <br/>
                    I Romani in questa zona costruiscono il <Link href='/luoghi_visite/criptoportico_forense' className='text-decoration-none color_link'>criptoportico</Link> una struttura interrata in cui si respira ancora l'atmosfera del periodo augusteo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="margin">
            <p>
              Numerosi sono i monumenti di epoca romana ad Aosta, una passeggiata di poche ore con una guida turistica catturerà sia grandi che i piccoli che possono andare alla scoperta di Augusta Praetoria con un'indimeticabile visita guidata di <Link href='/visite/aosta_romana_e_medievale' 
              className='text-decoration-none color_link fw-bold'>Aosta romana</Link>
            </p>
          </div>
          <div className="margin">
            <p>
              <b>Contattami per prenotare la vostra visita giudata della <Link href='/visite/aosta_romana_e_medievale' className='text-decoration-none color_link'>città di Aosta</Link></b>
            </p>
          </div>
          <div className='margin'>
            <h3 className='color-subtitle'>Leggi anche</h3>
            <ul className='lista'>
              <li>
                  <Link href='/articoli/cosa_vedere_ad_aosta_in_un_giorno' className='text-decoration-none color_link'>Cosa vedere ad Aosta in un giorno</Link>
              </li>
            </ul>
          </div>
        </div>
        <CercaComponent/>
      </main>
      <Footer/>
    </AuthenticatedLayout>
  )
}
