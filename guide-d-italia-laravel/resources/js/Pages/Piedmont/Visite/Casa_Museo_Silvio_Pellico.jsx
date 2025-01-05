import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Casa_Museo_Silvio_Pellico(props) {
    return (
        <>
            <Head title="Casa Museo Silvio Pellico"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='casa_museo_silvio_pellico' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Casa Museo Silvio Pellico</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La <strong>casa museo di Silvio Pellico</strong> a <b>Saluzzo</b> conserva una <b>collezione eterogenea di materiali</b> che si è 
                            arricchita progressivamente a partire dal <b>nucleo originario donato nel 1858</b> dalla sorella dello scrittore, <b>Giuseppina 
                            Pellico</b>. Al <b>piano terreno</b> è stato predisposto un <b>ambiente di accoglienza</b> caratterizzato dalla <b>riproduzione 
                            dei frontespizi dei ’trattati dei Dovere degli Uomini’</b>, degli <b>scritti teatrali</b>, delle <b>lettere</b>, 
                            delle <b>poesie</b>. I <b>visitatori</b> possono esaminare il <b>cd-rom contenente la digitalizzazione di tutti i manoscritti 
                            della collezione saluzzese</b> (oltre <b>1250 pagine</b>), con la loro <b>trascrizione</b>, e il <b>dvd basato su materiale 
                            proveniente da Rai Teche</b>. L’<b>Accademia Albertina</b> è anche ideatrice di alcuni <b>importanti cartelli descrittivi</b> che 
                            soddisfano le <b>esigenze dei portatori di handicap</b>.<br/>
                            Nella <b>sala decorata in stile neoclassico del primo piano</b>, lo <b>studio-tipo di uno scrittore tra il 1830 e il 1850</b> è 
                            stato allestito integrando l’unico mobile realmente appartenuto a <b>Silvio Pellico</b>: uno <b>scrittorio</b>, i cui elementi 
                            d’arredo sono coerenti sia dal punto di vista <b>tipologico che cronologico</b>. La <b>stanza attigua</b> presenta <b>testimonianze 
                            del periodo della carcerazione</b> e <b>documenti che ricordano la fase celebrativa dello scrittore-patriota</b>. Un <b>grande 
                            dipinto di Carlo Felice Biscarra</b> intitolato ’<b>Pellico e Maroncelli lasciano le carceri di San Michele a Venezia per lo 
                            Spielberg</b>’, realizzato nel <b>1865</b>, interrompe l’ampia sequenza di riproduzioni di <b>frontespizi di edizioni de ’Le 
                            mie prigioni’</b> che testimoniano l’<b>incredibile diffusione dell’opera</b>. Sono esposti <b>numerosi preziosi manoscritti</b>, 
                            alcuni dei quali in <b>fac-simile</b>.<br/>
                            La <b>donazione di Giuseppina Pellico</b> contiene <b>ventinove traduzioni delle opere del fratello</b> che dimostrano il <b>successo 
                            editoriale</b>, ineguagliabile a nessun altro <b>autore italiano dell’Ottocento</b>, e gli <b>occhiali iconici</b> legati 
                            all’<b>immagine del personaggio</b>.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d763.7313424187948!2d7.49006141214023!3d44.64404496246349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cd4902c27e73bd%3A0x64240ae3edc466d1!2sCasa%20Museo%20Silvio%20Pellico!5e1!3m2!1sit!2sit!4v1717074202276!5m2!1sit!2sit"
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
