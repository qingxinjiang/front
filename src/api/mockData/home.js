// get请求从config.url获取参数，post从config.body中获取参数
function param2Obj(url) {
    const search = url.split('?')[1]
    if (!search) {
        return {}
    }
    return JSON.parse(
        '{"' +
        decodeURIComponent(search)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"') +
        '"}'
    )
}

let CompetitionList = [
    {
        id: 1,
        image: 'Competition1',
        name: '全国大学生编程大赛',
        category: '软件编程',
        registrants: '3',
    },
    {
        id: 2,
        image: 'Competition2',
        name: '全国大学生英语大赛',
        category: '英语',
        registrants: '2',
    },
    {
        id: 3,
        image: 'Competition3',
        name: '全国大学生物理大赛',
        category: '物理',
        registrants: '1',
    },
    {
        id: 4,
        image: 'Competition4',
        name: '全国大学生学科大赛',
        category: '电子科技',
        registrants: '1',
    },
    {
        id: 1,
        image: 'Competition1',
        name: '全国大学生编程大赛',
        category: '软件编程',
        registrants: '3',
    },
    {
        id: 2,
        image: 'Competition2',
        name: '全国大学生英语大赛',
        category: '英语',
        registrants: '2',
    },
    {
        id: 3,
        image: 'Competition3',
        name: '全国大学生物理大赛',
        category: '物理',
        registrants: '1',
    },
    {
        id: 4,
        image: 'Competition4',
        name: '全国大学生学科大赛',
        category: '电子科技',
        registrants: '1',
    },
    {
        id: 1,
        image: 'Competition1',
        name: '全国大学生编程大赛',
        category: '软件编程',
        registrants: '3',
    },
    {
        id: 2,
        image: 'Competition2',
        name: '全国大学生英语大赛',
        category: '英语',
        registrants: '2',
    },
    {
        id: 3,
        image: 'Competition3',
        name: '全国大学生物理大赛',
        category: '物理',
        registrants: '1',
    },
    {
        id: 4,
        image: 'Competition4',
        name: '全国大学生学科大赛',
        category: '电子科技',
        registrants: '1',
    },
]

let UserSignList = [
    {
        name: '全国大学编程竞赛',
        username: '小王',
        phone: '12345678912',
        certificate: 'Competition1',
        statu: '待审核',
        opinion: '',
        time: '2025-05-13 10:38:54',
        control: '',
        link: '',
    },
    {
        name: '全国大学学科竞赛',
        username: '小王',
        phone: '12345678912',
        certificate: '',
        statu: '待审核',
        opinion: '',
        time: '',
        control: '',
        link: '',
    },
    {
        name: '全国大学英语竞赛',
        username: '小王',
        phone: '12345678912',
        certificate: '',
        statu: '通过',
        opinion: '',
        time: '',
        control: '',
        link: '',
    },
]

let EventResult = [
    {
        name: '全国大学生编程大赛',
        username: '小王',
        award: '二等奖',
        time: '2025-06-01',
        address: '合肥市科技馆',
        phone: '12345678912',
        statu: '已获奖',
    },
    {
        name: '全国大学生英语竞赛',
        username: '小王',
        award: '一等奖',
        time: '2025-05-08',
        address: '合肥市天鹅湖1110号',
        phone: '12345678912',
        statu: '已获奖',
    },
    {
        name: '全国大学生数学竞赛',
        username: '小张',
        award: '一等奖',
        time: '2025-05-03',
        address: '合肥市科技馆',
        phone: '12345678912',
        statu: '已获奖',
    },
]

export default {
    // getCompetitionData: () => {
    //     return {
    //         code: 200,
    //         data: {
    //             competitionData: [
    //                 {
    //                     image: 'Competition1',
    //                     name: '全国大学生编程大赛',
    //                     category: '软件编程',
    //                     registrants: '3',
    //                 },
    //                 {
    //                     image: 'Competition2',
    //                     name: '全国大学生英语大赛',
    //                     category: '英语',
    //                     registrants: '2',
    //                 },
    //                 {
    //                     image: 'Competition3',
    //                     name: '全国大学生物理大赛',
    //                     category: '物理',
    //                     registrants: '1',
    //                 },
    //                 {
    //                     image: 'Competition4',
    //                     name: '全国大学生学科大赛',
    //                     category: '电子科技',
    //                     registrants: '1',
    //                 },
    //             ]
    //         }
    //     }
    // }

    getCompetitionData: config => {
        const { name, page = 1, limit = 8, sort = false, category = "" } = param2Obj(config.url)
        let mockList = CompetitionList.filter(user => {
            if (name && user.name.indexOf(name) === -1) return false
            return true
        })
        // 排序
        if (sort) {
            mockList = mockList.slice().sort((a, b) => b.registrants - a.registrants)
        }
        // 分类
        if (category != "") {
            mockList = mockList.filter(user => user.category === category)
        }
        // 分页
        const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
        return {
            code: 200,
            data: {
                competitionData: pageList,
                count: mockList.length
            }
        }
    },
    getUserSignData: config => {
        const { name, page = 1, limit = 5, del = -1 } = param2Obj(config.url)
        // 删除
        if (del != -1) {
            UserSignList = UserSignList.splice(del, 1)
        }
        let mockUserSign = UserSignList.filter(user => {
            if (name && user.name.indexOf(name) === -1) return false
            return true
        })
        // 分页
        const pageUserSign = mockUserSign.filter((item, index) => index < limit * page && index >= limit * (page - 1))
        return {
            code: 200,
            data: {
                userSignData: pageUserSign,
                count: mockUserSign.length
            }
        }
    },
    getEventResult: config => {
        const { name, page = 1, limit = 5, del = -1 } = param2Obj(config.url)
        // 分页
        const pageEvent = EventResult.filter((item, index) => index < limit * page && index >= limit * (page - 1))
        return {
            code: 200,
            data: {
                eventResult: pageEvent,
                count: EventResult.length
            }
        }
    }
}