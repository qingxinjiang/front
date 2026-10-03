/**
 * 整个项目api的统一管理
 */
import request from "./request";

export default {
    //请求竞赛数据
    getCompetitionData(data) {
        return request({
            url: '/api/home/getCompetitionData',
            method: 'get',
            data,
        });
    },
    // 请求用户报名数据
    getUserSignData(data) {
        return request({
            url: '/api/home/getUserSignData',
            method: 'get',
            data,
        })
    },
    // 请求赛事获奖结果
    getEventResult(data) {
        return request({
            url: '/api/home/getEventResult',
            method: 'get',
            data,
        });
    }
}