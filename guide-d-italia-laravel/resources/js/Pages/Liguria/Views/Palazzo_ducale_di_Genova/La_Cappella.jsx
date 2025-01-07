import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Image, Modal } from 'react-bootstrap';
import PalazzoDucale_Cappella1 from '../../../../../assets/Liguria/PalazzoDucale_Cappella_1.jpg';
import PalazzoDucale_Cappella2 from '../../../../../assets/Liguria/PalazzoDucale_Cappella_2.jpg';
import PalazzoDucale_Cappella3 from '../../../../../assets/Liguria/PalazzoDucale_Cappella_3.jpg';
import PalazzoDucale_Cappella4 from '../../../../../assets/Liguria/PalazzoDucale_Cappella_4.jpg';

export default function La_Cappella(props) {

  const images = [
    PalazzoDucale_Cappella1,
    PalazzoDucale_Cappella2,
    PalazzoDucale_Cappella3,
    PalazzoDucale_Cappella4
  ]

  const [show, setShow] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleShow = (index) => {
    setSelectedImageIndex(index);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='la_cappella' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>La Cappella</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
              <h2 className='color-subtitle'>La Cappella del Doge</h2>
              <p>
                  All’interno dell’<b>Appartamento del Doge</b> si trova la splendida <b>Cappella</b>, affrescata da <b>Giovanni Battista 
                  Carlone</b> nel <b>1653</b>. Sebbene sembri dedicata alla <b>Vergine</b>, rappresentata nella radiosa scultura 
                  di <b>Francesco Schiaffino</b> sull’altare, la Cappella celebra in realtà i <b>fasti di Genova</b>: in un <i>crescendo</i> di 
                  decorazioni – dal pavimento con i <b>marmi policromi</b> alla volta a <i>trompe l’oeil</i> – sulle pareti affrescate sono 
                  rappresentati gli <b>eroi della storia di Genova</b>, <b>Guglielmo Embriaco</b> e <b>Cristoforo Colombo</b>. Sulla volta 
                  la <b>Vergine in trono</b>, invocata dai Santi protettori della città <b>Giovanni Battista</b>, <b>Giorgio</b>, <b>Bernardo</b> e <b>Lorenzo</b> mostra 
                  il bambino Gesù con un cartiglio che recita «<b>et rege eos</b>» – <i>govèrnali</i> – in riferimento al decreto 
                  del <b>1637</b> con cui la <b>Madonna venne eletta Regina di Genova</b> e la <b>Repubblica trasformata in Regno</b>. 
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
                  <Modal.Title>Palazzo Ducale La Cappella</Modal.Title>
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
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
