import React, { useState } from "react";
import {
  CBadge,
  CCardBody,
  CDataTable,
  CButton,
  CCollapse,
  CCard,
  CImg,
} from "@coreui/react";
import CIcon from '@coreui/icons-react'

const ViewUsers = () => {
  const usersData = [
    {
      id: 0,
      pic: 'avatars/1.jpg', 
      name: "John Doe",
      year: "1",
      major: "Chemistry",
      rating: "4.0",
    },
    {
      id: 1,
      pic: 'avatars/2.jpg', 
      name: "Samppa Nori",
      year: "1",
      major: "Information Systems",
      rating: "3.9",
    },
    {
      id: 2,
      pic: 'avatars/3.jpg', 
      name: "Estavan Lykos",
      year: "2",
      major: "Business Analytics",
      rating: "4.0",
    },
    {
      id: 3,
      pic: 'avatars/4.jpg', 
      name: "Chetan Mohamed",
      year: "2",
      major: "Civil Engineering",
      rating: "3.8",
    },
    {
      id: 4,
      pic: 'avatars/5.jpg', 
      name: "Derick Maximinus",
      year: "3",
      major: "Information Systems",
      rating: "4.0",
    },
    {
      id: 5,
      pic: 'avatars/6.jpg', 
      name: "Friderik Dávid",
      year: "4",
      major: "Business Analytics",
      rating: "3.9",
    },
    {
      id: 6,
      pic: 'avatars/7.jpg', 
      name: "Yiorgos Avraamu",
      year: "1",
      major: "Information Systems",
      rating: "3.9",
    },
    {
      id: 7,
      pic: 'avatars/8.jpg', 
      name: "Avram Tarasios",
      year: "2",
      major: "Business Analytics",
      rating: "4.0",
    },
    {
      id: 8,
      pic: 'avatars/1.jpg', 
      name: "Quintin Ed",
      year: "2",
      major: "Civil Engineering",
      rating: "3.8",
    },
    {
      id: 9,
      pic: 'avatars/2.jpg', 
      name: "Enéas Kwadwo",
      year: "3",
      major: "Information Systems",
      rating: "4.0",
    },
    {
      id: 10,
      pic: 'avatars/3.jpg', 
      name: "Agapetus Tadeáš",
      year: "4",
      major: "Business Analytics",
      rating: "3.9",
    },
    {
      id: 11,
      pic: 'avatars/4.jpg', 
      name: "Carwyn Fachtna",
      year: "1",
      major: "Information Systems",
      rating: "3.9",
    },
    {
      id: 12,
      pic: 'avatars/5.jpg', 
      name: "Nehemiah Tatius",
      year: "2",
      major: "Business Analytics",
      rating: "4.0",
    },
    {
      id: 13,
      pic: 'avatars/6.jpg', 
      name: "Ebbe Gemariah",
      year: "2",
      major: "Civil Engineering",
      rating: "3.8",
    },
    {
      id: 14,
      pic: 'avatars/7.jpg', 
      name: "Eustorgios Amulius",
      year: "3",
      major: "Information Systems",
      rating: "4.0",
    },
    {
      id: 15,
      pic: 'avatars/8.jpg', 
      name: "Leopold Gáspár",
      year: "4",
      major: "Business Analytics",
      rating: "3.9",
    },
    {
      id: 16,
      pic: 'avatars/1.jpg', 
      name: "Pompeius René",
      year: "1",
      major: "Information Systems",
      rating: "3.9",
    },
    {
      id: 17,
      pic: 'avatars/2.jpg', 
      name: "Paĉjo Jadon",
      year: "2",
      major: "Business Analytics",
      rating: "4.0",
    },
    {
      id: 18,
      pic: 'avatars/3.jpg', 
      name: "Micheal Mercurius",
      year: "2",
      major: "Civil Engineering",
      rating: "3.8",
    },
    {
      id: 19,
      pic: 'avatars/4.jpg', 
      name: "Ganesha Dubhghall",
      year: "3",
      major: "Information Systems",
      rating: "4.0",
    },
    {
      id: 20,
      pic: 'avatars/5.jpg', 
      name: "Hiroto Šimun",
      year: "4",
      major: "Business Analytics",
      rating: "3.9",
    },
    {
      id: 21,
      pic: 'avatars/6.jpg', 
      name: "Vishnu Serghei",
      year: "1",
      major: "Information Systems",
      rating: "3.9",
    },
    {
      id: 22,
      pic: 'avatars/7.jpg', 
      name: "Zbyněk Phoibos",
      year: "2",
      major: "Business Analytics",
      rating: "4.0",
    },
    {
      id: 23,
      pic: 'avatars/8.jpg', 
      name: "Aulus Agmundr",
      year: "1",
      major: "Information Systems",
      rating: "4.0",
    },
  ];

  const [details, setDetails] = useState([]);
  // const [items, setItems] = useState(usersData)

  // const toggleDetails = (index) => {
  //   const position = details.indexOf(index);
  //   let newDetails = details.slice();
  //   if (position !== -1) {
  //     newDetails.splice(position, 1);
  //   } else {
  //     newDetails = [...details, index];
  //   }
  //   setDetails(newDetails);
  // };

  const fields = [
    {
      key:"pic",
      label: "",
      sorter: false,
      filter: false,
    },
    { key: "name", _style: { width: "30%" } },
    "rating",
    { key: "major", _style: { width: "30%" } },
    "year",
    {
      key: "action",
      _style: { width: "15%" },
      sorter: false,
      filter: false,
    },
  ];

  return (
    <CCard>
      <CCardBody>
        <CDataTable
          columnFilter
          items={usersData}
          fields={fields}
          tableFilter={{label: "Search:", placeholder: "Type any keyword"}}      
          itemsPerPageSelect
          itemsPerPage={5}
          hover
          sorter
          pagination
          scopedSlots={{
            'pic':
                (item) => (
                  <td className="text-center">
                    <div className="c-avatar">
                      <img src={item.pic} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                      <span className="c-avatar-status bg-danger"></span>
                    </div>
                  </td>
                ),
            'action': (item) => {
              return (
                <td className="py-2">
                  <CButton size="sm" color="info" onClick={() => { }}>VIEW PROFILE</CButton>     
                </td>
              );
            },
          }}
        />
      </CCardBody>
    </CCard>
  );
};

export default ViewUsers;
