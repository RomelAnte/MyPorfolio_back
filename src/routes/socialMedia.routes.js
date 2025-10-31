const express = require('express');
const router = express.Router();
const socialMediaController = require('../controllers/socialMedia.controller');
const validate = require('../validators/validate');
const socialMediaSchema = require('../validators/socialMedia.validator');

router.get('/', socialMediaController.listSocialMedias);
router.post('/', validate(socialMediaSchema), socialMediaController.insertSocialMedia);
router.get('/:id', socialMediaController.getSocialMediaById);
router.patch('/:id', validate(socialMediaSchema), socialMediaController.updateSocialMedia);
router.delete('/:id', socialMediaController.deleteSocialMedia);

module.exports = router;