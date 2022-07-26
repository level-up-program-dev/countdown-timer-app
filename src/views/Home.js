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
import { cilClock, cilShareAlt } from '@coreui/icons'
import QRCode from 'react-qr-code'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'

const Home = () => {
  const [visible, setVisible] = useState(false)
  const [selected_time, onChange] = useState(new Date())
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
              />
              <div className="form-text">Must be a time in the future.</div>
            </CCol>
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
            <CCol>
              <hr className="mt-3" />
              <label className="form-label">
                <CIcon icon={cilShareAlt} />
                &nbsp; Share
              </label>
              <div className="mx-auto text-center">
                <QRCode
                  value={
                    window.location.href +
                    '#/countdown?until=' +
                    String(selected_time.toISOString()) +
                    '&title=' +
                    title
                  }
                />
              </div>
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
