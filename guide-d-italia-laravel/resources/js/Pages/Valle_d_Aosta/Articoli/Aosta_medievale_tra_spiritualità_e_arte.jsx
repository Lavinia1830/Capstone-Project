import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import CercaComponent from '@/Components/CercaComponent';
import Footer from '@/Components/Footer';
import Aosta_medievale from '../../../../assets/Valle_d_Aosta/Aosta_medievale_Valle_d_Aosta.jpg';
import Mosaico_collegiata_di_Sant_Orso from '../../../../assets/Valle_d_Aosta/Mosaico_collegiata_di_Sant_Orso_Valle_d_Aosta.jpg';
import Chiostro_romanico_di_SantOrso from '../../../../assets/Valle_d_Aosta/Chiostro_romanico_di_SantOrso_Valle_d_Aosta.jpg';
import Cattedrale_Santa_Maria_Assunta_Aosta from '../../../../assets/Valle_d_Aosta/Cattedrale_Santa_Maria_Assunta_Aosta_Valle_d_Aosta.jpg';
import Facciata_Cattedrale_di_Aosta from '../../../../assets/Valle_d_Aosta/Facciata_Cattedrale_di_Aosta_Valle_d_Aosta.jpg';
import Chiesa_Santo_Stefano_Aosta from '../../../../assets/Valle_d_Aosta/Chiesa_Santo_Stefano_Aosta_Valle_d_Aosta.jpg';
import Torre_del_Lebbroso from '../../../../assets/Valle_d_Aosta/Torre_del_Lebbroso_Valle_d_Aosta.jpg';
import Torre_di_Bramafam from '../../../../assets/Valle_d_Aosta/Torre_di_Bramafam_Valle_d_Aosta.jpg';
import { Link } from '@inertiajs/react';
import { Image } from 'react-bootstrap';















export default function Aosta_medievale_tra_spiritualità_e_arte(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      
    >
        <main className='row'>
            <div className='col-lg-8'>
                <div className='margin'>
                    <img src={Aosta_medievale} alt="Ponte Romano d'Aosta" className='mx-auto my-4' style={{width: 'auto', height: 'auto'}}/>
                    <h1 className='color-title text-center mb-3'>Aosta Medievale tra spiritualità e arte</h1>
                    <hr className='w-25 border-3'/>
                </div>
                <div className='margin'>
                    <p>
                        Questo itinerario di <strong>Aosta medievale</strong> si snoda tra il borgo di Sant'Orso e la Cité, ovvero tra i due "lati della città" uniti dalla centrale Piazza Chanoux. 
                        Si tratta di un percorso che tocca i principali poli religiosi di Aosta, ma anche alcune torri.
                    </p>
                    <ul className='lista'>
                        <span>Contenuti</span>
                        <li>
                            <Link href='#First_Point_Header' className='text-decoration-none color_link'>Aosta Medievale: la Colleggiata di Sant'Orso</Link>
                        </li>
                        <li>
                            <Link href='#Second_Point_Header' className='text-decoration-none color_link'>Aosta Medievale: la Cattedrale</Link>
                        </li>
                        <li>
                            <Link href='#Third_Point_Header' className='text-decoration-none color_link'>Aosta Medievale: La Chiesa di Saint-Etienne</Link>
                        </li>
                        <li>
                            <Link href='#Fourth_Point_Header' className='text-decoration-none color_link'>Le torri medievali di Aosta</Link>
                        </li>
                    </ul>
                </div>
                <div className="card mb-3 margin">
                    <div className="row g-0">
                        <div className="d-flex align-items-center">
                            <div className="card-body ">
                                <h2 className="card-title color-subtitle" id='First_Point_Header'>Aosta Medievale: La Collegiata di Sant'Orso</h2>
                                <p className="card-text">
                                    Il viaggiatore dell'epoca, in viaggio verso Augusta Praetoria, sarebbe stato accolto dal monumentale <Link href="/luoghi_visite/arco_d_augusto" className='text-decoration-none color_link'>Arco Orario d'Augusto</Link> che voleva essere un segno elequente della potenza di Roma. <br/>
                                    Esso aveva una funzione propagandistica e costituiva l'ingrasso monumentale della città. Si tratta di un orco ad un solo fornice incorniciato da 10 semicolonne con scanalature verticali con capitelli corinzi coronate da trabeazione dorica fragiata da metope e triglifi. Alla sommità 
                                    dell'arco, in epoca romana, avremmo visto un attico con una scritta dedicatoria in onore dell'imperatore Augusto.
                                </p>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-center">
                            <div className='mx-2'>
                                <Image src={Mosaico_collegiata_di_Sant_Orso} className="mb-2"  alt="Mosaico collegiata di Sant’Orso" title='Mosaico collegiata di Sant’Orso'/>
                                <p className='text-center'>
                                    Mosaico colleggiata di Sant'Orso
                                </p>
                            </div>
                            <div className='mx-2'>
                                <Image src={Chiostro_romanico_di_SantOrso} className="mb-2"  alt="Chiostro romanico di Sant’Orso" title='Chiostro romanico di Sant’Orso'/>
                                <p className='text-center'>
                                    Chiostro romanico di Sant’Orso
                                </p>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <div className="card mb-3 margin">
                    <div className="row g-0">
                        <div className="d-flex align-items-center">
                            <div className="card-body ">
                                <h2 className="card-title color-subtitle" id='Second_Point_Header'>Aosta Medievale: la Cattedrale</h2>
                                <p className="card-text">
                                    Il polo religioso più importante di Aosta è sicuramente la <Link href='/luoghi_visite/cattedrale_di_santa_maria_assunta' className='text-decoration-none color_link fw-bold'>Cattedrale di Santa Maria Assunta</Link>, fulcro della diocesi. Ad accoglierci una imponente e vivace facciata 
                                    rinascimentale, realizzata all'inizio del XVI secolo raffigurata con affreschi e statue in terracotta la storia di Maria, dell'Annuciazione fino alla morte e all'assunzione in cielo.
                                </p>
                                <p className="card-text">
                                    Dell'antica cattedrale paleocristiana rimangono alcuni scavi archeologici, mentre l'edificio attualemte è opera del Vescovo di Aosta Anselmo che a cavallo dell'anno Mille costruisce un imponente edificio che accoglieva da un lato la Cattedrale, sede del Vescovo e dedicata a Maria Assunta
                                    e dall'altro la chiesa parrocchiale dedicata a San Giovanni Battista. <br/>
                                    La Cattedrale aveva inoltre una cripta, visibile ancora oggi, ed era riccamante affrescata. Degli <Link href='/luoghi_visite/affreschi_ottoniani' className='text-decoration-none color_link fw-bold'>antichi affreschi</Link> rimane solamente il registro superiore oggi conservato al di 
                                    sopra delle volte a crociera e raffiguranti sul lato meridionale la storia di Mosè e su quello settentrionale le vicende di Sant'Eustachio.
                                </p>
                                <p className="card-text">
                                    Nel corso dei secoli seguienti l'edificio sarà abbellito con la psa dei mosaici pavimentali nei cori, l'uno raffigurante Cristo che sorregge con le mani il solo e la luna crcondato dalla rappresentazione dei dodici mesi. L'altro mosaico raffigura animali reali e mitici oltre che la 
                                    personificazione dei fiumi Tigri e Eufrate.
                                </p>
                                <p className="card-text">
                                    Tra XV e XVI secolo grazie a vescovi insigni e al mecenatismo dell'arcidiacono Georges de Challant la cattedrale si trasforma con interventi di gusto gotico quali le volte a crociera, la posa di vetrate colorate e la realizzazione degli stalli nel coro.
                                </p>
                                <p className="card-text">
                                    La navate laterali sono inoltre arricchite da numerose cappelle come dedicata a <b>San Grato</b>, <b>patrono della Diocesi</b>, in cui è esposto vero e proprio gioiello di oreficerie medievale: la cassa reliquiario di San Grato.
                                </p>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-center">
                            <div className='mx-2'>
                                <Image src={Cattedrale_Santa_Maria_Assunta_Aosta} className="mb-2"  alt="Cattedrale Santa Maria Assunta Aosta" title='Cattedrale Santa Maria Assunta Aosta'/>
                                <p className='text-center'>
                                    Cattedrale Santa Maria Assunta Aosta
                                </p>
                            </div>
                            <div className='mx-2'>
                                <Image src={Facciata_Cattedrale_di_Aosta} className="mb-2"  alt="Affreschi della facciata Cattedrale di Aosta" title='Affreschi della facciata Cattedrale di Aosta'/>
                                <p className='text-center'>
                                    Affreschi della facciata Cattedrale di Aosta
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 margin">
                    <div className="row g-0">
                        <div className="d-flex align-items-center">
                            <div className="card-body ">
                                <h2 className="card-title color-subtitle" id='Third_Point_Header'>Aosta Medievale: la Chiesa di Saint-Etienne</h2>
                                <p className="card-text">
                                    Collocata poco lontana dalla Cattedrale, appena fuori dal perimetro di Augusta Praetoria nei pressi della Porta Principalis Sinistra, si trova la bella <strong>chiesa di Sant Etienne</strong>. <br/>
                                    Sorta all'interno di un'antica area funeraria, la parrocchia è cictata dal XII secolo diventando presto il punto di aggregazione del quartiere di aosta medievale denominato "Il Faubourg de Saint Etienne".
                                </p>
                                <p className="card-text">
                                    La chiesa si ampliò nel 1400, fino alla sua ultima trasformazione avvenuta nel Settecento. In questo periodo vennero effettuati gli afreschi della facciata con numerose raffigurazioni di Santi che attorniano la scena del <b>martirio si Santo Stefano</b> posta al centro
                                </p>
                                <p className="card-text">
                                    All'interno la chiesa conserva un imponente <b>altare maggiore barocco</b> dorato risalente al 1670 e nella navata sinistra una grande scultura raffigurante San Cristoforo. Un'opera alta oltre 4 metri e realizzata nel XVº secolo della bottega dell'intagliatore valdostano De Chestro, già attiva nello stesso periodo nella Cattedrale di Aosta.
                                </p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className='mx-2'>
                                <Image src={Chiesa_Santo_Stefano_Aosta} className="mb-2"  alt="Chiesa Saint Etienne" title='Chiesa Saint Etienne'/>
                                <p className='text-center'>
                                    Chiesa Saint Etienne 
                                </p>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <div className="card mb-3 margin">
                    <div className="row g-0">
                        <div className="d-flex align-items-center">
                            <div className="card-body ">
                                <h2 className="card-title color-subtitle" id='Fourth_Point_Header'>Le torri medievali di Aosta</h2>
                                <p className="card-text">
                                    Passeggiando lungo le mura della città di Aosta è possibile inoltre comprendere la trasformazione delle torrri romane che circondavano <Link href='/visite/aosta_romana_e_medievale' className='text-decoration-none color_link fw-bold'>Aosta Praetoria</Link> in residenze nobiliari in mano a varie famiglie aristocratiche dell'Aosta medievale 
                                    di secoli fa.
                                </p>
                                <p className="card-text">
                                    <Link href='/luoghi_visite/porta_praetoria' className='text-decoration-none color_link fw-bold'>La Poerta Praetoria</Link>, ingresso monumentale della città romana di Augusta Praetoria, in epoca medievale è proprietà dei Signori della Porta Santi Ursi i quali riuscirono a chiudere i passaggi centrali e meridionali ed impiantarono una dogana in
                                    corrispondenza dell'accasso settentrionale. 
                                </p>
                                <p className="card-text">
                                    I Signori costruirono anche una cappella titolata alla Santissima Trinità e proprio la presenza della cappella, poi distrutta, fece per lungo tempo chiamarela torre de la Trinité. <br/>
                                    Sotto una delle arcate c'era inoltre il forno bannale del quartiere che cuoceva due volte alla settimana il pane destinato agli abitanti del Borgo su cui i Signori di Sant'Orso avvano giurisdizione.
                                </p>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-center">
                            <div className='mx-2'>
                                <Image src={Torre_del_Lebbroso} className="mb-2"  alt="Torre del Lebbroso" title='Torre del Lebbroso'/>
                                <p className='text-center'>
                                    Torre del Lebbroso
                                </p>
                            </div>
                            <div className='mx-2'>
                                <Image src={Torre_di_Bramafam} className="mb-2"  alt="Torre di Bramafam" title='Torre di Bramafam'/>
                                <p className='text-center'>
                                    Torre di Bramafam
                                </p>
                            </div>
                        </div>
                        <div className='p-3'>
                            <p>
                                <span className='color-subtitle fw-bold'>La Torre di Bramafam</span>, costruita sui resti di un bastione romano, di cui conservano le fondamanta, si sviluppa qui in epoca medievale un Torione circolare ed un grande fabbricato rettangolare annesso. <br/>
                                La torre fu edificata dagli Challant, visconti di Aosta, nel XI secolo e passò ai Savoia nel 1295. In epoca medievale la torre era anche chiamata Tour Beatrix.
                            </p>
                            <p>
                                La leggenda narra che un conte di Challant folle di gelosia vi rinchiude la moglie condannandola a morire di fame... da qui il nome brama-fam. In realtà il nome della torre sembrerebbe derivare dal fatto che trattandosi della residenza di autorità locali, in caso di carestia la popolazione vi si adunava davanti per "crier famine" (bramé fam in patois) 
                                ovvero chiedere la distribuzione delle derrate alimentari.
                            </p>
                            <p>
                                <span className='color-subtitle fw-bold'>La Torre del Lebbroso</span>, anch'essa costruita su bastione romano al quale fu annesso nel XV cesolo una torretta laterale. La leggenda narra che la torre sarebbe abitata da un fantasma e per questo in passato denominata "de la Frayeur". Si diceva infatti vi alloggiassero fantasmi e c'era chi diceva che nelle notti
                                più buie avesse visto iscire una donna alta e sottile che reggeva una lampada.
                            </p>
                            <p>
                                Il nome attuale deriva del fatto che nel 1773 fu destinata ad ospirate una famiglia di lebbrosi originari di Oneglia. Xavier de Maistre ambienta qui "Il labbroso Guasco", ispirato all'ultimo lebbroso Pietro Bernardo Guasco che vi morì nel 1803.
                            </p>
                            <p>
                                Si tende a pensare che il Madioevo sia un periodo buoi fatto di carestie, uerre e superstizioni... nulla di più sbagliato e ve ne accorgerete con una <b>visita guidata di Aosta medievale</b>.
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
                                <Link to='/via_francigena_valle_d_aosta' className='text-decoration-none color_link'>La via Francigena Valle d'Aosta: l'itinerario lungo il primo tratto italiano</Link>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <CercaComponent/>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
