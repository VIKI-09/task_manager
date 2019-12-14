import React,{Component}  from 'react';
import  { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { createStore} from 'redux';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';

const API_URL = 'https://34.65.44.222/tam_processes'

class DataTable extends Component {


  render(){
    return(
      <div  style={{maxWidth:'100%'}}>
        <MaterialTable
          columns = {[
            {title: 'ID', field: 'id'},
            {title: 'Airline', field: 'airline'},
            {title: 'Airport', field: 'airport'},
            {title: 'Ground Handler', field: 'ground_handler'},
            {title: 'Flight No.', field: 'flight_no'},
            {title: 'Date', field: 'date'},
            {title: 'Terminal', field: 'terminal'},
            {title: 'Gate', field: 'gate'},
            {title: 'Estimated Departure', field: 'estimated_departure'},
            {title: 'Actual Departure', field: 'actual_departure'},
            {title: 'Category', field: 'category'},
            {title: 'Status', field: 'status'},
            {title: 'Last Update', field: 'last_update'},
          ]}
          data={this.props}
          title="Test_data_table"
        />
      </div>

    )
  }
}

export default DataTable;
