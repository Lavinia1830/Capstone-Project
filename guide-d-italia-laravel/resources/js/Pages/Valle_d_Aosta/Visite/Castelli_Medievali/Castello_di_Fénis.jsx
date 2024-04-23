import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Castello_di_Fénis(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='castello_di_fénis' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello di Fénis</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Il Castello di Fénis, icona del maniero medievale</h2>
                    <p>
                        Talmente perfetto che ancora oggi ci sembra di vedere dame e cavalieri, banchetti e balli. Basta guardarsi intorno e poi chiudere un attimo gli occhi.<br/>
                        Il <strong>Castello di Fénis</strong>, in piena <Link href='/valle_d_aosta' className='text-decoration-none color_link'>Valle d’Aosta</Link>, è il maniero per eccellenza con le sue numerose torri e la doppia cinta muraria merlata, <b>nonché il castello 
                        medievale meglio conservato d’Italia</b>.<br/>
                        Su una collina verdeggiante e circondato da un prato, visitarlo promette un tuffo in una dimensione fiabesca.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Nella residenza di un illustre casato</h2>
                    <p>
                        Se approdate a Fénis e lo confrontate con altri castelli della Val d’Aosta, potete subito notare una differenza sostanziale. Gli altri castelli sorgono in posizione difensiva su impervi roccioni e promontori, <b>il Castello di Fénis si erge su una collina 
                        bassa</b>, abbracciato da un prato. Questo perché Fénis, più che una fortezza difensiva, <b>fu la sede amministrativa, nonché residenza signorile della famiglia Challant</b>.
                    </p>
                    <p>
                        Un luogo antichissimo, le cui origini si fanno risalire almeno al 1242, anche se raggiunse l’apice del fulgore a partire dal 1340, quando ne prese possesso <b>il casato Challant, uno dei più illustri d’Europa</b>. Nel 1869 il maniero divenne la residenza 
                        di caccia del <b>Re Vittorio Emanuele II</b>.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Il potere dell’arte</h2>
                    <p>
                        All’arrivo, resterete incantati dalla <b>vista del Castello di Fénis</b> sulla meravigliosa radura: un pentagono con le torrette circolari ad ogni angolo e una doppia cinta muraria ricamata dai merli, strutture volute da Aimone di Challant verso la metà del 
                        secolo XIV e aggiunte al torrione preesistente. Un’<b>architettura che colpisce per la sua armonia</b>, il simbolo stesso del <b>Medioevo valdostano</b>.
                    </p>
                    <p>
                        Per visitare gli interni passerete da una torre quadrata e vi muoverete dapprima al pianterreno, tra la <b>Sala d’Armi</b>, il Refettorio e le cucine.<br/>
                        Al piano nobile si aprono le camere dei Signori e le sale di rappresentanza, oltre alla <b>cappella finemente decorata da affreschi a tema religioso</b>.
                    </p>
                    <p>
                        L’emozione sale nell’<b>immenso cortile</b>, il dulcis in fundo del percorso, cuore artistico del maniero. Alzate gli occhi verso <b>le balconate in legno ornate da un affresco che è un lungo racconto</b>: ritratti di saggi e profeti, proverbi e sentenze scritti 
                        in francese antico.<br/>
                        Lo scalone è sovrastato <b>dall’affresco raffigurante San Giorgio</b>, mentre sulla parete orientale vedrete l’<b>Annunciazione e San Cristoforo</b>, databili intorno al 1425-1430.<br/>
                        È il trionfo dell’arte, come attestazione di potere unito a uno stile di vita raffinato.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Cosa fare dopo la visita al Castello di Fénis? 6 tappe da non perdere</h2>
                    <p>
                        A pochi passi di distanza dal maniero vi aspetta il riposo in un’area verde dal nome di <b>Tzanté de Bouva</b>.<br/>
                        I bambini possono divertirsi nel parco giochi attrezzato, mentre il pic-nic si consuma nell’apposita zona segnalata. <b>Siete all’ombra di un bel bosco</b> di querce, betulle e frassini e potrete trascorrere ore rilassanti.
                    </p>
                    <p>
                        Da Tzanté de Bouva parte anche <b>una pista ciclabile panoramica</b>una pista ciclabile panoramica, ugualmente accessibile dal parcheggio del cimitero di Fénis. Si tratta di <b>un anello di 5 chilometri</b> su una pista larga e pianeggiante adatta a tutta la famiglia. Sullo 
                        stesso circuito potete dedicarvi al jogging o semplicemente passeggiare tra prati e campi coltivati, con la <b>Dora Baltea</b> a tenervi compagnia.
                    </p>
                    <p>
                        Per chi è già abbastanza allenato, uno splendido <b>trekking</b> è quello nel <b>Vallone di Clavalité fino al Bivacco Borroz</b>. Il paesaggio è di grande bellezza e incontrerete case agricole perse nella natura, oltre alla chiesetta di <b>Notre Dame de la Neige</b> e più 
                        in cima piccole baite.
                    </p>
                    <p>
                        Se invece la vostra vacanza è programmata in inverno, <b>il pianoro di Clavalité è splendido per una ciaspolata</b>. Intorno solo silenzio e la cintura dei monti innevati.
                    </p>
                    <p>
                        <b>Una gita a cavallo?</b> Recatevi a <b>Saint-Vincent</b>, meno di 15 chilometri da Fénis, dove troverete il centro che organizza escursioni in sella tra la natura, oltre a veri e propri corsi di equitazione.
                    </p>
                    <p>
                        <b>Fate un giro del borgo di Fénis</b> e soffermatevi in particolare ad ammirare la <b>Chiesa di San Maurizio</b> del XV secolo e le “<b>caseforti</b>”, antiche residenze signorili.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d583.2905089520714!2d7.488523781160795!3d45.736942191962584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788db6199d53303%3A0x803a22a271b801a1!2sCastello%20di%20F%C3%A9nis!5e1!3m2!1sit!2sit!4v1713797415225!5m2!1sit!2sit"
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
