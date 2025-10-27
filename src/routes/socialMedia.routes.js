const express = require('express');
const router = express.Router();
const socialMediaController = require('../controllers/socialMedia.controller');

router.get('/', socialMediaController.listSocialMedias);
router.post('/', socialMediaController.insertSocialMedia);
router.get('/:id', socialMediaController.getSocialMediaById);
router.patch('/:id', socialMediaController.updateSocialMedia);
router.delete('/:id', socialMediaController.deleteSocialMedia);