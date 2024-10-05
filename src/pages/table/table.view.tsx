import axios from "axios";
import { useCallback, useEffect, useState } from "react";

interface DataProps {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const TableView = () => {
    const [data, setData] = useState<DataProps[]>();

    const getData = useCallback(async () => {
        const response = await axios.get("http://localhost:3000/dataUser")
        setData(response.data)
    }, []);

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Message</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item: DataProps, index: number) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.subject}</td>
                                <td>{item.message}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};
export default TableView;