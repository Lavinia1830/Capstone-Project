import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';
import {Card, CardBody, CardTitle, CardText} from 'react-bootstrap';




export default function La_Reggia(props) {
  return (
    <>
        <Head title="La Reggia"/>
        <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
            <main>
                <div className='la_reggia' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>La reggia</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className='text-center color-subtitle'>
                        La Venaria Reale è un grande “progetto culturale permanente” che offre opportunità di conoscenza, emozioni ed esperienze molteplici
                    </h2>
                    <p>
                        <strong>La Venaria Reale</strong>,  grandioso complesso alle porte di Torino con 80.000 metri quadri di edificio monumentale della Reggia e 60 ettari di Giardini, beni adiacenti al seicentesco Centro Storico di Venaria ed ai 3.000 ettari 
                        recintati del Parco della Mandria, è un <b>capolavoro dell’architettura e del paesaggio</b>, dichiarato <b>Patrimonio dell’Umanità dall’Unesco</b> nel 1997 e aperto al pubblico nel 2007 dopo essere stato il cantiere di restauro più rilevante d’Europa 
                        per i beni culturali.
                    </p>
                    <p>
                        <b>L’edificio monumentale, vanta alcune delle più alte espressioni del barocco universale</b>: l'incantevole scenario della <b>Sala di Diana</b> progettata da Amedeo di Castellamonte, la solennità della <b>Galleria Grande</b> e della <b>Cappella di 
                        Sant’Uberto</b> con l’immenso complesso delle <b>Scuderie Juvarriane</b>, opere settecentesche di Filippo Juvarra, le fastose decorazioni, la spettacolare <b>Fontana del Cervo</b> nella Corte d’onore rappresentano la cornice ideale del <Link 
                        href='/visite/piemonte/torino/reggia_di_venaria_reale/la_reggia/percorso_espositivo' className='text-decoration-none color_link'>Teatro di Storia e Magnificenza</Link>, il percorso espositivo dedicato ai Savoia che accompagna il visitatore lungo quasi 2.000 
                        metri, tra piano interrato e piano nobile della Reggia.
                    </p>
                    <h3 className='fst-italic text-center color-subtitle'>La Reggia di Venaria raccoglie al suo interno un lungo percorso di visita attraverso le sue maestose sale, diversi poli espositivi per mostre temporanee e importanti opere di arte contemporanea</h3>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card style={{ width: '18rem' }}>
                        <CardBody>
                            <CardTitle className='text-center'>Breve Storia</CardTitle>
                            <CardText>Ripercorri la storia della Reggia e delle sue fasi costruttive</CardText>
                            <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/la_reggia/breve_storia' className='text-decoration-none color_link'>Scopri di più</Link>
                        </CardBody>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <CardBody>
                            <CardTitle className='text-center'>Percorso espositivo</CardTitle>
                            <CardText>Scopri Il Teatro di Storia e Magnificenza, il percorso espositivo della Reggia</CardText>
                            <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/la_reggia/percorso_espositivo' className='text-decoration-none color_link'>Scopri di più</Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    </>
    
  )
}
