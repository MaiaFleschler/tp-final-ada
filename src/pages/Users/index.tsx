import { FC, useEffect, useState } from 'react'
import { Layout } from '../../components/layout'
import { useUsers } from '../../hooks';
import { User } from '../../types';
import './style.css'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { WithAuth } from '../../hoc';

const UsersPage: FC = () => {

    const { getUsers, removeUser } = useUsers();
    const [users, setUsers] = useState<User[]>();

    useEffect(() => {
        getUsers().then(response => {
            setUsers(response);
        });
    }, [getUsers]);

    const handlingClick = (id:string) => {
        removeUser(id);
    }


    return(
        <Layout>
            <div className="usersTableContainer">
            <table className="usersTable">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Birthdate</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
				<tbody>
                    {users?.map((user) => (
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.birthdate}</td>
                            <td><button onClick={() => handlingClick(`${user.id}`)}>{<DeleteTwoToneIcon />}</button></td>
                        </tr>
                    ))}
				</tbody>
			</table>
            </div>
        </Layout>
    )
}

export const Users = WithAuth(UsersPage)