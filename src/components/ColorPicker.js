import React, { useState } from 'react'
// import { clearScreenDown } from 'readline'

export default function ColorPicker() {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))
  const [sat, setSat] = useState(Math.floor(Math.random() * 100))
  const [light, setLight] = useState(Math.floor(Math.random() * 100))
  const [alpha, setAlpha] = useState(Math.floor(Math.random() * 100))
  console.log(hue)
  console.log(sat)
  console.log(light)

  const getRandom = () => {
    setHue(Math.floor(Math.random() * 320))
    setSaturation(Math.floor(Math.random() * 100))
    setLightness(Math.floor(Math.random() * 100))
    setAlpha(Math.floor(Math.random() * 100))
  }
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
        <div>
          <h6>ALPHA</h6>
          <input
            name="alpha"
            type="range"
            min="1"
            max="100"
            onChange={event => setAlpha(event.target.value)}
          />
        </div>
        <button onClick={getRandom}>
          <span role="img">🌈</span>
        </button>
      </div>
    </div>
  )
}
