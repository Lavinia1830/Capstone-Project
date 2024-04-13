import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Mn_del_R_italiano(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='mn_del_r_italiano' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo Nazionale del Risorgimento Italiano</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Questo museo ( <a href="https://www.museorisorgimentotorino.it/">www.museorisorgimentotorino.it</a> ) all’interno di Palazzo Carignano piacerà agli appassionati di storia: fu sede del primo parlamento dell’Italia unita e possiede una vasta collezione di armi, dipinti e documenti che ricostruiscono il secolo turbolento tra il 1848 e la seconda guerra mondiale.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.1074281728327!2d7.684499989965835!3d45.06905551763594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d702759ca91%3A0xbf0fb182b3a64daa!2sMuseo%20Nazionale%20del%20Risorgimento%20Italiano!5e1!3m2!1sit!2sit!4v1712589008903!5m2!1sit!2sit"
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
