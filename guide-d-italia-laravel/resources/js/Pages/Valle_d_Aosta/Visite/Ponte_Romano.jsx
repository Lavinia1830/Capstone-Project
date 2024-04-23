import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/inertia-react';

export default function Ponte_Romano(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='ponte_romano' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Ponte Romano</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Il primo monumento antico di Aosta che accoglie il visitatore è il <b>ponte romano sul Buthier</b> che ancora oggi caratterizza il quartiere orientale della città, chiamato appunto del Pont de Pierre, cioè del “ponte di pietra”.
                    </p>
                    <p>
                        Il <strong>ponte romano Aosta</strong> insieme al <b>ponte romano di Pont Saint Martin</b> è l’unico conservatosi in Valle d’Aosta. Esso faceva parte della <Link href='/visite/valle_d_aosta/aosta/via_francigena' className='text-decoration-none color_link'>Strada delle 
                        Gallie</Link>, la strada che collegava Augusta Praetoria con Eporedia (Ivrea).
                    </p>
                    <p>
                        Il ponte ha una campata di 17 metri e consentiva di superare il <b>torrente Buthier</b> per raggiungere la città romana.<br/>
                        All’epoca il viaggiatore, una volta superato il ponte, avrebbe visto davanti a sé l’<Link href='/viste/valle_d_aosta/aosta/arco_d_augusto' className='text-decoration-none color_link'>Arco d’Augusto</Link> ed al centro la <Link href='/visite/valle_d_aosta/aosta/porta_praetoria' 
                        className='text-decoration-none color_link'>Porta Praetoria</Link>, ovvero la porta di ingresso alla città.<br/>
                        Un colpo d’occhio monumentale che sottolineava la potenza di Roma e del suo Imperatore!
                    </p>
                    <p>
                        Nel XII secolo a causa di un’inondazione il torrente cambia corso spostandosi più a ovest, dove scorre tutt’oggi, qui rimase un piccolo canale che si è poi prosciugato facendo perdere al ponte la sua funzione.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.42821946462055!2d7.329690833435413!3d45.7397114601139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920aeb195d211%3A0xfc109f4ba7d3639c!2sPonte%20di%20pietra!5e1!3m2!1sit!2sit!4v1713858175336!5m2!1sit!2sit"
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
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
