import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
export default function Teatro_Massimo(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='teatro_massimo' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>teatro Massimo</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className='margin mt-3'>
                    <h2 className="color-subtitle">Il più grande teatro lirico d’Italia</h2>
                    <p>
                        Si tratta del <b>più grande edificio teatrale lirico d’Italia</b>, terzo per grandezza dopo l’Opera di Parigi e la Staatsoper di Vienna. Il complesso architettonico è di notevoli dimensioni e le sale, le gallerie e le eleganti scale monumentali che lo attraversano lo rendono una 
                        vera e propria attrazione da visitare realizzata da Giovan Battista Filippo Basile e il figlio Ernesto. Dal sipario dipinto da Sciuti, agli specchi antichi, ai lampadari di Murano, il teatro si distingue oltre che per grandezza anche per raffinatezza ed eleganza. Dagli ornamenti 
                        dorati alle poltrone di broccato rosso, agli specchi antichi, ai lampadari di Murano, il teatro si distingue oltre che per grandezza anche per raffinatezza ed eleganza. Tra le sue sale merita un focus <b>la Sala Grande del teatro</b>, nota per la sua <b>perfetta acustica</b> e 
                        per la <b>Ruota Simbolica</b>, capolavoro artistico e d’ingegno, affrescato da Luigi di Giovanni. La ruota è costituita da undici pannelli trapezoidali di pitture su tela, disposte a ruota intorno a un tondo centrale dove è raffigurato il Trionfo della Musica. Attraverso un sistema 
                        di funi, i pannelli si possono aprire verso l’alto in modo che l’aria calda possa defluire e permettere la ventilazione della sala. Il Palco reale vi abbaglierà con le sue poltrone in broccato rosso e ornamenti dorati, precedute da una raffinatissima anticamera affrescata da Ettore 
                        De Maria Bergler. Il Teatro Massimo è luogo d’eccellenza per la stagione di <b>opera lirica</b>, <b>balletto</b> e <b>concerti di musica classica</b> a cui si affiancano <b>attività formative per le scuole</b> e possibilità di <b>visite guidate</b>.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1313.4995369236863!2d13.356627912743763!3d38.120139433160055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319e5f58244ce49%3A0x8eecc03c703a402d!2sTeatro%20Massimo%20Vittorio%20Emanuele%20di%20Palermo!5e1!3m2!1sit!2sit!4v1713456328144!5m2!1sit!2sit"
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
