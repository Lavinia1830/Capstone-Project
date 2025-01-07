import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';


export default function Battistero(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='battistero' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Battistero</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Il <strong>Battistero di San Giovanni</strong> a Firenze è l’edificio più antico di tutto il complesso di Santa Maria del Fiore e, nonostante la semplicità della decorazione esterna che segna il primo esempio di romanico fiorentino, probabilmente anche il più suggestivo. A pianta ottagonale e coperto 
                        da un’aguzza cupola a spicchi, il battistero di Firenze intitolato al santo patrono della città ha un’origine tuttora molto di battuta. Secondo alcuni storici questo luogo di culto, nel quale tra gli altri fu battezzato anche Dante, sarebbe stato edificato in epoca paleocristiana sui resti di un tempio 
                        pagano dedicato a Marte (più o meno nel IV secolo d.C.); secondo altri, invece, la costruzione sarebbe da spostare intorno all’anno Mille. Rimane il fatto che a Firenze, il Battistero è uno dei monumenti più amati, sentiti e visitati.
                    </p>
                    <p>
                        Il rivestimento perimetrale in marmo bianco e verde, posato a metà del XII secolo, è ritmato da tre fasce orizzontali con disegni geometrici, archi ciechi a tutto sesto e piccole finestre che illuminano l’ambiente liturgico. Dopo aver girato intorno alla struttura, fermatevi ad ammirare le tre porte 
                        bronzee (una delle più amate è la porta nord del Battistero di Firenze) decorate tra il 1329 e il 1452 da Andrea Pisano e Lorenzo Ghiberti con le scene dell’Antico e del Nuovo Testamento. L’interno del Battistero di Firenze, poi, è una rara mescolanza di elementi della tradizione islamica (il pavimento 
                        intarsiato con i segni zodiacali) e bizantina. Le pareti del Battistero di San Giovanni sono percorse da colonne e pannelli che richiamano la decorazione esterna, mentre la cupola – che sembra poggiare sul matroneo – e l’abside sono ricoperti da un impressionante ciclo di mosaici dorati tardo 
                        duecenteschi, opera di artigiani veneziani, che rappresentano il Giudizio Universale, la Vita di Gesù e altre scene bibliche. Nel caso in cui lo abbiate fotografato, ma non sappiate a chi è dedicato, il monumento funebre a destra dell’abside custodisce il corpo dell’antipapa Giovanni XXIII ed è opera 
                        di Donatello. Dopo questo tour, avrete un’unica certezza: San Giovanni a Firenze rimane un gioiello, da qualsiasi lato si guardi.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d852.4807329941731!2d11.254166926135156!3d43.77304582094994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5403bff30525%3A0x74a3341bfd1857d!2sBattistero%20di%20San%20Giovanni!5e1!3m2!1sit!2sit!4v1713191194696!5m2!1sit!2sit"
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
    )
}
