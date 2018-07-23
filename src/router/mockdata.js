/**
 * mockjs 模拟数据
 */

import Mock from 'mockjs'

const Random = Mock.Random;

export default Mock.mock('msg', getData);

function getData() {
  let lists = [];

    for (let i = 0; i < 10; i++) {

        let tmpArr = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            checked: Random.boolean()
        }

        lists.push(tmpArr);
    }

    return {
        lists: lists
    }

}