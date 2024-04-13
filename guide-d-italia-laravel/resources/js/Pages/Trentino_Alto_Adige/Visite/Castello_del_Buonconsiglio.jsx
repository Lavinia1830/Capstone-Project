import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';


export default function Castello_del_Buonconsiglio(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
        <main>
            <div className='castello_del_buonconsiglio' style={{ position: 'relative' }}>
            <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello del Buonconsiglio</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
            <p>
                Sede dei principi vescovi fin dal 1255, il <strong>Castello del Buonconsiglio di Trento</strong> è il più importante monumento storico-artistico della regione. All’antica fortezza medievale, Castelvecchio, ingentilita da una raffinata loggia, si aggiunse nel Cinquecento il Magno Palazzo, 
                una delle più sontuose residenze rinascimentali d’Italia.
            </p>
            <div className='mb-3 d-flex justify-content-center'>
                <iframe width="600" height="338" src="https://www.youtube.com/embed/NQTfONhm2lU" title="SHOWREEL CASTELLI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <p>
                Gli ambienti sono decorati con splendidi affreschi di Girolamo Romanino, Dosso e Battista Dossi, Fogolino e stucchi di Zaccaria Zacchi.
            </p>
            <p>
                Torre Aquila custodisce il celebre “Ciclo dei Mesi” , una delle più importanti testimonianze del gotico internazionale realizzato nel 1400 dal pittore boemo Venceslao. Nelle sale del primo piano di Castelvecchio si trova la sezione archeologica, tre ambienti che illustrano la Preistoria, la 
                Romanità e l’Alto Medioevo, mentre nelle sale rinascimentali sono esposti pregevoli dipinti, bronzetti, sculture in legno. La programmazione dell’attività del Museo non si esaurisce nell’ambito del Castello del Buonconsiglio, dato che abbraccia anche le sedi periferiche di Castel Beseno in 
                Vallagarina, Castel Stenico nelle valli Giudicarie e Castel Thun in valle di Non.
            </p>
            <p>
                L’articolazione territoriale del Museo in complessi monumentali di tali qualità architettoniche e artistiche, ne fa un unicum a livello italiano. Castel Beseno è diventato il luogo deputato all’illustrazione del castello come strumento di guerra e di controllo territoriale. E’ un presidio 
                militare, il più grande mai realizzato sul nostro territorio e proprio per questo motivo è stato creato un percorso che valorizza le armi custodite nelle collezioni museali. Nelle sale espositive si è possono ammirare interessanti reperti originali mentre nelle stanze a piano terra è proposta 
                un’accurata selezione di repliche fedeli di armi che permette al visitatore di interagire, indossandole e maneggiandole. Lo slogan utilizzato è quasi un ossimoro: “il museo dove si prega di toccare”.
            </p>
            <p>
                Per quanto riguarda il Castello di Stenico, pochi anni fa, è stato completamente rivisto l’allestimento rendendo ancora più chiara la vocazione del castello come museo destinato ad accogliere le cosiddette arti applicate: serrature, chiavi, forzieri, contenitori in rame, oggetti in legno, antico mobilio.
            </p>
            <p>
                Recentemente, il 17 aprile 2010, è stato aperto al pubblico Castel Thun, il maniero che domani la Valle di Non, maniero che ha visto quasi vent’anni di lavori e restauri. Armonico risultato di varie fasi evolutive succedutesi nei secoli, Castel Thun è un esempio tra i più interessanti di 
                architettura castellana oltre a rappresentare un luogo molto significativo per la storia del principato vescovile. Il maniero unisce il bel palazzo signorile circondato da ampi giardini ad un complesso sistema di fortificazioni, costituito da torri, bastioni, fossati e muraglie. 
            </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1948.0143048641094!2d11.125036897839111!3d46.07156355658957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478276ca86c49851%3A0xcd99fac5fcd9a3b6!2sMuseo%20Castello%20del%20Buonconsiglio!5e1!3m2!1sit!2sit!4v1712915729888!5m2!1sit!2sit"
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
