import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Fontana_di_Nettuno(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='fontana_del_nettuno' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Fontana del Nettuno</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        La fontana del Nettuno, fu costruita su progetto dell’Architetto Francesco Giongo da Lavarone, nella seconda metà del XVIII secolo; con la sua connotazione barocca, costituisce un elemento di arredo urbano fortemente scenografico, al centro di Piazza Duomo.
                    </p>
                    <p>
                        La fontana, oltre ad emergere da un punto di vista artistico, era destinata a portare acqua salubre alla cittadinanza; contemporaneamente alla sua costruzione, procedettero i lavori per il suo approvvigionamento idrico, che prevedevano l’allacciamento a fonti di zone diverse 
                        (ad altitudini adeguate), con studi e opere per la depurazione delle acque convogliate alla fontana.
                    </p>
                    <p>
                        La dedica alla divinità delle acque, Nettuno, è presumibilmente riferibile al nome latino di Trento “Tridentum”, che richiama il simbolo del dio, il tridente.
                    </p>
                    <p>
                        La struttura della fontana, in pietra rossa, con scalinata poligonale, vasche, stelo e mensole, fu realizzata dal Giongo, mentre la statua del Nettuno, i tritoni, i cavalli marini e gli altri gruppi statuari, furono scolpiti da Stefano Salterio da Laglio (Como) in pietra bianca e 
                        grigia.
                    </p>
                    <p>
                        Nella seconda metà del secolo XIX lo scultore trentino Andrea Malfatti effettuò un restauro, considerato lo stato di degrado delle sculture. La statua originale del Nettuno si trova nel cortile di Palazzo Thun, sede del Municipio; l’attuale Nettuno invece è un’opera in bronzo, 
                        creata nel 1942. A Elberfeld, in Germania, esiste una copia della fontana, realizzata nel 1895 dallo scultore Leo Müsch.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d819.1012654268405!2d11.120910175229!3d46.06737587463619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478271006fa50b29%3A0x4b05e826cf895f2e!2sFontana%20del%20Nettuno!5e1!3m2!1sit!2sit!4v1712928916499!5m2!1sit!2sit"
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
