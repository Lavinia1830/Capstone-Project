import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Accademia_Carrara(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='accademia_carrara' style={{ position: 'relative' }}>
            <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Accademia Carrara</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visite</p>
        </div>
        <div className="margin mt-3">
            <p>
                L’<strong>Accademia Carrara di Bergamo</strong> è un museo con un’identità specifica e per certi versi unica, strettamente legata alle sue origini e alla sua storia. A differenza di molti musei italiani, la Carrara è il risultato dell’ambizioso progetto di Giacomo Carrara (1714-1796) di promuovere la nascita di un istituto 
                culturale che unisse diletto e istruzione, Pinacoteca e Scuola di pittura. Il successo di questa idea è testimoniato dalla fitta serie di grandi e piccole donazioni, effettuate in oltre due secoli di storia da privati e da istituzioni che, insieme a pochi acquisti mirati, si sono aggiunte all’originario 
                nucleo del fondatore. Oltre al Carrara, in testa al lungo elenco di donatori, spiccano le figure di Guglielmo Lochis, Giovanni Morelli, Federico Zeri e Mario Scaglia. Le loro collezioni rappresentano la spina dorsale del museo e contribuiscono a definire il carattere articolato e vario del suo patrimonio.
            </p>
            <p>
                Il rinnovato percorso di visita è organizzato in 16 sale di diversa ampiezza, per un totale di 350 opere esposte tra dipinti, sculture, medaglie e placchette. Il visitatore ho perciò l’opportunità di compiere un viaggio di cinque secoli attraverso la storia dell’arte italiana, dal Rinascimento all’Ottocento, 
                con capolavori di Pisanello, Mantegna, Botticelli, Raffaello, Tiziano, Lotto, Moroni, Hayez e Pellizza da Volpedo.
            </p>
        </div>
        <div className='margin mb-4'>
            <h3 className='color-subtitle text-center'>Mappa</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1386.59367855499!2d9.674869794243167!3d45.70422358111048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478151229773bf35%3A0xdb95161224fc45b9!2sAccademia%20Carrara!5e1!3m2!1sit!2sit!4v1712673345943!5m2!1sit!2sit"
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
