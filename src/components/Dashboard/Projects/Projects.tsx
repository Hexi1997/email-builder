import cn from 'classnames';
import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { getProjects, IProjectObj } from '../../../service/project';

import styles from './Projects.module.less';

interface ProjectsProps {
  className?: string;
}

export function Projects(props: ProjectsProps) {
  const { className } = props;
  const [projects, setProjects] = useState<IProjectObj>();
  useEffect(() => {
    setProjects(getProjects() as IProjectObj);
  }, [setProjects]);

  return (
    <div className={cn(styles.Projects, className)}>
      <div className={cn(styles.header)}>
        <Button>Create Project</Button>
      </div>
      <div className={cn(styles.projectContainer)}>
        {projects &&
          Object.keys(projects).map((key) => {
            return (
              <Card key={key} className={cn(styles.card)}>
                <Card.Body>
                  <Card.Title>{projects[key].title}</Card.Title>
                  <Card.Text>{projects[key].desc}</Card.Text>
                  <div className={styles.buttonArea}>
                    <Button variant="primary">Open</Button>
                    <Button variant="secondary">Delete</Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </div>
  );
}
