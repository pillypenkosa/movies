
 
 
 
class ComponentMenuFilterMovie { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		this.args = objData.args ? objData.args : {}; 
 
 
		//console.log( 'fooName: ', fooName );
		//console.log( 'objData: ', objData );
		//console.log( 'Router.urlGET: ', Router.urlGET );



 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
 
		//let html = ''; 
 
 



 		let arrFilmsYear = Object.keys( objFilmsYear ).reverse();
 		//console.log( arrFilmsYear );

 		let optionYear = '<option value="all">- Рік ---</option>';
 		arrFilmsYear.forEach( k => {

 			let attrSelected = '';
	 		if ( Router.urlGET ) {
	 			if ( Router.urlGET.win == 'movies' ) {
	 				if ( Router.urlGET.year ) {
			 			if ( k == +Router.urlGET.year ) 
			 				attrSelected = 'selected';
	 				}
	 			}
	 		}

 			optionYear += `<option value="${ k }" ${ attrSelected }>${ k }</option>`;
 		});





 		let optionGenre = '<option value="all">- Жанр ---</option>';
 		let colorGenre = '';
 		arrGenres.forEach( k => {

 			let attrSelected = '';
	 		if ( Router.urlGET ) {
	 			if ( Router.urlGET.win == 'movies' ) {
	 				if ( Router.urlGET.genre ) {
	 					if ( k.id ) {
				 			if ( k.id == Router.urlGET.genre ) {
				 				attrSelected = 'selected';
				 				colorGenre = 'color';
				 			}
	 					}
	 				}
	 			}
	 		}

 			optionGenre += `<option value="${ k.id }" ${ attrSelected }>${ k.title }</option>`;
 		});





 		let optionCountry = '<option value="all">- Країна ---</option>';
 		let colorCountry = '';
 		arrCountry.forEach( k => {
 			
 			let attrSelected = '';
	 		if ( Router.urlGET ) {
	 			if ( Router.urlGET.win == 'movies' ) {
	 				if ( Router.urlGET.country ) {
	 					if ( k.id ) {
				 			if ( k.id == Router.urlGET.country ) {
				 				attrSelected = 'selected';
				 				colorCountry = 'color';

				 				//alert();

				 			}
	 					}
	 				}
	 			}
	 		}

 			if ( objFilmsCountry[ k.id ] ) {
 				if ( k.title ) {
 					if ( k.title.ua ) 
	 					optionCountry += `<option value="${ k.id }" ${ attrSelected }>${ k.title.ua }</option>`;
 				}
 			}
 		});





 		let optionStudio = '<option value="all">- Кінокомпанії ---</option>';
		arrFilmStudio.forEach( k => {

 			let attrSelected = '';
			let name = '';
	 		if ( Router.urlGET ) {
	 			if ( Router.urlGET.win == 'movies' ) {
	 				if ( Router.urlGET.studio ) {
			 			if ( k.id && k.id == Router.urlGET.studio ) 
			 				attrSelected = 'selected';
			 		}
			 	}
			}

			optionStudio += `<option value="${ k.id }" ${ attrSelected }>${ k.title }</option>`;
		});





 		let optionHash = '<option value="all">- Хештеги ---</option>';
 		let colorHash = '';
 		arrHashTags.forEach( k => {

 			let attrSelected = '';
			let name = '';
	 		if ( Router.urlGET ) {
	 			if ( Router.urlGET.win == 'movies' ) {
	 				if ( Router.urlGET.hash ) {
			 			if ( k.id && k.id == Router.urlGET.hash ) {
			 				attrSelected = 'selected';
				 			colorHash = 'color';
			 			}
			 		}
			 	}
			}

 			optionHash += `<option value="${ k.id }" ${ attrSelected }>${ k.title }</option>`;
 		});





 		let optionLetter = '<option value="all">- Літера ---</option>';
 		[ 'eng', '123', 'А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ю', 'Я', ].forEach( k => {
	 		
 			let attrSelected = '';
			let name = '';
	 		if ( Router.urlGET ) {
	 			if ( Router.urlGET.win == 'movies' ) {
	 				if ( Router.urlGET.letter ) {
			 			if ( k == decodeURI( Router.urlGET.letter )) 
			 				attrSelected = 'selected';
			 		}
			 	}
			}

	 		optionLetter += `<option value="${ k }" ${ attrSelected }>${ k }</option>`;
 		});





 		let optionSet = '<option value="all">Підбірки ---</option>';
 		arrMovieSet.forEach( k => {

 			let attrSelected = '';
			let name = '';
	 		if ( Router.urlGET ) {
	 			if ( Router.urlGET.win == 'movies' ) {
	 				if ( Router.urlGET.set ) {
			 			if ( k.id && k.id == Router.urlGET.set ) 
			 				attrSelected = 'selected';
			 		}
			 	}
			}

 			optionSet += `<option value="${ k.id }" ${ attrSelected }>${ k.title }</option>`;
 		});





 		let optionSort = '<option value="all">Сортування ---</option>';
 		arrMovieSort.forEach( k => {

 			let attrSelected = '';
			let name = '';
	 		if ( Router.urlGET ) {
	 			if ( Router.urlGET.win == 'movies' ) {
	 				if ( Router.urlGET.sort ) {
			 			if ( k.id && k.id == Router.urlGET.sort ) 
			 				attrSelected = 'selected';
			 		}
			 	}
			}

 			optionSort += `<option value="${ k.id }" ${ attrSelected }>${ k.title }</option>`;
 		});










 		let html = `
 			<div class="divSelectFilter">
	 			<div>
	 				<select data-id="letter" onchange="${ this.name }.changeFilter( this )">${ optionLetter }</select>
	 			</div>
	 			<div>
	 				<select data-id="year" onchange="${ this.name }.changeFilter( this )">${ optionYear }</select>
	 			</div>
	 			<div>
	 				<select class="${ colorGenre }" data-id="genre" onchange="${ this.name }.changeFilter( this )">${ optionGenre }</select>
	 			</div>
	 			<div>
	 				<select class="${ colorCountry }" data-id="country" onchange="${ this.name }.changeFilter( this )">${ optionCountry }</select>
	 			</div>
	 			<div>
	 				<select data-id="studio" onchange="${ this.name }.changeFilter( this )">${ optionStudio }</select>
	 			</div>
	 			<div>
	 				<select class="${ colorHash }" data-id="hash" onchange="${ this.name }.changeFilter( this )">${ optionHash }</select>
	 			</div>
	 			<div>
	 				<select data-id="set" onchange="${ this.name }.changeFilter( this )">${ optionSet }</select>
	 			</div>
 			</div>

	 		<div class="divSelectSort">
	 			<div>
	 				<select data-id="sort" onchange="${ this.name }.changeSort( this )">${ optionSort }</select>
	 			</div>
 			</div>
 		`;

		return { tagParam, html };  
	} 
 
 
 
 
 





	static changeFilter( elem ) {  
		const fooName = this.name + '.changeFilter()';

		//console.log( 'fooName: ', fooName );
		//console.log( Router.urlGET );
		//console.log( 'id: ', elem.dataset.id );
		//console.log( 'elem: ', elem.value );

		//Router.urlGET = {};
		delete( Router.urlGET.id ); // костиль


		Router.link([
			{ k: 'win' 					, v: 'movies' 		, },
			{ k: elem.dataset.id 		, v: elem.value 	, },
		]);
	} 
 



 	static changeSort( elem ) {  
		const fooName = this.name + '.changeSort()';

		//console.log( 'fooName: ', fooName );

		Router.link([
			{ k: 'win' 			, v: 'movies' 		, },
			{ k: 'sort' 		, v: elem.value 	, },
		]);




	} 
 








	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
