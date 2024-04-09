import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function MAO(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='mao' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>MAO - Museo di Arte Orientale</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Il Museo d’Arte Orientale, Torino: la destinazione di chi ama la cultura asiatica e vuole scoprire, in un viaggio stimolante tra le sale della struttura, come è nata e come si è evoluta. All’interno di Palazzo Mazzonis il percorso espositivo si articola secondo cinque aree culturali ben definite: l’area dell’Asia meridionale, la grande area della civiltà cinese, l’area himalayana e centro asiatica, 
                    l’area del Giappone e infine l’area islamica. In questo museo, l’arte orientale a Torino esplode in mostre permanenti o temporanee che analizzano anche gli aspetti più pop della incredibile stratificazione culturale dei paesi asiatici. Uno dei must tra i musei di Torino, anche per la particolare cura degli allestimenti.
                </p>
                <p>
                    SMAO Torino, prezzi: il biglietto intero costa 10 euro, quello ridotto 8.
                </p>
                <p>
                    Museo MAO Torino, informazioni: da mercoledì e giovedì alle 11 alle 19; Venerdì dalle 11 alle 20.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1667.4275636584741!2d7.678735975710432!3d45.07428661607181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d7462cd2481%3A0x894c230a61204c8d!2sMAO%20Museo%20di%20Arte%20Orientale!5e1!3m2!1sit!2sit!4v1712588183147!5m2!1sit!2sit"
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
