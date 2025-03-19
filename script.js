 function calculateArea() {
            // Get the radius from the user using the prompt() function
	 
            let radius = prompt("Enter the radius of the circle:");
	 let res = 3.14159265359*(radius*radius);
            console.log("The area of the circle with radius"+ radius +"is "+res.toFixed(2));
           
}
calculateArea();
