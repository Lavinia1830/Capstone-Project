import React from 'react';
import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import Teatro_romano_di_Aosta_img from '../../../../assets/Valle_d_Aosta/Teatro_romano_aosta_Valle_d_Aosta.jpg'

export default function Teatro_romano_di_Aosta(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Teatro Romano di Aosta</h2>}
    >
        <main>
            <div className='margin'>
                <img src={Teatro_romano_di_Aosta_img} alt="Ponte Romano d'Aosta" className='mx-auto my-4' style={{width: 'auto', height: 'auto'}} />
                <h1 className='color-title text-center mb-3'>Teatro Romano di Aosta</h1>
                <hr className='w-25 border-3'/>
            </div>
            <div className='margin'>
                <h2 className='color-subtitle'>Informazioni sul Teatro Romano di Aosta</h2>
                <p>
                    <b>Il Teatro romano di Aosta</b>, costruito poco lontano da <Link href='/luoghi_visite/porta_praetoria' className='text-decoration-none color_link'>Porta Praetoria</Link> fu realizzato in un'epoca successiva alla fondazione della città. <br/>
                    In questa area di <b>Augusta Praetori</b> i Romani sclesero di costruire il quartiere degli spettacoli con il <b>teatro</b> e l'<b>anfiteatro</b>.
                </p>
                <p>
                    Oggi il teatro romano di Aosta è facilmente reconoscibile per via dei suoi pregevoli resti archeologici: la maestosa facciata alta 22 metri, la cavea (ovvero lo gradinate per gli spettatori), lo spazio per l'orchestra e il fondo di scena, di
                    cui rimangono solo le fondamenta. <br/>
                    Sul resto si riconoscono ancora i resti dei locali di servizio come i camerini e i depositi.
                </p>
                <p>
                    Con la caduta dell'impero poi si perse ogni memoria della funzione originaria dell'edificio e durante il <b>Medioevo</b> vi furono addossate numerose costruzioni, demolite nel corso dei mederni lavori di recupero e restauro.
                </p>
                <p>
                    Scopri la <b>visita guidata</b> <Link href='/visite/aosta_romana_e_medievale' className='text-decoration-none color_link'>Aosta romana e medievale</Link>
                </p>
            </div>
            <div className="margin">
                <h2 className='color-subtitle'>Teatro Romano Aosta - Oarari e prezzi</h2>
                <p>
                    Orari estivo valido da aprile a settembre - aperti tutti i giorni dalle 9 alle 19. <br/>
                    Orario invernale valido tutti i giorni da ottobre a marzo - dalle 10 alle 13 e dalle 14 alle 17
                </p>
                <p>
                    Chiuso il 25 dicembre ed il 1º genniao. <br/>
                    Il teatro romano è chiuso per lavori dal 7 novembre 2023 a maggio 2025
                </p>
                <p>
                    Orari aggoirnati <a href='https://www.lovevda.it/it/banca-dati/8/architettura-romana/aosta/teatro-romano/736' className='text-decoration-none color_link'>QUI</a>
                </p>
            </div>
            <div className="margin">
                <u>Tariffe</u>
                <p className='mt-3'>
                    Biglietto cumulativo, valido sei mesi della data di emissione, per un ingresso in ognuno dei seguenti siti: <br/>
                    Chiesa paleocristiana di San Lorenzo, Tetro romano, Criptoportico forense e Meseo Archeologico Regionale.
                </p>
                <p>
                    Intero: € 10,00 <br/>
                    Ridotto: € 8,00 (comitive di almeno 24 persone paganti e convenzioni specifiche) <br/>
                    Ridotto giovani: € 3,00 per tutti i giovani dai 19 ai 25 anni compresi <br/>
                    Gratuito: bambini e ragzzi fino ai 18 anni compiuti, scolaresche, sogetti portatori di handicap in possesso della certificazione di cui alla legge 104/92 e loro accompagnatori, abbonati circolo Musei Piamonte/Lombardia (muniti di card in corso 
                    di validità).
                </p>
            </div>
            <div className='margin mb-4'>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1392.3164095662682!2d7.322564!3d45.738458!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920b034c4e3f7%3A0x5b8765bf42f6b966!2sTeatro%20Romano!5e0!3m2!1sit!2sus!4v1711537252400!5m2!1sit!2sus"
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
