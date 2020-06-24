"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        name: 'otaviopetry',
        email: 'otaviopetry@gmail.com',
        password: 'awesome',
        techs: [
            'HTML5',
            'CSS3',
            'Sass/Scss',
            {
                title: 'JavaScript',
                expertise: 30
            },
            {
                title: 'Node.js',
                expertise: 15
            },
            {
                title: 'React',
                expertise: 10
            }
        ]
    });
    return response.json({ message: 'Hello dude :D', user: user });
}
exports.helloWorld = helloWorld;
