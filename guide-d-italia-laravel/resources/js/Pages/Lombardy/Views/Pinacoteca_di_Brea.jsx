import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Pinacoteca_di_Brea(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='castello_sforzesco' style={{ position: 'relative' }}>
          <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello Sforzesco</h1>
          <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
          <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visite</p>
        </div>
        <div className="margin mt-3">
          <p>
            Il Museo di Brera è il luogo perfetto per comprendere l’ingegno del Rinascimento. Visitare la Pinacoteca di Milano è un’esperienza da fare nella città che non dorme mai e nasconde, tra i suoi musei e gli edifici storici, i suoi tesori più grandi.
          </p>
          <h2 className='color-subtitle'>Pinacoteca di Brera, cosa vedere</h2>
          <p>
            Dopo aver passeggiato tra quadri medievali usciti da anonimi laboratori, vi ritroverete tra vividi dipinti realizzati da pittori conosciuti e potrete godere la bellezza delle opere rivoluzionarie di Raffaello, Mantegna e Piero della Francesca e le 
            raffinatezze di Tiziano, Caravaggio e Tintoretto. Che sono le eccellenze più amate del Museo Brera, tra i simboli culturali di Milano più ammirati in Italia e nel mondo.
          </p>
        </div>
        <div className='margin mb-4'>
          <h3 className='color-subtitle text-center'>Mappa</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d827.8986482254343!2d9.1879393!3d45.4715181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786ee11587e4e1f%3A0x1b367a8e2cb13736!2sPinacoteca%20di%20Brera!5e1!3m2!1sit!2sit!4v1712655431133!5m2!1sit!2sit"
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
