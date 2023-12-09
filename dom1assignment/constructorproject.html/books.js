 


  function author (name ,birthyear,nationality){
   this.name=name,
    this.birthyear=birthyear,
    this.nationality=nationality
    
    }
    function book ( title, price ,authr){
     this.title=title,
     this.price=price,
     this.author=authr
    }
     
      let a1=new author("gulzar",1999,"indian")
     let a2=new author ("ram",2000,"lucknow")
     let a3= new author ("dinkar",1980,"bombay")
     let b1=new book ("the fire ",250,a1)
     let b2= new book ("the ice ",350,a2)
     let b3= new book("the psychology of money",550,a3)
     console.log(b1)
     console.log(b2 )
     console.log(b3)
