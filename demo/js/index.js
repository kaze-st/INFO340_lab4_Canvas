"use strict";

/* Get a reference to the drawing context.*/
const canvas = document.getElementById("canvas"); //reference the canvas element
const brush = canvas.getContext("2d"); //the drawing context

/* Width of your brush */
brush.lineWidth = 10;

/** Draw a line */
brush.moveTo(0, 0);
brush.lineTo(100, 100);
brush.stroke();

/* Circle*/
brush.beginPath();

brush.strokeStyle = "red";
brush.arc(100, 100, 90, 0, 2 * Math.PI);
brush.stroke();

/** Rectangles */

brush.rect(200, 200, 100, 40);
brush.stroke();

/* Fill it with green */	
brush.fillStyle = "green"
brush.fillRect(200, 200, 100, 40);

/** Clear stuff up */
brush.clearRect()

let i = 20;
setInterval(() => {
	brush.clearRect(0, 0, 700, 800);
	brush.moveTo(0,0);
	brush.lineTo(i, i);
	brush.stroke();
	

	i += 20;
}, 500)
