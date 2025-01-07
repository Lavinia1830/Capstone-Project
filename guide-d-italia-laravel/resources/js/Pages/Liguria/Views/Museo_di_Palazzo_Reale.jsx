import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Museo_di_Palazzo_Reale(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='museo_palazzo_reale' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo di Palazzo Reale</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>La celebrazione nobile dell’arte Barocca in tutta la sua magnificenza</h2>
                <p>
                    Il <strong>Museo di Palazzo Reale</strong> è tra i più importanti edifici storici di Genova, iscritto alla lista dei <b>Rolli</b> è <b>Patrimonio UNESCO</b> e accoglie ogni anno circa 300.000 visitatori.
                </p>
                <p>
                    Parte di un complesso architettonico Sei-Settecentesco in stile barocco, conserva una grandissima collezione di dipinti, affreschi, stucchi, sculture e arredi reali. Tante e tutte diverse le sale del palazzo che, con le loro decorazioni, sono una altissima celebrazione 
                    di arte e magnificenza.
                </p>
                <p>
                    La <b>Galleria degli Specchi</b>, realizzata da Domenico Parodi, oggi è il simbolo più rappresentativo di questo luogo in cui pittura, scultura e architettura si fondono, dando vita ad uno spazio unico e senza tempo. Oltre alle sue sale reali, fanno parte di questa residenza 
                    nobiliare l’<b>Appartamento dei Principi Ereditari</b>, <b>il Teatro Falcone</b>, oggi dedicato ad esposizioni temporanee e il <b>Giardino Pensile</b> con la sua straordinaria pavimentazione.
                </p>
                <p>
                    Chi visita il <b>Museo di Palazzo Reale</b> non può perdere la visita alla Galleria Nazionale di <b>Palazzo Spinola</b>, oggi patrimonio UNESCO e testimonianza della vita dell’aristocrazia genovese tra Seicento e Settecento.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.4348799570766!2d8.923933451572603!3d44.41496274596364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d343e2f4dcfb31%3A0xcc516776a4a7c766!2sMusei%20Nazionali%20di%20Genova%20-%20Palazzo%20Reale!5e1!3m2!1sit!2sit!4v1712739377168!5m2!1sit!2sit"
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
