const express = require('express');
const morgan = require('morgan');
require('./config/db')
const app = express();

// import routes
const certificationRoutes = require('./routes/certification.routes');
const educationRoutes = require('./routes/education.routes');
const experienceRoutes = require('./routes/experience.routes');
const habilityRoutes = require('./routes/hability.routes');
const projectRoutes = require('./routes/project.routes');
const referenceRoutes = require('./routes/reference.routes');
const socialMediaRoutes = require('./routes/socialMedia.routes');
const userRoutes = require('./routes/user.routes');


// middlewares
app.use(express.json());
app.use(morgan('dev'));


// routes
app.use('/api/certifications', certificationRoutes);
app.use('/api/educations', educationRoutes);
app.use('/api/experiences', experienceRoutes);
app.use('/api/habilities', habilityRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/references', referenceRoutes);
app.use('/api/social-medias', socialMediaRoutes);
app.use('/api/users', userRoutes);


module.exports = app;