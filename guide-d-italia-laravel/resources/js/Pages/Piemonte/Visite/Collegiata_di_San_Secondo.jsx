import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';

export default function Collegiata_di_San_Secondo(props) {
    return (
        <>
            <Head title="Collegiata di San Secondo"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='collegiata_di_san_secondo' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Collegiata di San Secondo</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La <strong>collegiata di San Secondo</strong> fu <b>eretta fuori le mura</b> sul luogo dove <b>avvenne il martirio di San Secondo nel 119 d.c.</b> e divenne 
                            il <b>secondo polo della città di Asti</b> dopo la cattedrale, attorno al quale <b>sorsero le principali istituzioni ed attività cittadine</b>. Non si 
                            conosce di preciso la data di edificazione dell’attuale chiesa; la <b>sottostante cripta del Santo</b> ed il <b>campanile</b> sono gli unici elementi che 
                            permettono di ipotizzare la forma dell’edificio tra il X ed XI sec; la cripta sorse probabilmente nella prima metà del VII sec. ed acquistò nel tempo la 
                            forma <b>basilicale a tre navate</b> con volte sostenute da colonne. Nel <b>X sec.</b>, per timore che la tomba del Santo venisse profanata dai Saraceni, 
                            venne costruita una nuova chiesa sovrapposta in parte all’antica, ma all’interno questa volta della cinta muraria che si andava fortificando, di probabile 
                            impianto a tre navate con <b>abside semicircolare</b> ed orientato ad est; l’opera fu condotta a termine dal <b>Mons0 Brunengo</b>. Nel <b>1256</b> il <b>Capitolo 
                            di San Secondo</b> deliberò la costruzione di una chiesa più grande che di fatto iniziò solo alla fine del <b>Duecento</b>, quando si raggiunsero i fondi 
                            necessari, con le <b>elemosine dei fedeli</b> e la concessione delle <b>indulgenze</b>, e proseguirono a fasi alterne per tutto il XIV sec. e per parte del 
                            XV sec. Tra il <b>1457 ed il 1462</b> la chiesa venne <b>allungata di una campata verso ovest</b> e venne realizzata l’attuale <b>facciata in cotto</b>. 
                            Dalla descrizione del <b>Delegato Apostolico Peruzzi nel 1585</b> emerge che lo stato della chiesa fosse misero, per via delle frequenti inumazioni dei 
                            cadaveri, e sporco; esistevano <b>casucce ed edicole</b> fabbricate a ridosso del fianco meridionale ed il <b>mercato delle erbe</b> si estendeva fino quasi 
                            alle porte della chiesa. <b>Mons Peruzzi</b> ordinò la demolizione di dette costruzioni, che fosse lasciato uno spazio di trenta passi, sotto pena di 
                            scomunica, a chiunque violasse questo confine e che tutto l’edificio fosse rimesso in ordine. Nel <b>1856</b> la volta del presbiterio fu affrescata 
                            da <b>Pietro e Tommaso Ivaldi</b>. Nel <b>1885</b> la chiesa fu decorata ad opera del decoratore <b>Gabriele Ferrero</b> e del pittore <b>Luigi Morgari</b>. 
                            Tra il <b>1968 ed il 1974</b> venne realizzato, con il contributo dello Stato, degli enti locali e degli <b>astigiani</b>, un <b>restauro</b> che ha 
                            riportato a splendore le linee <b>romanico-gotiche</b> dell’edificio e che ha recuperato e restaurato importanti affreschi; durante i restauri si è appurato 
                            come la collegiata non abbia mai avuto nei secoli una decorazione unitaria, ma in gran parte era ad <b>intonaco bianco</b> e <b>mattoni a vista</b>; sono 
                            state riportate alla luce pregevoli <b>aperture nelle navate</b> e nel <b>tamburo del tiburio</b>; è stato abbassato il pavimento alla sua quota originale 
                            lasciando scoperte le zoccolature; sono state abbattute le vecchie baracche addossate alla chiesa. La <b>facciata</b> è a capanna, verticalmente tripartita 
                            dai <b>contrafforti</b>, con <b>rosoni</b> e <b>portali a strombo</b>; sopra il rosone centrale, maggiore rispetto agli altri per dimensione e decorazione, 
                            vi è una <b>nicchia con una copia della statua del Santo</b>. I pinnacoli e la <b>croce in ferro battuto</b> risalgono a restauri ottocenteschi. I <b>portoni 
                            laterali</b> sono ottocenteschi, mentre quello centrale è datato 1727 ed è sormontato da <b>lunetta con due archi trilobati contenenti gli affreschi di S. 
                            Pietro e S. Paolo</b> e nel quadrilobo centrale mostra una scultura in marmo con l’<b>Ecce homo</b>. La pianta è basilicale a <b>tre 
                            navate</b> con <b>transetto</b> e <b>cupola ottagonale irregolare</b>; la <b>navata centrale termina con abside poligonale a cinque lati</b>; 
                            la <b>navata sinistra termina con abside rettangolare</b>, mentre quella destra, la <strong>cappella di S. Secondo</strong>, con <b>abside semicircolare</b>, 
                            a filo con quella della navata centrale dopo le modifiche apportate nel Settecento dall’arch. <b>Bernardo Vittone</b>. I <b>pilastri</b> sono a fascio in 
                            mattoni con capitelli in pietra arenaria. Le navate sono coperte da <b>volte a crociera</b> con <b>costoloni in cotto</b> e <b>chiavi di volta circolari</b> in 
                            pietra che recano scolpite le insegne di famiglie gentilizie. La navata di sinistra ospita <b>due cappelle</b> in prossimità del transetto mentre la navata 
                            destra <b>quattro cappelle poligonali a cinque lati</b>. Tutte le cappelle svolgono la funzione di contrafforti per i pilastri. Notevoli opere d’arte 
                            arricchiscono la collegiata: il capolavoro di <b>Gandolfino da Roreto</b> nella navata sinistra, <b>polittico dell'Adorazione dei Magi (1518 ca.), l’altare in 
                            legno di G. Badarello</b> nel transetto destro e alcuni reperti di affreschi di primissimo Quattrocento di scuola lombarda. All’interno è inoltre visibile il 
                            grande <b>crocifisso di Michele Enatem</b> in legno scolpito e dipinto, datato 1658, che è stato collocato nel 1974, al termine dei lavori di restauro, 
                            sull’<b>arco trionfale</b>, sopra l’<b>altare volto al popolo</b>, ma del quale non è nota la provenienza e lo stemma alla base della croce.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1075.3133316650888!2d8.203751538213545!3d44.899450259469575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787932480f156e9%3A0x3e791ec320575a09!2sCollegiata%20di%20San%20Secondo!5e1!3m2!1sit!2sit!4v1717061196239!5m2!1sit!2sit"
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
