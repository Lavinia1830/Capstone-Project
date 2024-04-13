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
                    La Mecca dei golosi, il paese dei balocchi, l’eden di gastronomi: Eataly è una chicca che un buongustaio non può perdersi. Inaugurato nel 2007 il grande mercato del gusto che occupa gli ex stabilimenti della Carpano offre 11.000 mq di delikatessen, una decina di ristorantini che servono piatti espressi e un locale stellato. La filosofia del progetto è: alti cibi per tutti, cioè solo prodotti di qualità ma accessibili. Prevedete un paio d’ore, tra visita, acquisti e qualche assaggio.
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
