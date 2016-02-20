exports = module.exports = function( router, Instrument ) {

	router.use(function(req, res, next) {
		// do logging
		console.log('request issued!');
		next(); // make sure we go to the next routes and don't stop here
	});

	var dog = [{dog: 'dog'}];

	router.route('/test')
	.get(function(req, res) {
  	  console.log('instrument');
  	  res.json(dog);
	});
	// router.route('/db/instrument/:user_id')
	// .get(function(req, res) {
	// 	var content;
	// 	Instrument.findById(req.params.instrument_id, function(err, instrument) {
	// 		if (err)
	// 			res.send(err);
	// 		content = instrument;
	// 		if (req.session.lastPage) {
	// 				console.log('Last Page: ' + req.session.lastPage);
	// 		}
	// 		if(req.session.loggedIn){
	// 	  		res.render('editInstrumentMember');
	// 		}
	//         else{
	//     	    res.render('notLoggedIn');
	// 	    }
	// 	});
	// }).put(function(req, res) {
	// // find the post
	// 	Instrument.findById(req.params.instrument_id, function(err, listMember) {	
	// 		console.log('called');
	// 		if (err)
	// 			res.send(err)
	// 		if(!req.session.loggedIn){
	// 			res.redirect('notLoggedIn');
	// 		}
	// 		listMember.email = req.body.email;
	// 		listMember.fname = req.body.fname; 	// update the listMembers info
	// 		listMember.save(function(err) {			// save the post
	// 			if (err)
	// 				res.send(err);
	// 			res.render('instrument');
	// 		});
	// 	});
	// }).delete(function(req, res) {
	// 	Instrument.remove({
	// 		_id: req.params.instrument_id
	// 	}, function(err, member) {
	// 		if (err)
	// 			res.send(err);
	// 		if(!req.session.loggedIn){
	// 			res.redirect('notLoggedIn');
	// 		}
	// 		res.json('instrument');
	// 	});
	// });

	// router.get('/', function(req, res) {
	// 	if (req.session.lastPage) {
	// 		console.log('Last Page: ' + req.session.lastPage);
	// 	}
	// 	req.session.lastPage = '/ (home page)';
	// 	res.render('index');
	// });

	// router.route('/instrument')
	// .get(function(req, res) {
 //  	  res.render('instrument');
	// });



}		