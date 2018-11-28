/**
 *  Histogram.js
 *  Create By rehellinen
 *  Create On 2018/11/28 21:59
 */
import * as d3 from 'd3'
import {BaseChart} from "./BaseChart"

export class Histogram extends BaseChart{
  constructor(conf) {
    const defaultConf = {
      width: 500,
      height: 200,
      margin: 25,
      id: 'line'
    }
    super(defaultConf, conf)
    this.init()
  }

  drawValue (svg, data) {
    this.data = data
    this.set()

    const g = svg.append('g')

    const bar = g.selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('transform', (d, i) => `translate(${(this.perWidth + this.perMargin) * i + this.margin}, ${this.margin})`)

    bar.append('rect')
      .attr('y', d => this.scaleY()(d))
      .attr('width', this.perWidth)
      .attr('height', d => this.g_height - this.scaleY()(d))
      .style('fill', 'none')

    bar.append('text')
      .text(d => d)
      .attr('y', d => this.scaleY()(d) - 5)
      .attr('text-anchor', 'middle')
  }

  set () {
    this.perMargin = 5
    this.perWidth = this.g_width / (this.data.length - 1) - this.perMargin
  }

  init () {
    this.g_width = this.width - this.margin * 2
    this.g_height = this.height - this.margin * 2
    this.svg = d3.select(`#${this.id}`)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
  }
}
