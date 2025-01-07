import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Palazzo_Ducale(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='palazzo_ducale_venezia' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Palazzo Ducale</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Un po' di storia sul Palazzo Ducale</h2>
                    <p>
                        Il <strong>Palazzo Ducale</strong> è stato probabilmente costruito tra i secoli X e XI sulla base di un nucleo centrale fortificato. Questo nucleo era composto da un corpo centrale con torri angolari che formano un capolavoro del gotico veneziano. Nel XII secolo fu effettuata 
                        la prima ristrutturazione con il doge Sebastiano Ziani che trasformò la fortezza in un elegante palazzo. Successivamente nel 1200 è stata realizzata una nuova estensione.
                    </p>
                    <p>
                        Tra il 1339 e il 1342 durante il regno di Bartolomeo Gradenigo, il palazzo ha cominciato ad assumere la sua forma attuale. Il Doge Francesco Foscari estese il palazzo nel 1424 fino ad arrivare a fianco della Basilica di San Marco. Nel 1442 gli architetti Giovanni Bon e 
                        Bartolomeo Bon della Porta aggiunsero la Porta della Carta. L'interno ospita gli appartamenti del Doge ed è stata costruita dall'architetto Antonio Rizzo dopo l'incendio del 1483. Durante tutto il XVI secolo, si sono verificati diversi incendi devastanti alternati a 
                        ristrutturazioni e abbellimenti come la Scala dei Giganti e la creazione del suo tesoro principale: la Crocifissione di Tintoretto, dipinta per sostituire un murale danneggiato dal fuoco.
                    </p>
                    <p>
                        Nei primi anni del XVII secolo, l'architetto Antonio Contin, ha aggiunto le Prigioni Nuove al di là del canale collegandole al palazzo con il Ponte dei Sospiri, da dove i detenuti passavano nel loro cammino verso le nuove carceri. Nel 1797, dopo la caduta della Repubblica 
                        di Venezia, il palazzo fu adattato per ospitare gli uffici amministrativi. Il carcere, chiamato i Piombi dal rivestimento del tetto, continuò a mantenere la sua vecchia funzione. Dopo l'annessione di Venezia al Regno d'Italia, il palazzo subì varie ristrutturazioni fino 
                        al 1923, quando fu destinato a diventare uno dei più importanti musei di Venezia.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.4163825291175!2d12.338629805521599!3d45.43342447256895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1d76e418489%3A0xb809d204dcca74d1!2sPalazzo%20Ducale!5e1!3m2!1sit!2sit!4v1712937870915!5m2!1sit!2sit"
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
