import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Ca_d_Oro(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='ca_d_oro' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Ca' d’Oro</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Un po' di storia sulla Ca’ d'Oro – Galleria Franchetti</h2>
                    <p>
                        La <strong>Ca' d’Oro</strong> è un’antica residenza nobile del 15° secolo. Giovanni e Bartolomeo Bon costruirono questo edificio nel 1442 commissionati dal Procuratore di San Marco Marino Contarini. Questo splendido palazzo veneziano è un buon esempio del cambiamento dello 
                        stile da gotico a rinascimentale. I trafori in marmo del primo e secondo piano e i parapetti delle finestre e balconi, mostrano chiaramente gli elementi del tardo gotico, mentre il colonnato rivolto verso il canale e piccole finestre quadrate sulla parte destra, permettono 
                        di vedere le forme rinascimentali.
                    </p>
                    <p>
                        Le cornici e le merlature, con le loro forme aggraziate e delicate, seguono il gusto locale veneziano e sono state successivamente imitate. Il palazzo è incompleto, manca l'ala sinistra e questo produce qualche asimmetria della facciata. L'edificio è stato acquistato anni 
                        più tardi, nel 1894, dal barone Giorgio Franchetti, che nel 1916 lo donò allo Stato italiano. Le collezioni d'arte del palazzo sono aumentate notevolmente dopo questa donazione.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Cosa è oggi la Ca’ d'Oro – Galleria Franchetti?</h2>
                    <p>
                        La <strong>Ca' d'Oro</strong> è un edificio noto a Venezia, si trova nel quartiere di Cannaregio che si affaccia sul Canal Grande. Il suo nome deriva dal fatto che in origine alcune parti della facciata erano ricoperte con finiture in oro, facendo parte di una complessa policromia 
                        che purtroppo si è persa nel corso del tempo. Tuttavia, questo edificio è considerato uno dei migliori esempi del gotico veneziano.
                    </p>
                    <p>
                        Attualmente la Ca' d'Oro, dopo un accurato restauro, è stata trasformata in un museo e ospita una preziosa collezione d'arte appartenente al barone Giorgio Franchetti.
                    </p>
                    <p>
                        In questa dimora in stile gotico veneziano si possono ammirare dipinti della scuola veneta, come il famoso San Sebastiano di Mantegna, alcune opere della scuola toscana e di quella fiamminga, meravigliosi bronzetti e sculture rinascimentali. La Ca' Duodo, annessa alla Ca' d’Oro, 
                        ospita una notevole raccolta di ceramiche rinvenute nella laguna di Venezia.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Curiosità sulla Ca’ d'Oro – Galleria Franchetti</h2>
                    <p>
                        Sapevi che nel 19 ° secolo, questo splendido palazzo divenne proprietà della ballerina Marie Taglioni? Marie procedette con la "pulizia" del luogo ordinando l'eliminazione di molte delle caratteristiche originali del palazzo.
                    </p>
                    <p>
                        Sapevi che il progetto che occupò gran parte della vita di Franchetti era al Museo di Ca' d'Oro? Fu il posto dove raccolse la sua collezione. Per fortuna o sfortuna, non è riuscito a vedere il suo sogno diventare vero.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1656.7054132789688!2d12.331935024612113!3d45.44059919694562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1dcc03a54fb%3A0x34c72653310d73ac!2sGalleria%20Giorgio%20Franchetti%20alla%20Ca&#39;%20d&#39;Oro!5e1!3m2!1sit!2sit!4v1712995059724!5m2!1sit!2sit"
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
