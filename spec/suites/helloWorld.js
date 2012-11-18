define([
    'src/helloWorld'
],function(Greeter){
    describe('hello World!', function(){
        it('Hello on greet', function(){
            var greeter = new Greeter();
            expect(greeter.greet("World")).toBe("Hello World!");
        });
    });

    /*
    describe('hell world!', function(){
        it('Hell! on greet', function(){
            var greeter = new Greeter();
            expect(greeter.greet("World")).toBe("Hell!");
        });
    });
    */
});