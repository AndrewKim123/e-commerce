const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  const data = await Category.findAll({include:Product});
  res.json(data)
});

router.get('/:id',async (req, res) => {
  const data = await Category.findAll({where:{id:req.params.id},include:Product});
  res.json(data)
});

router.post('/', async(req, res) => {
  const data = await Category.create({...req.body});
  res.json(data)
});

router.put('/:id', async(req, res) => {
  const data = await Category.update({...req.body},{
    where:{
      id:req.params.id
    }
  })

  res.json(data)
});

router.delete('/:id', async(req, res) => {
  const data = await Category.destroy({
    where:{
      id:req.params.id
    }
  })
  res.json(data)
});

module.exports = router;
