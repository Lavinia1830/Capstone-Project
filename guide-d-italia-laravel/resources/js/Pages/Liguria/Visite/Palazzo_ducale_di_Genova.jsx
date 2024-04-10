import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, Button, CardBody, CardText} from 'react-bootstrap';

export default function Palazzo_ducale_di_Genova(props) {

  const [isHoveredFacciataPMatteotti, setIsHoveredFacciataPMatteotti] = useState(false);
  const [isHoveredTorreCarceri, setIsHoveredTorreCarceri] = useState(false);
  const [isHoveredSaloni, setIsHoveredSaloni] = useState(false);
  const [isHoveredCappella, setIsHoveredCappella] = useState(false);

  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='palazzo_ducale' style={{ position: 'relative' }}>
          <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Palazzo Ducale di Genova</h1>
          <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
          <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
        </div>
        <div className="margin mt-3">
          <h2 className='color-subtitle'>La celebrazione nobile dell’arte Barocca in tutta la sua magnificenza</h2>
          <p>
            <strong>Palazzo</strong> ducale fu palazzo del Comune nel Medioevo, età della sua fondazione, poi divenne residenza del doge. La facciata neoclassica risale al 1783 e presenta due ordini di colonne, sui quali poggia un attico ornato di statue e trofei. L'interno, affacciato 
            su un doppio cortile colonnato, ha uno scalone a due rampe che conduce alla loggia superiore, dove si trovano gli ambienti di rappresentanza. Le sale conservano arredi del '700, quadri, arazzi, e una cappella affrescata. Oggi il palazzo è un <b>polo culturale d'avanguardia </b> 
            con stanze dedicate a varie discipline (cinema, fotografia, robotica), strutture congressuali, spazi espositivi e per spettacoli, sedi di associazioni e librerie, caffè e ristorante.
          </p>
          <p>
            La storia di Palazzo Ducale ha inizio in un momento fortunato della storia di Genova, quando la potenza economica della Repubblica Marinara si affermò in tutto il Mediterraneo, all’indomani della vittoria su Pisa nella battaglia navale della Meloria del 1284.
          </p>
          <p>
            Le prime forme di governo comunale non disponevano di una sede stabile, ma dovevano riunirsi di volta in volta nelle dimore private dei singoli membri: vennero così acquisiti due edifici delle famiglie Doria e Fieschi, in una zona strategica nel centro della città medievale. 
            Fu questo il primo nucleo del Palazzo, divenuto poi sede del doge – Ducale – nel 1339 con il primo doge Simon Boccanegra. Due secoli e mezzo dopo, consolidatasi la Repubblica con le riforme di Andrea Doria nel 1528, si decise di dare al Palazzo una veste sontuosa ed elegante, 
            simbolo della Repubblica oligarchica e a tal fine nel 1591 fu incaricato l’architetto Andrea Ceresola detto il Vannone.
          </p>
          <p>
            Il Ducale divenne così un palazzo in stile manierista, maestoso e imponente, difeso come una fortezza con l’attuale piazza Matteotti chiusa da una “cortina”: una vera e propria sede di Stato, con ambienti di rappresentanza e piazza d’armi.
          </p>
          <p>
            Nel 1777 un furioso incendio devastò il nucleo centrale, in particolare i saloni del Maggiore e Minor Consiglio e la facciata principale del Palazzo. La ricostruzione fu affidata all’architetto ticinese Simone Cantoni, al quale si deve anche l’omonima scala elicoidale, che 
            reinterpretò gli spazi in chiave neoclassica, accentuandone il carattere solenne e maestoso. Pochi anni dopo, la discesa di Napoleone in Italia segnò la fine della Repubblica, successivamente annessa al Regno di Sardegna nel 1815.
          </p>
          <p>
            Venute meno le esigenze difensive e abbattuta la “cortina”, il Palazzo si trasformò radicalmente, divenendo sede di uffici amministrativi ed in seguito del Tribunale. Nei primi decenni del Novecento ci fu un’importante azione di restauro diretta da Orlando Grosso, che riportò 
            alla luce le tracce medievali cancellando alcuni interventi seicenteschi, e ripristinò la facciata dipinta su piazza De Ferrari. Il Ducale di oggi è il frutto di un imponente recupero, condotto da Giovanni Spalla a partire dal 1980: un intervento che ha riscoperto l’unitarietà 
            del progetto del Vannone, rivelandone il valore storico e restituendo un tassello di storia alla città, con tutta la ricchezza architettonica e urbanistica che ha accumulato nei secoli.
          </p>
          <p>
            Dal 1992 Palazzo Ducale è un centro culturale dinamico e prestigioso, sede della Fondazione per la Cultura che organizza mostre d’arte, grandi rassegne, incontri ed eventi di carattere commerciale e culturale.
          </p>
        </div>
        <div className='margin mt-3'>
          <h3 className='color-subtitle text-center'>Percorsi Consigliati</h3>
          <div className='d-flex justify-content-center flex-wrap'>
            <Card className='me-2 mb-2 carta-percorsi'
              onMouseEnter={() => setIsHoveredFacciataPMatteotti(true)}
              onMouseLeave={() => setIsHoveredFacciataPMatteotti(false)}>
              <Link href="/visite/genova/palazzo_ducale_di_genova/facciata_piazza_matteotti" className='text-decoration-none'>
                <h2 className={`color-title p-3 ${isHoveredFacciataPMatteotti ? 'image-hovered' : 'image-normal'}`}>Le Facciate</h2>
                <CardBody>
                  <CardText className='mb-5 text-dark'>
                  <p>
                    Le altre facciate del palazzo presentano stili architettonici diversi, riflettendo le varie fasi di ampliamento e ristrutturazione dell'edificio nel corso dei secoli.
                  </p>
                  </CardText> 
                  <Link className='text-decoration-none' href="/visite/genova/palazzo_ducale_di_genova/facciata_piazza_matteotti"><Button variant="primary" className='btn-card position-absolute bottom-0 end-0 me-2 mb-1'>leggi tutto</Button></Link>
                </CardBody>
              </Link>
            </Card>
            <Card className='me-2 mb-2 carta-percorsi'
              onMouseEnter={() => setIsHoveredTorreCarceri(true)}
              onMouseLeave={() => setIsHoveredTorreCarceri(false)}>
              <Link href="/visite/genova/palazzo_ducale_di_genova/la_torre_e_le_carceri" className='text-decoration-none'>
                <h2 className={`color-title p-3 ${isHoveredTorreCarceri ? 'image-hovered' : 'image-normal'}`}>La Torre e le Carceri</h2>
                <CardBody>
                  <CardText className='mb-5 text-dark'>
                  <p>
                    La Torre e le Carceri del Palazzo Ducale sono due elementi distintivi che aggiungono fascino e mistero a questa imponente struttura.
                  </p>
                  </CardText> 
                  <Link className='text-decoration-none' href="/visite/genova/palazzo_ducale_di_genova/la_torre_e_le_carceri"><Button variant="primary" className='btn-card position-absolute bottom-0 end-0 me-2 mb-1'>leggi tutto</Button></Link>
                </CardBody>
              </Link>
            </Card>
            <Card className='me-2 mb-2 carta-percorsi'
              onMouseEnter={() => setIsHoveredSaloni(true)}
              onMouseLeave={() => setIsHoveredSaloni(false)}>
              <Link href="/visite/genova/palazzo_ducale_di_genova/i_saloni" className='text-decoration-none'>
                <h2 className={`color-title p-3 ${isHoveredSaloni ? 'image-hovered' : 'image-normal'}`}>I Saloni</h2>
                <CardBody>
                  <CardText className='mb-5 text-dark'>
                  <p>
                    I saloni del Palazzo Ducale di Genova sono tra le sue parti più suggestive e rappresentative, testimoni della magnificenza e del prestigio della Repubblica di Genova nel corso dei secoli.
                  </p>
                  </CardText> 
                  <Link className='text-decoration-none' href="/visite/genova/palazzo_ducale_di_genova/i_saloni"><Button variant="primary" className='btn-card position-absolute bottom-0 end-0 me-2 mb-1'>leggi tutto</Button></Link>
                </CardBody>
              </Link>
            </Card>
            <Card className='me-2 mb-2 carta-percorsi'
              onMouseEnter={() => setIsHoveredCappella(true)}
              onMouseLeave={() => setIsHoveredCappella(false)}>
              <Link href="/visite/genova/palazzo_ducale_di_genova/la_cappella" className='text-decoration-none'>
                <h2 className={`color-title p-3 ${isHoveredCappella ? 'image-hovered' : 'image-normal'}`}>La Cappella</h2>
                <CardBody>
                  <CardText className='mb-5 text-dark'>
                  <p>
                    La Cappella del Palazzo Ducale di Genova è un luogo di grande importanza storica e artistica all'interno di questo magnifico edificio.
                  </p>
                  </CardText> 
                  <Link className='text-decoration-none' href="/visite/genova/palazzo_ducale_di_genova/la_cappella"><Button variant="primary" className='btn-card position-absolute bottom-0 end-0 me-2 mb-1'>leggi tutto</Button></Link>
                </CardBody>
              </Link>
            </Card>
          </div>
        </div>
        <div className='margin mb-4'>
          <h3 className='color-subtitle text-center'>Mappa</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2005.9196818968517!2d8.931837174927784!3d44.4074590138452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d343dd7fd645db%3A0xaa22692f44c315c1!2sPalazzo%20Ducale!5e1!3m2!1sit!2sit!4v1712739573690!5m2!1sit!2sit"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className='mx-auto mappa'
          ></iframe>
        </div>
      </main>
      <Footer/>
    </AuthenticatedLayout>
  )
}
