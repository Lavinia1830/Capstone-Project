import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Image, Modal } from 'react-bootstrap';
import Vicoli from '../../../../assets/Liguria/Quartiere_di_Carmine_Genova_Liguria.jpg';
import Vicolo_Cioccolato from '../../../../assets/Liguria/Vicolo_Ciaccolato_Genova_Liguria.jpg';
import Vicolo_Fragola from '../../../../assets/Liguria/Vicolo_Fragola_Genova_Liguria.jpg';
import Vicolo_Zucchero from '../../../../assets/Liguria/Vicolo_Zucchero_Genova_Liguria.jpg';
import Funicolare_Stazione_Carbonara from '../../../../assets/Liguria/Funicolare_Stazione_Carbonara_Genova_Liguria.jpg';
import Vicolo1 from '../../../../assets/Liguria/Vicolo_Genova_Liguria1.jpg';
import Vicolo2 from '../../../../assets/Liguria/Vicolo_Genova_Liguria2.jpg';
import Vicolo3 from '../../../../assets/Liguria/Vicolo_Genova_Liguria3.jpg';
import Vicolo4 from '../../../../assets/Liguria/Vicolo_Genova_Liguria4.jpg';
import Vicolo5 from '../../../../assets/Liguria/Vicolo_Genova_Liguria5.jpg';
import Vicolo6 from '../../../../assets/Liguria/Vicolo_Genova_Liguria6.jpg';

export default function Quartiere_del_Carmine(props) {

    const images = [
        Vicoli,
        Vicolo_Cioccolato,
        Vicolo_Fragola,
        Vicolo_Zucchero
    ];

    const imagesVicoli = [
        Funicolare_Stazione_Carbonara,
        Vicolo1,
        Vicolo2,
        Vicolo3,
        Vicolo4,
        Vicolo5,
        Vicolo6
    ];

    const [show, setShow] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const [showVicoli, setShowVicoli] = useState(false);
    const [selectedImageIndexVicoli, setSelectedImageIndexVicoli] = useState(0);

    const handleClose = () => setShow(false);

    const handleCloseVicoli = () => setShowVicoli(false);

    const handleShow = (index) => {
        setSelectedImageIndex(index);
        setShow(true);
    };

    const handleShowVicoli = (index) => {
        setSelectedImageIndexVicoli(index);
        setShowVicoli(true);
    };

    const handlePrev = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handlePrevVicoli = () => {
        setSelectedImageIndexVicoli((prevIndex) => (prevIndex === 0 ? imagesVicoli.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleNextVicoli = () => {
        setSelectedImageIndexVicoli((prevIndex) => (prevIndex === imagesVicoli.length - 1 ? 0 : prevIndex + 1));
    };

  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='quartiere_di_carmine' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Quartiere di Carmine</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Il <strong>quartiere del Carmine</strong> di Genova è uno dei più antichi e storici della città. Costruito da <b>mercanti e commercianti</b>, questa zona 
                    ospitava un’abbondanza di <b>archi</b>, utilizzati ancora oggi. Il quartiere del Carmine è ricco di <b>edifici storici risalenti all’XI secolo</b>, che lo 
                    rendono un luogo interessante per i turisti.
                </p>
                <p>
                    Questo articolo vi racconterà tutto quello che c'è da sapere sul quartiere del Carmine: <b>la sua storia</b>, <b>i siti importanti</b>, <b>i residenti 
                    famosi</b>… Se volete avere un <b>assaggio della vita locale di Genova</b> esplorando i suoi quartieri, questo blog post fa per voi. <b>Continuate a 
                    leggere</b> e scoprite di più su questa zona della città!
                </p>
                <h2 className="color-subtitle">Breve stori del quartiere Carmine</h2>
                <p>
                    Il <strong>Carmine di Genova</strong> è uno dei quartieri più <b>antichi di Genova</b>: viene citato per la prima volta in un documento del <b>1075</b>. 
                    Il nome “Carmine” deriva dai <b>monaci carmelitani</b> che vivevano nel quartiere: i Carmelitani sono un <b>ordine religioso</b> fondato da <b>Santa 
                    Teresa d’Avila</b> e <b>San Giovanni della Croce</b> e originario della <b>Spagna</b>. Nel <b>1784</b> Genova fu colpita da un <b>terribile terremoto</b> che 
                    quasi rase al suolo la città.
                </p>
                <p>
                    Il <strong>Carmine</strong> fu una delle zone più colpite dal disastro. Grazie a un piano di recupero dell'<b>architetto Giuseppe Nuvolo</b>, gran parte del 
                    quartiere fu ricostruito in stile <b>neoclassico</b>. Nel <b>2002</b> il quartiere del <strong>Carmine</strong> è stato dichiarato <b>monumento nazionale</b>.
                </p>
                <h2 className="color-subtitle">Il Quartiere del Carmine, il piccolo borgo nel cuore di Genova</h2>
                <p>
                    <strong>Il Quartiere del Carmine</strong> si trova a <b>cinque minuti a piedi</b> dalla bellissima <b>piazza dell'Annunziata</b>. Dovrai proseguire per <b>via 
                    Polleri</b>, sulla destra della <b>Basilica</b>, e puoi trovare direttamente in <b>Piazza del Carmine</b>.
                </p>
                <p>
                    Un'alternativa su <b>via Polleri</b>, puoi percorrere <b>via di Vallechiara</b>, se arrivate da <b>via Cairoli</b> oppure scendi dalla fermata <b>Carbonara 
                    della Funicolare Zecca-Righi</b>, prosegui lungo i <b>Giardini Tito Rosina</b> o <b>Salita di Carbonare</b> e comincia l'esplorazione.
                </p>
                <h2 className="color-subtitle">Cosa vedere nel Quartiere del Carmine?</h2>
                <p>
                    I suoi vicoletti sono abitate da case colorate con panni stesi e le sue vie simpatiche dai nomi <b>vico della Fragola</b>, <b>vico dello Zucchero</b>, <b>vico del Cioccolatte</b>. Questo perché un tempo c'erano delle antiche botteghe della zona, oggi ancora c'è il forno attivo e un parrucchiere.
                </p>
                <div className='row d-flex justify-content-evenly mx-0 mb-4'>
                    {images.map((image, index) => (
                        <Image 
                            key={index}
                            src={image} 
                            className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2' 
                            onClick={() => handleShow(index)} 
                        />
                    ))}
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Quartire del Carmine</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center">
                        <Image src={images[selectedImageIndex]} fluid />
                    </Modal.Body>
                    <Modal.Footer className='d-flex justify-content-center'>
                        <button className='btn-card' onClick={handlePrev}>
                            Indietro
                        </button>
                        <button className='btn-card' onClick={handleNext}>
                            Avanti
                        </button>
                    </Modal.Footer>
                </Modal>
                <p>
                    Su e giù per le crêuza se imboccate la Salita S.Bernardino puoi trovare la piccola <b>Abbazia di San Bernardino</b> quasi distrutta nel corso della seconda Guerra Mondiale, oggi usata per ospitare piccoli eventi. Nella stessa via si nascondono i vicoletti già citati in precedenza, lontano dal caos del centro, ci si rilassa 
                    a un silenzio e una tranquillità di un tempo senza tempo di cui spesso non siamo abituati a percepire nelle grandi città.
                </p>
                <p>
                    Proseguendo per via del Cioccolatte, ti ritroverai nel <b>vico della Giuggiola</b>, proseguendo sarai accolto in una bellissima piazza dove al suo interno è possibile trovare il pluricentenario albero di giuggiola, preservato e unico della città.
                </p>
                <p>
                    Il Mercato del Carmine con la sua struttura in chiave liberty, ospita una food hall ospita dei posticini carini in cui cenare o fare aperitivo.
                </p>
                <p>
                    Nella stessa piazza in cui sorge il mercato, si trova la chiesa del Carmine che prende il nome da alcuni frati carmelitani francesi che la edificarono nel 1262.
                </p>
                <p>
                    Salendo lungo il bordo si trova la piazza dell'Olivella, nascosta tra gli alberi di uliveti c'è la chiesa sconsacrata di <b>San Bartolomeo dell'Olivella</b>: dove un tempo si trovava un grandissimo uliveto.
                </p>
                <div className='row d-flex justify-content-evenly mx-0 mb-4'>
                    {imagesVicoli.map((image, index) => (
                        <Image 
                            key={index}
                            src={image} 
                            className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2' 
                            onClick={() => handleShowVicoli(index)} 
                        />
                    ))}
                </div>
                <Modal show={showVicoli} onHide={handleCloseVicoli}>
                    <Modal.Header closeButton>
                        <Modal.Title>Quartire del Carmine Vicoli</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center">
                        <Image src={imagesVicoli[selectedImageIndexVicoli]} fluid />
                    </Modal.Body>
                    <Modal.Footer className='d-flex justify-content-center'>
                        <button className='btn-card' onClick={handlePrevVicoli}>
                            Indietro
                        </button>
                        <button className='btn-card' onClick={handleNextVicoli}>
                            Avanti
                        </button>
                    </Modal.Footer>
                </Modal>
                <h2 className="color-subtitle">In conclusione sul Quartiere del Carmine</h2>
                <p>
                    Il <strong>quartiere del Carmine</strong> di Genova è una delle zone più <b>antiche e storiche</b> della città. Costruito da 
                    mercanti e commercianti, questo quartiere ospita numerosi <b>archi</b>, utilizzati ancora oggi.
                </p>
                <p>
                    Il quartiere del Carmine è ricco di <b>edifici storici risalenti all'XI secolo</b>, che lo rendono un luogo interessante per 
                    i turisti. Se volete avere un assaggio della <b>vita locale di Genova</b> esplorando i suoi quartieri, questo quartiere è 
                    un <b>ottimo punto di partenza</b>.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1686.5536351017838!2d8.928956777770997!3d44.41498476825173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d343620041e663%3A0xb352a4016179d93b!2sQuartiere%20medievale%20del%20Carmine!5e1!3m2!1sit!2sit!4v1712756894522!5m2!1sit!2sit"
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
