const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const projectName = projects[id].project_name;
    const projectDescription = projects[id].description;
    const liveLink = projects[id].live_link;
    const gitHubLink = projects[id].github_link;
    const projectTechnologies = projects[id].technologies;
    const projectImages = projects[id].image_urls;
    const imageGallery = [];
    for (i=1; i<projectImages.length; i++){
        imageGallery.push(projects[id].image_urls[i]);
    }
    const templateData = { id, projectName, projectDescription, projectTechnologies, imageGallery, gitHubLink, liveLink};
    res.render('project', templateData);
});

module.exports = router;