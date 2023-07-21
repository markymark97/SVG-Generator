const myPrompt = [ //Prompt for shape rendering
    {
      message: "Enter a maximum of three (3) characters.",
      type: "input",
      name: "text",
      validate: (value) =>
        value ? true : "You must enter a maximum of three (3) characters.",
    },
    {
      message:
        "Enter a text color (e.g., white, black) or a hex number (e.g., #000000).",
      type: "input",
      name: "textcolor",
      validate: (value) =>
        value ? true : "Please enter a text color or hex number.",
    },
    {
      message: "Choose a shape:",
      name: "shape",
      type: "list",
      choices: ["circle", "triangle", "square"],
      validate: (value) => (value ? true : "Please choose a shape."),
    },
    {
      message:
        "Enter a color for your shape (e.g., white, black) or a hex number (e.g., #000000).",
      type: "input",
      name: "sc",
      validate: (value) =>
        value ? true : "Please enter a color for your shape.",
    },
  ];
  
  module.exports = myPrompt