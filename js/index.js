"use strict";

/* Get a reference to the drawing context. Do not modify! */
const canvas = document.getElementById("canvas"); //reference the canvas element
const brush = canvas.getContext("2d"); //the drawing context


/* your code goes here! */

brush.strokeStyle = "black";
brush.lineCap = "round";
brush.lineWidth = 2;

//  1. Draw the clock face: a large circle centered at (250,250). A radius of 200
//     worked well for me

//face


//  2. Draw at least 4 numbers on the clock (e.g., 12, 3, 6, 9). Use the 
//     `fillText()` method to do this; you may need to experiment with positioning,
//     and can assign a value to the `brush.font` property to change the font size.

//numbers



//  3. Draw 3 hands: a short thick hour hand, a longer thinner minute hand, and a
//     longest *RED* thinnest second hand.




//hour hand
brush.lineWidth = 20;

//minute hand
brush.lineWidth = 15;

//second hand
brush.strokeStyle = "red";




/* ABOVE AND BEYOND*/

/**  Comment out your previous work. In here, you will animate the clock. You will have to implement the drawClock function
 * that has time (a moment object- https://momentjs.com/docs/) as an argument and you will have to draw the clock displaying that
 * time. You should copy paste a lot of the stuff from your previous work to save you some time.
*/

//     To help you out, I have provided a function `strokeLineAtMinutes()` that
//     does the math for drawing a line from the center of the clock to a given
//     clock "minute" mark. Specify the brush"s `lineWidth` before calling that 
//     function to draw the different hands.
//     - You will need to convert "hours" into an appropriate "minutes".
//     - You should also add the milliseconds (in thousandths) to the number of
//       elapsed seconds. You can also add the seconds to the number of elapsed
//       minutes, and so on.
//	   - To get milliseconds, seconds, minutes and hours, the time parameter will have 
//		fields of time.millisecond, time.second, time.minute, time.hour

function drawClock(time) {

}


function strokeLineAtMinutes(minutes, startX, startY, length) {
	console.info("called");
	let angle = (6 * minutes - 90) * Math.PI / 180;
	brush.beginPath();
	brush.moveTo(startX, startY);
	brush.lineTo(startX + length * Math.cos(angle), startY + length * Math.sin(angle));
	brush.stroke();
}



	//Use the `window.setInterval()` function so that it draws the clock for the 
	//current time every 16 milliseconds. You should use an anonymous callback
	//function which can access and pass in the current time (by passing in `moment()`) to the `drawClock()` call.
	//Your anonymous function can also `clearRect()` the canvas of the last drawing.
	//You do not need to stop the clock ticking.





//For even smoother animation, you can use the `window.requestAnimationFrame()`
//function (https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame)
//This function runs on a _variable interval_, optimized and adjusted by the 
//browser to achieve 60 redraws (frames) per second.
// - Note that the callback function needs to itself also call the 
//   `requestAnimationFrame()`, similar to a recursive method
// - This function is unavailable on IE 9 or earlier, but there is a polyfill at
//   https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
