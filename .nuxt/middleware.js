const middleware = {}

middleware['source'] = require('..\\middleware\\source.js')
middleware['source'] = middleware['source'].default || middleware['source']

export default middleware
