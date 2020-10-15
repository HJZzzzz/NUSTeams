import React, { useState } from "react";
import {
  CBadge,
  CCardBody,
  CDataTable,
  CButton,
  CCollapse,
} from "@coreui/react";
//import { DocsLink } from "src/reusable";

const SearchProject = () => {
  const projectsData = [
    {
      id: 0,
      projectname: "15 Five",
      module: "CS3240",
      school: "Computing",
      status: "Looking for teammates",
    },
    {
      id: 1,
      projectname: "Associations Now",
      module: "CS3240",
      school: "Computing",
      status: "In Progress",
    },
    {
      id: 2,
      projectname: "Fast Ball",
      module: "AH2101",
      school: "Arts and Social Sciences",
      status: "Looking for teammates",
    },
    {
      id: 3,
      projectname: "Next Gala",
      module: "AH2101",
      school: "Arts and Social Sciences",
      status: "Inactive",
    },
    {
      id: 4,
      projectname: "Evening Shindig",
      module: "CE3116",
      school: "Engineering",
      status: "Looking for teammates",
    },
    {
      id: 5,
      projectname: "Super Happy Fun Time!",
      module: "LL4032",
      school: "Law",
      status: "In Progress",
    },
    {
      id: 6,
      projectname: "A Night to Celebrate",
      module: "CS3240",
      school: "Computing",
      status: "In Progress",
    },
    {
      id: 7,
      projectname: "An Evening Affair",
      module: "AH2101",
      school: "Arts and Social Sciences",
      status: "Looking for teammates",
    },
    {
      id: 8,
      projectname: "The Morning Ceremony",
      module: "AH2101",
      school: "Arts and Social Sciences",
      status: "Inactive",
    },
    {
      id: 9,
      projectname: "The Coding Awards",
      module: "CE3116",
      school: "Engineering",
      status: "Looking for teammates",
    },
    {
      id: 10,
      projectname: "A Triumph of Softwares",
      module: "LL4032",
      school: "Law",
      status: "In Progress",
    },
    {
      id: 11,
      projectname: "The Wonders of Geek",
      module: "CS3240",
      school: "Computing",
      status: "In Progress",
    },
    {
      id: 12,
      projectname: "Ceremony Worthy of time",
      module: "AH2101",
      school: "Arts and Social Sciences",
      status: "Looking for teammates",
    },
    {
      id: 13,
      projectname: "In Recognition of Codes",
      module: "AH2101",
      school: "Arts and Social Sciences",
      status: "Inactive",
    },
    {
      id: 14,
      projectname: "Moving Bird",
      module: "CE3116",
      school: "Engineering",
      status: "Looking for teammates",
    },
    {
      id: 15,
      projectname: "The Blue Bird",
      module: "LL4032",
      school: "Law",
      status: "In Progress",
    },
    {
      id: 16,
      projectname: "Social Geek Made",
      module: "CS3240",
      school: "Computing",
      status: "In Progress",
    },
    {
      id: 17,
      projectname: "Made by Me",
      module: "AH2101",
      school: "Arts and Social Sciences",
      status: "Looking for teammates",
    },
    {
      id: 18,
      projectname: "The Discovery of Era",
      module: "AH2101",
      school: "Arts and Social Sciences",
      status: "Inactive",
    },
    {
      id: 19,
      projectname: "Remembering Our Ancestors",
      module: "CE3116",
      school: "Engineering",
      status: "Looking for teammates",
    },
    {
      id: 20,
      projectname: "Meetup for the Good",
      module: "LL4032",
      school: "Law",
      status: "In Progress",
    },
  ];

  const [details, setDetails] = useState([]);
  // const [items, setItems] = useState(projectsData)

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const fields = [
    { key: "projectname", _style: { width: "40%" } },
    "module",
    { key: "school", _style: { width: "20%" } },
    { key: "status", _style: { width: "20%" } },
    {
      key: "show_details",
      label: "",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case "In Progress":
        return "warning";
      case "Inactive":
        return "secondary";
      case "Looking for teammates":
        return "success";
      // case "Looking for teammates":
      //   return "danger";
      default:
        return "primary";
    }
  };

  return (
    <CDataTable
      items={projectsData}
      fields={fields}
      columnFilter
      tableFilter
      footer
      itemsPerPageSelect
      itemsPerPage={5}
      hover
      sorter
      pagination
      scopedSlots={{
        status: (item) => (
          <td>
            <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
          </td>
        ),
        show_details: (item, index) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={() => {
                  toggleDetails(index);
                }}
              >
                {details.includes(index) ? "Hide" : "Show"}
              </CButton>
            </td>
          );
        },
        details: (item, index) => {
          return (
            <CCollapse show={details.includes(index)}>
              <CCardBody>
                <h4>{item.projectname}</h4>
                <p className="text-muted">
                  Project Description: This project will develop a module
                  offered to level 2 Undergraduate students and will seek to
                  develop student’s skills in collaborative working and
                  information literacy while still advancing their discipline
                  knowledge.{" "}
                </p>
                <CButton size="sm" color="info">
                  Details
                </CButton>
                <CButton size="sm" color="danger" className="ml-1">
                  Send Request
                </CButton>
              </CCardBody>
            </CCollapse>
          );
        },
      }}
    />
  );
};

export default SearchProject;
