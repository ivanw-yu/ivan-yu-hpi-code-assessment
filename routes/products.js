const router = require('express').Router();
const dataFile = '../test_data.json';
const authenticate = require('../middlewares/authenticate');
const jsonFile = require('jsonfile');


router.get('/', authenticate, (req, res) => {
    jsonFile.readFile('test_data.json', function (err, obj) {
      if(err){
        res.status(500).send({success:false})
      }
      const {sort, ascending} = req.query;
      let {page} = req.query;
      page = page && !isNaN(Number(page)) ? Number(page) : 1;
      const {data} = obj;
      const multiplier = ascending === 'true' ? -1:1;
      const perItem = 25;
      const type = typeof data[0][sort];

      let sortFunction;
      switch(sort){
        case "created_at":
          sortFunction = (a,b) => {
            return (new Date(b.created_at) - new Date(a.created_at)) *multiplier;
          }
          break;
        case "price":
          sortFunction = (a,b) => (multiplier * (a.price-b.price));
          break;
        default:
          sortFunction = (a,b) => {
              a=a.title.toLowerCase();
              b=b.title.toLowerCase();
              if(a<b)
                return multiplier * 1;
              if(a>b)
                return multiplier * -1;
              return 0;
          }
      }

      data.sort(sortFunction);
      const startIndex = perItem * (page-1);
      res.send({length: data.length, page, startIndex, products:data.slice()});
    })
});

router.get('/:id', authenticate, (req,res) => {
  jsonFile.readFile('test_data.json', function (err, obj) {
    if(err){
      res.status(500).send({success:false})
    }
    const {id} = req.params;
    const {data} = obj;
    const query = data.filter(e=>e.product_id===id);

    if(query.length === 0)
      return res.status(404).send({success: false, message: "404 Not Found"});

    res.send({success:true, product: query[0]});

  });
});

module.exports = router;
