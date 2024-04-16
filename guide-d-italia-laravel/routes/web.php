<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome'/* , [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ] */);
});

Route::get('/home', function () {
    return Inertia::render('Home');
})->middleware(['auth', 'verified'])->name('home');

Route::get('/valle_d_aosta', function () {
    return Inertia::render('Valle_d_Aosta');
})->middleware(['auth', 'verified'])->name('valle_d_aosta');



Route::get('/visite/aosta_romana_e_medievale', function () {
    return Inertia::render('Valle_d_Aosta/Visite/Aosta_romana_e_medievale');
})->middleware(['auth', 'verified'])->name('aosta_romana_e_medievale');

Route::get('/castelli_valle_d_aosta', function () {
    return Inertia::render('Valle_d_Aosta/Castelli_valle_d_aosta');
})->middleware(['auth', 'verified'])->name('castelli_valle_d_aosta');

Route::get('/visite/forte_di_bard', function () {
    return Inertia::render('Valle_d_Aosta/Visite/Forte_di_Bard');
})->middleware(['auth', 'verified'])->name('forte_di_bard');

Route::get('/localita_turistiche', function () {
    return Inertia::render('Valle_d_Aosta/Localita_turistiche');
})->middleware(['auth', 'verified'])->name('localita_turistiche');

Route::get('/territorio', function () {
    return Inertia::render('Valle_d_Aosta/Territorio');
})->middleware(['auth', 'verified'])->name('territorio');

Route::get('/luoghi_visite/il_ponte_romano', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Il_ponte_romano');
})->middleware(['auth', 'verified'])->name('il_ponte_romano');

Route::get('/visite/strada_romana_gallie', function () {
    return Inertia::render('Valle_d_Aosta/Visite/Strada_romana_gallie');
})->middleware(['auth', 'verified'])->name('strada_romana_gallie');

Route::get('/luoghi_visite/arco_d_augusto', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Arco_d_Augusto');
})->middleware(['auth', 'verified'])->name('arco_d_augusto');

Route::get('/luoghi_visite/porta_praetoria', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Porta_praetoria');
})->middleware(['auth', 'verified'])->name('porta_praetoria');

Route::get('/luoghi_visite/teatro_romano_di_aosta', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Teatro_romano_di_Aosta');
})->middleware(['auth', 'verified'])->name('teatro_romano_di_aosta');

Route::get('/luoghi_visite/criptoportico_forense', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Criptoportico_Forense');
})->middleware(['auth', 'verified'])->name('criptoportico_forense');

Route::get('/luoghi_visite/cinta_muraria', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Cinta_muraria');
})->middleware(['auth', 'verified'])->name('cinta_muraria');

Route::get('/luoghi_visite/collegiata_di_sant_orso', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Collegiata_di_sant_orso');
})->middleware(['auth', 'verified'])->name('collegiata_di_sant_orso');

Route::get('/luoghi_visite/cattedrale_di_santa_maria_assunta', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Cattedrale_di_Santa_Maria_Assunta');
})->middleware(['auth', 'verified'])->name('cattedrale_di_santa_maria_assunta');

Route::get('/luoghi_visite/affreschi_ottoniani', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Affreschi_ottoniani');
})->middleware(['auth', 'verified'])->name('affreschi_ottoniani');

Route::get('/gite_scolastiche_scuola_primaria', function () {
    return Inertia::render('Valle_d_Aosta/Gite_scolastiche_scuola_primaria');
})->middleware(['auth', 'verified'])->name('gite_scolastiche_scuola_primaria');

Route::get('/luoghi_visite/basilica_paleocristiana_di_san_lorenzo', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Basilica_paleocristiana_S_Lorenzo');
})->middleware(['auth', 'verified'])->name('basilica_paleocristiana_di_san_lorenzo');

Route::get('/articoli/cosa_vedere_ad_aosta_in_un_giorno', function () {
    return Inertia::render('Valle_d_Aosta/Articoli/Cosa_vedere_Aosta_in_un_giorno');
})->middleware(['auth', 'verified'])->name('cosa_vedere_ad_aosta_in_un_giorno');

Route::get('/contatti_guida_turistica_valle_d_aosta', function () {
    return Inertia::render('Valle_d_Aosta/Contatti_guida_turistica_Valle_d_Aosta');
})->middleware(['auth', 'verified'])->name('contatti_guida_turistica_valle_d_aosta');

Route::get('/articoli/cosa_visitare_aosta_romana', function () {
    return Inertia::render('Valle_d_Aosta/Articoli/Cosa_visitare_aosta_romana');
})->middleware(['auth', 'verified'])->name('cosa_visitare_aosta_romana');

Route::get('/articoli/aosta_medievale_tra_spiritualita_e_arte', function () {
    return Inertia::render('Valle_d_Aosta/Articoli/Aosta_medievale_tra_spiritualità_e_arte');
})->middleware(['auth', 'verified'])->name('aosta_medievale_tra_spiritualita_e_arte');

Route::get('/articoli/orari_siti_romani_aosta', function () {
    return Inertia::render('Valle_d_Aosta/Articoli/Orari_siti_romani_Aosta');
})->middleware(['auth', 'verified'])->name('orari_siti_romani_aosta');

Route::get('/visite/ponte_romano_pont_saint_martin', function () {
    return Inertia::render('Valle_d_Aosta/Visite/Ponte_romano_pont_saint_martin');
})->middleware(['auth', 'verified'])->name('ponte_romano_pont_saint_martin');

Route::get('/visite/fiera_sa_orso', function () {
    return Inertia::render('Valle_d_Aosta/Visite/Fiera_di_SantOrso_Aosta');
})->middleware(['auth', 'verified'])->name('fiera_sa_orso');

Route::get('/fiera_di_sant_orso', function () {
    return Inertia::render('Valle_d_Aosta/Fiera_di_Sant_Orso');
})->middleware(['auth', 'verified'])->name('fiera_di_sant_orso');

Route::get('/artigianato_in_valle_d_aosta_una_tradizione_millenaria', function () {
    return Inertia::render('Valle_d_Aosta/Artigianato_tradizione_millenaria');
})->middleware(['auth', 'verified'])->name('artigianato_in_valle_d_aosta_una_tradizione_millenaria');

Route::get('/visite/museo_del_tesoro', function () {
    return Inertia::render('Valle_d_Aosta/Visite/Museo_del_tesoro');
})->middleware(['auth', 'verified'])->name('museo_del_tesoro');

Route::get('/musei_aosta', function () {
    return Inertia::render('Valle_d_Aosta/Musei_Aosta');
})->middleware(['auth', 'verified'])->name('museo_aosta');

Route::get('/visite/castello_gamba', function () {
    return Inertia::render('Valle_d_Aosta/Visite/Castello_Gamba');
})->middleware(['auth', 'verified'])->name('castello_gamba');

Route::get('/i_castelli_della_valle_d_asota_piu_belli_da_visitare', function () {
    return Inertia::render('Valle_d_Aosta/I_Castelli_piu_belli_Valle_d_Aosta');
})->middleware(['auth', 'verified'])->name('i_castelli_della_valle_d_asota_piu_belli_da_visitare');

Route::get('/castello_di_ussel', function () {
    return Inertia::render('Valle_d_Aosta/Castello_di_Ussel');
})->middleware(['auth', 'verified'])->name('castello_di_ussel');

Route::get('/chatillon_cosa_vedere', function () {
    return Inertia::render('Valle_d_Aosta/Chatillon_cosa_vedere');
})->middleware(['auth', 'verified'])->name('chatillon_cosa_vedere');

Route::get('/le_piu_belle_passeggiate_lungo_i_ru_della_valle_d_aosta', function () {
    return Inertia::render('Valle_d_Aosta/Articoli/Le_passeggiate_lungo_i_ru_della_valle_d_aosta');
})->middleware(['auth', 'verified'])->name('le_piu_belle_passeggiate_lungo_i_ru_della_valle_d_aosta');





/*Inizio Piemonte */
    Route::get('/piemonte', function () {
        return Inertia::render('Piemonte');
    })->middleware(['auth', 'verified'])->name('piemonte');

    Route::get('/destinazioni/torino', function () {
        return Inertia::render('Piemonte/Destinazioni/Torino');
    })->middleware(['auth', 'verified'])->name('torino');

    Route::get('/visite/torino/palazzo_reale', function () {
        return Inertia::render('Piemonte/Visite/Torino/Palazzo_reale');
    })->middleware(['auth', 'verified'])->name('palazzo_reale');

    Route::get('/visite/torino/palazzo_reale/palazzo_reale_armeria_reale_e_cappella_della_sindone', function () {
        return Inertia::render('Piemonte/Visite/Palazzo_reale/Palazzo_reale_armeria_reale_e_cappella_della_sindone');
    })->middleware(['auth', 'verified'])->name('palazzo_reale_armeria_reale_e_cappella_della_sindone');

    Route::get('/visite/torino/palazzo_reale/visita_archeologica', function () {
        return Inertia::render('Piemonte/Visite/Palazzo_reale/Visita_Archeologica');
    })->middleware(['auth', 'verified'])->name('visita_archeologica');

    Route::get('/visite/torino/palazzo_reale/capolavori_della_pittura', function () {
        return Inertia::render('Piemonte/Visite/Palazzo_reale/Capolavori_della_pittura');
    })->middleware(['auth', 'verified'])->name('capolavori_della_pittura');

    Route::get('/visite/torino/palazzo_reale/visita_completa', function () {
        return Inertia::render('Piemonte/Visite/Palazzo_reale/Visita_completa');
    })->middleware(['auth', 'verified'])->name('visita_completa');

    Route::get('/visite/torino/palazzo_reale/visita_ai_giardini', function () {
        return Inertia::render('Piemonte/Visite/Palazzo_reale/Visita_ai_giardini');
    })->middleware(['auth', 'verified'])->name('visita_ai_giardini');

    Route::get('/visite/torino/museo_nazionale_del_cinema', function () {
        return Inertia::render('Piemonte/Visite/Torino/Museo_Nazionale_del_Cinema');
    })->middleware(['auth', 'verified'])->name('museo_nazionale_del_cinema');

    Route::get('/visite/torino/museo_egizio', function () {
        return Inertia::render('Piemonte/Visite/Torino/Museo_egizio');
    })->middleware(['auth', 'verified'])->name('museo_egizio');

    Route::get('/visite/torino/porta_palazzo_e_il_balôn', function () {
        return Inertia::render('Piemonte/Visite/Torino/Porta_Palazzo_e_il_Balôn');
    })->middleware(['auth', 'verified'])->name('porta_palazzo_e_il_balôn');

    Route::get('/visite/torino/palazzo_madama', function () {
        return Inertia::render('Piemonte/Visite/Torino/Palazzo_Madama');
    })->middleware(['auth', 'verified'])->name('palazzo_madama');

    Route::get('/visite/torino/duomo_di_san_giovanni', function () {
        return Inertia::render('Piemonte/Visite/Torino/Duomo_di_San_Giovanni');
    })->middleware(['auth', 'verified'])->name('duomo_di_san_giovanni');

    Route::get('/visite/torino/po_e_parco_del_valentino', function () {
        return Inertia::render('Piemonte/Visite/Torino/Po_e_Parco_del_Valentino');
    })->middleware(['auth', 'verified'])->name('po_e_parco_del_valentino');

    Route::get('/visite/torino/reggia_di_venaria_reale', function () {
        return Inertia::render('Piemonte/Visite/Torino/Reggia_di_Venaria_Reale');
    })->middleware(['auth', 'verified'])->name('reggia_di_venaria_reale');

    Route::get('/visite/torino/reggia_di_venaria_reale/la_reggia', function () {
        return Inertia::render('Piemonte/Visite/Torino/Reggia_di_Venaria_Reale/La_Reggia');
    })->middleware(['auth', 'verified'])->name('la_reggia');

    Route::get('/visite/torino/reggia_di_venaria_reale/la_reggia/mappa_interattiva', function () {
        return Inertia::render('Piemonte/Visite/Torino/Reggia_di_Venaria_Reale/Mappa_interattiva');
    })->middleware(['auth', 'verified'])->name('mappa_interattiva');

    Route::get('/visite/torino/reggia_di_venaria_reale/la_reggia/breve_storia', function () {
        return Inertia::render('Piemonte/Visite/Torino/Reggia_di_Venaria_Reale/Breve_Storia');
    })->middleware(['auth', 'verified'])->name('breve_storia');

    Route::get('/visite/torino/reggia_di_venaria_reale/la_reggia/percorso_espositivo', function () {
        return Inertia::render('Piemonte/Visite/Torino/Reggia_di_Venaria_Reale/Percorso_Espositivo');
    })->middleware(['auth', 'verified'])->name('breve_storia');

    Route::get('/visite/torino/monte_dei_cappuccini', function () {
        return Inertia::render('Piemonte/Visite/Torino/Monte_dei_Cappuccini');
    })->middleware(['auth', 'verified'])->name('monte_dei_cappuccini');

    Route::get('/visite/torino/piazza_san_carlo', function () {
        return Inertia::render('Piemonte/Visite/Torino/Piazza_san_Carlo');
    })->middleware(['auth', 'verified'])->name('piazza_san_carlo');

    Route::get('/visite/torino/basilica_di_superga', function () {
        return Inertia::render('Piemonte/Visite/Torino/Basilica_di_Superga');
    })->middleware(['auth', 'verified'])->name('basilica_di_superga');

    Route::get('/visite/torino/chiesa_della_gran_maria_di_dio', function () {
        return Inertia::render('Piemonte/Visite/Torino/Chiesa_della_gran_madre_di_dio');
    })->middleware(['auth', 'verified'])->name('chiesa_della_gran_maria_di_dio');

    Route::get('/visite/torino/eataly', function () {
        return Inertia::render('Piemonte/Visite/Torino/Eataly');
    })->middleware(['auth', 'verified'])->name('eataly');

    Route::get('/visite/torino/gam', function () {
        return Inertia::render('Piemonte/Visite/Torino/GAM');
    })->middleware(['auth', 'verified'])->name('gam');

    Route::get('/visite/torino/museo_d_arte_orientale', function () {
        return Inertia::render('Piemonte/Visite/Torino/MAO');
    })->middleware(['auth', 'verified'])->name('museo_d_arte_orientale');

    Route::get('/visite/torino/murazzi', function () {
        return Inertia::render('Piemonte/Visite/Torino/Murazzi');
    })->middleware(['auth', 'verified'])->name('murazzi');

    Route::get('/visite/torino/museo_nazionale_del_risorgimento_italiano', function () {
        return Inertia::render('Piemonte/Visite/Torino/Mn_del_R_italiano');
    })->middleware(['auth', 'verified'])->name('museo_nazionale_del_risorgimento_italiano');

    Route::get('/visite/torino/museo_dell_automobile', function () {
        return Inertia::render('Piemonte/Visite/Torino/Museo_dell_Automobile');
    })->middleware(['auth', 'verified'])->name('museo_dell_automobile');

    Route::get('/visite/torino/museo_della_sindone', function () {
        return Inertia::render('Piemonte/Visite/Torino/Museo_della_Sindone');
    })->middleware(['auth', 'verified'])->name('museo_nazionale_del_risorgimento_italiano');

    Route::get('/visite/torino/quadrilateo_romano', function () {
        return Inertia::render('Piemonte/Visite/Torino/Quadrilatero_Romano');
    })->middleware(['auth', 'verified'])->name('quadrilateo_romano');

    Route::get('/territori/il_nord_e_i_laghi_maggiore_e_d_orta', function () {
        return Inertia::render('Piemonte/Territori/Il_nord_e_i_laghi_maggiore_e_d_Orta');
    })->middleware(['auth', 'verified'])->name('il_nord_e_i_laghi_maggiore_e_d_orta');

    Route::get('/destinazioni/novara', function () {
        return Inertia::render('Piemonte/Destinazioni/Novara');
    })->middleware(['auth', 'verified'])->name('novara');

    Route::get('/destinazioni/biella', function () {
        return Inertia::render('Piemonte/Destinazioni/Biella');
    })->middleware(['auth', 'verified'])->name('biella');

    Route::get('/destinazioni/vercelli', function () {
        return Inertia::render('Piemonte/Destinazioni/Vercelli');
    })->middleware(['auth', 'verified'])->name('vercelli');

    Route::get('/territori/canadese_gran_paradiso_e_valli_di_lanzo', function () {
        return Inertia::render('Piemonte/Territori/Canavese_Gran_paradiso');
    })->middleware(['auth', 'verified'])->name('canadese_gran_paradiso_e_valli_di_lanzo');

    Route::get('/destinazioni/ivrea', function () {
        return Inertia::render('Piemonte/Destinazioni/Ivrea');
    })->middleware(['auth', 'verified'])->name('ivrea');

    Route::get('/destinazioni/cuneo', function () {
        return Inertia::render('Piemonte/Destinazioni/Cuneo');
    })->middleware(['auth', 'verified'])->name('cuneo');

    Route::get('/destinazioni/saluzzo', function () {
        return Inertia::render('Piemonte/Destinazioni/Saluzzo');
    })->middleware(['auth', 'verified'])->name('saluzzo');

    Route::get('/territori/asti_alessandra_e_il_monferrato', function () {
        return Inertia::render('Piemonte/Territori/Asti_Alessandria_e_il_Monferrato');
    })->middleware(['auth', 'verified'])->name('asti_alessandra_e_il_monferrato');

    Route::get('/territori/valle_di_susa_chisone_pallice_germanasca', function () {
        return Inertia::render('Piemonte/Territori/Valle_di_Susa_Chisone_Pellice_e_Germanasca');
    })->middleware(['auth', 'verified'])->name('valle_di_susa_chisone_pallice_germanasca');

    Route::get('/territori/langhe_e_roero', function () {
        return Inertia::render('Piemonte/Territori/Langhe_e_Roero');
    })->middleware(['auth', 'verified'])->name('langhe_e_roero');
/*Fine Piemonte */


/*Inizio Lombardia*/
    Route::get('/lombardia', function () {
        return Inertia::render('Lombardia');
    })->middleware(['auth', 'verified'])->name('lombardia');
    /*Inzio Milano*/
        Route::get('/destinazioni/milano', function () {
            return Inertia::render('Lombardia/Destinazioni/Milano');
        })->middleware(['auth', 'verified'])->name('milano');

        Route::get('/visite/milano/duomo', function () {
            return Inertia::render('Lombardia/Visite/Duomo');
        })->middleware(['auth', 'verified'])->name('duomo');

        Route::get('/visite/milano/castello_sforzesco', function () {
            return Inertia::render('Lombardia/Visite/Castello_Sforzesco');
        })->middleware(['auth', 'verified'])->name('castello_sforzesco');

        Route::get('/visite/milano/pinacoteca_di_brera', function () {
            return Inertia::render('Lombardia/Visite/Pinacoteca_di_Brea');
        })->middleware(['auth', 'verified'])->name('pinacoteca_di_brera');

        Route::get('/visite/milano/cenacolo_vinciano', function () {
            return Inertia::render('Lombardia/Visite/Cenacolo_Vinciano');
        })->middleware(['auth', 'verified'])->name('cenacolo_vinciano');

        Route::get('/visite/milano/museo_nazionale_della_scienza_e_della_tecnologia_leonardo_da_vinci', function () {
            return Inertia::render('Lombardia/Visite/Museo_Nazionale_della_scienza_e_della_tecnologia_Leonrdo_da_Vinci');
        })->middleware(['auth', 'verified'])->name('museo_nazionale_della_scienza_e_della_tecnologia_leonardo_da_vinci');

        Route::get('/visite/milano/museo_civico_di_storia_naturale', function () {
            return Inertia::render('Lombardia/Visite/Museo_civico_di_storia_naturale');
        })->middleware(['auth', 'verified'])->name('museo_civico_di_storia_naturale');

        Route::get('/visite/milano/cimitero_monumentale', function () {
            return Inertia::render('Lombardia/Visite/Cimitero_Monumentale');
        })->middleware(['auth', 'verified'])->name('cimitero_monumentale');

        Route::get('/visite/milano/dolce_e_gabbana', function () {
            return Inertia::render('Lombardia/Visite/Dolce_e_Gabbana');
        })->middleware(['auth', 'verified'])->name('dolce_e_gabbana');

        Route::get('/visite/milano/museo_teatrale_alla_scala', function () {
            return Inertia::render('Lombardia/Visite/Museo_teatrale_alla_scala');
        })->middleware(['auth', 'verified'])->name('museo_teatrale_alla_scala');

        Route::get('/visite/milano/fondazione_prada', function () {
            return Inertia::render('Lombardia/Visite/Fondazione_Prada');
        })->middleware(['auth', 'verified'])->name('fondazione_prada');
    /*Fine Milano*/
    /*Inizio Brescia*/
        Route::get('/destinazioni/brescia', function () {
            return Inertia::render('Lombardia/Destinazioni/Brescia');
        })->middleware(['auth', 'verified'])->name('brescia');

        Route::get('/visite/brescia/castello_di_brescia', function () {
            return Inertia::render('Lombardia/Visite/Castello_di_Brescia');
        })->middleware(['auth', 'verified'])->name('castello_di_brescia');

        Route::get('/visite/brescia/museo_di_santa_giulia', function () {
            return Inertia::render('Lombardia/Visite/Museo_di_Santa_Giulia');
        })->middleware(['auth', 'verified'])->name('museo_di_santa_giulia');

        Route::get('/visite/brescia/palazzo_martinengo_di_brescia', function () {
            return Inertia::render('Lombardia/Visite/Palazzo_Martinengo_di_Brescia');
        })->middleware(['auth', 'verified'])->name('palazzo_martinengo_di_brescia');

        Route::get('/visite/brescia/piazza_arnaldo', function () {
            return Inertia::render('Lombardia/Visite/Piazza_Arnaldo');
        })->middleware(['auth', 'verified'])->name('piazza_arnaldo');
    /*Fine Brescia*/
    /*Inizio Bergamo*/
        Route::get('/destinazioni/bergamo', function () {
            return Inertia::render('Lombardia/Destinazioni/Bergamo');
        })->middleware(['auth', 'verified'])->name('bergamo');

        Route::get('/visite/bergamo/piazza_mercato_delle_scarpe', function () {
            return Inertia::render('Lombardia/Visite/Piazza_Mercato_delle_scarpe');
        })->middleware(['auth', 'verified'])->name('piazza_mercato_delle_scarpe');

        Route::get('/visite/bergamo/piazza_vecchia', function () {
            return Inertia::render('Lombardia/Visite/Piazza_Vecchia');
        })->middleware(['auth', 'verified'])->name('piazza_vecchia');

        Route::get('/visite/bergamo/palazzo_della_regione', function () {
            return Inertia::render('Lombardia/Visite/Palazzo_della_Regione');
        })->middleware(['auth', 'verified'])->name('palazzo_della_regione');

        Route::get('/visite/bergamo/museo_e_tesoro_della_cattedrale', function () {
            return Inertia::render('Lombardia/Visite/Museo_e_Tesoro_della_Cattedrale');
        })->middleware(['auth', 'verified'])->name('museo_e_tesoro_della_cattedrale');
    
        Route::get('/visite/bergamo/accademia_carrara', function () {
            return Inertia::render('Lombardia/Visite/Accademia_Carrara');
        })->middleware(['auth', 'verified'])->name('accademia_carrara');
    
        Route::get('/visite/bergamo/palazzo_e_giardini_moroni', function () {
            return Inertia::render('Lombardia/Visite/Palazzo_e_Giardini_Moroni');
        })->middleware(['auth', 'verified'])->name('palazzo_e_giardini_moroni');
    
        Route::get('/visite/bergamo/cappella_colleoni', function () {
            return Inertia::render('Lombardia/Visite/Cappella_Colleoni');
        })->middleware(['auth', 'verified'])->name('cappella_colleoni');
    /*Fine Bergamo*/
/*Fine Lombardia */

/*Inizio Liguria*/
    Route::get('/liguria', function () {
        return Inertia::render('Liguria');
    })->middleware(['auth', 'verified'])->name('liguria');

    Route::get('/destinazioni/genova', function () {
        return Inertia::render('Liguria/Destinazioni/Genova');
    })->middleware(['auth', 'verified'])->name('genova');

    Route::get('/destinazioni/camogli', function () {
        return Inertia::render('Liguria/Destinazioni/Camogli');
    })->middleware(['auth', 'verified'])->name('camogli');

    Route::get('/destinazioni/golfo_del_tigullio', function () {
        return Inertia::render('Liguria/Destinazioni/Camogli');
    })->middleware(['auth', 'verified'])->name('golfo_del_tigullio');

    Route::get('/destinazioni/abbazia_di_san_fruttuoso', function () {
        return Inertia::render('Liguria/Destinazioni/Camogli');
    })->middleware(['auth', 'verified'])->name('abbazia_di_san_fruttuoso');
    /*Inizio Genova*/
        Route::get('/visite/genova/acquario_di_genova', function () {
            return Inertia::render('Liguria/Visite/Acquario_di_Genova');
        })->middleware(['auth', 'verified'])->name('acquario_di_genova');

        Route::get('/visite/genova/lanterna_di_genova', function () {
            return Inertia::render('Liguria/Visite/Lanterna_di_Genova');
        })->middleware(['auth', 'verified'])->name('lanterna_di_genova');

        Route::get('/visite/genova/museo_di_palazzo_reale', function () {
            return Inertia::render('Liguria/Visite/Museo_di_Palazzo_Reale');
        })->middleware(['auth', 'verified'])->name('museo_di_palazzo_reale');

        Route::get('/visite/genova/palazzo_ducale_di_genova', function () {
            return Inertia::render('Liguria/Visite/Palazzo_ducale_di_Genova');
        })->middleware(['auth', 'verified'])->name('palazzo_ducale_di_genova');
        /*Inizio Palazzo Ducale di Genova*/
            Route::get('/visite/genova/palazzo_ducale_di_genova/facciata_piazza_matteotti', function () {
                return Inertia::render('Liguria/Visite/Palazzo_ducale_di_Genova/Facciata_piazza_Matteotti');
            })->middleware(['auth', 'verified'])->name('facciata_piazza_matteotti');

            Route::get('/visite/genova/palazzo_ducale_di_genova/la_torre_e_le_carceri', function () {
                return Inertia::render('Liguria/Visite/Palazzo_ducale_di_Genova/La_torre_e_le_carceri');
            })->middleware(['auth', 'verified'])->name('la_torre_e_le_carceri');

            Route::get('/visite/genova/palazzo_ducale_di_genova/i_saloni', function () {
                return Inertia::render('Liguria/Visite/Palazzo_ducale_di_Genova/I_Saloni');
            })->middleware(['auth', 'verified'])->name('i_saloni');

            Route::get('/visite/genova/palazzo_ducale_di_genova/la_cappella', function () {
                return Inertia::render('Liguria/Visite/Palazzo_ducale_di_Genova/La_Cappella');
            })->middleware(['auth', 'verified'])->name('la_cappella');
        /*Fine Palazzo Ducale di Genova*/
        Route::get('/visite/genova/villa_durazzo_pallavicini', function () {
            return Inertia::render('Liguria/Visite/Villa_Durazzo_Pallavicini');
        })->middleware(['auth', 'verified'])->name('villa_durazzo_pallavicini');

        Route::get('/visite/genova/cimitero_monumentale_di_staglieno', function () {
            return Inertia::render('Liguria/Visite/Cimitero_Monumentale_di_Staglieno');
        })->middleware(['auth', 'verified'])->name('cimitero_monumentale_di_staglieno');
        
        Route::get('/visite/genova/palazzo_della_meridiana_di_genova', function () {
            return Inertia::render('Liguria/Visite/Palazzo_della_Meridiana');
        })->middleware(['auth', 'verified'])->name('palazzo_della_meridiana_di_genova');
        
        Route::get('/visite/genova/l_ascensore_castello_d_albertis_montegalletto', function () {
            return Inertia::render('Liguria/Visite/Ascensore_Castello_d_Albertis_Montegalletto');
        })->middleware(['auth', 'verified'])->name('l_ascensore_castello_d_albertis_montegalletto');
        
        Route::get('/visite/genova/truogoli_di_santa_brigida', function () {
            return Inertia::render('Liguria/Visite/Truogoli_di_Santa_Brigida');
        })->middleware(['auth', 'verified'])->name('truogoli_di_santa_brigida');
        
        Route::get('/visite/genova/quartiere_del_carmine', function () {
            return Inertia::render('Liguria/Visite/Quartiere_del_Carmine');
        })->middleware(['auth', 'verified'])->name('quartiere_del_carmine');

        Route::get('/visite/genova/ascensore_spianata_castelletto', function () {
            return Inertia::render('Liguria/Visite/Ascensore_Spianata_Castelletto');
        })->middleware(['auth', 'verified'])->name('ascensore_spianata_castelletto');

        Route::get('/visite/genova/porto_antico_di_genova', function () {
            return Inertia::render('Liguria/Visite/Porto_Antico_di_Genova');
        })->middleware(['auth', 'verified'])->name('porto_antico_di_genova');

        Route::get('/visite/genova/chiesa_del_gesu', function () {
            return Inertia::render('Liguria/Visite/Chiesa_di_Gesu');
        })->middleware(['auth', 'verified'])->name('chiesa_del_gesu');
    /*Fine Genova*/
    /*Inizio Camogli*/
        Route::get('/visite/camongli/golfo_paradiso', function () {
            return Inertia::render('Liguria/Visite/Golfo_Paradiso');
        })->middleware(['auth', 'verified'])->name('golfo_paradiso');

        Route::get('/visite/camongli/castello_della_dragonaria', function () {
            return Inertia::render('Liguria/Visite/Castello_della_Dragonaria');
        })->middleware(['auth', 'verified'])->name('castello_della_dragonaria');
    /*Fine Camogli*/
/*Fine Liguria*/

/*Inizio Trentino Alto Adige*/
    Route::get('/trentino_alto_adige', function () {
        return Inertia::render('Trentino_Alto_Adige');
    })->middleware(['auth', 'verified'])->name('trentino_alto_adige');

    Route::get('/destinazioni/trento', function () {
        return Inertia::render('Trentino_Alto_Adige/Destinazioni/Trento');
    })->middleware(['auth', 'verified'])->name('trento');
    /*Inizio Trento*/
        Route::get('/visite/trento/castello_del_buonconsiglio', function () {
            return Inertia::render('Trentino_Alto_Adige/Visite/Castello_del_Buonconsiglio');
        })->middleware(['auth', 'verified'])->name('trento');

        Route::get('/visite/trento/tridentum', function () {
            return Inertia::render('Trentino_Alto_Adige/Visite/Tridentum');
        })->middleware(['auth', 'verified'])->name('tridentum');

        Route::get('/visite/trento/museo_diocesano_tridentino', function () {
            return Inertia::render('Trentino_Alto_Adige/Visite/Museo_Diocesano_Tridentino');
        })->middleware(['auth', 'verified'])->name('museo_diocesano_tridentino');

        Route::get('/visite/trento/museo_delle_scienze', function () {
            return Inertia::render('Trentino_Alto_Adige/Visite/MUSE');
        })->middleware(['auth', 'verified'])->name('museo_delle_scienze');

        Route::get('/visite/trento/piazza_del_duomo', function () {
            return Inertia::render('Trentino_Alto_Adige/Visite/Piazza_del_Duomo');
        })->middleware(['auth', 'verified'])->name('piazza_del_duomo');

        Route::get('/visite/trento/cappella_del_crocifisso', function () {
            return Inertia::render('Trentino_Alto_Adige/Visite/Cappella_del_Crocifisso');
        })->middleware(['auth', 'verified'])->name('cappella_del_crocifisso');

        Route::get('/visite/trento/concilio', function () {
            return Inertia::render('Trentino_Alto_Adige/Visite/Concilio');
        })->middleware(['auth', 'verified'])->name('concilio');

        Route::get('/visite/trento/palazzo_cazuffi', function () {
            return Inertia::render('Trentino_Alto_Adige/Visite/Palazzo_Cazuffi');
        })->middleware(['auth', 'verified'])->name('palazzo_cazuffi');

        Route::get('/visite/trento/torre_civica', function () {
            return Inertia::render('Trentino_Alto_Adige/Visite/Torre_Civica');
        })->middleware(['auth', 'verified'])->name('torre_civica');

        Route::get('/visite/trento/fontana_di_nettuno', function () {
            return Inertia::render('Trentino_Alto_Adige/Visite/Fontana_di_Nettuno');
        })->middleware(['auth', 'verified'])->name('fontana_di_nettuno');

        Route::get('/laghi/lago_di_garda', function () {
            return Inertia::render('Laghi/Lago_di_Garda');
        })->middleware(['auth', 'verified'])->name('lago_di_garda');

        Route::get('/montagna/monte_bondone', function () {
            return Inertia::render('Montagna/Monte_Bondone');
        })->middleware(['auth', 'verified'])->name('monte_bondone');

        Route::get('/fiumi/fiume_adige', function () {
            return Inertia::render('Fiumi/Fiume_Adige');
        })->middleware(['auth', 'verified'])->name('fiume_adige');
    /*Fine Trento*/
    /*Inizio Rovereto*/
        Route::get('/destinazioni/rovereto', function () {
            return Inertia::render('Trentino_Alto_Adige/Destinazioni/Rovereto');
        })->middleware(['auth', 'verified'])->name('rovereto');

        Route::get('/visite/rovereto/mart_museo_di_arte_moderna_e_contemporanea', function () {
            return Inertia::render('Trentino_Alto_Adige/Visite/Mart');
        })->middleware(['auth', 'verified'])->name('mart_museo_di_arte_moderna_e_contemporanea');
    /*Fine Rovereto*/
/*Fine Trentino Alto Adige*/

/*Inizio Veneto*/
    Route::get('/veneto', function () {
        return Inertia::render('Veneto');
    })->middleware(['auth', 'verified'])->name('veneto');

    Route::get('/destinazioni/venezia', function () {
        return Inertia::render('Veneto/Destinazioni/Venezia');
    })->middleware(['auth', 'verified'])->name('venezia');
    /*Inizio Venezia*/
        Route::get('/visite/venezia/basilica_di_san_marco', function () {
            return Inertia::render('Veneto/Visite/Basilica_di_San_Marco');
        })->middleware(['auth', 'verified'])->name('basilica_di_san_marco');

        Route::get('/visite/venezia/palazzo_ducale', function () {
            return Inertia::render('Veneto/Visite/Palazzo_Ducale');
        })->middleware(['auth', 'verified'])->name('palazzo_ducale');

        Route::get('/visite/venezia/peggy_guggenheim_collection', function () {
            return Inertia::render('Veneto/Visite/Peggy_Guggenheim_Collection');
        })->middleware(['auth', 'verified'])->name('peggy_guggenheim_collection');

        Route::get('/visite/venezia/il_ghetto', function () {
            return Inertia::render('Veneto/Visite/Il_Ghetto');
        })->middleware(['auth', 'verified'])->name('il_ghetto');

        Route::get('/visite/venezia/ponte_di_rialto', function () {
            return Inertia::render('Veneto/Visite/Ponte_di_Rialto');
        })->middleware(['auth', 'verified'])->name('ponte_di_rialto');

        Route::get('/visite/venezia/punta_della_dogana', function () {
            return Inertia::render('Veneto/Visite/Punta_della_Dogana');
        })->middleware(['auth', 'verified'])->name('punta_della_dogana');

        Route::get('/visite/venezia/ca_d_oro', function () {
            return Inertia::render('Veneto/Visite/Ca_d_Oro');
        })->middleware(['auth', 'verified'])->name('ca_d_oro');
    /*Fine Venezia*/
/*Fine Veneto*/

/*Inizio Emilia-Romagna*/
    Route::get('/emilia_romagna', function () {
        return Inertia::render('Emilia_Romagna');
    })->middleware(['auth', 'verified'])->name('emilia_romagna');

    Route::get('/destinazioni/bologna', function () {
        return Inertia::render('Emilia_Romagna/Destinazioni/Bologna');
    })->middleware(['auth', 'verified'])->name('bologna');
    /*Inizio Bologna*/
        Route::get('/visite/bologna/basilica_di_san_petronio', function () {
            return Inertia::render('Emilia_Romagna/Visite/Basilica_di_San_Petronio');
        })->middleware(['auth', 'verified'])->name('basilica_di_san_petronio');

        Route::get('/visite/bologna/piazza_maggiore', function () {
            return Inertia::render('Emilia_Romagna/Visite/Piazza_Maggiore');
        })->middleware(['auth', 'verified'])->name('piazza_maggiore');

        Route::get('/visite/bologna/le_due_torri', function () {
            return Inertia::render('Emilia_Romagna/Visite/Le_Due_Torri');
        })->middleware(['auth', 'verified'])->name('le_due_torri');

        Route::get('/visite/bologna/mambo', function () {
            return Inertia::render('Emilia_Romagna/Visite/Mambo');
        })->middleware(['auth', 'verified'])->name('mambo');

        Route::get('/visite/bologna/antico_mercatio_di_bologna', function () {
            return Inertia::render('Emilia_Romagna/Visite/Antico_Mercato_di_Bologna');
        })->middleware(['auth', 'verified'])->name('antico_mercato_di_bologna');

        Route::get('/visite/bologna/archiginnasio', function () {
            return Inertia::render('Emilia_Romagna/Visite/Archiginnasio');
        })->middleware(['auth', 'verified'])->name('archiginnasio');

        Route::get('/visite/bologna/pinacoteca_nazionale', function () {
            return Inertia::render('Emilia_Romagna/Visite/Pinacoteca_Nazionale');
        })->middleware(['auth', 'verified'])->name('pinacoteca_nazionale');

        Route::get('/visite/bologna/piazza_santo_stefano', function () {
            return Inertia::render('Emilia_Romagna/Visite/Piazza_Santo_Stefano');
        })->middleware(['auth', 'verified'])->name('piazza_santo_stefano');

        Route::get('/visite/bologna/certosa_di_bologna', function () {
            return Inertia::render('Emilia_Romagna/Visite/Certosa_di_Bologna');
        })->middleware(['auth', 'verified'])->name('certosa_di_bologna');

        Route::get('/visite/bologna/museo_civico_medievale', function () {
            return Inertia::render('Emilia_Romagna/Visite/Museo_Civico_Medievale');
        })->middleware(['auth', 'verified'])->name('museo_civico_medievale');
    /*Fine Bologna*/
/*Fine Emilia-Romagna*/

/*Inizio Friuli Venezia Giulia*/
    Route::get('/friuli_venezia_giulia', function () {
        return Inertia::render('Friuli_Venezia_Giulia');
    })->middleware(['auth', 'verified'])->name('friuli_venezia_giulia');
    
    Route::get('/destinazioni/trieste', function () {
        return Inertia::render('Friuli_Venezia_Giulia/Destinazioni/Trieste');
    })->middleware(['auth', 'verified'])->name('trieste');
    /*Inizio Trieste*/
        Route::get('/visite/trieste/risiera_di_san_sabba', function () {
            return Inertia::render('Friuli_Venezia_Giulia/Visite/Risiera_di_San_Sabba');
        })->middleware(['auth', 'verified'])->name('risiera_di_san_sabba');

        Route::get('/visite/trieste/museo_revoltella', function () {
            return Inertia::render('Friuli_Venezia_Giulia/Visite/Museo_Revoltella');
        })->middleware(['auth', 'verified'])->name('museo_revoltella');

        Route::get('/visite/trieste/castello_di_san_giusto', function () {
            return Inertia::render('Friuli_Venezia_Giulia/Visite/Castello_di_San_Giusto');
        })->middleware(['auth', 'verified'])->name('castello_di_san_giusto');

        Route::get('/visite/trieste/castello_di_miramare', function () {
            return Inertia::render('Friuli_Venezia_Giulia/Visite/Castello_di_Miramare');
        })->middleware(['auth', 'verified'])->name('castello_di_miramare');

        Route::get('/visite/trieste/teatro_romano', function () {
            return Inertia::render('Friuli_Venezia_Giulia/Visite/Teatro_Romano');
        })->middleware(['auth', 'verified'])->name('teatro_romano');
    /*Fine Trieste*/
/*Fine Friuli Venezia Giulia*/

/*Inizio Toscana*/
    Route::get('/toscana', function () {
        return Inertia::render('Toscana');
    })->middleware(['auth', 'verified'])->name('toscana');

    Route::get('/destinazioni/toscana/firenze', function () {
        return Inertia::render('Toscana/Destinazioni/Firenze');
    })->middleware(['auth', 'verified'])->name('firenze');
    /*Inizio Firenze*/
        Route::get('/visite/toscana/firenze/duomo', function () {
            return Inertia::render('Toscana/Visite/Duomo_di_Firenze');
        })->middleware(['auth', 'verified'])->name('duomo');

        Route::get('/visite/toscana/firenze/battistero', function () {
            return Inertia::render('Toscana/Visite/Battistero');
        })->middleware(['auth', 'verified'])->name('battistero');

        Route::get('/visite/toscana/firenze/galleria_degli_uffizi', function () {
            return Inertia::render('Toscana/Visite/Galleria_degli_Uffizi');
        })->middleware(['auth', 'verified'])->name('galleria_degli_uffizi');

        Route::get('/visite/toscana/firenze/ponte_vecchio', function () {
            return Inertia::render('Toscana/Visite/Ponte_Vecchio');
        })->middleware(['auth', 'verified'])->name('ponte_vecchio');

        Route::get('/visite/toscana/firenze/palazzo_vecchio', function () {
            return Inertia::render('Toscana/Visite/Palazzo_Vecchio');
        })->middleware(['auth', 'verified'])->name('palazzo_vecchio');

        Route::get('/visite/toscana/firenze/palazzo_pitti', function () {
            return Inertia::render('Toscana/Visite/Palazzo_Pitti');
        })->middleware(['auth', 'verified'])->name('palazzo_pitti');

        Route::get('/visite/toscana/firenze/basilica_di_santa_croce', function () {
            return Inertia::render('Toscana/Visite/Basilica_di_Santa_Croce');
        })->middleware(['auth', 'verified'])->name('basilica_di_santa_croce');

        Route::get('/visite/toscana/firenze/basilica_di_santa_maria_del_carmine', function () {
            return Inertia::render('Toscana/Visite/Basilica_di_Santa_Maria_del_Carmine');
        })->middleware(['auth', 'verified'])->name('basilica_di_santa_maria_del_carmine');

        Route::get('/visite/toscana/firenze/cappelle_medicee', function () {
            return Inertia::render('Toscana/Visite/Cappelle_Medicee');
        })->middleware(['auth', 'verified'])->name('cappelle_medicee');

        Route::get('/visite/toscana/firenze/casa_di_dante', function () {
            return Inertia::render('Toscana/Visite/Casa_di_Dante');
        })->middleware(['auth', 'verified'])->name('casa_di_dante');

        Route::get('/visite/toscana/firenze/galleria_dell_accademia', function () {
            return Inertia::render('Toscana/Visite/Galleria_dell_Accademia');
        })->middleware(['auth', 'verified'])->name('galleria_dell_accademia');
    /*Fine Firenze*/
/*Fine Toscana*/

/*Inizio Umbria*/
    Route::get('/umbria', function () {
        return Inertia::render('Umbria');
    })->middleware(['auth', 'verified'])->name('umbria');

    Route::get('/destinazioni/umbria/perugia', function () {
        return Inertia::render('Umbria/Destinazioni/Perugia');
    })->middleware(['auth', 'verified'])->name('perugia');
    /*Inizio Perugia*/
        Route::get('/visite/umbria/perugia/perugina', function () {
            return Inertia::render('Umbria/Visite/Perugina');
        })->middleware(['auth', 'verified'])->name('perugina');
    /*Fine Perugia*/
/*Fine Umbria*/

/*Inizio Marche*/
    Route::get('/marche', function () {
        return Inertia::render('Marche');
    })->middleware(['auth', 'verified'])->name('marche');

    Route::get('/destinazioni/marche/ancona', function () {
        return Inertia::render('Marche/Destinazioni/Ancona');
    })->middleware(['auth', 'verified'])->name('ancona');
    /*Inizio Ancona*/
        Route::get('/visite/marche/ancona/museo_archeologico_nazionale_delle_marche', function () {
            return Inertia::render('Marche/Visite/Museo_Archeologico_Nazionale_delle_Marche');
        })->middleware(['auth', 'verified'])->name('museo_archeologico_nazionale_delle_marche');
    /*Fine Ancona*/



    












































































Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
