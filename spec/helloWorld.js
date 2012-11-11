/**
 * Project: .
 * User: Eugene-Krevenets
 * Date: 11/11/12
 * Time: 9:16 PM
 * To change this template use File | Settings | File Templates.
 */
describe('hello World!', function(){
    it('Hello on greet', function(){
        var greeter = new myapp.Greeter()
        expect(greeter.greet("World")).toBe("Hello World!");
    });
});