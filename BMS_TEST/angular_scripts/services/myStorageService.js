TMDb.service('myStorageService', ['$http', 'localStorageService', function ($http, localStorageService) {

    //////////////myStorageService.setMyStorage(key,val);
    //////////////myStorageService.getMyStorage(key);
    //////////////myStorageService.removeMyStorage(key);



    var myStorageAll = localStorageService.get('myStorage');
    if (myStorageAll == null) {
        var myStorageAll = {};
        myStorageAll['0'] = 'defaultObj';
        localStorageService.set('myStorage', myStorageAll);
        myStorageAll = localStorageService.get('myStorage');
    }

    this.setMyStorage = function(KeyName, KeyVal) {
        myStorageAll[KeyName] = KeyVal;
        localStorageService.set('myStorage', myStorageAll);
        return true;
    }

    this.getMyStorage = function(keyName) {
        myStorageAll = localStorageService.get('myStorage');
        return myStorageAll[keyName];

    }

    this.removeMyStorage = function(keyName) {
        myStorageAll = localStorageService.get('myStorage');

        if (myStorageAll[keyName]) //found
        {
            delete myStorageAll[keyName];
            localStorageService.set('myStorage', myStorageAll);
        }
        return true;

    }




    this.setCookie = function(KeyName, KeyVal) {
        // alert('Cookie Supported' + localStorageService.cookie.set(KeyName, KeyVal, 1));
        localStorageService.cookie.set(KeyName, KeyVal, 1); //expires in one day 
        // localStorageService.cookie.set('I am a key', 'I am Value');

    }

    this.getCookie = function(KeyName) {
        return localStorageService.cookie.get(KeyName);
    }

    this.removeCookie = function(KeyName) {
        return localStorageService.cookie.remove(KeyName);
    }





}]);