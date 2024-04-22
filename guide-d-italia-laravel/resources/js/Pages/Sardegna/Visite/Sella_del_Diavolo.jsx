import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Sella_del_Diavolo(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='sella_del_diavolo' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Sella del Diavolo</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className='margin mt-3'>
                    <p className='fst-italic text-center'>
                        Leggenda e storia si confondono sulla sua cima, tra verde mediterraneo ed eredità del passato, la scogliera avamposto di Cagliari vigila sul golfo, ricca di sorprese
                    </p>
                    <p>
                        Il suo inconfondibile profilo è uno dei tratti più caratterizzanti di <b>Cagliari</b>, che resta impresso per particolare forma e posizione dominante sulla spiaggia del <b>Poetto</b>. La <strong>Sella del Diavolo</strong> occupa il centro esatto del <b>golfo degli Angeli</b> ed è la propaggine 
                        che si spinge sino al mare del <b>colle di sant’Elia</b>. Da decenni ormai, il promontorio è una delle mete predilette di escursioni a pochi passi dal centro città, ideale per il trekking, anche notturno, sorprendente per le tracce di frequentazioni che si sono alternate nell’arco di millenari 
                        e irresistibile attrazione per il panorama che potrai ammirare dalla sua cima. Uno scenario talmente suggestivo che, secondo la leggenda, persino schiere celesti e demoniache se lo contesero. Il mito è raccontato in due versioni leggermente differenti, in particolare nella causa scatenante la 
                        ‘battaglia celeste’.<br/>
                        La versione più diffusa vuole che i diavoli rimasero ammaliati dal luogo e cercarono di impossessarsene, secondo la variante, invece, furono gli angeli a chiedere in dono a Dio tale incanto, scelto per purezza e assenza di malvagità, scatenando la gelosia di Lucifero. Lo scontro avvenne nei 
                        cieli sopra la costa cagliaritana e vide vincitore l’esercito degli angeli guidato dall’arcangelo Michele, mentre Lucifero durante lo scontro perse la sella, che cadde solidificandosi e dando origine al promontorio. Da qui nacque il nome della Sella del Diavolo e ne derivò anche quello del 
                        golfo degli Angeli, in quanto gli abitanti dell’ampia insenatura la vollero intitolare ai loro salvatori.
                        Dal piazzale accanto alla spiaggetta di <b>Calamosca</b> o dal <b>porticciolo di Marina Piccola</b> si diramano sentieri che permettono di esplorare il promontorio, offrendo imperdibili scorci paesaggistici, fino, nelle giornate terse, a <b>Capo Carbonara</b>, comprendendo la vista sui dodici 
                        chilometri del Poetto e del suo lungomare e, alle loro spalle, il profilo del <b>parco di Molentargius-Saline</b>. Durante il cammino noterai palme di san Pietro, ginepri e olivastri, oltre a cespugli di lentischi ed euforbie. Il promontorio offre riparo anche a uccelli rari, come falco 
                        pellegrino, gheppio e pernice sarda. Tra i cespugli non è raro che spuntino volpi e conigli selvatici.<br/>
                        Le cavità naturali attorno al capo sant’Elia hanno restituito tracce di frequentazione fin dal Neolitico. Sul punto più elevato si trovano le rovine di un tempio punico dedicato ad Astarte, come testimonierebbe il ritrovamento di una lastra conservata al <b>museo archeologico di Cagliari</b>. 
                        Vedrai anche due cisterne, una di origine punica, più ampia della seconda di epoca romana. Un perimetro di fondazioni riconduce alla scomparsa chiesa di sant’Elia, con ogni probabilità edificata nell’XI secolo dai monaci vittorini insieme al loro monastero. Il santo, secondo tradizione, fu 
                        martirizzato sul colle. Di matrice spagnola è la torre di guardia, parte del sistema costiero di difesa dalle incursioni saracene. In catalano era detta <i>pouhet</i>, pozzetto, forse da essa deriva il nome del Poetto. Alla seconda guerra mondiale, infine, risalgono alcune strutture militari, 
                        compreso un fortino, che incontrerai lungo l’escursione.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2114.3851671789075!2d9.163346348820648!3d39.18816840224509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e73313c543c691%3A0x5e955e65c817dcb!2sSella%20Del%20Diavolo!5e1!3m2!1sit!2sit!4v1713534230233!5m2!1sit!2sit"
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
