import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';
import Footer from '@/Components/Footer';

export default function Toscana(props) {

  const [isHoveredFirenze, setIsHoveredFirenze] = useState(false);


  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='text-center toscana'>
          <h1>Toscana</h1>
        </div>
        <div className='text-center margin mt-3'>
          <p>
            La <strong>Toscana</strong>, perla dell'Italia centrale affacciata sulla splendida costa tirrenica, è uno scrigno di tesori storici unici al mondo: da <b>città d'arte</b> a <b>borghi pittoreschi</b>, panorami ammalianti, campagne bucoliche e magnifiche isole.<br/>
            Ricca e sorprendente, la Toscana sa incantare come pochi altri luoghi sanno fare.
          </p>
          <p>
            Per secoli al centro dello sviluppo economico e artistico italiano ed europeo, il territorio della Toscana è stato abitato fin dal Paleolitico, ma a lasciare il segno nella sua storia è stato uno dei popoli più misteriosi dell'epoca pre-romana: gli <b>Etruschi</b>. 
            Dopo la conquista da parte dei Romani e dei Bizantini, la Toscana finisce in mano ai Longobardi che istituiscono <b>un ducato con sede a Lucca</b> fino all'intervento di <b>Carlo Magno</b>.
          </p>
          <p>
            Dall'anno 1000 si sviluppa la <b>Repubblica Marinara di Pisa</b> con una flotta navale tra le più potenti dell’epoca e la Toscana si arricchisce di castelli per il controllo e la difesa del feudo come quelli di <b>Monteriggioni</b>, <b>Volterra</b> e il <b>Castello 
            di Poppi</b>. Qui l'11 giugno 1289 si combatte la battaglia di Campaldino che vede trionfare i <b>guelfi sui ghibellini</b>.<br/>
            È l'inizio dell’egemonia di Firenze sulla Toscana con la <b>famiglia Medici</b> che rimane al potere per quasi 300 anni dal 1434.<br/>
            Da culla del Rinascimento anche grazie a <b>Lorenzo il Magnifico</b> a <b>Granducato di Toscana</b> fino al 1859, la Toscana è anche stata al centro nel neonato Regno d’Italia con Firenze capitale fino al 1870.
          </p>
          <p>
            Con 9 capoluoghi di provincia e la città metropolitana di <Link href='/destinazioni/toscana/firenze' className='text-decoration-none color_link'>Firenze</Link>, la Toscana ospita alcune tra le città più belle d'Italia.<br/>
            Il capoluogo di regione è un museo a cielo aperto in cui potete passeggiare per giorni alla scoperta di capolavori architettonici come la <Link href='/visite/toscana/firenze/duomo' className='text-decoration-none color_link'>Cattedrale di Santa 
            Maria del Fiore</Link> e <Link href='/visite/toscana/firenze/ponte_vecchio' className='text-decoration-none color_link'>Ponte Vecchio</Link> e opere d’arte inestimabili come il <b>David di Michelangelo</b> alla Galleria dell'Accademia e quelle esposte alla <Link 
            href='/visite/toscana/firenze/galleria_degli_uffizi' className='text-decoration-none color_link'>Galleria degli Uffizi</Link>.
          </p>
        </div>
        <div className='row d-flex justify-content-center mx-0 mb-4'>
          <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Toscana'>
            <CardBody className='bottone'>
              <Link 
                className="bottone_link" 
                href='/destinazioni/toscana/firenze'
                onMouseEnter={() => setIsHoveredFirenze(true)}
                onMouseLeave={() => setIsHoveredFirenze(false)}
                >Firenze {isHoveredFirenze && <i className="bi bi-chevron-right"></i>}
              </Link>
            </CardBody>
          </Card>
        </div>
      </main>
      <Footer/>
    </AuthenticatedLayout>
  )
}
