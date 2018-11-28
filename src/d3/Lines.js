/**
 *  lines.js
 *  Create By rehellinen
 *  Create On 2018/11/28 14:34
 */
import * as d3 from 'd3'
import {BaseChart} from "./BaseChart"

export class Lines extends BaseChart{
  constructor (conf) {
    const defaultConf = {
      width: 500,
      height: 200,
      margin: 25,
      id: 'line'
    }
    super(defaultConf, conf)
    // 主体折线的宽高
    this.g_width = this.width - this.margin * 2
    this.g_height = this.height - this.margin * 2
    this.initSvg()
  }

  drawArea(data) {
    this.data = data
    const g = this.svg.append('g')
    // 生成主折线
    g.append('path')
      .attr('d', this.areaGenerator()(data))
      .attr('transform', `translate(${this.margin}, ${this.margin})`)
      .style('fill', '#edf2fa')
      .style('stroke', '#487bca')
      .style('stroke-width', '1px')
    // 生成坐标轴
    this.generateAxis(g)
  }

  generateAxis (g) {
    const x_axis = d3.axisBottom(this.scaleX(this.data))
    const y_axis = d3.axisLeft(this.scaleY(this.data))

    g.append('g')
      .call(x_axis)
      .attr('transform', `translate(${this.margin}, ${this.g_height + this.margin})`)
    g.append('g')
      .call(y_axis)
      .attr('transform', `translate(${this.margin}, ${this.margin})`)
  }

  areaGenerator () {
    return d3.area()
      .x((d, i) => this.scaleX()(i))
      .y0(this.g_height)
      .y1(d => this.scaleY()(d))
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
}
