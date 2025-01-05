import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Arte_Contemporanea(props) {
    return (
        <>
            <Head title="Arte Contemporanea"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='arte_contemporanea' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Arte Contemporanea</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p className='fst-italic text-center'>
                            La Reggia e i Giardini dialogano con numerose opere di arte contemporanea.
                        </p>
                    </div>
                    <div className='mb-3'>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/5I68y-GYOuI" 
                            title="Arte Contemporanea alla Reggia di Venaria" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen
                            className='mx-auto'>
                        </iframe>
                    </div>
                    <div className='margin mt-3'>
                        <h2 className="color-subtitle">Le produzioni artistiche contemporanee della Venaria Reale</h2>
                        <h3 className="color-subtitle">La vita di corte secondo Peter Greenaway</h3>
                        <p>
                            Ripopolare la Reggia, l’installazione multimediale creata appositamente da <b>Peter Greenaway</b>, racconta la vita di corte attraverso i volti e le voci di noti attori italiani. Sala <b>1</b>, sale <b>9</b> e <b>10</b>, 
                            sale <b>28</b> e <b>29</b>.<br/>
                            <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/ripopolare_la_reggia_di_peter_greenaway' className='text-decoration-none color_link'>per sapere di più</Link>
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='color-subtitle'>La corte di carta di Isabelle de Borchgrave</h3>
                        <p>
                            Seta, velluto, ricami, trine e pizzi: con la più effimera delle materie, la carta, l’artista belga <b>Isabelle de Borchgrave</b> ha creato <b>tredici abiti</b> di una ricchezza spettacolare.<br/>
                            Posizionati sullo <b>scalone d’entrata della Cappella di sant’Uberto</b>, rappresentano l’eleganza secondo la <b>moda del Settecento</b>, l’epoca più sfarzosa della corte sabauda. 
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='color-subtitle'>La musica per la Galleria Grande di Brian Eno</h3>
                        <p>
                            L’installazione sonora <i>Music for the Great Gallery</i> è stata ideata da <b>Brian Eno</b> appositamente per la <b>Galleria Grande</b>. Il compositore inglese ha voluto giocare con la grandiosità, la luce e i riverberi della sala creando 
                            una <b>partitura elettronica</b>, con l’aggiunta di pianoforte e violino, in 12 movimenti. Il flusso sonoro è diffuso da 4 casse - perfettamente nascoste - e i visitatori si trovano immersi per oltre un’ora in un <b>ambiente sonoro</b> che varia 
                            a seconda della loro posizione all’interno della sala.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='color-subtitle'>La piazza illuminata da Michele De Lucchi</h3>
                        <p>
                            <b>Piazza della Repubblica</b>, con la celebre pavimentazione che ricorda le onde del mare, è arricchita dall’illuminazione del designer <b>Michele De Lucchi</b>.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='color-subtitle'>Il piano concerto n. 2 di Michael Nyman</h3>
                        <p>
                            <i>A Celebration for Venaria Reale</i>, il brano scritto dal compositore inglese <b>Michael Nyman</b> per i Giardini della Venaria, è la colonna sonora dell’installazione video che racconta il progetto di recupero della Reggia e dei Giardini 
                            in <b>sala 56</b>.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='color-subtitle'>Storyboard. Paladino alla Reggia di Venaria</h3>
                        <p>
                            L’opera dell’artista <b>Mimmo Paladino</b>, tra i principali e più affermati esponenti della corrente della Transavanguardia, appositamente realizzata per la Reggia, si dipana in tre stanze e mette insieme pittura e disegno, scultura e 
                            installazione, persino il cinema.<br/>
                            <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/esposizioni_permanenti/storyboard_paladino_reggia_venaria' className='text-decoration-none color_link'>Per saperne di più</Link>. 
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='color-subtitle'>Avvicinarsi alle stelle con Giovanni Anselmo</h3>
                        <p>
                            Al centro del <b>Gran Parterre juvarriano</b>, sei lastre di granito “nero Africa” sono disposte di piatto lungo la direzione Nord-Sud. Sulle facce superiori è incisa la scritta “Dove le stelle si avvicinano di una spanna in più”, il titolo 
                            dell’installazione di Giovanni Anselmo. Al visitatore è consentito salire sull’opera per contemplare le stelle da un pò più vicino.<br/>
                            <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/esposizioni_permanenti/dove_stelle_si_avvicinano_spanna' className='text-decoration-none color_link'>Per saperne di più</Link>. 
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='color-subtitle'>Le Sculture Fluide e "Anafora" di Giuseppe Penone</h3>
                        <p>
                            Ispirato al disegno seicentesco a maglie quadrate del <b>Parco Basso</b>, <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/i_capolavori/giardino_delle_sculture_fluide' className='text-decoration-none color_link'>Il Giardino delle 
                            Sculture Fluide di Giuseppe Penone</Link> si estende per 500 metri, con 14  sculture che scandiscono un cammino senza cesure tra mondo minerale, vegetale e umano.
                        </p>
                        <p>
                            Nell’ambito di una virtuosa continuità di “dialogo” e “sintonia” con le imponenti installazioni presenti nel Giardino delle Sculture Fluide allestito nel 2007, Giuseppe Penone ha realizzato nel 
                            2019 <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/esposizioni_permanenti/anafora_di_giuseppe_penone' className='text-decoration-none color_link'>Anafora</Link>, una nuova serie di sette opere nelle adiacenti Grotte del muro castellamontiano.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='color-subtitle'>Igloo di Mario Merz</h3>
                        <p>
                            La Venaria Reale torna ad arricchire la propria collezione di arte contemporanea con il <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/mostre/igloo_di_mario_merz_alla_reggia_di_venaria' className='text-decoration-none color_link fst-italic'>Doppio Igloo di Porto</Link> (1998) di Mario Merz ospitato presso la Fontana del Cervo nella Corte d’onore.
                            L’opera, realizzata per il parco del Museu Serralves di Porto, si lega fortemente all’ambiente naturale e a quello dei Giardini della Reggia, attraverso l’impiego delle fascine ed in particolare al contesto della Fontana del Cervo, con la presenza maestosa di un cervo sulla sommità della struttura, sul cui fianco è attaccato un numero di Fibonacci di neon.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Sinergie Esapodi di Hilario Isola</h2>
                        <p>
                            Da novembre 2023 la Reggia di Venaria ha arricchito la sua collezione permanente di arte contemporanea con un intervento <i>site specific</i> realizzato dall’artista torinese <b>Hilario Isola</b> (1976). Il progetto “<Link href='/visite/piemonte/torino/reggia_di_venaria_reale/sinergie_esapodi' className='text-decoration-none color_link'>Sinergie Esapodi</Link>” 
                            prende il via con <b>due prime opere installate nel Parco Alto</b> e si completerà nella primavera del 2024 con un <b>terzo lavoro</b> che sarà ambientato nel <b>Potager Royal</b> presso la Cascina Medici del Vascello. 
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
