/**
 *  BaseChart.js
 *  Create By rehellinen
 *  Create On 2018/11/28 21:51
 */

export class BaseChart {
  constructor(defaultConf, customConf) {
    this.processDefaultConf(defaultConf)
    this.processCustomConf(defaultConf, customConf)
  }

  processDefaultConf (defaultConf) {
    Object.keys(defaultConf).forEach(key => {
      this[key] = defaultConf[key]
    })
  }

  processCustomConf (defaultConf, customConf) {
    // 遍历用户自定义配置
    if (customConf) {
      Object.keys(defaultConf).forEach(key => {
        if (customConf.hasOwnProperty(key)) this[key] = conf[key]
      })
    }
  }
}
