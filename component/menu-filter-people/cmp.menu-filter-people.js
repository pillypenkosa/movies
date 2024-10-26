// © 2024 DJS 
 
 
 
 
 
class ComponentMenuFilterPeople { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		//this.args = objData.args ? objData.args : {}; 
 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
		

		const arrMoviePeople = [

			{ id: 'actor' 		, title: 'Актори' 		, },
			{ id: 'director' 	, title: 'Режисери' 	, },
			{ id: 'composer' 	, title: 'Композитори' 	, },
		];


 		let optionCat = '<option value="all">- Всі ---</option>';
 		arrMoviePeople.forEach( k => {
			optionCat += `<option value="${ k.id }">${ k.title }</option>`;
 		});




/*


 		let optionActor = '<option value="all">- Актори ---</option>';
		arrFilmsActors.sort().forEach( k => {

 			let attrSelected = '';
			let name = '';
	 		if ( Router.urlGET ) {
	 			if ( Router.urlGET.win == 'movies' ) {
	 				if ( Router.urlGET.cast ) {
			 			if ( k == Router.urlGET.cast ) 
			 				attrSelected = 'selected';
	 				}
	 			}
	 		}

			if ( objListPeople[ k ] ) {
				if ( objListPeople[ k ].name ) {

					if ( objListPeople[ k ].name.n ) 
						name += objListPeople[ k ].name.n;

					if ( objListPeople[ k ].name.s ) 
						name += ' ' + objListPeople[ k ].name.s;
				} 
			}

		 	optionActor += `<option value="${ k }" ${ attrSelected }>${ name }</option>`;
		});





 		let optionDirectors = '<option value="all">- Режисери ---</option>';
		arrFilmsDirectors.sort().forEach( k => {

 			let attrSelected = '';
			let name = '';
	 		if ( Router.urlGET ) {
	 			if ( Router.urlGET.win == 'movies' ) {
	 				if ( Router.urlGET.director ) {
			 			if ( k == Router.urlGET.director ) 
			 				attrSelected = 'selected';
			 		}
			 	}
			}

			if ( objListPeople[ k ] ) {

				if ( objListPeople[ k ].name.n ) 
					name += objListPeople[ k ].name.n;

				if ( objListPeople[ k ].name.s ) 
					name += ' ' + objListPeople[ k ].name.s;
			}

		 	optionDirectors += `<option value="${ k }" ${ attrSelected }>${ name }</option>`;
		});





 		let optionComposer = '<option value="all">- Композитори ---</option>';
		arrFilmsComposers.sort().forEach( k => {

 			let attrSelected = '';
			let name = '';
	 		if ( Router.urlGET ) {
	 			if ( Router.urlGET.win == 'movies' ) {
	 				if ( Router.urlGET.composer ) {
			 			if ( k == Router.urlGET.composer ) 
			 				attrSelected = 'selected';
			 		}
			 	}
			}

			if ( objListPeople[ k ] ) {

				if ( objListPeople[ k ].name.n ) 
					name += objListPeople[ k ].name.n;

				if ( objListPeople[ k ].name.s ) 
					name += ' ' + objListPeople[ k ].name.s;
			}

		 	optionComposer += `<option value="${ k }" ${ attrSelected }>${ name }</option>`;
		});


*/



/*

	 			<div>
	 				<select data-id="actor" onchange="${ this.name }.changeFilter( this )">${ optionActor }</select>
	 			</div>
	 			<div>
	 				<select data-id="director" onchange="${ this.name }.changeFilter( this )">${ optionDirectors }</select>
	 			</div>
	 			<div>
	 				<select data-id="composer" onchange="${ this.name }.changeFilter( this )">${ optionComposer }</select>
	 			</div>

*/









 		let html = `
 			<div class="divSelectFilter">
	 			<div>
	 				<select data-id="cat" onchange="${ this.name }.changeFilter( this )">${ optionCat }</select>
	 			</div>
 			</div>
 		`;



		return { tagParam, html };  
	} 
 
 
 











 
	static changeFilter( elem ) { 
		const fooName = this.name + '.changeFilter()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 


		//console.log( 'elem-ID: ', elem.dataset.id ); 
		//console.log( 'value: ', elem.value ); 


		// скидання фільтрів
		//ComponentMenu.resetFilter();
		// приховування меню
		//ComponentHeader.clc();

		Router.urlGET = {};


		Router.link([
			{ k: 'win' 	, v: 'people' 		, },
			{ k: 'cat' 	, v: elem.value 	, },
		]);





 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
