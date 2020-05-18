export default class ResponseUtil {

    static normalize = (list) => {
        var allIds = []
        var byId = {}

        if(Array.isArray(list)) {
            let normalizable = list.filter(item => item.id)
            allIds = buildAllIds(normalizable)
            byId = buildById(normalizable)
        }

        return {
            byId: byId,
            allIds: allIds
        }
    }
}

function buildAllIds(list) {
    return list.map(item => {
        return item.id
    })
}

function buildById(list) {
    return list.reduce(function(map, item) {
        map[item.id] = item
        return map
    }, {})
}
