import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Palazzo_Ottolenghi_e_Museo_del_Risorgimento(props) {
    return (
        <>
            <Head title="Palazzo Ottolenghi e Museo del Risorgimento"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='p_o_e_m_del_risorgimento' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Palazzo Ottolenghi e Museo del Rinascimento</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Palazzo Ottolenghi</h2>
                        <p>
                            Localizzato lungo la <b>via Maestra</b> (l’attuale <b>corso Alfieri</b>) e in <b>pieno centro storico</b>, <strong>Palazzo Ottolenghi</strong> prende il 
                            nome dall’<b>ultima famiglia nobile</b> che lo abitò.<br/>
                            Nato dall’unione di due fabbricati di <b>epoca medioevale</b>, il Palazzo fu abitato fino a metà <b>Settecento</b> dalla famiglia <b>Ramelli di Celle</b>, 
                            cambiando proprietà nel <b>1754</b>. Con il loro subentro i <b>Gabuti di Bestagno</b> imposero una <b>trasformazione importante</b> dell’edificio, 
                            assegnando i lavori a <b>Benedetto Alfieri</b>.<br/>
                            Il Palazzo venne acquistato nel <b>1851</b> dal conte <b>Zaccaria Ottolenghi</b>, esponente di un’<b>influente famiglia ebraica</b> e padre 
                            dell’illustre <b>mecenate astigiano Leonetto</b>. Gli Ottolenghi non concentrarono le loro <b>ricchezze</b> e i loro <b>interessi artistici</b> solo 
                            sul <b>palazzo familiare</b>. Zaccaria si fece infatti promotore e finanziatore dell’edificazione del <b>Teatro Alfieri</b>, mentre Leonetto costruì 
                            il <b>Nuovo Tempio israelitico</b> e il <b>Liceo Dante Alighieri</b>, fece erigere un <b>monumento</b> per il <b>cinquantenario dello Statuto 
                            Albertino</b> ed uno per la <b>memoria di Re Umberto I</b>. Acquistò anche <b>Palazzo Alfieri</b> donandolo al <b>Comune</b>, destinandolo a 
                            centro <b>culturale</b> per la cittadinanza.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Museo del Risorgimento</h2>
                        <p>
                            È a <b>Leonetto Ottolenghi</b> che si devono l’idea e la realizzazione del <b>nucleo originario</b> della collezione, ovvero i <b>ritratti</b> dei 
                            protagonisti del <b>Risorgimento</b> e i <b>quadri</b> delle <b>battaglie</b>. <br/>
                            Le <b>opere</b> di questa collezione furono da lui <b>commissionate</b> per <b>allestire</b> le <b>sale</b> dedicate alla <b>mostra 
                            risorgimentale</b> dell’<b>Esposizione Nazionale</b> di <b>Viticoltura</b>, <b>Enologia ed Arti Affini</b>, voluta per celebrare 
                            il <b>cinquantenario</b> dello <b>Statuto Albertino</b> (1898).<br/>
                            <b>Costituiscono</b> il <b>patrimonio</b> del <b>Museo</b>: <b>stendardi</b> e <b>bandiere</b> delle <b>Società di Mutuo Soccorso</b>, <b>armi</b>, 
                            un cospicuo numero di <b>medaglie</b> e <b>monete</b>, e un’ampia raccolta di <b>cimeli</b> donati da <b>astigiani</b> che <b>combatterono</b> durante 
                            il <b>Risorgimento</b> o dai loro <b>eredi</b>.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d760.3663838441875!2d8.199563303247784!3d44.899069510719286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478793259c41d5e5%3A0xc000b4c13d15d3f0!2sMuseo%20del%20Risorgimento!5e1!3m2!1sit!2sit!4v1717577488546!5m2!1sit!2sit"
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
