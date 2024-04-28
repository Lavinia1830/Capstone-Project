import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function GAM(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='gam' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>GAM - Galleria Civica d'Arte Moderna e Contemporanea</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Da anni la capitale sabauda ha fatto dell’arte contemporanea un proprio fiore all’occhiello, ovvero la Galleria di Arte Moderna di Torino, riaperta dopo due mesi di chiusura nell’ottobre 2009, con un nuovo allestimento che non segue un ordine cronologico, ma tematico ospita più di 45.000 dipinti, sculture e installazioni dal Settecento a oggi. Il Museo GAM di Torino è uno degli esempi più fulgidi dell’arte cittadina.
                </p>
                <p>
                    Scoprire la GAM - Galleria d’arte moderna a Torino significa avventurarsi in un dedalo di stanze ricche di creatività, simbolo della rinascita della città che dal 2006, anno delle Olimpiadi Invernali, ha saputo inventarsi un nuovo modo di accogliere i visitatori.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.7474060642044!2d7.666945705190173!3d45.06451043389022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d1405b96843%3A0x3fa389e5476f7072!2sVia%20Magenta%2C%2031%2C%2010128%20Torino%20TO!5e1!3m2!1sit!2sit!4v1712587828294!5m2!1sit!2sit"
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
