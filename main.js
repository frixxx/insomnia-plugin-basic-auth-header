
module.exports.templateTags = [{
    name: 'basicAuthHeader',
    displayName: 'Basic Auth Header',
    description: 'creates a basic auth header string by  username and password.',
    args: [
        {
            displayName: 'Username',
            type: 'string',
            placeholder: 'My Username',
        },
        {
            displayName: 'Password',
            type: 'string',
            placeholder: 'My Password',
        }
    ],
    async run (context, username, password) {
        return "Basic " + btoa(username + ":" + password);
    }
}];