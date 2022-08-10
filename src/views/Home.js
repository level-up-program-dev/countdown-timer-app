import React, { useState } from 'react'
import {
  CCol,
  CRow,
  CCard,
  CCardHeader,
  CCardFooter,
  CCardBody,
  CCardText,
  CButton,
  CForm,
  CFormInput,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilClock } from '@coreui/icons'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'

const Home = () => {
  let [selected_time, onChange] = useState(new Date())
  const [title, setTitle] = useState('Time Remaining')
  const handleChange = (event) => {
    setTitle(event.target.value)
  }
  const redirect = (time, title) => {
    window.location = window.location.href + '#/countdown?until=' + time + '&title=' + title
  }
  function calcBreak(breakAmt) {
    const timeToAdd = breakAmt * 60 * 1000
    let curTime = new Date()
    selected_time = new Date(curTime.getTime() + timeToAdd)
    return selected_time
  }
  return (
    <CCard color="light" className="shadow m-2 rounded">
      <CCardHeader className="fs-1">Set Countdown</CCardHeader>
      <CCardBody>
        <CCardText>
          Choose a date and time below, then click the button to create your sharable timer.
        </CCardText>
        <CForm>
          <CRow xs={{ cols: 1 }}>
            <CFormInput
              id="titlefield"
              type="text"
              label="Title"
              placeholder="Time remaining"
              onChange={handleChange}
              value={title}
            />
            <CCol className="mt-2">
              <label className="form-label">
                <CIcon icon={cilClock} />
                &nbsp; Datetime
              </label>
              <Datetime
                initialViewMode="time"
                initialValue={new Date()}
                value={selected_time}
                onChange={onChange}
                input={false}
              />
              <div className="form-text">Must be a time in the future.</div>
            </CCol>
          </CRow>
          <CRow className="justify-content-center" xs={{ cols: 2 }} sm={{ cols: 5 }}>
            <CCol>
              <div className="d-grid gap-2">
                <CButton
                  className="mt-4 btn-secondary"
                  size="sm"
                  onClick={(event) => {
                    event.preventDefault()
                    onChange(calcBreak(5))
                  }}
                >
                  5 Minutes
                </CButton>
              </div>
            </CCol>
            <CCol>
              <div className="d-grid gap-2">
                <CButton
                  className="mt-4 btn-secondary"
                  size="sm"
                  onClick={(event) => {
                    event.preventDefault()
                    onChange(calcBreak(10))
                  }}
                >
                  10 Minutes
                </CButton>
              </div>
            </CCol>
            <CCol>
              <div className="d-grid gap-2">
                <CButton
                  className="mt-4 btn-secondary"
                  size="sm"
                  onClick={(event) => {
                    event.preventDefault()
                    onChange(calcBreak(13))
                  }}
                >
                  13 Minutes
                </CButton>
              </div>
            </CCol>
            <CCol>
              <div className="d-grid gap-2">
                <CButton
                  className="mt-4 btn-secondary"
                  size="sm"
                  onClick={(event) => {
                    event.preventDefault()
                    onChange(calcBreak(20))
                  }}
                >
                  20 Minutes
                </CButton>
              </div>
            </CCol>
            <div className="d-grid gap-2">
              <CCol>
                <div className="d-grid gap-2">
                  <CButton
                    className="mt-4 btn-secondary"
                    size="sm"
                    onClick={(event) => {
                      event.preventDefault()
                      onChange(calcBreak(60))
                    }}
                  >
                    1 Hour
                  </CButton>
                </div>
              </CCol>
            </div>
          </CRow>
        </CForm>
      </CCardBody>
      <CCardFooter>
        <div className="d-grid gap-2">
          <CButton
            color="primary"
            size="lg"
            onClick={(e) => redirect(selected_time.toISOString(), title)}
          >
            Start Timer
          </CButton>
        </div>
      </CCardFooter>
    </CCard>
  )
}

export default Home
