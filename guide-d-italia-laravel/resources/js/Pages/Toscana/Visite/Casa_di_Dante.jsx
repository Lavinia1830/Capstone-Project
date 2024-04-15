import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Casa_di_Dante(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='casa_di_dante' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Casa di Dante</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Anche se non c’è alcuna certezza storica che il poeta abbia vissuto qui, in quella che da tutti è considerata la casa di Dante Alighieri. State però sicuri che in questa casa-torre alle spalle della Badia Fiorentina ci sarà un sacco di gente. Nei tre piani del palazzetto 
                        della <strong>casa di Dante</strong> a Firenze, preso letteralmente d’assalto da turisti cinesi e coreani, sono esposti pannelli didattici che spiegano la vita nella Firenze trecentesca, alcune riproduzioni della Divina Commedia, e poco altro. Il Museo Casa di Dante rimane 
                        comunque un ritrovo imprescindibile per gli appassionati. Se volete un punto di osservazione originale sulla città, prendete l’ascensore e godetevi la bella vista sui tetti del quartiere.
                    </p>
                    <p>
                        Non è la casa dove Dante visse quando era in esilio a Ravenna, ma un complemento al <b>Museo Dante</b> che già nel 1921 era stato inaugurato a brevissima distanza dalla Tomba.
                    </p>
                    <p>
                        Nella prima sala del nuovo spazio, che conta anche bookshop e laboratorio, sono esposte opere d’arte otto-novecentesche in deposito a lungo termine dalla Galleria d’Arte Moderna di Palazzo Pitti a Firenze. In un’altra sala si trovano collezioni dantesche della <b>Biblioteca 
                        Classense</b>, l’istituzione che fin dalle origini ha curato la conservazione, l’esposizione e la gestione scientifica del lascito di Dante in città. È stato anche annunciato che a tutto questo si aggiungerà un’ulteriore sezione dedicata al mondo del design, naturalmente declinato in versione dantesca, in collaborazione con l’ADI Design Museum di Milano.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d716.8726179707984!2d11.25653566807544!3d43.77099137299569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a54014767246b%3A0x9bad253c0cb7de2!2sMuseo%20Casa%20di%20Dante!5e1!3m2!1sit!2sit!4v1713193999015!5m2!1sit!2sit"
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
