import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';

export default function Castello_di_Cly(props) {
    return (
        <>
            <Head title="Castello di Cly"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='castello_di_cly' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello di Cly</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Il Castello di Cly, centro di potere feudale</h2>
                        <p>
                            Su un promontorio a <b>780 metri</b> di altitudine, il Castello di Cly sorvegliava un vasto territorio: Chambave, <Link href='/destinazione/valle_d_aosta/nus' className='text-decoration-none color_link'>Nus</Link>, Quart, <b>fino alle porte di</b> <Link 
                            href='/destinazioni/valle_d_aosta/aosta' className='text-decoration-none color_link'>Aosta</Link>, poi dal Colle San Pantaleone alla <Link href='/destinazioni/valle_d_aosta/cervinia_valtournenche' className='text-decoration-none color_link'>Valtournenche</Link>, 
                            controllando anche il borgo sottostante e la <b>Strada delle Gallie</b>.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Una naturale posizione di difesa</h2>
                        <p>
                            Le origini del Castello di Cly risalgono al 1027 ed è dunque <b>uno dei più antichi della</b> <Link href='/valle_d_aosta' className='text-decoration-none color_link'>Valle d’Aosta</Link>. La sua importanza strategica come vedetta di un immenso feudo è legata 
                            alle sorti della <b>potente famiglia Challant del ramo di Cly</b>. In seguito, nel 1376, diventò proprietà diretta dei <b>Savoia</b>, che amministrarono il maniero per due secoli.
                        </p>
                        <p>
                            Oggi si apprezza soprattutto la <b>posizione spettacolare del bastione</b>, su uno sperone di roccia ricoperto da una vegetazione selvaggia, in una posizione difensiva offerta dalla natura. Sono visibili <b>la torre centrale e la cinta muraria</b>. Addossato 
                            al mastio si trovano i resti di una piccola cappella romanica un tempo affrescata.
                        </p>
                        <p>
                            È <b>affascinante camminare tra i ruderi</b>, con i picchi innevati sullo sfondo e la vallata che si apre al di sotto; lo sguardo corre fino ad Aosta nelle giornate più terse, con vista su tutta la parte centrale della regione. Una curiosità di tipo prospettico: 
                            il <b>Castello di Cly è allineato con quelli di Montjovet e di Ussel</b>, nei tre punti più elevati della Valle d’Ayas.
                        </p>
                        <p>
                            Vi racconteranno di <b>gesta eroiche, ma anche sanguinarie</b>, perpetrate dalla signoria negli anni del potere. E di certo verrete a conoscenza di una delle tante, orribili storie che hanno segnato il Medioevo: quella di <b>Johanneta Cauda</b>, imprigionata 
                            proprio nelle segrete del Castello di Cly e infine <b>bruciata sul rogo nel 1428 con l’accusa di stregoneria</b>.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Visita al Villaggio di Marseiller</h2>
                        <p>
                            Se al Castello di Cly affreschi e dettagli decorativi sono andati perduti, c’è un altro luogo ben mantenuto che merita una visita: il vicino <b>Villaggio di Marseiller</b>. Qui, nella Cappella di San Michele, potrete ammirare gli affreschi realizzati nel 1441 da 
                            Giacomino d’Ivrea, un racconto dell’Epifania e dell’arrivo dei Re Magi, dell’Adorazione del Bambino e della Fuga in Egitto.
                        </p>
                        <p>
                            Dal borgo parte il Ru Marseiller, il trekking che si sviluppa tra Verrayes, Saint Denis e Chambave offrendo variegati scorci paesaggistici. Lungo l’itinerario si incontra anche il Castello di Cly.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Ecovacanze a Saint-Denis</h2>
                        <p>
                            Il Castello di Cly è una frazione del comune di <b>Saint-Denis, un borgo antico dalla modernissima vocazione ecologica</b>. Negli ultimi anni ha installato 4 impianti fotovoltaici di ultima generazione, uno dei quali al Centro ecosostenibile di Lavesé adibito a ostello 
                            con ristoro. L’edificio preesistente è stato restaurato secondo i principi della bioedilizia.
                        </p>
                        <p>
                            Potreste prevedere di soggiornare qui o in una delle varie strutture ricettive in paese che utilizzano pannelli solari e altri sistemi di risparmio energetico. Da apprezzare i principali monumenti storici, in particolare la <b>Chiesa di San Dionigio</b>.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1961.5133917441754!2d7.559206306163003!3d45.74929901148939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788c4f3b1024953%3A0xf9f7773f7e67b4c1!2sCastello%20di%20Cly!5e1!3m2!1sit!2sit!4v1713796566620!5m2!1sit!2sit"
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
