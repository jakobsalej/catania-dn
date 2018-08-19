angular
  .module('formApp', [])
  .controller('emailFormController', emailFormController);

  function emailFormController($timeout) {
    var vm = this;

    // placeholder data
    vm.testData = {
      subject: 'Liverpool is looking pretty good...',
      text: 'Hello guys, this is your coach Pep speaking. I was watching some Liverpool games this past week and I am in a good mood. They look very good. I am also gonna send this email to Jurgen, to show them that we are not scared...',
      sender: {
        id: 323,
        name: 'Pep Guardiola',
        email: 'bald.fraud@manchester-city.com'
      },
      timeReceived: '2018-08-19T12:04:30Z',
      noOfEmails: 3,
      recipients: [
        {
          id: 324,
          name: 'Kevin De Bruyne',
          email: 'little.kev@loop.com'
        },
        {
          id: 325,
          name: 'Jurgen Klopp',
          email: 'kloppo@loop.com'
        },
      ]
    }

    // some random users
    var users = [
      {
        id: 1,
        name: 'Alisson Becker',
        email: 'alisson.becker@liverpool.fc'
      },
      {
        id: 2,
        name: 'Dejan Lovren',
        email: 'dejan.lovren@liverpool.fc'
      },
      {
        id: 3,
        name: 'Virgil Van Dijk',
        email: 'virgil.vandijk@liverpool.fc'
      },
      {
        id: 4,
        name: 'Andy Robertson',
        email: 'andy.robertson@liverpool.fc'
      },
      {
        id: 5,
        name: 'Trent Alexander Arnold',
        email: 'taa@liverpool.fc'
      },
      {
        id: 6,
        name: 'James Milner',
        email: 'boring.james@liverpool.fc'
      },
      {
        id: 7,
        name: 'Naby Keita',
        email: 'naby.keita@liverpool.fc'
      },
      {
        id: 8,
        name: 'Sadio Mane',
        email: 'sadio.mane@liverpool.fc'
      },
      {
        id: 9,
        name: 'Mohamed Salah',
        email: 'egyptian.messi@liverpool.fc'
      },
      {
        id: 10,
        name: 'Roberto Firmino',
        email: 'bobby@liverpool.fc'
      },
      {
        id: 11,
        name: 'Fabinho',
        email: 'fabiho@liverpool.fc'
      },
    ];

    init();

    function init() {
      vm.userInput = '';
      vm.userComment = '';
      vm.selectedUsers = [];
      vm.availableUsers = users;

      // show dropdown menu?
      vm.showSelector = false;
    }

    // helper function to get names of the selected users in one string
    function getAllNames(users) {
      var allNames = '';
      for (var i = 0; i < users.length; i++) {
        allNames += users[i].name;
        if (i != users.length - 1) {
          allNames += ', ';
        }
      }
      return allNames;
    }
    
    vm.onBlur = function() {
      // because ng-blur fires before ng-click, using timeout so the clicks
      // can be registered before items are hidden 
      $timeout(function(){
         vm.showSelector = false;
      }, 100);
    };

    // add user to the array of selected users
    vm.addUser = function(user, index) {
      vm.selectedUsers.push(user);
      vm.userInput = '';
    };

    // remove selected user
    vm.removeUser = function(index) {
      var removed = vm.selectedUsers.splice(index, 1);
    }

    // check if user is already selected
    // if true, don't display it in the dropdown menu
    vm.alreadyAdded = function(user) {
      if (vm.selectedUsers.includes(user)) {
        return true;
      } else {
        return false;
      }
    };

    // called when user clicks 'Share' button
    // show message and reset state
    vm.submitForm = function() {
      var msg = 'Shared "' + vm.userComment +  '" with ' + getAllNames(vm.selectedUsers) + '.';
      console.log(msg);
      alert(msg);
      init();
    };
  }