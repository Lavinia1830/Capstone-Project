import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Eataly(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='eataly' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Eataly</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    <strong>Eataly Torino</strong> è una delle sedi più iconiche della catena di supermercati e ristoranti Eataly. Situato nella città di Torino, Italia, questo Eataly occupa un edificio storico nel quartiere Lingotto, famoso per 
                    essere stato il sito della vecchia fabbrica automobilistica Fiat.
                </p>
                <p>
                    <b>La storia di Eataly Torino</b> è legata alla visione dell'imprenditore Oscar Farinetti, che ha fondato il primo Eataly a Torino nel 2007. Questo punto vendita iniziale è stato aperto in un ex magazzino di una fabbrica di 
                    vini, e il concetto di Eataly era quello di creare un luogo che celebrasse e promuovesse la cultura culinaria italiana attraverso la vendita di prodotti alimentari di alta qualità e la preparazione di cibi freschi negli stand 
                    dei ristoranti.
                </p>
                <p>
                    Con il tempo, Eataly ha visto una rapida espansione, con sedi che si sono aperte in molte città italiane e in tutto il mondo. Tuttavia, Eataly Torino rimane una delle sedi più amate e significative, in quanto è dove tutto è 
                    iniziato. Il suo ambiente unico, il mix di shopping e esperienze gastronomiche, e il rispetto per i prodotti alimentari di qualità e le tradizioni culinarie italiane lo rendono una tappa imprescindibile per i visitatori della 
                    città e un punto di riferimento per gli amanti del cibo.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.5559824316174!2d7.665620734070489!3d45.035041621012624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478812b7b8e34d47%3A0x15be6a21c64c00eb!2sEataly%20Torino%20Lingotto!5e1!3m2!1sit!2sit!4v1712587676343!5m2!1sit!2sit"
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
