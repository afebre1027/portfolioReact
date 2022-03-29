import React from "react";

function Resume() {
  return (
    <div className="ribbon l-box-lrg pure-g ">
      <h1 className="history-title">Past Work History</h1>

      <div
        id="careerHistory"
        className="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5"
      >
        <div className="history pure-u-1 pure-u-md-1-2 pure-u-lg-3-5 ">
          <div className="w3-card-4">
            <header className="w3-container history-header">
              <h2>General Manager</h2>
            </header>

            <div className="w3-container">
              <p>
                Responsible for managing general profit margins, creating
                reports, and submitting them weekly to the Regional Manager and
                Vice-President. Supervise salary managers and their departments,
                as well as delegating tasks to ensure optimum sales and customer
                experience. In charge of reviewing, creating, and coordinating
                staff's schedules, private, and public events. Responsible for
                overseeing communications with a variety of sales
                representatives about special orders, or promotions, for special
                events
              </p>
            </div>

            <footer className="w3-container history-footer">
              <h5>Hickory Tavern | Charlotte, NC </h5>
            </footer>
          </div>
        </div>
        <div className="history pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">
          <div className="w3-card-4">
            <header className="w3-container history-header">
              <h2>Bar Manager</h2>
            </header>

            <div className="w3-container">
              <p>
                {" "}
                Created crave-able experiences in high volume sports and family
                restaurant. Completed daily invoices, deposits, and ordering,
                while operating a full functioning establishment. Maintained
                proper beer, liquor, and wine inventory, as well as, their
                organization. Improved beverage profits by increasing bar sales,
                and labor efficiency. Maintained healthy relationships with team
                members and guests, thus, elevating the overall experience.
                Focused on meeting all guest needs at all times. Created
                schedule templates according to sales expectations for several
                departments.
              </p>
            </div>

            <footer className="w3-container history-footer">
              <h5>Hickory Tavern | Hilton Head Island, SC</h5>
            </footer>
          </div>
        </div>
        <div className="history pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">
          <div className="w3-card-4">
            <header className="w3-container history-header">
              <h2>Server Manager</h2>
            </header>
            <div className="w3-container">
              <p>
                {" "}
                Interviewed and hired applying personnel. Trained new staff
                members to the highest standards of hospitality. Created new
                employee profiles as well as employee's schedule. Recorded daily
                server reports and the restaurant's overall income deposits.
                Took care of several inventories and orders of products. Made
                sure of ultimate customer satisfaction. Organized contract
                parties that were held inside the restaurant. Maintained low
                labor and food cost.
              </p>
            </div>

            <footer className="w3-container history-footer">
              <h5>Belford's Savannah Seafood and Steak | Savannah, GA </h5>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
