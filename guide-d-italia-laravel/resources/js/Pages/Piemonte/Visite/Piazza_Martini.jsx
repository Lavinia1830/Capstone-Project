import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Piazza_Martini(props) {
    return (
        <>
            <Head title="Piazza Martini"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='piazza_martini' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Piazza Martini</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La <strong>Piazza Martiri della Libertà</strong> è una delle principali piazze di <b>Novara</b>, situata nel centro storico della città. 
                            La piazza ha una <b>storia ricca</b> e significativa, riflettendo gli <b>eventi storici</b> e le <b>trasformazioni urbanistiche</b> che 
                            hanno interessato Novara nel corso dei secoli.
                        </p>
                        <p>
                            In <b>epoca medievale</b>, la zona dove sorge l'attuale piazza era occupata da un <b>mercato</b> e da una <b>piazza d'armi</b>. Con il 
                            passare del tempo, l'area ha subito diverse <b>modifiche</b> e ampliamenti, soprattutto durante il periodo del <b>Rinascimento</b> e 
                            dei <b>Borromeo</b>, quando furono costruiti edifici importanti e fu migliorata la <b>viabilità</b>.
                        </p>
                        <p>
                            Nel <b>XIX secolo</b>, durante il <b>Risorgimento italiano</b>, la piazza ha assunto un ruolo centrale come luogo di <b>comizi</b> e 
                            <b> manifestazioni politiche</b>. La piazza è stata intitolata ai "Martiri della Libertà" in onore di coloro che hanno perso la vita 
                            per l'<b>indipendenza</b> e <b>l'unità dell'Italia</b>.
                        </p>
                        <p>
                            Oggi, <strong>Piazza Martiri della Libertà</strong> è un luogo di <b>incontro</b> e <b>socializzazione</b> per i cittadini di Novara 
                            e ospita numerosi <b>eventi culturali</b> e <b>mercati</b>. Tra gli edifici di rilievo che si affacciano sulla piazza ci sono 
                            il <Link href='/visite/piemonte/novara/teatro_coccia' className='text-decoration-none color_link'>Teatro Coccia</Link>, la <b>Chiesa 
                            di San Pietro al Rosario</b> e il <b>Palazzo del Mercato</b>.
                        </p>
                        <p>
                            La piazza rappresenta quindi un <b>simbolo</b> della storia e dell'evoluzione di Novara, combinando <b>tradizione</b> e <b>modernità </b> 
                            in un contesto che continua a essere vitale per la <b>vita sociale</b> e <b>culturale</b> della città.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1266.563675692318!2d8.617033996004295!3d45.44568934170638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47865a1f573f0a85%3A0xb148332b47c47682!2sP.za%20Martiri%20della%20Libert%C3%A0%2C%2028100%20Novara%20NO!5e1!3m2!1sit!2sit!4v1716040346676!5m2!1sit!2sit"
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
