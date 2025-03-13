class Vec{
    
    constructor(x, y){
        this.x = x
        this.y = y
    }

    plus(vector){
        return new Vec(this.x + vector.x, this.y + vector.y)
    }

    minus(vector){
        return new Vec(this.x - vector.x, this.y - vector.y)
    }

    get lenght(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

}

vetor01 = new Vec(10, 5)
vetor02 = new Vec(5,2)

console.log(vetor01.plus(vetor02))
console.log(vetor01.minus(vetor02))
console.log(vetor01.lenght)