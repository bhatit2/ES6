const path = require('path');

module.exports = (env) => {
    return {
        entry : "./src/object-spread-operator.js",
        output : {
            path : path.join(__dirname, 'public'),
            filename : 'bundle.js'
        },
        module : {
            rules : [{
                loader : 'babel-loader',
                test : /\.js$/,
                exclude : /node_modules/
            }
            ]
    }
}
}