import React from "react";
import Table from "react-bootstrap/Table";
import "./table.css";
import Checkmark from "../../assests/checkmark.svg";

function TableCreo() {
  const tableHeader = [
    "View Creo Packages:",
    "Creo Design Essentials",
    "Creo Design Advanced",
    "Creo Design Advanced Professional",
    "Creo Design Premium",
    "Creo Design Premium Professional",
  ];

  const tableContent = [
    {
      name: "Industry Standard 3D CAD Capabilities",
      available: [true, true, true, true, true],
    },
    {
      name: "Augmented Reality Design Process Visualization",
      available: [true, true, true, true, true],
    },
    {
      name: "Top-Down Design Process & Concurrent Engineering",
      available: [false, true, true, true, true],
    },
    {
      name: "Prismatic & Multi-surface Milling",
      available: [false, true, true, true, true],
    },
    {
      name: "Advanced Surfacing & Additive Manufacturing",
      available: [false, false, true, true, true],
    },
    {
      name: "GD&T & Tolerance Analysi",
      available: [false, false, true, true, true],
    },
    {
      name: "Mold Design Process & Mold Machining",
      available: [false, false, true, true, true],
    },
    {
      name: "Extended Collaboration",
      available: [false, false, false, true, true],
    },
    {
      name: "PTC Mathcad",
      available: [false, true, true, true, true],
    },
    {
      name: "Simulation, Basic CFD & Fatigue Advisor",
      available: [false, false, false, true, true],
    },
    {
      name: "Production Machining",
      available: [false, false, false, true, true],
    },
    {
      name: "Advanced Simulation & CFD",
      available: [false, false, false, false, true],
    },
    {
      name: "Options Modeler & Topology Optimization",
      available: [false, false, false, false, true],
    },
    {
      name: "Metal Printing & Complete Machining",
      available: [false, false, false, false, true],
    },
    {
      name: "PTC Control Center",
      available: [true, true, true, false, false],
    },
    {
      name: "Real-Time Collaboration with Creo+",
      available: [true, true, true, false, false],
    },
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
    <div className="creo_table container">
      <div className="table_header">Creo Design Packages</div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            {tableHeader.map((header) => {
              return <th>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {tableContent.map((content) => {
            return (
              <tr>
                <td>{content.name}</td>
                {content.available.map((isAvble) => {
                  return (
                    <td>
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
      </Table>
    </div>
  );
}

export default TableCreo;
