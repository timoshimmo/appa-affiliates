import React, { useEffect, useMemo, useState } from 'react';
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Spinner } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { getDriversTableData } from '../../store/drivers/action';
import moment from 'moment';

const DriversTable = () => {

  const dispatch = useDispatch();

  const [display, setDisplay] = useState(false);
  const [tableData, settableData] = useState([]);

  const { driversTableData } = useSelector((state) => ({
    driversTableData: state.Drivers.driversData,
  }));

useEffect(() => {
  settableData(driversTableData);
}, [driversTableData]);

useEffect(() => {
  const obj = JSON.parse(sessionStorage.getItem("authUser"));
  dispatch(getDriversTableData(obj.id));
}, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true)
    }, 3000);
  }, [])


  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "delivery_man",
        Cell: (row) => {
          return <span>{row.value.f_name + " " + row.value.l_name}</span>
        },
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Email",
        accessor: "delivery_man.email",
        Cell: (row) => {
          return <span>{row.value}</span>
        },
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Added",
        accessor: "created_at",
        Cell: row => <span>{moment(row.created_at).format("YYYY-MM-DD")}</span>,
        disableFilters: true,
        filterable: false,
      },
      {
        Header: () => <div className="text-center">Order Count</div>,
        accessor: "delivery_man.order_count",
        disableFilters: true,
        filterable: false,
        width: "150",
        Cell: (row) => {
          return <div style={{ textAlign: 'center'}}>{row.value}</div>
        },
        center: true,
      }
    ],
    []
  );

  return (
    <React.Fragment >
      {typeof tableData != 'undefined' && display?
        tableData.length > 0 ?
          <TableContainer
            columns={(columns || [])}
            data={(tableData || [])}
            isPagination={tableData.length > 5}
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
    </React.Fragment >
  );
};


export { DriversTable };