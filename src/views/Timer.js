import React from 'react'
import { CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilAlarm } from '@coreui/icons'
import Countdown from 'react-countdown'
import QRCode from 'react-qr-code'
import 'react-datetime/css/react-datetime.css'

const CountdownView = () => {
  const queryString = require('query-string')
  const queryParams = queryString.parse(window.location.hash.replace('#/countdown', ''))
  const title = queryParams.title || 'Time Remaining'
  const until = queryParams.until || new Date().toISOString()
  const selected_time = new Date(Date.parse(until)) || new Date()

  // Random component
  const Completionist = () => (
    <div className="text-danger fs-1">
      <CIcon icon={cilAlarm} size="xxl" />
      <p>Time is up!</p>
    </div>
  )

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />
    } else {
      // Render a countdown
      return (
        <div className="text-center">
          <CRow className="fs-1">
            <CCol>{hours}</CCol>
            <CCol>{minutes}</CCol>
            <CCol>{seconds}</CCol>
          </CRow>
          <CRow className="text-uppercase">
            <CCol>hours</CCol>
            <CCol>minutes</CCol>
            <CCol>seconds</CCol>
          </CRow>
        </div>
      )
    }
  }

  return (
    <div className="m-4 text-center">
      <h1>{title}</h1>
      <hr />
      <Countdown date={selected_time} renderer={renderer} />
      <hr />
      <QRCode value={window.location.href} />
    </div>
  )
}

export default CountdownView
