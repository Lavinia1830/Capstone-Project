import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Monte_dei_Cappuccini(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='monte_dei_cappuccini' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Monte dei Cappuccini</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Una delle terrazze su Torino, con la collina di Superga e il colle della Maddalena. Da visitare non solo per il Museo della Montagna ( <a href='https://www.museomontagna.org/' className='text-decoratione-none color_link'>www.museomontagna.org</a> ), ma anche perché da qui la vista sulla città è splendida. Veniteci di sera, vivrete emozioni da favola. Il monte si chiama così per via del convento dei frati cappuccini.
                </p>
                <p>
                    Reggia di Venaria, come arrivare: si trova a circa 10 chilometri da Torino ed è facilmente raggiungibile in auto percorrendo la tangenziale Torino Nord con uscita Venaria. C’è anche una navetta che collega il centro città con la reggia.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.7126942903765!2d7.694735826239456!3d45.059589128310115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788729f96b782b7%3A0x8b40c2cb92862ac2!2sPiazzale%20Monte%20dei%20Cappuccini%2C%2010131%20Torino%20TO!5e1!3m2!1sit!2sit!4v1712586210357!5m2!1sit!2sit"
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
