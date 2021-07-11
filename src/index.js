import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

////////ITEMS////////////
import BigContainer from './CompsNStyles/BigContainer'
import UpperContainer from './CompsNStyles/UpperContainer'
import BottomContainer from './CompsNStyles/BottomContainer'
////////ITEMS////////////

import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <BigContainer>
      <UpperContainer />
      <BottomContainer></BottomContainer>
    </BigContainer>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
