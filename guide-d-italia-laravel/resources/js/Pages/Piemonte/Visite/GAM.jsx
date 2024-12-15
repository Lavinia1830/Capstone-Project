import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function GAM(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='gam' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>GAM - Galleria Civica d'Arte Moderna e Contemporanea</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <h2 className="color-subtitle">Dagli albori dell'Italia</h2>
                <p>
                    Torino fu la prima città italiana che promosse una raccolta pubblica di arte moderna come parte costitutiva del proprio Museo Civico, aperto nel 1863. Le collezioni furono conservate dapprima insieme alle raccolte di arte antica in un 
                    edificio presso la Mole Antonelliana.<br/>
                    Nel 1895 furono trasferite in un padiglione prospiciente corso Siccardi (ora Galileo Ferraris), costruito anni prima per una mostra d'arte, ed ivi rimasero fino al 1942.
                </p>
            </div>
            <div className="margin mt-4">
                <h2 className="color-subtitle">Dalla Seconda Guerra Mondiale a oggi</h2>
                <p>
                    Distrutto tale padiglione durante la seconda guerra mondiale, sul medesimo sito sorse l'attuale edificio progettato da Carlo Bassi e Goffredo Boschetti, che si inaugurò nel 1959. Resosi inagibile all'inizio degli anni Ottanta, l'edificio 
                    è stato riaperto al pubblico nel 1993 dopo un profondo rinnovamento.
                </p>
                <p>
                    Dopo il progetto di ristrutturazione del Settembre 1999 con il riallestimento della sezione dell'Ottocento (collocata al secondo piano) e del Novecento (al primo piano), l'intervento negli spazi del bookshop, della caffetteria e dell'atrio, 
                    si è anche aperto al pubblico il servizio di videoteca: uno strumento essenziale per la conoscenza e lo studio del video e del cinema d'artista.<br/>
                    Gli interventi ne hanno ampliato la superficie espositiva, lo hanno dotato di impiantistica moderna e lo hanno reso accessibile in ogni sua parte ai disabili.<br/>
                    Un esteso lavoro di conservazione e di restauro è stato compiuto nel frattempo sulle raccolte d'arte.
                </p>
                <p>
                    Dal 2003 fa parte della Fondazione Torino Musei.<br/>
                    Il complesso museale si compone, oltre che delle gallerie per l'esposizione permanente, di sale per mostre temporanee, di ambienti per le attività didattiche.<br/>
                    La biblioteca d'arte e l'archivio fotografico della Fondazione Torino Musei hanno sede alla GAM e sono aperte al pubblico.
                </p>
                <p>
                    Oggi le sue collezioni si compongono oltre 45.000 opere tra dipinti, sculture, installazioni e fotografie a cui si aggiungono una ricca collezione di disegni e incisioni e una tra le più importanti collezioni europee di <b>film e video 
                    d’artista</b>. Forte di questo patrimonio la GAM tiene fede al proprio originario impegno sul fronte della ricerca contemporanea intessendo un continuo rimando tra le proprie opere storiche e il dibattito culturale odierno, ponendo in stretta 
                    correlazione il proprio programma espositivo sul rapporto tra stretta contemporaneità e raccolte storiche.
                </p>
            </div>
            <div className="margin mt-3">
                <h2 className="color-subtitle">Artisti eccezionali</h2>
                <p>
                    Il museo conserva opere dei massimi artisti dell’Ottocento italiano, come <b>Canova</b>, <b>Fontanesi</b>, <b>Fattori</b>, <b>Medardo Rosso</b> e <b>Pellizza da Volpedo</b> e quelli del Novecento, tra cui <b>Balla</b>, <b>Boccioni</b>, <b>Casorati</b>, 
                    <b>Modigliani</b>, <b>De Chirico</b>, <b>Martini</b>, <b>Morandi</b>, <b>De Pisise</b>, <b>Fontana</b>. La GAM possiede inoltre importanti opere delle avanguardie storiche internazionali, tra questi: <b>Klee</b>, <b>Picabia</b>, <b>Picasso</b>, 
                    <b>Ernst</b>, <b>Dix</b>, <b>Calder</b>, insieme a opere delle nuove avanguardie del secondo dopoguerra, attraverso una tra le più importanti raccolte diArte Povera, tra cui lavori di <b>Merz</b>, <b>Boetti</b>, <b>Pistoletto</b>, <b>Paolini</b>, 
                    <b>Zorio</b>, <b>Anselmo</b> e <b>Penone</b>. Il museo dedica ampi spazi anche alla più attuale produzione artistica, da <b>Warhol</b>, a <b>Twombly</b>, a <b>Kiefer</b>, e offre al pubblico una serie di appuntamenti con i più interessanti esponenti 
                    dell’arte e grandi mostre di artisti italiani e internazionali, ordinate intorno alle ricerche più attuali.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.7474060642044!2d7.666945705190173!3d45.06451043389022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d1405b96843%3A0x3fa389e5476f7072!2sVia%20Magenta%2C%2031%2C%2010128%20Torino%20TO!5e1!3m2!1sit!2sit!4v1712587828294!5m2!1sit!2sit"
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
