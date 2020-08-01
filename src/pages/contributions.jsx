import React from "react"
import {Layout} from '../components/layout';
import styles from "./contributions.module.scss"
import {ButtonBase} from "@material-ui/core"
import SEO from "../components/seo"

const oss_libraries = [
  {
    type: 'React Native',
    name: 'Immersive bars',
    description: 'Allows apps to draw their content behind transparent system bars on Android',
    github: "https://github.com/oceanbit-dev/react-native-immersive-bars"
  },
  {
    type: 'React Native',
    name: 'Button Toggle Group',
    description: 'An animated button toggle group for React Native',
    github: "https://github.com/oceanbit-dev/react-native-button-toggle-group"
  },
  {
    type: 'React Native',
    name: 'Directory picker',
    description: 'Allows apps to access Android and iOS’ file pickers',
    github: "https://github.com/oceanbit-dev/react-native-directory-picker"
  },
  {
    type: 'React Native, Web',
    name: 'Seaside',
    description: 'Our open-source design system',
    github: "https://github.com/oceanbit-dev/seaside"
  },
]

const weSponsor = [
  {
    type: 'JavaScript',
    name: 'Isomorphic Git',
    description: 'A pure JavaScript implementation of git for node and browsers!',
    github: "https://github.com/isomorphic-git/isomorphic-git"
  }
]

const weContribute = [
  {
    type: 'JavaScript',
    name: 'Isomorphic Git',
    description: 'A pure JavaScript implementation of git for node and browsers!',
    github: "https://github.com/isomorphic-git/isomorphic-git"
  }
]

const ContributionsPage = () => {
  return (
    <Layout title="Contributions">
      <SEO
        title={'Contributions'}
        meta={[
          {
            property: `og:type`,
            content: `website`,
          },
        ]}
      />
      <div className="mainContents">
        <h1 className={styles.header} id="ossLibHead">Open-source libraries</h1>
        <ul className={styles.cardList} aria-describedby="ossLibHead">
          {
            oss_libraries.map(lib => (
              <li className={styles.card} key={lib.name}>
                <h4 className={styles.cardTitle}>{lib.name}</h4>
                <p className={styles.cardType}>{lib.type}</p>
                <p className={styles.cardDesc}>{lib.description}</p>
                <ButtonBase className={styles.cardLink}>
                  <a href={lib.github}>View on GitHub</a>
                </ButtonBase>
              </li>
            ))
          }
        </ul>
        <h1 className={styles.header} id="weContribToHead">We contribute to</h1>
        <ul className={styles.cardList} aria-describedby="weContribToHead">
          {
            weContribute.map(lib => (
              <li className={styles.card} key={lib.name}>
                <h4 className={styles.cardTitle}>{lib.name}</h4>
                <p className={styles.cardType}>{lib.type}</p>
                <p className={styles.cardDesc}>{lib.description}</p>
                <ButtonBase className={styles.cardLink}>
                  <a href={lib.github}>View on GitHub</a>
                </ButtonBase>
              </li>
            ))
          }
        </ul>
        <h1 className={styles.header} id="weSponsorHead">We sponsor</h1>
        <ul className={styles.cardList} aria-describedby="weSponsorHead">
          {
            weSponsor.map(lib => (
              <li className={styles.card} key={lib.name}>
                <h4 className={styles.cardTitle}>{lib.name}</h4>
                <p className={styles.cardType}>{lib.type}</p>
                <p className={styles.cardDesc}>{lib.description}</p>
                <ButtonBase className={styles.cardLink}>
                  <a href={lib.github}>View on GitHub</a>
                </ButtonBase>
              </li>
            ))
          }
        </ul>
      </div>
    </Layout>
  )
}

export default ContributionsPage
