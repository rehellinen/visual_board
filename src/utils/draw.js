/**
 *  draw.js
 *  Create By rehellinen
 *  Create On 2018/11/30 9:43
 */
import {LineData} from "../d3/data"

document.onreadystatechange = () => {
  if (document.readyState === 'complete') { //当页面加载状态为完全结束时进入
    new rehellinen.Lines({
      width: 700,
      height: 300,
      marginX: 55
    }).draw(LineData)
  }
}

