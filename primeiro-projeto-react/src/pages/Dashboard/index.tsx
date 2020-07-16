import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo-github-explorer.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite sua busca" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/55718618?s=460&u=4a2cd153a684ad1aa997b7ee48d546c267448c75&v=4"
            alt="teste"
          />

          <div>
            <strong>otaviopetry/pomar-app</strong>
            <p>
              Pomar is a mobile application to help individuals record and share
              their Book Reading Journey with their community.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/55718618?s=460&u=4a2cd153a684ad1aa997b7ee48d546c267448c75&v=4"
            alt="teste"
          />

          <div>
            <strong>otaviopetry/pomar-app</strong>
            <p>
              Pomar is a mobile application to help individuals record and share
              their Book Reading Journey with their community.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/55718618?s=460&u=4a2cd153a684ad1aa997b7ee48d546c267448c75&v=4"
            alt="teste"
          />

          <div>
            <strong>otaviopetry/pomar-app</strong>
            <p>
              Pomar is a mobile application to help individuals record and share
              their Book Reading Journey with their community.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/55718618?s=460&u=4a2cd153a684ad1aa997b7ee48d546c267448c75&v=4"
            alt="teste"
          />

          <div>
            <strong>otaviopetry/pomar-app</strong>
            <p>
              Pomar is a mobile application to help individuals record and share
              their Book Reading Journey with their community.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
