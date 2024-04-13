import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Museo_egizio(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='museo_egizio' style={{ position: 'relative' }}>
            <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo Egizio</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Il Museo Egizio di Torino racchiude i suoi tesori nel Palazzo dell’Accademia delle Scienze: fondato nel 1824, che possiede la più importante collezione egizia del mondo dopo quelle del Cairo e di Londra. 
                    Dopo il restyling che ha subito in epoca recente, visitare il Museo Egizio a Torino è un’esperienza impossibile da dimenticare, che interseca Storia e cultura di un popolo che non cessa di affascinare. 
                    Le mummie del Museo Egizio di Torino (le più impressionanti sono quelle delle "tre sorelle", perfettamente visibili e conservate) sono una delle attrattive da cui i bambini, in visita con genitori e 
                    scuole, non cessano di farsi suggestionare e affascinare. Il tour del Museo Egizio a Torino corre sul filo delle cose che imparano a scuola, con l’incredibile privilegio di poterle vedere con i proprio 
                    occhi, perfettamente restaurate e conservate nel museo di Torino tra i più famosi.
                </p>
                <p>
                    <b>Cosa vedere al Museo Egizio di Torino</b>: dalle incisioni ai papiri, passando per l’incredibile collezione di manufatti di varie epoche che permettono
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.18719446438!2d7.683903600000006!3d45.0685959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d6fce61b771%3A0x6ecb005b81db9857!2sMuseo%20Egizio!5e1!3m2!1sit!2sit!4v1712565587074!5m2!1sit!2sit"
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
