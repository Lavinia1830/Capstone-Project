import React from 'react';
import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import Affreschi_ottoniani_img from '../../../../assets/Valle_d_Aosta/Affreschi_ottoniani_Aosta_Valle_d_Aosta.jpg';

export default function Affreschi_ottoniani(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Affreschi Ottoniani</h2>}
    >
        <main>
            <div className='margin'>
                <img src={Affreschi_ottoniani_img} alt="Ponte Romano d'Aosta" className='mx-auto my-4' style={{width: 'auto', height: 'auto'}} />
                <h1 className='color-title text-center mb-3'>Affreschi Ottoniani</h1>
                <hr className='w-25 border-3'/>
            </div>
            <div className='margin'>
                <h2 className='color-subtitle'>Informazioni sugli Affreschi Ottoniani</h2>
                <p>
                    Nella <Link href='/luoghi_visite/collegiata_di_sant_orso' className='text-decoration-none color_link'>Chiesa di Sant'Orso</Link> e nella <Link href='/luoghi_visite/cattedrale_di_santa_maria_assunta' className='text-decoration-none color_link'>Cattedrale</Link> di
                    Aosta, sopra le volte in muratura risalenti al XV secolo si trovano gli <b>affreschi ottoniani</b>, imporanti testimonianze dell'arte dell'XI secolo ed attributi alla committanza del Vescovo Anselmo.
                </p>
                <p>
                    Negli <b>affreschi ottoniani della Cattedrale</b> si riconoscono sulla parte nord le storie di Sant'Eustachio, tra cui la conversione, il viaggio per mare ed il rapimento dei figli. Nel registro superiore vi sono delle lunette con raffigurati gli Antenati di 
                    Cristo alternati ad elementi decorativi. Sulla parete nord si riconoscono le Storie di Mosè, in particolare le Piaghe d'Egitto.
                </p>
                <p>
                    Negli <b>affreschi ottoniani della chiesa di Sant'Orso</b> si riconoscono le storie della vita di Cristo tra cui il Miracolo della nozze di Cana e la tempesta sedata e scene di martirio di vari santi. Nel registro superiore vi sono degli elementi decorativi e 
                    dagli animali.
                </p>
                <p>
                    Scopri la <b>visita guidata</b> <Link href='/visite/aosta_romana_e_medievale' className='text-decoration-none color_link'>Aosta romana e medievale</Link>
                </p>
            </div>
            <div className="margin">
                <h3 className="color-subtitle">Orari e tariffe per gli affreschi del sottotetto in Cattedrale</h3>
                <p>
                    Gli affreschi in Cattedrale sono visibili solo su richiesta ed è prevsto il pagamento di un biglietto di ingresso avventualmente in abbinato col <Link to='/visite/museo_del_tesoro' className='text-decoration-none color_link'>Museo del Tesoro</Link> <br/>
                    Museo: € 4,00 <br/>
                    Affreschi: € 5,00 <br/>
                    Ingresso museo + affreschi: € 6,00 <br/>
                    Ingresso gratuito per bambini e ragazzi fino ai 18 anni; per studenti fino ai 25 anni.
                </p>
            </div>
            <div className="margin">
                <h3 className="color-subtitle">Orari e tariffe per gli affreschi del sottotetto di Sant'Orso</h3>
                <p>
                    Gli affreschi a Sant'Orso sono visibili solo su richiesta ed è previsto il pagamento di un biglietto di ingresso in abbinamento col chiostro tomanico e/o alla cappella del Priorato. <br/>
                    Di seguito le tariffe agevolate valide per le persone accompagnate da guida turistica della Valle d'Aosta: <br/>
                    Chiostro + affreschi o cappella: € 3,50 <br/>
                    Chiostro + affreschi + cappella: € 5,00 <br/>
                </p>
                <p>
                    Ingresso gratuito per bambini di 6 anni, soggetti portatori di handicap in possesso della certificazione di cui alla legge 104/92 e loro accompagnatori; per la scolaresche gli alunni pagnao e i docenti honno la gratuità.
                </p>
            </div>
            <div className='margin mb-4'>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d696.1480145513158!2d7.324509769665577!3d45.73927533418247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920ae22f65dd3%3A0x1ee8d6a9addb8c6d!2sChiesa%20Collegiata%20dei%20Santi%20Pietro%20e%20Orso!5e0!3m2!1sit!2sus!4v1711548058053!5m2!1sit!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className='mx-auto mappa'
                >
                </iframe>
            </div>
            <div className='margin'>
                <h3 className='color-subtitle'>Articoli</h3>
                <ul className='lista'>
                    <li>
                        <Link to='/cosa_vedere_ad_aosta_in_un_giorno' className='text-decoration-none color_link'>Cosa vedere ad Aosta in un giorno</Link>
                    </li>
                </ul>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
