

class  automobile
{
  
  construtor(name,model,colour,type){
  this.names = name ;
  this.model = model;
  this.colour = colour;
  this.type = type;
  }
  start()
  {
    console.log("car is ready for drive");
  }
  opendoor()
  {
    console.log("door is open");
  }
}
class truck extends automobile
{
  construtor(name,model,colour,type,maxspeed){
    super(name,model,colour,type);
    this.maxspeed = marspeed;
    
  }
}
class car extends automobile
{
  construtor(name,model,colour,type,maxspeed){
    super(name,model,colour,type);
    this.maxspeed = marspeed;
}
}
class bus extends automobile
{
  construtor(name,model,colour,type,maxspeed){
    super(name,model,colour,type);
    this.maxspeed = marspeed;
  }
}
const  gari = new car("collora",2001,"red","manual",150);
console.log(gari.start());

    