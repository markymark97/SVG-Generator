const  {Shape,Circle, Square, Triangle} = require('../lib/shapes')

describe('Shape', () => {
  test('create new shape', () => {
    const shape = new Shape('#000', '#fff','lol');
    expect(shape.fill).toEqual('#000');
    expect(shape.textColor).toEqual('#fff')
    expect(shape.text).toEqual('lol');
    
  });
});

//Circle Shape Test
describe('Circle', () => {
  test('renders correctly', () => {
    const circle = new Circle(150, 100, 50,'#000', '#fff','lol');
    expect(circle.fill).toEqual('#000');
    expect(circle.textColor).toEqual('#fff');
    expect(circle.text).toEqual('lol');
    
  });
});
// Square Shape Test
describe('Square', () => {
    test('renders correctly', () => {
      const square = new Square(100, 100, 200, '#000', '#fff','lol');
      expect(square.fill).toEqual('#000');
      expect(square.textColor).toEqual('#fff');
      expect(square.text).toEqual('lol');
    });
  });
// Triangle Shape Test
describe('Triangle', () => {
    test('renders correctly', () => {
      const triangle = new Triangle(150, 18, 244, 182, 56, 182,'#000', '#fff','lol');
      expect(triangle.fill).toEqual('#000');
      expect(triangle.textColor).toEqual('#fff');
     expect(triangle.text).toEqual('lol');
    });
  });
  