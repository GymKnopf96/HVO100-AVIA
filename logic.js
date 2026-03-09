// --- Diagnose: zeigt in der Konsole, dass logic.js wirklich lädt ---
console.log('logic.js wurde geladen.');

/* =========================
   FESTE DATEN: TANKS / HUBS / LINKS
   ========================= */

// TANKS – unverändert aus deiner hochgeladenen Datei (syntaktisch bereinigt)
const TANKS = [
  {"name": "AVIA Tankstelle", "addr": "Altdorfer Straße 93, 91207, Lauf", "lat": 49.5037, "lon": 11.28543},
  {"name": "AVIA Tankstelle", "addr": "Hohe Straße 1, 35576, Wetzlar", "lat": 50.564722, "lon": 8.477448},
  {"name": "AVIA Tankstelle", "addr": "Moosstraße 111, 96050, Bamberg", "lat": 49.89489, "lon": 10.92283},
  {"name": "AVIA Tankstelle", "addr": "Vor dem Lohe 1, 99628, Buttstädt", "lat": 51.12585, "lon": 11.42704},
  {"name": "AVIA Tankstelle", "addr": "Zeiler Straße 8, 97437, Haßfurt", "lat": 50.03103, "lon": 10.51814},
  {"name": "AVIA XPress", "addr": "Gustav-Kunst-Straße 23, 20539, Hamburg", "lat": 53.5396, "lon": 10.05857},
  {"name": "AVIA Tankstelle", "addr": "Robert-Bosch-Straße 1, 74632, Neuenstein", "lat": 49.21291, "lon": 9.585649},
  {"name": "AVIA Tankstelle", "addr": "Eisenacher Landstraße 21, 99880, Waltershausen", "lat": 50.9044083, "lon": 10.5588272},
  {"name": "AVIA XPress", "addr": "Gutenbergstraße 22, 93128, Regenstauf", "lat": 49.11043, "lon": 12.11968},
  {"name": "AVIA Tankstelle", "addr": "Neue Wiese 1 b, 99817, Eisenach", "lat": 50.99579151, "lon": 10.35487094},
  {"name": "AVIA Tankstelle", "addr": "Kreuzbergstraße 46, 36043, Fulda", "lat": 50.54072017, "lon": 9.69967215},
  {"name": "AVIA XPress", "addr": "Leipziger Straße 110, 98617, Meiningen", "lat": 50.58934, "lon": 10.41138},
  {"name": "AVIA XPress", "addr": "Walserstraße 24, 87567, Riezlern", "lat": 47.3602613330687, "lon": 10.1903123574641},
  {"name": "AVIA Automatentankstelle", "addr": "Bürgerseeweg 23, 17235, Neustrelitz", "lat": 53.3354221414788, "lon": 13.0605081696985},
  {"name": "AVIA Tankstelle", "addr": "Dreichlingerstraße 41, 92318, Neumarkt", "lat": 49.26456, "lon": 11.45817},
  {"name": "AVIA Tankstelle", "addr": "Lachgartenweg 9, 91788, Pappenheim", "lat": 48.92759, "lon": 10.96465},
  {"name": "AVIA Tankstelle", "addr": "An der Heusteige 4, 91757, Treuchtlingen", "lat": 48.94288, "lon": 10.91493},
  {"name": "AVIA XPress", "addr": "Wittlensweiler Straße 72, 72250, Freudenstadt", "lat": 48.46916, "lon": 8.43848},
  {"name": "tankpoint Tankstelle", "addr": "Trostberger Straße 16, 83301, Traunreut", "lat": 47.9622, "lon": 12.61078},
  {"name": "AVIA Tankstelle", "addr": "Industriestraße 23, 78333, Stockach", "lat": 47.84259, "lon": 9.002909},
  {"name": "AVIA Tankstelle", "addr": "Industriestr. 4a, 61273, Wehrheim", "lat": 50.29514, "lon": 8.568226},
  {"name": "AVIA Tankstelle", "addr": "Landshuter Strasse 110, 93053, Regensburg", "lat": 49.0029208763534, "lon": 12.1231663357552},
  {"name": "AVIA XPress", "addr": "Pfaffenpfad 11, 97440, Werneck", "lat": 50.0023683130239, "lon": 10.1127532402084},
  {"name": "AVIA XPress", "addr": "Am Sand 13, 91781, Weißenburg", "lat": 49.02018127, "lon": 10.95160408},
  {"name": "AVIA XPress", "addr": "Raiffeisenstr. 3, 87463, Dietmannsried", "lat": 47.80403, "lon": 10.29927},
  {"name": "AVIA Tankstelle", "addr": "Triebstr. 35 a, 80993, München", "lat": 48.18716310647188, "lon": 11.535236699999988},
  {"name": "AVIA Tankstelle", "addr": "Friedrich-Eckart-Str. 39, 81929, München", "lat": 48.144768635304736, "lon": 11.639471661376945},
  {"name": "AVIA Tankstelle", "addr": "Stuttgarter Str. 150, 74321, Bietigheim-Bissingen", "lat": 48.944642872589135, "lon": 9.139331219049067},
  {"name": "AVIA Tankstelle", "addr": "Aldinger Str. 74, 70378, Stuttgart", "lat": 48.84116179529447, "lon": 9.230925626983655},
  {"name": "AVIA XPress", "addr": "Renninger Str. 24, 71277, Rutesheim", "lat": 48.80721344484972, "lon": 8.94237546693421},
  {"name": "AVIA Tankstelle", "addr": "Jesinger Str. 50, 73230, Kirchheim unter Teck", "lat": 48.64525769999999, "lon": 9.4591851},
  {"name": "AVIA Tankstelle", "addr": "Ettlinger Str. 38, 76332, Bad Herrenalb", "lat": 48.80622899999999, "lon": 8.4450541},
  {"name": "AVIA Tankstelle", "addr": "Raiffeisenalle 7, 82041, Oberhaching", "lat": 48.0326282, "lon": 11.5844135},
  {"name": "AVIA Tankstelle", "addr": "Innsbrucker Ring 153, 81669, München", "lat": 48.1137567, "lon": 11.6171276},
  {"name": "AVIA Tankstelle", "addr": "Stuttgarter Str. 41, 72654, Neckartenzlingen", "lat": 48.5939089, "lon": 9.2366328},
  {"name": "Tankstelle", "addr": "Kasernenstr. 30, 93155, Hemau", "lat": 49.048872, "lon": 11.79631},
  {"name": "AVIA XPress", "addr": "Marktplatz 1, 85135, Titting", "lat": 48.99601, "lon": 11.21035},
  {"name": "AVIA XPress", "addr": "Gewerbestr. 93, 75015, Bretten", "lat": 49.0543315, "lon": 8.7446673},
  {"name": "AVIA XPress", "addr": "Rhönstraße 3, 97653, Bischofsheim in der Rhön", "lat": 50.40234359999999, "lon": 10.0046136},
  {"name": "AVIA Tankstelle", "addr": "Heidenheimer Str. 17, 73450, Neresheim", "lat": 48.7548985, "lon": 10.3279919},
  {"name": "AVIA Tankstelle", "addr": "Augsburger Str. 46, 86473, Ziemetshausen", "lat": 48.2939804, "lon": 10.54820995},
  {"name": "AVIA Tankstelle", "addr": "In der Quelle 16, 63863, Eschau", "lat": 49.8222783, "lon": 9.2604675},
  {"name": "AVIA Automatentankstelle", "addr": "Auchterstraße 18, 72770, Reutlingen", "lat": 48.4937115, "lon": 9.163302},
  {"name": "AVIA XPress", "addr": "Kaufbeurener Str. 25a, 87640, Biessenhofen", "lat": 47.8362436, "lon": 10.6399651},
  {"name": "AVIA XPress", "addr": "Walldürner Str. 30, 74722, Buchen", "lat": 49.52529579999999, "lon": 9.3285658},
  {"name": "AVIA Tankstelle", "addr": "Einhornstraße 76, 73529, Schwäbisch Gmünd", "lat": 48.78313000000001, "lon": 9.7977916}
]; // aus deiner Datei übernommen [1](https://volkswagenotlg-my.sharepoint.com/personal/sannz2f_volkswagen-otlg_de/Documents/Microsoft%20Copilot-Chatdateien/logic.js)

// HUBS – feste Koordinaten (keine fetch() mehr nötig)
const HUBS = [
  { "name": "VZ Nord", "addr": "Am Stammgleis 6, 22844, Norderstedt", "lat": 53.73723, "lon": 9.98839 },
  { "name": "HUB Bremen", "addr": "Am Gewerbegebiet 30, 27243, Groß Ippener", "lat": 52.93385, "lon": 8.59943 },
  { "name": "HUB Hannover", "addr": "Breslauerstr. 60, 31157, Sarstedt", "lat": 52.24176, "lon": 9.83883 },
  { "name": "HUB Kiel", "addr": "Bunsenstr. 1D, 24145, Kiel", "lat": 54.29248, "lon": 10.14819 },
  { "name": "HUB Oldenburg", "addr": "Zum Heerenberg 16, 26655, Westerstede", "lat": 53.24928, "lon": 7.92360 },
  { "name": "VZ West", "addr": "Poller Holzweg 9, 51105, Köln", "lat": 50.92130, "lon": 6.98267 },
  { "name": "HUB Bochum", "addr": "von-Waldthausen-Straße 77, 44894, Bochum", "lat": 51.49359, "lon": 7.29503 },
  { "name": "HUB Olpe", "addr": "Grünewald 9 (Im Gewerbepark), 58540, Meinerzhagen", "lat": 51.11299, "lon": 7.63878 },
  { "name": "HUB Gütersloh", "addr": "Stahlstrasse 50, 33415, Verl", "lat": 51.85609, "lon": 8.50702 },
  { "name": "VZ Südwest", "addr": "Porschestrasse 14, 71634, Ludwigsburg", "lat": 48.89992, "lon": 9.17852 },
  { "name": "HUB Tuttlingen", "addr": "Pfeilstraße 6, 78063, Dauchingen", "lat": 48.08999, "lon": 8.53012 },
  { "name": "HUB Freiburg", "addr": "Wöhlerstraße 2, 79108, Freiburg", "lat": 48.03993, "lon": 7.83712 },
  { "name": "HUB Würzburg", "addr": "Unterer Kirchbergweg 65, 97084, Würzburg", "lat": 49.76471, "lon": 9.91318 },
  { "name": "HUB Ulm", "addr": "Otto-Renner-Straße 4, 89231, Neu-Ulm", "lat": 48.38702, "lon": 10.01319 },
  { "name": "HUB Offenburg", "addr": "Robert-Bosch-Straße 1, 77871, Renchen", "lat": 48.57889, "lon": 8.02916 },
  { "name": "VZ Südbayern", "addr": "Schatzbogen 6, 81829, München", "lat": 48.11951, "lon": 11.66214 },
  { "name": "HUB Nürnberg", "addr": "Breslauer Straße 366, 90471, Nürnberg", "lat": 49.41852, "lon": 11.15776 },
  { "name": "HUB Deggendorf", "addr": "Dr. Wandlinger-Straße 1, 94447, Deggendorf", "lat": 48.83421, "lon": 12.97118 },
  { "name": "HUB Bayreuth", "addr": "Weiherstraße 2, 95448, Bayreuth", "lat": 49.91234, "lon": 11.60286 },
  { "name": "HUB Ingolstadt", "addr": "Steinheilstraße 17-19, 85053, Ingolstadt", "lat": 48.76862, "lon": 11.44110 },
  { "name": "HUB Mindelheim", "addr": "Eidlerholzstraße 9, 87746, Erkheim", "lat": 47.99740, "lon": 10.28351 },
  { "name": "HUB Regensburg", "addr": "Äußere-Wiener-Straße 12-16, 93055, Regensburg", "lat": 49.00950, "lon": 12.12598 },
  { "name": "VZ Rhein-Main", "addr": "Güterstraße 21-23, 64807, Dieburg", "lat": 49.89842, "lon": 8.83350 },
  { "name": "HUB Bad Hersfeld", "addr": "Am Elvis Terminal, 34593, Knüllwald", "lat": 51.03647, "lon": 9.52372 },
  { "name": "HUB Alzey", "addr": "Otto-Lilienthal-Straße 9, 55232, Alzey", "lat": 49.77566, "lon": 8.12314 },
  { "name": "VZ Brandenburg", "addr": "Zum Röthepfuhl 1, 14974, Ludwigsfelde", "lat": 52.29383, "lon": 13.24838 },
  { "name": "HUB Chemnitz", "addr": "Olbernhauer Straße 7, 09244, Chemnitz", "lat": 50.75905, "lon": 12.88411 },
  { "name": "HUB Dresden", "addr": "Gottfried-Schenker-Str. 3, 01471, Radeburg", "lat": 51.18016, "lon": 13.72096 },
  { "name": "HUB Leipzig", "addr": "Industriestraße 22, 04435, Schkeuditz", "lat": 51.43125, "lon": 12.22680 },
  { "name": "HUB Magdeburg", "addr": "Sudenburger Wuhne 47, 39112, Magdeburg", "lat": 52.10709, "lon": 11.60064 },
  { "name": "HUB Müritz", "addr": "Minzower Str. 1, 17207, Röbel / Müritz", "lat": 53.38111, "lon": 12.60617 }
];

// LINKS – unverändert aus deiner hochgeladenen Datei (syntaktisch bereinigt)
const LINKS = [
  {"hubName": "VZ Nord", "hubAddr": "Am Stammgleis 6, 22844, Norderstedt", "tank": {"name": "AVIA XPress", "addr": "Gustav-Kunst-Straße 23, 20539, Hamburg", "lat": 53.5396, "lon": 10.05857}, "providedDist": 24.0},
  {"hubName": "HUB Bremen", "hubAddr": "Am Gewerbegebiet 30, 27243, Groß Ippener", "tank": {"name": "AVIA XPress", "addr": "Gustav-Kunst-Straße 23, 20539, Hamburg", "lat": 53.5396, "lon": 10.05857}, "providedDist": 132.0},
  {"hubName": "HUB Hannover", "hubAddr": "Breslauerstr. 60, 31157, Sarstedt", "tank": {"name": "AVIA XPress", "addr": "Gustav-Kunst-Straße 23, 20539, Hamburg", "lat": 53.5396, "lon": 10.05857}, "providedDist": 166.0},
  {"hubName": "HUB Kiel", "hubAddr": "Bunsenstr. 1D, 24145, Kiel", "tank": {"name": "AVIA XPress", "addr": "Gustav-Kunst-Straße 23, 20539, Hamburg", "lat": 53.5396, "lon": 10.05857}, "providedDist": 103.0},
  {"hubName": "HUB Oldenburg", "hubAddr": "Zum Heerenberg 16, 26655, Westerstede", "tank": {"name": "AVIA XPress", "addr": "Gustav-Kunst-Straße 23, 20539, Hamburg", "lat": 53.5396, "lon": 10.05857}, "providedDist": 194.0},
  {"hubName": "VZ West", "hubAddr": "Poller Holzweg 9, 51105, Köln", "tank": {"name": "AVIA Tankstelle", "addr": "Hohe Straße 1, 35576, Wetzlar", "lat": 50.564722, "lon": 8.477448}, "providedDist": 154.0},
  {"hubName": "HUB Bochum", "hubAddr": "von-Waldthausen-Straße 77, 44894, Bochum", "tank": {"name": "AVIA Tankstelle", "addr": "Hohe Straße 1, 35576, Wetzlar", "lat": 50.564722, "lon": 8.477448}, "providedDist": 168.0},
  {"hubName": "HUB Olpe", "hubAddr": "Grünewald 9 (Im Gewerbepark), 58540, Meinerzhagen", "tank": {"name": "AVIA Tankstelle", "addr": "Hohe Straße 1, 35576, Wetzlar", "lat": 50.564722, "lon": 8.477448}, "providedDist": 105.0},
  {"hubName": "HUB Gütersloh", "hubAddr": "Stahlstrasse 50, 33415, Verl", "tank": {"name": "AVIA Tankstelle", "addr": "Hohe Straße 1, 35576, Wetzlar", "lat": 50.564722, "lon": 8.477448}, "providedDist": 236.0},
  {"hubName": "VZ Südwest", "hubAddr": "Porschestrasse 14, 71634, Ludwigsburg", "tank": {"name": "AVIA Tankstelle", "addr": "Stuttgarter Str. 150, 74321, Bietigheim-Bissingen", "lat": 48.944642872589135, "lon": 9.139331219049067}, "providedDist": 4.0},
  {"hubName": "HUB Tuttlingen", "hubAddr": "Pfeilstraße 6, 78063, Dauchingen", "tank": {"name": "AVIA Tankstelle", "addr": "Industriestraße 23, 78333, Stockach", "lat": 47.84259, "lon": 9.002909}, "providedDist": 40.0},
  {"hubName": "HUB Freiburg", "hubAddr": "Wöhlerstraße 2, 79108, Freiburg", "tank": {"name": "AVIA XPress", "addr": "Wittlensweiler Straße 72, 72250, Freudenstadt", "lat": 48.46916, "lon": 8.43848}, "providedDist": 7.0},
  {"hubName": "HUB Würzburg", "hubAddr": "Unterer Kirchbergweg 65, 97084, Würzburg", "tank": {"name": "AVIA XPress", "addr": "Pfaffenpfad 11, 97440, Werneck", "lat": 50.0023683130239, "lon": 10.1127532402084}, "providedDist": 79.0},
  {"hubName": "HUB Ulm", "hubAddr": "Otto-Renner-Straße 4, 89231, Neu-Ulm", "tank": {"name": "AVIA Tankstelle", "addr": "Augsburger Str. 46, 86473, Ziemetshausen", "lat": 48.2939804, "lon": 10.54820995}, "providedDist": 44.0},
  {"hubName": "HUB Offenburg", "hubAddr": "Robert-Bosch-Straße 1, 77871, Renchen", "tank": {"name": "AVIA XPress", "addr": "Wittlensweiler Straße 72, 72250, Freudenstadt", "lat": 48.46916, "lon": 8.43848}, "providedDist": 55.0},
  {"hubName": "VZ Südbayern", "hubAddr": "Schatzbogen 6, 81829, München", "tank": {"name": "AVIA Tankstelle", "addr": "Friedrich-Eckart-Str. 39, 81929, München", "lat": 48.144768635304736, "lon": 11.639471661376945}, "providedDist": 3.5},
  {"hubName": "HUB Nürnberg", "hubAddr": "Breslauer Straße 366, 90471, Nürnberg", "tank": {"name": "AVIA Tankstelle", "addr": "Altdorfer Straße 93, 91207, Lauf", "lat": 49.5037, "lon": 11.28543}, "providedDist": 20.0},
  {"hubName": "HUB Deggendorf", "hubAddr": "Dr. Wandlinger-Straße 1, 94447, Deggendorf", "tank": {"name": "AVIA Tankstelle", "addr": "Landshuter Strasse 110, 93053, Regensburg", "lat": 49.0029208763534, "lon": 12.1231663357552}, "providedDist": 79.0},
  {"hubName": "HUB Bayreuth", "hubAddr": "Weiherstraße 2, 95448, Bayreuth", "tank": {"name": "AVIA Tankstelle", "addr": "Moosstraße 111, 96050, Bamberg", "lat": 49.89489, "lon": 10.92283}, "providedDist": 69.0},
  {"hubName": "HUB Ingolstadt", "hubAddr": "Steinheilstraße 17-19, 85053, Ingolstadt", "tank": {"name": "AVIA XPress", "addr": "Marktplatz 1, 85135, Titting", "lat": 48.99601, "lon": 11.21035}, "providedDist": 50.0},
  {"hubName": "HUB Mindelheim", "hubAddr": "Eidlerholzstraße 9, 87746, Erkheim", "tank": {"name": "AVIA XPress", "addr": "Raiffeisenstr. 3, 87463, Dietmannsried", "lat": 47.80403, "lon": 10.29927}, "providedDist": 41.0},
  {"hubName": "HUB Regensburg", "hubAddr": "Äußere-Wiener-Straße 12-16, 93055, Regensburg", "tank": {"name": "AVIA Tankstelle", "addr": "Landshuter Strasse 110, 93053, Regensburg", "lat": 49.0029208763534, "lon": 12.1231663357552}, "providedDist": 4.0},
  {"hubName": "VZ Rhein-Main", "hubAddr": "Güterstraße 21-23, 64807, Dieburg", "tank": {"name": "AVIA Tankstelle", "addr": "In der Quelle 16, 63863, Eschau", "lat": 49.8222783, "lon": 9.2604675}, "providedDist": 46.0},
  {"hubName": "HUB Bad Hersfeld", "hubAddr": "Am Elvis Terminal, 34593, Knüllwald", "tank": {"name": "AVIA Tankstelle", "addr": "Neue Wiese 1 b, 99817, Eisenach", "lat": 50.99579151, "lon": 10.35487094}, "providedDist": 90.0},
  {"hubName": "HUB Alzey", "hubAddr": "Otto-Lilienthal-Straße 9, 55232, Alzey", "tank": {"name": "AVIA Tankstelle", "addr": "In der Quelle 16, 63863, Eschau", "lat": 49.8222783, "lon": 9.2604675}, "providedDist": 126.0},
  {"hubName": "VZ Brandenburg", "hubAddr": "Zum Röthepfuhl 1, 14974, Ludwigsfelde", "tank": {"name": "AVIA Tankstelle", "addr": "Vor dem Lohe 1, 99628, Buttstädt", "lat": 51.12585, "lon": 11.42704}, "providedDist": 235.0},
  {"hubName": "HUB Chemnitz", "hubAddr": "Olbernhauer Straße 7, 09244, Chemnitz", "tank": {"name": "AVIA Tankstelle", "addr": "Vor dem Lohe 1, 99628, Buttstädt", "lat": 51.12585, "lon": 11.42704}, "providedDist": 154.0},
  {"hubName": "HUB Dresden", "hubAddr": "Gottfried-Schenker-Str. 3, 01471, Radeburg", "tank": {"name": "AVIA Tankstelle", "addr": "Vor dem Lohe 1, 99628, Buttstädt", "lat": 51.12585, "lon": 11.42704}, "providedDist": 213.0},
  {"hubName": "HUB Leipzig", "hubAddr": "Industriestraße 22, 04435, Schkeuditz", "tank": {"name": "AVIA Tankstelle", "addr": "Vor dem Lohe 1, 99628, Buttstädt", "lat": 51.12585, "lon": 11.42704}, "providedDist": 88.0},
  {"hubName": "HUB Magdeburg", "hubAddr": "Sudenburger Wuhne 47, 39112, Magdeburg", "tank": {"name": "AVIA Tankstelle", "addr": "Vor dem Lohe 1, 99628, Buttstädt", "lat": 51.12585, "lon": 11.42704}, "providedDist": 165.0},
  {"hubName": "HUB Müritz", "hubAddr": "Minzower Str. 1, 17207, Röbel / Müritz", "tank": {"name": "AVIA Automatentankstelle", "addr": "Bürgerseeweg 23, 17235, Neustrelitz", "lat": 53.3354221414788, "lon": 13.0605081696985}, "providedDist": 44.0}
]; // aus deiner Datei übernommen [1](https://volkswagenotlg-my.sharepoint.com/personal/sannz2f_volkswagen-otlg_de/Documents/Microsoft%20Copilot-Chatdateien/logic.js)

/* =========================
   Leaflet-Karte initialisieren
   ========================= */
const hubColor  = '#6f42c1';
const tankColor = '#2b8cbe';

function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371, toRad = v => v * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat/2)**2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function colorByDistance(km) {
  if (km == null || isNaN(km)) return '#3388ff';
  if (km <= 10)  return '#2dc937';
  if (km <= 50)  return '#e7b416';
  if (km <= 100) return '#db7b2b';
  return '#cc3232';
}

const map = L.map('map', { zoomControl: true }).setView([51.2, 10.2], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap-Mitwirkende'
}).addTo(map);

const tanksLayer = L.layerGroup().addTo(map);
const hubsLayer  = L.layerGroup();
const linksLayer = L.layerGroup();

// ------- LEGENDE (unten rechts) -------
const legend = L.control({ position: 'bottomright' });
legend.onAdd = function () {
  const div = L.DomUtil.create('div', 'legend');
  div.style.background = '#fff';
  div.style.borderRadius = '8px';
  div.style.boxShadow = '0 2px 10px rgba(0,0,0,.15)';
  div.style.padding = '8px 10px';
  div.style.font = '14px/1.3 system-ui, Segoe UI, Roboto, Arial';

  const row = (color, label) =>
    `<div style="display:flex;align-items:center;margin:4px 0">
      <span style="width:12px;height:12px;border-radius:50%;
                   display:inline-block;margin-right:8px;
                   background:${color};
                   box-shadow:0 0 0 1px rgba(0,0,0,.25) inset"></span>
      ${label}
     </div>`;

  div.innerHTML =
    `<div style="margin-bottom:6px;font-weight:600">Legende</div>` +
    row('#2b8cbe', 'Tankstelle') +
    row('#6f42c1', 'HUB / VZ') +
    row('#2dc937', '≤ 10 km') +
    row('#e7b416', '11–50 km') +
    row('#db7b2b', '51–100 km') +
    row('#cc3232', '> 100 km');

  return div;
};
legend.addTo(map);
// ------- ENDE LEGENDE -------

// Tankstellen-Marker
TANKS.forEach(t => {
  tanksLayer.addLayer(
    L.circleMarker([t.lat, t.lon], {
      radius: 7,
      color: tankColor,
      fillColor: tankColor,
      fillOpacity: 0.6,
      weight: 2
    }).bindPopup(`<b>${t.name}</b><br>${t.addr}`)
  );
});

// Initialer Fit auf alle Tankstellen
if (tanksLayer.getLayers().length) {
  const fg = L.featureGroup(tanksLayer.getLayers());
  map.fitBounds(fg.getBounds().pad(0.2));
}

/* =========================
   HUBs & Linien (ohne Geocoding)
   ========================= */
function loadHubsAndLines() {

  hubsLayer.clearLayers();
  linksLayer.clearLayers();

  // --- 1) Normalizer + Maps (robustes Matching) ---
  const normalizeAddr = s => String(s).toLowerCase()
    .replace(/\s+/g, ' ')        // Mehrfach-Leerzeichen -> 1
    .replace(/\s*,\s*/g, ', ')   // Komma-Abstände vereinheitlichen
    .trim();

  const hubByAddr = new Map();
  const hubByName = new Map();

  // HUB-Marker aus festen Koordinaten + Maps füllen
  HUBS.forEach(h => {
    if (typeof h.lat === 'number' && typeof h.lon === 'number') {
      // Karte
      hubsLayer.addLayer(
        L.circleMarker([h.lat, h.lon], {
          radius: 8, color: hubColor, weight: 2,
          fillColor: hubColor, fillOpacity: 0.6
        }).bindPopup(`<b>${h.name}</b><br>${h.addr}`)
      );
      // Maps
      hubByAddr.set(normalizeAddr(h.addr), h);
      hubByName.set(String(h.name).toLowerCase(), h);
    }
  });
  map.addLayer(hubsLayer);

  // --- 2) Verbindungen zeichnen (mit robustem Lookup) ---
  LINKS.forEach(l => {
    const t = l.tank;

    // 2a) Versuche über Adresse (normalisiert)
    const key = normalizeAddr(l.hubAddr);
    let h = hubByAddr.get(key);

    // 2b) Fallback über Namen (falls addr minimal abweicht)
    if (!h && l.hubName) {
      h = hubByName.get(String(l.hubName).toLowerCase());
    }

    if (!t || !h) {
      console.warn('Kein Match für LINK:', l.hubName, ' / ', l.hubAddr);
      return;
    }

    const hc = { lat: h.lat, lon: h.lon };
    const d  = haversine(hc.lat, hc.lon, t.lat, t.lon);

    const html = `<b>${l.hubName}</b> ⇄ <b>${t.name}</b><br>
      <small>berechnet: ${d.toFixed(1)} km · angegeben: ${
        l.providedDist != null ? Number(l.providedDist).toFixed(1) : 'k.A.'
      } km</small>`;

    linksLayer.addLayer(
      L.polyline([[hc.lat, hc.lon], [t.lat, t.lon]], {
        color: colorByDistance(d),
        weight: 3,
        opacity: 0.8
      }).bindPopup(html)
    );
  });

  // --- 3) Fit auf alles ---
  const g = L.featureGroup([
    ...tanksLayer.getLayers(),
    ...hubsLayer.getLayers(),
    ...linksLayer.getLayers()
  ]);
  if (g.getLayers().length) map.fitBounds(g.getBounds().pad(0.2));
}

/* =========================
   Buttons
   ========================= */
document.getElementById('fsBtn').onclick = () => {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen();
  else document.exitFullscreen();
};

document.getElementById('fitBtn').onclick = () => {
  const g = L.featureGroup([
    ...tanksLayer.getLayers(),
    ...hubsLayer.getLayers(),
    ...linksLayer.getLayers()
  ]);
  if (g.getLayers().length) {
    map.fitBounds(g.getBounds().pad(0.2));
  }
};

document.getElementById('loadBtn').onclick = loadHubsAndLines;