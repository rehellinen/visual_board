/**
 *  lines.js
 *  Create By rehellinen
 *  Create On 2018/11/28 14:34
 */
import * as d3 from 'd3'

export class Lines {
  constructor (conf) {
    this.initConf(conf)
    this.initSvg()
  }

  drawByData(data) {
    this.data = data
    const g = this.svg.append('g')
    // 生成主折线
    g.append('path')
      .attr('d', this.lineGenerator()(data))
      .attr('transform', `translate(${this.margin}, ${this.margin})`)
      .attr('id', 'line-main')
    // 生成坐标轴
    this.generateAxis(g)
  }

  generateAxis (g) {
    const x_axis = d3.axisBottom(this.scaleX(this.data))
    const y_axis = d3.axisLeft(this.scaleY(this.data))

    g.append('g')
      .call(x_axis)
      .attr('transform', `translate(${this.margin}, ${this.g_height + this.margin * 1.15})`)
    g.append('g')
      .call(y_axis)
      .attr('transform', `translate(${this.margin * 0.85}, ${this.margin})`)
  }

  lineGenerator () {
    return d3.line()
      .x((d, i) => this.scaleX()(i))
      .y(d => this.scaleY()(d))
  }

  scaleX () {
    return d3.scaleLinear()
      .domain([0, this.data.length - 1])
      .range([0, this.g_width])
  }

  scaleY () {
    return d3.scaleLinear()
      .domain([0, d3.max(this.data)])
      .range([this.g_height, 0])
  }

  initSvg () {
    this.svg = d3.select(`#${this.id}`)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
  }

  initConf (conf) {
    // 默认配置
    const defaultConf = {
      width: 500,
      height: 200,
      margin: 30,
      id: 'line'
    }
    Object.keys(defaultConf).forEach(key => {
      this[key] = defaultConf[key]
    })
    // 遍历传进来的配置
    if (conf) {
      Object.keys(defaultConf).forEach(key => {
        if (conf.hasOwnProperty(key)) this[key] = conf[key]
      })
    }
    // 主体折线的宽高
    this.g_width = this.width - this.margin * 2
    this.g_height = this.height - this.margin * 2
  }
}
