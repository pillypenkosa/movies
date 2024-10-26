// © 2024 DJS 
 
 
 
 
 
class ComponentCast { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		this.args = objData.args ? objData.args : {}; 
 
		//console.log( objData );
 
 
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

		if ( objData ) {
	
			let htmlActor = ''; 
			if ( objData.cast ) {

				for ( let k in objData.cast ) {
					if ( objListPeople[ k ] ) {

						let name = '';
						if ( objListPeople[ k ].name ) {
							if ( objListPeople[ k ].name.n )
								name += objListPeople[ k ].name.n;

							if ( objListPeople[ k ].name.s )
								name += ' ' + objListPeople[ k ].name.s;
						}

						htmlActor += `<div class="each-person pointer" title="${ name }" onclick="${ this.name }.clcLink( '${ objListPeople[ k ].id }' )">
							<img src="https://pillypenkosa.github.io/media/img/people/${ objListPeople[ k ].id }/1.jpg" alt="${ name }">
						</div>`;
					}
				}

				htmlActor = `<div class="each-cast">
					<div class="txt">Актори:</div>${ htmlActor }
				</div>`;
			}

			




			let htmlDirector = ''; 
			if ( objData.director ) {

				for ( let k in objData.director ) {
					if ( objListPeople[ k ] ) {

						let name = '';
						if ( objListPeople[ k ].name ) {
							if ( objListPeople[ k ].name.n )
								name += objListPeople[ k ].name.n;

							if ( objListPeople[ k ].name.s )
								name += ' ' + objListPeople[ k ].name.s;
						}

						htmlDirector += `<div class="each-person pointer" title="${ name }" onclick="${ this.name }.clcLink( '${ objListPeople[ k ].id }' )">
							<img src="https://pillypenkosa.github.io/media/img/people/${ objListPeople[ k ].id }/1.jpg" alt="${ name }">
						</div>`;
					}
				}

				htmlDirector = `<div class="each-cast">
					<div class="">Режисери:</div>${ htmlDirector }
				</div>`;
			}



				//console.log( objData );

			let htmlComposer = ''; 
			if ( objData.composer ) {
				//console.log( objData.composer );

				for ( let k in objData.composer ) {
					if ( objListPeople[ k ] ) {

						let name = '';
						if ( objListPeople[ k ].name ) {
							if ( objListPeople[ k ].name.n )
								name += objListPeople[ k ].name.n;

							if ( objListPeople[ k ].name.s )
								name += ' ' + objListPeople[ k ].name.s;
						}

						htmlComposer += `<div class="each-person pointer" title="${ name }" onclick="${ this.name }.clcLink( '${ objListPeople[ k ].id }' )">
							<img src="https://pillypenkosa.github.io/media/img/people/${ objListPeople[ k ].id }/1.jpg" alt="${ name }">
						</div>`;
					}
				}

				htmlComposer = `<div class="each-cast">
					<div class="">Композитори:</div>${ htmlComposer }
				</div>`;
			}

			html = htmlActor + htmlDirector + htmlComposer;
		}
 
 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clcLink( data ) { 
		const fooName = this.name + '.clcLink()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 



		if ( data ) {

			Router.urlGET = {};

			Router.link([
				{ k: 'win' 	, v: 'people' 		, },
				{ k: 'uid' 	, v: data 			, },
			]);
		}










 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
