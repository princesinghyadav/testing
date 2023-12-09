 
        console.log("constructor function test ");
     function Creteac (ac_no,name,type,balance){
      this.acno=ac_no,
      this.name=name,
      this.balance=balance,
      this.type=type
      this.deposit= function(amount){
       this.balance+=amount
    this.withdraw =function(amount){
        if(amount>=this.balance){
        console.log("your payment declined due to insufficient money")
        }else{
            this.balance-=amount;
        console.log("Transaction successful")
        }
       
        this.totalbalance = function (total){
         for(let i=0;i<total.length;i++){
         let sum=0;
         sum+=this.total[i].balance;
         
         }
        }
    }  
    }


     }
     let p1= new Creteac (1234543,"rupesh","saving",2000)
     let p2 =new Creteac (54321,"sanuj","current",5000)
     let p3 = new Creteac (76976,"vimla ","saving",2500)
     p1.deposit(100)
     console.log(p1.balance)
     p2.deposit(1000)
     console.log(p2.balance)
     p2.withdraw(10000)
     console.log(p2.balance)
     let total =[ p1,p2,p3];
     totalbalance(total)
     console.log(p1.totalbalance)
    