import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';

export default function Castello_della_Contessa_Adelaide(props) {
    return (
        <>
            <Head title="Castello della Contessa Adelaide"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='castello_della_contessa_adelaide' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello della Contessa Adelaide</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il <strong>Castello della Contessa Adelaide</strong> si trova a <b>Susa</b>, in <Link href='/piemonte' className='text-decoration-none color_link'>Piemonte</Link>, 
                            ed è uno dei <b>monumenti</b> storici più importanti della <b>Val di Susa</b>. Fu costruito nel <b>XI secolo</b> e prende il nome da <b>Adelaide di Susa</b>, 
                            una delle figure più influenti del suo tempo.
                        </p>
                        <p>
                            La <b>Contessa Adelaide</b> era una <b>nobile potente</b> e <b>stratega politica</b>, nota per la sua intelligenza e abilità nel gestire i <b>territori</b>. 
                            Sposò <b>Oddone di Savoia</b>, unendosi così alla <b>famiglia Savoia</b> e consolidando il potere della casata. Il <b>castello</b> divenne una delle sue residenze 
                            principali e un centro di <b>potere</b> e <b>amministrazione</b>.
                        </p>
                        <p>
                            Nel corso dei secoli, il <b>castello</b> ha subito numerosi <b>rimaneggiamenti</b> e <b>restauri</b>, ma conserva ancora molti elementi <b>originali</b>. Oggi, 
                            il Castello della Contessa Adelaide è una <b>meta turistica</b> popolare, offrendo una vista panoramica sulla <b>valle</b> e 
                            ospitando <b>mostre</b> ed <b>eventi culturali</b>.
                        </p>
                        <p>
                            La <b>struttura</b> del castello è imponente, con <b>mura spesse</b> e <b>torri</b> di avvistamento che testimoniano la sua <b>importanza strategica</b> nel 
                            passato. All'interno, si possono ammirare <b>affreschi</b>, <b>arredi</b> d'epoca e altre testimonianze della vita della contessa e del suo tempo.
                        </p>
                        <p>
                            Il <strong>Castello della Contessa Adelaide</strong> non è solo un simbolo della <b>storia medievale</b> italiana, ma anche un esempio della <b>fortezza</b> e 
                            del <b>carisma</b> di una delle <b>donne più influenti</b> della storia europea.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d636.7501014913635!2d7.043588893082774!3d45.13591856576985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4789b71ecc96ed23%3A0x660d0648fc2e115f!2sCastello%20della%20Contessa%20Adelaide!5e1!3m2!1sit!2sit!4v1716818088796!5m2!1sit!2sit"
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
