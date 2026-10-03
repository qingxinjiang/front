import Mock from 'mockjs'
import homeApi from './mockData/home'

Mock.mock(/api\/home\/getCompetitionData/,"get",homeApi.getCompetitionData);
Mock.mock(/api\/home\/getUserSignData/,"get",homeApi.getUserSignData);
Mock.mock(/api\/home\/getEventResult/,"get",homeApi.getEventResult);