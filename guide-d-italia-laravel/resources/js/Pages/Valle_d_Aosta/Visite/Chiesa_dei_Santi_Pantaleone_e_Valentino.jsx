import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Chiesa_dei_Santi_Pantaleone_e_Valentino(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='chiesa_dei_santi_pantaleone_e_valentino' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Chiesa dei Santi Pantaleone e Valentino</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        L’attuale chiesa parrocchiale risale alla prima metà del Settecento ed è stata costruita su un edificio più antico e parzialmente demolito. Si presenta a pianta rettangolare a tre navate coperte da volte a crociera e scandite da sei pilastri quadrati. Il coro, poco profondo, presenta un’abside 
                        rettilinea. Interessante l’altare maggiore, databile al XVIII secolo, in marmo nero. Da segnalare anche una tela raffigurante il martirio di San Sebastiano, opera del XVIII secolo, una singolare tela ex voto, datata 1704, che si ispira all’invasione da parte delle truppe francesi della Valle 
                        d’Aosta, invasione che risparmiò il villaggio di Courmayeur. Un’iscrizione, nella cappella situata alla sinistra del coro, ricorda il soggiorno a Courmayeur, in occasione della luna di miele, del principe Umberto di Savoia e della principessa Maria José nel 1930. All’esterno, sulla piazza, la chiesa 
                        presenta una scala a doppia rampa con un pulpito. In una nicchia realizzata con delle piccozze è posta la statua del sacerdote, alpinista e storico, abate Joseph-Marie Henry.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Il campanile</h2>
                    <p>
                        Il campanile, di cui non si conosce esattamente il periodo di costruzione, presenta però tutte le caratteristiche dei “clochers-porches” edificati tra l’XI e la fine del XII secolo. La cuspide, modificata in un secondo tempo, è a forma di tiara a ricordo, pare, del soggiorno dei papi ad Avignone. In 
                        tutta la Valle d’Aosta non c’è che il campanile di Valgrisenche, costruito nel 1392, che abbia la stessa foggia di quello di Courmayeur. La parte superiore è regolarmente scandita dagli archetti a trifora e bifore con mensola a tronco di piramide invertito. Le campane sono sette e variamente datate 
                        tra il XVI ed il XX secolo.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d673.2467536175064!2d6.972298871984041!3d45.79156476644381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4789476932388efb%3A0xc86183e412f88a51!2sChiesa%20parrocchiale%20di%20S.%20Pantaleone!5e1!3m2!1sit!2sit!4v1713874336954!5m2!1sit!2sit"
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
