import Navigation from './presentational/Navigation'
import NoMatch from './presentational/NoMatch'
import Home from './Containers/Home.js';
import AbcNews from './Containers/ABC-News.js';
import BBCNews from './Containers/BBC-News.js';
import CBCNews from './Containers/CBC-News.js';
import MoneyNews from './Containers/Money-News.js';
import SportNews from './Containers/Sport-News.js';
import NBCNews from './Containers/NBC-News.js';
import Neewsweek from './Containers/Neewsweek-News.js';
import PolicyNews from './Containers/Policy-News.js';
import USANews from './Containers/USA-News.js';
import Detail from './presentational/Details.js';

const routes = [
  {
    path: '/AbcNews',
    exact: true,
    component: AbcNews
  },
  {
    path: '/BBC_News',
    exact: true,
    component: BBCNews
  },
  {
    path: '/CBC_News',
    exact: true,
    component: CBCNews
  },
  {
    path: '/Money_News',
    exact: true,
    component: MoneyNews
  },
  {
    path: '/Sport',
    exact: true,
    component: SportNews
  },
  {
    path: '/NBC_News',
    exact: true,
    component: NBCNews
  },
  {
    path: '/Neewsweek',
    exact: true,
    component: Neewsweek
  },
  {
    path: '/Policy',
    exact: true,
    component: PolicyNews
  },
  {
    path: '/UsaToday',
    exact: true,
    component: USANews
  },
  {
    path: '/:page/:title',
    exact: true,
    component: Detail
  }
]

export default routes
