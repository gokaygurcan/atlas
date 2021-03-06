export default [
  {
    id: 'pano',
    layers: ['panorama_recent'],
    legendItems: [
      {
        selectable: false,
        title: '2017'
      },
      {
        selectable: false,
        title: '2016'
      }
    ],
    maxZoom: 16,
    minZoom: 11,
    title: 'Panoramabeelden',
    url: '/maps/panorama?version=1.3.0&service=WMS'
  },
  {
    id: 'pano2016',
    layers: ['panorama_recent_2016'],
    legendItems: [
      {
        selectable: false,
        title: '2016'
      }
    ],
    maxZoom: 16,
    minZoom: 11,
    title: 'Panoramabeelden',
    url: '/maps/panorama?version=1.3.0&service=WMS'
  },
  {
    id: 'pano2017',
    layers: ['panorama_recent_2017'],
    legendItems: [
      {
        selectable: false,
        title: '2017'
      }
    ],
    maxZoom: 16,
    minZoom: 11,
    title: 'Panoramabeelden',
    url: '/maps/panorama?version=1.3.0&service=WMS'
  },
  {
    authScope: 'HR/R',
    category: 'Economie en haven',
    id: 'bouw',
    layers: ['bouw'],
    legendItems: [
      {
        selectable: false,
        title: 'Afwerking van gebouwen'
      },
      {
        selectable: false,
        title: 'Bouwinstallatie'
      },
      {
        selectable: false,
        title: 'Bouw/utiliteitsbouw algemeen / klusbedrijf'
      },
      {
        selectable: false,
        title: 'Dak- en overige gespecialiseerde bouw'
      },
      {
        selectable: false,
        title: 'Grond, water, wegenbouw'
      },
      {
        selectable: false,
        title: 'Overige bouw'
      },
      {
        selectable: false,
        title: '(Locatie geschat)'
      }
    ],
    maxZoom: 16,
    minZoom: 11,
    title: 'Bouw',
    url: '/maps/handelsregister?version=1.3.0&service=WMS'
  },
  {
    authScope: 'HR/R',
    category: 'Economie en haven',
    id: 'csr',
    layers: ['cultuur_sport_recreatie'],
    legendItems: [
      {
        selectable: false,
        title: 'Kunst'
      },
      {
        selectable: false,
        title: 'Musea, Bibliotheken, Kunstuitleen'
      },
      {
        selectable: false,
        title: 'Recreatie'
      },
      {
        selectable: false,
        title: 'Sport'
      },
      {
        selectable: false,
        title: '(Locatie geschat)'
      }
    ],
    maxZoom: 16,
    minZoom: 11,
    title: 'Cultuur, sport, recreatie',
    url: '/maps/handelsregister?version=1.3.0&service=WMS'
  },
  {
    authScope: 'HR/R',
    category: 'Economie en haven',
    id: 'fdvrog',
    layers: ['financiele_dienstverlening_verhuur'],
    legendItems: [
      {
        selectable: false,
        title: 'Financiële dienstverlening en verzekeringen'
      },
      {
        selectable: false,
        title: 'Holdings'
      },
      {
        selectable: false,
        title: 'Verhuur van- en beheer/handel in onroerend goed'
      },
      {
        selectable: false,
        title: 'Verhuur van roerende goederen'
      },
      {
        selectable: false,
        title: '(Locatie geschat)'
      }
    ],
    maxZoom: 16,
    minZoom: 11,
    title: 'Financiële dienstverlening, verhuur van roerend en onroerend goed',
    url: '/maps/handelsregister?version=1.3.0&service=WMS'
  },
  {
    authScope: 'HR/R',
    category: 'Economie en haven',
    id: 'hvo',
    layers: ['handel_vervoer_opslag'],
    legendItems: [
      {
        selectable: false,
        title: 'Detailhandel (verkoop aan consumenten, niet zelf vervaardigd)'
      },
      {
        selectable: false,
        title: 'Dienstverlening vervoer'
      },
      {
        selectable: false,
        title: 'Groothandel (verkoop aan andere ondernemingen, niet zelf vervaardigd)'
      },
      {
        selectable: false,
        title: 'Handel en reparatie van auto\'s'
      },
      {
        selectable: false,
        title: 'Handelsbemiddeling (tussenpersoon, verkoopt niet zelf)'
      },
      {
        selectable: false,
        title: 'Opslag'
      },
      {
        selectable: false,
        title: 'Vervoer'
      },
      {
        selectable: false,
        title: '(Locatie geschat)'
      }
    ],
    maxZoom: 16,
    minZoom: 11,
    title: 'Handel, vervoer, opslag',
    url: '/maps/handelsregister?version=1.3.0&service=WMS'
  },
  {
    authScope: 'HR/R',
    category: 'Economie en haven',
    id: 'hrc',
    layers: ['horeca'],
    legendItems: [
      {
        selectable: false,
        title: 'Café'
      },
      {
        selectable: false,
        title: 'Cafetaria, Snackbar, IJssalon'
      },
      {
        selectable: false,
        title: 'Hotel, Pension'
      },
      {
        selectable: false,
        title: 'Hotel-restaurant'
      },
      {
        selectable: false,
        title: 'Kantine, Catering'
      },
      {
        selectable: false,
        title: 'Restaurant, Café-restaurant'
      },
      {
        selectable: false,
        title: 'Overige horeca'
      },
      {
        selectable: false,
        title: '(Locatie geschat)'
      }
    ],
    maxZoom: 16,
    minZoom: 11,
    title: 'Horeca',
    url: '/maps/handelsregister?version=1.3.0&service=WMS'
  },
  {
    authScope: 'HR/R',
    category: 'Economie en haven',
    id: 'itc',
    layers: ['telecommunicatie'],
    legendItems: [
      {
        selectable: false,
        title: 'Activiteiten  op gebied van film, tv, radio, audio'
      },
      {
        selectable: false,
        title: 'Activiteiten op het gebied van ict'
      },
      {
        selectable: false,
        title: 'Telecommunicatie'
      },
      {
        selectable: false,
        title: 'Uitgeverijen'
      },
      {
        selectable: false,
        title: '(Locatie geschat)'
      }
    ],
    maxZoom: 16,
    minZoom: 11,
    title: 'Informatie, telecommunicatie',
    url: '/maps/handelsregister?version=1.3.0&service=WMS'
  },
  {
    authScope: 'HR/R',
    category: 'Economie en haven',
    id: 'lb',
    layers: ['landbouw'],
    legendItems: [
      {
        selectable: false,
        title: 'Dienstverlening voor de land/tuinbouw'
      },
      {
        selectable: false,
        title: 'Fokken, houden dieren'
      },
      {
        selectable: false,
        title: 'Gemengd bedrijf'
      },
      {
        selectable: false,
        title: 'Teelt eenjarige gewassen'
      },
      {
        selectable: false,
        title: 'Teelt meerjarige gewassen'
      },
      {
        selectable: false,
        title: 'Teelt sierplanten'
      },
      {
        selectable: false,
        title: '(Locatie geschat)'
      }
    ],
    maxZoom: 16,
    minZoom: 11,
    title: 'Landbouw',
    url: '/maps/handelsregister?version=1.3.0&service=WMS'
  },
  {
    authScope: 'HR/R',
    category: 'Economie en haven',
    id: 'ooz',
    layers: ['overheid_onderwijs_zorg'],
    legendItems: [
      {
        selectable: false,
        title: 'Gezondheids- en welzijnszorg'
      },
      {
        selectable: false,
        title: 'Onderwijs'
      },
      {
        selectable: false,
        title: 'Overheid'
      },
      {
        selectable: false,
        title: '(Locatie geschat)'
      }
    ],
    maxZoom: 16,
    minZoom: 11,
    title: 'Overheid, onderwijs, zorg',
    url: '/maps/handelsregister?version=1.3.0&service=WMS'
  },
  {
    authScope: 'HR/R',
    category: 'Economie en haven',
    id: 'pd',
    layers: ['persoonlijke_dienstverlening'],
    legendItems: [
      {
        selectable: false,
        title: 'Kappers'
      },
      {
        selectable: false,
        title: 'Sauna, solaria'
      },
      {
        selectable: false,
        title: 'Schoonheidsverzorging'
      },
      {
        selectable: false,
        title: 'Uitvaart, crematoria'
      },
      {
        selectable: false,
        title: 'Overige dienstverlening'
      },
      {
        selectable: false,
        title: '(Locatie geschat)'
      }
    ],
    maxZoom: 16,
    minZoom: 11,
    title: 'Persoonlijke dienstverlening',
    url: '/maps/handelsregister?version=1.3.0&service=WMS'
  },
  {
    authScope: 'HR/R',
    category: 'Economie en haven',
    id: 'pir',
    layers: ['productie_installatie_reparatie'],
    legendItems: [
      {
        selectable: false,
        title: 'Installatie (geen bouw)'
      },
      {
        selectable: false,
        title: 'Productie'
      },
      {
        selectable: false,
        title: 'Reparatie (geen bouw)'
      },
      {
        selectable: false,
        title: '(Locatie geschat)'
      }
    ],
    maxZoom: 16,
    minZoom: 11,
    title: 'Productie, installatie, reparatie',
    url: '/maps/handelsregister?version=1.3.0&service=WMS'
  },
  {
    authScope: 'HR/R',
    category: 'Economie en haven',
    id: 'zd',
    layers: ['zakelijke_dienstverlening'],
    legendItems: [
      {
        selectable: false,
        title: 'Accountancy, administratie'
      },
      {
        selectable: false,
        title: 'Advocaten rechtskundige diensten, notarissen'
      },
      {
        selectable: false,
        title: 'Arbeidsbemiddeling, Uitzendbureaus, Uitleenbureaus'
      },
      {
        selectable: false,
        title: 'Architecten'
      },
      {
        selectable: false,
        title: 'Design'
      },
      {
        selectable: false,
        title: 'Interieurarchitecten'
      },
      {
        selectable: false,
        title: 'Managementadvies, economisch advies'
      },
      {
        selectable: false,
        title: 'Public relationsbureaus'
      },
      {
        selectable: false,
        title: 'Reclame en Marktonderzoek'
      },
      {
        selectable: false,
        title: 'Technisch ontwerp, advies, keuring/research'
      },
      {
        selectable: false,
        title: 'Overige zakelijke dienstverlening'
      },
      {
        selectable: false,
        title: '(Locatie geschat)'
      }
    ],
    maxZoom: 16,
    minZoom: 11,
    title: 'Zakelijke dienstverlening',
    url: '/maps/handelsregister?version=1.3.0&service=WMS'
  },
  {
    authScope: 'HR/R',
    category: 'Economie en haven',
    id: 'ovrg',
    layers: ['overige'],
    legendItems: [
      {
        selectable: false,
        title: 'Belangenorganisaties'
      },
      {
        selectable: false,
        title: 'Hobbyclubs'
      },
      {
        selectable: false,
        title: 'Ideële organisaties'
      },
      {
        selectable: false,
        title: 'Overige'
      },
      {
        selectable: false,
        title: '(Locatie geschat)'
      }
    ],
    maxZoom: 16,
    minZoom: 11,
    title: 'Overige',
    url: '/maps/handelsregister?version=1.3.0&service=WMS'
  },
  {
    category: 'Geografie: onroerende zaken',
    legendItems: [
      {
        id: 'bgem',
        layer: 'burgerlijke_gemeente',
        selectable: true,
        title: 'Burgerlijke gemeente'
      },
      {
        id: 'kgem',
        layer: 'kadastrale_gemeente',
        selectable: true,
        title: 'Kadastrale gemeente'
      },
      {
        id: 'ksec',
        layer: 'kadastrale_sectie',
        selectable: true,
        title: 'Kadastrale sectie'
      },
      {
        id: 'kot',
        layer: 'kadastraal_object',
        selectable: true,
        title: 'Kadastraal object'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Kadastrale perceelsgrenzen',
    url: '/maps/brk?version=1.3.0&service=WMS'
  },
  {
    category: 'Geografie: onroerende zaken',
    id: 'gbep',
    layers: ['wkpb'],
    legendItems: [
      {
        selectable: false,
        title: 'Sluiting v. woning etc.'
      },
      {
        selectable: false,
        title: 'Exploitatieplan'
      },
      {
        selectable: false,
        title: 'Woningwet'
      },
      {
        selectable: false,
        title: 'Wet bodembescherming'
      },
      {
        selectable: false,
        title: 'WABO bestuursdwang / dwangsom'
      },
      {
        selectable: false,
        title: 'Vordering tot woonruimte'
      },
      {
        selectable: false,
        title: 'Gemeentelijk monument'
      },
      {
        selectable: false,
        title: 'Sluiting obv opiumwet'
      },
      {
        selectable: false,
        title: '(voorlopige) aanwijzing WVG'
      }
    ],
    maxZoom: 16,
    minZoom: 13,
    title: 'Gemeentelijke beperkingen (WKPB)',
    url: '/maps/wkpb?version=1.3.0&service=WMS'
  },
  {
    category: 'Geografie: gebieden',
    id: 'bsg',
    legendItems: [
      {
        id: 'sd',
        layer: 'stadsdeel',
        selectable: true,
        title: 'Stadsdeel'
      },
      {
        id: 'ggw',
        layer: 'gebiedsgerichtwerken',
        selectable: true,
        title: 'Gebiedsgerichtwerken'
      },
      {
        id: 'bc',
        layer: 'buurtcombinatie',
        selectable: true,
        title: 'Wijk'
      },
      {
        id: 'buurt',
        layer: 'buurt',
        selectable: true,
        title: 'Buurt'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Bestuurlijke gebieden',
    url: '/maps/gebieden?version=1.3.0&service=WMS'
  },
  {
    category: 'Geografie: gebieden',
    id: 'bbn',
    layers: ['bouwblok'],
    legendItems: [
      {
        selectable: false,
        title: 'Bouwblok'
      }
    ],
    maxZoom: 16,
    minZoom: 12,
    title: 'Bouwblokken',
    url: '/maps/gebieden?version=1.3.0&service=WMS'
  },
  {
    category: 'Geografie: gebieden',
    id: 'gsg',
    layers: ['grootstedelijkgebied'],
    legendItems: [
      {
        selectable: false,
        title: 'Grootstedelijk'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Grootstedelijke gebieden',
    url: '/maps/gebieden?version=1.3.0&service=WMS'
  },
  {
    category: 'Geografie: gebieden',
    id: 'unesco',
    layers: ['unesco'],
    legendItems: [
      {
        selectable: false,
        title: 'Kernzone'
      },
      {
        selectable: false,
        title: 'Bufferzone'
      }
    ],
    maxZoom: 16,
    minZoom: 10,
    title: 'Unesco werelderfgoedzones',
    url: '/maps/gebieden?version=1.3.0&service=WMS'
  },
  {
    category: 'Geografie: hoogte',
    id: 'dsm',
    layers: ['ahn3_05m_dtm'],
    legendItems: [
      {
        iconUrl: 'assets/images/map-legend/icon-ahn-minus-10.svg',
        selectable: false,
        title: '-10 m tot -5 m'
      },
      {
        iconUrl: 'assets/images/map-legend/icon-ahn-minus-5.svg',
        selectable: false,
        title: '-5 m tot -2 m'
      },
      {
        iconUrl: 'assets/images/map-legend/icon-ahn-minus-2.svg',
        selectable: false,
        title: '-2 m tot -1 m'
      },
      {
        iconUrl: 'assets/images/map-legend/icon-ahn-minus-1.svg',
        selectable: false,
        title: '-1 m tot 0 m'
      },
      {
        iconUrl: 'assets/images/map-legend/icon-ahn-plus-0.svg',
        selectable: false,
        title: '0 m tot 1 m'
      },
      {
        iconUrl: 'assets/images/map-legend/icon-ahn-plus-1.svg',
        selectable: false,
        title: '1 m tot 2 m'
      },
      {
        iconUrl: 'assets/images/map-legend/icon-ahn-plus-2.svg',
        selectable: false,
        title: '2 m tot 5 m'
      },
      {
        iconUrl: 'assets/images/map-legend/icon-ahn-plus-5.svg',
        selectable: false,
        title: '5 m tot 10 m'
      },
      {
        iconUrl: 'assets/images/map-legend/icon-ahn-plus-10.svg',
        selectable: false,
        title: '10 m tot 20 m'
      },
      {
        iconUrl: 'assets/images/map-legend/icon-ahn-plus-20.svg',
        selectable: false,
        title: '20 m tot 30 m'
      },
      {
        iconUrl: 'assets/images/map-legend/icon-ahn-plus-30.svg',
        selectable: false,
        title: 'hoger dan 30 m'
      }
    ],
    maxZoom: 16,
    minZoom: 10,
    title: 'Terreinmodel (DTM AHN)',
    url: 'https://geodata.nationaalgeoregister.nl/ahn3/ows?version=1.3.0&service=WMS'
  },
  {
    category: 'Geografie: hoogte',
    id: 'dtm',
    layers: ['ahn3_05m_dsm'],
    legendItems: [
      {
        iconUrl: 'assets/images/map-legend/icon-ahn-minus-10.svg',
        selectable: false,
        title: '-10 m tot -5 m'
      },
      {
        iconUrl: 'assets/images/map-legend/icon-ahn-minus-5.svg',
        selectable: false,
        title: '-5 m tot -2 m'
      },
      {
        iconUrl: 'assets/images/map-legend/icon-ahn-minus-2.svg',
        selectable: false,
        title: '-2 m tot -1 m'
      },
      {
        iconUrl: 'assets/images/map-legend/icon-ahn-minus-1.svg',
        selectable: false,
        title: '-1 m tot 0 m'
      },
      {
        iconUrl: 'assets/images/map-legend/icon-ahn-plus-0.svg',
        selectable: false,
        title: '0 m tot 1 m'
      },
      {
        iconUrl: 'assets/images/map-legend/icon-ahn-plus-1.svg',
        selectable: false,
        title: '1 m tot 2 m'
      },
      {
        iconUrl: 'assets/images/map-legend/icon-ahn-plus-2.svg',
        selectable: false,
        title: '2 m tot 5 m'
      },
      {
        iconUrl: 'assets/images/map-legend/icon-ahn-plus-5.svg',
        selectable: false,
        title: '5 m tot 10 m'
      },
      {
        iconUrl: 'assets/images/map-legend/icon-ahn-plus-10.svg',
        selectable: false,
        title: '10 m tot 20 m'
      },
      {
        iconUrl: 'assets/images/map-legend/icon-ahn-plus-20.svg',
        selectable: false,
        title: '20 m tot 30 m'
      },
      {
        iconUrl: 'assets/images/map-legend/icon-ahn-plus-30.svg',
        selectable: false,
        title: 'hoger dan 30 m'
      }
    ],
    maxZoom: 16,
    minZoom: 10,
    title: 'Oppervlaktemodel (DSM AHN)',
    url: '/maps/gebieden?version=1.3.0&service=WMS'
  },
  {
    category: 'Geografie: hoogte',
    id: 'nap',
    layers: ['peilmerk_hoogte'],
    legendItems: [
      {
        selectable: false,
        title: 'lager dan -1,5 m'
      },
      {
        selectable: false,
        title: '-1,5 m tot -0,5 m'
      },
      {
        selectable: false,
        title: '-0,5 m tot 0 m'
      },
      {
        selectable: false,
        title: '0 m tot 1 m'
      },
      {
        selectable: false,
        title: '1 m tot 1,5 m'
      },
      {
        selectable: false,
        title: '1,5 m tot 2 m'
      },
      {
        selectable: false,
        title: '2 m tot 3,5 m'
      },
      {
        selectable: false,
        title: 'hoger dan 3,5 m'
      }
    ],
    maxZoom: 16,
    minZoom: 10,
    title: 'Normaal Amsterdams Peil (NAP)',
    url: '/maps/nap?version=1.3.0&service=WMS'
  },
  {
    category: 'Geografie: hoogte',
    id: 'mbs',
    layers: ['meetbouten_status'],
    legendItems: [
      {
        selectable: false,
        title: 'Actueel'
      },
      {
        selectable: false,
        title: 'Vervallen'
      }
    ],
    maxZoom: 16,
    minZoom: 12,
    title: 'Meetbouten - Status',
    url: '/maps/meetbouten?version=1.3.0&service=WMS'
  },
  {
    category: 'Geografie: hoogte',
    id: 'mbz',
    layers: ['meetbouten_zaksnelheid'],
    legendItems: [
      {
        selectable: false,
        title: 'minder dan -1 mm/jaar'
      },
      {
        selectable: false,
        title: '-1 tot 0 mm/jaar'
      },
      {
        selectable: false,
        title: '0 tot 1 mm/jaar'
      },
      {
        selectable: false,
        title: '1 tot 1,5 mm/jaar'
      },
      {
        selectable: false,
        title: '1,5 tot 2 mm/jaar'
      },
      {
        selectable: false,
        title: '2 tot 2,5 mm/jaar'
      },
      {
        selectable: false,
        title: '2,5 tot 3 mm/jaar'
      },
      {
        selectable: false,
        title: '3 tot 4 mm/jaar'
      },
      {
        selectable: false,
        title: 'meer dan 4 mm/jaar'
      }
    ],
    maxZoom: 16,
    minZoom: 12,
    title: 'Meetbouten - Zaksnelheid',
    url: '/maps/meetbouten?version=1.3.0&service=WMS'
  },
  {
    category: 'Geografie: hoogte',
    id: 'mbr',
    layers: ['referentiepunt'],
    legendItems: [
      {
        selectable: false,
        title: 'Referentiepunt'
      }
    ],
    maxZoom: 16,
    minZoom: 12,
    title: 'Meetbouten - Referentiepunten',
    url: '/maps/meetbouten?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: bodem',
    id: 'mbgm',
    layers: ['grondmonsters'],
    legendItems: [
      {
        selectable: false,
        title: 'Niet verontreinigd'
      },
      {
        selectable: false,
        title: 'Licht verontreinigd'
      },
      {
        selectable: false,
        title: 'Matig verontreinigd'
      },
      {
        selectable: false,
        title: 'Sterk verontreinigd'
      }
    ],
    maxZoom: 16,
    minZoom: 11,
    title: 'Grondmonsters',
    url: '/maps/bodem?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: bodem',
    id: 'mbaig',
    layers: ['asbest'],
    legendItems: [
      {
        selectable: false,
        title: '-10 - 0 mg/kg'
      },
      {
        selectable: false,
        title: '0,1 - 10 mg/kg'
      },
      {
        selectable: false,
        title: '10,1 - 100 mg/kg'
      },
      {
        selectable: false,
        title: '> 100,1 mg/kg'
      }
    ],
    maxZoom: 16,
    minZoom: 11,
    title: 'Grondmonsters asbest',
    url: '/maps/bodem?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: bodem',
    id: 'mbgwm',
    layers: ['grondwatermonsters'],
    legendItems: [
      {
        selectable: false,
        title: 'Niet verontreinigd'
      },
      {
        selectable: false,
        title: 'Licht verontreinigd'
      },
      {
        selectable: false,
        title: 'Matig verontreinigd'
      },
      {
        selectable: false,
        title: 'Sterk verontreinigd'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Grondwatermonsters',
    url: '/maps/bodem?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: bodem',
    id: 'exin',
    layers: ['inslagen'],
    legendItems: [
      {
        selectable: false,
        title: 'blindganger'
      },
      {
        selectable: false,
        title: 'bominslag'
      },
      {
        selectable: false,
        title: 'crashlocatie'
      },
      {
        selectable: false,
        title: 'gedetoneerde vernielingslading'
      },
      {
        selectable: false,
        title: 'geruimd explosief'
      },
      {
        selectable: false,
        title: 'krater'
      },
      {
        selectable: false,
        title: 'niet gedetoneerde vernielingslading'
      },
      {
        selectable: false,
        title: 'vermoedelijke bominslag(en)'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Explosieven - Inslagen',
    url: '/maps/bommenkaart?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: bodem',
    id: 'exvg',
    layers: ['verdachte_gebieden'],
    legendItems: [
      {
        selectable: false,
        title: 'Munities en granaten'
      },
      {
        selectable: false,
        title: 'Landmijnen'
      },
      {
        selectable: false,
        title: 'Vernielingsladingen'
      },
      {
        selectable: false,
        title: 'Afwerpmunitie'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Explosieven - Verdachte gebieden',
    url: '/maps/bommenkaart?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: bodem',
    id: 'exgg',
    layers: ['gevrijwaarde_gebieden'],
    legendItems: [
      {
        selectable: false,
        title: 'gevrijwaarde gebieden'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Explosieven - Gevrijwaarde gebieden',
    url: '/maps/bommenkaart?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: bodem',
    id: 'exuo',
    layers: ['uitgevoerde_CE_onderzoeken'],
    legendItems: [
      {
        selectable: false,
        title: 'Detectieonderzoek'
      },
      {
        selectable: false,
        title: 'Projectgebonden risicoanalyse'
      },
      {
        selectable: false,
        title: 'Vooronderzoek'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Explosieven - Uitgevoerde CE-onderzoeken',
    url: '/maps/bommenkaart?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: externe veiligheid',
    id: 'mvlpgv',
    layers: ['milieu_veiligheid_lpg_vulpunt'],
    legendItems: [
      {
        layer: 'lpgvulpuntplaatsgebondenrisico105',
        selectable: false,
        title: 'Plaatsgebonden risico 10-5'
      },
      {
        layer: 'lpgvulpuntplaatsgebondenrisico106',
        selectable: false,
        title: 'Plaatsgebonden risico 10-6'
      },
      {
        layer: 'lpgvulpuntinvloedsgebied',
        selectable: false,
        title: 'Invloedsgebied groepsrisico'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'LPG-vulpunten - Risicozones',
    url: '/maps/externeveiligheid?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: externe veiligheid',
    id: 'mvlpga',
    layers: ['milieu_veiligheid_lpg_afleverzuil'],
    legendItems: [
      {
        layer: 'lpgafleverzuillocaties',
        selectable: false,
        title: 'Locatie LPG-afleverzuil'
      },
      {
        layer: 'lpgafleverzuilplaatsgebondenrisico',
        selectable: false,
        title: 'Plaatsgebonden risico (15 m)'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'LPG-afleverzuilen - Risicozones',
    url: '/maps/externeveiligheid?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: externe veiligheid',
    id: 'mvlpgt',
    layers: ['milieu_veiligheid_lpg_tank'],
    legendItems: [
      {
        layer: 'lpgtankligging',
        selectable: false,
        title: 'Ligging LPG-tank'
      },
      {
        layer: 'lpgtankplaatsgebondenrisico',
        selectable: false,
        title: 'Plaatsgebondenrisico (25/120 m)'
      },
      {
        layer: 'lpgtankinvloedsgebied',
        selectable: false,
        title: 'Invloedsgebied groepsrisico'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'LPG-tanks - Risicozones',
    url: '/maps/externeveiligheid?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: externe veiligheid',
    id: 'mvlpgs',
    layers: ['milieu_veiligheid_lpg_station'],
    legendItems: [
      {
        layer: 'lpgstationslocaties',
        selectable: false,
        title: 'Locatie LPG-station'
      },
      {
        layer: 'lpgstationcontouren',
        selectable: false,
        title: 'Contouren LPG-station'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'LPG-stations - Risicozones',
    url: '/maps/externeveiligheid?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: externe veiligheid',
    id: 'mvbr',
    layers: [
      'overigerisicobedrijfplaatsgebondenrisico106',
      'overigerisicobedrijfsbronnen'
    ],
    legendItems: [
      {
        layer: 'overigerisicobedrijfplaatsgebondenrisico106',
        selectable: false,
        title: 'Plaatsgebonden risico 10-6'
      },
      {
        layer: 'overigerisicobedrijfsbronnen',
        selectable: false,
        title: 'Bron'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Bedrijven - Bronnen en risicozones',
    url: '/maps/externeveiligheid?version=1.3.0&service=WMS'
  },
  {
    authScope: 'HR/R',
    category: 'Milieu: externe veiligheid',
    id: 'mvi',
    layers: ['overigerisicobedrijfinvloedsgebied'],
    legendItems: [
      {
        layer: 'overigerisicobedrijfinvloedsgebied',
        selectable: false,
        title: 'Invloedsgebied'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Bedrijven - Invloedsgebieden',
    url: '/maps/externeveiligheid?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: externe veiligheid',
    id: 'mvbd',
    layers: ['milieu_veiligheid_bedrijf'],
    legendItems: [
      {
        layer: 'overigerisicobedrijfslocaties',
        selectable: false,
        title: 'Bedrijf'
      },
      {
        layer: 'overigerisicobedrijfscontouren',
        selectable: false,
        title: 'Terrein'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Bedrijven - Terreingrenzen',
    url: '/maps/externeveiligheid?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: externe veiligheid',
    id: 'mvabl',
    layers: ['milieu_veiligheid_aardgasbuisleidingen'],
    legendItems: [
      {
        layer: 'milieu_veiligheid_aardgasbuisleidingen',
        selectable: false,
        title: 'Aardgasleiding'
      },
      {
        layer: 'risicozonesaardgaspr106',
        selectable: false,
        title: 'Plaatsgebonden risico 10-6'
      },
      {
        layer: 'risicozonesaardgas100let',
        selectable: false,
        title: '100% Letaliteitsafstand'
      },
      {
        layer: 'risicozonesaardgas1let',
        selectable: false,
        title: '1% Letaliteitsafstand'
      },
      {
        layer: 'risicozonesbelemmeringenstrook',
        selectable: false,
        title: 'Belemmeringenstrook'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Aardgasbuisleidingen - Risicozones',
    url: '/maps/externeveiligheid?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: externe veiligheid',
    id: 'mvsw',
    layers: ['risicozonesspoorweg'],
    legendItems: [
      {
        selectable: false,
        title: 'Invloedsgebied spoorwegen'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Spoorwegen - Risicozones',
    url: '/maps/externeveiligheid?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: externe veiligheid',
    id: 'mvvw',
    layers: ['risicozonesvaarweg'],
    legendItems: [
      {
        selectable: false,
        title: 'Invloedsgebied vaarwegen'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Vaarwegen - Risicozones',
    url: '/maps/externeveiligheid?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: externe veiligheid',
    id: 'mvw',
    layers: ['risicozonesweg'],
    legendItems: [
      {
        selectable: false,
        title: 'Invloedsgebied wegen'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Wegen - Risicozones',
    url: '/maps/externeveiligheid?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: externe veiligheid',
    legendItems: [
      {
        id: 'mvvo',
        layer: 'milieu_veiligheid_vuurwerk',
        selectable: true,
        title: 'Vuurwerkopslag'
      },
      {
        id: 'mvmo',
        layer: 'milieu_veiligheid_munitie',
        selectable: true,
        title: 'Munitieopslag'
      },
      {
        id: 'mvgms',
        layer: 'milieu_veiligheid_gasdrukregel_meetstation',
        selectable: true,
        title: 'Gasdrukregel- en meetstation'
      },
      {
        id: 'mvsls',
        layer: 'milieu_veiligheid_sluis',
        selectable: true,
        title: 'Sluis'
      },
      {
        id: 'mvwp',
        layer: 'milieu_veiligheid_wachtplaats',
        selectable: true,
        title: 'Wachtplaats'
      },
      {
        id: 'mvbs',
        layer: 'milieu_veiligheid_bunkerschepen',
        selectable: true,
        title: 'Bunkerschip'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Veiligheidsafstanden',
    url: '/maps/externeveiligheid?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: zones',
    id: 'mgpind',
    layers: ['milieu_geluid_planologisch_industrie'],
    legendItems: [
      {
        selectable: false,
        title: 'Gezoneerd industrieterrein'
      },
      {
        selectable: false,
        title: 'Geluidzone industrieterrein'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Industrie - Geluidszones',
    url: '/maps/planologischegeluidszones?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: zones',
    id: 'mgsw',
    layers: ['spoorwegen'],
    legendItems: [
      {
        selectable: false,
        title: 'Geluidszone spoorwegen'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Spoorwegen - Geluidszones',
    url: '/maps/planologischegeluidszones?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: zones',
    id: 'mgpm',
    layers: ['metro'],
    legendItems: [
      {
        selectable: false,
        title: 'Geluidszone metro'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Metro - Geluidszones',
    url: '/maps/planologischegeluidszones?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: zones',
    id: 'mgpsh',
    layers: ['geluidszoneschiphol'],
    legendItems: [
      {
        selectable: false,
        title: 'Geluidzone Schiphol (nr. 4 \'beperking gebouwen\')'
      },
      {
        selectable: false,
        title: '20 Ke contour'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Schiphol - Ruimtelijke beperkingen',
    url: '/maps/planologischezonesschiphol?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: zones',
    id: 'mgth',
    layers: ['maatgevendetoetshoogteschiphol'],
    legendItems: [
      {
        selectable: false,
        title: '-10 - 0m NAP'
      },
      {
        selectable: false,
        title: '0 - 20m NAP'
      },
      {
        selectable: false,
        title: '20 - 40m NAP'
      },
      {
        selectable: false,
        title: '40 - 60m NAP'
      },
      {
        selectable: false,
        title: '60 - 80m NAP'
      },
      {
        selectable: false,
        title: '80 - 100m NAP'
      },
      {
        selectable: false,
        title: '100 - 140m NAP'
      },
      {
        selectable: false,
        title: '140m NAP'
      },
      {
        selectable: false,
        title: 'Hoger dan 140m NAP'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Schiphol - Maatgevende toetshoogte',
    url: '/maps/planologischezonesschiphol?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: zones',
    id: 'mthr',
    layers: ['toetshoogteradarschiphol'],
    legendItems: [
      {
        selectable: false,
        title: '-10 - 0m NAP'
      },
      {
        selectable: false,
        title: '0 - 20m NAP'
      },
      {
        selectable: false,
        title: '20 - 40m NAP'
      },
      {
        selectable: false,
        title: '40 - 60m NAP'
      },
      {
        selectable: false,
        title: '60 - 80m NAP'
      },
      {
        selectable: false,
        title: '80 - 100m NAP'
      },
      {
        selectable: false,
        title: '100 - 140m NAP'
      },
      {
        selectable: false,
        title: '140m NAP'
      },
      {
        selectable: false,
        title: 'Hoger dan 140m NAP'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Schiphol - Toetshoogte i.v.m. radar',
    url: '/maps/planologischezonesschiphol?version=1.3.0&service=WMS'
  },
  {
    category: 'Milieu: zones',
    id: 'mgvvgsh',
    layers: ['vogelvrijwaringsgebiedschiphol'],
    legendItems: [
      {
        selectable: false,
        title: 'Vogelvrijwaringsgebied'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Schiphol - Vogelvrijwaringsgebied',
    url: '/maps/planologischezonesschiphol?version=1.3.0&service=WMS'
  },
  {
    category: 'Openbare orde en veiligheid',
    legendItems: [
      {
        id: 'oovoalg',
        layer: 'algemeen_overlastgebied',
        selectable: true,
        title: 'Algemeen overlastgebied'
      },
      {
        id: 'oovodlrs',
        layer: 'dealeroverlastgebied',
        selectable: true,
        title: 'Dealeroverlastgebied'
      },
      {
        id: 'oovouitg',
        layer: 'uitgaansoverlastgebied',
        selectable: true,
        title: 'Uitgaansoverlastgebied'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Overlastgebieden',
    url: '/maps/overlastgebieden?version=1.3.0&service=WMS'
  },
  {
    category: 'Openbare orde en veiligheid',
    id: 'oovctg',
    layers: ['cameratoezichtgebied'],
    legendItems: [
      {
        selectable: false,
        title: 'Cameratoezichtgebied'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Cameratoezichtgebieden',
    url: '/maps/overlastgebieden?version=1.3.0&service=WMS'
  },
  {
    category: 'Verkeer en infrastructuur',
    id: 'pv',
    layers: ['alle_parkeervakken'],
    legendItems: [
      {
        selectable: false,
        title: 'FISCAAL'
      },
      {
        selectable: false,
        title: 'Parkeervak'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Parkeervakken - Fiscale indeling',
    url: '/maps/parkeervakken?version=1.3.0&service=WMS'
  },
  {
    category: 'Verkeer en infrastructuur',
    id: 'pvb',
    layers: ['parkeervakken_bord'],
    legendItems: [
      {
        selectable: false,
        title: 'Bord'
      }
    ],
    maxZoom: 16,
    minZoom: 8,
    title: 'Parkeervakken - Speciale bestemmingen',
    url: '/maps/parkeervakken?version=1.3.0&service=WMS'
  },
  {
    category: 'Verkeer en infrastructuur',
    id: 'pvr',
    layers: ['parkeervakken_reservering'],
    legendItems: [
      {
        selectable: false,
        title: 'FISCAAL'
      },
      {
        selectable: false,
        title: 'Parkeerverbod'
      },
      {
        selectable: false,
        title: 'Verbod stil te staan'
      },
      {
        selectable: false,
        title: 'Verbod (brom)fietsen plaatsen'
      },
      {
        selectable: false,
        title: 'Parkeergelegenheid'
      },
      {
        selectable: false,
        title: 'Taxistandplaats'
      },
      {
        selectable: false,
        title: 'Gehandicaptenplaats'
      },
      {
        selectable: false,
        title: 'Gehandicaptenplaats algemeen'
      },
      {
        selectable: false,
        title: 'Gehandicaptenplaats kenteken'
      },
      {
        selectable: false,
        title: 'Laden lossen'
      },
      {
        selectable: false,
        title: 'Specifieke voertuigcategorie'
      },
      {
        selectable: false,
        title: 'Vergunninghouders'
      },
      {
        selectable: false,
        title: 'Blauwe zone'
      },
      {
        selectable: false,
        title: 'Einde blauwe zone'
      },
      {
        selectable: false,
        title: 'Park & Ride'
      },
      {
        selectable: false,
        title: 'Carpool'
      },
      {
        selectable: false,
        title: 'MULDER'
      }
    ],
    maxZoom: 16,
    minZoom: 11,
    title: 'Parkeervakken - Gereserveerd',
    url: '/maps/parkeervakken?version=1.3.0&service=WMS'
  },
  {
    category: 'Toerisme en cultuur',
    id: 'tcmnmt',
    layers: ['monument_coordinaten'],
    legendItems: [
      {
        selectable: false,
        title: 'Monument'
      }
    ],
    maxZoom: 16,
    minZoom: 12,
    title: 'Monumenten',
    url: '/maps/monumenten?version=1.3.0&service=WMS'
  }
];
