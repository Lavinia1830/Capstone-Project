import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Chiesa_di_Gesu(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='chiesa_di_gesu' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Chiesa di Gesù</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    La <strong>chiesa del Gesù</strong> è un’altissima espressione del barocco internazionale a Genova, con opere di Rubens, Vouet e Carlone.
                </p>
                <p>
                    Nello sfarzo di ori, stucchi e marmi policromi, negli arditi scorci degli affreschi dei fratelli <b>Giovanni</b> e <b>Giovan Battista Carlone</b> l'interno della chiesa rappresenta un prestigioso esempio di barocco genovese, quando le più importanti famiglie aristocratiche della città 
                    chiedono ai più celebri artisti di decorare le cappelle di famiglia.
                </p>
                <p>
                    Il luogo sacro racchiude <b>capolavori assoluti</b>, come la <i>Circoncisione</i> e il <i>Miracolo di Sant'Ignazio</i> di <b>Peter Paul Rubens</b> e l’<i>Assunzione</i> di <b>Guido Reni</b>.
                </p>
                <p>
                    La basilica assume le attuali forme e il nome di <i>Chiesa del Gesù</i> dopo la grande ricostruzione del XVI secolo ad opera della Compagnia di Gesù, su progetto di <b>Giuseppe Valeriano</b>, pittore, architetto e padre gesuita. L’edificio sacro è intitolato ai <i>Santi Ambrogio e Andrea</i>, 
                    poiché la chiesa originaria del VI sec. era dedicata ad <b>Ambrogio</b> vescovo di Milano, rifugiatosi a Genova in fuga dal sacco longobardo di re Alboino.
                </p>
                <p>
                    Da non perdere anche dipinti e affreschi di molti importanti pittori della <b>scuola genovese</b> e non solo. Tra gli altri: Domenico Piola, Domenico Fiasella, Valerio e Bernardo Castello, Giovanni Andrea e Lorenzo De Ferrari, Domenico Scorticone, Andrea Pozzo e Simon Vouet.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2756.0873313572342!2d8.931360033300528!3d44.40646894378451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d343151b771b79%3A0x3f8e5698a5b42a51!2sChiesa%20dei%20Santi%20Ambrogio%20e%20Andrea!5e1!3m2!1sit!2sit!4v1712759929631!5m2!1sit!2sit"
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
