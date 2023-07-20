import {FooterItemProps} from "@/pages/house/type";

const Column2: FooterItemProps = {
  name: 'Information',
  columnItem: [
    {
      name: 'About us',
      href: '#'
    },
    {
      name: 'Properties',
      href: '#'
    },
    {
      name: 'Careers',
      href: '#'
    },
    {
      name: 'Payment',
      href: '#'
    },
    {
      name:'Blog Post',
      href:'#'
    }
  ]
}

const Column3: FooterItemProps = {
  name:'Support',
  columnItem: [
    {
      name:'Add Property',
      href:'#'
    },
    {
      name: 'Terms & Conditions',
      href:'#'
    },
    {
      name:'Help line',
      href:'#'
    },
    {
      name:'Our Agents',
      href:'#'
    },
    {
      name:'features',
      href:'#'
    }
  ]
}


export default {
  Column2: Column2,
  Column3: Column3,
}
