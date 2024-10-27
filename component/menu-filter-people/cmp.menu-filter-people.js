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
			{ id: 'noWikiUa' 	, title: 'No WikiUa' 	, },
		];


 		let optionCat = '<option value="all">- Всі ---</option>';
 		arrMoviePeople.forEach( k => {

 			let attrSelected = '';
	 		if ( Router.urlGET ) {
	 			if ( Router.urlGET.win == 'people' ) {
	 				if ( Router.urlGET.cat ) {
	 					if ( k.id ) {
				 			if ( k.id == Router.urlGET.cat ) 
				 				attrSelected = 'selected';
	 					}
	 				}
	 			}
	 		}

			optionCat += `<option value="${ k.id }" ${ attrSelected }>${ k.title }</option>`;
 		});




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


		Router.urlGET = {};

		Router.link([
			{ k: 'win' 	, v: 'people' 		, },
			{ k: 'cat' 	, v: elem.value 	, },
		]);
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
