import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Museo_dell_Automobile(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='museo_nazionale_automobile' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo Nazionale dell'Automobile</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Riaperto nel marzo 2011 dopo una radicale trasformazione dell’allestimento interno e del percorso espositivo, il Museo dell’automobile di Torino documenta l’evoluzione automobilistica dagli albori a oggi. Al Mauto le vetture sono originali e alcune esemplari inestimabili (le prime Fiat, la Rolls Royce Silver Ghost, le Ferrari da Formula Uno). 
                    Il percorso espositivo nel Museo nazionale dell’automobile di Torino è un viaggio non soltanto nell’ingegneria che ha portato la città a diventare baluardo della produzione automobilistica, ma anche nell’evoluzione del costume italiano, al quale il Mauto Torino è strettamente legato.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.432088471965!2d7.671444112209357!3d45.03188586636032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478812ba8eef5987%3A0xcfc6e9696ae6132!2sMuseo%20Nazionale%20dell&#39;Automobile%20-%20Torino!5e1!3m2!1sit!2sit!4v1712589752518!5m2!1sit!2sit"
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
