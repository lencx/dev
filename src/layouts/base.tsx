import React from 'react';
import clsx from 'clsx';
import { navigate, useStaticQuery, graphql } from 'gatsby';
import { Icon } from '@iconify/react/dist/offline';
import iconGh from '@iconify-icons/carbon/logo-github';

import Logo from '@comps/logo';
import ThemeSwitch from '@comps/theme_switch';
import '@styles/layout.scss';

interface LayoutProps {
  className?: string;
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          repo
          title
          description
        }
      }
    }
  `);

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoRepo = () => {
    window.open(data.site.siteMetadata.repo, '_blank');
  };

  return (
    <div className={clsx('dev-container', props.className)}>
      <header>
        <Logo onClick={handleGoHome} color="var(--dev-logo)" />
        <div>
          <ThemeSwitch />{' '}
          <Icon
            className="icon-action"
            icon={iconGh}
            fontSize="20"
            color="var(--icon)"
            onClick={handleGoRepo}
          />
        </div>
      </header>
      <main>
        <div className="content">{props.children}</div>
      </main>
      <footer>
        <a
          rel="license"
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
        >
          <img
            style={{ width: 60, height: 21 }}
            src={require('@icons/license.svg').default}
            alt="License"
          />
        </a>{' '}
        Copyright © 2022-present lencx
      </footer>
    </div>
  );
}
