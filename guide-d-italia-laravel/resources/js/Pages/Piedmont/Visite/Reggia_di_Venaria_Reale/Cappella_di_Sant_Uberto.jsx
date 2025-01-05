import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import Gianni_cappella_di_sant_uberto_palazzo_reale from '../../../../../assets/Piemonte/Gianni_cappella_di_sant_uberto_reggia_reale_Torino_Piemonte.jpg';
import { Image } from 'react-bootstrap';

export default function Cappella_di_Sant_Uberto(props) {
    return (
        <>
            <Head title="Cappella di Sant'Uberto"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='cappella_di_sant_uberto' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Cappella di Sant'Uberto</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='text-center color-subtitle fst-italic'>
                            Insieme alla Galleria Grande, un altro capolavoro di Filippo Juvarra alla Venaria è la Cappella di Sant’Uberto, titolata al santo protettore dei cacciatori come rimando alla destinazione venatoria della residenza.
                        </h3>
                        <Image src={Gianni_cappella_di_sant_uberto_palazzo_reale} className='mx-auto w-50'/>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Voluta da Vittorio Amedeo II, fu iniziata nel 1716 e ultimata nel 1729. Juvarra concepì per la sacra struttura maestose volumetrie disposte intorno ad un impianto a croce greca smussata, con due grandi altari ai lati del transetto e 
                            quattro cappelle circolari all’interno e poligonali all’esterno, poste sulle diagonali.
                        </p>
                        <p>
                            Le numerose fastose decorazioni arricchiscono all’interno i sapienti contrasti di luce rendendo l’ambiente davvero unico.
                        </p>
                        <p>
                            Il vero “protagonista radioso” della Cappella è l’<b>altare maggiore</b>, opera di Giovanni Baratta, che si presenta come sospeso, quasi incorniciato dal fascio di luce che da sfondo al tabernacolo retto da angeli marmorei. L’altare 
                            si sviluppa in senso verticale collocandosi tra le due colonne centrali della conca realizzata dall’abside.
                        </p>
                        <p>
                            La luce, che entra copiosa dalle alte vetrate retrostanti, evidenzia la forma frastagliata dell’altare e ne moltiplica i toni ed i colori.
                        </p>
                        <p>
                            Sempre di Baratta sono le <b>quattro statue dei Dottori della Chiesa</b>, poste nelle nicchie dei pilastri centrali: Sant’Agostino, Sant’Ambrogio, Sant’Atanasio e San Giovanni Crisostomo.<br/>
                            Agli altari laterali si trovano le quattro grandi pale opera di affermati pittori di scuola romana.
                        </p>
                        <p>
                            I collegamenti della Cappella con la Reggia, lasciati incompiuti da Juvarra, vennero portati a termine sotto Carlo Emaneuele III da Benedetto Alfieri, cui si deve anche lo scenografico scalone monumentale che sale alle tribune 
                            della Cappella.
                        </p>
                        <p>
                            Nell'autunno del 2019 è stata riaperta la <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/la_sacrestia_rinnovata' className='text-decoration-none color_link'>Sacrestia della Cappella di 
                            Sant’Uberto</Link> con un rinnovato allestimento che ne esalta la sacralità e la funzione.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
