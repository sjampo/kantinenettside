document.addEventListener('DOMContentLoaded', function() {
	// // The Firebase SDK is initialized and available here!
	//
	// firebase.auth().onAuthStateChanged(user => { });
	// firebase.database().ref('/path/to/ref').on('value', snapshot => { });
	// firebase.firestore().doc('/foo/bar').get().then(() => { });
	// firebase.functions().httpsCallable('yourFunction')().then(() => { });
	// firebase.messaging().requestPermission().then(() => { });
	// firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
	// firebase.analytics(); // call to activate
	// firebase.analytics().logEvent('tutorial_completed');
	// firebase.performance(); // call to activate

	const knapper = document.querySelectorAll(".knapp")

	const funksjoner = {
		printNoe: function() {
			console.log("Knapp klikket.")
		}
	}

	try {
		const app = firebase.app();
		const features = [
			'auth', 
			'database', 
			'firestore',
			'functions',
			'messaging', 
			'storage', 
			'analytics', 
			'remoteConfig',
			'performance',
		].filter(feature => typeof app[feature] === 'function');
		console.log(`Firebase SDK loaded with ${features.join(', ')}`);

		const db = firebase.firestore()
		db.collection("matprofiler").doc("spiselig-objekt2").get().then(function(doc) {
			console.log(doc.data())
		})

	} catch (e) {
		console.error(e);
	}

	for (const knapp of knapper) {
		knapp.addEventListener("click", funksjoner[knapp.getAttribute("funksjon")])
	}



});
