import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Castello_di_Miramare(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='castello_di_miramare' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello di Miramare</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Natura e storia nel Parco del Castello di Miramare</h2>
                    <p>
                        Basta uscire di poco da <strong>Trieste</strong> per addentrarsi nell’<b>oasi del parco del Castello di Miramare</b>, dove trascorrere ore piacevoli immersi nella vegetazione: una tappa imperdibile, a soli 6 chilometri dal capoluogo della regione Friuli Venezia Giulia. Non a caso 
                        è <b>il castello più visitato dell’intero Nord Est</b>.
                    </p>
                    <p>
                        Ad attrarre è soprattutto il <b>parco</b>, che dall’alto si affaccia sul mare, creando un incontro di verde e blu intenso. Una gita fuori porta in cui la natura si tuffa nella storia.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Amore a prima vista</h2>
                    <p>
                        A volere l’intero complesso del Castello di Miramare, nel cuore dell’Ottocento, fu l’<b>Arciduca Ferdinando Massimiliano d’Asburgo</b>, che si innamorò perdutamente della posizione spettacolare e <b>scelse il nome Miramare, dallo spagnolo <i>mira el mar</i>, che significa appunto 
                        “guarda il mare”</b>.
                    </p>
                    <p>
                        Un’altra nobile subì la forte fascinazione di questo luogo: sua cognata Elisabetta di Baviera, la celebre <b>Principessa Sissi</b>, che fu ospite assidua della residenza.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Giardini inglesi e specie esotiche: l’area verde</h2>
                    <p>
                        22 ettari di superficie adibita a parco cingono il Castello di Miramare. Massimiliano d’Austria espresse la propria predilezione per <b>piante extraeuropee</b>, fornite dai vivaisti del Lombardo Veneto, mentre la terra venne fatta arrivare dalle regione della Stiria e della Carinzia. 
                        E quando il nobile si ritrovò in Messico, dove morì nel 1867, inviò personalmente alcune specie per arricchire il parterre.
                    </p>
                    <p>
                        Oltre all’ingegnere Carl Junker, due personalità si occuparono in seguito dell’aspetto botanico: i <b>giardinieri di corte Josef Laube e in seguito Artur Jelinek</b>, che riuscì a mettere a dimora anche specie esotiche, nonostante il clima avverso di Trieste, dove non sono insolite 
                        gelate notturne e bora.
                    </p>
                    <p>
                        Oggi il parco presenta <b>2 zone distinte</b>. La prima, a est, è un boschetto dove si alternano alberi e deliziosi specchi d’acqua, sentieri e gazebo, secondo lo <b>stile romantico dei giardini inglesi</b>. La seconda è orientata a Sud-Ovest, maggiormente protetta dal vento; accoglie 
                        un giardino all’italiana e svariate aiuole, tra cui quella dei <b>narcisi</b> che a primavera sfoggia un’esuberante fioritura.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">La residenza</h2>
                    <p>
                        Aperto al pubblico come tutto il parco, il <strong>Castello di Miramare</strong> è visitabile all’interno. Al piano terra si estendono gli <b>appartamenti privati dei principi</b>, in quello superiore le sale di rappresentanza. La <b>sontuosa Sala del Trono</b> è attualmente adibita 
                        a sala per concerti e mostre. La dimora è arredata con mobili, oggetti preziosi, dipinti e tele. Discoste dal palazzo principale, le <b>Scuderie</b>, un tempo destinate all’alloggiamento di cavalli e carrozze, sono state restaurate nel 2018 e un’ala ospita ora <b>Il BIOdiversitario 
                        Marino (BioMa)</b>, il Museo immersivo dell’Area Marina Protetta di Miramare. Un bar è a disposizione dei visitatori, oltre a un bookshop.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Atmosfere</h2>
                    <p>
                        Già dall’arrivo, attraversando Porta Bora e percorrendo il Viale Miramare che porta al Castello, si respira una nostalgica <b>atmosfera d’altri tempi</b>.
                    </p>
                    <p>
                        Vale la pena concedersi una passeggiata lenta nei sentierini tortuosi e sotto i pergolati, fino alle serre dalle strutture originarie in ferro. Muovendosi nel parco, molti sono gli incontri: l’<b>Orante</b>, statua maschile in bronzo, poi una copia della <b>Venere di Capua</b> e 
                        l’<b>Apollino</b>, versione adolescenziale del dio.
                    </p>
                    <p>
                        Le fontane donano frescura nelle giornate calde, come i laghetti e il più ampio <b>Lago dei Cigni</b>.
                    </p>
                    <p>
                        Nel piazzale con i cannoni donati da Leopoldo I re dei Belgi si respira tutta la potenza dell’<b>Impero Austroasburgico</b>, mentre nei saloni del Castello sembra di vedere la giovane Principessa Sissi che volteggia a una festa da ballo.
                    </p>
                    <p>
                        La <b>biblioteca</b> ha il profumo denso della storia. E sotto gli <b>oleandri</b>, nei pressi delle Serre Antiche, il pensiero corre al giardiniere di corte Anton Jelinek, perché di recente sono stati piantati seguendo un suo preciso desiderio emerso in un <b>antico carteggio</b>. 
                        Non ci riuscì a causa delle temperature troppo rigide, ma oggi sono qui, in suo onore.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1960.982323140565!2d13.711166334252738!3d45.70300516851627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477b12dd43eeb097%3A0x55ca59bd3c27a770!2sCastello%20di%20Miramare!5e1!3m2!1sit!2sit!4v1713184309019!5m2!1sit!2sit"
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
