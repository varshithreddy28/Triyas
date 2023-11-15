import React from "react";
import Table from "react-bootstrap/Table";
import "./table.css";
import Checkmark from "../../assests/checkmark.svg";

function TableCreoPlus() {
  const tableHeaderCP = [
    "View Creo+ Packages:",
    "Design Essentials",
    "Design Advanced",
    "Design Advanced Professional",
    "Design Premium",
    "Design Premium Professional",
  ];

  const creopls = [
    {
      name: "PTC Control Center",
      available: [true, true, true, false, false],
    },
    {
      name: "Real-Time Collaboration with Creo+",
      available: [true, true, true, false, false],
    },
  ];

  return (
    <div className="creo_table container creopls_tbl">
      <div className="table_header">Creo+ Design Packages</div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            {tableHeaderCP.map((header) => {
              return <th style={{ backgroundColor: 'white', color: '#475569', fontWeight: '700' }}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {creopls.map((content) => {
            return (
              <tr>
                <td style={{ backgroundColor: 'transparent', color: 'white', fontWeight: '500' }}>{content.name}</td>
                {content.available.map((isAvble) => {
                  return (
                    <td style={{ backgroundColor: 'transparent', color: 'white', fontWeight: '500' }}>
                      {isAvble ? (
                        <img
                          className="checkmark"
                          src={Checkmark}
                          alt=""
                          srcset=""
                        />
                      ) : (
                        "-"
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        {/*  */}
      </Table>
    </div>
  );
}

export default TableCreoPlus;
