const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  postRection,
  removeReaction,
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

// Set up POST and DELETE Routes for reactions
// prettier-ignore
router
  .route('/:thoughtId/reactions')
  .post(postRection)

// prettier-ignore
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction)

module.exports = router;
