import React, { useState } from 'react'
import {
  CCol,
  CRow,
  CCard,
  CCardHeader,
  CCardFooter,
  CCardBody,
  CCardText,
  CCollapse,
  CButton,
  CForm,
  CFormInput,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilClock } from '@coreui/icons'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'

const Home = () => {
  const [visible, setVisible] = useState(false)
  let [selected_time, onChange] = useState(new Date())
  const [title, setTitle] = useState('Time Remaining')
  const handleChange = (event) => {
    setTitle(event.target.value)
  }
  const redirect = (time, title) => {
    window.location = window.location.href + '#/countdown?until=' + time + '&title=' + title
  }
  return (
    <CCard color="light" className="shadow m-2 rounded">
      <CCardHeader className="fs-1">Set Countdown</CCardHeader>
      <CCardBody>
        <CCardText>
          Choose a date and time below, then click the button to create your sharable timer.
        </CCardText>
        <hr />
        <CForm>
          <CRow xs={{ cols: 1 }}>
            <CCol>
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
                    const timeToAdd = 5 * 60 * 1000
                    let curTime = new Date()
                    selected_time = new Date(curTime.getTime() + timeToAdd)
                    onChange(selected_time)
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
                    const timeToAdd = 10 * 60 * 1000
                    let curTime = new Date()
                    selected_time = new Date(curTime.getTime() + timeToAdd)
                    onChange(selected_time)
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
                    const timeToAdd = 13 * 60 * 1000
                    let curTime = new Date()
                    selected_time = new Date(curTime.getTime() + timeToAdd)
                    onChange(selected_time)
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
                    const timeToAdd = 20 * 60 * 1000
                    let curTime = new Date()
                    selected_time = new Date(curTime.getTime() + timeToAdd)
                    onChange(selected_time)
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
                      const timeToAdd = 60 * 60 * 1000
                      let curTime = new Date()
                      selected_time = new Date(curTime.getTime() + timeToAdd)
                      onChange(selected_time)
                    }}
                  >
                    1 Hour
                  </CButton>
                </div>
              </CCol>
            </div>
          </CRow>
          <CRow xs={{ cols: 1 }}>
            <CCol>
              <CButton
                className="mt-4"
                color="dark"
                size="sm"
                shape="rounded-pill"
                onClick={(event) => {
                  event.preventDefault()
                  setVisible(!visible)
                }}
              >
                View more options
              </CButton>
              <CCollapse visible={visible}>
                <hr className="mt-3" />
                <CFormInput
                  id="titlefield"
                  type="text"
                  label="Title"
                  placeholder="Time remaining"
                  text="Optional"
                  onChange={handleChange}
                  value={title}
                />
              </CCollapse>
            </CCol>
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
