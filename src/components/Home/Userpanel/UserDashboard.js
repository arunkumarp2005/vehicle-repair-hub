// // src/components/UserDashboard.js
// import React from 'react';
// import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
// import './UserDashboard.css';

// const UserDashboard = () => {
//   const userServices = [
//     { title: "Scheduled Services", description: "View and manage your scheduled services." },
//     { title: "Service History", description: "Access your complete service history." },
//     { title: "Profile", description: "Update your personal information and preferences." },
//   ];

//   return (
//     <div className="user-dashboard" id="user-dashboard">
//       <Container>
//         <Typography variant="h4" gutterBottom align="center">User Dashboard</Typography>
//         <Grid container spacing={4}>
//           {userServices.map((service, index) => (
//             <Grid item xs={12} md={6} lg={4} key={index}>
//               <Card className="dashboard-card">
//                 <CardContent>
//                   <Typography variant="h6" gutterBottom>{service.title}</Typography>
//                   <Typography variant="body2">{service.description}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default UserDashboard;
