import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Gallia_Cisalpina(props) {
    return (
        <>
            <Head title="Gallia Cisalpina"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='gallia_cisalpina' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Gallia Cisalpina</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <strong>Gallia Cisalpina</strong>, conosciuta anche come <b>Gallia Citeriore</b>, era una regione dell'<b>Italia settentrionale</b> abitata da 
                            popolazioni celtiche, chiamate <b>Galli</b>. Il termine "Cisalpina" significa "al di qua delle Alpi", in riferimento alla posizione della 
                            regione rispetto a <Link href='/destinazioni/lazio/roma' className='text-decoration-none color_link'>Roma</Link>. Questa regione copriva 
                            approssimativamente l'area degli attuali <Link href='/piemonte' className='text-decoration-none color_link'>Piemonte</Link>, <Link href='/lombardia'
                            className='text-decoration-none color_link'>Lombardia</Link>, <Link href='/emilia_romagna' className='text-decoration-none 
                            color_link'>Emilia-Romagna</Link>, <Link href='/veneto' className='text-decoration-none color_link'>Veneto</Link> e <Link href='/friuli_venezia_giulia'
                            className='text-decoration-none color_link'>Friuli-Venezia Giulia</Link>.
                        </p>
                        <p>
                            La <strong>Gallia Cisalpina</strong> fu abitata dai Celti a partire dal IV secolo a.C. e rimase sotto il controllo delle tribù galliche fino 
                            alla conquista romana. La regione fu annessa da <b>Roma</b> durante il III secolo a.C., dopo una serie di conflitti noti come le <b>guerre galliche</b>. 
                            Una volta sottomessa, divenne una provincia romana, inizialmente con una certa autonomia locale, ma poi fu integrata sempre più strettamente 
                            nell'amministrazione romana.
                        </p>
                        <p>
                            Durante il periodo repubblicano, la <strong>Gallia Cisalpina</strong> era un importante centro agricolo e commerciale. La costruzione di strade romane, 
                            come la <b>Via Emilia</b>, contribuì allo sviluppo economico e alla romanizzazione della regione. Molte città della Gallia Cisalpina, 
                            come <Link href='/destinazioni/lombardia/milano' className='text-decoration-none color_link'>Mediolanum</Link> (Milano), <Link href='/destinazioni/lombardia/brescia'
                            className='text-decoration-none color_link'>Brixia</Link> (Brescia) e <Link href='/destinazioni/emilia_romagna/bologna' className='text-decoration-none 
                            color_link'>Bononia</Link> (Bologna), divennero importanti centri urbani sotto il dominio romano.
                        </p>
                        <p>
                            Nel 42 a.C., dopo la battaglia di <b>Filippi</b>, la Gallia Cisalpina fu completamente incorporata nel territorio italiano e perse il suo status di 
                            provincia separata. La regione continuò a prosperare sotto il <b>principato</b> e contribuì significativamente alla cultura e all'economia 
                            dell'<b>Impero Romano</b>.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
