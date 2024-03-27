import React from 'react';
import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import Cinta_muraria_img from '../../../../assets/Valle_d_Aosta/Cinta_muraria_Valle_d_Aosta.jpg';

export default function Cinta_muraria(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Cinta muraria Aosta</h2>}
    >
        <main>
            <div className='margin'>
                <img src={Cinta_muraria_img} alt="Ponte Romano d'Aosta" className='mx-auto my-4' style={{width: 'auto', height: 'auto'}} />
                <h1 className='color-title text-center mb-3'>Cinta muraria Aosta</h1>
                <hr className='w-25 border-3'/>
            </div>
            <div className='margin'>
                <h2 className='color-subtitle'>Informazioni sulla Cinta nuraria Aosta</h2>
                <p>
                    <b>La cinita muraria di Augusta Praetoria</b> si è mirabilemente conservata in molti tratti della città. Essa non aveva solo lo scopo di defenderla, ma anche di incutere timore e ammirazione nei confronti dei vincitori. <br/>
                    La cinta fi realizzata con la tecnica a sasso ovvero la posa di un muro esterno in conci di travertino, la posa un muro interno più grezzo e nel mezzo un riempimento fatto di malta e sassi.
                </p>
                <p>
                    Nalla parte superiore vi era inoltre il camminamento di ronda presidiato da una guarnigione. In alcuni tratti sono ben visibili i resti dei terrapieni e dei contrafforti, come nella zona del <Link href='/luoghi_visite/teatro_romano_di_aosta' className='text-decoration-none color_link'>Teatro romano</Link>.
                </p>
                <p>
                    La cinta muraria Aosta era inoltre scandita da venti torri che durante il Medioevo vennero abitate da alcune famiglie nobili, solo nella <b>Tour du Pailleron</b> e nella Torre del Labbroso si può riconoscere ancora oggi
                    quale fosse l'aspetto originale. <br/>
                    Alcune torri hanno invee subìto alcune trasformazioni importanti come la <b>Torre dei Balivi</b>, la <b>Tour Bramafam</b> e la <b>Tour Fromage</b>.
                </p>
                <p>
                    Scopri la <b>visita guidata</b> legata ad <Link href='/visite/aosta_romana_e_medievale' className='text-decoration-none color_link'>Aosta romana e medievale</Link>
                </p>
            </div>
            <div className='margin mb-4'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d696.1539541541572!2d7.322234069665935!3d45.73879893419047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920b1ca88a97d%3A0x252626e005efe493!2sTour%20Fromage%20o%20Casei!5e0!3m2!1sit!2sit!4v1711545466457!5m2!1sit!2sit"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
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
