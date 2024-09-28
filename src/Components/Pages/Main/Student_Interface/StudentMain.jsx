import React from 'react'
import './StudentMain.css'
import '../../root.css'

// SVG ICONS
const DashboardIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -1100 960 960" width="24px" fill="#008cff"><path d="M240-200h133.85v-237.69h212.3V-200H720v-360L480-740.77 240-560v360Zm-60 60v-450l300-225.77L780-590v450H526.15v-237.69h-92.3V-140H180Zm300-330.38Z"/></svg>
);
const DashboardIconU = () => (
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -1100 960 960" width="24px" fill="#c4c5c7"><path d="M240-200h133.85v-237.69h212.3V-200H720v-360L480-740.77 240-560v360Zm-60 60v-450l300-225.77L780-590v450H526.15v-237.69h-92.3V-140H180Zm300-330.38Z"/></svg>
);
const ActivityIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -1100 960 960" width="24px" fill="#008cff"><path d="M212.31-100Q182-100 161-121q-21-21-21-51.31v-535.38Q140-738 161-759q21-21 51.31-21h55.38v-84.61h61.54V-780h303.08v-84.61h60V-780h55.38Q778-780 799-759q21 21 21 51.31v535.38Q820-142 799-121q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-375.38H200v375.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM200-607.69h560v-100q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v100Zm0 0V-720v112.31Z"/></svg>
);
const ActivityIconU = () => (
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -1100 990 990" width="24px" fill="#c4c5c7"><path d="M212.31-100Q182-100 161-121q-21-21-21-51.31v-535.38Q140-738 161-759q21-21 51.31-21h55.38v-84.61h61.54V-780h303.08v-84.61h60V-780h55.38Q778-780 799-759q21 21 21 51.31v535.38Q820-142 799-121q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-375.38H200v375.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM200-607.69h560v-100q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v100Zm0 0V-720v112.31Z"/></svg>
);
const Bell=()=>(
<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#434343"><path d="M205.13-204.62q-10.85 0-17.99-7.14-7.14-7.15-7.14-18t7.14-17.98q7.14-7.13 17.99-7.13h47.18v-310.1q0-81.06 49.47-144.16 49.48-63.1 128.22-79.05V-810q0-20.83 14.57-35.42Q459.14-860 479.95-860q20.82 0 35.43 14.58Q530-830.83 530-810v21.95q78.74 15.82 128.22 78.92 49.47 63.1 49.47 144.16v310.1h47.18q10.85 0 17.99 7.15 7.14 7.14 7.14 17.99 0 10.86-7.14 17.99-7.14 7.12-17.99 7.12H205.13Zm274.8 112.31q-29.85 0-51.04-21.24-21.2-21.24-21.2-51.07h144.62q0 29.93-21.26 51.12-21.26 21.19-51.12 21.19Z"/></svg>
);

const BellUnread=()=>(
<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#434343"><path d="M479.93-92.31q-29.85 0-51.04-21.24-21.2-21.24-21.2-51.07h144.62q0 29.93-21.26 51.12-21.26 21.19-51.12 21.19Zm-274.8-112.31q-10.68 0-17.9-7.26-7.23-7.26-7.23-18 0-10.73 7.23-17.86 7.22-7.13 17.9-7.13h47.18v-310.1q0-81.06 49.47-144.16 49.48-63.1 128.22-79.05V-810q0-20.83 14.57-35.42Q459.14-860 479.95-860q19.86 0 33.8 13.1 13.94 13.09 15.84 32.03v1.64q-16 23.79-24.26 50.93-8.25 27.13-8.25 55.51 0 74.69 49.3 128.91 49.31 54.21 121.31 62.01 9.87 1.49 20 1.9 10.13.41 20-.8v259.9h47.18q10.68 0 17.9 7.26 7.23 7.27 7.23 18 0 10.74-7.23 17.87-7.22 7.12-17.9 7.12H205.13Zm484.72-397.05q-43.83 0-74.45-30.67-30.63-30.68-30.63-74.5 0-43.83 30.67-74.45 30.68-30.63 74.5-30.63 43.83 0 74.46 30.68 30.62 30.67 30.62 74.49 0 43.83-30.67 74.46-30.68 30.62-74.5 30.62Z"/></svg>);

const Profile=()=>(
<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#434343"><path d="M234.97-258.15q56.95-38.26 116.33-59.23 59.37-20.98 128.7-20.98 69.33 0 128.91 20.98 59.58 20.97 116.53 59.23 41.51-47.36 62.91-102.77 21.39-55.41 21.39-119.08 0-138.69-95.52-234.22-95.53-95.52-234.22-95.52t-234.22 95.52Q150.26-618.69 150.26-480q0 63.67 21.6 119.08t63.11 102.77Zm244.91-196.72q-54.24 0-91.32-37.2-37.07-37.2-37.07-91.44 0-54.23 37.2-91.31 37.2-37.08 91.43-37.08 54.24 0 91.32 37.2 37.07 37.2 37.07 91.44 0 54.23-37.2 91.31-37.2 37.08-91.43 37.08ZM479.73-100q-78.99 0-148.43-29.77-69.43-29.77-120.8-81.41-51.37-51.64-80.93-120.75Q100-401.04 100-480.33q0-79.04 29.77-148.28t81.41-120.54q51.64-51.31 120.75-81.08Q401.04-860 480.33-860q79.04 0 148.28 29.77t120.54 81.08q51.31 51.3 81.08 120.65Q860-559.15 860-480.18q0 79.24-29.77 148.3-29.77 69.06-81.08 120.7-51.3 51.64-120.74 81.41Q558.98-100 479.73-100Z"/></svg>
);

// RESPONSIVEE

const Bell2=()=>(
  <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="40px" fill="#434343"><path d="M205.13-204.62q-10.85 0-17.99-7.14-7.14-7.15-7.14-18t7.14-17.98q7.14-7.13 17.99-7.13h47.18v-310.1q0-81.06 49.47-144.16 49.48-63.1 128.22-79.05V-810q0-20.83 14.57-35.42Q459.14-860 479.95-860q20.82 0 35.43 14.58Q530-830.83 530-810v21.95q78.74 15.82 128.22 78.92 49.47 63.1 49.47 144.16v310.1h47.18q10.85 0 17.99 7.15 7.14 7.14 7.14 17.99 0 10.86-7.14 17.99-7.14 7.12-17.99 7.12H205.13Zm274.8 112.31q-29.85 0-51.04-21.24-21.2-21.24-21.2-51.07h144.62q0 29.93-21.26 51.12-21.26 21.19-51.12 21.19Z"/></svg>
  );
  
  const BellUnread2=()=>(
  <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="40px" fill="#434343"><path d="M479.93-92.31q-29.85 0-51.04-21.24-21.2-21.24-21.2-51.07h144.62q0 29.93-21.26 51.12-21.26 21.19-51.12 21.19Zm-274.8-112.31q-10.68 0-17.9-7.26-7.23-7.26-7.23-18 0-10.73 7.23-17.86 7.22-7.13 17.9-7.13h47.18v-310.1q0-81.06 49.47-144.16 49.48-63.1 128.22-79.05V-810q0-20.83 14.57-35.42Q459.14-860 479.95-860q19.86 0 33.8 13.1 13.94 13.09 15.84 32.03v1.64q-16 23.79-24.26 50.93-8.25 27.13-8.25 55.51 0 74.69 49.3 128.91 49.31 54.21 121.31 62.01 9.87 1.49 20 1.9 10.13.41 20-.8v259.9h47.18q10.68 0 17.9 7.26 7.23 7.27 7.23 18 0 10.74-7.23 17.87-7.22 7.12-17.9 7.12H205.13Zm484.72-397.05q-43.83 0-74.45-30.67-30.63-30.68-30.63-74.5 0-43.83 30.67-74.45 30.68-30.63 74.5-30.63 43.83 0 74.46 30.68 30.62 30.67 30.62 74.49 0 43.83-30.67 74.46-30.68 30.62-74.5 30.62Z"/></svg>);
  
  const Profile2=()=>(
  <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="40px" fill="#434343"><path d="M234.97-258.15q56.95-38.26 116.33-59.23 59.37-20.98 128.7-20.98 69.33 0 128.91 20.98 59.58 20.97 116.53 59.23 41.51-47.36 62.91-102.77 21.39-55.41 21.39-119.08 0-138.69-95.52-234.22-95.53-95.52-234.22-95.52t-234.22 95.52Q150.26-618.69 150.26-480q0 63.67 21.6 119.08t63.11 102.77Zm244.91-196.72q-54.24 0-91.32-37.2-37.07-37.2-37.07-91.44 0-54.23 37.2-91.31 37.2-37.08 91.43-37.08 54.24 0 91.32 37.2 37.07 37.2 37.07 91.44 0 54.23-37.2 91.31-37.2 37.08-91.43 37.08ZM479.73-100q-78.99 0-148.43-29.77-69.43-29.77-120.8-81.41-51.37-51.64-80.93-120.75Q100-401.04 100-480.33q0-79.04 29.77-148.28t81.41-120.54q51.64-51.31 120.75-81.08Q401.04-860 480.33-860q79.04 0 148.28 29.77t120.54 81.08q51.31 51.3 81.08 120.65Q860-559.15 860-480.18q0 79.24-29.77 148.3-29.77 69.06-81.08 120.7-51.3 51.64-120.74 81.41Q558.98-100 479.73-100Z"/></svg>
  );

function StudentMain() {
  return (
    <div>
        

      <div id="leftNav">
        <br/>
          <div  id="logo">
            <img></img>
          </div>
          <br/> <br/><br/> <br/> <br/><br/>
          <ul className="fontStyleNav fontSize1" id="navList" itemType="none">
            <li className=" navList1" id="navList">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<DashboardIcon /><font className="nav1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dashboard</font></li>
            <li className=" navList2" id="navList">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ActivityIconU /><font className="nav1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Activity</font></li>
          </ul>

      </div>

      <div id="rightNav">
      <div id="topFunctions2"><Bell2 /><font className="bell_profile2"/><Profile2 className="profile"/></div>
      <div id="topFunctions"><Bell/><font className="bell_profile"/><Profile className="profile"/> <font className="fontStyle1 fontColor2 occupation">STUDENT</font></div>
      <div  id="logo2">
            <img></img>
          </div>
      <div id="imgRight">
      
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        <p className="fontStyle1 fontColor2 head head1">Hello, STI Learner!</p>
        <p className="fontStyle1 fontColor1 head head2">Online Netpage 
                                              <br/>Environment <font class="head2_2" >&nbsp;(ONE)&nbsp;</font></p>
        <p className="fontStyle1 fontColor2 head head3">This platform is designed to create a seamless experience for users, facilitating smoother interactions and expediting the overall submission workflow.</p>
        <button className="fontStyle1" id="button">Submit Here</button>
        
      </div>

    </div>
  )
}

export default StudentMain