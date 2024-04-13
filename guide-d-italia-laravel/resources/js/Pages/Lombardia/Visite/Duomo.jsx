import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Duomo(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='duomo' style={{ position: 'relative' }}>
          <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Duomo</h1>
          <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
          <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visite</p>
        </div>
        <div className="margin mt-3">
          <p>
            Non si può dire di aver assaggiato lo spirito meneghino senza una visita al Duomo di Milano. La Cattedrale di Milano ha anche un altro record, oltre a quello di spiegare la milanesità a chi arriva da fuori città: è la quarta chiesa più grande del mondo. Visitare il Duomo di Milano significa perdersi in una 
            meraviglia tardo-gotica in cui si dispiegano una selva di guglie e statue, pinnacoli e pilastri e colonne, tutti tessuti insieme da una rete di volanti contrafforti. Gian Galeazzo Visconti aveva grandi progetti per la città nel 1387, e fu un entusiasta sostenitore del progetto di un nuovo e imponente Duomo. 
            La vista dalla cima della chiesa è la migliore della città.
          </p>
          <h2 className='color-subtitle'>Informazioni sul Duomo di Milano</h2>
          <p>
            La Cattedrale con la sua Madonnina che guarda la città è un luogo di culto, pertanto è sempre aperta per le celebrazioni liturgiche. Si può visitare anche per scoprire i suoi interni da un punto di vista architettonico con visite guidate e accesso esclusivo nei suoi punti più incredibili.
          </p>
        </div>
        <div className='margin mb-4'>
          <h3 className='color-subtitle text-center'>Mappa</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.0610580378006!2d9.188701926215723!3d45.463578733600045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6aec34636a1%3A0xab7f4e27101a2e13!2sDuomo%20di%20Milano!5e1!3m2!1sit!2sit!4v1712653619052!5m2!1sit!2sit"
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
