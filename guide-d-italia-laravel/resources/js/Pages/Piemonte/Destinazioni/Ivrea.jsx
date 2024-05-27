import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Ivrea(props) {

  const [isHoveredAnfiteatroMorenico, setIsHoveredAnfiteatroMorenico] = useState(false);
  const [isHoveredCastellodiIvrea, setIsHoveredCastellodiIvrea] = useState(false);
  const [isHoveredFiumeDoraBaltea, setIsHoveredFiumeDoraBaltea] = useState(false);
  const [isHoveredAfiteatroRomano, setIsHoveredAfiteatroRomano] = useState(false);
  const [isHoveredDuomoSMariaAssunta, setIsHoveredDuomoSMariaAssunta] = useState(false);
  const [isHoveredPalazzoVescovile, setIsHoveredPalazzoVescovile] = useState(false);
  const [isHoveredMaam, setIsHoveredMaam] = useState(false);



  return (
    <>
      <Head title="Ivrea"/>
      <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
      >
        <main>
          <div className='ivrea' style={{ position: 'relative' }}>
            <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Ivrea</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
          </div>
          <div className="margin mt-3">
            <p>
              Al centro del suggestivo paesaggio del <Link href='/territori/piemonte/canavese' className='text-decoration-none color_link'>Canavese</Link>, definito 
              da colline moreniche di origine glaciale punteggiate di laghi e torrenti, la città di <strong>Ivrea</strong> era conosciuta già nell’antichità con il 
              nome di Eporedia, luogo di transito dei commerci tra le Alpi e la pianura Padana. 
            </p>
            <p>
              Un nucleo antico, posizionato su un rilievo lungo la riva sinistra del <Link href='/fiumi/piemonte/ivrea/fiume_dora_baltea' 
              className='text-decoration-none color_link'>fiume Dora Baltea</Link>, conserva importanti monumenti che simboleggiano gli oltre due millenni di storia 
              di Ivrea: dai resti di un <Link href='/visite/piemonte/ivrea/anfiteatro_romano' 
              className='text-decoration-none color_link'>anfiteatro romano</Link> al <Link href='/visite/piemonte/ivrea/duomo_di_s_maria_assunta' 
              className='text-decoration-none color_link'>duomo dedicato a S. Maria Assunta</Link>, dal <Link href='/visite/piemonte/ivrea/palazzo_vescovile' 
              className='text-decoration-none color_link'>palazzo vescovile</Link> fino alle alte torri di mattoni rossi del <Link href='/visite/piemonte/ivrea/castello_di_ivrea' 
              className='text-decoration-none color_link'>castello sabaudo</Link>, ricordate con stupore da un gigante della letteratura italiana come il poeta premio 
              Nobel Giosuè Carducci.
            </p>
            <p>
              Basta superare il corso della Dora Baltea per ritrovarsi poi in un contesto urbanistico completamente differente: quello spazioso e avveniristico della 
              città industriale novecentesca, patrimonio dell’umanità Unesco, progettata dall’azienda Olivetti, da visitare senza fretta seguendo i percorsi proposti 
              dal <Link href='/visite/piemonte/ivrea/museo_a_cielo_aperto_dell_architettura_moderna' className='text-decoration-none color_link'>MaAM - Museo a cielo 
              aperto dell’architettura moderna di Ivrea</Link>, lungo i quali non mancano anche recenti interventi di street art contemporanea.
            </p>
            <p>
              Insomma, Ivrea è una città capace di offrire tanti spunti di interesse, ancor di più se ci si trova a visitarla durante il carnevale, uno degli eventi 
              folkloristici più amati e conosciuti di tutta Italia, che culmina in una battaglia combattuta senza armature a colpi di arance. 
            </p>
          </div>
          <div className='row d-flex justify-content-center mx-0 mb-4'>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Ivrea'>
              <CardBody className='bottone'>
                <Link 
                className="bottone_link" 
                href='/visite/piemonte/ivrea/anfiteatro_morenico'
                onMouseEnter={() => setIsHoveredAnfiteatroMorenico(true)}
                onMouseLeave={() => setIsHoveredAnfiteatroMorenico(false)}
                >Anfiteatro Morenico {isHoveredAnfiteatroMorenico && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Ivrea'>
              <CardBody className='bottone'>
                <Link 
                className="bottone_link" 
                href='/visite/piemonte/ivrea/castello_di_ivrea'
                onMouseEnter={() => setIsHoveredCastellodiIvrea(true)}
                onMouseLeave={() => setIsHoveredCastellodiIvrea(false)}
                >Castello di Ivrea {isHoveredCastellodiIvrea && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Ivrea'>
              <CardBody className='bottone'>
                <Link 
                className="bottone_link" 
                href='/fiumi/piemonte/ivrea/fiume_dora_baltea'
                onMouseEnter={() => setIsHoveredFiumeDoraBaltea(true)}
                onMouseLeave={() => setIsHoveredFiumeDoraBaltea(false)}
                >Fiume Dora Baltea {isHoveredFiumeDoraBaltea && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Ivrea'>
              <CardBody className='bottone'>
                <Link 
                className="bottone_link" 
                href='/visite/piemonte/ivrea/anfiteatro_romano'
                onMouseEnter={() => setIsHoveredAfiteatroRomano(true)}
                onMouseLeave={() => setIsHoveredAfiteatroRomano(false)}
                >Anfiteatro Romano {isHoveredAfiteatroRomano && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Ivrea'>
              <CardBody className='bottone'>
                <Link 
                className="bottone_link" 
                href='/visite/piemonte/ivrea/duomo_di_s_maria_assunta'
                onMouseEnter={() => setIsHoveredDuomoSMariaAssunta(true)}
                onMouseLeave={() => setIsHoveredDuomoSMariaAssunta(false)}
                >Duomo di Santa Maria Assunta {isHoveredDuomoSMariaAssunta && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Ivrea'>
              <CardBody className='bottone'>
                <Link 
                className="bottone_link" 
                href='/visite/piemonte/ivrea/palazzo_vescovile'
                onMouseEnter={() => setIsHoveredPalazzoVescovile(true)}
                onMouseLeave={() => setIsHoveredPalazzoVescovile(false)}
                >Palazzo Vescovile {isHoveredPalazzoVescovile && <i className="bi bi-chevron-right"></i>}
                </Link>
              </CardBody>
            </Card>
            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Ivrea'>
              <CardBody className='bottone'>
                <Link 
                className="bottone_link" 
                href='/visite/piemonte/ivrea/museo_a_cielo_aperto_dell_architettura_moderna'
                onMouseEnter={() => setIsHoveredMaam(true)}
                onMouseLeave={() => setIsHoveredMaam(false)}
                >Palazzo Vescovile {isHoveredMaam && <i className="bi bi-chevron-right"></i>}
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
