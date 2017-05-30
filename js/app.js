//Make View Model
var ViewModel = function() {
    this.name = ko.observable("Tabby");//name - data-bind="text: name"
    this.clickCount = ko.observable(0);//click output
    this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');//image source
    this.imgAttribution = ko.observable('text.com');//author

    //connect to View Model
    this.incrementCounter  = function() {
        this.clickCount(this.clickCount() + 1);

    };
};

ko.applyBindings(new ViewModel());
