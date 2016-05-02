var Person = function(firstAndLast) {
  var firstName = "";
  var lastName = "";

  this.getFirstName = function(){ return firstName;};
  this.getLastName = function(){ return lastName;};
  this.getFullName = function(){
    return this.getFirstName().concat(" ", this.getLastName());};
  this.setFirstName = function(first){ firstName = first;};
  this.setLastName = function(last){ lastName = last;};
  this.setFullName = function(firstAndLast){
    split = firstAndLast.split(" ");
    firstName = split[0];
    lastName = split[1];
    };

  this.setFullName(firstAndLast);
};

var bob = new Person('Bob Ross');
