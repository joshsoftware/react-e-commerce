import React from 'react';
// import '../Footer.css'
import UlComponent from './UlComponent';
import LiComponent from './LiComponent';
import ContainerWrapper from './ContainerWrapper';
import ColumnWrapper from './ColumnWrapper';
import RowWrapper from './RowWrapper';
import FooterData from '../FooterData';

const Footer = () => {
  let arr = [];
  let arr1 = [];
  let arr2 = [];
  const categories = FooterData[0].categories;

  arr.push(<LiComponent key={'categories-element'} data="Categories" />);
  categories.map((category) => {
    return arr.push(
      <LiComponent key={category.id} data={<a href={category.url}>{category.name}</a>} />
    );
  });

  const partner = FooterData[1].partners;

  arr1.push(<LiComponent key={'partners-element'} data="Partners" />);
  partner.map((partner) => {
    return arr1.push(<LiComponent key={partner.id} data={partner.name} />);
  });

  const contacts = FooterData[2].contactus;

  return (
    <footer className="bg-dark text-white fixed-bottom">
      <ContainerWrapper data={<RowWrapper data={arr1} />} fluid={true} />
    </footer>
  );
};
export default Footer;
