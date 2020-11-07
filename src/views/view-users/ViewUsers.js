import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import {
  CCardBody,
  CDataTable,
  CButton,
  CCard,
} from "@coreui/react";

const ViewUsers = () => {
  const usersData = [
    {
      id: 0,
      pic: 'avatars/1.jpg', 
      name: "John Doe",
      title: "Frontend Developer",
      year: "1",
      major: "Chemistry",
      rating: "4.0",
    },
    {
      id: 1,
      pic: 'avatars/2.jpg', 
      name: "Samppa Nori",
      title: "Backend Developer",
      year: "1",
      major: "Information Systems",
      rating: "3.9",
    },
    {
      id: 2,
      pic: 'avatars/3.jpg', 
      name: "Estavan Lykos",
      title: "Backend Developer",
      year: "2",
      major: "Business Analytics",
      rating: "4.0",
    },
    {
      id: 3,
      pic: 'avatars/4.jpg', 
      name: "Chetan Mohamed",
      title: "Data Scientist",
      year: "2",
      major: "Civil Engineering",
      rating: "3.8",
    },
    {
      id: 4,
      pic: 'avatars/5.jpg', 
      name: "Derick Maximinus",
      title: "Backend Developer",
      year: "3",
      major: "Information Systems",
      rating: "4.0",
    },
    {
      id: 5,
      pic: 'avatars/6.jpg', 
      name: "Friderik Dávid",
      title: "Full Stack Developer",
      year: "4",
      major: "Business Analytics",
      rating: "3.9",
    },
    {
      id: 6,
      pic: 'avatars/7.jpg', 
      name: "Yiorgos Avraamu",
      title: "Full Stack Developer",
      year: "1",
      major: "Information Systems",
      rating: "3.9",
    },
    {
      id: 7,
      pic: 'avatars/8.jpg', 
      name: "Avram Tarasios",
      title: "Data Scientist",
      year: "2",
      major: "Business Analytics",
      rating: "4.0",
    },
    {
      id: 8,
      pic: 'avatars/1.jpg', 
      name: "Quintin Ed",
      title: "Civil Engineer",
      year: "2",
      major: "Civil Engineering",
      rating: "3.8",
    },
    {
      id: 9,
      pic: 'avatars/2.jpg', 
      name: "Enéas Kwadwo",
      title: "Data Scientist",
      year: "3",
      major: "Information Systems",
      rating: "4.0",
    },
    {
      id: 10,
      pic: 'avatars/3.jpg', 
      name: "Agapetus Tadeáš",
      title: "Data Scientist",
      year: "4",
      major: "Business Analytics",
      rating: "3.9",
    },
    {
      id: 11,
      pic: 'avatars/4.jpg', 
      name: "Carwyn Fachtna",
      title: "Data Engineer",
      year: "1",
      major: "Information Systems",
      rating: "3.9",
    },
    {
      id: 12,
      pic: 'avatars/5.jpg', 
      name: "Nehemiah Tatius",
      title: "Data Scientist",
      year: "2",
      major: "Business Analytics",
      rating: "4.0",
    },
    {
      id: 13,
      pic: 'avatars/6.jpg', 
      name: "Ebbe Gemariah",
      title: "Civil Engineer",
      year: "2",
      major: "Civil Engineering",
      rating: "3.8",
    },
    {
      id: 14,
      pic: 'avatars/7.jpg', 
      name: "Eustorgios Amulius",
      title: "Frontend Developer",
      year: "3",
      major: "Information Systems",
      rating: "4.0",
    },
    {
      id: 15,
      pic: 'avatars/8.jpg', 
      name: "Leopold Gáspár",
      title: "Frontend Developer",
      year: "4",
      major: "Business Analytics",
      rating: "3.9",
    },
    {
      id: 16,
      pic: 'avatars/1.jpg', 
      name: "Pompeius René",
      title: "Frontend Developer",
      year: "1",
      major: "Information Systems",
      rating: "3.9",
    },
    {
      id: 17,
      pic: 'avatars/2.jpg', 
      name: "Paĉjo Jadon",
      title: "Frontend Developer",
      year: "2",
      major: "Business Analytics",
      rating: "4.0",
    },
    {
      id: 18,
      pic: 'avatars/3.jpg', 
      name: "Micheal Mercurius",
      title: "Frontend Developer",
      year: "2",
      major: "Civil Engineering",
      rating: "3.8",
    },
    {
      id: 19,
      pic: 'avatars/4.jpg', 
      name: "Ganesha Dubhghall",
      title: "Frontend Developer",
      year: "3",
      major: "Information Systems",
      rating: "4.0",
    },
    {
      id: 20,
      pic: 'avatars/5.jpg', 
      name: "Hiroto Šimun",
      title: "Frontend Developer",
      year: "4",
      major: "Business Analytics",
      rating: "3.9",
    },
    {
      id: 21,
      pic: 'avatars/6.jpg', 
      name: "Vishnu Serghei",
      title: "Frontend Developer",
      year: "1",
      major: "Information Systems",
      rating: "3.9",
    },
    {
      id: 22,
      pic: 'avatars/7.jpg', 
      name: "Zbyněk Phoibos",
      title: "Frontend Developer",
      year: "2",
      major: "Business Analytics",
      rating: "4.0",
    },
    {
      id: 23,
      pic: 'avatars/8.jpg', 
      name: "Aulus Agmundr",
      title: "Frontend Developer",
      year: "1",
      major: "Information Systems",
      rating: "4.0",
    },
  ];

  const fields = [
    {
      key:"pic",
      label: "",
      sorter: false,
      filter: false,
    },
    { key: "name", _style: { width: "15%" } },
    { key: "title", _style: { width: "25%" } },
    { key: "rating",_style: { width: "10%" } },
    { key: "major", _style: { width: "20%" } },
    { key: "year", _style: { width: "10%" } },
    {
      key: "action",
      sorter: false,
      filter: false,
    },
  ];

  const history = useHistory()

  const pageChange = () => {
    history.push(`/user-portfolio`)
  }

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
                  <CButton size="sm" color="info" onClick={pageChange}>VIEW PROFILE</CButton>     
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
