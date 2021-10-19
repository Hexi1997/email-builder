import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import { useHistory, Switch, Route } from 'react-router-dom';
import { IProjectObj, getProjects } from '../../service/project';

import styles from './Dashboard.module.less';
import { Projects } from './Projects';
import { Templates } from './Templates';

interface DashboardProps {
  className?: string;
}

export function Dashboard(props: DashboardProps) {
  const { className } = props;
  const history = useHistory();
  const [activeKey, setActiveKey] = useState<'projects' | 'templates'>(
    'projects'
  );

  return (
    <div className={cn(styles.Dashboard, className)}>
      <div className={cn(styles.nav)}>
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link
              active={activeKey === 'projects'}
              onClick={() => {
                setActiveKey('projects');
                history.push('/dashboard/projects');
              }}
              href="">
              Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={activeKey === 'templates'}
              onClick={() => {
                setActiveKey('templates');
                history.push('/dashboard/templates');
              }}>
              Templates
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className={styles.content}>
        <Switch>
          <Route path="/dashboard/projects">
            <Projects />
          </Route>
          <Route path="/dashboard/templates">
            <Templates />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
