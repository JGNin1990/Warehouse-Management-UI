import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/system/Container";
import { styled } from '@mui/material/styles';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Button from "@mui/material/Button";
import "./App.css"
import { grey } from "@mui/material/colors";
import BarChartIcon from '@mui/icons-material/BarChart';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor:theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.dark,
// }));

const ButtonTag = styled(Button)({
  backgroundColor: grey[300],
  color: "#121212",
  borderRadius: "2px",
  fontFamily: 'Epilogue',
  textTransform: "none" ,
  boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px" ,
  '&:hover': {
    backgroundColor: "#fff",
  },
  '&:focus': {
    backgroundColor: '#fff',
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
  }
})


export default function Home () {
  return (
    <Container maxWidth={"md"}>
      <Grid container 
      height= "100vh"
      direction= "row"
      alignItems="center"
      justifyContent="center"

      >
        <Grid 
        item
        container 
        rowSpacing={5} 
        columnSpacing={2}
        textAlign="center"
        >
          <Grid item xs={12} sm={6} md={4} >
            <ButtonTag variant="contained" >
              <LocalShippingIcon className="iconControl" fontSize="50px"/>
              <h3>Receiving</h3>
            </ButtonTag>
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
            <ButtonTag variant="contained" >
              <MarkEmailUnreadIcon className="iconControl" fontSize="50px"/>
              <h3>Order Mails</h3>
            </ButtonTag>
          </Grid>  
          <Grid item xs={12} sm={6} md={4} >
            <ButtonTag variant="contained" >
              <WarehouseIcon className="iconControl" fontSize="50px"/>
              <h3>Warehouse State</h3>
            </ButtonTag>
          </Grid>  
          <Grid item xs={12} sm={6} md={4} >
            <ButtonTag variant="contained" >
              <AccountTreeIcon className="iconControl" fontSize="50px"/>
              <h3>Employee State</h3>
            </ButtonTag>
          </Grid>  
          <Grid item xs={12} sm={6} md={4} >
            <ButtonTag variant="contained" >
              <CurrencyExchangeIcon className="iconControl" fontSize="50px"/>
              <h3>Income & Outcome</h3>
            </ButtonTag>
          </Grid>  
          <Grid item xs={12} sm={6} md={4} >
            <ButtonTag variant="contained" >
              <BarChartIcon className="iconControl" fontSize="50px"/>
              <h3>Weekly State</h3>
            </ButtonTag>
          </Grid>  
          <Grid item xs={12} sm={6} md={4} >
            <ButtonTag variant="contained" >
              <ManageHistoryIcon className="iconControl" fontSize="50px"/>
              <h3>History</h3>
            </ButtonTag>
          </Grid>  
          <Grid item xs={12} sm={6} md={4} >
            <ButtonTag variant="contained" >
              <ReportProblemIcon className="iconControl" fontSize="50px"/>
              <h3>Reports</h3>
            </ButtonTag>
          </Grid>
        </Grid>

      </Grid>
    </Container>
  )
}