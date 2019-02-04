const production = false;
module.exports = {
  url: production ? null :'mongodb://localhost:27017/products'
}
