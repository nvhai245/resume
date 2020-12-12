import React from 'react';
import Grid from "@material-ui/core/Grid";
import ProjectCard from "./ProjectCard";
import Typography from "@material-ui/core/Typography";

function SideProjects({projects}) {
    return (
        <div>
            <Typography variant="h3" gutterBottom style={{ color: "white", textAlign: "center" }}>
                My Projects
            </Typography>
            <Grid container spacing={3} className="skill-set">
                {projects.map(project =>
                    <Grid item xs={4}>
                        <ProjectCard projectName={project.projectName} projectInfo={project.projectInfo} projectSrc={project.projectSrc} />
                    </Grid>
                )}
            </Grid>
        </div>
    );
}

export default SideProjects;