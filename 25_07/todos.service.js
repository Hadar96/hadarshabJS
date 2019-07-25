app.constant("urlService", {
    posts: 'https://jsonplaceholder.typicode.com/posts',
    users: 'https://jsonplaceholder.typicode.com/users',
    photos: 'https://jsonplaceholder.typicode.com/photos?albumId=1'
});

app.service('todosService', function ($http, urlService) {
    this.getPosts = function (id = '') {
        return $http.get(`${urlService.posts}/${id}`)
            .then(function (res) {
                return res.data;
            }, (err) => {
                throw err;
            });
    }

    this.getUsers = function (id = '') {
        return $http.get(`${urlService.users}/${id}`)
            .then((res) => {
                return res.data;
            }, (err) => {
                throw err;
            });
    }

    this.getPhotos = function () {
        return $http.get(urlService.photos)
            .then((res) => {
                return res.data;
            }, (err) => {
                throw err;
            });
    }
});