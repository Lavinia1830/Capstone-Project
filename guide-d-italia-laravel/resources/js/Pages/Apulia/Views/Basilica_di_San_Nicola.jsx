import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Basilica_di_San_Nicola(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='basilica_di_san_nicola' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Basilica di San Nicola</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className='margin mt-3'>
                    <h2 className="color-subtitle">Il simbolo sacro di Bari</h2>
                    <p>
                        Si staglia imponente nella <b>Città Vecchia di Bari</b>, col suo aspetto massiccio e sobrio tipico dell’architettura normanna. La <strong>Basilica di San Nicola</strong> è un luogo di grande spiritualità e devozione, non solo per i fedeli della città, ma per migliaia di 
                        pellegrini provenienti da tutto il mondo poiché nella sua cripta conserva e protegge le <b>reliquie di San Nicola</b>, santo patrono del capoluogo pugliese.
                    </p>
                    <p>
                        Magnifico esempio di architettura romanica, deriva da un tempio eretto sull’area della residenza del catepano, il governatore greco-bizantino dell’Italia meridionale tra il 968 ed il 1071, di cui sono stati riutilizzati molti materiali per la ricostruzione avvenuta tra il 1087 e il 1100. 
                        Con una solenne facciata, un portale decorato con sculture e bassorilievi di grande valore artistico e un gran numero di affreschi e opere d'arte di grande bellezza al suo interno, è un vero e proprio tesoro che vi arriverà dritto al cuore.
                    </p>
                    <p>
                        Da vedere assolutamente la <b>cattedra dell'abate Elia</b>, uno dei più importanti capolavori scultorei del romanico pugliese, l’altare d’argento dedicato a San Nicola e il mausoleo cinquecentesco di Bona Sforza, regina di Polonia e duchessa di Bari. È meta anche dei fedeli cristiani 
                        ortodossi che qui celebrano le proprie liturgie.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d726.4665793144627!2d16.869635258692032!3d41.13015974757503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347e86365740501%3A0x7b380f4bb7635ba6!2sBasilica%20Pontificia%20San%20Nicola!5e1!3m2!1sit!2sit!4v1713428009890!5m2!1sit!2sit"
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
