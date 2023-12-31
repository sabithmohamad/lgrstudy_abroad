import { Bulb, Code, Managed } from "../svg";

const services_data = [
  {
    id:1,
    duration:'.5s',
    delay:'.8s',
    img:'/assets/img/service/service-1.png',
    title:'Global Network of Branches',
    text_1:'Our agency boasts a widespread network of branches strategically located across various countries',
    text_2:'hese branches serve as gateways to exceptional educational opportunities for students around the world...',
    home:true,
    service_p_2:true,
  },
  {
    id:2,
    duration:'.7s',
    delay:'1s',
    img:'/assets/img/service/service-2.png',
    title:'Partnred Universities',
    text_1:'As a franchise partner with LGR Study Abroad, you ll benefit from comprehensive training and ongoing support',
    text_2:'We believe in equipping our partners with the knowledge, tools, and resources they need to effectively guide students through the study abroad process.',
    home:true,
    service_p_2:false,
  },
  {
    id:3,
    duration:'.9s',
    delay:'1.2s',
    img:'/assets/img/service/service-3.png',
    title:'Proven Business Model',
    text_1:'Joining hands with LGR Study Abroad means embracing a proven and successful business model. ',
    text_2:'Our track record of helping students achieve their international education goals is a testament to the efficacy of our approach...',
    home:true,
    service_p_2:true,
  },
  {
    id:4,
    duration:'.9s',
    delay:'1.3s',
    img:'/assets/img/service/service-icon-9.1.png',
    title:'Collaborative Community',
    text_1:'When you become a part of the LGR Study Abroad franchise family, you,re not just a partner, but a valued member of a collaborative community.',
    text_2:'Our franchisees benefit from a supportive ecosystem where knowledge-sharing, idea exchange, and mutual growth are encouraged...',
    service_p_2:true,
  },
  // home two
  {
    id:5,
    duration:'.3s',
    delay:'.6s',
    color:'tp-sv-blue-color',
    img:'/assets/img/service/service-3.png',
    title:'Mobile Design',
    text_1:'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_2:true,
    service_p_3:true,
  },
  {
    id:6,
    duration:'.5s',
    delay:'.8s',
    color:'tp-sv-sky-color',
    img:'/assets/img/service/service-1.png',
    title:'Web Development',
    text_1:'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_2:true,
    service_p_3:true,
  },
  {
    id:7,
    duration:'.7s',
    delay:'1s',
    color:'tp-sv-pink-color',
    img:'/assets/img/service/service-icon-4.png',
    title:'For Students',
    text_1:'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_2:true,
    service_p_3:true,
  },
  // home three
  {
    id:8,
    duration:'1s',
    delay:'.3s',
    img:'/assets/img/service/service-5.png',
    title:'Global Reach and Impact',
    color:'service-color-1',
    text_1:'Partnering with LGR Study Abroad opens the doors to a global network of educational opportunities.',
    home_3:true,
    service_p_4:true,
  },
  {
    id:9,
    duration:'1s',
    delay:'.5s',
    img:'/assets/img/service/service-6.png',
    title:'Innovative Technology Platform',
    color:'service-color-2',
    text_1:'Our advanced technology platform provides partners with seamless access to a range of tools and resources.',
    home_3:true,
    service_p_4:true,
  },
  {
    id:10,
    duration:'1s',
    delay:'.7s',
    img:'/assets/img/service/service-7.png',
    title:'Diverse Program Offerings',
    color:'service-color-3',
    text_1:'By partnering with us, you gain access to a wide array of academic programs and institutions.',
    home_3:true,
    service_p_4:true,
  },
  // home four
  {
    id:11,
    duration:'.3s',
    delay:'.5s',
    img:'/assets/img/service/007-email.png',
    title:'Product Management',
    border_effect:'',
    text_1:'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_4:true,
    service_p:true,
  },
  {
    id:12,
    duration:'.5s',
    delay:'.7s',
    img:'/assets/img/service/service4.1.png',
    title:'Web & Mobile Development',
    border_effect:'sv-border-effect-1',
    text_1:'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_4:true,
    service_p:true,
  },
  {
    id:13,
    duration:'.7s',
    delay:'.9s',
    img:'/assets/img/service/service4.2.png',
    title:'Fast Customer Support',
    border_effect:'sv-border-effect-2',
    text_1:'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_4:true,
    service_p:true,
  },
  {
    id:14,
    duration:'.9s',
    delay:'1s',
    img:'/assets/img/service/service4.3.png',
    title:<>Human <br/> Resources</>,
    border_effect:'sv-border-effect-3',
    text_1:'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_4:true,
    service_p:true,
  },
  {
    id:15,
    duration:'.9s',
    delay:'1.1s',
    img:'/assets/img/service/service4.4.png',
    title:"Design and Vreatives",
    border_effect:'sv-border-effect-4',
    text_1:'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_4:true,
    service_p:true,
  },
  {
    id:16,
    duration:'1s',
    delay:'1.1s',
    img:'/assets/img/service/service4.5.png',
    title:"Marketing and Communication",
    border_effect:'sv-border-effect-5',
    text_1:'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_4:true,
    service_p:true,
  },
  {
    id:17,
    duration:'1.1s',
    delay:'1.2s',
    img:'/assets/img/service/service4.6.png',
    title:"Business Development",
    border_effect:'sv-border-effect-6',
    text_1:'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_4:true,
    service_p:true,
  },
  // add service item 
  {
    id:18,
    duration:'1.2s',
    delay:'1.3s',
    img:'/assets/img/service/007-email.png',
    title:'Product Management',
    border_effect:'',
    text_1:'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    service_p:true,
  },
  // home five
  {
    id:19,
    img:'/assets/img/service/service4.1.png',
    top_border:true,
    icon:'flaticon-target',
    title:<>Student  <br />Services </>,
    text_1:'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_5:true,
  },
  {
    id:20,
    img:'/assets/img/service/service4.2.png',
    icon:'flaticon-statistics',
    title:<>Programme for <br />Recruitment Partners</>,
    text_1:'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_5:true,
  },
  {
    id:21,
    img:'/assets/img/service/service4.3.png',
    icon:'flaticon-coding',
    title:<>Universities in <br />Collaboration</>,
    text_1:'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_5:true,
  },
  {
    id:22,
    img:'/assets/img/service/service4.4.png',
    icon:'flaticon-team',
    title:<>Assistance with <br />  Scholarships</>,
    text_1:'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_5:true,
  },
   // home six
   {
    id:23,
    img:'/assets/img/service/service-1.png',
    icon:<Bulb/>,
    title:"Collax business solution",
    text_1:'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    duration:'.3s',
    delay:'.5s',
    home_6:true,
  },
   {
    id:24,
    img:'/assets/img/service/service-2.png',
    icon:<Code/>,
    title:"Web, app development",
    text_1:'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    duration:'.5s',
    delay:'.7s',
    active:true,
    home_6:true,
  },
   {
    id:25,
    img:'/assets/img/service/service-3.png',
    icon:<Managed/>,
    title:<>Managed <br/> service solution</>,
    text_1:'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    duration:'.7s',
    delay:'.9s',
    home_6:true,
  },

  // services 3
  {
    id:26,
    duration:'.9s',
    delay:'1s',
    color:'tp-sv-blue-color',
    img:'/assets/img/service/service-11.png',
    title:'Customer Support',
    text_1:'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    service_p_3:true,
  },
  {
    id:27,
    duration:'.9s',
    delay:'1.1s',
    color:'tp-sv-sky-color',
    img:'/assets/img/service/service-8.png',
    title:'Custom Service',
    text_1:'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    service_p_3:true,
  },
  {
    id:28,
    duration:'.9s',
    delay:'1.2s',
    color:'tp-sv-pink-color',
    img:'/assets/img/service/service-9.png',
    title:'Website Design',
    text_1:'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    service_p_3:true,
  },

  // service 4,
  {
    id:29,
    duration:'.9s',
    delay:'1s',
    img:'/assets/img/service/service-9.png',
    title:'Customized Marketing Support',
    color:'sv-four-color',
    text_1:'We understand the importance of effective marketing in attracting students. As a partner, you,ll benefit from our marketing expertise',
    service_p_4:true,
  },
  {
    id:30,
    duration:'.9s',
    delay:'1.1s',
    img:'/assets/img/service/service-10.png',
    title:'Expert Training and Guidance',
    color:'sv-six-color',
    text_1:'Joining our partner network means access to comprehensive training programs and expert guidance. ',
    service_p_4:true,
  },
  {
    id:31,
    duration:'.9s',
    delay:'1.2s',
    img:'/assets/img/service/service-5.png',
    title:'Mutual Growth and Collaboration',
    color:'sv-five-color',
    text_1:'Partnering with LGR Study Abroad is not just a transaction, but a collaboration for mutual growth',
    service_p_4:true,
  },
  {
    id:32,
    duration:'.7s',
    delay:'1s',
    img:'/assets/img/service/service-2.png',
    title:'Benifits',
    text_1:'As a franchise partner with LGR Study Abroad, you ll benefit from comprehensive training and ongoing support',
    text_2:'We believe in equipping our partners with the knowledge, tools, and resources they need to effectively guide students through the study abroad process.',
    home:true,
    service_p_2:true,
  },
]

export default services_data;