const production = true;
module.exports = {
  url: production ? 'mongodb://ivan:123abc@ds121475.mlab.com:21475/products-hpi' :'mongodb://localhost:27017/products'
}
