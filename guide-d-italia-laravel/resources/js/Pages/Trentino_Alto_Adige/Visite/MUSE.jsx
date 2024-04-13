import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function MUSE(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='muse' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>MUSE - Museo delle Scienze</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Il <strong>MUSE</strong>, situato all'interno del quartiere "Le Albere" di <Link href='/destinazioni/trento' className='text-decoration-none color_link'>Trento</Link> è stato inaugurato nell'estate 2013 ed ha sostituito il Museo tridentino di scienze naturali. L'edificio si sviluppa 
                        su una superficie complessiva di circa 19.000 m², disposti su sei piani tutti da scoprire.
                    </p>
                    <p>
                        Un percorso espositivo che usa la metafora della montagna per raccontare, dall’alto verso il basso, la formazione delle Dolomiti, la biodiversità alpina, la storia dei primi insediamenti umani e la scoperta delle origini del mondo attraverso la più grande mostra dei dinosauri dell’arco 
                        alpino. Il rapporto uomo-natura è al centro della filosofia espositiva del MUSE. Visitando il museo è possibile comprendere come la scienza e la tecnologia possano contribuire a trovare buone soluzioni per il futuro del nostro pianeta. Il MUSE, tramite exhibit interattivi e installazioni 
                        multimediali, offre un meraviglioso viaggio nella scienza e nella natura, pensato soprattutto per giovani, bambini e famiglie. Accanto al percorso espositivo permanente, trovano spazio progetti innovativi e numerose ed interessanti mostre temporanee, così come tanti eventi e progetti 
                        speciali.
                    </p>
                    <p>
                        All'interno del museo sono presenti spazi unici come la serra tropicale; il "FabLab", un laboratorio di fabbricazione digitale e lo spazio "Maxi Ooh!", dedicato a bambini dai 0 ai 5 anni, in cui potranno scoprire, capire, osservare, provare e sperimentare attraverso stimoli sensoriali, 
                        reali e virtuali. Divertimento assicurato!
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2755.356303661165!2d11.112868235597006!3d46.06258657693336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47827151fceb92e9%3A0x7eb8c485fc7a5141!2sMUSE%20-%20Museo%20delle%20Scienze!5e1!3m2!1sit!2sit!4v1712918195333!5m2!1sit!2sit"
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
