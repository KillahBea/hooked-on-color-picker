import React, { useState } from 'react'
// import { clearScreenDown } from 'readline'

export default function ColorPicker() {
  const [hue, setHue] = useState(180)
  const [sat, setSat] = useState(50)
  const [light, setLight] = useState(50)
  console.log(hue)
  console.log(sat)
  console.log(light)
  // console.log('dang girl')
  // const updateColorSwatch = event

  // const getHSL = () => {
  //   return `hsl(${hue}, ${sat}%, ${light}%)`
  //   console.log('getHSL')
  // }
  return (
    <div>
      <div className="swatch" style={{ backgroundColor: `hsl(${hue}, ${sat}%, ${light}%)` }} />
      <div className="sliders">
        <h6>HUE</h6>
        <input
          name="hue"
          type="range"
          min="1"
          max="360"
          onChange={event => setHue(event.target.value)}
        />
        <h6>SATURATION</h6>
        <input
          name="sat"
          type="range"
          min="1"
          max="100"
          onChange={event => setSat(event.target.value)}
        />
        <h6>LIGHTNESS</h6>
        <input
          name="light"
          type="range"
          min="1"
          max="100"
          onChange={event => setLight(event.target.value)}
        />
      </div>
    </div>
  )
}
