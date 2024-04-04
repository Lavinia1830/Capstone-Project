import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Castello_Gamba(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      
    >
        <main>
            <div className='castello_gamba_img' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello Gamba</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Castelli della Valle d'Aosta</p>
            </div>
            <div className='margin mt-3'>
                <h2 className='color_subtitle'>Infromazioni sul Castello Gamba</h2>
                <p>
                    Il <strong>Castello Gamba</strong> fu costruito all'inizio del XX secolo per volere di Carlo Maurizio Gmaba per la moglie Angélique d'Entrèves affinché l'amata sposa poteaae trascorrere le giornate accanto alla sua famiglia di origine che 
                    risiedeva al <b>castello di Chatillon</b>.
                </p>
                <p>
                    L'<b>architetto Saroldi</b> realizzò una dimora circonadata da un ampio parco all'inglese e dotata di tutti i confrot, tra cui un ascensore. <br/>
                    Dopo la morte dell'adorata figlia Irene, anche Angélique si spense a soli tratasette anni ma solo dopo la morte di Maurizio Gamba il castello passò alla famiglia Passerin d'Entrèves che nel 1982 vendette la dimora alla Regione Antonoma Valle
                    d'Aosta. <br/>
                    <b>Il parco all'inglese</b> che circonda il castello si svilippa su una superfice di oltre 50.000 metri quadrati e custodisce al suo interno tre <b>alberi monumentali</b>: una Sequoia gigante, un Cipresso Calvo e un Spino di Giuda. <br/>
                    Dopo un attento restauto il castello oggi aspita una raccolta di 150 opere d'arte, tra dipinti e sculture, dislocate lungo le 13 sale del meniero.
                </p>
                <p>
                    Durante la <b>visita guidata al castello Gamba</b> di Chatillon si percorreranno le sale del castello dove è allestita la <b>Pinacoteca</b>, ovvero la <Link to='/visite/castello_baron_gamba' 
                    className='text-decoration-none color_link'>collezione di arte moderna e contemporanea</Link>, di proprietà regionale, che raccoglie e le opere d'arte di alcuni dei maggiori artisti del XIX e XX secolo tra cui Casorati, Carrà, Guttuso, Giò 
                    Pomodopo, Martini, Marzù...
                </p>
            </div>
            <div className='margin mt-3'>
                <h2 className='color_subtitle'>Visita guidata al Castello Gamba</h2>
                <p>
                    Il mio servizio di guida si rivolge solo ai gruppi o a acoloro che vogliono una visita privata alla pinacoteca.
                </p>
                <p>
                    Il castello è a visita libera; singoli e famiglie possono prenotare online l'ingresso <a href='https://www.midaticket.it/eventi/castelli-della-valle-daosta/' className='text-decoration-none color_link'>link</a> della Regione autonoma Valle d'Aosta.
                </p>
                <p>
                    <b>I gruppi</b> e tutti coloro che desiderano fruire di una visita in forma privata <b>possono contattarmi cliccando il bottone "prenota ora"</b>
                </p>
                <p>
                    Scopri tutte le <b>visite guidate</b> legate al <Link href='/castelli_valle_d_aosta' className='text-decoration-none color_link fw-bold'>castelli della Valle d'Aosta</Link>
                </p>
            </div>
            <div className='margin mt-3'>
                <h3 className='color_subtitle'>Biglietti</h3>
                <p>
                    Intere: € 6,00 <br/>
                    Ridotto: € 4,00 (coloro accompagnati da una guida turistica; comitive di almeno 25 persone paganti, cnvenzioni specifiche) <br/>
                    Ridotto giovani: € 3,00 per tutti i giovani dai 19 ai 25 anni compresi <br/>
                    Gratuito: bambini e ragazzi fino ai 18 anni compiuti, scolaresche, soggetti portatori di handicap in possesso della certificazione di cui alla legge 104/92 e loro accmpagnatori, insegnati e accompagnatori di scolaresche, addetti cicuito Musei 
                    Piemonte/Lombardia (muniti di card in corso di validità).
                </p>
            </div>
            <div className='margin mt-3'>
                <h3 className='color_subtitle'>Orari</h3>
                <p>
                    Da ottobre a marzo: dalle 10:00 alle 17:00<br/>
                    Da aprile a settembre: dalle 9:00 alle 19:00<br/>
                </p>
                <p>
                    Chiuso il lunedì (eccetto luglio, agosto e festivi); chiuso il 25 dicembre e il 1º gennaio
                </p>
                <p>
                    Il Castello è chiuso dal 4 al 18 novembre 2024
                </p>
                <p>
                    Orari aggiornati <a href='https://www.castellogamba.vda.it/' className='text-decoration-none color_link'>Qui</a>
                </p>
            </div>
            <div className='margin mb-4'>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2784.22739600508!2d7.6020140000000005!3d45.746587!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788c422103f4b41%3A0x9bf607447750c979!2sCastello%20Gamba!5e0!3m2!1sit!2sus!4v1712135901832!5m2!1sit!2sus"
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
                        <Link href='/i_castelli_della_valle_d_asota_piu_belli_da_visitare' className='text-decoration-none color_link'>I castelli della Valle d'Aosta più belli da visitare</Link>
                    </li>
                    <li>
                        <Link href='/castello_di_ussel' className='text-decoration-none color_link'>Castello di Ussel e l’inventore della penna Bic</Link>
                    </li>
                    <li>
                        <Link href='/chatillon_cosa_vedere' className='text-decoration-none color_link'>Chatillon cosa vedere nel paese dei castelli</Link>
                    </li>
                </ul>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
