import React from 'react'

const Weather = () => {
    const get_element = (weather) => {
        const element = <h1>The weather is {weather}</h1>;
        return element
    }
  return get_element("sunny")
}

export default Weather