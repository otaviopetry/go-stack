const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'               
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                // Regular Expression (RegExp): 
                // .* -> 'pode haver qualquer quantidade de caracteres no nome da imagem
                // \. -> escapa o ponto para ele ser considerado parte da string
                // (gif|png|jpe?g) -> o ponto de interrogação determina que o 'e' é opcional: jpg ou jpeg
                // $ -> a extensão deve terminar ali
                // i depois da barra final -> CASE INSENSITIVE

                test: /.*\.(gif|png|jpe?g)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    }
}