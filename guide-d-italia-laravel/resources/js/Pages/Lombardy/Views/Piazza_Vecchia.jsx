import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Piazza_Vecchia(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='piazza_vecchia' style={{ position: 'relative' }}>
            <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Piazza Vecchia</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visite</p>
        </div>
        <div className="margin mt-3">
            <p>
                Piazza Vecchia viene considerata il “salotto rinascimentale” nel quale si uniscono tutte le vie medievali della città alta.  Al centro della piazza vi è la <b>Fontana del Contarini</b>, principale luogo d’incontro per chi vive o visita la città.
            </p>
            <p>
                Sulla piazza sono presenti importanti edifici storici come la <b>Biblioteca Civica Angelo Mai</b> all’interno del <b>Palazzo Nuovo</b> o il <b>Palazzo della Ragione</b>, sotto al quale si trova un'antica meridiana solare costruita nel XVIII secolo: alle 12.00 in punto (ora solare) il raggio 
                che filtra dal foro nello scudo appeso alle arcate indica la data e il segno zodiacale.
            </p>
            <p>
                In Piazza Vecchia vi è inoltre il Campanone, come viene chiamata dai bergamaschi la <b>Torre Civica</b>, che alle 22 di ogni sera, con i suoi 100 rintocchi, annuncia la chiusura delle porte di accesso a Bergamo Alta. 
            </p>
        </div>
        <div className='margin mb-4'>
            <h3 className='color-subtitle text-center'>Mappa</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1132.7963308201763!2d9.66161887624041!3d45.70383352635768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781511553c59769%3A0x3235878ea2c13498!2sPiazza%20Vecchia%2C%2024129%20Bergamo%20BG!5e1!3m2!1sit!2sit!4v1712670937401!5m2!1sit!2sit"
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
