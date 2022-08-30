const router = require('express').Router();

const { Router } = require('express');
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addFriend,
  removeFriend,
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/users
// prettier-ignore
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// Set up GET one, PUT, and DELETE at /api/users/:id
// prettier-ignore
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// prettier-ignore
router
.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend)

module.exports = router;
