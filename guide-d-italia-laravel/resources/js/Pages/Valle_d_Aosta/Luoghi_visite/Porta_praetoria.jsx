import React from 'react';
import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import Porta_praetoria_img from '../../../../assets/Valle_d_Aosta/Porta_praetoria_Aosta_Valle_d_Aosta.jpg';

export default function Porta_praetoria(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Porta Praetoria Aosta</h2>}
    >
        <main>
            <div className='margin'>
                <img src={Porta_praetoria_img} alt="Ponte Romano d'Aosta" className='mx-auto my-4' style={{width: 'auto', height: 'auto'}} />
                <h1 className='color-title text-center mb-3'>Porta Praetoria Aosta</h1>
                <hr className='w-25 border-3' />
            </div>
            <div className='margin'>
                <h2 className='color-subtitle'>Infromazioni su Porta Praetoria Aosta</h2>
                <p>
                    <b>La Porta Praetoria</b> era una delle quattro porte di accesso alla città ed è l'unica che si è perfettamente consevat sino ad oggi. La Porta costituita l'ingrsso 
                    monumentale della città romana di Aosta e si componeva di due torri, di un cortile interno ed aveva come oggi tre fornici: quello centrale riservato ai carri e i due
                    laterali ai pedini.
                </p>
                <p>
                    Porta Pretoria Aosta, così come tutti gli altri monumenti di epoca romana, fi realizzata in puddinga, ma durante la seconda metà del I sec. d.C. il monumento subì un
                    restyling con la posa del marmo verde bardiglio, proveniente dalle cave di Aymavilles e dal marmo bianco di Carra.
                </p>
                <p>
                    Nel Medioevo una delle torri fu abitata dalla potente famiglia di Port Sancti Ursi che riscuoteva pedaggi da tutti coloro che vi transitavano e vi errossero una 
                    cappella dedicata alla Santissima Tinità, distrutta durante i lavori di restauro in epoca fascista.
                </p>
                <p>
                    Ancora oggi la Porta Praetoria costituisce l'ingresso al <b>centro storico di Aosta</b> ed è uno dei monumenti più importanti della città.
                </p>
                <p>
                    Scopri la <b>visita guidata</b> lagata ad <Link href='/visite/aosta_romana_e_medievale' className='text-decoration-none color_link'>Aosta romana e medievale</Link>
                </p>
            </div>
            <div className='margin mb-4'>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1392.3281290235539!2d7.323391!3d45.737988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920b03d6fec95%3A0x9fa0de3360fd0ba!2sPorta%20Pretoria!5e0!3m2!1sit!2sus!4v1711532461520!5m2!1sit!2sus"
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

