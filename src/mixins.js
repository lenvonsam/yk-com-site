import axios from 'axios'
import Qs from 'qs'
const DOMAINURL = 'http://wechat.xingyun361.com/quasarserverdev'
// const DOMAINURL = 'http://192.168.20.149:8080/quasarserverdev'
const BASICURL = DOMAINURL + '/common/proxy'
function formatNumber (n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function serializeformQuery (requestParams, encode = false) {
  let query = ''
  for (let param in requestParams) {
    if (param !== undefined && param !== '') {
      query +=
        param +
        '=' +
        (encode
          ? encodeURIComponent(requestParams[param])
          : requestParams[param]) +
        '&'
    }
  }
  if (query !== '') {
    query = query.substring(0, query.length - 1)
  }
  return query
}
export default {
  methods: {
    jump (to) {
      if (this.$router) {
        this.$router.push(to)
      }
    },
    back () {
      if (this.$router) {
        this.$router.go(-1)
      }
    },
    currentArray (currentIndex, pageSize, totalArray) {
      let lastIndex = pageSize + currentIndex - 1
      console.log(lastIndex)
      let newArray = []
      let i = 0
      if (lastIndex < totalArray.length - 1) {
        for (i = currentIndex; i <= lastIndex; i++) {
          newArray.push(totalArray[i])
        }
      } else {
        for (i = currentIndex; i < totalArray.length; i++) {
          newArray.push(totalArray[i])
        }
      }
      return newArray
    },
    decodeContentURI (encodeStr) {
      return decodeURI(encodeStr)
    },
    formatDate (dateTime) {
      let date = new Date(dateTime)
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      return [year, month, day].map(formatNumber).join('-')
    },
    request (url, params = {}, method = 'get') {
      let param = serializeformQuery(params)
      let reqBody = {
        reqUrl: url,
        params: param,
        type: method,
        charset: 'utf-8'
      }
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: BASICURL,
          params: reqBody,
          paramsSerializer: params => {
            return Qs.stringify(params, { arrayFormat: 'brackets' })
          }
        })
          .then(resp => {
            if (resp.status === 200) {
              resolve(resp.data)
            } else {
              reject(
                resp === undefined
                  ? new Error('网络通信异常')
                  : new Error(resp.data.message)
              )
            }
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}
