import DashboardCard from "./DashboardCard";
import {useState, useEffect} from "react";

function DashboardContent() {

    // const [myVal, setMyVal] = useState(0);

    // console.log("some val")

    // useEffect(() => {
    //     setMyVal(1)
    // }, [])

    return (
        <div className="dashboard-content">
            <DashboardCard title="Review" cardText="1256" />
            <DashboardCard title="Average Rating" cardText="18,78,789" />
            <DashboardCard title="Website visitors" cardText="789" fig="https://picsum.photos/200/300?grayscale" />
        </div>
    )
}

export default DashboardContent;