import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Basilica_di_Santa_Croce(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='basilica_di_santa_croce' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Basilica di Santa Croce</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Ariosa e austera negli interni trecenteschi ed elaborata e vivace nella facciata neogotica caratterizzata da un’insolita Stella di David, la Basilica di Santa Croce a Firenze è famosa in tutto il mondo perché nei secoli è stata trasformata nel pantheon delle glorie italiche. 
                        Ma, se vi spingerete oltre lo sfarzo dei sepolcri di Galileo, Michelangelo, Dante e Alfieri, là dove i raggi del sole sono filtrati dalle strette vetrate policrome, scoprirete i sublimi affreschi di Giotto e dei suoi allievi e una magnifica cappella rinascimentale disegnata 
                        da Brunelleschi che vi lasceranno senza parole.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Basilica di S.Croce a Firenze, cosa sapere prima della visita</h2>
                    <p>
                        Progettata nel 1294 da Arnolfo di Cambio, vera e propria archistar, la chiesa di Santa Croce a Firenze è lunga 115 m, ha tre navate divise da due file di pilastri ottagonali e fu completata un secolo dopo l’inizio dei lavori; ma ci vollero altri 500 anni (1863) e un architetto 
                        ebreo, Niccolò Matas, per rivestire la facciata di marmi policromi, arricchirla di pinnacoli e coronarla con un’irrituale Stella di David.
                    </p>
                    <p>
                        Non appena i vostri occhi si saranno abituati alla luce fioca, passate in rassegna i fianchi della chiesa. Gli otto altari rinascimentali furono inseriti da Giorgio Vasari nel 1566, quando fu incaricato di ristrutturare la chiesa alla luce delle novità del Concilio di Trento. 
                        Il transetto fu eliminato, i muri furono raschiati per far sparire gli affreschi originari e in ciascuno degli arconi in pietra serena furono collocate tele di vari pittori manieristi.
                    </p>
                    <p>
                        <b>Visitare Santa Croce a Firenze</b>: il biglietto intero costa 8 euro, ma vengono attivate diverse promozioni sul sito ufficiale destinate ai nuclei familiari. Si accede su prenotazione, per agevolare il flusso di fedeli e curiosi.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1433.8027450918871!2d11.260805783553911!3d43.768592350877576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a540723ccc331%3A0x8f8279649c131255!2sBasilica%20di%20Santa%20Croce%20di%20Firenze!5e1!3m2!1sit!2sit!4v1713193041529!5m2!1sit!2sit"
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
