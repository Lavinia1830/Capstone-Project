import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function La_Carrozza_di_Napoleone_alla_Reggia_di_Venaria(props) {
    return (
        <>
            <Head title="La Carrozza di Napoleone alla Reggia di Venaria"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='la_carrozza_di_napoleone_alla_reggia_di_venaria' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>La Carrozza di Napoleone alla Reggia di Venaria</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='text-center color-subtitle fst-italic'>
                            In occasione dell’Anniversario dei 200 anni della morte dell’Imperatore
                        </h3>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Dal 5 maggio 2021 è visitabile, presso la <b>Scuderia Grande</b> della Reggia di Venaria, la <strong>Carrozza di Napoleone</strong>, dopo gli accurati interventi di restauro del <a href='https://www.centrorestaurovenaria.it/' 
                            className='text-decoration-none color_link'>Centro Conservazione e Restauro "la Venaria Reale"</a>.
                        </p>
                        <p>
                            La carrozza venne <b>realizzata a Parigi nei primi anni del 1800</b> da <b>Jean-Ernest-Auguste Getting</b> carrozziere di Napoleone. Portata da Parigi in Italia, esposta al Museo di Marengo dal 1845 per circa un secolo, dopo diversi 
                            passaggi di proprietà e vicissitudini al limite della leggenda (tra gli altri, appartenne anche a Gustavo Adolfo Rol), dal 1955 è <b>parte del patrimonio della Fondazione Ordine Mauriziano, Palazzina di Caccia di Stupinigi</b> dove 
                            tornerà fra un paio di anni circa.
                        </p>
                        <p>
                            Con la Carrozza sono esposti <b>opere e oggetti legati alla presenza di Napoleone in Piemonte</b>, richiamando idealmente la sala napoleonica del percorso di visita permanente della Reggia.
                        </p>
                        <p>
                            Il restauro è stato deciso in concomitanza con l’<b>anniversario dei 200 anni della morte di Napoleone</b>: l’opera non era mai stata oggetto di uno studio scientifico strutturato che ha rilevato <b>scoperte interessanti ed informazioni 
                            inedite</b> sulle vicende storiche del manufatto.
                        </p>
                        <p>
                            Le fonti archivistiche e l’ampia bibliografia sulla carrozza riportavano l’indicazione di una stratificazione degli stemmi presenti sulle due portiere, sul fronte e sul retro. Gli stemmi imperiali oggi visibili furono sicuramente 
                            integrati al momento del restauro della carrozza nel 1955, prima del passaggio alla Palazzina di Caccia di Stupinigi.
                        </p>
                        <p>
                            I colori originari della carrozza dovevano essere interamente nelle tonalità dell’azzurro e dell’oro in pendant anche con i tessuti originali dell’interno della carrozza in seta e velluto. 
                        </p>
                        <p>
                            La scelta dell’attuale restauro è stata di mantenere traccia della successione di tutte le fasi della vita dell’opera: dalla prima versione decorativa alla musealizzazione come cimelio napoleonico.
                        </p>
                        <hr />
                        <p>
                            La Carrozza è stata oggetto di un accurato intervento di restauro realizzato dai Laboratori del <b>Centro Conservazione e Restauro “La Venaria Reale”</b> e cofinanziato con il contributo di 25.000 euro da parte del <b>Consorzio delle Residenze 
                            Reali Sabaude</b>, sotto l’alta sorveglianza della <b>Soprintendenza Archeologia, belle arti e paesaggio per la città metropolitana di Torino</b>.
                        </p>
                        <p>
                            <i>Esposizione a cura di</i> <b>Silvia Ghisotti</b>, capo conservatore Consorzio Residenze Reali Sabaude, e <b>Andrea Merlotti</b>, direttore Centro Studi Consorzio Residenze Reali Sabaude, <i>con la collaborazione di</i> <b>Paolo Palumbo</b>, 
                            delegato per la Città di Torino di “Souvenir Napoléonien”.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
