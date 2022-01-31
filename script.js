function Dog(name){
    this.name = name || "Rex";
    this.bark = function(){
        return "wuf wuf";
    };
}

var dog1 = new Dog(Snoopy);

Dog.prototype.getName = function(){
    return this.name;
};

Snoopy.getName();