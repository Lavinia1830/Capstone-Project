import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';


export default function Novara(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='novara' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Quadrilatero Romano</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Affogata tra le risaie, e con il nucleo antico circondato da palazzoni ricevuti in eredità dagli sconsiderati anni ’60, visitare Novara può essere, in prima battuta, un’esperienza un po’ malinconica. Questo perché sembra soffrire di un profondo disturbo della personalità, a causa del suo essere città di pianura in una 
                    regione di montagna e per il fatto di considerarsi in Lombardia nonostante la geografia politica si ostini a darle torto. Messe da parte queste contraddizioni, superate le architetture squadrate e vagando con il mento all’insù tra le silenziose strade del centro, la mappa di Novara appare d’un tratto come un quadro sorprendente e indaffarato. In cui la proverbiale concretezza lombarda sembra fondersi con quello spirito raffinato e vagamente trasognato dei piemontesi, creando un amalgama speciale che ha pochi rivali.
                </p>
                <h2 className='color-subtitle'>Cosa vedere a Novara tra palazzi della fede e storici</h2>
                <p>
                    I monumenti di Novara più importanti e amati sono il Duomo, il Battistero e la Cupola di Antonelli: tra bellezze architettoniche a cui è davvero impossibile resistere. Tra i palazzi storici quello dei fasti è senz’altro Palazzo Tornielli Bellini, oggi sede di una Banca ma visitabile in alcuni giorni dell’anno.
                </p>
                
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
