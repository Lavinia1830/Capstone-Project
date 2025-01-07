import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Galleria_Umberto_I(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='galleria_umberto_1' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Galleria Umberto I</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        La zona su cui sorge la galleria era già intensamente urbanizzata nel XVI secolo ed era caratterizzata da un groviglio di strade parallele raccordate da brevi vicoli, che da via Toledo sboccavano di fronte a Castel Nuovo. Questi vicoli godevano di cattiva fama in quanto vi si trovavano 
                        taverne (famigerata era la taverna della Cagliantese o Cagliantesa), case di malaffare e vi si consumavano delitti di ogni genere. La fama conquistata dalla zona nei secoli, già nota a Giambattista Basile che immortalò le donne di malaffare del luogo nella sua opera Le muse napolitane, 
                        si mantenne per quasi tutto l'Ottocento.
                    </p>
                    <p>
                        Negli anni ottanta del XIX secolo il degrado del luogo toccò punte estreme: nei vicoli si ergevano edifici a sei piani, la situazione igienica era pessima e non fa meraviglia che tra il 1835 ed il 1884 in questa area si fossero verificate ben nove epidemie di colera. Sotto la spinta 
                        dell'opinione pubblica, dopo l'epidemia del 1884 si cominciò a considerare un intervento governativo.
                    </p>
                    <p>
                        Nel 1885 fu approvata la legge per il risanamento della città di Napoli (quel periodo fu appunto detto "del risanamento"), grazie alla quale la zona di Santa Brigida ricevette una nuova definizione territoriale. Furono presentate varie proposte, il progetto che risultò vincente fu quello 
                        dell'ingegner Emmanuele Rocco, poi ripreso da Antonio Curri ed ampliato da Ernesto di Mauro successivamente. Tale progetto prevedeva una galleria a quattro braccia che si intersecavano in una crociera ottagonale coperta da una cupola. Le demolizioni degli edifici preesistenti (ad esclusione 
                        del palazzo Capone)[1] iniziarono il 1º maggio 1887 ed il 5 novembre dello stesso anno fu posta la prima pietra dell'edificio. Nel giro di tre anni, precisamente il 19 novembre 1890, la nuova galleria veniva inaugurata.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d751.0675688244934!2d14.24917637138627!3d40.83853950456678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b09419c1482dd%3A0xde77ee3be1522c3a!2sGalleria%20Umberto%20I!5e1!3m2!1sit!2sit!4v1713358106567!5m2!1sit!2sit"
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
