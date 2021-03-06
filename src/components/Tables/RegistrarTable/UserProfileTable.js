import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import axiosInstance from '../../../helpers/axios';


import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';


const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const UserProfileTable = () => {

    const [userProfileData, setUserProfileData] = useState([])
    //const [changeTrigger, setChangeTrigger] = useState(false);

    const fetchUserProfileData = async () => {
        try {
            const { data } = await axiosInstance.get('/user-profile');
            setUserProfileData(data.result);
        } catch (err) {
            console.error(err.message)
        }
    };

    useEffect(() => {
        fetchUserProfileData();
    }, []);

    return (
        <MaterialTable
            title="User Profile"
            icons = {tableIcons}
            data = {userProfileData}
            options={{
                draggable: false,
                sorting: false,
                search:true,
                actionsColumnIndex: -1,
                rowStyle: {
                backgroundColor: '#fdfbfb',
                },
                headerStyle: {
                    backgroundColor: '#e4e4e3',
                    color: '#333333',
                    fontFamily: 'Arial',
                    fontWeight: '700',
                    borderRight: '1px solid #d7d7d7',
                    textAlign: 'center'
                },
                cellStyle: {
                    fontFamily: 'Tahoma, sans-serif',
                    fontSize: '12px',
                    textAlign: 'center',
                    borderRight: '1px solid #d7d7d7'
                },
            }}
            columns={[
                {
                    title: 'ID', field: 'userid',
                },
                {
                    title: 'Lastname', field: 'lastname',
                },
                {
                    title: 'Firstname', field: 'firstname',
                },
                {
                    title: 'Middlename', field: 'middlename',
                },
                {
                    title: 'Birthdate', field: 'birthdate',
                },
                {
                    title: 'Gender', field: 'gender',
                },
                {
                    title: 'Address', field: 'address',
                },
                {
                    title: 'Contact #', field: 'contact_number',
                },
                {
                    title: 'Email', field: 'email',
                },
                {
                    title: 'Role', field: 'role',
                },
                
                
            ]}
            editable={{
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        // setTimeout(() => {
                        //     const dataUpdate = [...userProfileData];
                        //     const index = oldData.tableData.id;
                        //     dataUpdate[index] = newData;

                        //     axiosInstance.put('api/registrar/update/user',
                        //         {
                        //             userID: userProfileData[index].userid,
                        //             lastname: dataUpdate[index].lastname,
                        //             firstname: dataUpdate[index].firstname,
                        //             middlename: dataUpdate[index].middlename,
                        //             birthdate: dataUpdate[index].birthdate,
                        //             gender: dataUpdate[index].gender,
                        //             address: dataUpdate[index].address,
                        //             contactNo: dataUpdate[index].contact_number,
                        //             emailAddress: dataUpdate[index].email_address,
                        //             username: dataUpdate[index].username,
                        //             role: dataUpdate[index].role,
                        //         }).then((response) => {
                        //             if (response.data.error) {
                        //                 //response modal
                        //                 reject();
                        //             } else {
                        //                 setUserProfileData([...dataUpdate]);
                        //                 setChangeTrigger(!changeTrigger);
                        //                 resolve();
                        //             }
                        //         });
                        // }, 1000)
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        // setTimeout(() => {
                        //     const dataDelete = [...userProfileData];
                        //     const index = oldData.tableData.id;
                        //     dataDelete.splice(index, 1);

                        //     axiosInstance.post('api/registrar/delete/user',
                        //         {
                        //             userid: userProfileData[index].userid,
                        //         }).then((response) => {
                        //             if (response.data.error) {
                        //                 //response modal
                        //                 reject();
                        //             } else {
                        //                 setUserProfileData([...dataDelete]);
                        //                 setChangeTrigger(!changeTrigger);
                        //                 resolve();
                        //             }
                        //         });
                        // }, 1000)
                    }),
            }}
        />
    )
}

export default UserProfileTable