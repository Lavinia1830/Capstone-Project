import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Castello_di_Verrès(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='castello_di_verres' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello di Verrès</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Il Castello di Verrès, dimora di un nobile condottiero</h2>
                    <p>
                        Un imponente <i>monolite</i> in posizione dominante, su un roccione che guarda dall’alto l’<Link href='/visite/borghi' className='text-decoration-none color_link'>antico borgo</Link> e la vallata. È il <strong>Castello di Verrès</strong>, maestoso maniero monoblocco 
                        edificato alla fine del 300 per volere della famiglia Challant, una delle più prestigiose casate dell’intera Valle d’Aosta.<br/>
                        Attorno, il paesaggio suggestivo e la natura intatta della bassa <Link href='/valle_d_aosta' className='text-decoration-none color_link'>Valle d’Aosta</Link> bagnata dalla Dora Baltea.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">La mulattiera che porta al maniero</h2>
                    <p>
                        Già dall’arrivo vi sentirete proiettati in una dimensione d’altri tempi. Perché <b>bisogna percorrere una ripida mulattiera per raggiungere il Castello di Verrès</b>, arroccato sullo sperone di roccia a picco sul torrente Évançon: una decina di minuti di camminata per 
                        dimenticare la civiltà e immergersi in un altro mondo.
                    </p>
                    <p>
                        Anche <b>dal borgo di Verrès si può arrivare direttamente a piedi in 20 minuti</b>, un’alternativa raccomandabile rispetto all’avvicinamento in auto, per un contatto intenso con il paesaggio. Sull’altra sponda della Dora Baltea si erge un altro celebre castello della Valle 
                        d’Aosta, quello di Issogne, molto diverso nella struttura, in un interessante contrasto architettonico.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Un castello rivoluzionario</h2>
                    <p>
                        Il nobile Ibleto di Challant, che partendo da un complesso preesistente diede al maniero l’aspetto odierno, scelse <b>una strada innovativa rispetto agli altri castelli della regione</b>, caratterizzati da vari edifici racchiusi in una cinta di mura difensive. Qui siamo invece 
                        di fronte a un unico blocco compatto, che enfatizza la funzione militare e attrae per la sua possanza.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Lo stile ricercato degli interni</h2>
                    <p>
                        Gli interni si presentano meno austeri e potete ammirare il grande scalone nel cortile che collega i tre piani, le lavorazioni ornamentali delle finestre, delle porte e dei camini, i dettagli in pietra bianca e verde decorata realizzati dalle sapienti maestranze del tempo. <b>Non 
                        perdetevi la Sala d’armi e la Sala da pranzo</b>, dove è visibile il particolare del passavivande verso la cucina padronale.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Lo stile ricercato degli interni</h2>
                    <p>
                        Il Castello di Verrès ospita il <Link href='/notizie/carnevale_storici_in_italia' className='text-decoration-none color_link'>Carnevale Storico</Link>, una rievocazione dell’epopea della contessa Caterina di Challant, in un mix di vicende storiche e affascinanti leggende. Tra 
                        maggio e giugno di ogni anno, potrete apprezzare le sfilate in costumi medievali, i tornei cavallereschi e i balli; al castello viene inoltre organizzato un sontuoso banchetto
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">A spasso per il centro</h2>
                    <p>
                        Dal castello tornate al borgo di Verrès, <b>un gioiellino in pietra le cui origini risalgono all’epoca romana</b>. Girovagate tra stradine e scalinate, raggiungete la piccola piazza René de Challand, poi percorrete la via di ciottoli fino alla <b>Collegiata</b> e la Parrocchiale 
                        di Saint-Gilles. Gli amanti del <Link href='/notizie/attivita_sportive/sport_estremi' className='text-decoration-none color_link'>climbing</Link> possono fare una sosta alla palestra di arrampicata in località Chopine, vicinissima al paese, con pareti diversificate e adatte a 
                        tutti, bambini compresi.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Un tuffo nella natura</h2>
                    <p>
                        <b>Da Verrès</b> parte il sentiero Arboretum, che risale verso l’imbocco della Val d’Ayas. La facile escursione nella natura vi offre anche la visione del Castello di Verrès da lontano, in modo da coglierne la posizione strategica e panoramica sulla piana. Il percorso è chiamato 
                        in <i>patois anche Borna di Laou</i>, ovvero <i>Tana del Lupo</i> poiché leggenda narra che nell’800 gli animali avessero costruito qui la loro tana.<br/>
                        Oggi non incontrerete nessuna belva feroce, ma soltanto una bella e variegata vegetazione che i cartelli didattici vi aiuteranno a decifrare. Corniolo e biancospino tra le specie autoctone, poi frassini, castagni e tigli e qualche rarità considerata la zona: nespolo e alloro.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">In bicicletta lungo la Dora Baltea</h2>
                    <p>
                        <b>Verrès</b> costituisce <b>una tappa della</b> <Link href='/visite/valle_d_aosta/aosta/via_francigena' className='text-decoration-none color_link'>Via Francigena</Link>, un lungo itinerario ciclabile. Qui pedalate tra continui saliscendi prevalentemente sulla riva sinistra 
                        della Dorea Baltea, anche su brevi tratti di mulattiera, in un percorso che tocca alcuni dei più bei <Link href='/visite/valle_d_aosta/castelli_medievali' className='text-decoration-none color_link'>castelli della Valle d’Aosta</Link>, <Link 
                        href='/visite/valle_d_aosta/castelli_medievali/forte_di_bard' className='text-decoration-none color_link'>Forte di Bard</Link> compreso, oltre a punti scenografici con i picchi a disegnare lo skyline montano.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.9460845476847!2d7.69371691290661!3d45.66982164970528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788bf8de6c269db%3A0x45224d5e12a8a7bd!2sCastello%20di%20Verr%C3%A8s!5e1!3m2!1sit!2sit!4v1713793783884!5m2!1sit!2sit"
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
