import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Cittadellarte(props) {
    return (
        <>
            <Head title="Cittadellarte - Fondazione Pistoletto"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='cittadellarte' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Cittadellarte - Fondazione Pistoletto</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <strong>Cittadellarte – Fondazione Pistoletto</strong> è un luogo dove convergono artisti, scienziati, attivisti, imprenditori, studiosi, amministratori, coltivatori, designer, architetti, medici e 
                            rappresentanti del mondo istituzionale, <b>una città dell’arte</b>, dove l’arte è vissuta e insegnata come strumento di <b>trasformazione della società in senso responsabile</b>.
                        </p>
                        <p>
                            Il nome Cittadellarte incorpora tre significati: quello di <b>cittadella</b>, ovvero un’area in cui l’arte è protetta e ben difesa.
                        </p>
                        <p>
                            Quello di <b>città</b>, che corrisponde all’idea di apertura e interrelazione complessa con il mondo. E quello di civitas, <b>civiltà</b> allargata, mondiale, cosmopolita.
                        </p>
                        <p>
                            Cittadellarte, soprattutto, è un <b>laboratorio-scuola</b> dedicato allo studio, alla sperimentazione e allo sviluppo di <b>pratiche</b> che traducono in realtà il simbolo del Terzo Paradiso.
                        </p>
                        <p>
                            Questo percorso di <b>digitalizzazione</b> ci permetterà di raggiungere un pubblico più <b>vasto</b> e di <b>preservare</b> l’<b>eredità</b> di <b>FILA</b> per le generazioni future. Continueremo a impegnarci 
                            nella <b>ricerca</b>, nella <b>conservazione</b> e nella <b>promozione</b> della <b>cultura d’impresa</b>, garantendo che la <b>storia</b> di <b>FILA</b> rimanga <b>viva</b> e <b>ispiratrice</b> nel tempo.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">La Storia</h2>
                        <p>
                            <b>1991</b> Trovandosi a Biella per l’inaugurazione di una mostra di sue opere, Michelangelo Pistoletto vede una fabbricato bianco, un opificio dismesso, e decide di comprarlo per dare un luogo a quello che 
                            alcuni consideravano “non luogo”, cioè Utopia. Dare luogo a un’utopia significa negarla, e affermare invece un Progetto. L’ex Lanificio Trombetta diviene sede dell’Associazione per una Fondazione Pistoletto.
                        </p>
                        <p>
                            <b>1991-1997</b> Lavori di restauro del fabbricato. Si organizzano eventi, performance (spesso in collaborazione con Stalker Teatro) e incontri.
                        </p>
                        <p>
                            <b>1994</b> Pubblicazione di Progetto Arte, manifesto con il quale Pistoletto propone un nuovo ruolo per l’artista: quello di porre l’arte in diretta interazione con tutti gli ambiti dell’attività umana che 
                            formano la società.
                        </p>
                        <p>
                            <b>1998</b> Viene organizzata la prima edizione di <i>ARTE</i> al <i>CENTRO</i> di una trasformazione sociale responsabile. Rassegna di mostre, incontri e seminari che raccontano pratiche artistiche di 
                            trasformazione dei contesti sociali in cui si sviluppano, realizzate da Cittadellarte e dalla rete internazionale di collaborazioni. Da allora Fondazione Pistoletto celebra nuovi artisti e nuove opere attraverso 
                            un rassegna annuale.
                        </p>
                        <p>
                            <b>1998</b> L’associazione si trasforma in Fondazione, “con lo scopo di sviluppare l’opera di Pistoletto e di creare situazioni di coinvolgimento tra arte e società”.<br/>
                            Viene così istituita Cittadellarte come attuazione del Manifesto Progetto Arte.
                        </p>
                        <p>
                            <b>1999</b> Nasce Unidee (Università delle Idee di Cittadellarte) come esperienza di residenza artistica a Cittadellarte per sviluppare progetti artistici per una trasformazione sociale responsabile.
                        </p>
                        <p>
                            <b>2000</b> Paolo Naldini e Armona Pistoletto, dall’Inghilterra, vengono ad abitare a Cittadellarte con Michelangelo e Maria, e Salvatore. Stagisti e collaboratori condividono questa stagione di avvio dei programmi 
                            e di definizione in progress della filosofia del luogo, insieme ad artisti, curatori, imprenditori e filosofi di diversi paesi del mondo.
                        </p>
                        <p>
                            <b>2003</b> Viene creata l’associazione culturale Love Difference, Movimento Artistico per una Politica InterMediterranea, che mira ad attivare una rete di cooperazione tra istituzioni, artisti, architetti e ricercatori 
                            dei singoli Paesi dell’area mediterranea, finalizzata allo sviluppo di progetti artistici a favore di una trasformazione sociale responsabile. Il progetto nasce con l’opera “Tavolo Love Difference” di Michelangelo 
                            Pistoletto (2003-2007).
                        </p>
                        <p>
                            <b>2004</b> L’Università di Torino (Prof. Walter Santagata) conferisce a Pistoletto la laurea honoris causa in Scienze Politiche. In tale occasione l’artista annuncia quella che costituisce la fase più recente del suo 
                            lavoro, denominata Terzo Paradiso.
                        </p>
                        <p>
                            <b>2005</b> Il <i>Terzo Paradiso</i> viene presentato quale evento nell’ambito dalla 51a Biennale di Venezia attraverso la mostra “<b>L’isola interiore: arte della sopravvivenza</b>”, curata da Achille Bonito Oliva, nel 
                            corso della quale sono organizzati eventi, incontri e workshop. Paolo Naldini sviluppa i rapporti con il movimento della cultura libera e dell’open source. Partecipazione, tra gli altri, di Gilberto Gil in qualità sia di 
                            musicista sia di Ministro della Cultura del Brasile.
                        </p>
                        <p>
                            <b>2005</b> Il punto ristoro interno a Cittadellarte, sino ad allora aperto solo ai cittadini e ai residenti, apre le proprie porte al pubblico, sviluppando una cucina creativa e sostenibile, utilizzando esclusivamente 
                            prodotti provenienti dalla Filiera Corta e nel rispetto dell’ambiente e della microeconomia del territorio.
                        </p>
                        <p>
                            <b>2008</b> Dall’ufficio architettura prende vita il progetto n.o.v.a civitas, Nuovi Organismi di Vita Abitativa, che lavora sulla progettazione architettonica, di costruzione e commercializzazione di prodotti e materiali 
                            di origine naturale o riciclati.
                        </p>
                        <p>
                            <b>2009</b> Si inaugura l’officina operativa del progetto Cittadellarte Fashion – Bio Ethical Sustainable Trend, un’officina operativa che si dedica allo sviluppo della sostenibilità bio-etica nell’ambito del settore tessile. 
                            Nasce dalla contaminazione fra l’arte che si assume una responsabilità sociale e quel mondo della moda che cerca un nuovo modello di sviluppo etico e sostenibile.
                        </p>
                        <p>
                            <b>2012</b> Viene avviato il progetto Rebirth Day, prima giornata universale della rinascita per celebrare il Terzo Paradiso.<br/>
                            Paolo Naldini propone il concetto, il neologismo e il progetto della Demopraxia, pubblicato per la prima volta nel testo di apertura del Giornalino di Arte al Centro 2012 e nel catalogo della mostra “Cittadellarte. Sharing 
                            Transformation” inaugurata a Kunsthaus Graz il 21/09/2012.
                        </p>
                        <p>
                            <b>2012</b> Pubblicazione del Manifesto per la Sostenibililtà della Moda Italiana, a cura della Camera Nazionale della Moda Italiana; collaborazione con Cittadellarte, Ufficio Moda.
                        </p>
                        <p>
                            <b>2013</b> Con la mostra “Annèe 1, Le Paradis sur Terre” il Louvre, Parigi, si apre all’arte contemporanea e sancisce il Simbolo del Terzo Paradiso come Simbolo universale.
                        </p>
                        <p>
                            <b>2014</b> All’interno degli spazi di Cittadellarte, a cura di Armona Pistoletto, è stato attivato un Coworking, luogo per creativi e professionisti, dove le competenze di ognuno si completano a vicenda.
                        </p>
                        <p>
                            <b>2014</b> Cittadellarte apre le porte per ospitare per la prima volta la Giornata dell’Arte, organizzata dai giovani studenti della consulta degli istituti superiori di Biella.
                        </p>
                        <p>
                            <b>2014</b> Dall’ufficio nutrimento di Cittadellarte (Armona Pistoletto) nasce l’associazione Let Eat Bi – Il Terzo Paradiso in Terra Biellese, con l’obiettivo di aggregare, promuovere e contribuire a organizzare risorse e attività 
                            operanti sul territorio biellese, in particolare nel settore agroalimentare.
                        </p>
                        <p>
                            <b>2014</b> Avvio (Naldini e Olga Pirazzi) della collaborazione con UNECE – United Nations Economic Commission for Europe, in particolare legata al tema della Moda Sostenibile.
                        </p>
                        <p>
                            <b>2014</b> Su impulso di Paolo Naldini, con Juan Sandoval e Armona Pistoletto, Unidee, l’università delle Idee di Cittadellarte amplia le sue attività e si trasforma in un programma formativo aperto che si articola in una struttura 
                            dinamica e flessibile di moduli residenziali con durata settimanale, finalizzati a promuovere e accompagnare una (ri)localizzazione delle pratiche artistiche partecipative nei contesti locali. Si tiene il Workshop internazionale 
                            <i>Socially Engaged Art Practices and Education in contemporary discourse</i>.
                        </p>
                        <p>
                            <b>2015</b> Viene inaugurata la sede del Terzo Paradiso a Biella. Restauro avvenuto grazie al contributo del Comitato per il Terzo Paradiso biellese.
                        </p>
                        <p>
                            <b>2015</b> Apre a Cuba il 1° Forum Rebirth che segna l’inizio di un workshop permanente di arte e politica a Cuba, sviluppato in linea con i 17 Obiettivi di Sviluppo Sostenibile dichiarati delle Nazioni Unite. Questo forum apre la strada a 
                            successivi appuntamenti in diversi stati, tra cui a Milano (2016 e 2017), Parma (2016), Melbourne (2017), Tirana (2017), Avana (2017).
                        </p>
                        <p>
                            <b>2015</b> nascita B.E.S.T. Studios, un nuovo laboratorio di progettazione, sviluppo, produzione, distribuzione di idee e prodotti nell’ambito tessile e fashion design.
                        </p>
                        <p>
                            <b>2017</b> Nasce il Journal di Cittadellarte, primo giornale web della Fondazione. Il Journal si rivolge a chi vuole informarsi sulle attività, i progetti e le “visioni” di Cittadellarte. Il giornale prende il nome da una storica pubblicazione 
                            cartacea che per molti anni ha accompagnato le attività di Cittadellarte.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983.8784720202785!2d8.054270852386146!3d45.57136425732977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478620e4c25df75f%3A0x6cf63217ea47634c!2sCittadellarte%20-%20Fondazione%20Pistoletto!5e1!3m2!1sit!2sit!4v1716285165425!5m2!1sit!2sit"
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
