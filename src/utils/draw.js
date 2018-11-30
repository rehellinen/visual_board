/**
 *  draw.js
 *  Create By rehellinen
 *  Create On 2018/11/30 9:43
 */
import {LineData} from "../d3/data"

document.onreadystatechange = () => {
  if (document.readyState === 'complete') { //当页面加载状态为完全结束时进入
    new rehellinen.Lines({
      width: 600,
      height: 300,
      margin: 40
    }).draw(LineData)
  }
}

