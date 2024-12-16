import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Forte_di_Bard(props) {
    return (
        <>
            <Head title="Forte di Bard"/> 
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='forte_di_bard' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Forte di Bard</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il Forte si staglia in mezzo ai ripidi versanti della gola di Bard su un impervio poggio roccioso e si compone di quattro corpi principali (detti Opere per utilizzare la terminologia dell’architettura militare), posti a diversi livelli tra i 400 e i 467 metri di altitudine. 
                            La fortezza venne molto probabilmente utilizzata a scopi difensivi fin dall’antichità. La prima testimonianza di una struttura fortificata risale all’XI secolo, ma la vera e propria fortezza vide la luce solo nel XII secolo. Dal 1242, cacciati i signori di Bard, passò ai 
                            conti di Savoia. Nel 1800 il Forte di Bard fece da ostacolo alla marcia di Napoleone Bonaparte e dei suoi 40.000 uomini scesi dal Gran San Bernardo per dilagare nella pianura Padana. Napoleone, sulla via del ritorno in Francia da Marengo, fece radere al suolo la fortezza. 
                            Venne ricostruito tra il 1830 e il 1838 dall’ingegnere militare Francesco Antonio Olivero. <b>L’Opera Carlo Alberto</b> è la più alta e imponente tra le strutture e accoglie il <b>Museo delle Alpi</b>, esposizione multimediale e scientifica che illustra il territorio alpino, 
                            con le sue caratteristiche morfologiche, naturalistiche, geologiche e climatiche e i mutamenti subiti nel corso del tempo. Sempre nell’Opera Carlo Alberto, si possono visitare le <b>prigioni</b>, 24 anguste celle di isolamento, sede di un’esposizione multimediale che tratta 
                            dei celebri prigionieri transitati nel forte, tra cui Camillo Benso Conte di Cavour. Nell’<b>Opera di Gola</b> si svolgono concerti e manifestazioni, l’<b>Opera Vittorio</b>, posta al livello mediano della fortezza, ospita <b>Le Alpi dei ragazzi</b>, lo spazio preferito dai 
                            più giovani che qui possono scoprire la montagna valdostana divertendosi. L’<b>Opera Ferdinando</b>, ai piedi del forte, ospita il <b>Museo delle Frontiere</b>, che racconta la storia delle Alpi occidentali e dei rapporti fra i popoli che le hanno abitate, e il <b>Museo del 
                            Forte e delle Fortificazioni</b>, dedicato all’evoluzione nei secoli delle opere di difesa, soprattutto nelle zone di montagna.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1966.4584287030339!2d7.742933911179827!3d45.608415123122654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478895d19ade71c9%3A0x4ea4795f2aa00772!2sForte%20di%20Bard!5e1!3m2!1sit!2sit!4v1713779357795!5m2!1sit!2sit"
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
        </>
        
    )
}
