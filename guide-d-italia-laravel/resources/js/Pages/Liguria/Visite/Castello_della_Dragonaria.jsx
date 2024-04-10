import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Castello_della_Dragonaria(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='castello_della_dragonaria' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello della Dragonaria</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>La fortezza di Camogli</h2>
                <p>
                    Si affaccia su uno dei tratti più belli della costa ligure e domina dall’alto l’indiscussa perla del <Link href='/visite/camongli/golfo_paradiso' className='text-decoration-none color_link'>Golfo Paradiso</Link>. Il <b>Castello della Dragonara</b>, o <b>Castel Dragone</b>, è una tappa 
                    imperdibile se siete alla scoperta di <Link href='/destinazioni/camogli' className='text-decoration-none color_link'>Camogli</Link>.
                </p>
                <p>
                    Costruito nel XIII secolo, era inizialmente una roccaforte utilizzata dagli abitanti del borgo per difendere il territorio dalle incursioni dei pirati. Non a caso il suo nome deriva dal popolare dragonaria, ovvero “vortice d'aria di tempesta”, per via della sua posizione a strapiombo 
                    sul mare, lì dove il vento batte più forte ed è più facile avvistare i nemici in avvicinamento. All’ingresso del maniero troverete due cannoni del Cinquecento che servivano proprio per difendere il castello dalle razzie dei saraceni.
                </p>
                <p>
                    Negli Anni 70 la fortezza divenne sede dell’<b>Acquario Tirrenico</b>, un piccolo museo che ospitava diverse specie marine tipiche di queste acque, tutte procurate dal custode del castello. Alla chiusura dell’Acquario, tutti i pesci vennero trasferiti in quello di Genova.
                </p>
                <p>
                    Oggi il maniero ospita mostre ed eventi durante tutto l’anno. Salite sulla terrazza panoramica per una vista suggestiva sul mare e su tutta Camogli: resterete senza fiato.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2319.793856913065!2d9.150222026168946!3d44.35066380206665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d35fc98451aae1%3A0x74152bfc1d6fafff!2sCastel%20Dragone!5e1!3m2!1sit!2sit!4v1712737876052!5m2!1sit!2sit"
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
