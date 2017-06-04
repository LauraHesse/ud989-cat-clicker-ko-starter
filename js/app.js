var initialCats = [
  {
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/1.jpg',
    level: "Infant",
    nickname: ["nickname1", "nickname2", "nickname3"]
  },
  {
    clickCount: 0,
    name: 'Tiger',
    imgSrc: 'img/2.jpg',
    level: "Infant",
    nickname: ["nickname1", "nickname2", "nickname3"]
  },
  {
    clickCount: 0,
    name: 'Timo',
    imgSrc: 'img/3.jpg',
    level: "Infant",
    nickname: ["nickname1", "nickname2", "nickname3"]
  },
  {
    clickCount: 0,
    name: 'Tata',
    imgSrc: 'img/4.jpg',
    level: "Infant",
    nickname: ["nickname1", "nickname2", "nickname3"]
  },
  {
    clickCount: 0,
    name: 'Tom',
    imgSrc: 'img/5.jpg',
    level: "Infant",
    nickname: ["nickname1", "nickname2", "nickname3"]
  }
];

var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.level = ko.observable(data.level);
  this.nickname= ko.observableArray(data.nickname);
  this.changeAge = function(){
    if (this.clickCount() > 5){
      this.level("Kid");
  } else if ( this.clickCount() > 10){
      this.level("Grownup");
  }
  };
};

var ViewModel = function(){
  var self = this;
  this.catList = ko.observableArray([]);
  initialCats.forEach(function(catItem){
    self.catList.push(new Cat(catItem));
});

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function(){
    self.currentCat().clickCount(self.currentCat().clickCount()+1);
    self.currentCat().changeAge();
  };

  this.switchCat = function(cat){
    self.currentCat(cat);
    //console.log(self.currentCat(cat).clickCount());
};
};

ko.applyBindings(new ViewModel());
