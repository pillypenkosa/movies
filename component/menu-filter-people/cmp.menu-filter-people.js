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
 
		


		// console.log( arrFilmsActors );
 
 
 
 /*
		let arrMovieActor = [];
		let arrMovieDirector = [];
		let arrMovieComposser = [];


 		arrListPeople.forEach( k => {
 			if ( k.hash ) {
 				if ( k.hash.movie ) {

 					if ( k.hash.actor ) 
 						arrMovieActor.push( k );

 					if ( k.hash.director ) 
 						arrMovieDirector.push( k );

 					if ( k.hash.composser ) 
 						arrMovieComposser.push( k );
 				}
 			}
 		});
*/



/*
 		let optionActors = '<option value="all">Актори (всі)</option>';
 		let optionDirector = '<option value="all">Режисери (всі)</option>';
 		let optionComposser = '<option value="all">Композитори (всі)</option>';
*/
 		let optionPeople = '<option value="all">--- Всі ---</option>';



 		const arrMoviePeople = [

 			{ id: 'actor' 		, title: 'Актори' 		, },
 			{ id: 'director' 	, title: 'Режисери' 	, },
 			{ id: 'composer' 	, title: 'Композитори' 	, },

 		];




 		arrMoviePeople.forEach( k => {
			optionPeople += `<option value="${ k.id }">${ k.title }</option>`;
 		});




/*

 		arrListPeople.forEach( k => {

 			let attrSelected = '';
	 		let name = '';

	 		if ( k.hash ) {
		 		if ( k.hash.movie ) {

					if ( k.name ) {
						if ( k.name.n ) 
							name += k.name.n;

						if ( k.name.s ) 
							name += ' ' + k.name.s;
					}

		 			if ( k.hash.actor ) 
						optionActors += `<option value="${ k.id }" ${ attrSelected }>${ name }</option>`;



		 			
		 		}
	 		}
 		});

*/












 		let html = `
 			<div class="divSelectFilter">

	 			<div>
	 				<select data-id="people" onchange="${ this.name }.changeFilter( this )">${ optionPeople }</select>
	 			</div>

 			</div>
 		`;

		return { tagParam, html };  
	} 
 
 
 











 
	static changeFilter( elem ) { 
		const fooName = this.name + '.changeFilter()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 


		Router.urlGET = {};

		Router.link([
			{ k: 'win' 		, v: 'people' 		, },
			{ k: 'cat' 		, v: elem.value 	, },
		]);



		//console.log( 'data', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
