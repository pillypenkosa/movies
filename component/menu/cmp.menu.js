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





// 				<div class="body unvivisible">${ htmlFilterMovie }</div>
 		html = `
 			<div class="filters" data-id="movies">
 				<div class="title" onclick="${ this.name }.clcBtnFilter( this )">Фільми</div>
 				<div class="body unvivisible">${ Component( 'Menu-Filter-Movie' ) }</div>
 			</div>
 			<div class="filters" data-id="people">
 				<div class="title" onclick="${ this.name }.clcBtnFilter( this )">Люди</div>
 				<div class="body unvivisible">${ Component( 'Menu-Filter-People' ) }</div>
 			</div>
		`;






		return { tagParam, html };  
	} 
 
 

	static clcBtnFilter( elem ) {
		const fooName = this.name + '.clcBtnFilter()';
		//console.log( 'fooName: ', fooName );
		//console.log( elem );

		document.querySelectorAll( 'cmp-menu .filters .body' ).forEach( k => {
			k.classList.add( 'unvivisible' ); 
		});

		elem.closest( '.filters' ).querySelector( '.body' ).classList.remove( 'unvivisible' ); 


		let parentID = elem.closest( '.filters' ).dataset.id;

		//console.log( parentID );

		// скидання усіх select-option
		document.querySelectorAll( 'select' ).forEach( k => {
			k.value = 'all';
		});

		// скидання усіх GET-параметрів
		Router.urlGET = {}; 	

		Router.link([
			{ k: 'win', v: parentID, },
		]);
	}



 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
