const fs = require('fs');
const inquirer = require('inquirer');

const {Circle, Triangle, Square} = require('./lib/shapes')
const myPrompt = require('./lib/myPrompt')


const init =() => {
    inquirer.prompt(myPrompt)
        .then((data) => {
            console.log("Creating SVF file...");
            switch (`${data.shape}`){ //Square
                case 'square':
                    console.log("Square is being created")
                    const square = new Square(100, 50, 100, data.sc, data.textcolor, data.text)
                    fs.writeFile("lib/logo.svg", square.renderSquare(), (err) =>{
                        if (err){
                            console.log(err)
                        }
                        else {
                            console.log("Square is now generated...")
                        }
                    });
                    break;

            }

            switch (`${data.shape}`){ //Triangle
                case 'triangle':
                    console.log("Triangle is being created")
                    const triangle = new Triangle(50, 150, 150, 50, 250, 150, data.sc, data.textcolor, data.text)
                    fs.writeFile("lib/logo.svg", triangle.renderTriangle(), (err) =>{
                        if (err){
                            console.log(err)
                        }
                        else {
                            console.log("Triangle is now generated...")
                        }
                    });
                    break;
    
            }

            switch (`${data.shape}`){ //Cirlce
                case 'circle':
                    console.log("Circle is being created")
                    const circle = new Circle(150,100,50,data.sc, data.textcolor, data.text)
                    fs.writeFile("lib/logo.svg", circle.renderCircle(), (err) =>{
                        if (err){
                            console.log(err)
                        }
                        else {
                            console.log("Circle is now generated...")
                        }
                    });
                    break;
    
            }

        });

    
    
};




init();