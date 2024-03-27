import React from 'react';
import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import Criptoportico_Forense_img from '../../../../assets/Valle_d_Aosta/Criptoportico_Aosta_Valle_d_Aosta.jpg';

export default function Criptoportico_Forense(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Criptoportico Forense</h2>}
    >
        <main>
            <div className='margin'>
                <img src={Criptoportico_Forense_img} alt="Ponte Romano d'Aosta" className='mx-auto my-4' style={{width: 'auto', height: 'auto'}} />
                <h1 className='color-title text-center mb-3'>Criptoportico Forense</h1>
                <hr className='w-25 border-3'/>
            </div>
            <div className='margin'>
                <h2 className='color-subtitle'>Informazioni sul Criptoportico Forense</h2>
                <p>
                    All'incroncio tra il Decumano e il Cardo Mssimo sorgeva il <b>foro romano</b> che era il cuore economico e culturale della città. <br/> 
                    Il foro era suddiviso in due aree: l'area sacra con i due templi a nord, e la platea forense a sud dove si affaccianano gli edifici pubblici e le botteghe.
                </p>
                <p>
                    L'area sacra del Foro era a sua volta circondata dal <b>criptoportico forense</b>, un luogo nascosto e per questo ancora più suggestivo costituito da tre 
                    bacci disposti a ferro di cavallo formati da una doppia galleria con volta a botte separat da pilastrini ad arco ribassato. <br/>
                    Il sito era illuminato da alcune finestrelle a bocca di lupo che garantivano anche l'aerazione.
                </p>
                <p>
                    Il sito gode di una temperatura costante tutto l'anno e per questo nel corso del Medioevo fu utilizzato come luogo adibito a cantine.
                </p>
                <p>
                    Scopri la <b>visita gidata</b> legata ad <Link href='/visite/aosta_romana_e_medievale' className='text-decoration-none color_link'>Aosta romana e medievale</Link>
                </p>
            </div>
            <div className="margin">
                <h2 className='color-subtitle'>Criptoportico forense Aosta - orario e prezzi</h2>
                <p>
                    Orario estivo da aprile a settembre - aperto tutti i giorni dalle 9 alle 19. <br/>
                    Orario invernale valido tutti i giorni da ottobre a marzo - dalle 10 alle 13 e dalle 14 alle 17
                </p>
                <p>
                    Chiuso il 25 dicembre ed il 1º gennaio
                </p>
                <p>
                    Orario aggiornati <a href='https://www.lovevda.it/it/banca-dati/8/architettura-romana/aosta/criptoportico-forense/1259' className='text-decoration-none color_link'>QUI</a> 
                </p>
                <p>
                    Biglietti cumulativo, valido sei mesi dalla data di emissiome, per un ingresso in ognuno dei seguenti siti: <br/>
                    Teatro romano, Criptoportico forense, Chiesa paleocristiana di San Lorenzo e Museo Archeologico Regionale
                </p>
                <p>
                    Intero: € 10,00 <br/>
                    Ridotto: € 8,00 (comitive almeno 25 persone paganti e convenzioni specifiche) <br/>
                    Ridotto giovani: € 3,00 per tutti i giovani dai 19 ai 25 anni compresi <br/>
                    Gratuito: bambini e ragazzi fino ai 18 anni compiuti, scolaresche, soggetti portatori di handicap in possesso della certeficazione di cui alla leggew 104/92 e loro 
                    accompagnatori, abbonati circuito Musei Piemonte/Lombardia (muniti di card in corso di validità).
                </p>
                <p>
                    L'accesso al criptoportico non è accessibile ai diversamente abili
                </p>
            </div>
            <div className='margin mb-4'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1392.3222942416373!2d7.317595!3d45.738222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920ae2253217f%3A0x92b91a47ac5eadd7!2sCriptoportico%20Forense!5e0!3m2!1sit!2sus!4v1711539038317!5m2!1sit!2sus"
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
