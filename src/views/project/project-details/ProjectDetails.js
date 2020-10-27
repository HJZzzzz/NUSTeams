import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CTextarea,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CListGroup,
  CListGroupItem
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../../widgets/WidgetsBrand.js'))
// import photo from '../../../assets/img/project.jpg'

const ProjectDetails = () => {
  return (
    <>
      {/* <WidgetsDropdown /> */}
      <CCard>
        <CCardBody>
          <CRow>
              <CCol sm='12' md="5">
                <div className="custome-tag">
                    <img
                        src="avatars/2102.jpg"
                        alt="project cover"
                        style={{
                            width: "100%",
                            height: "100%",
                            marginBottom: "1rem",
                        }}
                    />
                    {/* <h1 id="traffic" className="card-title mb-0">
                        CS3240 Design Project
                    </h1>
                    <br/>
                    <CListGroup accent>
                        <CListGroupItem accent="primary"><span style={{color:"gray"}} >Type</span>  Module Project</CListGroupItem>
                        <CListGroupItem accent="secondary"><span style={{color:"gray"}} >Module Code</span>  CS3240</CListGroupItem>
                        <CListGroupItem accent="danger"><span style={{color:"gray"}} >Vacancy</span>  4/5</CListGroupItem>
                        <CListGroupItem accent="success"><span style={{color:"gray"}} >ID</span>  32404040</CListGroupItem>
                    </CListGroup> */}
                    <p style={{fontWeight: "bold"}}>Reqest Message</p>
                    
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="5"
                      placeholder="Content..." 
                    />
                    <br/>
                    <CButton  block color="info">
                        Request to Join
                    </CButton>
                </div>
              </CCol>
              <CCol sm="12" md="7">
              <CListGroup>
                <CListGroupItem style={{padding:"30px"}}><h1 id="traffic" className="card-title mb-0" style={{}}>
                        CS3240 Design Project
                    </h1></CListGroupItem>
                <CListGroupItem><p style={{margin:"10px"}}><span style={{color:"gray"}} >Project Type:</span>     Module Project</p></CListGroupItem>
                <CListGroupItem><p style={{margin:"10px"}}><span style={{color:"gray"}} >Module Code:</span>     CS3240</p></CListGroupItem>
                <CListGroupItem><p style={{margin:"10px"}}><span style={{color:"gray"}} >Vacancy:</span>     4/5</p></CListGroupItem>
                <CListGroupItem style={{paddingLeft:"30px",paddingTop:"30px",paddingBottom:"20px",paddingTop:"20px"}}><span style={{color:"gray"}} >Status:     </span><CBadge className="mr-1" color="success" shape="pill">OPEN</CBadge></CListGroupItem>
                <CListGroupItem style={{paddingLeft:"30px",paddingTop:"30px",paddingBottom:"20px",paddingTop:"20px"}}><span style={{color:"gray"}} >Description:     </span>Hi Guys, this is team DB Master from CS2102, we are currently looking for two more students who are interested in database implementition and web development! Feell free to send your request!</CListGroupItem>
              </CListGroup>
              {/* <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>User</th>
                    <th className="text-center">Faculty</th>
                    <th className="text-center">Major</th>
                    <th className="text-center">Year</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/2.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-danger"></span>
                      </div>
                    </td>
                    <td>
                      <div>Avram Tarasios</div>
                      <div className="small text-muted">

                        <span>Recurring</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      School of Computing
                    </td>
                    
                    <td className="text-center">
                      Computer Science
                    </td>
                    
                    <td className="text-center">
                      2
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>5 minutes ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/3.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-warning"></span>
                      </div>
                    </td>
                    <td>
                      <div>Quintin Ed</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      School of Computing
                    </td>
                    
                    <td className="text-center">
                      Computer Science
                    </td>
                    
                    <td className="text-center">
                      4
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>1 hour ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/4.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-secondary"></span>
                      </div>
                    </td>
                    <td>
                      <div>Enéas Kwadwo</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      School of Computing
                    </td>
                    
                    <td className="text-center">
                      Computer Science
                    </td>
                    
                    <td className="text-center">
                      4
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Last month</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/5.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Agapetus Tadeáš</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      School of Computing
                    </td>
                    
                    <td className="text-center">
                      Inforamtion Systems
                    </td>
                    
                    <td className="text-center">
                      3
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Last week</strong>
                    </td>
                  </tr>
                  
                </tbody>
              </table> */}

                {/* <h2 id="traffic" className="card-title mb-0">
                    Project Description
                </h2>
                <br/>
                <p>Hi Guys here is Team 6 from CS3240! Here is our plan for the design proejct:</p>
                <p>NUSTeams is a centralized, cross-faculty, team-building platform that aims to connect like-minded students in order to create a diverse, collaborative culture in NUS.</p>
                <p>As the core feature, NUSTeams allows users to build teams and start collaborating. Users can create public recruitment posts to reach out to the diverse user base. For users who would want a more private option, they can send private team invites to specific users or apply to teams that are actively recruiting. Users can customise their team specifications such as recruitment status, public/private team, team profile, project description to provide information to the users.</p>
                <p>To begin with, unfamiliarity is one of the main reasons that make collaboration difficult for NUS students, especially beyond their social circle. To help students better evaluate their potential teammates' academic background information and related skill sets, NUSTeams introduces a manageable personal profile with a list of past projects and peer recommendations. Students can get a basic understanding of each other's capacity before moving to the next step.</p>
                <p>For students to reach out easier to others who are actively looking for a project team, before officially joining/ building a team, students can firstly talk via the chat room. This is aimed to provide students with a convenient way for real-time information exchange beyond the portfolio and profile without exposing their private contact information if they don’t want to.(telegram, WhatsApp).

We hope the two features above can reduce the initial barriers for students building/finding teams, especially out of their social circle.
</p> */}
              </CCol>
          </CRow>
          {/* <MainChartExample style={{height: '300px', marginTop: '40px'}}/> */}
        </CCardBody>
        {/* <CCardFooter>    
        </CCardFooter> */}
      </CCard>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm='12' md="12">
            <h3>Teammates</h3>
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
                    {/* <tr>
                      <td className="text-center">
                        <div className="c-avatar">
                          <img src={'avatars/2.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                          <span className="c-avatar-status bg-danger"></span>
                        </div>
                      </td>
                      <td>
                        <div>Avram Tarasios</div>
                        <div className="small text-muted">

                          <span>Recurring</span> | Registered: Jan 1, 2015
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
                        <div className="small text-muted">Last login</div>
                        <strong>5 minutes ago</strong>
                      </td>
                    </tr> */}
                    {/* <tr>
                      <td className="text-center">
                        <div className="c-avatar">
                          <img src={'avatars/3.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                          <span className="c-avatar-status bg-warning"></span>
                        </div>
                      </td>
                      <td>
                        <div>Quintin Ed</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
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
                        <div className="small text-muted">Last login</div>
                        <strong>1 hour ago</strong>
                      </td>
                    </tr> */}
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
                    
                  </tbody>
                </table>
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
                <CCol sm='12' md="3" >
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

export default ProjectDetails
