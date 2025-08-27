import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import { Trans, useTranslation } from 'react-i18next';
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap';
import Colosseum from '../../../../assets/Lazio/Rome/Colosseum.jpg';
import Roman_Forum from '../../../../assets/Lazio/Rome/Roman_Forum.jpg';
import Palatine_Hill from '../../../../assets/Lazio/Rome/Palatine_Hill.jpg';
import Pantheon from '../../../../assets/Lazio/Rome/Pantheon.jpg';
import St_Peter_s_Basilica from '../../../../assets/Lazio/Rome/St_Peter_s_Basilica.jpg';




export default function Rome(props) {

    const { i18n, t } = useTranslation();
    const locale = i18n.language;

    const colosseum = locale === 'en' ? '/view/lazio/rome/colosseum' : '/visita/lazio/rome/colosseo';
    const roman_forum = locale === 'en' ? '/destination/lazio/viterbo' : '/destinazioni/lazio/viterbo';
    const palatine_hill = locale === 'en' ? '/destination/lazio/frosinone' : '/destinazioni/lazio/frosinone';
    const pantheon = locale === 'en' ? '/destination/lazio/tivoli' : '/destinazioni/lazio/tivoli';
    const st_peter_s_basilica = locale === 'en' ? '/destination/lazio/latina' : '/destinazioni/lazio/latina';
    //const rieti = locale === 'en' ? '/destination/lazio/rieti' : '/destinazioni/lazio/rieti';

    const rome = [
        { id: 1, card_rome_title: t("card-rome-title"), card_rome_text: t("card-rome-text"), href: colosseum, image: Colosseum },
        { id: 2, card_rome_title: t("card-rome-title1"), card_rome_text: t("card-rome-text1"), href: roman_forum, image: Roman_Forum },
        { id: 3, card_rome_title: t("card-rome-title2"), card_rome_text: t("card-rome-text2"), href: palatine_hill, image: Palatine_Hill },
        { id: 4, card_rome_title: t("card-rome-title3"), card_rome_text: t("card-rome-text3"), href: pantheon, image: Pantheon },
        { id: 5, card_rome_title: t("card-rome-title4"), card_rome_text: t("card-rome-text4"), href: st_peter_s_basilica, image: St_Peter_s_Basilica }
    ]

    

    return (
        <>
            <Head title={t("rome")} />
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='text-center rome'>
                        <h1 style={{ fontSize: "50px" }} className='pb-4'>{t("rome")}</h1>
                        <p className='text-white mx-4'>
                            <Trans i18nKey="card-lazio-text" components={{ strong: <strong />, span: <span /> }} />
                        </p>
                    </div>
                    <div className="body">
                        <div className="d-flex flex-wrap justify-content-center mt-4">
                            {rome.map((item) => (
                                <div key={item.id}>
                                    <Card style={{ width: '18rem', height: "32rem"}} className='m-3 '>
                                        <CardImg variant="top" src={item.image} style={{ width: '100%', height: '250px', objectFit: 'cover' }}/>
                                        <CardBody>
                                            <CardTitle className=''>{item.card_rome_title}</CardTitle>
                                            <CardText>
                                                {item.card_rome_text}
                                            </CardText>
                                            <Link href={item.href} className='position-absolute bottom-4 start-4'>
                                                <Button className='btn btn-success my-2 my-sm-0 me-3 text-white'>{t("view city")}</Button>
                                            </Link>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
                <Footer />
            </AuthenticatedLayout>
        </>

    )
}
