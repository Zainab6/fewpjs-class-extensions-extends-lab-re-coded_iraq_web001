// Your code here
class Polygon{
  constructor(sides){
    this.sides = sides
    this.count=this.sides.length
  }
  get countSides(){
    return this.sides.length
    }
  get perimeter(){
    let sum =0
   for (let i=0;i<this.sides.length;i++){
     sum += this.sides[i]
   }
   return sum
  }
}
class Triangle extends Polygon {
     
     get isValid(){
      if (this.count===3){
       return( this.sides[1]+this.sides[2]>this.sides[3])&& (this.sides[2]+this.sides[3]>this.sides[1])&&(this.sides[1]+this.sides[3]>this.sides[2])
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