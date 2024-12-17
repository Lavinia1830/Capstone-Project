import React  from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Manarola(props) {
    return (
        <>
            <Head title='Manarola'/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='manarola' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Manarola</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Borghi</p>
                    </div>
                    <div className='margin mt-3'>
                        <p>
                            Il borgo di <strong>Manarola</strong>, parte dalle <b>Cinque Terre</b>, si stende su un grande scoglio di arenaria a ridosso del mare. 
                            Il perimetro di un antico castello del XIII secolo ormai andato distrutto è costellato da coloratissime <i>case torri</i>, affastellate 
                            l'una sull'altra.
                        </p>
                        <p>
                            L'arteria centrale è <b>via Discovolo</b>, risalendo la quale si giunge alla piazzetta, considerata il fulcro monumentale del paese, cui si 
                            affaccia la chiesa di S. Lorenzo, conosciuta anche come <b>chiesa della Natività di Maria</b> (1338), con una facciata gotica e un grange 
                            rosone in marmo di Carrara con un rilievo raffigurante il <i>Martirio di S. Lorenzo fra i Ss. Antonio abate e bernardino</i> e il 
                            polittico <i>Madonna col Bambino e santi</i> alle spalle dell'altare, entrambi quattrocenteschi e ttribuiti al maestro delle Cinque Terre.
                        </p>
                        <p>
                            Poco prima della chiesa della Natività, sempre da via Discovolo, parte un'escursione che conduce in circa un'ora do cammino a <b>Volostra</b>, 
                            piccolo borgo a circa 340 metri di altitudine. Il borgo si trova -, infatti, in cima a una collina panoramica che è raggiungibile anche in 
                            auto o prendendo dal parco il minibus. Oltre a Volastra, dal sentiero si può arrivare anche al vicino <b>santiario di Nostra Signora della Salute</b>, 
                            edificio del XII secolo in stile romanico con decorazioni gotiche.
                        </p>
                        <p>
                            <strong>Manarola</strong> è dominato dal campanile dell'<b>oratorio della confraternita della Ss. Annunziata</b> o dei Disciplinati, che si trova 
                            nella stessa piazzetta su cui si erge la chiesa di s. Lorenzo. Poco prima della chiesa, un sentiero consente di raggiungere i verdissimi terrazzamenti 
                            ricoperti di vigne e porta al <b>monte Tre Croci</b>. Da qui la vista su tutto il borgo e sul mare è unica. Inoltre, sul monte Tre Croci ogni anno si 
                            accende il <b>prespe luminoso</b> ideato da Mario Andreoli, ferroviere in pensione che nel 1961 ebbe l'idea di creare delle figure del presepe, che 
                            distribuì lungo 4.000 metri di vigneti. Da <strong>Manarola</strong> si può anche intraprendere un cammino che approda al <b>santuario di Nostra 
                            Signora della Salute</b> in un'ora circa. Dalla piazza della chiesa, inoltre, parte il <b>Sertiero Verde Azzurro</b> che 
                            collega <strong>Manarola</strong> a <Link href='/borghi/liguria/cinque_terre/corniglia' className='text-decoration-none color_link'>Corniglia</Link>.

                            
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
