 //check if we can read from their browser
		if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
			document.querySelector("#FileDrop #Text").textContent = "Sorry: Reading files not supported by this browser";
		} else {
            
            //if so, read the dropped file
			const fileDrop = document.querySelector("#FileDrop");
            //just changes style for drag and drop
			fileDrop.addEventListener("dragenter", () => fileDrop.classList.add("Hover"));
			fileDrop.addEventListener("dragleave", () => fileDrop.classList.remove("Hover"));
			fileDrop.addEventListener("drop", () => fileDrop.classList.remove("Hover"));
            
			document.querySelector("#FileDrop input").addEventListener("change", e => {
                //get the file when dropped
                const files = e.target.files;
                //as long as there is content in the file
                if (files.length > 0){
                        const file = files[0];
                        //get the filename and display that, then parse the file. 
                        document.querySelector("#FileDrop #Text").textContent = file.name;
                        parseFile(file);
                    }
                });
		}
	      
        
		function parseFile(file){
			//read the file
			const reader = new FileReader();
			reader.onload = function(e){
				var midi = new Midi(e.target.result);
				document.querySelector("#ResultsText").value = JSON.stringify(midi, undefined, 2);
				//call the vibrate function on the results
				vibrate(midi)
               
               	}
            //show results of parsing
			reader.readAsArrayBuffer(file);
  		}

        //vibrate!!
       function vibrate(midi){
                 
           //gets an array of notes from the JSON with duration and time (start-time)
             var notes = midi.tracks[0]['notes'];
            //for each item in array, we need to get the note duration, and the time (start time).
             notes.forEach(element => {
                 var secTime = element.time * 1000;  //time converted to seconds
                 var dur = element.duration * 1000; //duration in seconds
                //we want to take each start time in seconds and set a haptic event to start at that time, for the duration of the note
                 setTimeout(function(){
                   //start the haptic event
                     window.navigator.vibrate(dur);
                 }, secTime);

             });
           
  }
		
