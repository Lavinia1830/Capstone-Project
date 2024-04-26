import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Castel_Savoia(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='castel_savoia' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castel Savoia</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Poco fuori da Gressoney-Saint-Jean, immerso in un bosco di conifere, si trova <strong>Castel Savoia</strong>, residenza degli inizi del Novecento progettata da Emilio Stramucci per la regina Margherita di Savoia, grande amante di questo territorio valdostano. È un curioso 
                        edificio turrito, in stile medievale, rivestito in pietra locale, e all’interno conserva le decorazioni originali, ma non gli arredi, e un bellissimo scalone di rovere. Al primo piano c’è l’appartamento della regina, da cui si può godere della splendida vista sul massiccio 
                        del Monte Rosa. Adiacente al castello, c’è un <b>giardino alpino</b> con un migliaio di piante montane e con fioriture rigogliose che si estende su una superficie di circa 1000 metri quadri. È da qui che ha inizio <b>la Passeggiata della Regina</b>, un percorso 
                        escursionistico, di circa 4 ore e 30 minuti, che attraversa a mezza costa tutta la conca di Gressoney toccando il lago Gover, la frazione Tschemenoal, Gressoney-La-Trinité e Staffal. 
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.4976744434932!2d7.826064237242948!3d45.76399147673988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788ba43f6e94c33%3A0x5df217ec8ce20199!2sCastel%20Savoia!5e1!3m2!1sit!2sit!4v1713791608514!5m2!1sit!2sit"
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
