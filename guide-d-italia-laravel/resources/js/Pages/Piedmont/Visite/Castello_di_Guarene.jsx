import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Castello_di_Guarene(props) {
    return (
        <>
            <Head title="Castello di Guarene"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='castello_di_guarene' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello di Guarene</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Da <b>sette secoli</b> il <strong>castello</strong> domina la collina <strong>di Guarene</strong>. <br/>
                            Nel <b>Medioevo</b> era un <b>fortilizio</b>, nel <b>XVIII secolo</b> diventò la nuova dimora estiva dei <b>conti Roero</b>, 
                            disegnata personalmente e costruita dal più noto della casata, il conte <b>Carlo Giacinto</b>, una significativa figura 
                            di <b>aristocratico illuminato</b> del <b>Settecento piemontese</b>. E’ una costruzione imponente a <b>tre piani</b>, che 
                            tocca i <b>25 metri d’altezza</b>, circondata da vasti ed eleganti <b>giardini all’italiana</b> realizzati nella <b>prima metà 
                            del Settecento</b>.
                        </p>
                        <p>
                            Come una straordinaria <b>balconata</b> si affaccia sull’intera <b>arcata</b> di colline riconosciute come <b>Patrimonio 
                            dell’Umanità dall’Unesco</b>, dal <Link href='/territori/piemonte/monferrato' 
                            className='text-decoration-none color_link'>Monferrato</Link> a <b>Verduno</b>, ricoperte da <b>vigneti</b> celebri fra i 
                            quali spuntano <b>castelli</b>, <b>torri</b> e <b>paesi</b>. Dall’altro lato guarda sulle <b>alture</b> del <b>Roero</b> e 
                            sulla <b>catena delle Alpi</b>.
                        </p>
                        <p>
                            È stato abitato per decine di generazioni dai <b>Roero di Guarene</b>, della <b>Vezza</b> e di <b>Piobesi</b>, una importante 
                            famiglia dell’aristocrazia <b>piemontese</b>. Nel <b>1899</b> passò per eredità ai <b>Provana di Collegno</b>. La sua 
                            lunga <b>storia</b> ne fa un <b>archivio</b> di <b>memorie</b> e un <b>museo</b> di <b>architettura</b>, di <b>pittura</b> e 
                            di <b>arti decorative</b>. Passato nel <b>2011</b> ad altra <b>proprietà</b>, è stato destinato ad una nuova vocazione che 
                            combina l’assoluto <b>rispetto</b> del valore museale con una <b>ospitalità</b> di alto livello. Gli interventi 
                            di <b>restauro conservativo</b> e di <b>adeguamento</b> sono durati tre anni.
                        </p>
                        <p>
                            Carlo Giacinto Roero di Guarene, personaggio centrale della storia del castello, era un <b>architetto dilettante</b>, in 
                            relazione con l’<b>architetto di Corte</b> Filippo Juvarra, al quale si deve il progetto della <b>facciata</b>. Dopo la posa 
                            della <b>prima pietra</b> nel 1726 il 13 settembre ore 20 e mezza, Carlo Giacinto seguì l’edificazione e l’arredamento, non 
                            ancora terminati nel 1749 al momento della sua morte, in parte di presenza e in parte a distanza: nei mesi invernali impartiva 
                            per <b>lettera</b> da <b>Torino</b> quotidiane e minuziose istruzioni al <b>capo-mastro</b> che sovrintendeva al <b>cantiere</b>. <br/>
                            Tra le particolarità di Guarene, c’è anche quella di essere un castello costruito “per <b>corrispondenza</b>”. La grandiosa 
                            opera arrivò al completamento nella seconda metà del secolo, grazie ai figli <b>Traiano</b> e <b>Teodoro</b>. Il <b>re Vittorio 
                            Amedeo III</b> con la <b>regina</b> venne a visitarla nel 1773, e il castello è pieno di ricordi di quell’avvenimento.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1078.3089151045788!2d8.032516320919532!3d44.73905025596936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787f774abd5654d%3A0xd61486a90cc8bc43!2sRelais%20%26%20Chateaux%20Castello%20di%20Guarene!5e1!3m2!1sit!2sit!4v1722953205270!5m2!1sit!2sit"
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
