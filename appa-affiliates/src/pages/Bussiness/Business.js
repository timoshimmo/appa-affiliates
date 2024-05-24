import React, { useEffect, useMemo, useState } from 'react';
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Spinner } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import moment from 'moment';
import { getBusinessesTableData } from '../../store/actions';

const BusinessTable = () => {

  const dispatch = useDispatch();

  const [display, setDisplay] = useState(false);
  const [tableData, settableData] = useState([]);

  const { bizsTableData } = useSelector((state) => ({
    bizsTableData: state.Businesses.businessData,
  }));

  useEffect(() => {
    settableData(bizsTableData);
  }, [bizsTableData]);
  
  useEffect(() => {
    const obj = JSON.parse(sessionStorage.getItem("authUser"));
    dispatch(getBusinessesTableData(obj.id));
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
        accessor: "business.name",
        Cell: (row) => {
          return <span>{row.value}</span>
        },
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Address",
        accessor: "business.address",
        disableFilters: true,
        filterable: true,
        Cell: (row) => {
          return <span>{row.value}</span>
        },
      },
      {
        Header: "Phone",
        accessor: "business.phone",
        disableFilters: true,
        filterable: false,
        Cell: (row) => {
          return <span>{row.value}</span>
        },
      },
      {
        Header: "Status",
        accessor: "business.active",
        disableFilters: true,
        filterable: false,
        Cell: (row) => {
          return <span className={row.value === true ? 'badge badge-soft-success p-2' : 'badge badge-soft-danger p-2'}>{row.value === true ? 'Active' : 'Inactive'}</span>
        },
      },
      {
        Header: "Added",
        accessor: "create_at",
        Cell: row => <span>{moment(row.created_at).format("YYYY-MM-DD")}</span>,
        disableFilters: true,
        filterable: false,
      },
    ],
    []
  );

  return (
    <React.Fragment >
      {typeof tableData != 'undefined' && display ?
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
      <div className="text-center"><Spinner animation="border" variant="primary" /></div>}
    </React.Fragment >
  );
};


export { BusinessTable };