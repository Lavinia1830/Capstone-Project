import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Baia_di_Paraggi(props) {
    return (
        <>
            <Head title='Baia di Paraggi'/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='baia_di_paraggi' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Baia di Paraggi</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La <strong>Baia di Paraggi</strong>, situata lungo la costa ligure tra <b>Santa Margherita Ligure</b> e <Link href='/destinazioni/liguria/portofino' 
                            className='text-decoration-none color_link'>Portofino</Link>, è un luogo di straordinaria bellezza naturale e ricco di storia. Questa piccola 
                            insenatura è famosa per le sue <b>acque cristalline</b> color smeraldo, incorniciate da una rigogliosa vegetazione mediterranea.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Origini storiche</h2>
                        <p>
                            In passato, Paraggi era un tranquillo villaggio di pescatori. Tuttavia, la sua posizione strategica lungo la costa l’ha resa un punto d'interesse 
                            anche in epoche remote. Durante il <b>Medioevo</b>, la baia era utilizzata come riparo naturale per le imbarcazioni.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Sviluppo economico e culturale</h2>
                        <p>
                            Nel corso del XIX secolo, con l'avvento del turismo aristocratico, Paraggi iniziò a trasformarsi. La vicinanza a Portofino 
                            attirò <b>nobili</b> e <b>famiglie facoltose</b> che sceglievano questa località per la sua tranquillità e il paesaggio incantevole. Durante 
                            questo periodo vennero costruite ville signorili e strutture per l'accoglienza turistica.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">La pesca del corallo</h2>
                        <p>
                            Un aspetto interessante della storia di Paraggi è legato alla <b>pesca del corallo</b>, praticata nel XVII e XVIII secolo. I pescatori 
                            locali raccoglievano corallo rosso, molto richiesto nei mercati europei, contribuendo così all'economia della zona.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Paraggi oggi</h2>
                        <p>
                            Oggi la baia è famosa per il suo <b>mare protetto</b>, inserito nell'area marina di Portofino, e per le sue spiagge di rara bellezza. È una 
                            destinazione privilegiata per <b>subacquei</b> e <b>amanti dello snorkeling</b>, grazie alla ricchezza di flora e fauna marina. La sua unicità l’ha resa una meta esclusiva frequentata da personaggi famosi e turisti da tutto il mondo.
                        </p>
                        <p>
                            La <strong>Baia di Paraggi</strong> rimane uno dei gioielli più preziosi della Liguria, un luogo che combina una storia affascinante con un panorama mozzafiato e un ambiente naturale incontaminato.
                        </p>
                        
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d645.8924118169872!2d9.208441719440845!3d44.31123752994043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d49fea7eee53ad%3A0x15c9e803b8783f87!2sBaia%20di%20Paraggi!5e1!3m2!1sit!2sit!4v1731923314069!5m2!1sit!2sit"
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
