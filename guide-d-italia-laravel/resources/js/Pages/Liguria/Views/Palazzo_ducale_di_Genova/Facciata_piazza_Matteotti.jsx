import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Image, Modal } from 'react-bootstrap';
import PalazzoDucale_Facciata1 from '../../../../../assets/Liguria/PalazzoDucale_Facciata_Genova_Liguria_1.jpg';
import PalazzoDucale_Facciata2 from '../../../../../assets/Liguria/PalazzoDucale_Facciata_Genova_Liguria_2.jpg';
import PalazzoDucale_Facciata3 from '../../../../../assets/Liguria/PalazzoDucale_Facciata_Genova_Liguria_3.jpg';
import PalazzoDucale_Facciata4 from '../../../../../assets/Liguria/PalazzoDucale_Facciata_Genova_Liguria_4.jpg';
import PalazzoDucale_Facciata5 from '../../../../../assets/Liguria/PalazzoDucale_Facciata_Genova_Liguria_5.jpg';
import PalazzoDucale_Facciata6 from '../../../../../assets/Liguria/PalazzoDucale_Facciata_Genova_Liguria_6.jpg';
import PalazzoDucale_Facciata7 from '../../../../../assets/Liguria/PalazzoDucale_Facciata_Genova_Liguria_7.jpg';
import PalazzoDucale_Facciata8 from '../../../../../assets/Liguria/PalazzoDucale_Facciata_Genova_Liguria_8.jpg';

export default function Facciata_piazza_Matteotti(props) {

    const images = [
        PalazzoDucale_Facciata1,
        PalazzoDucale_Facciata2,
        PalazzoDucale_Facciata3,
        PalazzoDucale_Facciata4,
        PalazzoDucale_Facciata5,
        PalazzoDucale_Facciata6,
        PalazzoDucale_Facciata7,
        PalazzoDucale_Facciata8
    ];

    const [show, setShow] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = (index) => {
        setSelectedImageIndex(index);
        setShow(true);
    };

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
            <div className='facciata_p_matteotti' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Facciata piazza Matteotti</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>La Facciata di piazza Matteotti</h2>
                <p>
                    Fino alla metà del XVIII secolo l’attuale <b>piazza Matteotti</b> era chiusa da una “<b>cortina</b>”: il <b>Palazzo</b> era una vera e 
                    propria <b>sede di Stato</b>, con ambienti di rappresentanza e <b>piazza d’armi</b>. Alla metà del <b>Settecento</b> però, venute meno le esigenze 
                    difensive, si decise di abbattere la cortina: l’effetto a sorpresa della visione della piazza e, soprattutto, della <b>facciata</b> fu straordinario, 
                    reso ancora più solenne dalla pendenza del percorso culminante nella <b>scalinata centrale</b> con le due rampe laterali per la salita dei cavalli 
                    e delle portantine.
                </p>
                <p>
                    L’attuale facciata è stata realizzata dall’<b>architetto ticinese Simone Cantoni</b> fra il <b>1778 e il 1783</b> dopo che, il <b>3 novembre 1777</b>, 
                    un furioso <b>incendio</b> distrusse il corpo centrale del Palazzo dai tetti fino al piano nobile. Simone Cantoni, architetto formatosi nelle <b>Accademie 
                    di Roma</b> e di <b>Parma</b>, era considerato uno dei migliori esponenti del <b>primo neoclassicismo</b> nell’<b>Italia Settentrionale</b>. A lui si deve, 
                    oltre all’elegante facciata risolta con <b>marmi veri e marmi finti in stucco lucido</b> dalla delicata cromia chiara, anche la ricostruzione 
                    delle <b>sale del Maggiore e del Minor Consiglio</b> al piano nobile. Alle <b>decorazioni plastiche</b> della facciata lavorarono <b>Nicolò 
                    Traverso</b> e <b>Francesco Ravaschio</b>, due scultori genovesi formatisi nell’ambiente artistico di Roma da cui furono chiamati appositamente nel <b>1780</b>, 
                    autori dei gruppi di <b>trofei con figure di schiavi barbareschi e prigioni</b>.
                </p>
                <h2 className="color-subtitle">La Facciata di piazza De Ferrari</h2>
                <p>
                    Il prospetto che si affaccia su <b>piazza De Ferrari</b> subì importanti modifiche durante i lavori di restauro eseguiti da <b>Orlando Grosso</b> nei primi 
                    decenni del XX secolo. Prima dei lavori di Grosso essa doveva presentarsi come una <b>facciata liscia intonacata</b>, sulla quale erano visibili tracce 
                    di <b>affreschi seicenteschi</b>. Grosso rielaborò la facciata in stile <b>classicista</b>, regolarizzando le <b>aperture</b> e inserendole all’interno di uno 
                    schema di <b>colonne</b> e altri <b>elementi architettonici dipinti</b>. Furono inoltre aperte <b>tre porte</b> per collegare la piazza con il <b>porticato 
                    interno</b> del palazzo.
                </p>
                <p>
                    La facciata, <b>dipinta nel 1938</b>, risultava in gran parte <b>dilavata</b> al momento del restauro del 1992. Durante questo restauro è stata ripristinata 
                    la decorazione di Grosso, spostando però verso l’alto le <b>tre porte</b> in modo da renderle alla stessa quota del <b>cortile interno</b> sul quale si 
                    affacciano. La facciata è organizzata su <b>due livelli</b>, scanditi da una decorazione pittorica. Al piano terra si trovano, oltre alle tre aperture una 
                    serie di <b>finestroni</b>, sormontati ognuno da una <b>finestrella</b>. Il livello superiore riprende lo schema del piano terra, con una nuova serie 
                    di <b>finestroni</b> e di <b>finestrelle</b>.
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
                        <Modal.Title>Palazzo Ducale Facciata</Modal.Title>
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
