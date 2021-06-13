import Chart from "../Chart/Chart";
import Feature from "../Infofeachers/Feature";
import "./home.css";
import { userData } from "../../dummyData";
import TableFood from "../tableFood/TableFood";
import Table2 from "../widgetLg/Table2";


export default function Home() {
    return (
        <div className="home">
           <Feature />
           <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
           <div className="homeWidgets">
                <TableFood />
                <Table2/>
           </div>
        </div>
    )
}
