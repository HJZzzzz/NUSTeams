import React, { useState } from "react";
import {
  CBadge,
  CCardBody,
  CDataTable,
  CButton,
  CCollapse,
} from "@coreui/react";

const SearchUser = () => {
  const usersData = [
    {
      id: 0,
      name: "John Doe",
      year: "1",
      school: "Law",
      status: "Looking for teammates",
    },
    {
      id: 1,
      name: "Samppa Nori",
      year: "1",
      school: "Computing",
      status: "Project in progress",
    },
    {
      id: 2,
      name: "Estavan Lykos",
      year: "2",
      school: "Business",
      status: "Looking for teammates",
    },
    {
      id: 3,
      name: "Chetan Mohamed",
      year: "2",
      school: "Engineering",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Derick Maximinus",
      year: "3",
      school: "Computing",
      status: "Looking for teammates",
    },
    {
      id: 5,
      name: "Friderik Dávid",
      year: "4",
      school: "Business",
      status: "Project in progress",
    },
    {
      id: 6,
      name: "Yiorgos Avraamu",
      year: "1",
      school: "Computing",
      status: "Project in progress",
    },
    {
      id: 7,
      name: "Avram Tarasios",
      year: "2",
      school: "Business",
      status: "Looking for teammates",
    },
    {
      id: 8,
      name: "Quintin Ed",
      year: "2",
      school: "Engineering",
      status: "Inactive",
    },
    {
      id: 9,
      name: "Enéas Kwadwo",
      year: "3",
      school: "Computing",
      status: "Looking for teammates",
    },
    {
      id: 10,
      name: "Agapetus Tadeáš",
      year: "4",
      school: "Business",
      status: "Project in progress",
    },
    {
      id: 11,
      name: "Carwyn Fachtna",
      year: "1",
      school: "Computing",
      status: "Project in progress",
    },
    {
      id: 12,
      name: "Nehemiah Tatius",
      year: "2",
      school: "Business",
      status: "Looking for teammates",
    },
    {
      id: 13,
      name: "Ebbe Gemariah",
      year: "2",
      school: "Engineering",
      status: "Inactive",
    },
    {
      id: 14,
      name: "Eustorgios Amulius",
      year: "3",
      school: "Computing",
      status: "Looking for teammates",
    },
    {
      id: 15,
      name: "Leopold Gáspár",
      year: "4",
      school: "Business",
      status: "Project in progress",
    },
    {
      id: 16,
      name: "Pompeius René",
      year: "1",
      school: "Computing",
      status: "Project in progress",
    },
    {
      id: 17,
      name: "Paĉjo Jadon",
      year: "2",
      school: "Business",
      status: "Looking for teammates",
    },
    {
      id: 18,
      name: "Micheal Mercurius",
      year: "2",
      school: "Engineering",
      status: "Inactive",
    },
    {
      id: 19,
      name: "Ganesha Dubhghall",
      year: "3",
      school: "Computing",
      status: "Looking for teammates",
    },
    {
      id: 20,
      name: "Hiroto Šimun",
      year: "4",
      school: "Business",
      status: "Project in progress",
    },
    {
      id: 21,
      name: "Vishnu Serghei",
      year: "1",
      school: "Computing",
      status: "Project in progress",
    },
    {
      id: 22,
      name: "Zbyněk Phoibos",
      year: "2",
      school: "Business",
      status: "Looking for teammates",
    },
    {
      id: 23,
      name: "Aulus Agmundr",
      year: "1",
      school: "Computing",
      status: "Looking for teammates",
    },
    {
      id: 42,
      name: "Ford Prefect",
      year: "5",
      school: "Arts & Social Sciences",
      status: "Inactive",
    },
  ];

  const [details, setDetails] = useState([]);
  // const [items, setItems] = useState(usersData)

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
    { key: "name", _style: { width: "40%" } },
    "year",
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
      case "Project in progress":
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
      items={usersData}
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
                <h4>{item.username}</h4>
                <p className="text-muted">
                  Project Experience: CS3240 PennyJuice A+
                </p>
                <CButton size="sm" color="info">
                  Profile
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

export default SearchUser;
