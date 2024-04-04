import React from 'react';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Chiesa_S_Lorenzo from '../../../../assets/Valle_d_Aosta/Chiesa_san_lorenzo_Valle_d_Aosta.jpg';

export default function Basilica_paleocristiana_S_Lorenzo(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Basilica Paleocristiana di San Lorenzo</h2>}
    >
      <main>
        <div className='margin'>
          <img src={Chiesa_S_Lorenzo} alt="Chiesa san Lorenzo Aosta" className='mx-auto my-4' style={{width: 'auto', height: 'auto'}}/>
          <h1 className='color-title text-center mb-3'>Basilica Paleocristiana di San Lorenzo</h1>
          <hr className='w-25 border-3'/>
        </div>
        <div className='margin'>
          <h2 className='color-subtitle'>Informazioni sulla Basilica Paleocristiana di San Lorenzo</h2>
          <p>
            Fuori dalla cinta muraria della città, dove in epoca romana sorgeva un'importante necropoli, agli inizi del V secolo fu costruita una basilica destinata a ricevere le <b>sepolture</b> dei primi aostani.
          </p>
          <p>
            L'edificio era indicato come <i>Concilium Sanctorum</i> ovvero Assemblea dei Santi, perché sorto sulle tombe dei primi martiri ed era quindi una chiesa a scopo funerario che accoglieva le tombe dei 
            vescovi o di martiri. La Basica era il luogo si sepoltura privilegiato dei primi vescovi valdostani (Grato, Agnello, Gallo) oltre ad ospitare altre tombe risalenti al V e all'VII secolo. 
          </p>
          <p>
            All'interno oggi troviamo varie tipologie di tombe, alcune singole molto grandi e quadrate e altre doppie, ma tutte collocate in zone privilegiate dell'edificio come le absidi o la zona del presbiterio.
          </p>
          <p>
            La <strong>Basilica Paleoscristiana di San Lorenzo</strong> è un sito archeologico che si trova sotto l'attuale chiesa sconsacrata di San Lorenzo ad Aosta, accanto alla chiesa di Sant'Orso.
          </p>
          <p>
            Scopri la <b>visita guidata</b> legata ad <Link href='/visite/aosta_romana_e_medievale' className='text-decoration-none color_link'>Aosta romana e medievale</Link>
          </p>
        </div>
        <div className="margin">
          <h2 className='color-sbtitle'>Basilica Paleocristiana di San Lorenzo - Orari e Prezzi dei biglietti di ingresso</h2>
          <p>
            Orario estivo valido da aprile a settembre - aperti tutti i giorni dalle 9 alle 19. <br/>
            Orario invernale valido tutti i giorni da ottobre a marzo - dalle 10 alle 13 e dalle 14 alle 17 <br/>
            Chiuso il 25 dicembre ed il 1º gennaio.
          </p>
          <p>
            Orari aggoirnati <a href='https://www.lovevda.it/it/banca-dati/8/architettura-romana/aosta/teatro-romano/736' className='text-decoration-none color_link'>QUI</a>
          </p>
        </div>
        <div className="margin">
          <u>Tariffe</u>
          <p className='mt-3'>
              Biglieto cumulativo, valido sei mesi dalla data di emissione, per un ingresso in ognuno dei seguenti siti: <br/>
              Chiesa paleocristiana di San Lorenzo, Teatro romano, Criptoportico forense e Museo Archeologico Regionale.
          </p>
          <p>
              Intero: € 10,00 <br/>
              Ridotto: € 8,00 (comitive di almeno 25 persone paganti e convenzioni specifiche) <br/>
              Ridotto giovani: € 3,00 per tutti i giovani dai 19 ai 25 anni compresi <br/>
              Gratuito: bambini e ragzzi fino ai 18 anni compiuti, scolaresche, sogetti portatori di handicap in possesso della certificazione di cui alla legge 104/92 e loro accompagnatori, abbonati circolo Musei Piamonte/Lombardia (muniti di card in corso 
              di validità).
          </p>
        </div>
        <div className='margin mb-4'>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2341.565536144133!2d7.323238680022114!3d45.73898783885432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920ae23dfcddd%3A0x5748489fc69c6755!2sChiesa%20Paleocristiana%20di%20San%20Lorenzo!5e0!3m2!1sit!2sit!4v1711625849721!5m2!1sit!2sit"
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
                    <Link href='/articoli/cosa_vedere_ad_aosta_in_un_giorno' className='text-decoration-none color_link'>Cosa vedere ad Aosta in un giorno</Link>
                </li>
            </ul>
        </div>
      </main>
      <Footer/>
    </AuthenticatedLayout>
  )
}
