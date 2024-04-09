import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { CardText,  CardImg, Card, CardImgOverlay, CardTitle, CardBody} from 'react-bootstrap';
import Piano_Fossato_Palazzo_Madama from '../../../../../assets/Piemonte/Piano_Fossato_Palazzo_Madama_Torino_Piemonte.jpg';
import Piano_terra_Sala_Staffarda from '../../../../../assets/Piemonte/Piano_terra_Sala_Staffarda_Palazzo_Madama_Torino_Piemonte.jpg';
import Palazzo_Madama_Camera_di_Madama_Reale from '../../../../../assets/Piemonte/Palazzo_Madama_Camera_di_Madama_Reale_Torino_Piemonte.jpg';




const Medioevo = () => {
    return (
        <div>
            <Card className="bg-dark text-white " style={{width: '400px'}}>
                <div style={{ position: 'relative' }}>
                    <CardImg src={Piano_Fossato_Palazzo_Madama} alt="Card image" />
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))'
                    }}></div>
                </div>
                <CardImgOverlay>
                    <div className="card-overlay-content">
                        <CardTitle >Medioevo</CardTitle>
                        <CardText className='fst-italic'>
                            Piano -1
                        </CardText>
                        <CardText>
                            Percorso cronologico sullo sviluppo stilistico e iconografico della scultura piemontese in pietra dal Dodicesimo al Tredicesimo secolo. All'esterno è possibile visitare il Giardino medievale, un'oasi verde nel cuore della città.
                        </CardText>
                    </div>
                </CardImgOverlay>
            </Card>
        </div>
        
    );
};

const GoticoeRinascimento = () => {
    return (
        <div>
            <Card className="bg-dark text-white " style={{width: '400px'}}>
                <div style={{ position: 'relative' }}>
                    <CardImg src={Piano_terra_Sala_Staffarda} alt="Card image" />
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))'
                    }}></div>
                </div>
                <CardImgOverlay>
                    <div className="card-overlay-content">
                        <CardTitle >Gotico e Rinasctimento</CardTitle>
                        <CardText className='fst-italic'>
                            Piano 0
                        </CardText>
                        <CardText>
                            Sculture, dipinti e oggetti preziosi realizzati tra Tredicesimo e Seicento secolo. Quattro secoli di cultura figurativa piemontese dall'arte gotica al Rinascomento. In Sala Acaia il capolavoro di Antonello da Meddina, il Ritratto d'uomo. 
                        </CardText>
                    </div>
                </CardImgOverlay>
            </Card>
        </div>
        
    );
};

const Barocco = () => {
    return (
        <div>
            <Card className="bg-dark text-white " style={{width: '400px'}}>
                <div style={{ position: 'relative' }}>
                    <CardImg src={Palazzo_Madama_Camera_di_Madama_Reale} alt="Card image" />
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))'
                    }}></div>
                </div>
                <CardImgOverlay>
                    <div className="card-overlay-content">
                        <CardTitle >Barocco</CardTitle>
                        <CardText className='fst-italic'>
                            Piano 1
                        </CardText>
                        <CardText>
                            Percorso cronologico e stilistico delle collezioni tra Sei e Sttecento presentato negli antichi appartamenti delle Madame Reali. Le opere di committanza ducale e di provenienza italiana e straniera dialogano con le sfarzose decorazioni barocche 
                            delle sale.
                        </CardText>
                    </div>
                </CardImgOverlay>
            </Card>
        </div>
        
    );
};

const ArtiDecorative = () => {
    return (
        <div>
            <Card className="bg-dark text-white " style={{width: '400px'}}>
                <div style={{ position: 'relative' }}>
                    <CardImg src={Palazzo_Madama_Camera_di_Madama_Reale} alt="Card image" />
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))'
                    }}></div>
                </div>
                <CardImgOverlay>
                    <div className="card-overlay-content">
                        <CardTitle >Arti Decorative</CardTitle>
                        <CardText className='fst-italic'>
                            Piano 2
                        </CardText>
                        <CardText>
                            Raccolta di arte decorativa arganizzata in tre sale: la sala delle maioliche e porcellana, la Sala Atelier e infine la Sala Vetri con la straordianaria collezione di vetri dipinti e dorati del marchese Emanuele Taparelli d'Azeglio.
                        </CardText>
                    </div>
                </CardImgOverlay>
            </Card>
        </div>
        
    );
};

export default function Palazzo_Madama(props) {


    const [stop, setStop] = useState(0);

    const nextStop = () => {
        setStop(stop + 1);
    };

    const prevStop = () => {
        setStop(stop - 1);
    };

    let currentStop;
    switch (stop) {
        case 0:
        currentStop = <Medioevo/>;
        break;
        case 1:
        currentStop = <GoticoeRinascimento/>;
        break;
        case 2:
        currentStop = <Barocco/>;
        break;
        case 3:
        currentStop = <ArtiDecorative />;
        break;
        default:
        currentStop = <Medioevo/>;
        break;
    }



    

  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='palazzo_madama' style={{ position: 'relative' }}>
            <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>palazzo Madama</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>La storia</h2>
                <p>
                    Palazzo Madama è un’architettura straordinaria, che ancora oggi possiamo leggere osservando i diversi elementi costruttivi e decorativi dell’edificio, per proseguire attraverso una passeggiata nel Giardino Botanico Mediavale ai piedi della torre.
                </p>
                <p>
                    Un vero e proprio angolo verde in epoca medievale le cui prime testimonianze risalgono al 1402, periodo in cui furono avviati i lavori di ingrandimento dell’edificio per volere di Ludovico principe d’Acaia. Grazie ai documenti conservati all’Archivio 
                    di Stato si è potuto ricostruire il giardino nella forma e nell’inserimento di piante e erbe, presenti nei diversi trattati dell’epoca.
                </p>
                <p>
                    Il palazzo riassume in sé tutta la storia della città: da porta romana si trasforma nel medioevo in fortezza e poi in castello dei principi d'Acaja. Tra Sei e Settecento le Madame Reali di Savoia lo scelgono come propria residenza e nell'Ottocento 
                    Carlo Alberto vi colloca il primo Senato del Regno d'Italia. Dal 1934 il palazzo ospita le collezioni di arte antica del Museo Civico.
                </p>
            </div>
            <div className='margin'>
                <div className='d-flex flex-column align-items-center mb-3'>
                    {currentStop}
                </div> 
                <div className='d-flex flex-row justify-content-center'>
                    <button onClick={prevStop} disabled={stop === 0} className='btn btn-outline-success me-4'>
                        Previous
                    </button>
                    <button onClick={nextStop} disabled={stop === 3} className='btn btn-outline-success ms-4'>
                        Next
                    </button>
                </div>   
                
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.042480990076!2d7.682903076583924!3d45.0710759595823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d703ff69533%3A0x22ef78451aa2fa9b!2sPalazzo%20Madama!5e1!3m2!1sit!2sit!4v1712573399208!5m2!1sit!2sit"
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
