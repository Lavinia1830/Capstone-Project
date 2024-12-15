import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Chiesa_di_San_Pietro_al_Rosario(props) {
    return (
        <>
            <Head title="Chiesa di San Pietro al Rosario"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='chiesa_di_s_p_al_rosario' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Chiesa di San Pietro al Rosario</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Collocata nel <b>centro cittadino</b>, la storia dell’attuale <strong>chiesa di San Pietro al Rosario</strong> ha inizio il <b>30 aprile 1599</b>, quando, per volere 
                            del <b>vescovo Bascapè</b> venne posata la <b>prima pietr</b>a per la fondazione della nuova <b>parrocchiale</b>, a cui si scelse di applicare la <b>struttura 
                            architettonica</b> della <b>croce latina</b>, a <b>unica navata</b>, con un <b>transetto</b> appena percepibile ed un <b>ampio coro</b>, coperti da una <b>volta a 
                            botte</b> che, nell'incrocio tra il soffitto del presbiterio e quello della navata lascia spazio alla <b>cupola ovale</b>.
                        </p>
                        <p>
                            Internamente lungo le pareti si aprono quattro <b>cappelle</b>: sulla destra, dedicate al <b>Crocifisso</b>, a <b>San Giuseppe</b>, al <b>Sacro Cuore di Gesù</b> e 
                            alla <b>Madonna del Rosario</b>, sia sulla sinistra, dedicate a <b>San Biagio</b>, <b>San Vincenzo Ferreri</b> e <b>San Domenico</b> e, la prima dall'entrata, che 
                            ospita invece il <b>monumento funebre di Amico Canobio</b>. <br/>
                            I lavori di <b>riedificazione</b> terminarono nel <b>1618</b>, anno in cui il <b>vescovo Taverna</b> consacrò l’edificio.
                        </p>
                        <p>
                            I primi <b>documenti</b> rinvenuti riguardanti la <b>decorazione interna della chiesa</b>, datati <b>1620</b>, trattano del <b>pagamento</b> a <b>Giulio Cesare 
                            Procaccini</b> per la realizzazione della <b>grande tela</b> della <b>Madonna del Rosario</b> con i <b>Santi Domenico e Caterina</b>, forse una delle ultime 
                            dipinte dal maestro morto poi nel <b>1625</b>. La pala decora, assieme ad altri due dipinti di dimensioni più ridotte raffiguranti la <b>Sacra Famiglia</b> e 
                            l’<b>Adorazione dei Magi</b>, attribuiti a <b>Giuseppe Vermiglio</b>, l’omonima <b>cappella</b>. <br/>
                            Qualche anno dopo, a seguito della <b>peste</b> che devastò la città tra il <b>1627</b> e il <b>1630</b>, venne presa la decisione di terminare 
                            le <b>decorazioni</b> della cappella eseguite dal milanese <b>Giovanni Mauro Della Rovere</b> detto il <b>Fiamminghino</b>, lavoro che soddisfò talmente le 
                            aspettative della <b>committenza</b> che intorno al <b>1637</b> gli iscritti alla <b>milizia di San Pietro Martire</b> assegnarono, sempre al Fiamminghino, 
                            le decorazioni della <b>volta</b> del <b>presbiterio</b> e del <b>coro</b>. L’opera completa si suddivide in <b>sette grandi scene</b> che, disposte in ordine 
                            cronologico, rappresentano: la <b>Battaglia contro gli eretici a Firenze</b>, <b>San Pietro</b> che parla ai <b>Milanesi</b> dalla piazza 
                            di <b>Sant’Eustorgio</b>, <b>San Pietro</b> che risana un giovane riattaccandogli il piede che si era amputato, <b>San Pietro</b> che ridona parola e udito 
                            a un sordomuto, la scena del <b>Martirio</b> nella tazza <b>absidale</b>, la Vergine che accoglie l’anima di <b>San Pietro</b> e <b>San Pietro</b> ai piedi 
                            della <b>Santissima Trinità</b>, nella volta del presbiterio.
                        </p>
                        <p>
                            Datata attorno al <b>1665</b> fu invece la presenza di <b>Melchiorre Gherardini</b>, noto anche come il <b>Ceranino</b>, autore degli <b>affreschi</b> de 
                            "<b>La storia della Maddalena</b>" nella cappella di <b>San Domenico</b> e quelli della <b>cupola</b> che rappresentavano la <b>Gloria dei Santi Domenicani</b>. 
                            La <b>navata</b>, venne decorata dal <b>quadraturista lombardo Federico Bigioggero</b>, che, seguendo uno schema molto in voga nel <b>barocco</b>, dipinse
                            una <b>finta struttura architettonica</b>, con tanto di <b>balconata</b> e <b>finto loggiato</b> studiato per creare l’impressione di una maggiore <b>profondità</b>. 
                            Il centro della <b>volta</b> venne altresì decorato da un altro grande esponente della pittura barocca lombarda: <b>Giovanni Stefano Danedi</b> detto il <b>Montalto</b>, 
                            autore della <b>Gloria di San Domenico</b> alla presenza della <b>Santissima Trinità</b> e della <b>Sacra Famiglia</b>.
                        </p>
                        <p>
                            Sempre ai due <b>artisti</b> venne commissionata la decorazione delle <b>pareti della chiesa</b>, di cui però rimangono vive solo poche tracce, ad oggi visibili 
                            sulla <b>controfacciata</b> attorno alla grande <b>finestra</b> dove, sulla <b>destra</b>, si trova una <b>donna</b> che <b>allatta</b> un <b>neonato</b> mentre 
                            altri due <b>bambini</b> si attaccano alle sue <b>vesti</b>, simbolo della <b>Carità</b> e, sulla <b>sinistra</b>, una <b>donna velata</b> che regge 
                            il <b>calice</b> e la <b>croce</b>, simbolo della <b>Fede</b>.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d895.5997466583601!2d8.621437033513745!3d45.44543847666174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478659f5590982cd%3A0x127bef45d06d4fdb!2sChiesa%20di%20San%20Pietro%20al%20Rosario!5e1!3m2!1sit!2sit!4v1722608585222!5m2!1sit!2sit"
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
