import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Image } from 'react-bootstrap';
import { Head, Link } from '@inertiajs/react';

export default function La_riviera_ligure_di_ponente(props) {
    return (
        <>
            <Head title='La Riviera Ligure di Ponente' />
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='la_riviera_ligure_di_ponente' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>La riviera ligure di ponente</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Costiere frastagliate, lunghe falesie, incantevoli e carattesistici borghi marinari, ognuno diverso dell'altro, ma tutti rispecciano la tipicità 
                            dello stesso paesaggio, quello della Riviera Ligure, radizionalmente suddivisa in <b>Riviera di Ponente</b> (a ovest) e <b>Riviera di Levante</b> (a 
                            est).
                        </p>
                        <p>
                            Da Genova verso la Francia, tra le province di <Link href='/destinazioni/liguria/savona' 
                            className='text-decoration-none color_link'>Savona</Link> e <Link href='/destinazioni/liguria/Imperia' 
                            className='text-decoration-none color_link'>Imperia</Link>, nel lembo di terra che separa l'Italia dal confine francese, sorgono la <b>Riviera delle 
                            Palme</b> e la <b>Riviera dei Fiori</b>, luoghi in cui magnifici borghi si alternano ad una natura verde e rigogliosa. La <b>Riviera delle 
                            Palme</b> abbraccia tutta la provincia di Savona, con <b>Verazze</b> e <b>Spotorno</b>, per oltre 1500 chilometri quadrati di costa, valli e montagne 
                            dove si vive fra il blu del mare e il verde deglio olivi e dei pini. Annoverato tra i Borghi iù Belli dl'Italia, <b>Finale Ligure</b> è costituita 
                            da <b>Finalmarina</b>, con la sua splendida passeggiata e i suoi "carruggi", eleganti negozi ed accoglienti caffè, <b>Finalpia</b> e, più 
                            all'interno, <b>Finalborgo</b> 
                        </p>
                        <p>
                            <b>Pietra Ligure</b>, cittadina marinara, è circondata dal verde delle colline e da splendite spiagge con accoglienti strutture ricettive e 
                            balneari, meta di un forte turismo interno proveniente dalle grandi città del nord Italia. Storia, arte, divertimento e mare, con fondali tutti da 
                            scoprire (soprattutto attorno l'<b>Isola Gallinara</b> che dal 1989 è riserva Naturale Regionale), fanno di <b>Albenga</b> una delle maggiori città 
                            del Ponente ligure. Come non citare, infine, <b>Alessio</b>, dal famoso muretto con le firme di tante celebrità che hanno soggiornato in questo 
                            splendito borgo, quello stesso Muretto che ha dato il nome al consorso di bellezza che ogni estate elegge le ragazza più bella.
                        </p>
                        <p>
                            L'ultimo lembo occidantale di Liguria, meglio conosciuto come <b>Riviera dei Fiori</b>, è rinomato per la mitezza del suo clima. La Riviera è 
                            costellata da gemme come <Link href='/destinazioni/liguria/sanremo' className='text-decoration-none color_link'>Sanremo</Link>, la cittadina dei fiori (da non perdere il ricco mercato), nota per il <b>Festival della canzone Italiana</b> e
                            per il <b>Casinò</b>. Sanremo offre anche un <b>panoramico campo da golf</b>. <b>Bordighera</b> è una delle più raffinate località della costa. Da 
                            qui, nelle giornate terse, si gode un panorama che spezia da <b>Arma di taggia</b> e <b>Montecarlo</b>. La città è famosa per le pietre di palma 
                            esportate anche in Costa Azzurra. Ultima località prima del confine, <b>Ventimiglia</b>, il cui centro storico custodisce tesori d'arte unici e, in
                            parte, nascosti, sulla riva sinistra del Roja.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
