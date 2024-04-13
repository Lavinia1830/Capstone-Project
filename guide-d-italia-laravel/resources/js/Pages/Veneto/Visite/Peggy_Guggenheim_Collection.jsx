import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Peggy_Guggenheim_Collection(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='peggy_guggenheim_collection' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Peggy Guggenheim Collection</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">La Collezione Peggy Guggenheim è uno dei musei più importanti di arte europea e americana del XX secolo in Italia. Ha sede a Venezia a Palazzo Venier dei Leoni, sul Canal Grande, in quella che fu l’abitazione di Peggy Guggenheim.</h2>
                    <p>
                        Il museo ospita la collezione personale di <strong>Peggy Guggenheim</strong>, ma anche i capolavori della Collezione Hannelore B. e Rudolph B. Schulhof, il giardino delle sculture e mostre temporanee. La Collezione Peggy Guggenheim fa parte della costellazione di musei della Fondazione 
                        Solomon R. Guggenheim che include il Museo Solomon R. Guggenheim di New York , il Guggenheim Museum Bilbao e il futuro museo Guggenheim Abu Dhabi.
                    </p>
                    <p>
                        La Collezione Peggy Guggenheim, nella sua sede di Venezia, è un museo di arte moderna del XX secolo. La Collezione deve il nome alla sua fondatrice,  Peggy Guggenheim (1898-1979), mecenate americana che acquistò e visse a Palazzo Venier dei Leoni, attuale sede del museo, per 
                        oltre 30 anni. La Collezione Peggy Guggenheim è proprietà della Fondazione Solomon R. Guggenheim che gestisce anche il Museo Solomon R. Guggenheim di New York.
                    </p>
                    <p>
                        Da ottobre 2012 la Collezione con sede a Venezia, raccoglie 80 opere d’arte italiana, europea e americana del secondo dopoguerra, lascito della collezionista americana Hannelore B. Schulhof e del marito Rudolph B. Schulhof alla Fondazione Solomon R. Guggenheim di New York. 
                        Nel 1948 la collezione conservata nel museo italiano fu esposta alla prima Biennale di Venezia del dopoguerra.
                    </p>
                    <p>
                        Oggi alla Collezione Peggy Guggenheim è possibile ammirare le opere di grandi maestri del Novecento tra i quali <b>Jean Arp</b>, <b>Umberto Boccioni</b>, <b>Alexander Calder</b>, <b>Marcel Duchamp</b>, <b>Max Ernst</b>, <b>René Magritte</b>, <b>Joan Miró</b>, <b>Pablo 
                        Picasso</b>, <b>Jackson Pollock</b>, <b>Germaine Richier</b>, <b>Gino Severini</b>, <b>Clyfford Still</b>, <b>Emilio Vedova</b>, e <b>molti altri artisti dell’avanguardia di quell’epoca</b>.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d781.9972090814592!2d12.330798642244211!3d45.43075848158322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1d3d3b8fec5%3A0xe3c68f64caa349ed!2sCollezione%20Peggy%20Guggenheim!5e1!3m2!1sit!2sit!4v1712993030380!5m2!1sit!2sit"
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
