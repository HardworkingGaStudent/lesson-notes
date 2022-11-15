function DashboardCard(props) {

  const valArr = props.cardText.split(",");

  let figContent = ""
  if (props.fig) {
    figContent = (
        <div className="card-img">
            <figure>
                <img src={props.fig} alt="" />
            </figure>
        </div>
    )
  }
  
  return (
    <div className="dashboard-card">
      <h4>{props.title || "Dashboard Card"}</h4>
      <div className="card-content">
        {
            valArr.length === 1 ? (
                <p>{props.cardText}</p>
            ) : (
                <ul>
                    { 
                        valArr.map((item, idx) => {
                            return (
                                <li key={idx}>{item}</li>
                            )
                        })
                    }
                </ul>
            )
        }
      </div>
      
      {figContent}

    </div>
  );
}
export default DashboardCard;
