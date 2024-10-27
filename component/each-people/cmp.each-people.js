// © 2024 DJS 
 
 
 
 
 
class ComponentEachPeople { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		//this.args = objData.args ? objData.args : {}; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'objData: ', objData ); 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
 
		let html = ''; 

		if ( objData ) {
			if ( objData.uid ) {
				if ( objListPeople[ objData.uid ] ) {

					let user = objListPeople[ objData.uid ];



					//console.log( 'user: ', user ); 

					let name = '';
					if ( user.name ) {
						if ( user.name.n ) 
							name += user.name.n;
						
						if ( user.name.s ) 
							name += ' ' + user.name.s;
					}

					//html += `${ name } `;




					tagParam[ 'data-id' ] = user.id;
					//tagParam[ 'data-id' ] = user.id;

					let htmlBody = '';
					if ( objData.pm ) 
						htmlBody = this.getPeopleHTML( user.id );



					html += `
						${ Component( 'Title-Spoyler', { title: name, foo: `${ this.name }.clcSpoyler( '${ user.id }' )`, } ) }
						<div class="body">${ htmlBody }</div>
					`;
				}
			}
		}

 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clcSpoyler( uid ) { // data - uid
		const fooName = this.name + '.clcSpoyler()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'uid: ', uid ); 


		let elemParent = document.querySelector( `cmp-each-people[ data-id='${ uid }']` );

		let elemBody = elemParent.querySelector( '.body' );


		//console.log( 'elemParent: ', elemParent ); 
		//console.log( 'elemBody: ', elemBody ); 


		if ( !elemBody.innerHTML ) 
			elemBody.innerHTML = this.getPeopleHTML( uid );

		else 
			elemBody.classList.toggle( 'unvisible' );
	} 
 
 
 
 
 
	static getPeopleHTML( data ) { 
		const fooName = this.name + '.getPeople()'; 
 		


 		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data:', data ); 

		let html = '';

		let user = {};
		if ( objListPeople[ data ] ) {
			user = objListPeople[ data ];

			//console.log( 'user:', user ); 

			let htmlName = '';
			let userName = '';
			if ( user.name ) {

				if ( user.name.n ) 
					userName += user.name.n;

				if ( user.name.p ) 
					userName += ' ' + user.name.p;

				if ( user.name.s ) 
					userName += ' ' + user.name.s;

				htmlName = `<div class="title-name">${ userName }</div>`;
			}




	// life: { bd: 29, bm: 7, by: 1817, dd: 2, dm: 5, dy: 1900, },


			let htmlLifeData = '';
			let htmlRibbon = '';

			if ( user.life ) {

				let htmlDataBirth = '';


				if ( user.life.bd ) 
					htmlDataBirth += user.life.bd;

				if ( user.life.bm ) 
					htmlDataBirth += '.' +user.life.bm;

				if ( user.life.by ) 
					htmlDataBirth += '.' +user.life.by;



				let htmlDataDead = '';

				if ( user.life.dd ) 
					htmlDataDead += user.life.dd;

				if ( user.life.dm ) 
					htmlDataDead += '.' + user.life.dm;

				if ( user.life.dy ) 
					htmlDataDead += '.' + user.life.dy;

				if ( htmlDataDead )
					htmlDataDead = ' - ' + htmlDataDead;


				htmlLifeData += htmlDataBirth + htmlDataDead;


				if ( htmlDataDead )
					htmlRibbon = `<img src="https://pillypenkosa.github.io/media/img/pic/ribbon.png" class="ribbon" alt="ribbon">`;
			}



			let arrFilmsAsActor = [];
			let arrFilmsAsDirector = [];
			let arrFilmsAsComposer = [];



			arrFilms.forEach( k => {

				if ( k.cast ) {
					if ( k.cast[ user.id ] ) {
						arrFilmsAsActor.push( k );
						//arrFilmsAsActorIDs.push( k.id );
					}
				}

				if ( k.director ) {
					if ( k.director[ user.id ] ) {
						arrFilmsAsDirector.push( k );
						//arrFilmsAsDirectorIDs.push( k.id );
					}
				}

				if ( k.composer ) {
					if ( k.composer[ user.id ] ) {
						arrFilmsAsComposer.push( k );
						//arrFilmsAsComposerIDs.push( k.id );
					}
				}

			});





			// функція сортування об'єктів по року
			function up( a, b ) { return ( a.year > b.year ) ? 1 : -1; }

			arrFilmsAsActor.sort( up );
			arrFilmsAsDirector.sort( up );
			arrFilmsAsComposer.sort( up );



			let arrFilmsAsActorIDs = [];
			let arrFilmsAsDirectorIDs = [];
			let arrFilmsAsComposerIDs = [];

			arrFilmsAsActor.forEach( k => {
				arrFilmsAsActorIDs.push( k.id );
			});

			arrFilmsAsDirector.forEach( k => {
				arrFilmsAsDirectorIDs.push( k.id );
			});

			arrFilmsAsComposer.forEach( k => {
				arrFilmsAsComposerIDs.push( k.id );
			});





			//console.log( 'arrFilmsAsActor: ', arrFilmsAsActor );
			//console.log( 'arrFilmsAsDirector: ', arrFilmsAsDirector );
			//console.log( 'arrFilmsAsComposer: ', arrFilmsAsComposer );
			//console.log( 'arrFilmsAsActorIDs: ', arrFilmsAsActorIDs );
			//console.log( 'arrFilmsAsDirectorIDs: ', arrFilmsAsDirectorIDs );
			//console.log( 'arrFilmsAsComposerIDs: ', arrFilmsAsComposerIDs );



			let htmlPosters = '';


			//let htmlActorPosters = '';
			if ( arrFilmsAsActor.length ) {
				arrFilmsAsActor.sort( up );

				htmlPosters += `<div class="txt">як актор:</div>
					<div class="posters-list">
						${ Component( 'Posters-List', { arrFilms: arrFilmsAsActorIDs, } ) }
					</div>
				`;

				//console.log( 'htmlActorPosters: ', htmlActorPosters );

			}



			if ( arrFilmsAsDirector.length ) {
				arrFilmsAsDirector.sort( up );

				htmlPosters += `<div class="txt">як режисер:</div>
					<div class="posters-list">
						${ Component( 'Posters-List', { arrFilms: arrFilmsAsDirectorIDs, } ) }
					</div>
				`;
			}



			if ( arrFilmsAsComposer.length ) {
				arrFilmsAsComposer.sort( up );

				htmlPosters += `<div class="txt">як композитор:</div>
					<div class="posters-list">
						${ Component( 'Posters-List', { arrFilms: arrFilmsAsComposerIDs, } ) }
					</div>
				`;
			}
















			if ( htmlPosters )
				htmlPosters = `<div class="section3">${ htmlPosters }</div>`;




			let htmlInternet = '';

			//let htmlIMDB = '';
			//let htmlWikiUa = '';
			if ( user.internet  ) {

				if ( user.internet.imdb )
					htmlInternet += `<a href="https://www.imdb.com/name/nm${ user.internet.imdb }/" target="_blank" title="Перейти на IMDB"><img src="img/pic/logo_IMDb.png"></a>`;

				if ( user.internet.wiki_ua )
					htmlInternet += `<a href="https://uk.wikipedia.org/wiki/${ user.internet.wiki_ua }" target="_blank" title="Перейти на WikiUA"><img src="img/pic/sn_wiki_ua.png"></a>`;

				if ( user.internet.wiki_ru )
					htmlInternet += `<a href="https://ru.wikipedia.org/wiki/${ user.internet.wiki_ru }" target="_blank" title="Перейти на WikiRU"><img src="img/pic/sn_wiki_ru.png"></a>`;

				if ( htmlInternet ) 
					htmlInternet = `<div class="internet">${ htmlInternet }</div>`;
			}


			//console.log( user );


			html += `<div class="section1">
				${ htmlName }
				<div class="img" onclick="${ this.name }.clcLink( '${ user.id }' )">
					<img class="pointer" src="https://pillypenkosa.github.io/media/img/people/${ user.id }/1.jpg" alt="${ userName }">
					${ htmlRibbon }
				</div>

			</div>

			<div class="section2">
				${ htmlLifeData }
				${ htmlInternet }
			</div>

			${ htmlPosters }


			`;
		}


		return html;
	}



	static clcLink( data = '' ) { 	// data - userID


		const fooName = this.name + '.clcLink()'; 
 		
 		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data:', data ); 

		if ( data ) {

			Router.urlGET = {};

			Router.link([
				{ k: 'win' 	, v: 'people' 		, },
				{ k: 'uid' 	, v: data 	, },
			]);
		}
	}
















 
} 
 
 
 	
 
 
 
 
 	
 
 
