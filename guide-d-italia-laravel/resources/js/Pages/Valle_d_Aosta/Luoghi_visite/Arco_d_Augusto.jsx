import React from 'react';
import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import Arco_d_Augusto_img from '../../../../assets/Valle_d_Aosta/Arco_di_Augusto_Aosta_Valle_d_Aosta.jpg';

export default function Arco_d_Augusto(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Aosta romana e Aosta medievale</h2>}
    >
        <main>
            <div className='margin'>
                <img src={Arco_d_Augusto_img} alt="Ponte Romano d'Aosta" className='mx-auto my-4' style={{width: 'auto', height: 'auto'}} />
                <h1 className='color-title text-center mb-3'>Arco d'Augusto Aosta</h1>
                <hr className='w-25 border-3' />
            </div>
            <div className='margin'>
                <h2 className='color-subtitle'>Informazioni dell'Arco d'Augusto Aosta</h2>
                <p>
                    <b>L'Arco d'Augusto</b> Aosta, monumento simbolo di <b>Augusta Praetoria</b>, fu eretto in onore dell'Imperatore romano per celebrare la sua vittoria sulla popolazione autoctona, i
                    <b> Salassi</b>. Il monumento, che ha subìto delle modificazioni nel corso dei secoli, consiste in un arco a tutto sesto incornicato da semicolonne con capitelli corinzi coronate da 
                    trabeazione dorina. <br/>
                    L'Arco Onorario originariamente era sovrastato da un attico che ospitava una quadriglia e una scrittura dedicatoria in lettere in bronzo per sottolineare la funzione celebrativa che 
                    però non si è conservata.
                </p>
                <p>
                    L'imponente arco faceva parte della scenografia propagandistica dell'antrata nella città romana, capace di studiare chiunque arrivasse in città dopo aver percorso la strada delle Gallie.
                </p>
                <p>
                    Durante il Medioevo, l'Arco d'Augusto di Aosta venne denominato <b>Saint Vout</b> Per via di un'immagine del Salvatore, sostituita in seguito del Crocifisso, posta qui a protezione della 
                    città delle frequenti inondazioni del vicino <b>torrente Buthier</b>.
                </p>
                <p>
                    Scopri la <b>visita guidata</b> legata ad <Link href='/visite/aosta_romana_e_medievale' className='text-decoration-none color_link'>Aosta romana e medievale</Link>
                </p>
            </div>
            <div className='margin mb-4'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1392.2965112093214!2d7.328139!3d45.739256!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920ae8c4e344d%3A0xf5ec6fc38067d0d6!2sArco%20di%20Augusto!5e0!3m2!1sit!2sus!4v1711530813051!5m2!1sit!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                    className='mx-auto'
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
