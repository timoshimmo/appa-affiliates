import React, { useEffect, useMemo, useState } from 'react';
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Spinner } from 'reactstrap';
import moment from 'moment';

const CommissionsTable = props => {

  const [display, setDisplay] = useState(false);
  const [tableData, settableData] = useState([]);

  useEffect(() => {
    settableData(props.tableData);
}, [props]);

useEffect(() => {
  setTimeout(() => {
    setDisplay(true)
  }, 3000);
}, [])


  const columns = useMemo(
    () => [
      {
        Header: "Client",
        accessor: cellProps =>
          (
            <span>{cellProps.rate_id === "1" ? cellProps.delivery_man.f_name + " " + cellProps.delivery_man.l_name
             : cellProps.rate_id === "2" ? cellProps.business.name : cellProps.user.f_name + " " + cellProps.user.l_name}</span>
          ),
        disableFilters: true,
        filterable: false,
      },

      {
        Header: "Created",
        accessor: "created_at",
        Cell: row => <span>{moment(row.value).format("YYYY-MM-DD")}</span>,
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Client Category",
        accessor: "rate_id",
        disableFilters: true,
        filterable: true,
        Cell: (row) => {
          return <span className={row.value === "1" ? 'badge badge-soft-info p-2' : row.value === "2" ? 'badge badge-soft-primary p-2' : 'badge badge-soft-danger p-2'}>{row.value  === "1" ? "Drivers" : row.value  === "2" ? "Businesses" : "Customer"}</span>
        },
      },
      {
        Header: "Rates",
        accessor: "rate_value",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Rate Type",
        accessor: "rate_type",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Amount",
        accessor: "amount",
        disableFilters: true,
        filterable: false,
      }
    ],
    []
  );

  return (
    <React.Fragment key={props.tableData}>
      {typeof props.tableData !== 'undefined' && display ?
        props.tableData.length > 0 ?
          <TableContainer
            columns={(columns || [])}
            data={(props.tableData || [])}
            isPagination={props.tableData.length > 5}
            isGlobalFilter={true}
            iscustomPageSize={false}
            isBordered={false}
            customPageSize={5}
            className="custom-header-css table align-middle table-nowrap"
            tableClassName="table-centered align-middle table-nowrap mb-0"
            theadClassName="text-muted table-light"
            SearchPlaceholder='Search...'
          /> 
          : 
          <div className="d-flex flex-column align-items-center w-100 py-4">
              <i className={"ri-alert-fill display-1 text-xl text-warning"}></i>
              <p className='text-muted'>No Data Found</p>
          </div>
        : 
        <div className="text-center"><Spinner animation="border" variant="primary" /></div>
      }
    </React.Fragment>
  );
};


export { CommissionsTable };