import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Museo_Nazionale_Navale_della_Spezia(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            >
            <main>
                <div className='m_n_navale_della_spezia' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo Nazionale Navale della Spazia</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        La nuova sede del Museo tecnico navale della M.M., inaugurata il 12 maggio 1958, si trova accanto alla porta principale della base navale militare della Spezia. Si estende su una superficie di 3000 metri quadrati, incluso un giardino interno, ed ospita una varietà di reperti che 
                        consentono un viaggio nel tempo attraverso l’evoluzione della navigazione, dalle sue origini fino ai giorni nostri. Tra le principali collezioni è possibile vedere una preziosa raccolta di polene, modelli di navi e velieri di ogni epoca, mezzi navali leggendari come il barchino 
                        esplosivo di tipo M.T.M., una vasta gamma di armi con esemplari pregiati, cannoni navali mai mostrati al pubblico fino ad oggi, nonché la stazione ricetrasmittente che Guglielmo Marconi ha utilizzato nel 1897 a La Spezia per i suoi primi esperimenti. Fa parte del museo anche una 
                        biblioteca con pregiati volumi storici e documenti originali, tra cui il foglio matricolare di Giuseppe Garibaldi.
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
