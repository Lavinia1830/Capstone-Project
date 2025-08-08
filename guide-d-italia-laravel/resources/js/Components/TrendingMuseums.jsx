import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardImg } from 'react-bootstrap';
import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

const TrendingMuseums = () => {
    const { t } = useTranslation();
    const [museums, setMuseums] = useState([]);

    useEffect(() => {
        axios.get('/api/tendenze')
          .then(response => {
            const allMuseums = response.data;
    
            // Ordina per numero di visitatori (dal più alto al più basso)
            const topMuseums = allMuseums
              .sort((a, b) => b.visitatori - a.visitatori)
              .slice(0, 3); // Prendi i primi 3
    
            setMuseums(topMuseums);
          })
          .catch(error => {
            console.error('Errore nel caricamento dei musei di tendenza:', error);
          });
      }, []);

    return (
        <div>
            <section className="space-y-4">
                <h3>{t("trends")}</h3>
                {
                    museums.map(museum =>


                        <Card key={museum.id}>
                            <CardImg src={museum.img} alt="Museo 1" className="rounded-t" />
                            <Link href={museum.url} className='color_link p-4 text-center' target="_blank" rel="noopener noreferrer">
                                {museum.name}
                            </Link>
                        </Card>



                    )
                }
            </section>
        </div>
    );
};

export default TrendingMuseums;