'use strict';

var data = {
  pets: [
    {
      name: 'Dona',
      animal: 'dog',
      breed: 'Bokserek',
      age: '4 lata',
      gender: 'Suczka',
      image_url: 'img/pets/dona.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1101434396637650',
	  omnie: 'dona.html',
      tags: ['pies', 'bokser', 'bokserek', 'doros�y', '4', 'dominuj�ca', '�redni', 'karmelowy', 'br�zowy', 'energiczna', '�agodna', '�agodny', 'suczka', 'karmelowa', 'dona']
    },
    {
      name: 'Ziutek',
      animal: 'dog',
      breed: 'w typie jamnika',
      age: '2 lata',
      gender: 'Samiec',
      image_url: 'img/pets/ziutek.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=913111915469900',
      tags: ['pies', 'przyjacielski', 'kr�tkow�osy', 'doros�y', 'samiec', 'ma�y', 'biszkoptowy', 'be�owy', 'radosny', 'zabawa', 'kontaktowy', 'ziutek']
    },
    {
      name: 'Migotka',
      animal: 'dog',
      breed: 'Micro Colie',
      age: 'seniorka',
      gender: 'Suczka',
      image_url: 'img/pets/migotka.jpg',
	  facebook: 'https://web.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1281932115254543',
      tags: ['pies', 'przyjacielski', 'doros�y', 'suczka', 'ma�y', 'ciemny', 'radosny', 'dzieci', 'kontaktowy', 'micro colie', 'kundelek', 'migotka']
    },
    {
      name: 'Piku�',
      animal: 'dog',
      breed: 'Kundelek',
      age: '4 lata',
      gender: 'Samiec',
      image_url: 'img/pets/pikus.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=490333897747706',
      tags: ['pies', 'przyjacielski', 'doros�y', 'samiec', 'ma�y', 'jasny', 'biszkoptowy', 'be�owy', 'przyjacielski', '�agodny', 'radosny', 'dzieci', 'kontaktowy', 'kundelek', 'piku�']
    },
    {
      name: 'Kumpel',
      animal: 'dog',
      breed: 'W typie Sznaucerka',
      age: 'M�ody',
      gender: 'Samiec',
      image_url: 'img/pets/kumpel.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1188833781231044',
      tags: ['pies', 'przyjacielski', 'm�ody', 'samiec', 'ma�y', 'mix', 'przyjacielski', '�agodny', 'radosny', 'dzieci', 'kontaktowy', 'kundelek', 'do innych ps�w', 'kumpel']
    },
   
	{
      name: 'Gucio',
      animal: 'dog',
      breed: 'Wilczur',
      age: '8 lat',
      gender: 'Samiec',
      image_url: 'img/pets/gucio.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=367124443401986',
      tags: ['pies', 'towarzyski', 'doros�y', 'samiec', 'du�y', 'pos�uszny', 'do suczki', 'do domu z ogrodem', 'ogr�d', 'pieszczoch', 'spacery', 'gucio']
    },
	{
      name: 'Pelikan',
      animal: 'dog',
      breed: 'Kundelek',
      age: 'Starszy, ok.9 lat',
      gender: 'Samiec',
      image_url: 'img/pets/pelikan.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=408191629295267',
      tags: ['pies', 'przyjacielski', 'starszy', 'samiec', '�redni', 'kundelek', '�agodny', 'radosny', 'weso�y', 'pelikan']
    },
	{
      name: 'Dyzio',
      animal: 'dog',
      breed: 'Kundelek',
      age: 'Starszy, ok.10 lat',
      gender: 'Samiec',
      image_url: 'img/pets/dyzio.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=907841812663577',
      tags: ['pies', 'przyjacielski', 'starszy', 'samiec', '�redni', 'kundelek', 'pozytywny', 'radosny', 'weso�y', 'zadbany', 'ciep�olubny', 'dyzio']
    },	
	{
      name: 'Kazan',
      animal: 'dog',
      breed: 'Amstaff',
      age: 'powy�ej 6 lat',
      gender: 'Samiec',
      image_url: 'img/pets/kazan.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=929773047137120',
      tags: ['pies', 'samiec', '�redni', 'amstaff', 'spokojny pies', 'kochany', 'starszy', 'kazan']
    },
	{
      name: 'Rodnej',
      animal: 'dog',
      breed: 'w typie Bernardyna',
      age: '9 lat',
      gender: 'Samiec',
      image_url: 'img/pets/rodnej.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=842594389188320',
      tags: ['pies', 'samiec', 'du�y', 'weso�y', 'energiczny', 'kochany', 'starszy', 'str�', 'spacery', 'bernardyn', 'rodnej']
    },
	{
      name: 'Ada�',
      animal: 'dog',
      breed: '',
      age: '6 lat',
      gender: 'Samiec',
      image_url: 'img/pets/adas.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=324569007657530',
      tags: ['pies', 'samiec', 'du�y', 'weso�y', 'energiczny', 'kochany', 'sport', 'br�zowy', 'spacery', 'aktywny', 'doberman', 'go�czy', 'ada�']
    },
		{
      name: 'Heks',
      animal: 'dog',
      breed: 'Kundelek',
      age: 'Starszy',
      gender: 'Samiec',
      image_url: 'img/pets/heks.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=912365968877828',
      tags: ['pies', 'samiec', 'du�y', 'weso�y', 'rezerwa', 'czas', 'br�zowy', 'spacery', 'owczarek', 'heks', 'reks']
    },
	{
      name: 'Lusia',
      animal: 'dog',
      breed: 'Kundelek',
      age: '5 lat',
      gender: 'Suczka',
      image_url: 'img/pets/lusia.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=555879417859820',
      tags: ['pies', 'suczka', 'sunia', 'pieszczoch', '�obuziak', 'czas', 'br�zowy', 'szylkret', 'spacery', 'lusia']
    },
	{
      name: 'Tadek',
      animal: 'dog',
      breed: 'Owczarko-jamnik',
      age: '6-8 lat',
      gender: 'Samiec',
      image_url: 'img/pets/tadzik.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1010297465751344',
      tags: ['pies', 'samiec', 'jamnik', 'owczarek', 'kontaktowy', 'towarzyski', 'broni domu', 'toleruje sunie', 'br�zowy', 'czarny', 'tadek', 'tadzik']
    },
	{
      name: 'Sanczo',
      animal: 'dog',
      breed: 'Kundelek',
      age: '2 lata',
      gender: 'Samiec',
      image_url: 'img/pets/sanczo.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1019194824861608',
      tags: ['pies', 'samiec', 'ma�y', 'kundelek', 'kontaktowy', 'towarzyski', '�ywio�owy', 's�odki', 'bia�y', 'czarny', 'sanczo']
    },
	{
      name: 'Sajan',
      animal: 'dog',
      breed: 'Owczarek �rodkowoazj.',
      age: '5 lat',
      gender: 'Samiec',
      image_url: 'img/pets/sajan.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1099319286849161',
      tags: ['pies', 'samiec', 'du�y', 'owczarek', 'str�uj�cy', 'obronny', 'boski', 'be�owy', 'bia�y', 'biszkoptowy', 'uroczy','sajan']
    },
	{
      name: 'Iskierka',
      animal: 'dog',
      breed: 'Kundelek',
      age: 'ok. 7 lat',
      gender: 'Suczka',
      image_url: 'img/pets/iskierka.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1195937267187362',
      tags: ['pies', 'suczka', 'ma�a', 'drobniutka', 'kud�ata', 'czarna', 'urocza', 'przekochana', 'kochana', 'przylepa', 'akceptuje psy', 'dzieci', '�agodna', 'spokojna', 'nie niszczy', 'sama w domu', 'iskierka']
    },
	{
      name: 'Wito',
      animal: 'dog',
      breed: 'Kundelek',
      age: 'ok. 1.5 roku',
      gender: 'Samiec',
      image_url: 'img/pets/wito.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1114316855349404',
      tags: ['pies', 'samiec', 'ma�y', 'obserwuj�cy', 'aktywny', 'czarny', 'spacery', 'wito']
    },
	{
      name: 'Lajla',
      animal: 'dog',
      breed: 'W typie Owczarka',
      age: '7 lat',
      gender: 'Suczka',
      image_url: 'img/pets/lajla.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1211621605618928',
      tags: ['pies', 'suczka', 'owczarek', '�redni', 'kontaktowa', 'towarzyska', 'spacery', 'do kolana', 'lajla']
    },
    
	{
      name: 'Vixi',
      animal: 'dog',
      breed: 'Kundelek',
      age: '6 lat',
      gender: 'Suczka',
      image_url: 'img/pets/vixi.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1222743011173454',
      tags: ['pies', 'suczka', 'popielata', 'be�owa', '�rednia', '�agodna', 'wra�liwa', 'drugi pies', 'delikatna', 'vixi']
    },
	{
      name: 'Ekler',
      animal: 'dog',
      breed: 'Kundelek',
      age: '3 lata',
      gender: 'Samiec',
      image_url: 'img/pets/ekler.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1261141054000316',
      tags: ['pies', 'samiec', 'kud�aty', 'kontaktowy', 'pewny siebie', 'auto', 'dzieci', 'br�zowy', 'delikatna', 'ekler']
	
    },
	{
      name: 'Champion',
      animal: 'dog',
      breed: 'Kundelek',
      age: 'Starszy',
      gender: 'Samiec',
      image_url: 'img/pets/champion.jpg',
	  facebook: 'https://www.facebook.com/events/1202771879818924',
      tags: ['pies', 'samiec', 'kr�tkow�osy', 'champion', 'biszkoptowy', 'fajny', 'ma�y']
	
    },
	{
      name: 'Poker',
      animal: 'dog',
      breed: 'Kundelek',
      age: 'Starszy',
      gender: 'Samiec',
      image_url: 'img/pets/poker.jpg',
	  facebook: 'https://www.facebook.com/events/1202771879818924',
      tags: ['pies', 'samiec', 'kr�tkow�osy', 'poker', 'biszkoptowy', 'fajny', 'ma�y', 'kontaktowy', 'akceptuje psy', 'pozytywny', 'przytulas']
	
    },
	{
      name: 'Limba',
      animal: 'dog',
      breed: 'W typie labradora',
      age: 'ok.9 lat',
      gender: 'Suczka',
      image_url: 'img/pets/limba.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=933327073448384',
      tags: ['pies', 'suczka', 'kr�tkow�osa', 'limba', 'biszkoptowy', 'biszkoptowa', 'fajna', 'fajny', '�rednia', 'kontaktowa', 'akceptuje psy', 'pozytywna', '�agodna', 'm�dra', 'psina' ]
	
    },
	{
      name: 'Gryz',
      animal: 'dog',
      breed: 'Kundelek',
      age: 'Doros�y',
      gender: 'Samiec',
      image_url: 'img/pets/gryz.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1239311296183292',
      tags: ['pies', 'samiec', 'kr�tkow�osy', 'gryz', 'czarny', 'ogr�d', 'ogrodu', 'fajny', 'ma�y', 'z charakterem', 'str�', 'kumpel', 'm�dry'  ]
	
    },
	{
      name: 'Blinder',
      animal: 'cat',
      breed: 'Europejski',
      age: 'doros�y',
      gender: 'Kocurek',
      image_url: 'img/pets/blinder.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1242351925879229',
      tags: ['kot', 'kocur', 'bia�y', 'bury', 'doros�y', 'blinder']
	
    },
	{
      name: 'Pepsi',
      animal: 'cat',
      breed: 'Europejski',
      age: 'ok.7 m-cy',
      gender: 'Kotka',
      image_url: 'img/pets/pepsi.jpg',
	  facebook: '#',
      tags: ['kot', 'kotka', 'kociak', 'bury', 'kicia', 'spokojna', 'zabawa', 'bawi�', 'akceptuje koty', 'm�ody', 'pepsi']
	
    },
	{
      name: 'Panda',
      animal: 'cat',
      breed: 'Europejski',
      age: '3 lata',
      gender: 'Kotka',
      image_url: 'img/pets/panda.jpg',
	  facebook: 'https://www.facebook.com/pg/DogRescueKoty/photos/?tab=album&album_id=602788866598749',
      tags: ['kot', 'kotka', 'szylkret', 'szylkretka', 'spokojna', 'akceptuje koty', 'm�oda', 'panda']
	
    }
	
	
  ]
}
