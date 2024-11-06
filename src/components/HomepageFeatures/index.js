import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>Integration</Translate>,
    Svg: require('@site/static/img/icons8-puzzle-matching.svg').default,
    description: (
      <> <Translate>
        The Sustainable Development Goals (SDGs) take a comprehensive approach by recognizing the interconnectedness of social, economic, and environmental aspects, promoting simultaneous progress across multiple goals.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Universality</Translate>,
    Svg: require('@site/static/img/icons8-globe.svg').default,
    description: (
      <><Translate>
        The SDGs apply to all countries, irrespective of their conditions, fostering global cooperation and collective action towards common challenges.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Leave No One behind</Translate>,
    Svg: require('@site/static/img/Leave-No-One-Behind.svg').default,
    description: (
      <>
        <Translate>
        The SDGs prioritize inclusivity, ensuring that development efforts reach marginalized and vulnerable populations, aiming to reduce inequalities and create a fairer society.
        </Translate>
        </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
