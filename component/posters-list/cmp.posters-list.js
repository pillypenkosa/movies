// © 2024 DJS 
 
 
 
 
 
class ComponentPostersList { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		this.args = objData.args ? objData.args : {}; 
 
 
 
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
 		//console.log( 'fooName: ', fooName ); 
		//console.log( 'objData: ', objData ); 

		//let objFranchise = {};
		if ( objData ) {
			if ( objData.arrFilms ) {

				let arrFilms = objData.arrFilms;

				//console.log( 'arrFilms: ', arrFilms ); 
				arrFilms.forEach( k => {

					let film = {};
					if ( objFilms[ k ] ) {
						film = objFilms[ k ];

						let title = '';
						if ( film.title ) {
							if ( film.title.ua ) 
								title += film.title.ua;
							
							if ( film.year ) 
								title += ` (${ film.year })`;
						}

						//console.log( film );
						html += `<div class="img pointer" onclick="${ this.name }.clc( '${ film.id }' )" title="${ title }">
							<img src="img/poster/${ film.id }.jpg" alt="${ title }">
						</div>`;
					}
				});
			}		
		}

		if ( html ) 
			html = `<div class="list">${ html }</div>`;
		




		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( data = '' ) { 			// data - filmID
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data );




		// скидання фільтрів
		ComponentMenu.resetFilter();
		// приховування меню
		ComponentHeader.clc();


		Router.link([
			{ k: 'win' 	, v: 'movie' 	, },
			{ k: 'id' 	, v: data 		, },
		]);















		//Router.urlGET = {};

/*
		if ( data ) {
			Router.urlGET = {};
			Router.link( [{ win: 'movies', id: data, }, ]);
		} 

*/

	} 
 

 









 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
