// © 2024 DJS 
 
 
 
 
 
class ComponentEachMovie { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		this.args = objData.args ? objData.args : {}; 
 
 
 
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
 
		//console.log( 'objData: ', objData ); 
 
		//let filmID = objData.filmID; 


 
 
		let film = {};
 
 		//console.log( 'fooName: ', fooName ); 
 
		if ( objData ) {
			if ( objData.filmID ) {
				if ( objFilms[ objData.filmID ] ) {


					//console.log( 'objData: ', objData ); 

					film = objFilms[ objData.filmID ];

					tagParam[ 'data-id' ] = objData.filmID;


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

									htmlHash += `<div class="hashtag pointer">#${ objHashTags[ k ].title }</div>`;
								}
							}
						}


						//htmlHash.slice( 0, -2 );
					}






					let htmlBody = '';
					if ( objData.pm ) { 		//  спойлер развернут
						//console.log( 'objData: ', objData );
						//console.log( 'film: ', film  );

						htmlBody = this.getBody( film.id );


				
						setMeta({ 
							title 			: film.title.ua, 
							description 	: `${ film.title.ua } (${ film.year })`, 
							image 			: '', 
						}); 
					}


					let htmlRating = '';
					if ( film.rating ) {

						if ( film.rating == 5 ) 
							htmlRating = '<span class="rating5">// 5</span>';

						if ( film.rating == '5+' ) 
							htmlRating = '<span class="rating5p">// 5+</span>';
					}



							//<div class="title-ua">${ film.title.ua }</div>
					html += `<div class="each-movie">
						<div class="title pointer" onclick="${ this.name }.clcBtnTitle( this )">
							<div class="txt">${ film.title.ua } (${ film.year }) ${ htmlRating }</div>
							<div class="pm">+</div>
						</div>
						<div class="body">${ htmlBody }</div>
					</div>`;
				}
			}
		}
		

		return { tagParam, html };  
	} 
 
 
 
 
 
	static clcBtnTitle( elem ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 
 




		let elemParnet = elem.closest( 'cmp-each-movie' );
		let elemBody = elemParnet.querySelector( '.body' );


		if ( !elemBody.innerHTML ) 
			//elemBody.innerHTML = Component( 'Film', { filmID: elemParnet.dataset.id } );
			elemBody.innerHTML = this.getBody( elemParnet.dataset.id );

		else 
			elemBody.classList.toggle( 'unvisible' );


		let htmlPM = '';
		if ( elemBody.classList.contains( 'unvisible' ) ) 
			htmlPM = '+';
		else 
			htmlPM = '-';
			
		elem.querySelector( '.pm' ).innerHTML = htmlPM;
	} 
 
 



	static getBody( filmID ) { 
		const fooName = this.name + '.getBody()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'filmID: ', filmID ); 
 


		let html = '';
		let film = {};

		if ( filmID ) {
			if ( objFilms[ filmID ]  ) {

				film = objFilms[ filmID ];
				//console.log( film );


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

								htmlHash += `<div class="hashtag pointer">#${ objHashTags[ k ].title }</div>`;
							}
						}
					}

					//htmlHash.slice( 0, -2 );
					if ( htmlHash ) 
						htmlHash = `<div class="section4">${ htmlHash }</div>`;
				}




				let htmlCast = Component( 'Cast', film  );
				if ( htmlCast )
					htmlCast = `<div class="section5">${ htmlCast }</div>`;




				let htmlFranchise = '';
				if ( film.franchise ) {
					if ( objFilmFranchise[ film.franchise ] ) 
						htmlFranchise = `<div class="section5">
							<div class="txt">Франшиза:</div>
							${ Component( 'Posters-List', { arrFilms: objFilmFranchise[ film.franchise ], } ) }
						</div>`;
				}
				




				html = `<div class="section1">
					<div class="title-en">${ film.title.en }</div>
					<div class="year">( ${ film.year } )</div>
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
			}
		}

		return html;
	}




	// перехід на конкретний фільм
	static clcPoster( elem ) {

		const fooName = this.name + '.clcPoster()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 
 



		//let elemParnet = elem.closest( 'cmp-each-movie' );
		//let filmID = elemParnet.dataset.id;


		//console.log( 'filmID: ', filmID ); 


		//Router.urlGET = {}; 	

		// скидання фільтрів
		ComponentMenu.resetFilter();
		// приховування меню
		ComponentHeader.clc();


		Router.link([
			{ k: 'win' 	, v: 'movie' 											, },
			{ k: 'id' 	, v: elem.closest( 'cmp-each-movie' ).dataset.id 		, },
		]);


	}









 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
