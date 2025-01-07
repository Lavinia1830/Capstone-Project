import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Santa_Maria_dell_Ammiraglio(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='santa_maria_dell_ammiraglio' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Santa Maria dell'Ammiraglio</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className='margin mt-3'>
                    <h2 className="color-subtitle">La chiesa conosciuta come “La Martorana”</h2>
                    <p>
                        Ubicata nel centro storico di Palermo su <b>piazza Bellini</b>, fu <b>edificata nel 1143 su volontà di Giorgio di Antiochia</b>, Grande Ammiraglio del Regno delle Due Sicilie sotto Ruggero II. Successivamente fu <b>accorpata</b> al vicino <b>convento delle suore benedettine, fondato 
                        da</b> Goffredo ed <b>Eloisa Martorana da cui</b> il nome alternativo della Chiesa, detta anche <b>la “Martorana”</b>.
                    </p>
                    <p>
                        È il <b>monumento più bizantino di Palermo</b> seppure presenti elementi prettamenti islamici.
                    </p>
                    <p>
                        La Chiesa ha una <b>pianta inscritta</b>, orientata con <b>l’abside a Est</b> e la facciata ad ovest perché si doveva pregare verso oriente, secondo il rituale <b>tipico delle chiese bizantine</b>. Il coro è retto da colonne provenienti da precedenti edifici normanni, la <b>parte 
                        superiore delle pareti e la cupola</b> sono <b>interamente ricoperte da mosaici bizantini</b>, i più antichi della Sicilia e <b>tra i più importanti al mondo</b>.
                    </p>
                    <p>
                        La Chiesa Appartiene a l’Eparchia di Piana degli Albanesi, diocesi cattolica di rito greco-bizantino della Chiesa Bizantina in Sicilia e si può assistere di frequente a celebrazioni liturgiche in albanese o greco antico.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d552.2992673525365!2d13.362540436690367!3d38.11475232650096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319e58b09b120fb%3A0xbe7b5c8233a6627b!2sChiesa%20Santa%20Maria%20dell&#39;Ammiraglio%20(Chiesa%20della%20Martorana)!5e1!3m2!1sit!2sit!4v1713523124590!5m2!1sit!2sit"
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
