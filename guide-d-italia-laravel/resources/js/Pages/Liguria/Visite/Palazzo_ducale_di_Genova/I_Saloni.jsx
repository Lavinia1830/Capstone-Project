import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Image, Modal } from 'react-bootstrap';
import { Link } from '@inertiajs/react';
import PalazzoDucale_Saloni1 from '../../../../../assets/Liguria/PalazzoDucale_Saloni_1.jpg';
import PalazzoDucale_Saloni2 from '../../../../../assets/Liguria/PalazzoDucale_Saloni_2.jpg';
import PalazzoDucale_Saloni3 from '../../../../../assets/Liguria/PalazzoDucale_Saloni_3.jpg';
import PalazzoDucale_Saloni4 from '../../../../../assets/Liguria/PalazzoDucale_Saloni_4.jpg';
import PalazzoDucale_Saloni5 from '../../../../../assets/Liguria/PalazzoDucale_Saloni_5.jpg';
import PalazzoDucale_Saloni6 from '../../../../../assets/Liguria/PalazzoDucale_Saloni_6.jpg';
import PalazzoDucale_Saloni7 from '../../../../../assets/Liguria/PalazzoDucale_Saloni_7.jpg';
import Sala_del_Consiglio1 from '../../../../../assets/Liguria/Sala_del_Consiglio_1.jpg';
import Sala_del_Consiglio2 from '../../../../../assets/Liguria/Sala_del_Consiglio_2.jpg';
import Sala_del_Consiglio3 from '../../../../../assets/Liguria/Sala_del_Consiglio_3.jpg';
import Sala_del_Consiglio4 from '../../../../../assets/Liguria/Sala_del_Consiglio_4.jpg'



export default function I_Saloni(props) {

    const images = [
        PalazzoDucale_Saloni1,
        PalazzoDucale_Saloni2,
        PalazzoDucale_Saloni3,
        PalazzoDucale_Saloni4,
        PalazzoDucale_Saloni5,
        PalazzoDucale_Saloni6,
        PalazzoDucale_Saloni7
    ]
    const imagesSConsiglio = [
        Sala_del_Consiglio1,
        Sala_del_Consiglio2,
        Sala_del_Consiglio3,
        Sala_del_Consiglio4
    ]

    const [show, setShow] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const [showSConsiglio, setShowSConsiglio] = useState(false);
    const [selectedImageIndexSConsiglio, setSelectedImageIndexSConsiglio] = useState(0);

    const handleShow = (index) => {
        setSelectedImageIndex(index);
        setShow(true);
    };

    const handleShowSConsiglio = (index) => {
        setSelectedImageIndexSConsiglio(index);
        setShowSConsiglio(true);
    };

    const handleClose = () => setShow(false);

    const handleCloseSConsiglio = () => setShowSConsiglio(false);

    const handlePrev = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handlePrevSConsiglio = () => {
        setSelectedImageIndexSConsiglio((prevIndex) => (prevIndex === 0 ? imagesSConsiglio.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleNextSConsiglio = () => {
        setSelectedImageIndexSConsiglio((prevIndex) => (prevIndex === imagesSConsiglio.length - 1 ? 0 : prevIndex + 1));
    };

  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='i_saloni' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>I Saloni</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>La Sotia</h2>
                <p>
                    Il <b>corpo centrale</b> del <b>Palazzo</b> è occupato dalle <b>sale del Minore</b> e del <b>Maggiore Consiglio</b>, spazi che nel <b>progetto 
                    cinquecentesco</b> del <b>Vannone</b> rappresentavano il <b>cuore</b> e il <b>centro compositivo</b> del Palazzo. Le <b>sale</b> che vediamo 
                    oggi sono quelle ricostruite dopo l’<b>incendio del 1777</b> dall’<b>architetto Simone Cantoni</b>, autore anche delle celebri <b>coperture</b> delle 
                    stesse a forma di <b>carena rovesciata</b> e della <b>facciata</b> su <b>piazza Matteotti</b>. 
                </p>
                <h2 className="color-subtitle">Sala del Maggior Consiglio</h2>
                <hr className='border-3'/>
                <p>
                    L’immagine che offre oggi al visitatore il <b>Salone del Maggior Consiglio</b> è quella <b>neoclassica</b> settecentesca riferibile al restauro 
                    di <b>Simone Cantoni</b> avvenuto dopo il furioso incendio del <b>1777</b>. Tutto sommato però le dimensioni restano quelle 
                    della “<b>Sala Grande</b>” <b>trecentesc</b>a e del <b>Salone vannoniano di fine Cinquecento</b>.
                </p>
                <p>
                    In questa sala si riunivano i <b>400 nobili</b> che amministravano la <b>Repubblica</b>, in base alla <b>riforma aristocratica di Andrea 
                    Doria</b> del <b>1528</b>, ma si ha notizia anche di <b>banchetti</b>, <b>danze</b>, <b>concerti</b> e <b>spettacoli di carnevale</b> in netto 
                    contrasto con l’austerità e la severità del governo di un’importante Repubblica racchiuso all’interno di un <b>palazzo-fortezza</b>. Questo è 
                    spiegabile, secondo alcuni storici, poiché Genova a partire dal Seicento aveva ormai perso le sue peculiarità di <b>repubblica mercantile e 
                    militare</b> per assumere il ruolo di <b>potenza economica e bancaria</b> in grado di gestire gli ingenti <b>flussi di metalli preziosi</b> provenienti 
                    dalle <b>Americhe</b>.
                </p>
                <p>
                    Al <b>Cantoni</b> si deve, oltre che alla ricostruzione di questo <b>salone</b> e di quello del <b>Minor Consiglio</b> e della <b>facciata</b> con 
                    ardite innovazioni ingegneristiche, anche la realizzazione di un complesso programma decorativo <b>neoclassico</b> in sostituzione di quanto 
                    realizzato dal <b>Vannone</b> nel 1591.
                </p>
                <p>
                    Se gli <b>stucchi</b> della volta furono affidati al milanese <b>Carlo Fozzi</b>, del genovese <b>Andrea Casaregi</b> sono le <b>staue in 
                    gesso</b> con le allegorie della <i>Concordiae</i> della <i>Pace</i> ai lati del grande portale d’ingresso. <b>Nicolò Traverso</b> e <b>Francesco 
                    Ravaschio</b> eseguirono rispettivamente le altre due statue della <i>Giustizia</i> e della <i>Fortezza</i> che affiancavano il trono 
                    del <b>Doge</b> in fondo al <b>Salone</b>.
                </p>
                <p>
                    Il <b>trono</b> fu distrutto, insieme alle statue di <i>Uomini Illustri</i> che erano posizionate nelle otto nicchie laterali e alle 
                    statue dei <b>Doria</b> della scalinata d’ingresso della piazza. Artefice di tale scempio fu la <b>rivolta giacobina del 1797</b> che, 
                    sopprimendo i simboli del potere nobiliare, segnarono la fine della <b>Repubblica aristocratica</b>.
                </p>
                <p>
                    Sopra l’ingresso principale si trova <i>La battaglia della Meloria</i> ad opera di <b>Giovanni David</b> (Cabella 1743 – Genova 1790) a ;
                    memoria della battaglia navale del <b>1284</b> durante la quale <Link href='/destinazioni/liguria/genova' 
                    className='text-decoration-none color_link'>Genova</Link> sconfisse definitivamente la nemica <Link href='/destinazioni/toscana/pisa' 
                    className='text-decoration-none color_link'>Pisa</Link>, un’altra delle quattro repubbliche marinare assieme a <Link href='/destinazioni/veneto/venezia' 
                    className='text-decoration-none color_link'>Venezia</Link> e <Link href='/destinazioni/campagna/amalfi' 
                    className='text-decoration-none color_link'>Amalfi</Link>.
                </p>
                <p>
                    Sul fronte opposto, al di sopra dello <b>stemma reale dei Savoia</b>, ancora su bozzetto del <b>David</b>, <b>Emanuele 
                    Tagliafichi</b> rappresentò <i>Il Doge Leonardo Montaldo restituisce la libertà al Re di Cipro, Jacopo da Lusignano</i>.
                </p>
                <p>
                    Il progetto di <b>Simone Cantoni</b> fu anche di interventi eccezionali, come nel caso del lavoro di <b>Giandomenico Tiepolo</b>, 
                    allievo e collaboratore del padre <b>Giambattista</b>, che sulla volta realizzò il grande affresco <i>La Liguria e le glorie della 
                    famiglia Giustiniani</i> realizzato tra il <b>1783</b> e <b>1785</b> e andato perduto poco dopo.
                </p>
                <p>
                    L’affresco venne sostituito dal dipinto tutt’ora visibile di <b>Giuseppe Isola</b> (Genova 1808 – 1893) raffigurante <i>L’allegoria del 
                    commercio dei Liguri</i> realizzato nel <b>1875</b>.
                </p>
                <p>
                    L’assetto decorativo fu completato in fretta e furia in occasione della visita di <b>Napoleone</b> a Genova in città nel <b>1805</b> con 
                    una serie di di grandi tele chiaro scure di soggetto <b>mitologico</b> e con sagome di <b>putti</b> inseriti nelle nicchie quadrangolari.
                </p>
                <p>
                    I grandi <b>lampadari</b> attualmente visibili, sono stati realizzati appositamente per la riapertura del <b>Palazzo</b> al pubblico 
                    nel <b>1992</b>. 
                </p>
                <h2 className="color-subtitle">Interno</h2>
                <p>
                    Dal secolo <b>XVI</b> fino a gran parte del <b>XVII</b> la <b>Torre</b> subì modifiche interne considerevoli, in seguito alla sua 
                    trasformazione in <b>carcere</b>: ebbe i <b>piani dimezzati</b> e notevoli variazioni nelle <b>aperture</b>. <br/>
                    In particolare la <b>cella</b> – sottostante alla triplice fila di <b>archetti</b> – ebbe le primitive <b>monofore</b> trasformate 
                    in <b>bifore</b> per esigenze statiche dopo l’innalzamento <b>cinquecentesco</b>.<br/>
                    La <b>muratura perimetrale</b> à rimasta in sostanza quella originaria.<br/>
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
                        <Modal.Title>Sala del Maggior Consiglio</Modal.Title>
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
            </div>
            <div className="margin mt-3">
                <h2 className="color-subtitle">Sala del Minor Consiglio</h2>
                <hr className='border-3'/>
                <p>
                    Disposto verso <b>Nord</b>, era denominato per la sua collocazione sede del “<b>Consiglietto d’Estate</b>” da utilizzarsi nei mesi 
                    caldi dell’anno.<br/>
                    Il <b>Minor Consiglio</b> era composto da <b>100 membri</b> e aveva giurisdizione, fra le altre cose, sui possedimenti genovesi 
                    d’oltremare. L’esempio forse più significativo di queste competenze di governo è rappresentato da una decisione del <b>1768</b> quando 
                    Genova cedette definitivamente la <b>Corsica</b> alla <b>Francia</b>. Curiosamente <b>Napoleone Bonaparte</b> nacque 
                    ad <b>Ajaccio</b> un anno dopo.
                </p>
                <p>
                    L’apparato decorativo di questo ambiente fu affidato dal <b>Cantoni</b> allo pittore e scrittore d’arti <b>Carlo Giuseppe Ratti</b> allora 
                    direttore della scuola di pittura dell’<b>Accademia Linguistica</b>. A <b>Carlo Barabino</b> fu invece affidata la realizzazione 
                    della <b>balaustra circolare</b> in marmo (<b>Esedra</b>) che delimitiva lo spazio del <b>Doge</b>.
                </p>
                <p>
                    Il <b>Ratti</b>, fra i massimi esponenti del primo <b>neoclassicismo</b> in <b>Liguria</b>, con un occhio alla tradizione <b>barocca</b>, 
                    riprese ancora una volta i temi dell’<b>autocelebrazione</b> con <i>lo sbarco di Colombo nelle Indie</i> sopra l’ingresso principale 
                    e <i>L’arrivo a Genova delle Ceneri del Battista</i> di fronte.
                </p>
                <p>
                    Sul soffitto, fra i monocromi <i>La Liguria sparge tesori alle Provincie e Giano sacrifica alla Pace</i>, campeggia <i>L’apoteosi della 
                    Repubblica con l’allegoria della Divina Sapienza</i> ripresa da un bozzetto di <b>Domenico Piola</b>.
                </p>
                <div className='row d-flex justify-content-evenly mx-0 mb-4'>
                    {imagesSConsiglio.map((image, index) => (
                        <Image 
                            key={index}
                            src={image} 
                            className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2' 
                            onClick={() => handleShowSConsiglio(index)} 
                        />
                    ))}
                </div>
                <Modal show={showSConsiglio} onHide={handleCloseSConsiglio}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sala del Minor Consiglio</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center">
                        <Image src={imagesSConsiglio[selectedImageIndexSConsiglio]} fluid />
                    </Modal.Body>
                    <Modal.Footer className='d-flex justify-content-center'>
                        <button className='btn-card' onClick={handlePrevSConsiglio}>
                            Indietro
                        </button>
                        <button className='btn-card' onClick={handleNextSConsiglio}>
                            Avanti
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
