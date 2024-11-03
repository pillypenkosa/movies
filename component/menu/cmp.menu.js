// © 2023 DJS 
 
 
 
 
 
class ComponentMenu { 
 
 
 
	static args = {}; 
 
 


	static arrBtns = [];



/*
	static filter = {

		cast 		: 'all',
		country 	: 'all',
		genre 		: 'all',
		year 		: 'all',
		letter 		: 'all',
	};
*/




 
	static html( objData = {} ) { 
		const name = this.name + '.html()'; 
 
		//this.args = objData.args ? objData.args : {}; 


 		


 		//console.log( Router.urlGET );


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



		let clsUnvisibleMovie = 'unvisible';
		let clsUnvisiblePeople = 'unvisible';

		if ( Router.urlGET  ) {
			if ( Router.urlGET.win ) {

				if ( Router.urlGET.win == 'movies' ) 
					clsUnvisibleMovie = '';

				if ( Router.urlGET.win == 'people' ) 
					clsUnvisiblePeople = '';
			}
		}







// 				<div class="body unvisible">${ htmlFilterMovie }</div>
 		html = `
 			<div class="filters" data-id="movies">
 				<div class="title" onclick="${ this.name }.clcBtnFilter( this )">Фільми</div>
 				<div class="body ${ clsUnvisibleMovie }">${ Component( 'Menu-Filter-Movie' ) }</div>
 			</div>
 			<div class="filters" data-id="people">
 				<div class="title" onclick="${ this.name }.clcBtnFilter( this )">Актори</div>
 				<div class="body ${ clsUnvisiblePeople }">${ Component( 'Menu-Filter-People' ) }</div>
 			</div>
		`;


		return { tagParam, html };  
	} 
 
 



	static clcBtnFilter( elem ) {
		const fooName = this.name + '.clcBtnFilter()';
		//console.log( 'fooName: ', fooName );
		//console.log( elem );

		document.querySelectorAll( 'cmp-menu .filters .body' ).forEach( k => {
			k.classList.add( 'unvisible' ); 
		});

		elem.closest( '.filters' ).querySelector( '.body' ).classList.remove( 'unvisible' ); 


		let parentID = elem.closest( '.filters' ).dataset.id;

		//console.log( parentID );




		document.querySelectorAll( 'select' ).forEach( k => {
			k.value = 'all';
		});

		// скидання усіх GET-параметрів
		Router.urlGET = {}; 

		Router.link([
			{ k: 'win', v: parentID, },
		]);
	}




	// скидання усіх select-option
	static resetFilter222() {
	

	}


 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
