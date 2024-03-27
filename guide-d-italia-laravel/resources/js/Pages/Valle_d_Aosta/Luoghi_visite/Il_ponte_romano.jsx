import React from 'react';
import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import Ponte_Romano_Aosta from '../../../../assets/Valle_d_Aosta/Ponte_romano_Aosta_Valle_d_Aosta.jpg';



export default function Il_ponte_romano(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Aosta romana e Aosta medievale</h2>}
    >
        <main>
            <div className='margin'>
                <img src={Ponte_Romano_Aosta} alt="Ponte Romano d'Aosta" className='mx-auto my-4' style={{width: 'auto', height: 'auto'}}/>
                <h1 className='color-title text-center mb-3'>Ponte Romano Aosta</h1>
                <hr className='w-25 border-3'/>
            </div>
            <div className='margin'>
                <h2 className='color-subtitle'>Informazioni sul Ponte Romano Aosta</h2>
                <p>
                    Il primo monumento antico di Aosta che accoglie il vsitatore è il <b>ponte romano sul Butheir</b> che ancora oggi cartterizza il quartiere orientale della città, chiamato 
                    appunto del Pont de Pierre, cioè del "ponte di pietra".
                </p>
                <p>
                    Il <b>ponte romano Aosta</b> insieme al <Link to='/ponte_romano_pont_saint_martin' className='text-decoration-none color_link'>ponte romano di Pont Martin</Link> è l'unico 
                    conservatosi in Valle d'Aosta. Esso faceva parte della <Link to='/strada_romana_gallie' className='text-decoration-none color_link'>Strada delle Gallie</Link>, la strada che 
                    collegava Augusta Praetoria con Eporedia (Ivrea).
                </p>
                <p>
                    Il ponte ha una campata di 17 metri e consentiva di superare il <b>torrente Butheir</b> per raggiungere la città romana. <br/>
                    All'epoca il viaggioatore, una volta superato il ponte, avrebbe visto davanti a sé l'<Link to='/arco_d_augusto' className='text-decoration-none color_link'>Arco d'Augusto</Link> ed al 
                    centro la <Link to='/luoghi_visite/porte_praetoria' className='text-decoration-none color_link'>Porta Praetoria</Link>, ovvero la porta di ingresso alla città. <br/>
                    Un colpo d'occhio monumentale che sottolineava la potenza di Roma e del suo Imperatore!
                </p>
                <p>
                    Nel XII secolo a causa di un'inondazione il torrente cambia corso spostandosi più a ovest, dove scorre tutt'oggi, qui rimase un piccolo canale che si è poi prosciugato 
                    facendo perdere al ponte la sua funzione.
                </p>
                <p>
                    Scopri la <b>visita guidata</b> legata ad <Link href='/visite/aosta' className='text-decoration-none color_link'>Aosta romana e medievale</Link>
                </p>
            </div>
            <div className='margin mb-4'>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d585.3829250843087!2d7.329833169716607!3d45.73979467578523!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920aeb195d211%3A0xfc109f4ba7d3639c!2sPonte%20di%20pietra!5e0!3m2!1sit!2sus!4v1711460654540!5m2!1sit!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
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
