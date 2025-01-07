import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';

export default function Museo_egizio(props) {
  return (
    <>
        <Head title="Museo Egizio"/>
        <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
            <main>
                <div className='museo_egizio' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo Egizio</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Museo Egizio un viaggio nell'Antico Egitto</h2>
                    <p>
                        “<i>La strada per Menfi e Tebe passa da Torino.</i>” (Jean-François Champollion)
                    </p>
                    <p>
                        Si tratta del <b>più antico museo al mondo</b> dedicato alla <b>cultura egizia</b>. Oltre 40.000 reperti tra tavole antiche, mummie, papiri, oggetti ritrovati, animali imbalsamati, statue e sfingi che fanno di questa struttura il <b>sesto luogo più visitato</b> 
                        d'Italia. Il museo offre la possibilità di partecipare a visite tematiche, ammirare mostre temporanee e compiere percorsi didattici e laboratori per approfondire le conoscenze che conserva. Diversi gli spazi espositivi e i percorsi di visita con un'ampia offerta 
                        in termini di <b>conoscenza</b> ed <b>esperienza</b>. Da non perdere la Biblioteca Silvia Curto che conserva interessanti opere e collezioni antiche di grande pregio. 
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-color-subtitle">Al Museo Egizio di Torino: con il tablet</h2>
                    <p>
                        Tablet, tavoli interattivi e sapienti giochi di luce per un’<b>immersione totale nelle corti dei faraoni</b>. Il <strong>Museo Egizio di</strong> <Link href='/destinazione/piemonte/torino' className='text-decoration-none color_link'>Torino</Link>, secondo solo a 
                        quello del Cairo, ha visto un’imponente ristrutturazione nel 2015, con la collaborazione del <b>celebre scenografo premio Oscar Dante Ferretti</b>. E oggi consente un tuffo nell’antica cultura egizia, resa viva e vivace dai supporti multimediali.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Un allestimento da Oscar</h2>
                    <p>
                        <b>Dante Ferretti</b> è una stella del firmamento italiano che brilla nel panorama internazionale. <b>Scenografo e costumista, ha vinto 3 Oscar</b>, tra cui quello per il film <i>The Aviator</i>, di Martin Scorsese, e altri premi prestigiosi. <b>Anche al Museo 
                        Egizio di Torino c’è il suo talentuoso tocco visionario</b>.<br/>
                        Nell’ambito della completa ristrutturazione del museo nel <b>2015</b>, è stato chiamato a curare <b>le luci e alcuni allestimenti</b>. Imperdibile quella dal titolo <i className='fw-bold'>Il Grande Nilo</i>, che riproduce il percorso del leggendario fiume fino 
                        all’estuario, realizzato con gelatine e vetroresine come un gigantesco puzzle di pannelli in tessuto.<br/>
                        Spettacolare sarà ammirarlo mentre farete un salto di 24 metri attraverso un sistema di scale mobili, sopra una Mesopotamia ricreata oggi in stile modernissimo.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Immergetevi nel gioco di luci e specchi</h2>
                    <p>
                        Sempre di Ferretti l’<b>illuminazione dello Statuario</b>, una delle sale più spettacolari del Museo Egizio, tutta basata su <b>tecnologia a Led</b> ad alto livello di sostenibilità ambientale.<br/>
                        È uno spazio di fortissima suggestione, dalle <b>pareti color rosso pompeiano</b>, dove le singole statue sono illuminate sia dall’alto sia dal basso, moltiplicate da un <b>gioco di specchi</b> che consentono di osservare i capolavori nella 
                        loro <b>tridimensionalità</b>. Vi sembrerà di stare accanto ai faraoni, voi, in prima persona.<br/>
                        Grazie alla studiata illuminotecnica e a particolari proiettori sagomatori, potete ammirare ogni singolo particolare di <b>Ramesse II</b>, il faraone più famoso, e della <b>Sfinge</b> del Nuovo Regno; del re Amenofi II e di <b>Sekhmet</b>, la dea con la testa 
                        di leone, e della dea Hathor dalle corna bovine. Soffermatevi sulle sfumature del granito rosa della statua di Ramesse con il dio Amon e la dea Mut.<br/>
                        Lasciatevi ammaliare dai <b>geroglifici</b> incisi sul sarcofago di Gemenefherbak e dalle scritte incise sulla pietra.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Perché proprio a Torino?</h2>
                    <p>
                        All’inizio dell’<b>800</b>, sulla scia delle campagne napoleoniche in Egitto, si diffuse in Europa la moda di collezionare antichità da quel Paese. <b>Bernardino Drovetti</b>, console generale di Francia durante l’occupazione, vantava una collezione di <b>8000 
                        pezzi</b> e in seguito anche il Re Carlo Felice acquistò innumerevoli pezzi: dall’unione di queste due raccolte nacque il museo nel suo stato embrionale. <br/>
                        Esponenti di Casa <b>Savoia</b>, in decenni di spedizioni, continuarono ad <b>arricchire la collezione</b> e di conseguenza il museo. Torino divenne così un grande <b>centro di studi</b> sulla cultura egizia.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Un percorso davvero faraonico</h2>
                    <p>
                        Oltre 2 km di percorso espositivo disposto su 4 piani, <b>8000 reperti</b> che coprono un arco di storia <b>dal 4000 a.C al 700 d.C</b>: sono questi i <b>numeri da record</b> del più grande Museo Egizio, secondo solo al Cairo per quantità e importanza delle 
                        collezioni, nonché il più antico del mondo interamente dedicato alla cultura egizia. Sfilano <b>corredi funerari, statue, sarcofaghi, monili e papiri</b>. L’itinerario è curatissimo e non si corre il rischio della dispersione.<br/>
                        Se preferite, potete scegliere una <b>visita</b> interamente <b>guidata da esperti</b> oppure optare per <b>l’audioguida</b> multimediale su <b>smartphone</b>, inquadrando i QR.code presenti nelle sale. Gli spazi sono disseminati <b>di tablet e tavoli 
                        interattivi</b>: divertitevi ad approfondire gli aspetti che più che vi interessano.<br/>
                        Non mancate di guardare <b>i video in 3D</b>, che vi faranno vivere l’ebrezza di sentirvi archeologi per un giorno.<br/>
                        Attraverso le sequenze che mostrano documenti di scavo e fotografie d’epoca, vi troverete all’interno della <b>tomba di Kha</b> e in quella di <b>Nefertari</b>, poi dentro la Cappella di Maia.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Due esperienze a corollario</h2>
                    <p>
                        Una delle esperienze da vivere, soprattutto se avete al seguito dei <b>bambini</b>, è la visita guidata tematica dal titolo <b>Vita nell’Aldilà</b>. Gli antichi Egizi consacravano molto tempo alla preparazione del loro futuro dopo la morte, considerato il passaggio 
                        a un’esistenza successiva altrettanto gloriosa di quella terrena.<br/>
                        Un <b>egittologo</b> vi racconta queste sofisticate pratiche, dalla produzione dei sarcofaghi alla <b>preparazione del corpo</b>, che doveva restare integro, fino alla misteriosa simbologia dei <b>papiri funerari</b>.<br/>
                        Agli amanti dell’arte si suggerisce l’<b>Area Restauro</b>, al secondo piano, dove possono assistere in diretta ai restauri dei reperti del Museo.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.18719446438!2d7.683903600000006!3d45.0685959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d6fce61b771%3A0x6ecb005b81db9857!2sMuseo%20Egizio!5e1!3m2!1sit!2sit!4v1712565587074!5m2!1sit!2sit"
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
