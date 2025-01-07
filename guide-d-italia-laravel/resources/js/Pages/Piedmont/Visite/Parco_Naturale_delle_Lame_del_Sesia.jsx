import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Parco_Naturale_delle_Lame_del_Sesia(props) {
    return (
        <>
            <Head title="Parco Naturale delle Lame del Sesia"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='parco_naturale_delle_lame_del_sesia' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Parco Nazionale delle Lame del Sesia</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Istituito nel 1978, il Parco Si estende per circa 900 ettari, lungo un tratto di quasi 8 km di fiume al confine tra le province di <Link href='/destinazioni/piemonte/vercelli' 
                            className='text-decoration-none color_link'>Vercelli</Link> e <Link href='/destinazioni/piemonte/novara' className='text-decoration-none color_link'>Novara</Link>. 
                            Il territorio è fluviale ed è caratterizzato dalle <b>lame</b>, specchi d’acqua sorti da <b>rami del</b> <Link href='/fiumi/piemonte/vercelli/fiume_sesia' 
                            className='text-decoration-none color_link'>Sesia</Link> e da gerbidi, radure nate su depositi di ghiaie. Si tratta di un terreno continuamente plasmato dalle piene del fiume 
                            Sesia, lungo le rive si affacciano i boschi, ormai gli ultimi lembi delle scomparse foreste di pianura. Quest’oasi naturale si pone in netto contrasto con il paesaggio 
                            circostante caratterizzato dalla predominanza della monocoltura a riso.
                        </p>
                        <p>
                            La fruizione del parco è possibile durante tutto l’anno a piedi e in bici, sia su percorsi <b>attrezzati autoguidati</b> sia con specifiche <b>attività didattiche</b>. 
                            È inoltre visitabile, su richiesta, il <b>Museo ornitologico</b>, presso la sede del parco di Albano Vercellese.
                        </p>
                        <p>
                            Il Parco ospita una delle <b>maggiori garzaie d’Italia</b>, ubicata al confine sud del Parco delle Lame e circondata dal fiume. È il luogo ideale per i <b>birdwatcher</b> che 
                            possono utilizzare il capanno di avvistamento posto sull’argine del Sesia per osservare la vita e le abitudini dei volatili che abitano questa zona. Nella <b>Riserva Naturale 
                            Speciale Isolone di Oldenico</b> nidificano garzette, aironi cenerini, cormorani e aironi guardabuoi. Nei periodi appropriati il birdwatching si può praticare nei capanni 
                            d’osservazione attrezzati del Parco.
                        </p>
                        <p>
                            Tuttavia non è questa l’unica grande “città degli aironi”: la <b>Garzaia di Villarboit</b> è Riserva Naturale Speciale della Regione Piemonte dal 1990. La superficie protetta 
                            è formata da una parte di coltivo a pioppeto e risaia, e da un bosco ceduo con robinie, olmi campestri e ontani neri. Altro luogo di nidificazione degli ardeidi è a Carisio, 
                            sulla sponda destra del torrente Elvo, con la Riserva Naturale Speciale della <b>Garzaia di Carisio</b>. In un’area di pianura fortemente antropizzata, hanno “trovato casa” 
                            nitticore, garzette e aironi cenerini.
                        </p>
                        <p>
                            In queste aree protette non è consentito l’accesso al pubblico, salvo per motivi di studio. Le specie ornitologiche sono comunque comodamente osservabili dal perimetro della 
                            riserva.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20271.458923836875!2d8.371514616726124!3d45.42775938655171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478648607eb46733%3A0x72cdcf230344259a!2sParco%20Naturale%20delle%20Lame%20del%20Sesia!5e1!3m2!1sit!2sit!4v1716535460502!5m2!1sit!2sit"
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
        </>
    )
}
