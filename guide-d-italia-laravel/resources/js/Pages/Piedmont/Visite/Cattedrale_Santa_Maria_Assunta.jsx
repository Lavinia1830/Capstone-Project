import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Cattedrale_Santa_Maria_Assunta(props) {
    return (
        <>
            <Head title="La Cattedrale di Santa Maria Assunta"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='cattedrale_santa_maria_assunta' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>La Cattedrale di Santa Maria Assunta</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            È da far risalire al primo vescovo <b>San Gauendenzio</b> (tra il 350 e il 400) la costruzione, con <b>sovvenzioni imperiali</b>, della 
                            <b> Basilica urbana</b>, del <b>Battistero</b>, e della <b>Domus Episcopalis</b>. <br/>
                            Tra l'<b>XI</b> e il <b>XII secolo</b>, la cattedrale venne demolita per essere sostituita da una nuova costruzione in <b>stile 
                            romanico</b>; papa <b>Innocenzo II</b> consacrò il nuovo edificio il <b>17 aprile 1132</b>. La nuova chiesa a croce <b>latina</b>, con 
                            <b> tre navate</b> e <b>matronei</b>, aveva la facciata preceduta da un <b>quadriportico</b>, ed era affiancata da <b>due torri</b> che 
                            raccordavano le navate con i matronei. <br/>
                            A partire dal <b>XV secolo</b>, la chiesa fu oggetto di importanti <b>restauri</b>: nel <b>Quattrocento</b> vennero aperte, lungo le 
                            navate laterali, delle <b>cappelle</b>, ed altre nel <b>Cinquecento</b>. Nel <b>1580</b>, appena a due anni di distanza dal passaggio 
                            di <b>San Carlo Borromeo</b> in viaggio per Torino, su commissione del vescovo <b>Francesco Bossi</b>, venne demolita la vecchia abside, 
                            sostituita da un nuovo coro a pianta rettangolare. Il vescovo <b>Carlo Bascapè</b>, nella prima metà degli anni <b>'90 del Cinquecento </b> 
                            fece costruire il nuovo <b>altare maggiore</b> e il vescovo <b>Benedetto Odescalchi</b>, nel <b>1680</b>, restaurò il <b>tiburio </b> 
                            dotandolo di una <b>lanterna</b>. Nel <b>XVIII secolo</b>, su progetto di <b>Benedetto Alfieri</b>, la cattedrale venne gradualmente 
                            restaurata in <b>stile barocco</b>, mantenendo però le sue strutture originarie. I lavori furono arrestati nel <b>1792</b> e ripresero 
                            nel <b>1831</b> su progetto dell’ingegner <b>Melchioni</b>, che realizzò il nuovo coro, il cui altare, consacrato nel <b>1836</b> ma 
                            terminato più tardi, venne progettato dal giovane architetto <b>Alessandro Antonelli</b>. <br/>
                            <b>Alessandro Antonelli</b> progettò tra il <b>1854</b> e il <b>1855</b> il nuovo edificio della cattedrale: <br/>
                            nel <b>1857</b> venne demolito il <b>quadriportico</b> ed in seguito ricostruito in forme <b>neoclassiche</b>, mentre a partire 
                            nel <b>1865</b> vennero demolite le navate e la <b>cupola</b> della cattedrale romanica.. Il progetto colossale rimase <b>incompleto </b> 
                            e non vennero costruiti il <b>transetto</b> e il <b>coro</b> come avrebbe voluto l’Antonelli. <br/>
                            Lungo il lato affacciato sulla <b>piazza della Repubblica</b> l'edificio è delimitato da un <b>portico con colonne liscie e capitelli 
                            corinzi</b>; sotto al portico si trova l'accesso al <b>sagrato</b>, chiuso da una <b>cancellata</b> e circondato internamente da un 
                            ulteriore <b>porticato</b>. L'ingresso è situato sotto un <b>pronao</b>, costituito da quattro imponenti <b>colonne scanalate</b>, 
                            ornate da <b>capitelli corinzi</b>, che sorreggono il <b>frontone</b> di forma triangolare. L’interno è diviso in <b>tre navate</b> da 
                            colonne in <b>stucco in finto marmo</b>. La <b>navata centrale</b> è coperta da una <b>volta a botte</b> mentre le <b>navate 
                            laterali</b> hanno copertura a <b>calotta</b> in ogni campata. Iniziando la visita dalla navata di <b>sinistra</b> troviamo in ordine: 
                            la <b>Cappella di San Giuseppe</b> con la tela di <b>Carlo Francesco Nuvolone</b> raffigurante l’<b>Adorazione dei Magi</b> (tela che 
                            venne commissionata a sostituzione della pala del <b>Tiziano</b> andata perduta a causa di un <b>incendio</b> nel <b>XVII secolo</b>). 
                            A seguire la <b>Cappella detta di San Gaetano</b>, che conserva la tavola cinquecentesca di <b>Sperindio Cagnoli</b> raffigurante 
                            l’<b>Ultima Cena</b> e il prezioso busto reliquiario di <b>San Bernardo da Mentone</b>. Dopo la <b>Cappella della Madonna delle 
                            Grazie</b>, in testa alla navata, la <b>Cappella di S. Agabio</b>, che conserva le <b>spoglie mortali</b> del santo novarese ricordato 
                            dalla bella statua dei <b>fratelli Collino</b>. Il <b>presbiterio</b>, rialzato rispetto al resto dell’aula, conserva in parte 
                            l’antico <b>pavimento musivo</b> dell’antico duomo paleocristiano a tessere bianche e nere in <b>opus tassellatum</b> databile 
                            al <b>1132</b> A.C. con la raffigurazione al centro dei <b>progenitori Adamo ed Eva</b> e dei <b>quattro fiumi del Paradiso</b>. 
                            Decorano il coro tele seicentesche del milanese <b>Filippo Abbiati</b> e di <b>Melchiorre Gherardini</b> mentre, in anni recenti, è 
                            stato collocato il prezioso <b>San Francesco riceve le stimmate</b> del <b>Guercino</b> datato <b>1633</b>. Nelle <b>cantorie</b> due 
                            <b> organi</b> di cui il più antico, a destra dell’altare, è della bottega organaria <b>Mentasti del 1902</b>. Nella <b>cappella di 
                            testa della navata di destra</b> l’altare di <b>San Lorenzo Martire</b>. Si prosegue con la <b>Cappella di San Benedetto</b> con al pala 
                            del <b>1575</b> di <b>Bernardino Lanino</b>, la <b>Cappella di Santa Caterina d’Alessandria</b> con la splendida tavola di <b>Gaudenzio 
                            Ferrari</b> con il <b>Matrimonio mistico di S. Caterina</b> e si concludono le cappelle con quella della <b>Madonna del Riscatto</b> del 
                            <b> 1728</b> con il gruppo scultoreo di <b>Giuseppe Rusnati</b>.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1791.193505082563!2d8.617727101737492!3d45.44562706886868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47865a202a3ebe63%3A0x414b24c3afa36645!2sCattedrale%20di%20Santa%20Maria%20Assunta!5e1!3m2!1sit!2sit!4v1716037602122!5m2!1sit!2sit"
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
