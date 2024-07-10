import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Museo_di_Marengo(props) {
    return (
      <>
        <Head title="Museo di Marengo"/>
        <AuthenticatedLayout
          auth={props.auth}
          errors={props.errors}
        >
          <main>
            <div className='museo_di_marengo' style={{ position: 'relative' }}>
              <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Museo di Marengo</h1>
              <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
              <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
              <p>
                Il <strong>Museo di Marengo</strong>, situato a <b>Spinetta Marengo</b>, una frazione di <b>Alessandria</b>, è dedicato alla <b>Battaglia di Marengo</b> del <b>14 
                giugno 1800</b>, in cui <b>Napoleone Bonaparte</b> sconfisse l'esercito austriaco, consolidando il suo potere in <b>Italia</b>. Questo evento segnò una tappa 
                cruciale nelle <b>guerre napoleoniche</b> e nella storia europea.
              </p>
              <p>
                Il museo è stato inaugurato nel <b>2009</b> ed è ospitato in una villa storica, conosciuta come <b>Villa Delavo</b>, costruita tra il <b>1847</b> e il <b>1849</b>. 
                L'area museale si estende su una superficie di circa <b>2000 metri quadrati</b> e include una vasta collezione di <b>armi</b>, <b>uniformi</b>, <b>documenti 
                storici</b>, <b>dipinti</b>, <b>sculture</b>, e <b>reperti</b> dell'epoca napoleonica.
              </p>
              <p>
                La collezione del museo offre una rappresentazione dettagliata della battaglia, con <b>diorami</b>, <b>mappe</b> e <b>modelli in scala</b> che illustrano le fasi 
                cruciali dello scontro. Sono esposti anche numerosi <b>oggetti personali</b> appartenuti a Napoleone e ai suoi generali, fornendo un quadro vivido della vita 
                militare e delle strategie dell'epoca.
              </p>
              <p>
                Il <strong>Museo di Marengo</strong> è un'importante meta turistica e un centro di <b>ricerca storica</b>, che organizza <b>mostre temporanee</b>, <b>conferenze</b> e <b>attività 
                educative</b> per coinvolgere il pubblico e approfondire la conoscenza della storia napoleonica. Inoltre, la <b>battaglia di Marengo</b> è commemorata ogni anno 
                con una <b>rievocazione storica</b>, attirando appassionati e studiosi da tutto il mondo.
              </p>
              <p>
                In sintesi, il Museo di Marengo non solo celebra una delle vittorie più celebri di Napoleone, ma svolge anche un ruolo fondamentale nella conservazione e nella 
                divulgazione del <b>patrimonio storico</b> legato a uno dei periodi più tumultuosi e affascinanti della storia europea.
              </p>
            </div>
            <div className='margin mb-4'>
              <h3 className='color-subtitle text-center'>Mappa</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.746178411455!2d8.667903613214111!3d44.89482679103113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787716286ddbdc7%3A0x69d7308a6dc8c5d3!2sMuseo%20di%20Marengo!5e1!3m2!1sit!2sit!4v1718799454523!5m2!1sit!2sit"
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
      </>
    )
}
