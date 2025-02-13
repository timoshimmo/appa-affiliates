import React, { useEffect, useMemo, useState } from 'react';
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Spinner } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { getUsersTableData } from '../../store/actions';
import moment from 'moment';

const UsersTable = () => {

  const [display, setDisplay] = useState(false);

  const dispatch = useDispatch();
  const [tableData, settableData] = useState([]);

  const { usersTableData } = useSelector((state) => ({
    usersTableData: state.Users.usersData,
  }));

useEffect(() => {
  settableData(usersTableData);
}, [usersTableData]);

useEffect(() => {
  const obj = JSON.parse(sessionStorage.getItem("authUser"));
  dispatch(getUsersTableData(obj.id));
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
        accessor: "user",
        Cell: (row) => {
          return <span>{row.value.f_name + " " + row.value.l_name}</span>
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
        Header: "Status",
        accessor: "user.is_phone_verified",
        disableFilters: true,
        filterable: false,
        Cell: (row) => {
          return <span className={row.value === 1 ? 'badge badge-soft-success p-2' : 'badge badge-soft-danger p-2'}>{row.value === 1 ? 'Active' : 'Inactive'}</span>
        },
      },
      {
        Header: () => <div className="text-center">Order Count</div>,
        accessor: "user.order_count",
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
        <div className="text-center"><Spinner animation="border" variant="primary" /></div>
      }
    </React.Fragment >
  );
};


export { UsersTable };