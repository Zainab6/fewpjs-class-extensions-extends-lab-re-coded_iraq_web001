// Your code here
class Polygon{
  constructor(sides){
    this.sides = sides
  }
  get countSides(){
    for(let i = 0; i<this.sides.length;i++){
     this.sides = this.sides[i]+1
    }
  }
  get perimeter(){
    for(let i = 0; i<this.sides.length;i++){
      this.sides[i]+this.sides[i]
    }
  }
  
  
}

class Triangle extends Polygon {
     
     get isValid(){
      if ((this.sides[i]+this.sides[i])>this.sides[i]){
       this.perimeter
      }
      else {
        console.log ("it is not possible to construct a triangle with the given side lengths. ")
      }
     }
     
  }
class Square extends Polygon{
  get isValid(){
    for(let i = 0; i<this.sides.length;i++){
      if (this.sides[i] = this.sides[i]){
        this.perimeter
      }
      else {
        console.log("this is not valid")
      }
    }
  }
  get area(){
    this.sides[i]*this.sides[i]
  }
}
let polygon = new Polygon( [ 5, 5, 5 ] )