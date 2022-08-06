const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  const data = await Tag.findAll({include:[
    {
      model:Product,
      as:"product",
      through:{
        attributes:["product_id"]
      }
    }
  ]});
  res.json(data)
});

router.get('/:id', async(req, res) => {
  const data = await Tag.findAll({where:{id:req.params.id},include:[
    {
      model:Product,
      as:"product",
      through:{
        attributes:["product_id"]
      }
    }
  ]});
  res.json(data)
});

router.post('/', async(req, res) => {
  const data = await Tag.create({...req.body});
  res.json(data)
});

router.put('/:id', async(req, res) => {
  const data = await Tag.update({...req.body},{
    where:{
      id:req.params.id
    }
  })

  res.json(data)
});

router.delete('/:id', async(req, res) => {
  const data = await Tag.destroy({
    where:{
      id:req.params.id
    }
  })
  res.json(data)
});

module.exports = router;
