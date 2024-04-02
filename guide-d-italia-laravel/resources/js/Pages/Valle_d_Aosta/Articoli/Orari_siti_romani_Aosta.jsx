import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import CercaComponent from '@/Components/CercaComponent';
import Footer from '@/Components/Footer';
import Orari_costi_siti_archeologici from '../../../../assets/Valle_d_Aosta/Orari_costi_siti_archeologici_Valle_d_Aosta.jpg';
import { Link } from '@inertiajs/react';
import { Image } from 'react-bootstrap';







export default function Orari_siti_romani_Aosta(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      
    >
        <main className='row'>
            <div className='col-lg-8'>
                <div className='margin'>
                    <img src={Orari_costi_siti_archeologici} alt="Ponte Romano d'Aosta" className='mx-auto my-4' style={{width: 'auto', height: 'auto'}}/>
                    <h1 className='color-title text-center mb-3'>Orari e Tariffe Siti archeologici Valle d'Aosta</h1>
                    <hr className='w-25 border-3'/>
                </div>
                <div className='margin'>
                    <h2 className='color-subtitle'>Tariffe e orari siti archologici Valle d'Aosta</h2>
                    <span>Contenuti</span>
                    <ul className='lista'>
                        <li>
                            <Link href='#First_Point_Header' className='text-decoration-none color_link'>1 Siti archeologici di Aosta città</Link>
                        </li>
                        <li>
                            <Link href='#Second_Point_Header' className='text-decoration-none color_link'>2 Museo Archeologico Regionale</Link>
                        </li>
                        <li>
                            <Link href='#Third_Point_Header' className='text-decoration-none color_link'>3 Area Magalitica di Sant Martin de Coeléans</Link>
                        </li>
                        <li>
                            <Link href='#Fourth_Point_Header' className='text-decoration-none color_link'>4 Ponte acquedotto di Pondel</Link>
                        </li>
                    </ul>
                </div>
                <div className="margin">
                    <h2 className="color-subtitle" id='First_Point_Header'>Siti archeologici di Aosta città</h2>
                    <ul>
                        <li>
                            <Link href='/luoghi_visite/teatro_romano_di_aosta' className='text-decoration-none color_link fst-italic'>Teatro romano</Link>
                        </li>
                        <li>
                            <Link href='/luoghi_visite/criptoportico_forense' className='text-decoration-none color_link fst-italic'>Criptoportico forense</Link>
                        </li>
                        <li>
                            <Link href='/luoghi_visite/basilica_paleocristiana_di_san_lorenzo' className='text-decoration-none color_link fst-italic'>Basilicata paleocristiana di San Lorenzo</Link>
                        </li>
                    </ul>
                    <p>
                        Oraio estivo valido da aprile a settembre - aperti tutti i giorni dalle 9 alle 19.<br/>
                        Orari invernale valido tutti i giorni da ottobre a marzo dalle 10 alle 13 e dalle 14 alle 17.
                    </p>
                    <p>
                        Tutti i siti sono chiusi il 25 dicembre ed il 1º gennaio.
                    </p>
                    <p>
                        Biglietto unico, valido sei mesi dalla data di emissione, per un ingresso in ognuno dei seguenti siti: Teatro romano, Criptoportico forense, Chiesa paleocristiana di San Lorenzo e Museo Archeologico Regionale.
                    </p>
                    <p>
                        Intero: € 10,00<br/>
                        Ridotto: € 8,00 (coloro accompagnati da guida turistica; comitive di almeno 25 persone paganti, studenti universatari, convenzioni specifiche) <br/>
                        Ridotto giovani: € 3,00 per tutti i giovani dai 19 ai 25 anni compresi.<br/>
                        Gratuito: bambini e ragazzi fino ai 18 anni compiuti, sclaresche, soggetti portatori di handicap in possesso della certificazione di cui alla legge 104/92 e loro accompagnatori, insegnanti e accompagnatori 
                        di scolaresche, abbonati circolo Musei Piemonte/Lombardia (muniti di card in corso di validità).
                    </p>
                </div>
                <div className="margin">
                    <h2 className="color-subtitle" id='Second_Point_Header'>Museo Archeologico Regionale</h2>
                    <p>
                        Orario estivo valido da aprile a settembre - aperti tutti i giorni dalle 9 alle 19. <br/>
                        Orario invernale valido tutti i giorni da ottobre a marzo - dalle 10 alle 13 e dalle 14 alle 18.<br/>
                        Chiuso il 25 dicembre e il 1º gennaio.
                    </p>
                    <p>
                        Biglietto unico, valido sei mesi dalla data di emissione, per un ingresso in ognuno dei seguenti siti: Teatro romano, Criptoportico forense, Chiesa paleocristiana di San Lorenzo e Museo Archeologico Regionale.
                    </p>
                    <p>
                        Intero: € 10,00 <br/>
                        Ridotto: € 8,00 (coloro accompagnati da guida turistica; comitive di almeno 25 persone paganti, studenti universitari, convenzioni specifiche).<br/>
                        Ridotto giovani: € 3,00 per tutti i giovani dai 19 ai 25 anni compresi.<br/>
                        Gratuito: bambini e ragazzi fino ai 18 anni compiuti, scolaresche, soggetti portatori di handicap in possesso della certificazione di cui alla legge 104/92 e loro accompagnatori, insegnanti e accompagnatori di 
                        scolaresche, abbonati circuito Musei Piemonte/Lombardia (muniti di card in corso di validità).
                    </p>
                </div>
                <div className="margin">
                    <h2 className="color-subtitle" id='Third_Point_Header'>Area megalitica di Saint Martin de Corléans</h2>
                    <p>
                        Orario estivo valido da aprile a settembre – dalle 9 alle 19. Chiuso il lunedi (eccetto luglio, agosto e festivi).<br/>
                        Orario invernale valido da ottobre a marzo – dalle 10 alle 13 e dalle 14 alle 18. Chiuso il lunedi (eccetto festivi).<br/>
                        Chiuso il 25 dicembre ed il 1° gennaio.
                    </p>
                    <p>
                        Intero: € 7,00.<br/>
                        Ridotto: € 5,00 (coloro accompagnati da guida turistica; comitive di almeno 25 persone paganti, studenti universitari, convenzioni specifiche).<br/>
                        Ridotto giovani: € 3,00 per tutti i giovani dai 19 ai 25 anni compresi.<br/>
                        Gratuito: bambini e ragazzi fino ai 18 anni compiuti, scolaresche, soggetti portatori di handicap in possesso della certificazione di cui alla legge 104/92 e loro accompagnatori, insegnanti e accompagnatori di 
                        scolaresche, abbonati circuito Musei Piemonte/Lombardia (muniti di card in corso di validità).
                    </p>
                </div>
                <div className="margin">
                    <h2 className="color-subtitle" id='Fourth_Point_Header'>Ponte acquedotto di Pondel</h2>
                    <p>
                        Dal 1° al 31 ottobre solo sabato e domenica dalle 10.00 alle 13.00 e dalle 14.00 alle 17.00 da aprile a settembre – dalle 9 alle 19.<br/>
                        Chiuso dal 01 novembre al 31 marzo.
                    </p>
                    <p>
                        Intero: € 5,00.<br/>
                        Ridotto: € 3,00 (coloro accompagnati da guida turistica; comitive di almeno 25 persone paganti, studenti universitari, convenzioni specifiche).<br/>
                        Ridotto giovani: € 3,00 per tutti i giovani dai 19 ai 25 anni compresi.<br/>
                        Gratuito: bambini e ragazzi fino ai 18 anni compiuti, scolaresche, soggetti portatori di handicap in possesso della certificazione di cui alla legge 104/92 e loro accompagnatori, insegnanti e accompagnatori di 
                        scolaresche, abbonati circuito Musei Piemonte/Lombardia (muniti di card in corso di validità).<br/>
                        <b>L'acqusto del boglietto è necessatio soltanto nel caso in cui si voglia accedere al passaggio coperto.</b>
                    </p>
                </div>
                <div className="margin">
                    <h3 className="color-subtitle">N.B.</h3>
                    <p>
                        Gli orari e le tariffe indicati sono quelli standard. Questa pagina non è costantemente aggiornata, pertanto per tariffe e orari aggiornati si rimanda al <a href='https://valledaostaheritage.com/' className='text-decoration-none color_link'>sito ufficiale della Regione Autonoma Valle d’Aosta</a>.
                    </p>
                    <p>
                        Il criptoportico è chiuso per lavori dal 2 ottobre al 30 novembre 2023<br/>
                        Il teatro romano è chiuso per lavori dal 7 novembre 2023 a maggio 2025
                    </p>
                </div>
                <div className="margin">
                    <p>
                        <b>Contattami per prenotare la vostra visita giudata della <Link href='/visite/aosta_romana_e_medievale' className='text-decoration-none color_link'>città di Aosta</Link></b>
                    </p>
                </div>
            </div>
            <CercaComponent/>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
