import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShiroJobs from '../views/ShiroJobs.vue'
import LeagueRanking from '../views/LeagueRanking.vue'
import ProgrammingPortfolio from '../views/ProgrammingPortfolio.vue'
import GamingPortfolio from '../views/GamingPortfolio.vue'
import LeagueGuides from '../views/LeagueGuides.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/lol/services',
      name: 'shirojobs',
      component: ShiroJobs,
    },
    {
      path: '/lol/ranking',
      name: 'ranking',
      component: LeagueRanking,
    },
    {
      path: '/lol/guides',
      name: 'guides',
      component: LeagueGuides,
    },
    {
      path: '/storyline/portfolio',
      name: 'programming',
      component: ProgrammingPortfolio,
    },
    {
      path: '/storyline/gaming',
      name: 'gaming',
      component: GamingPortfolio,
    },
  ],
})

export default router
