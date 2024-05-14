import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap';
import Allestimento_1878_mn_del_r_italiano from '../../../../assets/Piemonte/Allestimento_1878_mn_del_r_italiano_Torino_Piemonte.jpg';
import Allestimenti_1884_mn_del_r_italiano from '../../../../assets/Piemonte/Allestimenti_1884_mn_del_r_italiano_Torino_Piemonte.jpg';
import Allestimenti_1899_mn_del_r_italiano from '../../../../assets/Piemonte/Allestimenti_1899_mn_del_r_italiano_Torino_Piemonte.jpg';
import Allestimenti_1908_mn_del_r_italiano from '../../../../assets/Piemonte/Allestimenti_1908_mn_del_r_italiano_Torino_Piemonte.jpg';
import Allestimenti_1938_mn_del_r_italiano from '../../../../assets/Piemonte/Allestimenti_1938_mn_del_r_italiano_Torino_Piemonte.jpg';
import Allestimenti_1948_mn_del_r_italiano from '../../../../assets/Piemonte/Allestimenti_1948_mn_del_r_italiano_Torino_Piemonte.jpg';
import Allestimenti_1961_mn_del_r_italiano from '../../../../assets/Piemonte/Allestimenti_1961_mn_del_r_italiano_Torino_Piemonte.jpg';
import Allestimenti_1965_mn_del_r_italiano from '../../../../assets/Piemonte/Allestimenti_1965_mn_del_r_italiano_Torino_Piemonte.jpg';
import Allestimenti_2011_mn_del_r_italiano from '../../../../assets/Piemonte/Allestimenti_2011_mn_del_r_italiano_Torino_Piemonte.jpg';
import Ingresso_mn_del_r_italiano from '../../../../assets/Piemonte/Ingresso_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_1_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_1_mn_del_r_italiano_Torini_Piemonte.jpg';
import Sala_2_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_2_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_3_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_3_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_4_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_4_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_5_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_5_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_6_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_6_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_7_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_7_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_8_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_8_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_9_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_9_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_10_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_10_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_11_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_11_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_12_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_12_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_13_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_13_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_14_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_14_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_15_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_15_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_16_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_16_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_17_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_17_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_18_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_18_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_19_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_19_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_20_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_20_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_21_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_21_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_22_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_22_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_23_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_23_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_24_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_24_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_25_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_25_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_26_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_26_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_27_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_27_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_28_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_28_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_29_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_29_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_30_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_30_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_Codici_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_Codici_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_Plebisciti_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_Plebisciti_mn_del_r_italiano_Torino_Piemonte.jpg';
import Corridoio_della_Camera_italiana_mn_del_r_italiano from '../../../../assets/Piemonte/Corridoio_della_Camera_italiana_mn_del_r_italiano_Torino_Piemonte.jpg';


export default function Mn_del_R_italiano(props) {

    // Definiamo uno stato per l'immagine e la descrizione
    const [imageIngresso, setImageIngresso] = useState('');
    const [descriptionIngresso, setDescriptionIngresso] = useState('');
    const [subtitleIngresso, setSubtitleIngresso] = useState('');
    const [imageSala1, setImageSala1] = useState('');
    const [descriptionSala1, setDescriptionSala1] = useState('');
    const [subtitleSala1, setSubtitleSala1] = useState('');
    const [imageSala2, setImageSala2] = useState('');
    const [descriptionSala2, setDescriptionSala2] = useState('');
    const [subtitleSala2, setSubtitleSala2] = useState('');
    const [imageSala3, setImageSala3] = useState('');
    const [descriptionSala3, setDescriptionSala3] = useState('');
    const [subtitleSala3, setSubtitleSala3] = useState('');
    const [imageSala4, setImageSala4] = useState('');
    const [descriptionSala4, setDescriptionSala4] = useState('');
    const [subtitleSala4, setSubtitleSala4] = useState('');
    const [imageSala5, setImageSala5] = useState('');
    const [descriptionSala5, setDescriptionSala5] = useState('');
    const [subtitleSala5, setSubtitleSala5] = useState('');
    const [imageSala6, setImageSala6] = useState('');
    const [descriptionSala6, setDescriptionSala6] = useState('');
    const [subtitleSala6, setSubtitleSala6] = useState('');
    const [imageSala7, setImageSala7] = useState('');
    const [descriptionSala7, setDescriptionSala7] = useState('');
    const [subtitleSala7, setSubtitleSala7] = useState('');
    const [imageSala8, setImageSala8] = useState('');
    const [descriptionSala8, setDescriptionSala8] = useState('');
    const [subtitleSala8, setSubtitleSala8] = useState('');
    const [imageSala9, setImageSala9] = useState('');
    const [descriptionSala9, setDescriptionSala9] = useState('');
    const [subtitleSala9, setSubtitleSala9] = useState('');
    const [imageSala10, setImageSala10] = useState('');
    const [descriptionSala10, setDescriptionSala10] = useState('');
    const [subtitleSala10, setSubtitleSala10] = useState('');
    const [imageSala11, setImageSala11] = useState('');
    const [descriptionSala11, setDescriptionSala11] = useState('');
    const [subtitleSala11, setSubtitleSala11] = useState('');
    const [imageSala12, setImageSala12] = useState('');
    const [descriptionSala12, setDescriptionSala12] = useState('');
    const [subtitleSala12, setSubtitleSala12] = useState('');
    const [imageSala13, setImageSala13] = useState('');
    const [descriptionSala13, setDescriptionSala13] = useState('');
    const [subtitleSala13, setSubtitleSala13] = useState('');
    const [imageSala14, setImageSala14] = useState('');
    const [descriptionSala14, setDescriptionSala14] = useState('');
    const [subtitleSala14, setSubtitleSala14] = useState('');
    const [imageSala15, setImageSala15] = useState('');
    const [descriptionSala15, setDescriptionSala15] = useState('');
    const [subtitleSala15, setSubtitleSala15] = useState('');
    const [imageSala16, setImageSala16] = useState('');
    const [descriptionSala16, setDescriptionSala16] = useState('');
    const [subtitleSala16, setSubtitleSala16] = useState('');
    const [imageSala17, setImageSala17] = useState('');
    const [descriptionSala17, setDescriptionSala17] = useState('');
    const [subtitleSala17, setSubtitleSala17] = useState('');
    const [imageSala18, setImageSala18] = useState('');
    const [descriptionSala18, setDescriptionSala18] = useState('');
    const [subtitleSala18, setSubtitleSala18] = useState('');
    const [imageSala19, setImageSala19] = useState('');
    const [descriptionSala19, setDescriptionSala19] = useState('');
    const [subtitleSala19, setSubtitleSala19] = useState('');
    const [imageSala20, setImageSala20] = useState('');
    const [descriptionSala20, setDescriptionSala20] = useState('');
    const [subtitleSala20, setSubtitleSala20] = useState('');
    const [imageSala21, setImageSala21] = useState('');
    const [descriptionSala21, setDescriptionSala21] = useState('');
    const [subtitleSala21, setSubtitleSala21] = useState('');
    const [imageSala22, setImageSala22] = useState('');
    const [descriptionSala22, setDescriptionSala22] = useState('');
    const [subtitleSala22, setSubtitleSala22] = useState('');
    const [imageSala23, setImageSala23] = useState('');
    const [descriptionSala23, setDescriptionSala23] = useState('');
    const [subtitleSala23, setSubtitleSala23] = useState('');
    const [imageSala24, setImageSala24] = useState('');
    const [descriptionSala24, setDescriptionSala24] = useState('');
    const [subtitleSala24, setSubtitleSala24] = useState('');
    const [imageSala25, setImageSala25] = useState('');
    const [descriptionSala25, setDescriptionSala25] = useState('');
    const [subtitleSala25, setSubtitleSala25] = useState('');
    const [imageSala26, setImageSala26] = useState('');
    const [descriptionSala26, setDescriptionSala26] = useState('');
    const [subtitleSala26, setSubtitleSala26] = useState('');
    const [imageSala27, setImageSala27] = useState('');
    const [descriptionSala27, setDescriptionSala27] = useState('');
    const [subtitleSala27, setSubtitleSala27] = useState('');
    const [imageSala28, setImageSala28] = useState('');
    const [descriptionSala28, setDescriptionSala28] = useState('');
    const [subtitleSala28, setSubtitleSala28] = useState('');
    const [imageSala29, setImageSala29] = useState('');
    const [descriptionSala29, setDescriptionSala29] = useState('');
    const [subtitleSala29, setSubtitleSala29] = useState('');
    const [imageSala30, setImageSala30] = useState('');
    const [descriptionSala30, setDescriptionSala30] = useState('');
    const [subtitleSala30, setSubtitleSala30] = useState('');
    const [imageSalaCodici, setImageSalaCodici] = useState('');
    const [descriptionSalaCodici, setDescriptionSalaCodici] = useState('');
    const [subtitleSalaCodici, setSubtitleSalaCodici] = useState('');
    const [imageSalaPlebisciti, setImageSalaPlebisciti] = useState('');
    const [descriptionSalaPlebisciti, setDescriptionSalaPlebisciti] = useState('');
    const [subtitleSalaPlebisciti, setSubtitleSalaPlebisciti] = useState('');
    const [imageCorridoiodellaCameraitaliana, setImageCorridoiodellaCameraitaliana] = useState('');
    const [descriptionCorridoiodellaCameraitaliana, setDescriptionCorridoiodellaCameraitaliana] = useState('');
    const [subtitleCorridoiodellaCameraitaliana, setSubtitleCorridoiodellaCameraitaliana] = useState('');

    // Funzione per gestire il click del pulsante
    const Ingresso = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        setImageIngresso(Ingresso_mn_del_r_italiano);
        setDescriptionIngresso("È il più antico e noto museo di storia patria, l'unico a essere nazionale per importanza, ricchezza e rappresentatività delle collezioni." );
        setSubtitleIngresso('Ingresso');
        // Resetta l'altra sala se necessario
        setImageSala1('');
        setDescriptionSala1('');
        setSubtitleSala1('');
        setImageSala2('');
        setDescriptionSala2('');
        setSubtitleSala2('');
        setImageSala3('');
        setDescriptionSala3('');
        setSubtitleSala3('');
        setImageSala4('');
        setDescriptionSala4('');
        setSubtitleSala4('');
        setImageSala5('');
        setDescriptionSala5('');
        setSubtitleSala5('');
        setImageSala6('');
        setDescriptionSala6('');
        setSubtitleSala6('');
        setImageSala7('');
        setDescriptionSala7('');
        setSubtitleSala7('');
        setImageSala8('');
        setDescriptionSala8('');
        setSubtitleSala8('');
        setImageSala9('');
        setDescriptionSala9('');
        setSubtitleSala9('');
        setImageSala10('');
        setDescriptionSala10('');
        setSubtitleSala10('');
        setImageSala11('');
        setDescriptionSala11('');
        setSubtitleSala11('');
        setImageSala12('');
        setDescriptionSala12('');
        setSubtitleSala12('');
        setImageSala13('');
        setDescriptionSala13('');
        setSubtitleSala13('');
        setImageSala14('');
        setDescriptionSala14('');
        setSubtitleSala14('');
        setImageSala15('');
        setDescriptionSala15('');
        setSubtitleSala15('');
        setImageSala16('');
        setDescriptionSala16('');
        setSubtitleSala16('');
        setImageSala17('');
        setDescriptionSala17('');
        setSubtitleSala17('');
        setImageSala18('');
        setDescriptionSala18('');
        setSubtitleSala18('');
        setImageSala19('');
        setDescriptionSala19('');
        setSubtitleSala19('');
        setImageSala20('');
        setDescriptionSala20('');
        setSubtitleSala20('');
        setImageSala21('');
        setDescriptionSala21('');
        setSubtitleSala21('');
        setImageSala22('');
        setDescriptionSala22('');
        setSubtitleSala22('');
        setImageSala23('');
        setDescriptionSala23('');
        setSubtitleSala23('');
        setImageSala24('');
        setDescriptionSala24('');
        setSubtitleSala24('');
        setImageSala25('');
        setDescriptionSala25('');
        setSubtitleSala25('');
        setImageSala26('');
        setDescriptionSala26('');
        setSubtitleSala26('');
        setImageSala27('');
        setDescriptionSala27('');
        setSubtitleSala27('');
        setImageSala28('');
        setDescriptionSala28('');
        setSubtitleSala28('');
        setImageSala29('');
        setDescriptionSala29('');
        setSubtitleSala29('');
        setImageSala30('');
        setDescriptionSala30('');
        setSubtitleSala30('');
        setImageSalaCodici('');
        setDescriptionSalaCodici('');
        setSubtitleSalaCodici('');
        setImageSalaPlebisciti('');
        setDescriptionSalaPlebisciti('');
        setSubtitleSalaPlebisciti('');
        setImageCorridoiodellaCameraitaliana('');
        setDescriptionCorridoiodellaCameraitaliana('');
        setSubtitleCorridoiodellaCameraitaliana('');
    };

    const Sala1 = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        setImageSala1(Sala_1_mn_del_r_italiano);
        setDescriptionSala1("Nei due secoli scorsi si presentava il Risorgimento come una STORIA PROVENIENTE DA LONTANO. Erme di GRANDI ITALIANI del passato, statua della DEA MADRE, GONFALONI di molte città, nell'atrio i CIMELI DI VITTORIO EMANUELE II primo re d'Italia." );
        setSubtitleSala1('Sala 1 - Rappresentazioni del Risorgimento nel Museo 1884, 1961');
        // Resetta l'ingresso se necessario
        setImageIngresso('');
        setDescriptionIngresso('');
        setSubtitleIngresso('');
        setImageSala2('');
        setDescriptionSala2('');
        setSubtitleSala2('');
        setImageSala3('');
        setDescriptionSala3('');
        setSubtitleSala3('');
        setImageSala4('');
        setDescriptionSala4('');
        setSubtitleSala4('');
        setImageSala5('');
        setDescriptionSala5('');
        setSubtitleSala5('');
        setImageSala6('');
        setDescriptionSala6('');
        setSubtitleSala6('');
        setImageSala7('');
        setDescriptionSala7('');
        setSubtitleSala7('');
        setDescriptionSala8('');
        setSubtitleSala8('');
        setImageSala9('');
        setDescriptionSala9('');
        setSubtitleSala9('');
        setImageSala10('');
        setDescriptionSala10('');
        setSubtitleSala10('');
        setImageSala11('');
        setDescriptionSala11('');
        setSubtitleSala11('');
        setImageSala12('');
        setDescriptionSala12('');
        setSubtitleSala12('');
        setImageSala13('');
        setDescriptionSala13('');
        setSubtitleSala13('');
        setImageSala14('');
        setDescriptionSala14('');
        setSubtitleSala14('');
        setImageSala15('');
        setDescriptionSala15('');
        setSubtitleSala15('');
        setImageSala16('');
        setDescriptionSala16('');
        setSubtitleSala16('');
        setImageSala17('');
        setDescriptionSala17('');
        setSubtitleSala17('');
        setImageSala18('');
        setDescriptionSala18('');
        setSubtitleSala18('');
        setImageSala19('');
        setDescriptionSala19('');
        setSubtitleSala19('');
        setImageSala20('');
        setDescriptionSala20('');
        setSubtitleSala20('');
        setImageSala21('');
        setDescriptionSala21('');
        setSubtitleSala21('');
        setImageSala22('');
        setDescriptionSala22('');
        setSubtitleSala22('');
        setImageSala23('');
        setDescriptionSala23('');
        setSubtitleSala23('');
        setImageSala24('');
        setDescriptionSala24('');
        setSubtitleSala24('');
        setImageSala25('');
        setDescriptionSala25('');
        setSubtitleSala25('');
        setImageSala26('');
        setDescriptionSala26('');
        setSubtitleSala26('');
        setImageSala27('');
        setDescriptionSala27('');
        setSubtitleSala27('');
        setImageSala28('');
        setDescriptionSala28('');
        setSubtitleSala28('');
        setImageSala29('');
        setDescriptionSala29('');
        setSubtitleSala29('');
        setImageSala30('');
        setDescriptionSala30('');
        setSubtitleSala30('');
        setImageSalaCodici('');
        setDescriptionSalaCodici('');
        setSubtitleSalaCodici('');
        setImageSalaPlebisciti('');
        setDescriptionSalaPlebisciti('');
        setSubtitleSalaPlebisciti('');
        setImageCorridoiodellaCameraitaliana('');
        setDescriptionCorridoiodellaCameraitaliana('');
        setSubtitleCorridoiodellaCameraitaliana('');
    };

    const Sala2 = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        setImageSala2(Sala_2_mn_del_r_italiano);
        setDescriptionSala2("Le rappresentazioni del Risorgimento iniziano con le ESPOSIZIONI DI TORINO DEL 1884, 1898 E 1911 E NELLA MOLE ANTONELLIANA, prima sede del museo dal 1908. Simbolo della sala è il TROFEO DONATO DAI MUNICIPI ITALIANI alla città di Torino nel 1884." );
        setSubtitleSala2('Sala 2 - Rappresentazioni del Risorgimento nel Museo 1884, 1898, 1908, 1911');
        // Resetta l'ingresso se necessario
        setImageIngresso('');
        setDescriptionIngresso('');
        setSubtitleIngresso('');
        setImageSala1('');
        setDescriptionSala1('');
        setSubtitleSala1('');
        setImageSala3('');
        setDescriptionSala3('');
        setSubtitleSala3('');
        setImageSala4('');
        setDescriptionSala4('');
        setSubtitleSala4('');
        setImageSala5('');
        setDescriptionSala5('');
        setSubtitleSala5('');
        setImageSala6('');
        setDescriptionSala6('');
        setSubtitleSala6('');
        setImageSala7('');
        setDescriptionSala7('');
        setSubtitleSala7('');
        setDescriptionSala8('');
        setSubtitleSala8('');
        setImageSala9('');
        setDescriptionSala9('');
        setSubtitleSala9('');
        setImageSala10('');
        setDescriptionSala10('');
        setSubtitleSala10('');
        setImageSala11('');
        setDescriptionSala11('');
        setSubtitleSala11('');
        setImageSala12('');
        setDescriptionSala12('');
        setSubtitleSala12('');
        setImageSala13('');
        setDescriptionSala13('');
        setSubtitleSala13('');
        setImageSala14('');
        setDescriptionSala14('');
        setSubtitleSala14('');
        setImageSala15('');
        setDescriptionSala15('');
        setSubtitleSala15('');
        setImageSala16('');
        setDescriptionSala16('');
        setSubtitleSala16('');
        setImageSala17('');
        setDescriptionSala17('');
        setSubtitleSala17('');
        setImageSala18('');
        setDescriptionSala18('');
        setSubtitleSala18('');
        setImageSala19('');
        setDescriptionSala19('');
        setSubtitleSala19('');
        setImageSala20('');
        setDescriptionSala20('');
        setSubtitleSala20('');
        setImageSala21('');
        setDescriptionSala21('');
        setSubtitleSala21('');
        setImageSala22('');
        setDescriptionSala22('');
        setSubtitleSala22('');
        setImageSala23('');
        setDescriptionSala23('');
        setSubtitleSala23('');
        setImageSala24('');
        setDescriptionSala24('');
        setSubtitleSala24('');
        setImageSala25('');
        setDescriptionSala25('');
        setSubtitleSala25('');
        setImageSala26('');
        setDescriptionSala26('');
        setSubtitleSala26('');
        setImageSala27('');
        setDescriptionSala27('');
        setSubtitleSala27('');
        setImageSala28('');
        setDescriptionSala28('');
        setSubtitleSala28('');
        setImageSala29('');
        setDescriptionSala29('');
        setSubtitleSala29('');
        setImageSala30('');
        setDescriptionSala30('');
        setSubtitleSala30('');
        setImageSalaCodici('');
        setDescriptionSalaCodici('');
        setSubtitleSalaCodici('');
        setImageSalaPlebisciti('');
        setDescriptionSalaPlebisciti('');
        setSubtitleSalaPlebisciti('');
        setImageCorridoiodellaCameraitaliana('');
        setDescriptionCorridoiodellaCameraitaliana('');
        setSubtitleCorridoiodellaCameraitaliana('');
    };

    const Sala3 = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        setImageSala3(Sala_3_mn_del_r_italiano);
        setDescriptionSala3("LA RICOSTRUZIONE FEDELE DI UNA SALA del Museo del Risorgimento trasferito a Palazzo Carignano nel 1938. Era preponderante Casa Savoia, la sua antichità, la forza militare, la missione nazionale e si datava l'inizio del processo di unificazione italiana con la battaglia di Torino del 1706." );
        setSubtitleSala3('Sala 3 - Rappresentazioni del Risorgimento nel Museo 1935, 1938');
        // Resetta l'ingresso se necessario
        setImageIngresso('');
        setDescriptionIngresso('');
        setSubtitleIngresso('');
        setImageSala1('');
        setDescriptionSala1('');
        setSubtitleSala1('');
        setImageSala2('');
        setDescriptionSala2('');
        setSubtitleSala2('');
        setImageSala4('');
        setDescriptionSala4('');
        setSubtitleSala4('');
        setImageSala5('');
        setDescriptionSala5('');
        setSubtitleSala5('');
        setImageSala6('');
        setDescriptionSala6('');
        setSubtitleSala6('');
        setImageSala7('');
        setDescriptionSala7('');
        setSubtitleSala7('');
        setDescriptionSala8('');
        setSubtitleSala8('');
        setImageSala9('');
        setDescriptionSala9('');
        setSubtitleSala9('');
        setImageSala10('');
        setDescriptionSala10('');
        setSubtitleSala10('');
        setImageSala11('');
        setDescriptionSala11('');
        setSubtitleSala11('');
        setImageSala12('');
        setDescriptionSala12('');
        setSubtitleSala12('');
        setImageSala13('');
        setDescriptionSala13('');
        setSubtitleSala13('');
        setImageSala14('');
        setDescriptionSala14('');
        setSubtitleSala14('');
        setImageSala15('');
        setDescriptionSala15('');
        setSubtitleSala15('');
        setImageSala16('');
        setDescriptionSala16('');
        setSubtitleSala16('');
        setImageSala17('');
        setDescriptionSala17('');
        setSubtitleSala17('');
        setImageSala18('');
        setDescriptionSala18('');
        setSubtitleSala18('');
        setImageSala19('');
        setDescriptionSala19('');
        setSubtitleSala19('');
        setImageSala20('');
        setDescriptionSala20('');
        setSubtitleSala20('');
        setImageSala21('');
        setDescriptionSala21('');
        setSubtitleSala21('');
        setImageSala22('');
        setDescriptionSala22('');
        setSubtitleSala22('');
        setImageSala23('');
        setDescriptionSala23('');
        setSubtitleSala23('');
        setImageSala24('');
        setDescriptionSala24('');
        setSubtitleSala24('');
        setImageSala25('');
        setDescriptionSala25('');
        setSubtitleSala25('');
        setImageSala26('');
        setDescriptionSala26('');
        setSubtitleSala26('');
        setImageSala27('');
        setDescriptionSala27('');
        setSubtitleSala27('');
        setImageSala28('');
        setDescriptionSala28('');
        setSubtitleSala28('');
        setImageSala29('');
        setDescriptionSala29('');
        setSubtitleSala29('');
        setImageSala30('');
        setDescriptionSala30('');
        setSubtitleSala30('');
        setImageSalaCodici('');
        setDescriptionSalaCodici('');
        setSubtitleSalaCodici('');
        setImageSalaPlebisciti('');
        setDescriptionSalaPlebisciti('');
        setSubtitleSalaPlebisciti('');
        setImageCorridoiodellaCameraitaliana('');
        setDescriptionCorridoiodellaCameraitaliana('');
        setSubtitleCorridoiodellaCameraitaliana('');
    };

    const Sala4 = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        setImageSala4(Sala_4_mn_del_r_italiano);
        setDescriptionSala4("Simbolo è l'ALBERO DELLA LIBERTÀ, al centro della sala. Il colore vivace dominante evoca la nascita di Un MONDO NUOVO con la RIVOLUZIONE FRANCESE. La legittimità dell'esercizio del potere si trasferisce dai re assoluti alla nazione e perciò ai governi rappresentativi eletti dal popolo. Intanto la RIVOLUZIONE INDUSTRIALE INGLESE dà avvio a un nuovo sistema di produzione. Con gli eserciti francesi IN ITALIA irrompono i PRINCIPI RIVOLUZIONARI." );
        setSubtitleSala4('Sala 4 - Un mondo nuovo: le rivoluzioni del Settecento');
        // Resetta l'ingresso se necessario
        setImageIngresso('');
        setDescriptionIngresso('');
        setSubtitleIngresso('');
        setImageSala1('');
        setDescriptionSala1('');
        setSubtitleSala1('');
        setImageSala2('');
        setDescriptionSala2('');
        setSubtitleSala2('');
        setImageSala3('');
        setDescriptionSala3('');
        setSubtitleSala5('');
        setImageSala5('');
        setDescriptionSala5('');
        setSubtitleSala5('');
        setImageSala6('');
        setDescriptionSala6('');
        setSubtitleSala6('');
        setImageSala7('');
        setDescriptionSala7('');
        setSubtitleSala7('');
        setDescriptionSala8('');
        setSubtitleSala8('');
        setImageSala9('');
        setDescriptionSala9('');
        setSubtitleSala9('');
        setImageSala10('');
        setDescriptionSala10('');
        setSubtitleSala10('');
        setImageSala11('');
        setDescriptionSala11('');
        setSubtitleSala11('');
        setImageSala12('');
        setDescriptionSala12('');
        setSubtitleSala12('');
        setImageSala13('');
        setDescriptionSala13('');
        setSubtitleSala13('');
        setImageSala14('');
        setDescriptionSala14('');
        setSubtitleSala14('');
        setImageSala15('');
        setDescriptionSala15('');
        setSubtitleSala15('');
        setImageSala16('');
        setDescriptionSala16('');
        setSubtitleSala16('');
        setImageSala17('');
        setDescriptionSala17('');
        setSubtitleSala17('');
        setImageSala18('');
        setDescriptionSala18('');
        setSubtitleSala18('');
        setImageSala19('');
        setDescriptionSala19('');
        setSubtitleSala19('');
        setImageSala20('');
        setDescriptionSala20('');
        setSubtitleSala20('');
        setImageSala21('');
        setDescriptionSala21('');
        setSubtitleSala21('');
        setImageSala22('');
        setDescriptionSala22('');
        setSubtitleSala22('');
        setImageSala23('');
        setDescriptionSala23('');
        setSubtitleSala23('');
        setImageSala24('');
        setDescriptionSala24('');
        setSubtitleSala24('');
        setImageSala25('');
        setDescriptionSala25('');
        setSubtitleSala25('');
        setImageSala26('');
        setDescriptionSala26('');
        setSubtitleSala26('');
        setImageSala27('');
        setDescriptionSala27('');
        setSubtitleSala27('');
        setImageSala28('');
        setDescriptionSala28('');
        setSubtitleSala28('');
        setImageSala29('');
        setDescriptionSala29('');
        setSubtitleSala29('');
        setImageSala30('');
        setDescriptionSala30('');
        setSubtitleSala30('');
        setImageSalaCodici('');
        setDescriptionSalaCodici('');
        setSubtitleSalaCodici('');
        setImageSalaPlebisciti('');
        setDescriptionSalaPlebisciti('');
        setSubtitleSalaPlebisciti('');
        setImageCorridoiodellaCameraitaliana('');
        setDescriptionCorridoiodellaCameraitaliana('');
        setSubtitleCorridoiodellaCameraitaliana('');
    };

    const Sala5 = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        setImageSala5(Sala_5_mn_del_r_italiano);
        setDescriptionSala5("IL TRIENNIO RIVOLUZIONARIO IN ITALIA è ricordato dal rosso predominante nella sala. Simboli di sala sono il BERRETTO FRIGIO e il giovane GENERALE BONAPARTE. L'esposizione presenta le repubbliche in Piemonte e Liguria, la cispadana, la cisalpina, la romana, la partenopea. Prosegue con l'OFFENSIVA DEI CONTRORIVOLUZIONARI e termina con la RICONQUISTA NAPOLEONICA." );
        setSubtitleSala5('Sala 5 - Italia: occupazione francese e triennio rivoluzionario 1796-1799');
        // Resetta l'ingresso se necessario
        setImageIngresso('');
        setDescriptionIngresso('');
        setSubtitleIngresso('');
        setImageSala1('');
        setDescriptionSala1('');
        setSubtitleSala1('');
        setImageSala2('');
        setDescriptionSala2('');
        setSubtitleSala2('');
        setImageSala3('');
        setDescriptionSala3('');
        setSubtitleSala3('');
        setImageSala4('');
        setDescriptionSala4('');
        setSubtitleSala4('');
        setImageSala6('');
        setDescriptionSala6('');
        setSubtitleSala6('');
        setImageSala7('');
        setDescriptionSala7('');
        setSubtitleSala7('');
        setDescriptionSala8('');
        setSubtitleSala8('');
        setImageSala9('');
        setDescriptionSala9('');
        setSubtitleSala9('');
        setImageSala10('');
        setDescriptionSala10('');
        setSubtitleSala10('');
        setImageSala11('');
        setDescriptionSala11('');
        setSubtitleSala11('');
        setImageSala12('');
        setDescriptionSala12('');
        setSubtitleSala12('');
        setImageSala13('');
        setDescriptionSala13('');
        setSubtitleSala13('');
        setImageSala14('');
        setDescriptionSala14('');
        setSubtitleSala14('');
        setImageSala15('');
        setDescriptionSala15('');
        setSubtitleSala15('');
        setImageSala16('');
        setDescriptionSala16('');
        setSubtitleSala16('');
        setImageSala17('');
        setDescriptionSala17('');
        setSubtitleSala17('');
        setImageSala18('');
        setDescriptionSala18('');
        setSubtitleSala18('');
        setImageSala19('');
        setDescriptionSala19('');
        setSubtitleSala19('');
        setImageSala20('');
        setDescriptionSala20('');
        setSubtitleSala20('');
        setImageSala21('');
        setDescriptionSala21('');
        setSubtitleSala21('');
        setImageSala22('');
        setDescriptionSala22('');
        setSubtitleSala22('');
        setImageSala23('');
        setDescriptionSala23('');
        setSubtitleSala23('');
        setImageSala24('');
        setDescriptionSala24('');
        setSubtitleSala24('');
        setImageSala25('');
        setDescriptionSala25('');
        setSubtitleSala25('');
        setImageSala26('');
        setDescriptionSala26('');
        setSubtitleSala26('');
        setImageSala27('');
        setDescriptionSala27('');
        setSubtitleSala27('');
        setImageSala28('');
        setDescriptionSala28('');
        setSubtitleSala28('');
        setImageSala29('');
        setDescriptionSala29('');
        setSubtitleSala29('');
        setImageSala30('');
        setDescriptionSala30('');
        setSubtitleSala30('');
        setImageSalaCodici('');
        setDescriptionSalaCodici('');
        setSubtitleSalaCodici('');
        setImageSalaPlebisciti('');
        setDescriptionSalaPlebisciti('');
        setSubtitleSalaPlebisciti('');
        setImageCorridoiodellaCameraitaliana('');
        setDescriptionCorridoiodellaCameraitaliana('');
        setSubtitleCorridoiodellaCameraitaliana('');
    };

    const Sala6 = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        setImageSala6(Sala_6_mn_del_r_italiano);
        setDescriptionSala6("È la sala che testimonia le DUE ESPERIENZE PIÙ SIGNIFICATIVE DELL'ITALIA NAPOLEONICA, la Repubblica italiana poi Regno d'Italia al Nord, e il decennio francese nel Regno di Napoli. Dopo l'annessione alla Francia anche IL PIEMONTE VIVE TRASFORMAZIONI E INNOVAZIONI PORTATE DA NAPOLEONE, per quanto egli considerasse l'Italia solo una terra di conquista da spogliare di uomini e ricchezze." );
        setSubtitleSala6('Sala 6 - Italia napoleonica 1800-1814');
        // Resetta l'ingresso se necessario
        setImageIngresso('');
        setDescriptionIngresso('');
        setSubtitleIngresso('');
        setImageSala1('');
        setDescriptionSala1('');
        setSubtitleSala1('');
        setImageSala2('');
        setDescriptionSala2('');
        setSubtitleSala2('');
        setImageSala3('');
        setDescriptionSala3('');
        setSubtitleSala3('');
        setImageSala4('');
        setDescriptionSala4('');
        setSubtitleSala4('');
        setImageSala5('');
        setDescriptionSala5('');
        setSubtitleSala5('');
        setImageSala7('');
        setDescriptionSala7('');
        setSubtitleSala7('');
        setDescriptionSala8('');
        setSubtitleSala8('');
        setImageSala9('');
        setDescriptionSala9('');
        setSubtitleSala9('');
        setImageSala10('');
        setDescriptionSala10('');
        setSubtitleSala10('');
        setImageSala11('');
        setDescriptionSala11('');
        setSubtitleSala11('');
        setImageSala12('');
        setDescriptionSala12('');
        setSubtitleSala12('');
        setImageSala13('');
        setDescriptionSala13('');
        setSubtitleSala13('');
        setImageSala14('');
        setDescriptionSala14('');
        setSubtitleSala14('');
        setImageSala15('');
        setDescriptionSala15('');
        setSubtitleSala15('');
        setImageSala16('');
        setDescriptionSala16('');
        setSubtitleSala16('');
        setImageSala17('');
        setDescriptionSala17('');
        setSubtitleSala17('');
        setImageSala18('');
        setDescriptionSala18('');
        setSubtitleSala18('');
        setImageSala19('');
        setDescriptionSala19('');
        setSubtitleSala19('');
        setImageSala20('');
        setDescriptionSala20('');
        setSubtitleSala20('');
        setImageSala21('');
        setDescriptionSala21('');
        setSubtitleSala21('');
        setImageSala22('');
        setDescriptionSala22('');
        setSubtitleSala22('');
        setImageSala23('');
        setDescriptionSala23('');
        setSubtitleSala23('');
        setImageSala24('');
        setDescriptionSala24('');
        setSubtitleSala24('');
        setImageSala25('');
        setDescriptionSala25('');
        setSubtitleSala25('');
        setImageSala26('');
        setDescriptionSala26('');
        setSubtitleSala26('');
        setImageSala27('');
        setDescriptionSala27('');
        setSubtitleSala27('');
        setImageSala28('');
        setDescriptionSala28('');
        setSubtitleSala28('');
        setImageSala29('');
        setDescriptionSala29('');
        setSubtitleSala29('');
        setImageSala30('');
        setDescriptionSala30('');
        setSubtitleSala30('');
        setImageSalaCodici('');
        setDescriptionSalaCodici('');
        setSubtitleSalaCodici('');
        setImageSalaPlebisciti('');
        setDescriptionSalaPlebisciti('');
        setSubtitleSalaPlebisciti('');
        setImageCorridoiodellaCameraitaliana('');
        setDescriptionCorridoiodellaCameraitaliana('');
        setSubtitleCorridoiodellaCameraitaliana('');
    };

    const Sala7 = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        setImageSala7(Sala_7_mn_del_r_italiano);
        setDescriptionSala7("Il COLORE ORO richiama la GLORIA DELL'IMPERO FRANCESE, che porta una PROFONDA RIORGANIZZAZIONE DELLA SOCIETà E DELLO STATO e ispierà le borghesie ottocentesche. La sala ricorda anche i contrasti, glia avversari, le ribellioni e i fermenti nazionali. Napolenone e l'impero CROLLANO NEL 1814. In esilio all'Elba, nel 1815 fugge e rientra in Francia, per essere però <b>DEFINIVAMENTE SCONFITTO</b>");
        setSubtitleSala7('Sala 7 - Consolato e impero napoleonico 1799-1815');
        // Resetta l'ingresso se necessario
        setImageIngresso('');
        setDescriptionIngresso('');
        setSubtitleIngresso('');
        setImageSala1('');
        setDescriptionSala1('');
        setSubtitleSala1('');
        setImageSala2('');
        setDescriptionSala2('');
        setSubtitleSala2('');
        setImageSala3('');
        setDescriptionSala3('');
        setSubtitleSala3('');
        setImageSala4('');
        setDescriptionSala4('');
        setSubtitleSala4('');
        setImageSala5('');
        setDescriptionSala5('');
        setSubtitleSala5('');
        setImageSala6('');
        setDescriptionSala6('');
        setSubtitleSala6('');
        setImageSala7('');
        setDescriptionSala8('');
        setSubtitleSala8('');
        setImageSala9('');
        setDescriptionSala9('');
        setSubtitleSala9('');
        setImageSala10('');
        setDescriptionSala10('');
        setSubtitleSala10('');
        setImageSala11('');
        setDescriptionSala11('');
        setSubtitleSala11('');
        setImageSala12('');
        setDescriptionSala12('');
        setSubtitleSala12('');
        setImageSala13('');
        setDescriptionSala13('');
        setSubtitleSala13('');
        setImageSala14('');
        setDescriptionSala14('');
        setSubtitleSala14('');
        setImageSala15('');
        setDescriptionSala15('');
        setSubtitleSala15('');
        setImageSala16('');
        setDescriptionSala16('');
        setSubtitleSala16('');
        setImageSala17('');
        setDescriptionSala17('');
        setSubtitleSala17('');
        setImageSala18('');
        setDescriptionSala18('');
        setSubtitleSala18('');
        setImageSala19('');
        setDescriptionSala19('');
        setSubtitleSala19('');
        setImageSala20('');
        setDescriptionSala20('');
        setSubtitleSala20('');
        setImageSala21('');
        setDescriptionSala21('');
        setSubtitleSala21('');
        setImageSala22('');
        setDescriptionSala22('');
        setSubtitleSala22('');
        setImageSala23('');
        setDescriptionSala23('');
        setSubtitleSala23('');
        setImageSala24('');
        setDescriptionSala24('');
        setSubtitleSala24('');
        setImageSala25('');
        setDescriptionSala25('');
        setSubtitleSala25('');
        setImageSala26('');
        setDescriptionSala26('');
        setSubtitleSala26('');
        setImageSala27('');
        setDescriptionSala27('');
        setSubtitleSala27('');
        setImageSala28('');
        setDescriptionSala28('');
        setSubtitleSala28('');
        setImageSala29('');
        setDescriptionSala29('');
        setSubtitleSala29('');
        setImageSala30('');
        setDescriptionSala30('');
        setSubtitleSala30('');
        setImageSalaCodici('');
        setDescriptionSalaCodici('');
        setSubtitleSalaCodici('');
        setImageSalaPlebisciti('');
        setDescriptionSalaPlebisciti('');
        setSubtitleSalaPlebisciti('');
        setImageCorridoiodellaCameraitaliana('');
        setDescriptionCorridoiodellaCameraitaliana('');
        setSubtitleCorridoiodellaCameraitaliana('');
    };

    const Sala8 = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        setImageSala8(Sala_8_mn_del_r_italiano);
        setDescriptionSala8("Il COLORE FREDDO dell'età della RESTAURAZIONE avvolge due simboli contrapposti, il solenne RITORNO DI VITORIO EMANUELE I a Torino e il piccolo titratto del COSPIRATORE ROMANTICO. Alla negazione delle attese di libertà diffuse nell'epoca precedente risposero in Europa la SOCIETÀ SEGRETE E I MOTI RIVOLUZIONARI degli anni Venti." );
        setSubtitleSala8('Sala 8 - Restaurazione, società segrete, insurrezioni 1815-1830');
        // Resetta l'ingresso se necessario
        setImageIngresso('');
        setDescriptionIngresso('');
        setSubtitleIngresso('');
        setImageSala1('');
        setDescriptionSala1('');
        setSubtitleSala1('');
        setImageSala2('');
        setDescriptionSala2('');
        setSubtitleSala2('');
        setImageSala3('');
        setDescriptionSala3('');
        setSubtitleSala3('');
        setImageSala4('');
        setDescriptionSala4('');
        setSubtitleSala4('');
        setImageSala5('');
        setDescriptionSala5('');
        setSubtitleSala5('');
        setImageSala6('');
        setDescriptionSala6('');
        setSubtitleSala6('');
        setImageSala7('');
        setDescriptionSala7('');
        setSubtitleSala7('');
        setImageSala9('');
        setDescriptionSala9('');
        setSubtitleSala9('');
        setImageSala10('');
        setDescriptionSala10('');
        setSubtitleSala10('');
        setImageSala11('');
        setDescriptionSala11('');
        setSubtitleSala11('');
        setImageSala12('');
        setDescriptionSala12('');
        setSubtitleSala12('');
        setImageSala13('');
        setDescriptionSala13('');
        setSubtitleSala13('');
        setImageSala14('');
        setDescriptionSala14('');
        setSubtitleSala14('');
        setImageSala15('');
        setDescriptionSala15('');
        setSubtitleSala15('');
        setImageSala16('');
        setDescriptionSala16('');
        setSubtitleSala16('');
        setImageSala17('');
        setDescriptionSala17('');
        setSubtitleSala17('');
        setImageSala18('');
        setDescriptionSala18('');
        setSubtitleSala18('');
        setImageSala19('');
        setDescriptionSala19('');
        setSubtitleSala19('');
        setImageSala20('');
        setDescriptionSala20('');
        setSubtitleSala20('');
        setImageSala21('');
        setDescriptionSala21('');
        setSubtitleSala21('');
        setImageSala22('');
        setDescriptionSala22('');
        setSubtitleSala22('');
        setImageSala23('');
        setDescriptionSala23('');
        setSubtitleSala23('');
        setImageSala24('');
        setDescriptionSala24('');
        setSubtitleSala24('');
        setImageSala25('');
        setDescriptionSala25('');
        setSubtitleSala25('');
        setImageSala26('');
        setDescriptionSala26('');
        setSubtitleSala26('');
        setImageSala27('');
        setDescriptionSala27('');
        setSubtitleSala27('');
        setImageSala28('');
        setDescriptionSala28('');
        setSubtitleSala28('');
        setImageSala29('');
        setDescriptionSala29('');
        setSubtitleSala29('');
        setImageSala30('');
        setDescriptionSala30('');
        setSubtitleSala30('');
        setImageSalaCodici('');
        setDescriptionSalaCodici('');
        setSubtitleSalaCodici('');
        setImageSalaPlebisciti('');
        setDescriptionSalaPlebisciti('');
        setSubtitleSalaPlebisciti('');
        setImageCorridoiodellaCameraitaliana('');
        setDescriptionCorridoiodellaCameraitaliana('');
        setSubtitleCorridoiodellaCameraitaliana('');
    };

    const Sala9 = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        setImageSala9(Sala_9_mn_del_r_italiano);
        setDescriptionSala9("La sala illustra la REPRESSIONE del dissenso politico nell'età della Restaurazione, con la ricostruzione della CELLA DI SILVIO PELLICO allo Spielberg. Intorno all'affaccio sulla cella sono evocate le figure di altri carbonari del Lombardo-Veneto arrestati nel 1820 e la staordinaria poplartà de Le mie prigioni.");
        setSubtitleSala9('Sala 9 - Repressione dell‘opposizione politica');
        // Resetta l'ingresso se necessario
        setImageIngresso('');
        setDescriptionIngresso('');
        setSubtitleIngresso('');
        setImageSala1('');
        setDescriptionSala1('');
        setSubtitleSala1('');
        setImageSala2('');
        setDescriptionSala2('');
        setSubtitleSala2('');
        setImageSala3('');
        setDescriptionSala3('');
        setSubtitleSala3('');
        setImageSala4('');
        setDescriptionSala4('');
        setSubtitleSala4('');
        setImageSala5('');
        setDescriptionSala5('');
        setSubtitleSala5('');
        setImageSala6('');
        setDescriptionSala6('');
        setSubtitleSala6('');
        setImageSala7('');
        setDescriptionSala7('');
        setSubtitleSala7('');
        setImageSala8('');
        setDescriptionSala8('');
        setSubtitleSala8('');
        setImageSala10('');
        setDescriptionSala10('');
        setSubtitleSala10('');
        setImageSala11('');
        setDescriptionSala11('');
        setSubtitleSala11('');
        setImageSala12('');
        setDescriptionSala12('');
        setSubtitleSala12('');
        setImageSala13('');
        setDescriptionSala13('');
        setSubtitleSala13('');
        setImageSala14('');
        setDescriptionSala14('');
        setSubtitleSala14('');
        setImageSala15('');
        setDescriptionSala15('');
        setSubtitleSala15('');
        setImageSala16('');
        setDescriptionSala16('');
        setSubtitleSala16('');
        setImageSala17('');
        setDescriptionSala17('');
        setSubtitleSala17('');
        setImageSala18('');
        setDescriptionSala18('');
        setSubtitleSala18('');
        setImageSala19('');
        setDescriptionSala19('');
        setSubtitleSala19('');
        setImageSala20('');
        setDescriptionSala20('');
        setSubtitleSala20('');
        setImageSala21('');
        setDescriptionSala21('');
        setSubtitleSala21('');
        setImageSala22('');
        setDescriptionSala22('');
        setSubtitleSala22('');
        setImageSala23('');
        setDescriptionSala23('');
        setSubtitleSala23('');
        setImageSala24('');
        setDescriptionSala24('');
        setSubtitleSala24('');
        setImageSala25('');
        setDescriptionSala25('');
        setSubtitleSala25('');
        setImageSala26('');
        setDescriptionSala26('');
        setSubtitleSala26('');
        setImageSala27('');
        setDescriptionSala27('');
        setSubtitleSala27('');
        setImageSala28('');
        setDescriptionSala28('');
        setSubtitleSala28('');
        setImageSala29('');
        setDescriptionSala29('');
        setSubtitleSala29('');
        setImageSala30('');
        setDescriptionSala30('');
        setSubtitleSala30('');
        setImageSalaCodici('');
        setDescriptionSalaCodici('');
        setSubtitleSalaCodici('');
        setImageSalaPlebisciti('');
        setDescriptionSalaPlebisciti('');
        setSubtitleSalaPlebisciti('');
        setImageCorridoiodellaCameraitaliana('');
        setDescriptionCorridoiodellaCameraitaliana('');
        setSubtitleCorridoiodellaCameraitaliana('');
    };

    const Sala10 = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        setImageSala10(Sala_10_mn_del_r_italiano);
        setDescriptionSala10("La sala si sviluppa intorno a DUE POLI. Uno è europeo, con filmati che sul monitor si susseguono e illustrano LE RADICI CULTURALI E LE LOTTE POLITICHE DI NAZIONALITÀ in vari paesi fino alle rivoluzioni del 1830. L'altro è italiano, dedicato al MOVIMENTO DEMOCRATICO che ha per simbolo GIUSEPPE MAZZINI.");
        setSubtitleSala10('Sala 10 - Rivoluzioni del 1830, fermenti di nazionalità, movimento democratico in Italia');
        // Resetta l'ingresso se necessario
        setImageIngresso('');
        setDescriptionIngresso('');
        setSubtitleIngresso('');
        setImageSala1('');
        setDescriptionSala1('');
        setSubtitleSala1('');
        setImageSala2('');
        setDescriptionSala2('');
        setSubtitleSala2('');
        setImageSala3('');
        setDescriptionSala3('');
        setSubtitleSala3('');
        setImageSala4('');
        setDescriptionSala4('');
        setSubtitleSala4('');
        setImageSala5('');
        setDescriptionSala5('');
        setSubtitleSala5('');
        setImageSala6('');
        setDescriptionSala6('');
        setSubtitleSala6('');
        setImageSala7('');
        setDescriptionSala7('');
        setSubtitleSala7('');
        setImageSala8('');
        setDescriptionSala8('');
        setSubtitleSala8('');
        setImageSala9('');
        setDescriptionSala9('');
        setSubtitleSala9('');
        setImageSala11('');
        setDescriptionSala11('');
        setSubtitleSala11('');
        setImageSala12('');
        setDescriptionSala12('');
        setSubtitleSala12('');
        setImageSala13('');
        setDescriptionSala13('');
        setSubtitleSala13('');
        setImageSala14('');
        setDescriptionSala14('');
        setSubtitleSala14('');
        setImageSala15('');
        setDescriptionSala15('');
        setSubtitleSala15('');
        setImageSala16('');
        setDescriptionSala16('');
        setSubtitleSala16('');
        setImageSala17('');
        setDescriptionSala17('');
        setSubtitleSala17('');
        setImageSala18('');
        setDescriptionSala18('');
        setSubtitleSala18('');
        setImageSala19('');
        setDescriptionSala19('');
        setSubtitleSala19('');
        setImageSala20('');
        setDescriptionSala20('');
        setSubtitleSala20('');
        setImageSala21('');
        setDescriptionSala21('');
        setSubtitleSala21('');
        setImageSala22('');
        setDescriptionSala22('');
        setSubtitleSala22('');
        setImageSala23('');
        setDescriptionSala23('');
        setSubtitleSala23('');
        setImageSala24('');
        setDescriptionSala24('');
        setSubtitleSala24('');
        setImageSala25('');
        setDescriptionSala25('');
        setSubtitleSala25('');
        setImageSala26('');
        setDescriptionSala26('');
        setSubtitleSala26('');
        setImageSala27('');
        setDescriptionSala27('');
        setSubtitleSala27('');
        setImageSala28('');
        setDescriptionSala28('');
        setSubtitleSala28('');
        setImageSala29('');
        setDescriptionSala29('');
        setSubtitleSala29('');
        setImageSala30('');
        setDescriptionSala30('');
        setSubtitleSala30('');
        setImageSalaCodici('');
        setDescriptionSalaCodici('');
        setSubtitleSalaCodici('');
        setImageSalaPlebisciti('');
        setDescriptionSalaPlebisciti('');
        setSubtitleSalaPlebisciti('');
        setImageCorridoiodellaCameraitaliana('');
        setDescriptionCorridoiodellaCameraitaliana('');
        setSubtitleCorridoiodellaCameraitaliana('');
    };

    const Sala11 = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        setImageSala11(Sala_11_mn_del_r_italiano);
        setDescriptionSala11("La sala illistra l'ALTERNATIVA MODERNA-RIFORMATRICE ALL'AZIONE MAZZINIANA della sala precedente. È dedicata alla CRESCITA DEL MOVIMENTO LIBERALE in Italia e in particolare in Piemonte, sopratutto tra il 1846 e il 1848. L?AZZURRO della sala evoca il colore dominante nei sindoli moderati dell'epoca.");
        setSubtitleSala11('Sala 11 - Italia: liberali moderati, sovrani, riforme');
        // Resetta l'ingresso se necessario
        setImageIngresso('');
        setDescriptionIngresso('');
        setSubtitleIngresso('');
        setImageSala1('');
        setDescriptionSala1('');
        setSubtitleSala1('');
        setImageSala2('');
        setDescriptionSala2('');
        setSubtitleSala2('');
        setImageSala3('');
        setDescriptionSala3('');
        setSubtitleSala3('');
        setImageSala4('');
        setDescriptionSala4('');
        setSubtitleSala4('');
        setImageSala5('');
        setDescriptionSala5('');
        setSubtitleSala5('');
        setImageSala6('');
        setDescriptionSala6('');
        setSubtitleSala6('');
        setImageSala7('');
        setDescriptionSala7('');
        setSubtitleSala7('');
        setImageSala8('');
        setDescriptionSala8('');
        setSubtitleSala8('');
        setImageSala9('');
        setDescriptionSala9('');
        setSubtitleSala9('');
        setImageSala10('');
        setDescriptionSala10('');
        setSubtitleSala10('');
        setImageSala12('');
        setDescriptionSala12('');
        setSubtitleSala12('');
        setImageSala13('');
        setDescriptionSala13('');
        setSubtitleSala13('');
        setImageSala14('');
        setDescriptionSala14('');
        setSubtitleSala14('');
        setImageSala15('');
        setDescriptionSala15('');
        setSubtitleSala15('');
        setImageSala16('');
        setDescriptionSala16('');
        setSubtitleSala16('');
        setImageSala17('');
        setDescriptionSala17('');
        setSubtitleSala17('');
        setImageSala18('');
        setDescriptionSala18('');
        setSubtitleSala18('');
        setImageSala19('');
        setDescriptionSala19('');
        setSubtitleSala19('');
        setImageSala20('');
        setDescriptionSala20('');
        setSubtitleSala20('');
        setImageSala21('');
        setDescriptionSala21('');
        setSubtitleSala21('');
        setImageSala22('');
        setDescriptionSala22('');
        setSubtitleSala22('');
        setImageSala23('');
        setDescriptionSala23('');
        setSubtitleSala23('');
        setImageSala24('');
        setDescriptionSala24('');
        setSubtitleSala24('');
        setImageSala25('');
        setDescriptionSala25('');
        setSubtitleSala25('');
        setImageSala26('');
        setDescriptionSala26('');
        setSubtitleSala26('');
        setImageSala27('');
        setDescriptionSala27('');
        setSubtitleSala27('');
        setImageSala28('');
        setDescriptionSala28('');
        setSubtitleSala28('');
        setImageSala29('');
        setDescriptionSala29('');
        setSubtitleSala29('');
        setImageSala30('');
        setDescriptionSala30('');
        setSubtitleSala30('');
        setImageSalaCodici('');
        setDescriptionSalaCodici('');
        setSubtitleSalaCodici('');
        setImageSalaPlebisciti('');
        setDescriptionSalaPlebisciti('');
        setSubtitleSalaPlebisciti('');
        setImageCorridoiodellaCameraitaliana('');
        setDescriptionCorridoiodellaCameraitaliana('');
        setSubtitleCorridoiodellaCameraitaliana('');
    };

    const Sala12 = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        setImageSala12(Sala_12_mn_del_r_italiano);
        setDescriptionSala12("È la sala delle COSTITUZIONI concesse nel 1848, in particolare dello STATUTO ALBERTINO. Lw pareti sono di colore BLUE SALVIA. In particolare troviamo il BUSTO DI CARLO ALBERTO e l'originale dello SPARTITO DEL CANTO DEGLI ITALIANI , poi FRATELLI D'ITALIA, musicato da Michele Novaro su parole del mazxziniano Goffredo Maneli, nel clima di entusiamo per le riforme nel novembre 1847.");
        setSubtitleSala12('Sala 12 - Italia: Statuto albertino e costituzioni del 1848');
        // Resetta l'ingresso se necessario
        setImageIngresso('');
        setDescriptionIngresso('');
        setSubtitleIngresso('');
        setImageSala1('');
        setDescriptionSala1('');
        setSubtitleSala1('');
        setImageSala2('');
        setDescriptionSala2('');
        setSubtitleSala2('');
        setImageSala3('');
        setDescriptionSala3('');
        setSubtitleSala3('');
        setImageSala4('');
        setDescriptionSala4('');
        setSubtitleSala4('');
        setImageSala5('');
        setDescriptionSala5('');
        setSubtitleSala5('');
        setImageSala6('');
        setDescriptionSala6('');
        setSubtitleSala6('');
        setImageSala7('');
        setDescriptionSala7('');
        setSubtitleSala7('');
        setImageSala8('');
        setDescriptionSala8('');
        setSubtitleSala8('');
        setImageSala9('');
        setDescriptionSala9('');
        setSubtitleSala9('');
        setImageSala10('');
        setDescriptionSala10('');
        setSubtitleSala10('');
        setImageSala11('');
        setDescriptionSala11('');
        setSubtitleSala11('');
        setImageSala13('');
        setDescriptionSala13('');
        setSubtitleSala13('');
        setImageSala14('');
        setDescriptionSala14('');
        setSubtitleSala14('');
        setImageSala15('');
        setDescriptionSala15('');
        setSubtitleSala15('');
        setImageSala16('');
        setDescriptionSala16('');
        setSubtitleSala16('');
        setImageSala17('');
        setDescriptionSala17('');
        setSubtitleSala17('');
        setImageSala18('');
        setDescriptionSala18('');
        setSubtitleSala18('');
        setImageSala19('');
        setDescriptionSala19('');
        setSubtitleSala19('');
        setImageSala20('');
        setDescriptionSala20('');
        setSubtitleSala20('');
        setImageSala21('');
        setDescriptionSala21('');
        setSubtitleSala21('');
        setImageSala22('');
        setDescriptionSala22('');
        setSubtitleSala22('');
        setImageSala23('');
        setDescriptionSala23('');
        setSubtitleSala23('');
        setImageSala24('');
        setDescriptionSala24('');
        setSubtitleSala24('');
        setImageSala25('');
        setDescriptionSala25('');
        setSubtitleSala25('');
        setImageSala26('');
        setDescriptionSala26('');
        setSubtitleSala26('');
        setImageSala27('');
        setDescriptionSala27('');
        setSubtitleSala27('');
        setImageSala28('');
        setDescriptionSala28('');
        setSubtitleSala28('');
        setImageSala29('');
        setDescriptionSala29('');
        setSubtitleSala29('');
        setImageSala30('');
        setDescriptionSala30('');
        setSubtitleSala30('');
        setImageSalaCodici('');
        setDescriptionSalaCodici('');
        setSubtitleSalaCodici('');
        setImageSalaPlebisciti('');
        setDescriptionSalaPlebisciti('');
        setSubtitleSalaPlebisciti('');
        setImageCorridoiodellaCameraitaliana('');
        setDescriptionCorridoiodellaCameraitaliana('');
        setSubtitleCorridoiodellaCameraitaliana('');
    };

    const Sala13 = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        setImageSala13(Sala_13_mn_del_r_italiano);
        setDescriptionSala13("Le RIVOLUZIONI del 1848 e 1849 sono illustrate in chiave EUROPEA E ITALIANA. Il TORCHIO AUSTIACO è il simbolo di sala, a ricordo della libertà di stampa. Il persorso spazia tra Parigi, le aree austro-ungarica, germanica, polacca, ottomana, e, in Italia, dalle Cinque giornate di Milano alle altre insurrezioni, alle ripubbliche di VENEZIE e di ROMA.");
        setSubtitleSala13('Sala 13 - Europa e Italia: rivoluzioni e insurrezioni del 1848');
        // Resetta l'ingresso se necessario
        setImageIngresso('');
        setDescriptionIngresso('');
        setSubtitleIngresso('');
        setImageSala1('');
        setDescriptionSala1('');
        setSubtitleSala1('');
        setImageSala2('');
        setDescriptionSala2('');
        setSubtitleSala2('');
        setImageSala3('');
        setDescriptionSala3('');
        setSubtitleSala3('');
        setImageSala4('');
        setDescriptionSala4('');
        setSubtitleSala4('');
        setImageSala5('');
        setDescriptionSala5('');
        setSubtitleSala5('');
        setImageSala6('');
        setDescriptionSala6('');
        setSubtitleSala6('');
        setImageSala7('');
        setDescriptionSala7('');
        setSubtitleSala7('');
        setImageSala8('');
        setDescriptionSala8('');
        setSubtitleSala8('');
        setImageSala9('');
        setDescriptionSala9('');
        setSubtitleSala9('');
        setImageSala10('');
        setDescriptionSala10('');
        setSubtitleSala10('');
        setImageSala11('');
        setDescriptionSala11('');
        setSubtitleSala11('');
        setImageSala12('');
        setDescriptionSala12('');
        setSubtitleSala12('');
        setImageSala14('');
        setDescriptionSala14('');
        setSubtitleSala14('');
        setImageSala15('');
        setDescriptionSala15('');
        setSubtitleSala15('');
        setImageSala16('');
        setDescriptionSala16('');
        setSubtitleSala16('');
        setImageSala17('');
        setDescriptionSala17('');
        setSubtitleSala17('');
        setImageSala18('');
        setDescriptionSala18('');
        setSubtitleSala18('');
        setImageSala19('');
        setDescriptionSala19('');
        setSubtitleSala19('');
        setImageSala20('');
        setDescriptionSala20('');
        setSubtitleSala20('');
        setImageSala21('');
        setDescriptionSala21('');
        setSubtitleSala21('');
        setImageSala22('');
        setDescriptionSala22('');
        setSubtitleSala22('');
        setImageSala23('');
        setDescriptionSala23('');
        setSubtitleSala23('');
        setImageSala24('');
        setDescriptionSala24('');
        setSubtitleSala24('');
        setImageSala25('');
        setDescriptionSala25('');
        setSubtitleSala25('');
        setImageSala26('');
        setDescriptionSala26('');
        setSubtitleSala26('');
        setImageSala27('');
        setDescriptionSala27('');
        setSubtitleSala27('');
        setImageSala28('');
        setDescriptionSala28('');
        setSubtitleSala28('');
        setImageSala29('');
        setDescriptionSala29('');
        setSubtitleSala29('');
        setImageSala30('');
        setDescriptionSala30('');
        setSubtitleSala30('');
        setImageSalaCodici('');
        setDescriptionSalaCodici('');
        setSubtitleSalaCodici('');
        setImageSalaPlebisciti('');
        setDescriptionSalaPlebisciti('');
        setSubtitleSalaPlebisciti('');
        setImageCorridoiodellaCameraitaliana('');
        setDescriptionCorridoiodellaCameraitaliana('');
        setSubtitleCorridoiodellaCameraitaliana('');
    };

    const Sala14 = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        setImageSala14(Sala_14_mn_del_r_italiano);
        setDescriptionSala14("È una sala ITALIANA-PIEMONTESE che racconta la PRIMA GUERRA D'INDIPENDENZA nel 1848/49. Nell'ambiente prevale l'aspetto militare dal punto di vista piemontese e da quello austiaco. L'esposizione illustra anche la presenza dei VOLONTARI ITALIANI e dei contingenti degli altri stati accanto all'ESERCITO SABAUTO.");
        setSubtitleSala14('Sala 14 - Italia: La prima guerra d‘indipendenza 1848-1849');
        // Resetta l'ingresso se necessario
        setImageIngresso('');
        setDescriptionIngresso('');
        setSubtitleIngresso('');
        setImageSala1('');
        setDescriptionSala1('');
        setSubtitleSala1('');
        setImageSala2('');
        setDescriptionSala2('');
        setSubtitleSala2('');
        setImageSala3('');
        setDescriptionSala3('');
        setSubtitleSala3('');
        setImageSala4('');
        setDescriptionSala4('');
        setSubtitleSala4('');
        setImageSala5('');
        setDescriptionSala5('');
        setSubtitleSala5('');
        setImageSala6('');
        setDescriptionSala6('');
        setSubtitleSala6('');
        setImageSala7('');
        setDescriptionSala7('');
        setSubtitleSala7('');
        setImageSala8('');
        setDescriptionSala8('');
        setSubtitleSala8('');
        setImageSala9('');
        setDescriptionSala9('');
        setSubtitleSala9('');
        setImageSala10('');
        setDescriptionSala10('');
        setSubtitleSala10('');
        setImageSala11('');
        setDescriptionSala11('');
        setSubtitleSala11('');
        setImageSala12('');
        setDescriptionSala12('');
        setSubtitleSala12('');
        setImageSala13('');
        setDescriptionSala13('');
        setSubtitleSala13('');
        setImageSala15('');
        setDescriptionSala15('');
        setSubtitleSala15('');
        setImageSala16('');
        setDescriptionSala16('');
        setSubtitleSala16('');
        setImageSala17('');
        setDescriptionSala17('');
        setSubtitleSala17('');
        setImageSala18('');
        setDescriptionSala18('');
        setSubtitleSala18('');
        setImageSala19('');
        setDescriptionSala19('');
        setSubtitleSala19('');
        setImageSala20('');
        setDescriptionSala20('');
        setSubtitleSala20('');
        setImageSala21('');
        setDescriptionSala21('');
        setSubtitleSala21('');
        setImageSala22('');
        setDescriptionSala22('');
        setSubtitleSala22('');
        setImageSala23('');
        setDescriptionSala23('');
        setSubtitleSala23('');
        setImageSala24('');
        setDescriptionSala24('');
        setSubtitleSala24('');
        setImageSala25('');
        setDescriptionSala25('');
        setSubtitleSala25('');
        setImageSala26('');
        setDescriptionSala26('');
        setSubtitleSala26('');
        setImageSala27('');
        setDescriptionSala27('');
        setSubtitleSala27('');
        setImageSala28('');
        setDescriptionSala28('');
        setSubtitleSala28('');
        setImageSala29('');
        setDescriptionSala29('');
        setSubtitleSala29('');
        setImageSala30('');
        setDescriptionSala30('');
        setSubtitleSala30('');
        setImageSalaCodici('');
        setDescriptionSalaCodici('');
        setSubtitleSalaCodici('');
        setImageSalaPlebisciti('');
        setDescriptionSalaPlebisciti('');
        setSubtitleSalaPlebisciti('');
        setImageCorridoiodellaCameraitaliana('');
        setDescriptionCorridoiodellaCameraitaliana('');
        setSubtitleCorridoiodellaCameraitaliana('');
    };

    const Sala15 = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        setImageSala15(Sala_15_mn_del_r_italiano);
        setDescriptionSala15("Contiene i MOBILI ORIGINALI e la ricostruzione fedele della camera in cui morì CARLO ALBERTO a Oporto nel 1849. Salendo sul cubo di vetro in cui la camera è esposta si ha una veduta d'insieme della'alto dell'AULA DELLA CAMERA SUBALPINA, che non è accessibile al pubblico per ragioni di conservazione.");
        setSubtitleSala15('Sala 15 - L‘esilio e la morte di Carlo Alberto 1849');
        // Resetta l'ingresso se necessario
        setImageIngresso('');
        setDescriptionIngresso('');
        setSubtitleIngresso('');
        setImageSala1('');
        setDescriptionSala1('');
        setSubtitleSala1('');
        setImageSala2('');
        setDescriptionSala2('');
        setSubtitleSala2('');
        setImageSala3('');
        setDescriptionSala3('');
        setSubtitleSala3('');
        setImageSala4('');
        setDescriptionSala4('');
        setSubtitleSala4('');
        setImageSala5('');
        setDescriptionSala5('');
        setSubtitleSala5('');
        setImageSala6('');
        setDescriptionSala6('');
        setSubtitleSala6('');
        setImageSala7('');
        setDescriptionSala7('');
        setSubtitleSala7('');
        setImageSala8('');
        setDescriptionSala8('');
        setSubtitleSala8('');
        setImageSala9('');
        setDescriptionSala9('');
        setSubtitleSala9('');
        setImageSala10('');
        setDescriptionSala10('');
        setSubtitleSala10('');
        setImageSala11('');
        setDescriptionSala11('');
        setSubtitleSala11('');
        setImageSala12('');
        setDescriptionSala12('');
        setSubtitleSala12('');
        setImageSala13('');
        setDescriptionSala13('');
        setSubtitleSala13('');
        setImageSala14('');
        setDescriptionSala14('');
        setSubtitleSala14('');
        setImageSala16('');
        setDescriptionSala16('');
        setSubtitleSala16('');
        setImageSala17('');
        setDescriptionSala17('');
        setSubtitleSala17('');
        setImageSala18('');
        setDescriptionSala18('');
        setSubtitleSala18('');
        setImageSala19('');
        setDescriptionSala19('');
        setSubtitleSala19('');
        setImageSala20('');
        setDescriptionSala20('');
        setSubtitleSala20('');
        setImageSala21('');
        setDescriptionSala21('');
        setSubtitleSala21('');
        setImageSala22('');
        setDescriptionSala22('');
        setSubtitleSala22('');
        setImageSala23('');
        setDescriptionSala23('');
        setSubtitleSala23('');
        setImageSala24('');
        setDescriptionSala24('');
        setSubtitleSala24('');
        setImageSala25('');
        setDescriptionSala25('');
        setSubtitleSala25('');
        setImageSala26('');
        setDescriptionSala26('');
        setSubtitleSala26('');
        setImageSala27('');
        setDescriptionSala27('');
        setSubtitleSala27('');
        setImageSala28('');
        setDescriptionSala28('');
        setSubtitleSala28('');
        setImageSala29('');
        setDescriptionSala29('');
        setSubtitleSala29('');
        setImageSala30('');
        setDescriptionSala30('');
        setSubtitleSala30('');
        setImageSalaCodici('');
        setDescriptionSalaCodici('');
        setSubtitleSalaCodici('');
        setImageSalaPlebisciti('');
        setDescriptionSalaPlebisciti('');
        setSubtitleSalaPlebisciti('');
        setImageCorridoiodellaCameraitaliana('');
        setDescriptionCorridoiodellaCameraitaliana('');
        setSubtitleCorridoiodellaCameraitaliana('');
    };

    const Sala16 = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        setImageSala16(Sala_16_mn_del_r_italiano);
        setDescriptionSala16("È l'aula della CAMERA DEI DEPUTATI SUBALPINA, monumento nazionale dal 1898. Da una vetrata si scorge il BALCONE DI PALAZZO CARIGNANO da cui il 13 marzo 1821 Carlo Alberto dichiarò di accettare la costituzione spagnola, poi subito abrogata.");
        setSubtitleSala16('Sala 16 - La Camera dei Deputati del parlamento subalpino 1848-1860');
        // Resetta l'ingresso se necessario
        setImageIngresso('');
        setDescriptionIngresso('');
        setSubtitleIngresso('');
        setImageSala1('');
        setDescriptionSala1('');
        setSubtitleSala1('');
        setImageSala2('');
        setDescriptionSala2('');
        setSubtitleSala2('');
        setImageSala3('');
        setDescriptionSala3('');
        setSubtitleSala3('');
        setImageSala4('');
        setDescriptionSala4('');
        setSubtitleSala4('');
        setImageSala5('');
        setDescriptionSala5('');
        setSubtitleSala5('');
        setImageSala6('');
        setDescriptionSala6('');
        setSubtitleSala6('');
        setImageSala7('');
        setDescriptionSala7('');
        setSubtitleSala7('');
        setImageSala8('');
        setDescriptionSala8('');
        setSubtitleSala8('');
        setImageSala9('');
        setDescriptionSala9('');
        setSubtitleSala9('');
        setImageSala10('');
        setDescriptionSala10('');
        setSubtitleSala10('');
        setImageSala11('');
        setDescriptionSala11('');
        setSubtitleSala11('');
        setImageSala12('');
        setDescriptionSala12('');
        setSubtitleSala12('');
        setImageSala13('');
        setDescriptionSala13('');
        setSubtitleSala13('');
        setImageSala14('');
        setDescriptionSala14('');
        setSubtitleSala14('');
        setImageSala15('');
        setDescriptionSala15('');
        setSubtitleSala15('');
        setImageSala17('');
        setDescriptionSala17('');
        setSubtitleSala17('');
        setImageSala18('');
        setDescriptionSala18('');
        setSubtitleSala18('');
        setImageSala19('');
        setDescriptionSala19('');
        setSubtitleSala19('');
        setImageSala20('');
        setDescriptionSala20('');
        setSubtitleSala20('');
        setImageSala21('');
        setDescriptionSala21('');
        setSubtitleSala21('');
        setImageSala22('');
        setDescriptionSala22('');
        setSubtitleSala22('');
        setImageSala23('');
        setDescriptionSala23('');
        setSubtitleSala23('');
        setImageSala24('');
        setDescriptionSala24('');
        setSubtitleSala24('');
        setImageSala25('');
        setDescriptionSala25('');
        setSubtitleSala25('');
        setImageSala26('');
        setDescriptionSala26('');
        setSubtitleSala26('');
        setImageSala27('');
        setDescriptionSala27('');
        setSubtitleSala27('');
        setImageSala28('');
        setDescriptionSala28('');
        setSubtitleSala28('');
        setImageSala29('');
        setDescriptionSala29('');
        setSubtitleSala29('');
        setImageSala30('');
        setDescriptionSala30('');
        setSubtitleSala30('');
        setImageSalaCodici('');
        setDescriptionSalaCodici('');
        setSubtitleSalaCodici('');
        setImageSalaPlebisciti('');
        setDescriptionSalaPlebisciti('');
        setSubtitleSalaPlebisciti('');
        setImageCorridoiodellaCameraitaliana('');
        setDescriptionCorridoiodellaCameraitaliana('');
        setSubtitleCorridoiodellaCameraitaliana('');
    };

    const Sala17 = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        setImageSala17(Sala_17_mn_del_r_italiano);
        setDescriptionSala17("Nella sala sono poiettati FILMATI a tema risorgimentale.");
        setSubtitleSala17('Sala 17 - Sala cinema');
        // Resetta l'ingresso se necessario
        setImageIngresso('');
        setDescriptionIngresso('');
        setSubtitleIngresso('');
        setImageSala1('');
        setDescriptionSala1('');
        setSubtitleSala1('');
        setImageSala2('');
        setDescriptionSala2('');
        setSubtitleSala2('');
        setImageSala3('');
        setDescriptionSala3('');
        setSubtitleSala3('');
        setImageSala4('');
        setDescriptionSala4('');
        setSubtitleSala4('');
        setImageSala5('');
        setDescriptionSala5('');
        setSubtitleSala5('');
        setImageSala6('');
        setDescriptionSala6('');
        setSubtitleSala6('');
        setImageSala7('');
        setDescriptionSala7('');
        setSubtitleSala7('');
        setImageSala8('');
        setDescriptionSala8('');
        setSubtitleSala8('');
        setImageSala9('');
        setDescriptionSala9('');
        setSubtitleSala9('');
        setImageSala10('');
        setDescriptionSala10('');
        setSubtitleSala10('');
        setImageSala11('');
        setDescriptionSala11('');
        setSubtitleSala11('');
        setImageSala12('');
        setDescriptionSala12('');
        setSubtitleSala12('');
        setImageSala13('');
        setDescriptionSala13('');
        setSubtitleSala13('');
        setImageSala14('');
        setDescriptionSala14('');
        setSubtitleSala14('');
        setImageSala15('');
        setDescriptionSala15('');
        setSubtitleSala15('');
        setImageSala16('');
        setDescriptionSala16('');
        setSubtitleSala16('');
        setImageSala18('');
        setDescriptionSala18('');
        setSubtitleSala18('');
        setImageSala19('');
        setDescriptionSala19('');
        setSubtitleSala19('');
        setImageSala20('');
        setDescriptionSala20('');
        setSubtitleSala20('');
        setImageSala21('');
        setDescriptionSala21('');
        setSubtitleSala21('');
        setImageSala22('');
        setDescriptionSala22('');
        setSubtitleSala22('');
        setImageSala23('');
        setDescriptionSala23('');
        setSubtitleSala23('');
        setImageSala24('');
        setDescriptionSala24('');
        setSubtitleSala24('');
        setImageSala25('');
        setDescriptionSala25('');
        setSubtitleSala25('');
        setImageSala26('');
        setDescriptionSala26('');
        setSubtitleSala26('');
        setImageSala27('');
        setDescriptionSala27('');
        setSubtitleSala27('');
        setImageSala28('');
        setDescriptionSala28('');
        setSubtitleSala28('');
        setImageSala29('');
        setDescriptionSala29('');
        setSubtitleSala29('');
        setImageSala30('');
        setDescriptionSala30('');
        setSubtitleSala30('');
        setImageSalaCodici('');
        setDescriptionSalaCodici('');
        setSubtitleSalaCodici('');
        setImageSalaPlebisciti('');
        setDescriptionSalaPlebisciti('');
        setSubtitleSalaPlebisciti('');
        setImageCorridoiodellaCameraitaliana('');
        setDescriptionCorridoiodellaCameraitaliana('');
        setSubtitleCorridoiodellaCameraitaliana('');
    };

    const Sala18 = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        setImageSala18(Sala_18_mn_del_r_italiano);
        setDescriptionSala18("Il decennio dal 1849 al 1859 è caratterizzato dalla crisi dei vecchi STATI REGIONALI italiani del MOVIMENTO DEMOCRATICO, Il PIEMONTE afferma la propria EGEMONIA sulla direzione del movimento nazionale. Simbolicamanete i tanti fili che formano il tricolore tessuto dal TELAIO al centro della sala evocano l'azione patrottica tanti elementi di MOLTEPLICI PROVENIENZE.");
        setSubtitleSala18('Sala 18 - Italia: il decennio 1849-1859');
        // Resetta l'ingresso se necessario
        setImageIngresso('');
        setDescriptionIngresso('');
        setSubtitleIngresso('');
        setImageSala1('');
        setDescriptionSala1('');
        setSubtitleSala1('');
        setImageSala2('');
        setDescriptionSala2('');
        setSubtitleSala2('');
        setImageSala3('');
        setDescriptionSala3('');
        setSubtitleSala3('');
        setImageSala4('');
        setDescriptionSala4('');
        setSubtitleSala4('');
        setImageSala5('');
        setDescriptionSala5('');
        setSubtitleSala5('');
        setImageSala6('');
        setDescriptionSala6('');
        setSubtitleSala6('');
        setImageSala7('');
        setDescriptionSala7('');
        setSubtitleSala7('');
        setImageSala8('');
        setDescriptionSala8('');
        setSubtitleSala8('');
        setImageSala9('');
        setDescriptionSala9('');
        setSubtitleSala9('');
        setImageSala10('');
        setDescriptionSala10('');
        setSubtitleSala10('');
        setImageSala11('');
        setDescriptionSala11('');
        setSubtitleSala11('');
        setImageSala12('');
        setDescriptionSala12('');
        setSubtitleSala12('');
        setImageSala13('');
        setDescriptionSala13('');
        setSubtitleSala13('');
        setImageSala14('');
        setDescriptionSala14('');
        setSubtitleSala14('');
        setImageSala15('');
        setDescriptionSala15('');
        setSubtitleSala15('');
        setImageSala16('');
        setDescriptionSala16('');
        setSubtitleSala16('');
        setImageSala17('');
        setDescriptionSala17('');
        setSubtitleSala17('');
        setImageSala19('');
        setDescriptionSala19('');
        setSubtitleSala19('');
        setImageSala20('');
        setDescriptionSala20('');
        setSubtitleSala20('');
        setImageSala21('');
        setDescriptionSala21('');
        setSubtitleSala21('');
        setImageSala22('');
        setDescriptionSala22('');
        setSubtitleSala22('');
        setImageSala23('');
        setDescriptionSala23('');
        setSubtitleSala23('');
        setImageSala24('');
        setDescriptionSala24('');
        setSubtitleSala24('');
        setImageSala25('');
        setDescriptionSala25('');
        setSubtitleSala25('');
        setImageSala26('');
        setDescriptionSala26('');
        setSubtitleSala26('');
        setImageSala27('');
        setDescriptionSala27('');
        setSubtitleSala27('');
        setImageSala28('');
        setDescriptionSala28('');
        setSubtitleSala28('');
        setImageSala29('');
        setDescriptionSala29('');
        setSubtitleSala29('');
        setImageSala30('');
        setDescriptionSala30('');
        setSubtitleSala30('');
        setImageSalaCodici('');
        setDescriptionSalaCodici('');
        setSubtitleSalaCodici('');
        setImageSalaPlebisciti('');
        setDescriptionSalaPlebisciti('');
        setSubtitleSalaPlebisciti('');
        setImageCorridoiodellaCameraitaliana('');
        setDescriptionCorridoiodellaCameraitaliana('');
        setSubtitleCorridoiodellaCameraitaliana('');
    };

    const Sala19 = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        setImageSala19(Sala_19_mn_del_r_italiano);
        setDescriptionSala19("Si compiono i primi passi per INERNAZIONALIZZARE LA QUESTIONE ITALIANA, inserendola nella politica di potenza francese e inglese. La GUERRA DI CRIMEA è il primo CONFLITTO EUROPEO quarant'anni dopo Napoleone I ed è il tema dominante di questa sala, in cui è illusrata la partecipazione piemontese e degli altri paesi convolti.");
        setSubtitleSala19('Sala 19 - La guerra in Crimea: ingresso del regno sardo nella grande politica internazionale 1855-1856');
        // Resetta l'ingresso se necessario
        setImageIngresso('');
        setDescriptionIngresso('');
        setSubtitleIngresso('');
        setImageSala1('');
        setDescriptionSala1('');
        setSubtitleSala1('');
        setImageSala2('');
        setDescriptionSala2('');
        setSubtitleSala2('');
        setImageSala3('');
        setDescriptionSala3('');
        setSubtitleSala3('');
        setImageSala4('');
        setDescriptionSala4('');
        setSubtitleSala4('');
        setImageSala5('');
        setDescriptionSala5('');
        setSubtitleSala5('');
        setImageSala6('');
        setDescriptionSala6('');
        setSubtitleSala6('');
        setImageSala7('');
        setDescriptionSala7('');
        setSubtitleSala7('');
        setImageSala8('');
        setDescriptionSala8('');
        setSubtitleSala8('');
        setImageSala9('');
        setDescriptionSala9('');
        setSubtitleSala9('');
        setImageSala10('');
        setDescriptionSala10('');
        setSubtitleSala10('');
        setImageSala11('');
        setDescriptionSala11('');
        setSubtitleSala11('');
        setImageSala12('');
        setDescriptionSala12('');
        setSubtitleSala12('');
        setImageSala13('');
        setDescriptionSala13('');
        setSubtitleSala13('');
        setImageSala14('');
        setDescriptionSala14('');
        setSubtitleSala14('');
        setImageSala15('');
        setDescriptionSala15('');
        setSubtitleSala15('');
        setImageSala16('');
        setDescriptionSala16('');
        setSubtitleSala16('');
        setImageSala17('');
        setDescriptionSala17('');
        setSubtitleSala17('');
        setImageSala18('');
        setDescriptionSala18('');
        setSubtitleSala18('');
        setImageSala20('');
        setDescriptionSala20('');
        setSubtitleSala20('');
        setImageSala21('');
        setDescriptionSala21('');
        setSubtitleSala21('');
        setImageSala22('');
        setDescriptionSala22('');
        setSubtitleSala22('');
        setImageSala23('');
        setDescriptionSala23('');
        setSubtitleSala23('');
        setImageSala24('');
        setDescriptionSala24('');
        setSubtitleSala24('');
        setImageSala25('');
        setDescriptionSala25('');
        setSubtitleSala25('');
        setImageSala26('');
        setDescriptionSala26('');
        setSubtitleSala26('');
        setImageSala27('');
        setDescriptionSala27('');
        setSubtitleSala27('');
        setImageSala28('');
        setDescriptionSala28('');
        setSubtitleSala28('');
        setImageSala29('');
        setDescriptionSala29('');
        setSubtitleSala29('');
        setImageSala30('');
        setDescriptionSala30('');
        setSubtitleSala30('');
        setImageSalaCodici('');
        setDescriptionSalaCodici('');
        setSubtitleSalaCodici('');
        setImageSalaPlebisciti('');
        setDescriptionSalaPlebisciti('');
        setSubtitleSalaPlebisciti('');
        setImageCorridoiodellaCameraitaliana('');
        setDescriptionCorridoiodellaCameraitaliana('');
        setSubtitleCorridoiodellaCameraitaliana('');
    };

    const Sala20 = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        setImageSala20(Sala_20_mn_del_r_italiano);
        setDescriptionSala20("La QUESTIONE ITALIANA passa dal fragore dei campi di battaglia ai passi felpati delle diplomazie. Il PROTAGONISTA SULLO SCACCHIERE EUROPEO È CAVOUR, dal Congresso di Parigi all'incontro di Plombiéres. La sua CARROZZA DIPLOMATICA idealmente si contrapone al cavallo di Garibaldi, che troveremo nella sala 22.");
        setSubtitleSala20('Sala 20 - Dal Congresso di Parigi all‘incontro di Plombières: diplomazia, questione italiana, alleanza con la Francia 1856-1858');
        // Resetta l'ingresso se necessario
        setImageIngresso('');
        setDescriptionIngresso('');
        setSubtitleIngresso('');
        setImageSala1('');
        setDescriptionSala1('');
        setSubtitleSala1('');
        setImageSala2('');
        setDescriptionSala2('');
        setSubtitleSala2('');
        setImageSala3('');
        setDescriptionSala3('');
        setSubtitleSala3('');
        setImageSala4('');
        setDescriptionSala4('');
        setSubtitleSala4('');
        setImageSala5('');
        setDescriptionSala5('');
        setSubtitleSala5('');
        setImageSala6('');
        setDescriptionSala6('');
        setSubtitleSala6('');
        setImageSala7('');
        setDescriptionSala7('');
        setSubtitleSala7('');
        setImageSala8('');
        setDescriptionSala8('');
        setSubtitleSala8('');
        setImageSala9('');
        setDescriptionSala9('');
        setSubtitleSala9('');
        setImageSala10('');
        setDescriptionSala10('');
        setSubtitleSala10('');
        setImageSala11('');
        setDescriptionSala11('');
        setSubtitleSala11('');
        setImageSala12('');
        setDescriptionSala12('');
        setSubtitleSala12('');
        setImageSala13('');
        setDescriptionSala13('');
        setSubtitleSala13('');
        setImageSala14('');
        setDescriptionSala14('');
        setSubtitleSala14('');
        setImageSala15('');
        setDescriptionSala15('');
        setSubtitleSala15('');
        setImageSala16('');
        setDescriptionSala16('');
        setSubtitleSala16('');
        setImageSala17('');
        setDescriptionSala17('');
        setSubtitleSala17('');
        setImageSala18('');
        setDescriptionSala18('');
        setSubtitleSala18('');
        setImageSala19('');
        setDescriptionSala19('');
        setSubtitleSala19('');
        setImageSala21('');
        setDescriptionSala21('');
        setSubtitleSala21('');
        setImageSala22('');
        setDescriptionSala22('');
        setSubtitleSala22('');
        setImageSala23('');
        setDescriptionSala23('');
        setSubtitleSala23('');
        setImageSala24('');
        setDescriptionSala24('');
        setSubtitleSala24('');
        setImageSala25('');
        setDescriptionSala25('');
        setSubtitleSala25('');
        setImageSala26('');
        setDescriptionSala26('');
        setSubtitleSala26('');
        setImageSala27('');
        setDescriptionSala27('');
        setSubtitleSala27('');
        setImageSala28('');
        setDescriptionSala28('');
        setSubtitleSala28('');
        setImageSala29('');
        setDescriptionSala29('');
        setSubtitleSala29('');
        setImageSala30('');
        setDescriptionSala30('');
        setSubtitleSala30('');
        setImageSalaCodici('');
        setDescriptionSalaCodici('');
        setSubtitleSalaCodici('');
        setImageSalaPlebisciti('');
        setDescriptionSalaPlebisciti('');
        setSubtitleSalaPlebisciti('');
        setImageCorridoiodellaCameraitaliana('');
        setDescriptionCorridoiodellaCameraitaliana('');
        setSubtitleCorridoiodellaCameraitaliana('');
    };

    const Sala21 = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        setImageSala21(Sala_21_mn_del_r_italiano);
        setDescriptionSala21("Inizia il triennio 1859-1861 che condurrà alla COSTRUZIONE DEL NUOVO REGNO D'ITALIA, e il cui percorso prosegue nelle ue sale successive. Il COLORE SORRO evoca una nuova fase e insieme il SANGUE DELLA GUERRA del 1859 contro gli austriaci. Alla guerra seguirono le insurrezioni nella'Italia centrale, i plebisciti e le ANNESSIONI AL REGNO SARDO. La sala illustra il punto di vista di tutte le forze in campo.");
        setSubtitleSala21('Sala 21 - Italia: Triennio 1859-1861: seconda guerra d‘indipendenza, annessioni, plebisciti 1859-1860');
        // Resetta l'ingresso se necessario
        setImageIngresso('');
        setDescriptionIngresso('');
        setSubtitleIngresso('');
        setImageSala1('');
        setDescriptionSala1('');
        setSubtitleSala1('');
        setImageSala2('');
        setDescriptionSala2('');
        setSubtitleSala2('');
        setImageSala3('');
        setDescriptionSala3('');
        setSubtitleSala3('');
        setImageSala4('');
        setDescriptionSala4('');
        setSubtitleSala4('');
        setImageSala5('');
        setDescriptionSala5('');
        setSubtitleSala5('');
        setImageSala6('');
        setDescriptionSala6('');
        setSubtitleSala6('');
        setImageSala7('');
        setDescriptionSala7('');
        setSubtitleSala7('');
        setImageSala8('');
        setDescriptionSala8('');
        setSubtitleSala8('');
        setImageSala9('');
        setDescriptionSala9('');
        setSubtitleSala9('');
        setImageSala10('');
        setDescriptionSala10('');
        setSubtitleSala10('');
        setImageSala11('');
        setDescriptionSala11('');
        setSubtitleSala11('');
        setImageSala12('');
        setDescriptionSala12('');
        setSubtitleSala12('');
        setImageSala13('');
        setDescriptionSala13('');
        setSubtitleSala13('');
        setImageSala14('');
        setDescriptionSala14('');
        setSubtitleSala14('');
        setImageSala15('');
        setDescriptionSala15('');
        setSubtitleSala15('');
        setImageSala16('');
        setDescriptionSala16('');
        setSubtitleSala16('');
        setImageSala17('');
        setDescriptionSala17('');
        setSubtitleSala17('');
        setImageSala18('');
        setDescriptionSala18('');
        setSubtitleSala18('');
        setImageSala19('');
        setDescriptionSala19('');
        setSubtitleSala19('');
        setImageSala20('');
        setDescriptionSala20('');
        setSubtitleSala20('');
        setImageSala22('');
        setDescriptionSala22('');
        setSubtitleSala22('');
        setImageSala23('');
        setDescriptionSala23('');
        setSubtitleSala23('');
        setImageSala24('');
        setDescriptionSala24('');
        setSubtitleSala24('');
        setImageSala25('');
        setDescriptionSala25('');
        setSubtitleSala25('');
        setImageSala26('');
        setDescriptionSala26('');
        setSubtitleSala26('');
        setImageSala27('');
        setDescriptionSala27('');
        setSubtitleSala27('');
        setImageSala28('');
        setDescriptionSala28('');
        setSubtitleSala28('');
        setImageSala29('');
        setDescriptionSala29('');
        setSubtitleSala29('');
        setImageSala30('');
        setDescriptionSala30('');
        setSubtitleSala30('');
        setImageSalaCodici('');
        setDescriptionSalaCodici('');
        setSubtitleSalaCodici('');
        setImageSalaPlebisciti('');
        setDescriptionSalaPlebisciti('');
        setSubtitleSalaPlebisciti('');
        setImageCorridoiodellaCameraitaliana('');
        setDescriptionCorridoiodellaCameraitaliana('');
        setSubtitleCorridoiodellaCameraitaliana('');
    };

    const Sala22 = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        setImageSala22(Sala_22_mn_del_r_italiano);
        setDescriptionSala22("In un ambiente dominato dal COLORE VERDE che evoca le ORIGINI COSPIRATIVE di tanti partecipanti, Garibaldi a cavallo simboleggia il MITO DEL CONDOTTIERO e ricorda l'enorme popolarità dell'impresa dei Mille. La spedizione, con la ripresa dell'iniziativa popolare dei democratici, è illustrata dal MOMENTO DELL'IMBARCO a QUANTO fino al RITIRO VOLONTARIO dell'eroe a Caprera.");
        setSubtitleSala22('Sala 22 - Italia: Triennio 1859-1861: spedizione dei Mille 1860');
        // Resetta l'ingresso se necessario
        setImageIngresso('');
        setDescriptionIngresso('');
        setSubtitleIngresso('');
        setImageSala1('');
        setDescriptionSala1('');
        setSubtitleSala1('');
        setImageSala2('');
        setDescriptionSala2('');
        setSubtitleSala2('');
        setImageSala3('');
        setDescriptionSala3('');
        setSubtitleSala3('');
        setImageSala4('');
        setDescriptionSala4('');
        setSubtitleSala4('');
        setImageSala5('');
        setDescriptionSala5('');
        setSubtitleSala5('');
        setImageSala6('');
        setDescriptionSala6('');
        setSubtitleSala6('');
        setImageSala7('');
        setDescriptionSala7('');
        setSubtitleSala7('');
        setImageSala8('');
        setDescriptionSala8('');
        setSubtitleSala8('');
        setImageSala9('');
        setDescriptionSala9('');
        setSubtitleSala9('');
        setImageSala10('');
        setDescriptionSala10('');
        setSubtitleSala10('');
        setImageSala11('');
        setDescriptionSala11('');
        setSubtitleSala11('');
        setImageSala12('');
        setDescriptionSala12('');
        setSubtitleSala12('');
        setImageSala13('');
        setDescriptionSala13('');
        setSubtitleSala13('');
        setImageSala14('');
        setDescriptionSala14('');
        setSubtitleSala14('');
        setImageSala15('');
        setDescriptionSala15('');
        setSubtitleSala15('');
        setImageSala16('');
        setDescriptionSala16('');
        setSubtitleSala16('');
        setImageSala17('');
        setDescriptionSala17('');
        setSubtitleSala17('');
        setImageSala18('');
        setDescriptionSala18('');
        setSubtitleSala18('');
        setImageSala19('');
        setDescriptionSala19('');
        setSubtitleSala19('');
        setImageSala20('');
        setDescriptionSala20('');
        setSubtitleSala20('');
        setImageSala21('');
        setDescriptionSala21('');
        setSubtitleSala21('');
        setImageSala23('');
        setDescriptionSala23('');
        setSubtitleSala23('');
        setImageSala24('');
        setDescriptionSala24('');
        setSubtitleSala24('');
        setImageSala25('');
        setDescriptionSala25('');
        setSubtitleSala25('');
        setImageSala26('');
        setDescriptionSala26('');
        setSubtitleSala26('');
        setImageSala27('');
        setDescriptionSala27('');
        setSubtitleSala27('');
        setImageSala28('');
        setDescriptionSala28('');
        setSubtitleSala28('');
        setImageSala29('');
        setDescriptionSala29('');
        setSubtitleSala29('');
        setImageSala30('');
        setDescriptionSala30('');
        setSubtitleSala30('');
        setImageSalaCodici('');
        setDescriptionSalaCodici('');
        setSubtitleSalaCodici('');
        setImageSalaPlebisciti('');
        setDescriptionSalaPlebisciti('');
        setSubtitleSalaPlebisciti('');
        setImageCorridoiodellaCameraitaliana('');
        setDescriptionCorridoiodellaCameraitaliana('');
        setSubtitleCorridoiodellaCameraitaliana('');
    };

  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='mn_del_r_italiano' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo Nazionale del Risorgimento Italiano</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Allestimento_1878_mn_del_r_italiano} alt='Allestimento 1878' style={{height: '100%'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className="color-subtitle">Gli Allestimenti Precedenti</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText>
                                    <p className='mt-5'>
                                        Il Museo Nazionale del Risorgimento Italiano di Torino è il più antico e il più noto tra i musei italiani di storia patria. Venne istituito nel 1878, come “Ricordo nazionale 
                                        di Vittorio Emanuele II” pochi mesi dopo la sua morte.<br/>
                                        Prima della sua inaugurazione definitiva, avvenuta trent’anni dopo all’interno della Mole Antonelliana, il Museo conobbe due allestimenti provvisori: uno nel 1884 e uno nel 1899.
                                    </p>
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Allestimenti_1884_mn_del_r_italiano} alt='Allestimento 1884' style={{height: '100%'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className="color-subtitle">Gli Allestimenti Precedenti</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText>
                                    <p className='mt-5'>
                                        Nel 1884, in occasione della grande esposizione nazionale al Valentino, prese forma il primo esperimento di un museo del risorgimento.<br/>
                                        Era un vasto allestimento che assegnava un ruolo fortemente centrale agli episodi del 1848–49 e in cui lo spazio dedicato al Piemonte non superava per importanza il resto d’Italia.<br/>
                                        Il risorgimento rappresentato iniziava con i moti del 1820–21 e terminava con la presa di Porta Pia, proponendo una lettura che, superati gli antagonismi e realizzato lo stato 
                                        unitario, evidenziava l’azione convergente in un unico obiettivo nazionale dei diversi schieramenti politici.<br/>
                                        In sintesi il risorgimento era visto in chiave nazional–popolare più che dinastico–sabaudo. Emergeva poi un’altra importante idea di fondo, che considerava i processi di nazionalità 
                                        un evento rivoluzionario su scala europea che affondava le radici già nel periodo napoleonico, concetto che ancora oggi fa di quella mostra l’allestimento più moderno sul piano 
                                        interpretativo che fino ad oggi si è avuto del Museo.
                                    </p>
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Allestimenti_1899_mn_del_r_italiano} alt='Allestimento 1899' style={{height: '100%'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className="color-subtitle">Gli Allestimenti Precedenti</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText>
                                    <p className='mt-5'>
                                        Il 9 settembre del 1899 si celebrò una prima parziale apertura del Museo del Risorgimento, anche se in una sede ancora provvisoria: non ancora nella Mole, dove era destinato, ma nei locali 
                                        della Sezione di arte moderna del Museo civico.<br/>
                                        Anche se il ruolo del Piemonte cominciava a reclamare più spazio non era ancora il museo della dinastia, e si sforzava di conservare una visione nazionale ed ecumenica del processo unitario.
                                    </p>
                                    <p>
                                        Al Museo si affiancava una grande biblioteca, che ambiva a contenere una sintesi o la copia dei documenti risorgimentali presenti in tutt’Italia e una raccolta completa delle pubblicazioni 
                                        straniere e nazionali: un obiettivo ambizioso, mai completamente realizzato.
                                    </p>
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Allestimenti_1908_mn_del_r_italiano} alt='Allestimento 1908' style={{height: '100%'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className="color-subtitle">Gli Allestimenti Precedenti</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText>
                                    <p className='mt-5'>
                                        Il Museo del Risorgimento ebbe la sua inaugurazione definitiva il 18 ottobre 1908 all’interno della Mole Antonelliana, luogo simbolo di Torino e della modernità: passato e futuro insieme 
                                        per fare dell’ex–capitale d’Italia una città nuova e moderna.<br/>
                                        Il nuovo Museo ribadiva, nel suo intento educativo e celebrativo delle glorie patrie, il suo essere nazionale.<br/>
                                        Presentava 1.274 pezzi esposti nel salone centrale e in tre grandi corsie. Era l’unico museo del risorgimento italiano a poter essere definito scientifico, premiato da un grande successo 
                                        di pubblico, anche se oggi ci apparirebbe poco efficace dal punto di vista espositivo e della comunicazione.
                                    </p>
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Allestimenti_1938_mn_del_r_italiano} alt='Allestimento 1938' style={{height: '100%'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className="color-subtitle">Gli Allestimenti Precedenti</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText>
                                    <p className='mt-5'>
                                        L’8 settembre del 1938 il re Vittorio Emanuele III inaugurò il Museo Nazionale del Risorgimento Italiano finalmente trasferito nella sede attuale di palazzo Carignano.<br/>
                                        Era un allestimento in cui la storia d’Italia diventava del tutto autoctona, abbandonava i nessi con l’Europa e compiva un percorso che legava strettamente la Roma antica al Risorgimento 
                                        e al fascismo: il museo doveva rappresentare l’antichità della dinastia e la crescente potenza dello Stato sabaudo, così le origini del risorgimento furono anticipate al 1706, più precisamente 
                                        alla battaglia di Torino che diede un regno ai Savoia.<br/>
                                        Con l’inizio della seconda guerra mondiale, i lavori di allestimento furono interrotti e i bombardamenti subiti arrecarono al Museo danni ingenti.<br/>
                                        Negli anni della Resistenza le sue sale ospitarono clandestinamente riunioni di partigiani, armi e materiale di propaganda antifascista.
                                    </p>
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Allestimenti_1948_mn_del_r_italiano} alt='Allestimento 1948' style={{height: '100%'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className="color-subtitle">Gli Allestimenti Precedenti</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText>
                                    <p className='mt-5'>
                                        Dopo la guerra, il Museo fu riaperto in piccola parte in occasione del centenario della prima guerra di indipendenza. Il risorgimento, come nel 1884, tornava ad avere origine nei moti 
                                        del ’20–’21 e si chiudeva con la presa di Roma.<br/>
                                        Dopo le sale risorgimentali, trovarono posto altre sei sale dedicate al contributo italiano alla guerra di liberazione, a cura del Corpo volontari della libertà e dell’Istituto storico 
                                        della Resistenza in Piemonte.
                                    </p>
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Allestimenti_1961_mn_del_r_italiano} alt='Allestimento 1961' style={{height: '100%'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className="color-subtitle">Gli Allestimenti Precedenti</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText>
                                    <p className='mt-5'>
                                        Nel 1961, In occasione delle celebrazioni del Centenario dell’Unità d’Italia, a Palazzo Carignano si realizzò una grande mostra storica: oltre 1.800 pezzi esposti in 32 sale.<br/>
                                        L’obiettivo era quello di coinvolgere anche i visitatori meno preparati, grazie ad una rinnovata sensibilità per la comunicazione, per gli aspetti scenografici e per il materiale esposto 
                                        che finalmente proveniva da tutta l’Italia.<br/>
                                        Dal punto di vista dell’interpretazione storiografica, si tornò a datare le origini del risorgimento più che alle riforme dell’alto settecento, alla rivoluzione francese e alla dominazione 
                                        napoleonica che avevano sollecitato ideali patriottici.
                                    </p>
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Allestimenti_1965_mn_del_r_italiano} alt='Allestimento 1965' style={{height: '100%'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className="color-subtitle">Gli Allestimenti Precedenti</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText>
                                    <p className='mt-5'>
                                        Il museo del 1965 sia per scelta storiografica degli allestitori, sia perchè molto materiale esposto nel 1961 era stato restituito ai ben 350 prestatori, ridusse fortemente il carattere 
                                        nazionale che aveva avuto l’esposizione del centenario.<br/>
                                        Si tornò così a proporre una visione del risorgimento fedele all’idea della dinastia sabauda come principale motore dell’unificazione.
                                    </p>
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Allestimenti_2011_mn_del_r_italiano} alt='Allestimento 2011' style={{height: '100%'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className="color-subtitle">Gli Allestimenti Precedenti</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText>
                                    <p className='mt-5'>
                                        Dopo una progettazione scientifica ed espositiva iniziata nel 1999, nel 2006 si sono avviati i lavori di riallestimento del nuovo percorso museale, che distribuisce in 30 sale, compreso lo scalone d'onore e il salone del primo Parlamento italiano, il racconto di come gli italiani divennero nazione, fra altri popoli alla ricerca della propria identità.
                                        Il risultato è un allestimento rigoroso e insieme spettacolare che narra la storia del Paese a fronte delle grandi trasformazioni economiche, politiche e culturali avvenute nell’intero continente. Un percorso che accompagna il visitatore in un lungo viaggio che parte dalla rivoluzione francese e si conclude alle soglie della grande guerra, l’evento che aprì alle società di massa del XX secolo.
                                    </p>
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
            </div>
            <div className='margin mb-4'>
                <Button className='mb-3 me-3' onClick={Ingresso}>Ingresso</Button>
                <Button className='mb-3 me-3' onClick={Sala1}>Sala 1</Button>
                <Button className='mb-3 me-3' onClick={Sala2}>Sala 2</Button>
                <Button className='mb-3 me-3' onClick={Sala3}>Sala 3</Button>
                <Button className='mb-3 me-3' onClick={Sala4}>Sala 4</Button>
                <Button className='mb-3 me-3' onClick={Sala5}>Sala 5</Button>
                <Button className='mb-3 me-3' onClick={Sala6}>Sala 6</Button>
                <Button className='mb-3 me-3' onClick={Sala7}>Sala 7</Button>
                <Button className='mb-3 me-3' onClick={Sala8}>Sala 8</Button>
                <Button className='mb-3 me-3' onClick={Sala9}>Sala 9</Button>
                <Button className='mb-3 me-3' onClick={Sala10}>Sala 10</Button>
                <Button className='mb-3 me-3' onClick={Sala11}>Sala 11</Button>
                <Button className='mb-3 me-3' onClick={Sala12}>Sala 12</Button>
                <Button className='mb-3 me-3' onClick={Sala13}>Sala 13</Button>
                <Button className='mb-3 me-3' onClick={Sala14}>Sala 14</Button>
                <Button className='mb-3 me-3' onClick={Sala15}>Sala 15</Button>
                <Button className='mb-3 me-3' onClick={Sala16}>Sala 16</Button>
                <Button className='mb-3 me-3' onClick={Sala17}>Sala 17</Button>
                <Button className='mb-3 me-3' onClick={Sala18}>Sala 18</Button>
                <Button className='mb-3 me-3' onClick={Sala19}>Sala 19</Button>
                <Button className='mb-3 me-3' onClick={Sala20}>Sala 20</Button>
                <Button className='mb-3 me-3' onClick={Sala21}>Sala 21</Button>
                <Button className='mb-3 me-3' onClick={Sala22}>Sala 22</Button>
                <Button className='mb-3 me-3' onClick={Sala23}>Sala 23</Button>
                <Button className='mb-3 me-3' onClick={Sala24}>Sala 24</Button>
                <Button className='mb-3 me-3' onClick={Sala25}>Sala 25</Button>
                <Button className='mb-3 me-3' onClick={Sala26}>Sala 26</Button>
                <Button className='mb-3 me-3' onClick={Sala27}>Sala 27</Button>
                <Button className='mb-3 me-3' onClick={Sala28}>Sala 28</Button>
                <Button className='mb-3 me-3' onClick={Sala29}>Sala 29</Button>
                <Button className='mb-3 me-3' onClick={Sala30}>Sala 30</Button>
                <Button className='mb-3 me-3' onClick={SalaCodici}>Sala Codici</Button>
                <Button className='mb-3 me-3' onClick={SalaPlebisciti}>Sala Plebisciti</Button>
                <Button className='mb-3 me-3' onClick={CorridoiodellaCameraitaliana}>Corridoio della Camera italiana</Button>
                { imageIngresso && (
                    <div className="d-flex justify-content-center">
                        <img src={imageIngresso} alt="Ingresso del Museo Nazionale del Rinascimento Italiano" className='w-25' />
                        <div className="ms-4 align-content-center">
                            <p>{descriptionIngresso}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleIngresso}</p>
                        </div>
                    </div>
                )}
                { imageSala1 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala1} alt='Sala 1 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala1}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala1}</p>
                        </div>
                    </div>
                )}
                { imageSala2 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala2} alt='Sala 2 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala2}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala2}</p>
                        </div>
                    </div>
                )}
                { imageSala3 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala3} alt='Sala 3 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala3}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala3}</p>
                        </div>
                    </div>
                )}
                { imageSala4 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala4} alt='Sala 4 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala4}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala4}</p>
                        </div>
                    </div>
                )}
                { imageSala5 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala5} alt='Sala 5 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala5}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala5}</p>
                        </div>
                    </div>
                )}
                { imageSala6 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala6} alt='Sala 6 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala6}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala6}</p>
                        </div>
                    </div>
                )}
                { imageSala7 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala7} alt='Sala 7 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala7}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala7}</p>
                        </div>
                    </div>
                )}
                { imageSala8 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala8} alt='Sala 8 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala8}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala8}</p>
                        </div>
                    </div>
                )}
                { imageSala9 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala9} alt='Sala 9 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala9}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala9}</p>
                        </div>
                    </div>
                )}
                { imageSala10 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala10} alt='Sala 10 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala10}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala10}</p>
                        </div>
                    </div>
                )}
                { imageSala11 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala11} alt='Sala 11 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala11}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala11}</p>
                        </div>
                    </div>
                )}
                { imageSala12 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala12} alt='Sala 12 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala12}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala12}</p>
                        </div>
                    </div>
                )}
                { imageSala13 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala13} alt='Sala 13 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala13}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala13}</p>
                        </div>
                    </div>
                )}
                { imageSala14 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala14} alt='Sala 14 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala14}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala14}</p>
                        </div>
                    </div>
                )}
                { imageSala15 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala15} alt='Sala 15 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala15}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala15}</p>
                        </div>
                    </div>
                )}
                { imageSala16 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala16} alt='Sala 16 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala16}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala16}</p>
                        </div>
                    </div>
                )}
                { imageSala17 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala17} alt='Sala 17 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala17}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala17}</p>
                        </div>
                    </div>
                )}
                { imageSala18 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala18} alt='Sala 18 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala18}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala18}</p>
                        </div>
                    </div>
                )}
                { imageSala19 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala19} alt='Sala 19 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala19}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala19}</p>
                        </div>
                    </div>
                )}
                { imageSala20 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala20} alt='Sala 20 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala20}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala20}</p>
                        </div>
                    </div>
                )}
                { imageSala21 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala21} alt='Sala 21 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala21}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala21}</p>
                        </div>
                    </div>
                )}
                { imageSala22 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala22} alt='Sala 22 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala22}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala22}</p>
                        </div>
                    </div>
                )}
                { imageSala23 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala23} alt='Sala 23 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala23}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala23}</p>
                        </div>
                    </div>
                )}
                { imageSala24 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala24} alt='Sala 24 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala24}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala24}</p>
                        </div>
                    </div>
                )}
                { imageSala25 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala25} alt='Sala 25 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala25}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala25}</p>
                        </div>
                    </div>
                )}
                { imageSala26 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala26} alt='Sala 26 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala26}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala26}</p>
                        </div>
                    </div>
                )}
                { imageSala27 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala27} alt='Sala 27 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala27}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala27}</p>
                        </div>
                    </div>
                )}
                { imageSala28 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala28} alt='Sala 28 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala28}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala28}</p>
                        </div>
                    </div>
                )}
                { imageSala29 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala29} alt='Sala 29 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala29}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala29}</p>
                        </div>
                    </div>
                )}
                { imageSala30 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala30} alt='Sala 30 del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSala30}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSala30}</p>
                        </div>
                    </div>
                )}
                { imageSalaCodici && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSalaCodici} alt='Sala Codici del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSalaCodici}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSalaCodici}</p>
                        </div>
                    </div>
                )}
                { imageSalaPlebisciti && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSalaPlebisciti} alt='Sala Plebisciti del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionSalaPlebisciti}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleSalaPlebisciti}</p>
                        </div>
                    </div>
                )}
                { imageCorridoiodellaCameraitaliana && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageCorridoiodellaCameraitaliana} alt='CorridoiodellaCameraitaliana del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <div className="ms-4 align-content-center">
                            <p>{descriptionCorridoiodellaCameraitaliana}</p>
                            <p className='fw-medium bg-success p-2 text-dark bg-opacity-50 text-center'>{subtitleCorridoiodellaCameraitaliana}</p>
                        </div>
                    </div>
                )}
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.1074281728327!2d7.684499989965835!3d45.06905551763594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d702759ca91%3A0xbf0fb182b3a64daa!2sMuseo%20Nazionale%20del%20Risorgimento%20Italiano!5e1!3m2!1sit!2sit!4v1712589008903!5m2!1sit!2sit"
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
