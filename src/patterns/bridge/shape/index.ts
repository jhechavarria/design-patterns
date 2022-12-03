import CircleImplementer from './concrete-class/implementor/circle-implementer';
import SquareImplementer from './concrete-class/implementor/square-implementer';
import Circle from './concrete-class/circle';
import Square from './concrete-class/square';

export default function () {
    const CIRCLE = new Circle(new CircleImplementer())
    CIRCLE.draw()

    const SQUARE = new Square(new SquareImplementer())
    SQUARE.draw()
}
