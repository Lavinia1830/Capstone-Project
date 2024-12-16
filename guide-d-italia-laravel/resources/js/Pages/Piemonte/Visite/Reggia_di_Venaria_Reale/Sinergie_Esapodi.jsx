import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Sinergie_Esapodi(props) {
    return (
        <>
            <Head title="Sinergie Esapodi"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='sinergie_esapodi' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Sinergie Esapodi</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p className='fst-italic text-center'>
                            Un progetto Site Specific di Hilario Isola, nei Giardini della Reggia
                        </p>
                    </div>
                    <div className='margin mt-3'>
                        <p>
                            Da novembre 2023 la Reggia di Venaria ha arricchito la sua già cospicua collezione permanente di <b>arte contemporanea</b> con un intervento site specific realizzato dall’artista torinese <b>Hilario Isola</b> (1976) e riconducibile al tema della <b>sostenibilità</b>, elemento identitario per il Consorzio 
                            delle Residenze Reali Sabaude. 
                        </p>
                        <p>
                            Il progetto “Sinergie Esapodi” prende il via con <b>due prime opere installate nel Parco Alto</b> e si completerà nella primavera del 2024 con un <b>terzo lavoro</b> che sarà ambientato <b>nel Potager Royal</b> presso la Cascina Medici del Vascello. 
                        </p>
                        <p>
                            Le opere, viste da lontano, sembrano giganteschi disegni, mentre da vicino si rivelano essere installazioni realizzate sovrapponendo <b>sottili reti antigrandine</b>, di quelle usate in agricoltura per proteggere frutta e verdure dai chicchi di ghiaccio ed eventuali parassiti. Reti prodotte su scala 
                            industriale, tagliate, sovrapposte e cucite tra loro da Hilario Isola che, con questa tecnica insolita e geniale, crea l'immagine di un paesaggio o di un insetto ingigantito.<br/>
                            Come l'<b>Ape Regina</b> e la <b>libellula</b> (<i>Palpares Libelluloides</i>) che troviamo inseriti tra la rigogliosa vegetazione dei Giardini storici della Reggia e che diventano il simbolo di un auspicato ritorno a pratiche agricole sostenibili e che, più in generale, esprimono la necessità di riscoprire 
                            la biodiversità e le buone pratiche di una diversificazione delle culture agricole, sia per fronteggiare il cambiamento climatico in atto, sia per contrastare la crescita smisurata delle monoculture.<br/>
                            Opere, quindi, incentrate sul ruolo svolto, nella lotta biologica integrata, da parte di alcuni insetti, <i>esapodi</i>, che collaborano in sinergia all’equilibrio e al mantenimento dell’agroecosistema aumentandone la biodiversità. Da qui il titolo dell’intero progetto “Sinergie Esapodi”.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
