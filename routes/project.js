const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');


router.get('/:id', (req, res) => {
    const { id } = req.params;
    const projectName = projects[id].project_name;
    const projectDescription = projects[id].description;
    const projectTechnologies = projects[id].technologies;
    const projectImages = projects[id].image_urls;
    const templateData = { id, projectName, projectDescription, projectTechnologies, projectImages};
    console.log(id);
    console.log(projects);
    res.render('project', templateData);
});



module.exports = router;