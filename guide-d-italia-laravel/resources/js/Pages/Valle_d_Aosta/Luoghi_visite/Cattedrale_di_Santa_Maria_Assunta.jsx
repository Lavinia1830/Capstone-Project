import React from 'react';
import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import Cattedrale_di_S_M_Assunta from '../../../../assets/Valle_d_Aosta/Cattedrale_di_Aosta_Valle_d_Aosta.jpg';

export default function Cattedrale_di_Santa_Maria_Assunta(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Cattedrale di Santa Maria Assinta</h2>}
    >
        <main>
            <div className='margin'>
                <img src={Cattedrale_di_S_M_Assunta} alt="Ponte Romano d'Aosta" className='mx-auto my-4' style={{width: 'auto', height: 'auto'}} />
                <h1 className='color-title text-center mb-3'>Cattedrale di Santa Maria Assinta</h1>
                <hr className='w-25 border-3'/>
            </div>
            <div className='margin'>
                <h2 className='color-subtitle'>Informazioni sulla Cattedrale di Santa Maria Assunta</h2>
                <p>
                    Alle spalle della cetralissima Piazza Chanoux e a lato del criptoportico si trova la <b>Cattedrale di Aosta</b>, dedicata a Santa Maria Assunta.
                </p>
                <p>
                    Le origini della <strong>Cattedrale di Santa Maria Assunta</strong> risalirebbero alla fine dell'impero Romano, quando accanto all'area del Foro una <i>domus</i> si trasforma in <i>domus ecclesiae</i>, ovvero il primo luogo
                    di riunione dei cristiani. Quando poi Aosta divenne diocesi su questo complesso preesistente, sorge verso la fine del IV secolo la Cattedrale, luogo di culto intorno al quale ruotavano il vescovo ed il clero. 
                </p>
                <p>
                    La Cattedrale di Santa Maria Assunta, come avvenne per la <Link href='/luoghi_visite/collegiata_di_sant_orso' className='text-decoration-none color_link'>Colleggiata di Sant'Orso</Link>, subì degli importanti lavori a cavallo 
                    dell'anno Mille per volere del Vescovo Anselmo. In questo periodo venne realizzata la Cattesrale romanica costruita in realtà di due massicci simmetrici: uno dedicato a San Giovanni con funzione di parrocchia, l'altro dedicato 
                    a Santa Maria Assunta e sede vescovile. Dalla chiesa romanica oggi è possibile ammirare la cripta e gli <Link to='/luoghi_visite/affreschi_ottoniani' className='text-decoration-none color_link'>affreschi ottoniani</Link> custoditi 
                    nel sottotetto.
                </p>
                <p>
                    Tra XII, XIII e XIV seconso si assiste alla posa dei mosaici pavimentali nei cori, della vatrate e alla realizzazione del deambulatorio gotico. Nel corso del XV e XVI secolo alcuni vescovi promossero un radicale restauro della 
                    chiesa e la arricchirono di numerose opere d'arte e preziosi pezzi di oreficeria. <br/>
                    Tra il 1522 e il 1526 viene realizzata la bella <b>facciata cinquecentesca</b> con un ciclo di affreschi e statue in terracotta raffiguranti alcune scene della vita della Vergine, a cui la Cattedrale è dedicata. Il frontone 
                    neoclassico i aggiunto nel 1848. <br/>
                    Sul lato settentrionale si trova inoltre il <b>chiostro</b>, realizzato nel XV secolo e che nel XIX secolo venne in parte denominato per lasciare spazio alla cappella del Rosario.
                </p>
                <p>
                    Il <Link to='/visite/museo_del_tesoro' className='text-decoration-none color_link'>Museo del Tesoro</Link>
                </p>
                <p>
                    Scopri la <b>visita guidata</b> <Link href='/visite/aosta_romana_e_medievale' className='text-decoration-none color_link'>Aosta romana e medievale</Link>
                </p>
            </div>
            <div className='margin mb-4'>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2784.6532658556807!2d7.317696!3d45.738048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920b737e86aa9%3A0xcfe47ffcd7709d8e!2sCattedrale%20di%20Santa%20Maria%20Assunta%20e%20San%20Giovanni%20Battista!5e0!3m2!1sit!2sus!4v1711550237331!5m2!1sit!2sus"
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
                    <li>
                        <Link to='/fiera_di_sant_orso' className='text-decoration-none color_link'>La Millenaria Fiera di Sant'Orso Aosta</Link>
                    </li>
                </ul>
            </div>
        </main>
    </AuthenticatedLayout>
  )
}
