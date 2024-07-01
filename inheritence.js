class bike {
    constructor(arg1) {
      this.bikename = arg1;
    }
    present() {
      return 'I Purchased A Bike ' + this.bikename;
    }
  }
  
  class Model extends bike {
    constructor(arg1, arg2) {
      super(arg1);
      this.model = arg2;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  const myBike = new Model("Hero", "X-Pulse");
  let res=myBike.show();
  console.log(res)
