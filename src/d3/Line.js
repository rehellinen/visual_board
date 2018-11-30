/**
 *  lines.js
 *  Create By rehellinen
 *  Create On 2018/11/28 14:34
 */
import * as d3 from 'd3'
import {BaseChart} from "./BaseChart"
import {Histogram} from "./Histogram"
import {changeSizeByClass, changeTable} from "../utils/dom"

export class Line extends BaseChart{
  constructor (conf) {
    const defaultConf = {
      width: 500,
      height: 200,
      marginX: 60,
      marginY: 30,
      id: 'line'
    }
    super(defaultConf, conf)
    this.init()
    this.initDom()
  }

  draw (data) {
    this.data = data
    const g = this.svg.append('g')
    // 生成主折线
    g.append('path')
      .attr('d', this.areaGenerator()(data))
      .attr('transform', `translate(${this.marginX}, ${this.marginY})`)
      .style('fill', '#edf2fa')
      .style('stroke', '#487bca')
      .style('stroke-width', '2px')
    // 生成坐标轴
    this.generateAxis(g)
    // 利用柱状图生成顶部数字
    new Histogram({
      width: this.width,
      height: this.height,
      marginX: this.marginX,
      marginY: this.marginY,
      id: this.id
    }).drawValue(this.svg, data)
    // 生成表格
    this.drawForm()
  }

  drawForm () {
    const title = []
    const content = []
    this.data.forEach(item => {
      title.push(item.x)
      content.push(item.y)
    })
    changeTable(title, content)
  }

  // 生成坐标轴
  generateAxis (g) {
    const x_axis = d3.axisBottom(this.scaleX())
    const y_axis = d3.axisLeft(this.scaleY())

    g.append('g')
      .call(x_axis)
      .attr('transform', `translate(${this.marginX}, ${this.g_height + this.marginY})`)
    g.append('g')
      .call(y_axis)
      .attr('transform', `translate(${this.marginX - 7}, ${this.marginY})`)
  }

  // 折线下方有阴影
  areaGenerator () {
    return d3.area()
      .x((d, i) => this.scaleX()(i + 1))
      .y0(this.g_height)
      .y1(d => this.scaleY()(d.y))
  }

  // 单折线
  lineGenerator () {
    return d3.line()
      .x((d, i) => this.scaleX()(i + 1))
      .y((d, i) => this.scaleY()(d.y))
  }

  init () {
    this.g_width = this.width - this.marginX * 2
    this.g_height = this.height - this.marginY * 2
    this.svg = d3.select(`#${this.id}`)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
  }

  // 设置相关dom的宽高
  initDom () {
    const panelHeight = 60
    const formHeight = 100

    changeSizeByClass(`${this.id}-panel`, this.width, panelHeight)
    changeSizeByClass(`${this.id}-container`, this.width, this.height + panelHeight + formHeight)
    changeSizeByClass(`${this.id}-data`, this.width, formHeight)
  }
}
