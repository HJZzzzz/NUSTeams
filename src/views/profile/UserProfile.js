import React, { lazy, useState } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CListGroup,
  CListGroupItem,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CProgressBar,
  CCollapse,
  CWidgetProgress,
  CWidgetIcon,
  CWidgetProgressIcon,
  CWidgetSimple
} from '@coreui/react'
import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea
} from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
// import "@coreui/coreui/css/custom"

const UserProfile = () => {
  const [collapse, setCollapse] = useState(false)
  const [collapseMulti, setCollapseMulti] = useState([false, false])
  const [accordion, setAccordion] = useState(1)
  const [fade, setFade] = useState(true)

  const toggle = (e) => {
    setCollapse(!collapse)
    e.preventDefault()
  }

  const toggleMulti = (type) => {
    let newCollapse = collapseMulti.slice()
    switch (type) {
      case "left":
        newCollapse[0] = !collapseMulti[0];
        break;
      case "right":
        newCollapse[1] = !collapseMulti[1];
        break;
      case "both":
        newCollapse[0] = !collapseMulti[0];
        newCollapse[1] = !collapseMulti[1];
        break;
      default:
    }
    setCollapseMulti(newCollapse)
  }

  const toggleFade = () => {
    setFade(!fade)
  }
  return (
    <>
        <CRow>
          <CCol>
          <div class="profile-main">
            <div class="profile-header">
              <div class="user-detail">
                <div class="user-image">
                  <img src="http://nicesnippets.com/demo/up-profile.jpg"></img>
                </div>
                <div class="user-data">
                  <br></br>
                  <h2>&nbsp; &nbsp; Smith Alexander</h2>
                  <br></br>
                  <p>&nbsp; &nbsp; &nbsp; &nbsp;<strong>Year 4 Information Systems Student at NUS</strong></p>
                    <p>
                      &nbsp; &nbsp; &nbsp; &nbsp;
                      <CButton className="btn-facebook btn-brand mr-1 mb-1"><CIcon name="cib-facebook" /></CButton>
                      <CButton className="btn-linkedin btn-brand mr-1 mb-1"><CIcon name="cib-linkedin" /></CButton>
                      <CButton className="btn-github btn-brand mr-1 mb-1"><CIcon name="cib-github" /></CButton>
                      <CButton className="btn-linkedin btn-brand mr-1 mb-1"><CIcon name="cil-envelope-closed" /></CButton>
                      <CButton className="btn-github btn-brand mr-1 mb-1"><CIcon name="cil-phone" /></CButton>
                    </p>
                </div>
              </div>
            </div>
          </div>  
        </CCol>
        </CRow>

    <CRow>
      <CCol>
      <CCard>
        <CCardHeader>
          <h4>About</h4>
        </CCardHeader>
        <CCardBody>
          I am a Year 4 NUS Information Systems student, I am passionate in drawing insights from data and turning them into solutions, strategies and business values. I have experience with real world big data including RNA expression data, e-commerce business data and enterprise operational data. I am familiar with ETL process and CRISP DM. I also have a journal published on Frontiers in Genetics about a bio-informatics tool I built for gene expression data analysis. Area of focus: Data Science, Machine Learning, Business Intelligence.
          Competencies: Data Science, Machine Learning, Data Visualisation, Database Management, High-Dimensional Statistical Analysis, Python, R, R shiny, SQL, NoSQL, Matlab
        </CCardBody>
      </CCard>
    </CCol>
    </CRow>

    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <h4>User Ranking</h4>
          </CCardHeader>
          <CCardBody>
            <div className="progress-group">
              <div className="progress-group-header">
                <span className="title">Communication Skills</span>
                <span className="ml-auto font-weight-bold">4.5 <span className="text-muted small">(3 teammates voted)</span></span>
              </div>
              <div className="progress-group-bars">
                <CProgress className="progress-xs" color="info" value="80" />
              </div>
            </div>
            <div className="progress-group">
              <div className="progress-group-header">
                <span className="title">Technical Skills</span>
                  <span className="ml-auto font-weight-bold">4.8 <span className="text-muted small">(3 teammates voted)</span>
                </span>
              </div>
              <div className="progress-group-bars">
                <CProgress className="progress-xs" color="info" value="90" />
              </div>
            </div>
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <span className="title">Leadership</span>
                      <span className="ml-auto font-weight-bold">4.9 <span className="text-muted small">(3 teammates voted)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="96" />
                    </div>
                  </div>
                  
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <span className="title">Punctuality</span>
                      <span className="ml-auto font-weight-bold">5.0 <span className="text-muted small">(3 teammates voted)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="100" />
                    </div>
                  </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <h4>Skills</h4>
          </CCardHeader>
          <CCardBody>
            <div id="accordion">
              <CCard className="mb-0">
                <CCardHeader id="headingOne">
                  <CButton 
                    block 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 0 ? null : 0)}
                  >
                    <span className="title">Tools & Technologies</span>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 0}>
                  <CCardBody>
                    <CRow>
                      <CCol>
                        <CWidgetIcon text="Endorced By Ruichun" header="Java" color="info" iconPadding={false}>
                          <CIcon width={24} name="cil-check"/>
                        </CWidgetIcon>
                      </CCol>
                      <CCol>
                        <CWidgetIcon header="JavaScript" color="info" iconPadding={false}>
                          <CIcon width={24} name="cil-check"/>
                        </CWidgetIcon>
                      </CCol>
                      <CCol>
                        <CWidgetIcon header="Python" color="info" iconPadding={false}>
                          <CIcon width={24} name="cil-check"/>
                        </CWidgetIcon>
                      </CCol>
                      <CCol>
                        <CWidgetIcon header="C" color="info" iconPadding={false}>
                          <CIcon width={24} name="cil-check"/>
                        </CWidgetIcon>
                      </CCol>
                    </CRow>
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingThree">
                  <CButton 
                    block 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 1 ? null : 1)}
                  >
                    <span className="title">Soft Skills</span>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 1}>
                  <CCardBody>
                    <CRow>
                      <CCol>
                        <CWidgetIcon text="Endorced By Bryan" header="Communication" color="info" iconPadding={false}>
                          <CIcon width={24} name="cil-check"/>
                        </CWidgetIcon>
                      </CCol>
                      <CCol>
                        <CWidgetIcon header="Leadership" color="info" iconPadding={false}>
                          <CIcon width={24} name="cil-check"/>
                        </CWidgetIcon>
                      </CCol>
                      
                    </CRow>
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingThree">
                  <CButton 
                    block 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 2 ? null : 2)}
                  >
                    <span className="title">Languages</span>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 2}>
                  <CCardBody>
                    <CRow>
                      <CCol>
                        <CWidgetIcon header="English" color="info" iconPadding={false}>
                          <CIcon width={24} name="cil-check"/>
                        </CWidgetIcon>
                      </CCol>
                      <CCol>
                        <CWidgetIcon header="Spanish" color="info" iconPadding={false}>
                          <CIcon width={24} name="cil-check"/>
                        </CWidgetIcon>
                      </CCol>
                      
                    </CRow>
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingThree">
                  <CButton 
                    block 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 3 ? null : 3)}
                  >
                    <span className="title">Other Skills</span>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 3}>
                  <CCardBody>
                    <CRow>
                      <CCol>
                        <CWidgetIcon header="Hip-hop" color="info" iconPadding={false}>
                          <CIcon width={24} name="cil-check"/>
                        </CWidgetIcon>
                      </CCol>
                      <CCol>
                        <CWidgetIcon header="Piano" color="info" iconPadding={false}>
                          <CIcon width={24} name="cil-check"/>
                        </CWidgetIcon>
                      </CCol>
                      
                    </CRow>
                  </CCardBody>
                </CCollapse>
              </CCard>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

    <CRow>
      <CCol>
      <CCard>
        <CCardHeader>
          <h4>Project Involved</h4>
        </CCardHeader>
        <CCardBody>
          <CListGroup>
            <CListGroupItem action>
              <div class="experience-main">
                <div class="experience-detail">
                  <div class="experience-data">
                    <div class="experience-image">
                      <img src="https://banner2.cleanpng.com/20200107/cqe/transparent-management-icon-team-icon-5e143fb74b04b0.8063195515783853353073.jpg"></img>
                    </div>
                    <h5>
                      <strong>
                      &nbsp; &nbsp; &nbsp; &nbsp;CS3240 Interaction Design
                      </strong> 
                    </h5>
                    <div>
                      &nbsp; &nbsp; &nbsp; &nbsp; 2020-2021 Semester 1
                    </div>
                    <div>
                      &nbsp; &nbsp; &nbsp; &nbsp; The course stresses the importance of user-centred design and usability in the development of computer applications and systems. 
                    </div>
                  </div>
                </div>
                    
              </div>
            </CListGroupItem>
            <CListGroupItem action>
              <div class="experience-main">
                <div class="experience-detail">
                  <div class="experience-data">
                    <div class="experience-image">
                      <img src="https://banner2.cleanpng.com/20200107/cqe/transparent-management-icon-team-icon-5e143fb74b04b0.8063195515783853353073.jpg"></img>
                    </div>
                    <h5>
                      <strong>
                      &nbsp; &nbsp; &nbsp; &nbsp;IS4103 Information Systems Capstone Project 
                    </strong>
                    </h5>
                    <div>
                      &nbsp; &nbsp; &nbsp; &nbsp; 2019-2020 Semester 1
                    </div>
                    
                    <div>
                      &nbsp; &nbsp; &nbsp; &nbsp; The course stresses the importance of user-centred design and usability in the development of computer applications and systems. 
                    </div>
                  </div>
                </div>
              </div>
            </CListGroupItem>
            <CListGroupItem action>
              <div class="experience-main">
                <div class="experience-detail">
                  <div class="experience-data">
                    <div class="experience-image">
                      <img src="https://banner2.cleanpng.com/20200107/cqe/transparent-management-icon-team-icon-5e143fb74b04b0.8063195515783853353073.jpg"></img>
                    </div>
                    <h5>
                      <strong>
                      &nbsp; &nbsp; &nbsp; &nbsp; IS3103 Information Systems Leadership and Communication
                    </strong>
                    </h5>
                    <div>
                      &nbsp; &nbsp; &nbsp; &nbsp; 2018-2019 Semester 1
                    </div>
                    <div>
                      &nbsp; &nbsp; &nbsp; &nbsp; The course stresses the importance of user-centred design and usability in the development of computer applications and systems. 
                    </div>
                  </div>
                </div>
              </div>
            </CListGroupItem>
          </CListGroup>
        </CCardBody>
      </CCard>
    </CCol>
    </CRow>
    <CRow>
      <CCol>
      <CCard>
        <CCardHeader>
          <h4>Education</h4>
        </CCardHeader>
        <CCardBody>
          <CListGroup>
            <CListGroupItem action>
              <div class="education-main">
                <div class="education-detail">
                  <div class="education-data">
                    <div class="education-image">
                      <img src="https://cdn.worldvectorlogo.com/logos/nus.svg"></img>
                    </div>
                    <h5>
                      <strong>
                      &nbsp; &nbsp; &nbsp; &nbsp;National University of Singapore
                    </strong>
                    </h5>
                    <div>
                      &nbsp; &nbsp; &nbsp; &nbsp; Bachelor of Computing, Information Systems 
                    </div>
                    <div>
                      &nbsp; &nbsp; &nbsp; &nbsp; 2017-2021
                    </div>
                  </div>
                </div>
              </div>
            </CListGroupItem>
            <CListGroupItem action>
              <div class="education-main">
                <div class="education-detail">
                  <div class="education-data">
                    <div class="education-image">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Georgia_Tech_seal.svg/1200px-Georgia_Tech_seal.svg.png"></img>
                    </div>
                    <h5>
                      <strong>
                      &nbsp; &nbsp; &nbsp; &nbsp; Georgia Institute of Technology 
                    </strong>
                    </h5>
                    <div>
                      &nbsp; &nbsp; &nbsp; &nbsp; Student Exchange
                    </div>
                    <div>
                      &nbsp; &nbsp; &nbsp; &nbsp; 2018-2019
                    </div>
                  </div>
                </div>
              </div>
            </CListGroupItem>
            <CListGroupItem action>
              <div class="education-main">
                <div class="education-detail">
                  <div class="education-data">
                    <div class="education-image">
                      <img src="https://rafflesmun.files.wordpress.com/2017/01/copy-of-icon.png"></img>
                    </div>
                    <h5>
                      <strong>
                      &nbsp; &nbsp; &nbsp; &nbsp; Raffles Institude 
                      </strong>
                    </h5>
                    <div>
                      &nbsp; &nbsp; &nbsp; &nbsp; Singapore-Cambridge GCSE A-level
                    </div>
                    <div>
                      &nbsp; &nbsp; &nbsp; &nbsp; 2015-2017
                    </div>
                  </div>
                </div>
              </div>
            </CListGroupItem>            
          </CListGroup>
        </CCardBody>
      </CCard>
    </CCol>
    </CRow>
 
    <CRow>
      <CCol>
      <CCard>
        <CCardHeader>
          <h4>Teammates Feedback</h4> 
        </CCardHeader>
        <CCardBody>
          <CListGroup>            
            <CListGroupItem action>
              <div class="experience-main">
                <div class="experience-detail">
                  <div class="experience-data">
                    <div class="experience-image">
                      <img src="https://cdn4.iconfinder.com/data/icons/users-29/32/166-01-512.png"></img>
                    </div>
                    <h5>
                      <strong>
                      &nbsp; &nbsp; &nbsp; &nbsp;Teammate From Term Project
                    </strong>
                    </h5>
                    
                    <div>
                      &nbsp; &nbsp; &nbsp; &nbsp; The course stresses the importance of user-centred design and usability in the development of computer applications and systems. 
                    </div>
                  </div>
                </div>
              </div>
            </CListGroupItem>
            <CListGroupItem action>
              <div class="experience-main">
                <div class="experience-detail">
                  <div class="experience-data">
                    <div class="experience-image">
                      <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/businesswoman-74-773249.png"></img>
                    </div>
                    <h5>
                      <strong>
                      &nbsp; &nbsp; &nbsp; &nbsp;Steven From CS3240 Term Project
                    </strong>
                    </h5>
                    <div>
                      &nbsp; &nbsp; &nbsp; &nbsp; 2019-2020 Semester 1
                    </div>
                    
                    <div>
                      &nbsp; &nbsp; &nbsp; &nbsp; The course stresses the importance of user-centred design and usability in the development of computer applications and systems. 
                    </div>
                  </div>
                </div>
              </div>
            </CListGroupItem>
            <CListGroupItem action>
              <div class="experience-main">
                <div class="experience-detail">
                  <div class="experience-data">
                    <div class="experience-image">
                      <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/female-avatar-12-774634.png"></img>
                    </div>
                    <h5>
                      <strong>
                      &nbsp; &nbsp; &nbsp; &nbsp;Alex From IS4103 Term Project
                    </strong>
                    </h5>
                    
                    <div>
                      &nbsp; &nbsp; &nbsp; &nbsp; The course stresses the importance of user-centred design and usability in the development of computer applications and systems. 
                    </div>
                  </div>
                </div>
              </div>
            </CListGroupItem>
          </CListGroup>
        </CCardBody>
      </CCard>
    </CCol>
    </CRow>
    </>
  )
}

export default UserProfile
