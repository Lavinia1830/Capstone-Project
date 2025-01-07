import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';



export default function Castello_San_Giorgio(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
        <main>
            <div className='castello_san_giorgio' style={{ position: 'relative' }}>
            <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello San Giorgio</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Il <strong>Castello di San Giorgio</strong> è considerato il monumento più caratteristico della storia di La Spezia. Posto su un modesto rilievo chiamato il Poggio, che domina la città di origine medievale, il Forte è passato da tantissime fasi di edificazione, testimoniate dalla seconda metà del 
                    XIV secolo e dai resti delle fondamenta del mastio e dalle murature, dove si possono ancora vedere le feritoie per gli arcieri. Nel 1443, il Castello è stato ampiamente modificato con l’aggiunta di un corpo a valle, progettato per le armi da fuoco. Nel 1554 è iniziata la costruzione 
                    di una massiccia opera protettiva denominata Bastia, di cui sono emerse recentemente delle tracce, ed è stato eseguito un restauro della parte superiore dell’edificio. Nel 1607 sono stati effettuati dei lavori che hanno portato a delineare la forma definitiva del Castello, dopo gli 
                    interventi di riqualificazione del sistema di difesa del Golfo, voluti dalla Serenissima.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.340662767005!2d9.8199463843832!3d44.106807224785086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fc9848d6a6c3%3A0x8bdece17eb744ecf!2sCastello%20San%20Giorgio!5e1!3m2!1sit!2sit!4v1712846777324!5m2!1sit!2sit"
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
