import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles({
    spacing: {
      paddingTop: "100px",
      flexGrow: 1,
    },
    formControl: {
      borderRadius: "10px",
      minWidth:"250px"
    },
    table: {
      minWidth: 650,
    },
    button:{
      borderRadius: "25px",
      textTransform: "none"
    }
  });
const MonitoringEngg =() =>{
    const classes = useStyles();
    const [state, setState] = React.useState({
      gbgf: '',
      name: 'hai',
    });
    const handleChange = (event) => {
      const name = event.target.name;
      setState({
        ...state,
        [name]: event.target.value,
      });
    };
    function createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
    }
    const rows = [
      createData('1234567', 'Buisness Integration Layer Customer Channel USA', 'Tier 0', 
      <Button className={classes.button} size="small" variant="contained" color="primary">
      Adopt
      </Button>, <Button className={classes.button} variant="outlined" color="primary">
      Primary
      </Button>
      ),
      createData('1234567', 'Buisness Integration Layer Customer Channel USA', 'Tier 0',
      <Button className={classes.button} size="small" variant="contained" color="primary">
      Adopt
      </Button>,
      <Button className={classes.button} variant="outlined" color="primary">
      Primary
      </Button>
      ),
      createData('1234567', 'Buisness Integration Layer Customer Channel USA', 'Tier 0',
      <Button className={classes.button} size="small" variant="contained" color="primary">
      Adopt
      </Button>,
      <Button className={classes.button} variant="outlined" color="primary">
      Primary
      </Button>),
      createData('1234567', 'Buisness Integration Layer Customer Channel USA', 'Tier 0', 
      <Button className={classes.button} size="small" variant="contained" color="primary">
      Adopt
      </Button>, <Button className={classes.button} variant="outlined" color="primary">
      Primary
      </Button>
      ),
      createData('1234567', 'Buisness Integration Layer Customer Channel USA', 'Tier 0',
      <Button className={classes.button} size="small" variant="contained" color="primary">
      Adopt
      </Button>,
      <Button className={classes.button} variant="outlined" color="primary">
      Primary
      </Button>
      ),
    ];
    return (
        <div className= {classes.spacing}>
            <h1>Monitoring Engineering</h1>
            Selecte Attributes
            <div container>
            <Grid container spacing={3}>
            <Grid item xs>
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="gbgf-native-label-placeholder">
                GBGF
              </InputLabel>
              <NativeSelect
                value={state.gbgf}
                onChange={handleChange}
                inputProps={{
                  name: 'gbgf',
                  id: 'gbgf-native-label-placeholder',
                }}
                
              >
                <option value="">None</option>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </NativeSelect>
              </FormControl>
            </Grid>
            <Grid item xs>
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="gbgf-native-label-placeholder">
                GBGF
              </InputLabel>
              <NativeSelect
                value={state.gbgf}
                onChange={handleChange}
                inputProps={{
                  name: 'gbgf',
                  id: 'gbgf-native-label-placeholder',
                }}
                
              >
                <option value="">None</option>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </NativeSelect>
              </FormControl>
            </Grid>
            <Grid item xs>
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="gbgf-native-label-placeholder">
                GBGF
              </InputLabel>
              <NativeSelect
                value={state.gbgf}
                onChange={handleChange}
                inputProps={{
                  name: 'gbgf',
                  id: 'gbgf-native-label-placeholder',
                }}
                
              >
                <option value="">None</option>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </NativeSelect>
              </FormControl>
            </Grid>
          </Grid>
          </div>
          <Box mt={4} >
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="caption table">
              <caption>A basic table example with a caption</caption>
              <TableHead>
                <TableRow>
                  <TableCell align="center">EIM ID</TableCell>
                  <TableCell align="center">Applications</TableCell>
                  <TableCell align="center">Criticality</TableCell>
                  <TableCell align="center">Tool Adoption</TableCell>
                  <TableCell align="center">Maturity score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell align="center" component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Box>
        </div>
    )
   };
export default MonitoringEngg;