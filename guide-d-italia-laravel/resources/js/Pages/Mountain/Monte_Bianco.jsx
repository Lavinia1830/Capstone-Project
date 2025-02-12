import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/inertia-react';

export default function Monte_Bianco(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='monte_bianco' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Monte Bianco</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Il Re delle Alpi per vacanze indimenticabili d’estate e d’inverno</h2>
                    <p>
                        È la montagna più alta delle Alpi e dell'intera Europa. Coi suoi 4.807 metri di altitudine, il <strong>Monte Bianco</strong> è un autentico paradiso per gli amanti dell'alpinismo e dello sci da discesa. Il <b>Re delle Alpi</b> fa parte del massiccio del Monte Bianco, che 
                        si estende per oltre 400 chilometri quadrati tra la Valle D'Aosta e l'Alta Savoia e comprende vette elevatissime come il Dente del Gigante, il Mont Dolent e le Guglie di Chamonix. 
                    </p>
                    <p>
                        Il principale punto di riferimento per gli sport invernali è il <b>comprensorio sciistico Monte Bianco - Courmayeur</b> con 100 chilometri di tracciati battuti e fuoripista, 33 piste con vari dislivelli e 18 impianti di risalita che permettono di raggiungere i 2.755 metri di quota. Con 
                        la <b>funivia</b> <Link href='/montagna/skyway_monte_bianco' className='text-decoration-none color_link'>Skyway Monte Bianco</Link> si possono toccare i 3.466 metri per godere di una vista unica a due passi dal cielo.
                    </p>
                    <p>
                        Chi cerca qualche spunto per vacanze estive ai piedi del maestoso Monte Bianco può contare su chilometri di percorsi per il trekking e la mountain bike a partire da Courmayeur, come i 170 chilometri del <b>Tour du Mont Blanc</b>, o da <b>Planpincieux</b> con la cosiddetta 
                        balconata del Monte Bianco, uno dei sentieri più belli d'Italia.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52702.90517931747!2d6.823975517655897!3d45.83261439687007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4789459fb534be51%3A0xa908728c5dcec4c0!2sMonte%20Bianco!5e1!3m2!1sit!2sit!4v1713869894364!5m2!1sit!2sit"
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
