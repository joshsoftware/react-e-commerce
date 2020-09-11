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

  arr2.push(<LiComponent key={'contact-us-details'} data="Contact Us" />);
  contacts.map((contact) => {
    return arr2.push(<LiComponent key={contact.id} data={contact.name} />);
  });

  let a1 = [];
  a1.push(
    <ColumnWrapper key={'column-categories'} data={<UlComponent liElement={arr} />} xs={4} />
  );
  a1.push(<ColumnWrapper key={'column-partners'} data={<UlComponent liElement={arr1} />} xs={4} />);
  a1.push(
    <ColumnWrapper key={'column-contact-us'} data={<UlComponent liElement={arr2} />} xs={4} />
  );
  a1.push(
    <div key={'footer-bootom'} className="footer-bottom">
      &copy;Copyright XYZ.ltd {new Date().getFullYear()}
    </div>
  );

  return (
    <footer className="bg-dark text-white">
      <ContainerWrapper data={<RowWrapper data={a1} />} fluid={true} />
    </footer>
  );
};
export default Footer;
