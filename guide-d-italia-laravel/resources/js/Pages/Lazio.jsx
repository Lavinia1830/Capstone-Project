import React, { useRef } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import { Trans, useTranslation } from 'react-i18next';
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap';

import Rome from '../../assets/Lazio/Rome.jpg';
import Viterbo from '../../assets/Lazio/Rome.jpg';

export default function Lazio(props) {

    const { i18n, t } = useTranslation();
    const locale = i18n.language;
    

    const rome = locale === 'en' ? '/destinations/lazio/rome' : '/destinazioni/lazio/roma';
    const viterbo = locale === 'en' ? '/destination/lazio/viterbo' : '/destinazioni/lazio/viterbo';

    const lazio_destination = [
        { id: 1, card_lazio_title: t("card-lazio-title"), card_lazio_text: t("card-lazio-text"), href: rome, image: Rome },
        { id: 2, card_lazio_title: t("card-lazio-title2"), card_lazio_text: t("card-lazio-text2"), href: viterbo, image: Viterbo},
    ]

    

    return (
        <>
            <Head title="Lazio" />
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='text-center lazio'>
                        <h1 style={{ fontSize: "50px" }} className='pb-4'>Lazio</h1>
                        <p className='text-white'>
                            <Trans i18nKey="lazio" components={{ strong: <strong />, span: <span /> }} />
                        </p>
                    </div>
                    <div className="body">
                        <div className="p-5 d-flex justify-content-evenly ">
                            {lazio_destination.map((item) => (
                                <div key={item.id}>
                                    <Card style={{ width: '18rem' }} className='mx-3'>
                                        <CardImg variant="top" src={item.image} />
                                        <CardBody>
                                            <CardTitle>{item.card_lazio_title}</CardTitle>
                                            <CardText>
                                                {item.card_lazio_text}
                                            </CardText>
                                            <Link href={item.href}>
                                                <Button variant="primary">{t("view city")}</Button>
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
