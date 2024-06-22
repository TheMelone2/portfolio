const express = require('express');
const projectsData = require('../_data/projects.json');

const app = express();
const port = 3000;

app.get('/api/projects', (req, res) => {
    const publishedProjects = projectsData.filter(project => project.published);
    res.json(publishedProjects);
});

app.listen(port, () => {
    console.log(`API server is running on port ${port}`);
});