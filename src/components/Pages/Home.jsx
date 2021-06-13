import Chart from "../Chart/Chart";
import Feature from "../Infofeachers/Feature";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import TableFood from "../tableFood/TableFood";


export default function Home() {
    return (
        <div className="home">
           <Feature />
           <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
           <div className="homeWidgets">
                <TableFood />
                <WidgetLg />
           </div>
        </div>
    )
}
