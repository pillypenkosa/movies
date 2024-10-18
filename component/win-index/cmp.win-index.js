// © 2023 DJS





class ComponentWinIndex {



	static args = {};


	// обрані фільми ( або добірки )
	static arrSelectedFilms = [];





	static html( objData = {} ) {
		const fooName = this.name + '.html()';
		//console.log( 'fooName: ', fooName );


		
		this.args = objData.args ? objData.args : {}; 


		let tagParam = {
			//'class' 		: 'active',
			//'name' 		: 'Any',
			//'title' 		: 'Всплывающая подсказка',
			//'data-id' 	: 'any-data',
			//'onclick' 	: `${ this.name }.clc( ${ this.name }.args )`,
			//'selected' 	: '',
			//'defer' 		: '',
		};



		//let html = '<div class="info">Бажаю здоров\'я! ))</div>';
		//let html = `<div>${ fooName }</div>`;
		let html = fooName;
	



		setMeta({
			title 			: appProjectName,
			description 	: appProjectName + ', movie collection...',
			//keywords 		: 'Ключові слова...' + name,
			image 			: 'img/pic/logoDJS.png',
			//url 			: 'url/any/there/' + name,
			//type 			: 'Тіпі-тіп ' + name,
			//site_name 	: 'Назва сайту, мабуть стале значення... ' + name,
		});



		return { tagParam, html };
	}






	static clc( data ) {
		const fooName = this.name + '.clc()';


		//console.log( 'fooName', fooName );
		//console.log( 'data', data );

	}





	// відбір фільмів за вказаною категорією
	static getSelectedFilms( data ) {
		const fooName = this.name + '.getSelectedFilms()';


		//console.log( 'fooName: ', fooName );
		//console.log( 'data: ', data );



		//let arrSelectedFilms = arrFilms;
		this.arrSelectedFilms = arrFilms;




		if ( data.actor ) {
			if ( data.actor != 'all' ) {

				this.arrSelectedFilms = this.arrSelectedFilms.filter( k => {

					if ( k.cast ) {
						if ( k.cast[ data.actor ] ) 
							return true;
					}
				});
			}
		}

		if ( data.director ) {
			if ( data.director != 'all' ) {

				this.arrSelectedFilms = this.arrSelectedFilms.filter( k => {

					if ( k.director ) {
						if ( k.director[ data.director ] ) 
							return true;
					}
				});
			}
		}


		if ( data.composser ) {
			if ( data.composser != 'all' ) {

				this.arrSelectedFilms = this.arrSelectedFilms.filter( k => {

					if ( k.composser ) {
						if ( k.composser[ data.composser ] ) 
							return true;
					}
				});
			}
		}



		if ( data.country ) {
			if ( data.country != 'all' ) {

				this.arrSelectedFilms = this.arrSelectedFilms.filter( k => {

					if ( k.country ) {
						if ( k.country[ data.country ] ) 
							return true;
					}
				});
			}
		}

		if ( data.genre ) {
			if ( data.genre != 'all' ) {

				this.arrSelectedFilms = this.arrSelectedFilms.filter( k => {

					if ( k.genre ) {
						if ( k.genre[ data.genre ] ) 
							return true;
					}
				});
			}
		}

		if ( data.hash ) {
			if ( data.hash != 'all' ) {

				this.arrSelectedFilms = this.arrSelectedFilms.filter( k => {

					if ( k.hash ) {
						if ( k.hash[ data.hash ] ) 
							return true;
					}
				});
			}
		}

		if ( data.year ) {
			if ( data.year != 'all' ) {

				this.arrSelectedFilms = this.arrSelectedFilms.filter( k => {

					if ( k.year == data.year ) 
						return true;
				});
			}
		}

		if ( data.studio ) {
			if ( data.studio != 'all' ) {

				this.arrSelectedFilms = this.arrSelectedFilms.filter( k => {

					if ( k.studio ) {
						if ( k.studio[ data.studio ] ) 
							return true;
					}
				});
			}
		}

		if ( data.letter ) {
			if ( data.letter != 'all' ) {

				this.arrSelectedFilms = this.arrSelectedFilms.filter( k => {
					if ( k.title ) {
						if ( k.title.ua ) {

							let firstSym = k.title.ua.slice( 0, 1 );

							if ( data.letter == 'eng' ) {
								if ( /^[A-Z]$/.test( firstSym ) ) 
									return true;
							
							} else if ( data.letter == '123' ) {
								if ( /^[0-9]$/.test( firstSym ) ) 
									return true;

							} else {
								if ( data.letter == firstSym ) 
									return true;
							}
						}
					}
				});
			}
		}

		this.showSelectedFilms();
	}




	// добірка
	static getSelection( data ) {
		const fooName = this.name + '.getSelection()';

		//console.log( 'fooName: ', fooName );
		console.log( 'data: ', data );


		//console.log( this.arrSelectedFilms );



		this.arrSelectedFilms = [];

		//console.log( this.arrSelectedFilms );




		if ( data == 'rating5' ) {

			//alert();

			arrFilms.forEach( k => {


				if ( k.rating ) {

					//console.log( k );

					if ( k.rating == 5 || k.rating == '5+' ) 
						this.arrSelectedFilms.push( objFilms[ k.id ] );

				}
			});
		}





		if ( data == 'favorite' ) {

			arrFilms.forEach( k => {
				if ( k.rating ) {

					//console.log( k );

					if ( k.rating == '5+' ) 
						this.arrSelectedFilms.push( objFilms[ k.id ] );
				}
			});
		}



		if ( data == 'bond' ) {

			arrFilmSelectionBond.forEach( k => {
				this.arrSelectedFilms.push( objFilms[ k ] );
			});
		}


		//console.log( this.arrSelectedFilms );







		this.showSelectedFilms();
	}


















	// відображення обраних фільмів
	static showSelectedFilms() {
		const fooName = this.name + '.showSelectedFilms()';

		//console.log( 'fooName: ', fooName );






		//console.log( 'arrSelectedFilms: ', arrSelectedFilms );


		let ok5 = '&#10003;'; 
		let star5p = '&#10031;'; 


		let html = '';
		this.arrSelectedFilms.forEach( ( k, i ) => {

			let htmlTitle = '';
			let titleUa = '';
			let titleEn = '';

			//let htmlCast = '';
			let html5 = ''; 	// на 5
			let html5p = ''; 	// улюблені

			if ( k.rating ) {

				if ( k.rating == 5 || k.rating == '5+' ) {

					html5 += `<span class="ok5"> ${ ok5 }</span>`;

					if ( k.rating == '5+' ) 
						html5p += `<span class="star5">${ star5p }</span> `;
					
				}
			}


			if ( k.title ) {

				if ( k.title.ua ) 
					titleUa += k.title.ua;
				
				if ( k.title.en ) 
					titleEn += k.title.en;

				if ( titleUa )
					htmlTitle += `<div class="titleUa"><span class="n-each">${ i + 1 }.</span> ${ html5p }${ titleUa }${ html5 }</div>`;

				if ( titleEn )
					htmlTitle += `<div class="titleEn">${ titleEn }</div>`;
			}



			let htmlCountry = '';
			if ( k.country ) {
				for ( let k1 in k.country ) {
					if ( objCountry[ k1 ] ) {
						if ( objCountry[ k1 ].title ) {
							if ( objCountry[ k1 ].title.ua ) 
								htmlCountry += objCountry[ k1 ].title.ua + ', ';
						}	
					}
				}

				htmlCountry = htmlCountry.slice( 0, -2 );
			}



			let htmlGenre = '';
			if ( k.genre ) {
				for ( let k1 in k.genre ) {
					if ( objGenres[ k1 ] ) {
						if ( objGenres[ k1 ].title ) {
							htmlGenre += objGenres[ k1 ].title + ', ';
						}	
					}
				}

				htmlGenre = htmlGenre.slice( 0, -2 );
			}




			let htmlHash = '';
			if ( k.hash ) {
				for ( let k1 in k.hash ) {
					if ( objHashTags[ k1 ] ) {
						if ( objHashTags[ k1 ].title ) {
							htmlHash += `#${ objHashTags[ k1 ].title }, `;
						}	
					}
				}

				//htmlHash = htmlHash.slice( 0, -2 );
				htmlHash = `<div class="hash"><span class="key">хештеги: </span>${ htmlHash.slice( 0, -2 ) }</div>`;
			}





			let htmlImdb = '';
			let htmlWikiUa = '';
			let htmlWikiRu = '';
			let htmlAuliki7 = '';
			let htmlHdVip = '';

			if ( k.internet ) {

				if ( k.internet.ashdivip ) {
					htmlHdVip = `<a href="https://ashdi.vip/vod/${ k.internet.ashdivip }" target="_blank">
						<img src="img/pic/logo_hdvip.png" alt="HDVip">
					</a>`;
				}

				if ( k.internet.auliki7 ) {
					htmlAuliki7 = `<a href="http://auliki7.xyz/stream.php?name=films/${ k.internet.auliki7 }.mp4" target="_blank">
						<img src="img/pic/logo_auliki7.png" alt="Auliki7">
					</a>`;
				}

				if ( k.internet.imdb ) {
					htmlImdb = `<a href="https://www.imdb.com/title/tt${ k.internet.imdb }/" target="_blank">
						<img src="img/pic/logo_IMDb.png" alt="IMDB">
					</a>`;

				}

				if ( k.internet.wiki_ua ) {
					htmlWikiUa = `<a href="https://uk.wikipedia.org/wiki/${ k.internet.wiki_ua }" target="_blank">
						<img src="img/pic/sn_wiki_ua.png" alt="WikiUA">
					</a>`;

				}

				if ( k.internet.wiki_ru ) {
					htmlWikiRu = `<a href="https://ru.wikipedia.org/wiki/${ k.internet.wiki_ru }" target="_blank">
						<img src="img/pic/sn_wiki_ru.png" alt="WikiRU">
					</a>`;

				}
			}


			//console.log( 'objFilmFranchise: ', objFilmFranchise);


			let htmlFranchise = '';
			if ( k.franchise ) {
				if ( objFilmFranchise ) {

					if ( objFilmFranchise[ k.franchise ] ) 
						htmlFranchise = Component( 'Franchise', objFilmFranchise[ k.franchise ] );

				}
			}



			let htmlCast = '';
			if ( k.cast ) 
				//htmlCast = `<div>Є актори</div>`;
				htmlCast = Component( 'Cast', k.cast );

			let htmlDirector = '';
			if ( k.director ) {
				for ( let kDirector in k.director ) {
					//console.log( kDirector );

					let nameN = '';
					let nameP = '';
					let nameS = '';

					if ( objListPeople[ kDirector ].name ) {
						nameN = objListPeople[ kDirector ].name.n ? objListPeople[ kDirector ].name.n + ' ' : '';
						nameP = objListPeople[ kDirector ].name.p ? objListPeople[ kDirector ].name.p + ' ' : '';
						nameS = objListPeople[ kDirector ].name.s ? objListPeople[ kDirector ].name.s : '';
					}

					htmlDirector = `${ nameN + nameP + nameS }`;
				}

				htmlDirector = `<div>
					<span class="key">режисер:</span> ${ htmlDirector }
				</div>`;
			}
			



			let htmlComposser = '';
			if ( k.composser ) {
				for ( let kComposser in k.composser ) {
					//console.log( kDirector );

					let nameN = '';
					let nameP = '';
					let nameS = '';

					if ( objListPeople[ kComposser ].name ) {
						nameN = objListPeople[ kComposser ].name.n ? objListPeople[ kComposser ].name.n + ' ' : '';
						nameP = objListPeople[ kComposser ].name.p ? objListPeople[ kComposser ].name.p + ' ' : '';
						nameS = objListPeople[ kComposser ].name.s ? objListPeople[ kComposser ].name.s : '';
					}

					htmlComposser = `${ nameN + nameP + nameS }`;
				}

				htmlComposser = `<div>
					<span class="key">композитор:</span> ${ htmlComposser }
				</div>`;
			}















			let htmlStudio = '';
			if ( k.studio ) {
				for ( let kStudio in k.studio ) {

					if ( objFilmStudio[ kStudio ] ) 
						htmlStudio += `<span>${ objFilmStudio[ kStudio ].title ? objFilmStudio[ kStudio ].title : '' }</span>, `;
				}

				htmlStudio = `<div class="">
					<span class="key">кінокомпанія:</span> ${ htmlStudio.slice( 0, -2 ) }
				</div>`;
			}



			//<div class="hash"><span class="key">хештеги:</span> ${ htmlHash }</div>
			html += `<div class="each">

				<div class="title">${ htmlTitle }</div>
				<div class="info">
					<div class="img">
						<img src="img/poster/${ k.id }.jpg" alt="${ k.title.ua }">
					</div>

					<div class="descr">
						<div class="txt">
							<div class="year"><span class="key">рік:</span> ${ k.year ? k.year : '' }</div>
							<div class="country"><span class="key">країна:</span> ${ htmlCountry }</div>
							<div class="genre"><span class="key">жанр:</span> ${ htmlGenre }</div>
							${ htmlDirector }
							${ htmlComposser }
							${ htmlStudio }
							${ htmlHash }
						</div>

						<div class="internet">
							${ htmlImdb }
							${ htmlWikiUa }
							${ htmlWikiRu }
							${ htmlAuliki7 }
							${ htmlHdVip }
						</div>
					</div>
				</div>

			${ htmlCast }

			${ htmlFranchise }

			</div>`;
		});



		document.getElementById( 'showSelectedFilms' ).innerHTML = html;
	}




















}























