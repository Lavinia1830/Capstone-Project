import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Le_Due_Torri(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='le_due_torri' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Le Due Torri</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        <strong>Le due Torri di Bologna</strong> sono il simbolo della città Emiliana.<br/>
                        Collocate nel centro di Bologna, all'incrocio tra le antiche strade San Donato (ora via Zamboni), San Vitale, Maggiore e Castiglione, furono costruite con funzione sia militare, sia gentilizia nel periodo medioevale; tra il XII e XIII secolo il numero delle torri nella città 
                        di Bologna medievale era di oltre 100 torri, di cui oggi ne sono rimaste 22, tra cui le più famose sono la Torre degli Asinelli e la Torre di Garisenda. Probabilmente il numero così alto delle torri era dovuto al fatto che rappresentassero simbolicamente la ricchezza e 
                        prestigio delle famiglie dell’epoca, in lotta per il potere.
                    </p>
                    <h2 className="color-subtitle">La Torre degli Asinelli</h2>
                    <p>
                        La <b>Torre degli Asinelli</b>, sembra perdersi nel cielo, grazie ai suoi 97,2 m. di altezza, è la torre medioevale pendente più alta del mondo è stata costruita tra il 1109 e il 1119 dalla famiglia Asinelli, e sulla sua origine c’è una leggenda d’amore.<br/>
                        Il basamento della torre asinelli è circondato da una piccola rocca che aveva la funzione di ospitare i soldati di guardia, realizzata nel 1488. Oggi sotto il portico troviamo alcune botteghe artigianali in ricordo dell’antica funzione commerciale svolta dal medievale 
                        'mercato di mezzo'.<br/>
                        Si può salire sulla cima della Torre degli Asinelli, percorrendo una scala in legno di 498 scalini: dalla cima la vista sia impagabile e in alcune giornate particolarmente limpide, la vista arriva sino all'Adriatico! Il poeta tedesco Johann Wolfgang von Goethe descrive assai 
                        vividamente la vista offerta dalla terrazza in cima alla torre:<br/>
                        «Sul far della sera, mi sono finalmente appartato da questa antica città veneranda e dotta, da tutta quella folla che, sotto tutti i suoi portici sparsi per quasi tutte le vie, può andare e venire, al riparo dal sole e dalla pioggia, e baloccarsi, e fare acquisti e attendere 
                        ai fatti suoi. Sono salito sulla torre a consolarmi all'aria aperta. Veduta splendida! A Nord si scorgono i colli di Padova, quindi le Alpi svizzere, tirolesi e friulane, tutta la catena settentrionale, ancora nella nebbia. A occidente un orizzonte sconfinato, nel quale 
                        emergono solo le torri del Modenese. A oriente, una pianura sconfinata fino all'Adriatico, visibile al sorgere del sole. Verso sud i primi colli dell'Appennino, coltivati e lussureggianti fino alla cima, popolati di chiese, di palazzi e di ville, come i colli del Vicentino. 
                        Era un cielo purissimo; non la più piccola nuvola; solo all'orizzonte una specie di nebbione secco»
                    </p>
                    <h2 className="color-subtitle">La Torre Garisenda</h2>
                    <p>
                        La <b>torre Garisenda</b>, più bassa e massiccia, di soli 48 m., la affianca quasi a sostenerla, ma pende più dell'altra, circa 3,20 m. a causa di un cedimento del terreno: inizialmente era alta circa 60 metri, ma dovette essere abbassata nel XIV secolo proprio a causa del 
                        cedimento del terreno, che ha lasciato l'edificio obliquo come lo possiamo vedere oggi.<br/>
                        È stata citata più volte da Dante nella Divina Commedia e ne Le Rime. La Garisenda e la torre degli Asinelli sono state anche oggetto di eponimo poema di Giosuè Carducci come parte delle Odi barbare.
                    </p>
                    <h2 className="color-subtitle">La leggenda della Torre degli Asinelli</h2>
                    <p>
                        C’era una volta un contadino, un uomo che dedicava interamente le sue giornate al lavoro, nella speranza un giorno di espandere i suoi possedimenti migliorando così la vita della sua famiglia e in particolare del suo amato figlio. Egli aveva anche due asinelli, i quali lo 
                        aiutavano quotidianamente nel lavoro dei campi. Un giorno, mentre erano intenti a scavare in un terreno isolato, si misero a scalciare come se fossero impazziti. L’uomo corse in aiuto dei due fedeli animali tentando invano di calmarli. Avvicinatosi, scorse però qualcosa tra 
                        la terrà: era un baule pieno di monete d’oro e pietre preziose. Il brav’uomo non credeva ai suoi occhi. Decise allora di rinominare il tesoro in onore dei due animali, il Tesoro degli Asinelli. Essendo però molto giudizioso, non raccontò a nessuno di quanto gli era capitato, 
                        nemmeno alla sua famiglia.<br/>
                        Con il passare del tempo il tenore di vita della sua famiglia migliorò, molto gradualmente, con grande discrezione, per non destare sospetti. Il figlio del contadino era nel frattempo cresciuto ed era diventato uomo di grande fascino e cultura grazie al padre che aveva 
                        investito molto nella sua educazione. Un giorno, il ragazzo, passando nei pressi della casa di una nobile famiglia bolognese, vide alla finestra una bellissima ragazza della quale si innamorò. Lei ricambiava i sentimenti del giovane ma il padre, nobile della città, non 
                        avrebbe mai e poi mai dato la sua amata figlia a un ragazzo di così umili origini.<br/>
                        Un giorno il fanciullo prese coraggio e presentatosi al cospetto della famiglia della giovane innamorata, chiese la sua mano. Il padre scoppiò in una grossa risata e pensando che ciò sarebbe stato impossibile, disse al ragazzo che il matrimonio ci sarebbe stato quando egli 
                        avrebbe costruito la torre più alta di Bologna.<br/>
                        Il giovane, disperato, la sera tornato a casa si confidò con il padre che decise che era il momento giusto per svelare il suo segreto e consegnare il tesoro al figlio.<br/>
                        Iniziò così la costruzione della <b>Torre degli Asinelli</b>, così chiamata in onore dei due animali che avevano trovato il tesoro. Terminata la torre, dopo ben 10 anni, il nobile incredulo, dovette cedere in sposa la figlia al giovane.<br/>
                        I due innamorati potettero così coronare il loro sogno amore.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1684.2671168900504!2d11.345274604915467!3d44.4942094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4be8ea29f71%3A0x28631a8b221623ea!2sLe%20due%20Torri%3A%20Garisenda%20e%20degli%20Asinelli!5e1!3m2!1sit!2sit!4v1712999453276!5m2!1sit!2sit"
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
