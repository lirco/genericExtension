(function () {

  function mainController() {

    var self = this;

    self.searchGoogle = function(){
      chrome.tabs.update({
        url: 'https://www.google.co.il/search?q='+self.searchTerm
      });
    };

  }

  angular.module('genericExtension')
    .controller('mainController', [mainController])

}());