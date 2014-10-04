/*Create a function called 'person' that accepts a name and an age parameter
  and returns an object with those properties. 
*/

    //code here
    var person = function(name, age){
      
    };

// Call your function twice creating two different objects
    
    var devin = person('Devin', 27);
    var jeramy = person('Jeramy', 36);


/* In this scenario, can you add a method to your person functions prototoype and then have
   the objects you create with that function delegate to the person's prototype?
*/

   //Explain your answer here
   /*  no, because these objects are in the Object tree of JS, not the "Person" tree.  */


/* Create a Constructor function called 'Person' that accepts a name and an age paramter
    and returns an object with those parameters */

    //code here
    var Person = function(name, age){
      this.name = name;
      this.age = age;
    };

/* Add a property called sayAge to the Person's prototype which says that instances name */

    //code here
    Person.prototype.sayAge = function(){
      alert('my age is ' + this.age);
    };

/* Create two instances of Person and call sayAge with one of those instances. */

  var devin = new Person('Devin', 27);
  var jeramy = new Person ('Jeramy', 36);

  devin.sayAge()

