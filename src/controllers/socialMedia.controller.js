const SocialMedia = require('../models/socialMedia');

const listSocialMedias = async (req, res) => {
    try {
        const socialMedias = await SocialMedia.query();

        res.json(socialMedias);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch social medias' });
    }
};

const insertSocialMedia = async (req, res) => {
    try {
        const { user_id, platform, url } = req.body;    
        const newSocialMedia = await SocialMedia.query().insert({
            user_id,
            platform,
            url
        });

        res.status(201).json(newSocialMedia);
    }   
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create social media' });
    }
};

const updateSocialMedia = async (req, res) => {
    try {
        const { id } = req.params;
        const { platform, url } = req.body;
        const result = await SocialMedia.query().patchAndFetchById(id, {
            platform,
            url
        });

        if (!result) {
            res.json({ message: 'Social media updated successfully' });
        }

        res.json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update social media' });
    }

};

const deleteSocialMedia = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await SocialMedia.query().deleteById(id);

        if (result == 0) {
            res.status(404).json({ error: 'Social media not found' });
        }
        
        res.json({ message: 'Social media deleted successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete social media' });
    }
};

const getSocialMediaById = async (req, res) => {
    try {
        const { id } = req.params;
        const socialMedia = await SocialMedia.query().findById(id);

        if (!socialMedia) {
            return res.status(404).json({ error: 'Social media not found' });
        }

        res.json(socialMedia);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch social media' });
    }
};

module.exports = {
    listSocialMedias,
    insertSocialMedia,
    updateSocialMedia,
    deleteSocialMedia,
    getSocialMediaById
};