import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

////////ITEMS////////////
import BigContainer from './CompsNStyles/BigContainer'
import UpperContainer from './CompsNStyles/UpperContainer'
import BottomContainer from './CompsNStyles/BottomContainer'
import MyButton from './CompsNStyles/MyButton'
////////ITEMS////////////

import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <BigContainer>
      <UpperContainer />
      <BottomContainer>
        <MyButton id="button1"></MyButton>
        <MyButton id="button2"></MyButton>
        <MyButton id="button3"></MyButton>
        <MyButton id="button4"></MyButton>
        <MyButton id="button5"></MyButton>
        <MyButton id="button6"></MyButton>
        <MyButton id="button7"></MyButton>
        <MyButton id="button8"></MyButton>
        <MyButton id="button9"></MyButton>
        <MyButton id="button10"></MyButton>
        <MyButton id="button11"></MyButton>
        <MyButton id="button12"></MyButton>
      </BottomContainer>
    </BigContainer>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
