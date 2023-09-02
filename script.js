//your JS code here. If required.
 function callMe() { 
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve("Hello, world!")
		},1000)
	})

}
callMe().then((message) => {
            document.getElementById('output').textContent = message;
        });
