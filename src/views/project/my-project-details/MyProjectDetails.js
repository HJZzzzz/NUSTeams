import React, { lazy,Component,useState } from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CTabs,
  CDataTable,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CToast,
  CToastBody,
  CToastHeader,
  CToaster
} from '@coreui/react'

import {
  Alert,Progress
} from "reactstrap";

import CIcon from '@coreui/icons-react'

import MainChartExample from '../../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../../widgets/WidgetsBrand.js'))
// import photo from '../../../assets/img/project.jpg'

let inbox = [
    { id: 1, user: 'avatars/2.jpg', name: 'Tom Cruise', daysAgo: '3', message: 'Tom Cruise has invited you to join his project: IS4103 Capstone Project' },
    { id: 2, user: 'avatars/3.jpg', name: 'Matt Damon', daysAgo: '3', message: 'Matt Damon has invited you to join his project: CS3240 Design Project' },
    { id: 3, user: 'avatars/4.jpg', name: 'Sam Smith', daysAgo: '6', message: 'Sam Smith has invited you to join his project: IS3106 Final Project' },
  ]


const MyProjectDetails = () => {
    
const fields = ['name', 'projectType', 'projectIdentifier', 'vacancy', 'status']
const inboxFields = ['user', 'name', 'message', 'actions']

const [rejectRequestModal, setRejectRequestModal] = useState(false);
const [selectedRequestId, setSelectedRequestId] = useState(-1);
const [toasts, setToasts] = useState([
])

const [position] = useState('top-right')
const [autohide] = useState(true)
const [autohideValue] = useState(5000)
const [closeButton] = useState(true)
const [fade] = useState(true)
const [toastMessage, setToastMessage] = useState('');

const addToast = () => {
  setToasts([
    ...toasts,
    { position, autohide: autohide && autohideValue, closeButton, fade }
  ])
}
const toasters = (() => {
  return toasts.reduce((toasters, toast) => {
    toasters[toast.position] = toasters[toast.position] || []
    toasters[toast.position].push(toast)
    return toasters
  }, {})
})()

  const prepareReject = (id) => {
    setSelectedRequestId(id);
    setRejectRequestModal(!rejectRequestModal);
  }

  const rejectRequest = () => {
    let id = selectedRequestId;
    inbox = inbox.filter(item => item.id !== id);
    setToastMessage('You have rejected the project invitation successfully.');
    setRejectRequestModal(!rejectRequestModal);
    addToast();
  }
  const acceptRequest = (id) => {
    inbox = inbox.filter(item => item.id !== id);
    setToastMessage('You have accepted the project invitation successfully.');
    addToast();
  }

    return (
          <>
            {/* <WidgetsDropdown /> */}
            {Object.keys(toasters).map((toasterKey) => (
                <CToaster
                position={toasterKey}
                key={'toaster' + toasterKey}
                >
                {
                    toasters[toasterKey].map((toast, key) => {
                    return (
                        <CToast
                        key={'toast' + key}
                        show={true}
                        autohide={toast.autohide}
                        fade={toast.fade}
                        >
                        <CToastHeader closeButton={toast.closeButton} style={{ backgroundColor: "green", color: "white" }}>
                            System Notification
                        </CToastHeader>
                        <CToastBody>
                            {toastMessage}
                        </CToastBody>
                        </CToast>
                    )
                    })
                }
                </CToaster>
            ))}
            <CModal
                show={rejectRequestModal}
                onClose={() => setRejectRequestModal(!rejectRequestModal)}
                size="sm">
                <CModalHeader closeButton>
                <CModalTitle>Reject Request</CModalTitle>
                </CModalHeader>
                <CModalBody>
                <p>Are you sure you want to reject this request?</p>
                <p>This action is irreversible.</p>
                </CModalBody>
                <CModalFooter>
                <CButton color="danger" onClick={() => rejectRequest(selectedRequestId)}>Reject</CButton>
                <CButton color="secondary" onClick={() => setRejectRequestModal(!rejectRequestModal)}>Cancel</CButton>
                </CModalFooter>
            </CModal>

            <CCard>
            
              <CCardBody>
                <CRow>
                    <CCol sm='12' md="5">
                      <div className="custome-tag">
                          <img
                              src="avatars/my_proj.jpg"
                              alt="project cover"
                              style={{
                                  width: "100%",
                                  height: "100%",
                                  marginBottom: "1rem",
                              }}
                          />
                          <br/>
                          <CRow>
                              <CCol col="6">
                              <CButton variant="outline" block color="info">
                                    Edit Project
                                </CButton>
                              </CCol>
                              <CCol col="6">
                              <CButton variant="outline" block color="danger">
                                    End Project
                                </CButton>
                              </CCol>
                          </CRow>
                          
                          
                      </div>
                    </CCol>
                    <CCol sm="12" md="7">
                    <CListGroup>
                      <CListGroupItem style={{padding:"30px"}}><h1 id="traffic" className="card-title mb-0" style={{}}>
                              CS3203 Software Engineering Project
                          </h1></CListGroupItem>
                      <CListGroupItem><p style={{margin:"10px"}}><span style={{color:"gray"}} >Project Type:</span>     Module Project</p></CListGroupItem>
                      <CListGroupItem><p style={{margin:"10px"}}><span style={{color:"gray"}} >Module Code:</span>     CS3203</p></CListGroupItem>
                      <CListGroupItem><p style={{margin:"10px"}}><span style={{color:"gray"}} >Vacancy:</span>     5/5</p></CListGroupItem>
                      <CListGroupItem style={{paddingLeft:"30px",paddingTop:"30px",paddingBottom:"20px",paddingTop:"20px"}}><span style={{color:"gray"}} >Status:     </span><CBadge className="mr-1" color="warning" shape="pill"><span style={{color:"white"}}>ONGOING</span></CBadge></CListGroupItem>
                      <CListGroupItem style={{paddingLeft:"30px",paddingTop:"30px",paddingBottom:"20px",paddingTop:"20px"}}><span style={{color:"gray"}} >Description:     </span>Hi Guys, this is team Software Engineering Master from CS3203, we are currently looking for two more students who are proficient in database implementition and Cloud Service(AWS)! Feell free to send your request!</CListGroupItem>
                    </CListGroup>
                    
                    </CCol>
                </CRow>
                {/* <MainChartExample style={{height: '300px', marginTop: '40px'}}/> */}
              </CCardBody>

            </CCard>
            <CCard>
              <CCardBody>
                <CRow>
                  <CCol sm='12' md="12">
                  <h3>Teammates</h3>
                  <CTabs>
                        <CNav variant="tabs">
                            <CNavItem style={{width:"50%"}}>
                            <CNavLink>
                                Current
                            </CNavLink>
                            </CNavItem>
                            <CNavItem style={{width:"50%"}}>
                            <CNavLink>
                                Pending
                            </CNavLink>
                            </CNavItem>
                        </CNav>
                        <CTabContent>
                            <CTabPane>
                            {/* {`1. ${this.state.lorem}`} */}
                            <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                                <thead >
                                <tr>
                                    <th className="text-center"><CIcon name="cil-people" /></th>
                                    <th>User</th>
                                    <th className="text-center">Faculty</th>
                                    <th className="text-center">Major</th>
                                    <th className="text-center">Year</th>
                                    <th className="text-center">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center">
                                        <div className="c-avatar">
                                            <img src={'avatars/tom.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                                            <span className="c-avatar-status bg-secondary"></span>
                                        </div>
                                        </td>
                                        <td>
                                        <div>Tom Cruise</div>
                                        <div className="small text-muted">
                                            Updated 1 day ago
                                        </div>
                                        </td>
                                        <td className="text-center">
                                        <CIcon name="cil-star" style={{color:"#F3CD03"}} /> <span style={{color:"#F3CD03"}} >4.0</span>
                                        </td>
                                        
                                        <td className="text-center">
                                        Computer Science
                                        </td>
                                        
                                        <td className="text-center">
                                        4
                                        </td>
                                        <td>
                                        <CButton  block color="info">
                                            View Profile
                                        </CButton>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">
                                        <div className="c-avatar">
                                            <img src={'avatars/matt.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                                            <span className="c-avatar-status bg-success"></span>
                                        </div>
                                        </td>
                                        <td>
                                        <div>Matt Damon</div>
                                        <div className="small text-muted">
                                            Updated 1 day ago
                                        </div>
                                        </td>
                                        <td className="text-center">
                                        <CIcon name="cil-star" style={{color:"#F3CD03"}} /> <span style={{color:"#F3CD03"}} >4.0</span>
                                        </td>
                                        
                                        <td className="text-center">
                                        Inforamtion Systems
                                        </td>
                                        
                                        <td className="text-center">
                                        3
                                        </td>
                                        <td>
                                        <CButton  block color="info">
                                            View Profile
                                        </CButton>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">
                                        <div className="c-avatar">
                                            <img src={'avatars/5.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                                            <span className="c-avatar-status bg-secondary"></span>
                                        </div>
                                        </td>
                                        <td>
                                        <div>Sam Smith</div>
                                        <div className="small text-muted">
                                            Updated 1 day ago
                                        </div>
                                        </td>
                                        <td className="text-center">
                                        <CIcon name="cil-star" style={{color:"#F3CD03"}} /> <span style={{color:"#F3CD03"}} >4.0</span>
                                        </td>
                                        
                                        <td className="text-center">
                                        Computer Science
                                        </td>
                                        
                                        <td className="text-center">
                                        2
                                        </td>
                                        <td>
                                        <CButton  block color="info">
                                            View Profile
                                        </CButton>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">
                                        <div className="c-avatar">
                                            <img src={'avatars/8.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                                            <span className="c-avatar-status bg-success"></span>
                                        </div>
                                        </td>
                                        <td>
                                        <div>Christian Bale</div>
                                        <div className="small text-muted">
                                            Updated 1 day ago
                                        </div>
                                        </td>
                                        <td className="text-center">
                                        <CIcon name="cil-star" style={{color:"#F3CD03"}} /> <span style={{color:"#F3CD03"}} >4.0</span>
                                        </td>
                                        
                                        <td className="text-center">
                                        Computer Engineering
                                        </td>
                                        
                                        <td className="text-center">
                                        4
                                        </td>
                                        <td>
                                        <CButton  block color="info">
                                            View Profile
                                        </CButton>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                            </CTabPane>
                            <CTabPane>
                            <CDataTable
                                items={inbox}
                                fields={inboxFields}
                                striped
                                itemsPerPage={5}
                                pagination
                                scopedSlots={{
                                'user':
                                    (item) => (
                                    <td className="text-center">
                                        <div className="c-avatar">
                                        <img src={item.user} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                                        <span className="c-avatar-status bg-danger"></span>
                                        </div>
                                    </td>
                                    ),
                                'actions':
                                    (item) => (
                                    <td>
                                        <CRow>
                                        <CCol sm="12" md="12" l="4" xl="4">
                                            <CButton block color="info">View Project</CButton>
                                        </CCol>
                                        <CCol sm="12" md="12" l="4" xl="4">
                                            <CButton block color="success" onClick={() => { acceptRequest(item.id) }}>Accept</CButton>
                                        </CCol>
                                        <CCol sm="12" md="12" l="4" xl="4">
                                            <CButton block color="danger" onClick={() => { prepareReject(item.id) }}>Reject</CButton>
                                        </CCol>
                                        </CRow>
                                    </td>

                                    )
                                }}
                            />
                            </CTabPane>
                        </CTabContent>
                    </CTabs>
                    
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
            <CCard>
              <CCardBody>
                <CRow>
                  <CCol sm='6' md='10'>
                  <h3>Updates</h3>
                  
                  </CCol>
                  <CCol sm='6' md='2' style={{float:"right"}}>
                    <CButton  block color="info">
                      + Add
                    </CButton>
                  </CCol>
                  <CCol sm='12' md="12">
                  
                  <CCard>
                  <CCardBody style={{padding:"0"}}>
                    <CRow style={{width:"inherit"}}>
                      <CCol sm='12' md="3" lg="2" >
                      <div className="custome-tag">
                        <img
                              src="avatars/recruit.jpg"
                              alt="project cover"
                              style={{
                                  width: "100%",
                                  height: "100%"
                              }}
                          />
                      </div>
                        
                      </CCol>
                      <CCol sm='12' md="9" style={{verticalAlign:"middle"}} >
                        <h4 style={{paddingTop:"20px"}}>We are Recruting!</h4>
                        <p style={{paddingTop:"10px"}}>Hi guys! We are still looking two more students in CS2102! Feel free to contact us!</p>
                      </CCol>
                    </CRow>
                  </CCardBody>
                  
                  </CCard>
      
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </>
        )
  }



export default MyProjectDetails