import React from 'react';
import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import theme from '../../../theme/theme';
import Head from 'next/head';
import SpeakersButton from '../../../components/speakers/SpeakersButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faTwitter, faGithub, faLinkedin);

export default function TaniaAllard() {
  return (
    <Layout>
      <Head>
        <title>Tania Allard</title>
      </Head>
      <Header
        title={'Tania Allard'}
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <SpeakersButton />
        <img
          src="/static/speakers/2021/Tania_Allard.jpg"
          alt="Picture of Tania Allard"
          className="speakerpic"
        />
        <div>
          <ul>
            <b>Pronouns: </b> She/Her
          </ul>
          <ul>
            <b>Talk Length: </b> 60 minute Keynote
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">Title to be confirmed</h2>
        <p tabIndex="0">Description to be confirmed.</p>
      </section>
      <section>
        <h2 tabIndex="0">About Tania</h2>
        <p tabIndex="0">
          <b></b>
        </p>
        <p tabIndex="0">
          Tania is the co-director at Quansight Labs and previous Sr.
          Developer Advocate at Microsoft. She has vast experience in
          academic research and industrial environments. Her main
          areas of expertise are within data-intensive applications,
          scientific computing, and machine learning. Tania has
          conducted extensive work on the improvement of processes,
          reproducibility and transparency in research, data science
          and artificial intelligence. She is passionate about
          mentoring, open source, and its community and is involved in
          a number of initiatives aimed to build more diverse and
          inclusive communities. She is also a contributor,
          maintainer, and developer of a number of open source
          projects and the Founder of Pyladies NorthWest.
        </p>
        <p tabIndex="0">
          In her free time she likes tinkering with electronics,
          nerding with mechanical keyboards, reading all the books and
          lifting heavy weights.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Links</h2>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Tania Allard: Twitter"
            href="https://twitter.com/ixek"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Tania Allard: Website"
            href="https://www.trallard.dev/pensieve/trallard.dev"
          >
            Website
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Tania Allard: LinkedIn"
            href="https://www.linkedin.com/in/taniaallard/"
          >
            LinkedIn
          </a>
        </li>
      </section>

      <style jsx>
        {`
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
          }

          .row:after {
            content: '';
            display: table;
            clear: both;
          }

          .speakerpic {
            margin-top: 8%;
            margin-bottom: 5%;
            width: 250px;
            border-radius: 50%;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }

          .iframe-container {
            position: relative;
            overflow: hidden;
            padding-top: 56.25%;
            margin: 10px 10px;
          }
          .iframe-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
          }
          ul {
            display: flex;
            margin: 0;
            padding: 5px;
            flex-flow: row;
            flex-wrap: nowrap;
            justify-content: center;
          }
          li {
            margin: 0;
            padding: 10px;
            list-style: none;
            list-style-type: none;
            text-align: left;
            flex-basis: 0;
            flex-grow: 1;
          }

          .contactButton {
            align: ${theme.palette.quaternary};
            font-weight: bold;
            font-size: ${theme.font.sizes.mobile.subtitle1};
            flex-grow: 1;
            border-radius: 12px;
            padding: 10px 10px 10px 10px;
            color: ${theme.palette.primary};
            border: 2px solid ${theme.palette.primary};
            background-color: ${theme.palette.light};
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          .contactButton a {
            text-decoration: none;
          }

          .contactButton:hover {
            background-color: ${theme.palette.primary};
          }

          .contactButton a:hover {
            color: ${theme.palette.light};
          }

          @media only screen and (max-width: 1081px) {
            section {
              padding: 3% 12%;
            }
          }
        `}
      </style>
    </Layout>
  );
}
