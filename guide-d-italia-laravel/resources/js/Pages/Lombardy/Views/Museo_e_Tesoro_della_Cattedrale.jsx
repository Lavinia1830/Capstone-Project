import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Museo_e_Tesoro_della_Cattedrale(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='museo_e_tesoro_della_cattedrale' style={{ position: 'relative' }}>
            <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Museo e Tesoro della Cattedrale</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visite</p>
        </div>
        <div className="margin mt-3">
            <p>
                Il <strong>Museo e Tesoro della Cattedrale</strong>, inaugurato nel 2012, ha sede nei sotterranei della Cattedrale di Sant’Alessandro dove, durante i lavori di sistemazione degli impianti del 2004, sono venute alla luce alcune testimonianze archeologiche della storia di Bergamo dal X 
                secolo a.C. al XVI secolo: tracce di insediamenti preistorici, resti di domus romane, testimonianze della chiesa paleocristiana e della cattedrale romanica.
            </p>
            <p>
                Con questo Museo la Diocesi di Bergamo vuole far conoscere la storia della propria chiesa, illustrare le vicende costruttive che hanno coinvolto questo luogo e, attraverso l’esposizione di preziosi oggetti di arte e di liturgia, accostare il visitatore all’atmosfera di sacralità e di bellezza 
                che ha caratterizzato la vita dell’antica Cattedrale di San Vincenzo.
            </p>
            <p>
                Grazie a una complessa campagna di scavi (2004 - 2012) nel sottosuolo del Duomo sono emerse le tracce di un sito romano, della Cattedrale paleocristiana di San Vincenzo e della successiva Cattedrale romanica, avvolte nella ricostruzione rinascimentale dell’architetto Filarete.
            </p>
            <p>
                La pianta dei rinvenimenti dello scavo mette bene in evidenza le fasi evolutive di questo luogo, già abitato a partire dal X secolo a.C..
            </p>
            <p>
                Dal I secolo a.C. al IV d.C. l’area era occupata da un quartiere di impianto romano, adiacente al foro, attraversato da una strada commerciale sulla quale si affacciavano botteghe, laboratori artigiani e domus residenziali dotate di ricchi apparati architettonici e decorativi.
            </p>
            <p>
                Nel V secolo sorse una Cattedrale dedicata a San Vincenzo.
            </p>
            <p>
                Le dimensioni della basilica erano imponenti: essa misurava non meno di 45 metri di lunghezza per 24 metri di larghezza e costituiva il più grande edifi cio sacro della città.
            </p>
            <p>
                La linea dei muri perimetrali di tale struttura è stata mantenuta nelle successive fasi edilizie e corrisponde (escluso il lato orientale del presbiterio) al perimetro della chiesa attuale.
            </p>
            <p>
                Il <strong>Museo della Cattedrale</strong> racconta l’articolata storia di questa evoluzione, tra reperti archeologici e manufatti artistici.
            </p>
        </div>
        <div className='margin mb-4'>
            <h3 className='color-subtitle text-center'>Mappa</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1905.1280682082183!2d9.662017683308004!3d45.70385346274903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478151154eb96817%3A0x611c8983456fb9d3!2sMuseo%20della%20Cattedrale%20di%20Bergamo!5e1!3m2!1sit!2sit!4v1712673112131!5m2!1sit!2sit"
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
