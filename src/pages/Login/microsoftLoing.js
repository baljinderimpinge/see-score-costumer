import { AuthenticatedTemplate, UnauthenticatedTemplate,useMsal, MsalProvider } from "@azure/msal-react";
import { loginRequest } from '../../lib/authConfig';


const WrapedView = ()=>{
    const {instance} = useMsal()
    const activeAccount = instance.getActiveAccount()
    const handleRediret =()=>{
      instance
      .loginRedirect({
        ...loginRequest,
        prompt:"create"
      })
    }
    return(
      <div className='app'>
        <AuthenticatedTemplate>
          {
            activeAccount?(
              <p>
                "hello"
              </p>
            ):null
          }
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <button onClick={handleRediret}>
            sign in 
          </button>
        </UnauthenticatedTemplate>
      </div>
    )
  }
const MicrosoftLoing = ({Instance}) => {

//    const 
    return (
        <MsalProvider instance={Instance}>
<WrapedView/>
</MsalProvider>
    );
};

export default MicrosoftLoing;



















// import React, { useState } from 'react';
// import axios from 'axios';
// import { API_BASE_URL } from '../../lib/constant';
// import { useNavigate } from 'react-router-dom';

// const MicrosoftLoing = () => {
//     const [tenantId, setTenantId] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const validateInput = () => {
//         // Implement your validation criteria here
//         if (!tenantId.trim()) {
//             setError('Please enter a valid azure tenant id or domain');
//             return false;
//         }
//         return true;
//     };
//     const getScore = async () => {
//         if (validateInput()) {
//             navigate(`/Dashboard/${tenantId}`);
//         }
//     };
//     return (
//         <div className="login-box">
//             <label style={{ color: "#fff", fontSize: "16px" }}>Please enter your azure tenant id or domain</label>
//             <input style={{ width: "75%" }}
//                 placeholder='Please enter your azure tenant id / domain'
//                 value={tenantId}
//                 onChange={(e) => {
//                     setTenantId(e.target.value);
//                     setError(''); // Clear error message when input changes
//                 }}
//             />
//             {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
//             <button disabled={tenantId ? false : true} onClick={getScore} className="btn btn-primary">
//                 Submit
//             </button>
//         </div>
//     );
// };

// export default MicrosoftLoing;
