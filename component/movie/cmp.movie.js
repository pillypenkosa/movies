
 
 
 
class ComponentMovie { 
 
 
 
	//static args = {}; 
 
 
 
	static html( film ) { 
		const fooName = this.name + '.html()'; 
 
		//this.args = objData.args ? objData.args : {}; 
 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 		: data-id="${ film.id }", 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
 
		let html = ''; 
 
		//console.log( 'film: ', film ); 
 


		tagParam[ 'data-id' ] = film.id;


		let htmlWikiUa = '';
		let htmlWikiRu = '';
		let htmlImdb = '';
		let htmlHdVip = '';
		let htmlAuliki7 = '';




		if ( film.internet ) {

			if ( film.internet.imdb ) 
				htmlImdb += `<a href="https://www.imdb.com/title/tt${ film.internet.imdb }" target="_blank" title="IMDb"><img src="img/pic/logo_IMDb.png" alt="IMDb"></a>`;
			
			if ( film.internet.wiki_ua ) 
				htmlWikiUa += `<a href="https://uk.wikipedia.org/wiki/${ film.internet.wiki_ua }" target="_blank" title="WikiUa"><img src="img/pic/sn_wiki_ua.png" alt="WikiUa"></a>`;
			
			if ( film.internet.wiki_ru ) 
				htmlWikiRu += `<a href="https://ru.wikipedia.org/wiki/${ film.internet.wiki_ru }" target="_blank" title="WikiRu"><img src="img/pic/sn_wiki_ru.png" alt="WikiRu"></a>`;
			
			if ( film.internet.ashdivip ) 
				htmlHdVip = `<a href="https://ashdi.vip/vod/${ film.internet.ashdivip }" target="_blank" title="HDVip"><img src="img/pic/logo_hdvip.png" alt="HDVip"></a>`;
			
			if ( film.internet.auliki7 ) 
				htmlAuliki7 = `<a href="http://auliki7.xyz/stream.php?name=films/${ film.internet.auliki7 }.mp4" target="_blank" title="Auliki7"><img src="img/pic/logo_auliki7.png" alt="Auliki7"></a>`;
		}


		let htmlCountry = '';
		if ( film.country ) {
			for ( let k in film.country ) {

				if ( objCountry[ k ] ) {
					if ( objCountry[ k ].title ) {
						if ( objCountry[ k ].title.ua ) 
							htmlCountry += `${ objCountry[ k ].title.ua }, `;
					}
				}
			}
			htmlCountry = htmlCountry.slice( 0, -2 );
		}


		//let htmlGenre = film.genre;


		let htmlGenre = '';
		if ( film.genre ) {
			for ( let k in film.genre ) {
				if ( objGenres[ k ] ) {
					if ( objGenres[ k ].title ) {

						htmlGenre += `${ objGenres[ k ].title }, `;
					}
				}
			}

			htmlGenre = htmlGenre.slice( 0, -2 );
		}



		let htmlHash = '';
		if ( film.hash ) {
			for ( let k in film.hash ) {
				if ( objHashTags[ k ] ) {
					if ( objHashTags[ k ].title ) {

						htmlHash += `<div class="hashtag pointer" onclick="${ this.name }.clcHashTag( '${ objHashTags[ k ].id }' )">#${ objHashTags[ k ].title }</div>`;
					}
				}
			}

			if ( htmlHash ) 
				htmlHash = `<div class="section4">${ htmlHash }</div>`;
			//htmlHash.slice( 0, -2 );
		}



		let htmlCast = Component( 'Cast', film  );
		if ( htmlCast )
			htmlCast = `<div class="section5">${ htmlCast }</div>`;


		let htmlFranchise = '';
		if ( film.franchise ) {

			let arrFranchiseFilms = [];
			let arrFilmIDs = [];

			//console.log( 'film.franchise: ', film.franchise );

			arrFranchiseFilms = arrFilms.filter( k => {
				if ( k.franchise && k.franchise == film.franchise ) {
					//arrFranchiseFilms.push( k.id );
					return true;
				}


			});

			//console.log( 'arrFranchiseFilms: ', arrFranchiseFilms );

			(function() {


	    		function sortUp( a, b ) { return ( a.year > b.year ) ? 1 : -1; }     
	    		arrFranchiseFilms.sort( sortUp );

			})();

			//console.log( 'arrFranchiseFilms: ', arrFranchiseFilms );

			arrFilmIDs = arrFranchiseFilms.map( k => k.id );




			//console.log( 'arrFilmIDs: ', arrFilmIDs );

			htmlFranchise = `<div class="section5">
				<div class="txt">Франшиза:</div>
				${ Component( 'Posters-List', { arrFilms: arrFilmIDs, } ) }
			</div>`;

				//${ Component( 'Posters-List', { arrFilms: objFilmFranchise[ film.franchise ], } ) }




			/*
			if ( objFilmFranchise[ film.franchise ] ) 
				htmlFranchise = `<div class="section5">
					<div class="txt">Франшиза:</div>
					${ Component( 'Posters-List', { arrFilms: objFilmFranchise[ film.franchise ], } ) }
				</div>`;
			*/
		}
		








/*

		let htmlRating = '';
		if ( film.rating ) {

			if ( film.rating == 5 ) 
				htmlRating = '<span class="rating5">// 5</span>';

			if ( film.rating == '5+' ) 
				htmlRating = '<span class="rating5p">// 5+</span>';
		}


*/













				//<div class="title-ua">${ film.title.ua }</div>
		html = `<div class="section1">
				<div class="title-en">${ film.title.en }</div>
				<div class="year">( ${ film.year } )</div>
				<div class="title-ua">${ film.title.ua }</div>
			</div>

			<div class="section2">
				<div class="img pointer" onclick="${ this.name }.clcPoster( this )">
					<img src="img/poster/${ film.id }.jpg" alt="${ film.title.ua }">
				</div>

				<div class="internet">
					${ htmlImdb }
					${ htmlWikiUa }
					${ htmlWikiRu }
					${ htmlHdVip }
					${ htmlAuliki7 }
				</div>
			</div>

			<div class="section3">
				<div class="keyval"><span class="key">рік:</span> <span class="val">${ film.year }</span></div>
				<div class="keyval"><span class="key">країна:</span> <span class="val">${ htmlCountry }</span></div>
				<div class="keyval"><span class="key">жанр:</span> <span class="val">${ htmlGenre }</span></div>
			</div>
			${ htmlHash }
			${ htmlCast }
			${ htmlFranchise }

		`;


 		//console.log( 'html: ', html ); 
		
		
		return { tagParam, html };  
	} 
 
 
 



	// перехід на конкретний фільм
	static clcPoster( elem ) {

		const fooName = this.name + '.clcPoster()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 
 






		let elemParnet = elem.closest( 'cmp-movie' );
		let filmID = elemParnet.dataset.id;


		//console.log( 'filmID: ', filmID ); 


		//Router.urlGET = {}; 	

		// скидання фільтрів
		//ComponentMenu.resetFilter();

		// приховати меню
		//ComponentHeader.hide()


		// приховування меню
		//ComponentHeader.clc();

		//Router.urlGET = {};
		ComponentHeader.delHtmlMenu();
		
		Router.urlGET = {};


		Router.link([
			{ k: 'win' 	, v: 'movie' 	, },
			{ k: 'id' 	, v: filmID		, },
		]);


		//console.log( 'Router.urlGET: ', Router.urlGET );
	}






	// перехід на конкретний фільм
	static clcHashTag( hashID ) {

		const fooName = this.name + '.clcPoster()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'hashID: ', hashID ); 
 


		// скидання фільтрів
		//ComponentMenu.resetFilter();

		// приховати меню
		//ComponentHeader.hide()

		ComponentHeader.delHtmlMenu();

		Router.urlGET = {};

		Router.link([
			{ k: 'win' 		, v: 'movies' 	, },
			{ k: 'hash' 	, v: hashID		, },
		]);
	}





 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
