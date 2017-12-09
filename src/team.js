import React from 'react';
import Banner from './components/banner';
import Profile from './components/profiles';
import Title from './components/title';
import './meet.css';
var Link = require('react-router-dom').Link;

export default class Meet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Who We Are',
      profile_1: {
        name: 'Khalid Khalil',
        bio: <div meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
        khalid khalil, nick doman, jordan matthews, start-up">
              <p>
                Khalid is the Founder and CEO of Red Gold Capital.
              </p>
              <p>
                Previously, Khalid worked in SAP, generating over £70 Million in pipeline.
              </p>
              <p>
                While at university, Khalid founded three start-up companies; a matchmaking service, a voice biometric app aimed at refining the reading of Arabic, and a spa provider.
              </p>
              <p>
                Khalid holds a Diploma in Economics with a focus on quantitative analysis and advanced mathematics. He is fluent in English, Arabic, and Persian.
              </p>
             </div>,
        email: 'khalid.khalil@redgoldcapital.co.uk',
        picture: <img  className="pic" alt="" src={ require('./pictures/Khalid.jpg') } meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
        khalid khalil, nick doman, jordan matthews, start-up"/>,
        link: <Link target="_blank" title="LinkedIn"
          to="https://www.linkedin.com/company-beta/11217583/">
          <img alt="" src={ require('./pictures/linkedInLogo.svg') } className="linked-in" meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
          khalid khalil, nick doman, jordan matthews, start-up"/>
        </Link>,
      },
      profile_2: {
        name: 'Nick Doman',
        bio: <div meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
        khalid khalil, nick doman, jordan matthews, start-up">
              <p>
                Nick is an Associate at Red Gold Capital.
              </p>
              <p>
                Prior to joining Red Gold Capital, Nick worked at Obby, a fast-paced technology start-up aimed at people looking for learning experiences in London. Whilst at Obby, he also gained experience at Sidley Austin LLP, a leading law firm which specialises in corporate law.
              </p>
              <p>
                Previously, Nick has gained invaluable experience in the financial world by working at Towergate Insurance, a specialist in personal and business insurance.
              </p>
              <p>
                Nick attended The University of Edinburgh, where he graduated with a Masters in History with a First Class Dissertation. During his time, he accumulated global exposure through an exchange year to University of Connecticut. He is also an incoming Masters in Management (MiM) candidate at London Business School.
              </p>
             </div>,
        email: 'nick.doman@redgoldcapital.co.uk',
        picture: <img className="pic" alt="" src={ require('./pictures/Nick.jpg') } />,
        link: <Link target="_blank" title="LinkedIn"
          to="https://www.linkedin.com/in/nick-doman-740b15127/">
          <img alt="" src={ require('./pictures/linkedInLogo.svg') } className="linked-in" meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
          khalid khalil, nick doman, jordan matthews, start-up"/>
        </Link>,
      },
      profile_3: {
        name: 'Jordan Matthews',
        bio: <div meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
        khalid khalil, nick doman, jordan matthews, start-up">
              <p>
                Jordan is an Analyst at Red Gold Capital.
              </p>
              <p>
                Prior to joining Red Gold Capital, Jordan worked at SAP as a Sales Associate in the Data and Data Management team where he focused on the digital transformation of cloud computing.
              </p>
              <p>
                Previously, Jordan has worked in Dubai, U.A.E for Garda World, a global private security company. He was responsible for assisting the Operations in Middle East & North Africa (MENA region).
              </p>
              <p>
                Jordan attends Durham University where he is undertaking a BA (Hons) in Business and Management with Industrial Placement, the course has a focus on the application of financial theory. He has lived across the world; Europe, Africa and Asia.
              </p>
             </div>,
        email: 'jordan.matthews@redgoldcapital.co.uk',
        picture: <img alt="BioPic" className="pic" src={ require('./pictures/Jordan.jpg') } />,
        link: <Link target="_blank" title="LinkedIn"
          to="https://www.linkedin.com/in/jordan-matthews-7ba06194/">
          <img alt="" src={ require('./pictures/linkedInLogo.svg') } className="linked-in" meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
          khalid khalil, nick doman, jordan matthews, start-up"/>
        </Link>,
      },
      profile_4: {
        name: 'Rydan Giraudy',
        bio: <div meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
        khalid khalil, nick doman, jordan matthews, start-up">
              <p>
                Rydan is an Analyst at Red Gold Capital.
              </p>
              <p>
                Rydan attends University College London (UCL) where is studying towards completing BSc in Chemistry with intentions to undertake a Masters (MSc). Due to the highly quantitative nature of the degree, he adds tremendous value to the team with his analytical approach.
              </p>
              <p>
                Rydan has Saint Lucian origins, and outside of his studies he is the Vice-President of UCL’s African and Caribbean Society. This role has given him a global perspective.
              </p>
             </div>,
        email: 'rydan.giraudy@redgoldcapital.co.uk',
        picture: <img alt="BioPic" className="pic" src={ require('./pictures/Rydan.jpg') } />,
        link: <Link target="_blank" title="LinkedIn"
          to="https://www.linkedin.com/in/rydan-giraudy-535705144/">
          <img alt="" src={ require('./pictures/linkedInLogo.svg') } className="linked-in" meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
          khalid khalil, nick doman, jordan matthews, start-up"/>
        </Link>,
        //Buffer Added because the Bio is not long enough
      },
      profile_5: {
        name: 'Sowmya Ravindra',
        bio: <div meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
        khalid khalil, nick doman, jordan matthews, start-up">
              <p>
                Sowmya is an analyst at Red Gold Capital.
              </p>
              <p>
                Prior to joining RGC she studied Masters in Medical Systems Engineering at OVGU Magdeburg, Germany. Whilst at university, she gained experience as a research assistant.
              </p>
              <p>
                Previously, she worked at Infosys Ltd, a leading IT company in India that delivers solutions for corporations worldwide.  At RGC Sowmya aims to gain exposure to business analytics skills that will complement her technical skills.
              </p>
             </div>,
        email: 'sowmya.ravindra@redgoldcapital.co.uk',
        picture: <img className="pic" alt="" src={ require('./pictures/Sowmya.jpg') } />,
        link: <Link target="_blank" title="LinkedIn"
          to="https://www.linkedin.com/in/sowmya-ravindra-6b468a132/">
          <img alt="" src={ require('./pictures/linkedInLogo.svg') } className="linked-in" meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
          khalid khalil, nick doman, jordan matthews, start-up"/>
        </Link>,
      },
      profile_6: {
        name: 'Erik Albertson',
        bio: <div meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
        khalid khalil, nick doman, jordan matthews, start-up">
              <p>
                Erik is an Analyst at Red Gold Capital.
              </p>
              <p>
                Prior to joining Red Gold Capital, Erik worked in wealth management at Acuma Hong Kong. During his time there he was a financial adviser on pension planning.
              </p>
              <p>
                Previously, Erik has worked for Printship AB, a Swedish-based printing company. He also has experience working in Shanghai, China for Global Infusion Group, a global catering, logistics and brand support company.
              </p>
              <p>
                Erik attends Warwick University where he is studying Economics, highlighting his aptitude for quantitative analysis.
              </p>
             </div>,
        email: 'erik.albertson@redgoldcapital.co.uk',
        picture: <img className="pic" alt="" src={ require('./pictures/Erik.jpg') } />,
        link: <Link target="_blank" title="LinkedIn"
          to="https://www.linkedin.com/in/erik-albertson-88660810b/">
          <img alt="" src={ require('./pictures/linkedInLogo.svg') } className="linked-in" meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
          khalid khalil, nick doman, jordan matthews, start-up"/>
        </Link>,
      },
      profile_7: {
        name: 'Sam Williams',
        bio: <div meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
        khalid khalil, nick doman, jordan matthews, start-up">
              <p>
                Sam is an Analyst at Red Gold Capital.
              </p>
              <p>
                Prior to working at Red Gold Capital, Sam worked as a Research Assistant at BullionVault, the world's largest online investment gold service, during which he wrote for their highly ranked website. He has also worked at the Insurance Brokerage and Financial Advisory firm, MRIB Ltd, as a technical assistant.
              </p>
              <p>
                Sam reads Economics at Durham University, taking modules including Corporate Finance, Data Analysis and Programming. He is also a keen rower, having competed for Great Britain as a junior.
              </p>
             </div>,
        email: 'sam.williams@redgoldcapital.co.uk',
        picture: <img className="pic" alt="" src={ require('./pictures/Sam.jpg') } />,
        link: <Link target="_blank" title="LinkedIn"
          to="https://www.linkedin.com/in/sam-williams-754b8a135/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people%3B9r4KODvxQ0aZARGvXSPvWg%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_search_srp_people-search_srp_result">
          <img alt="" src={ require('./pictures/linkedInLogo.svg') } className="linked-in" meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
          khalid khalil, nick doman, jordan matthews, start-up"/>
        </Link>,
      },
      profile_8: {
        name: 'Angad Singh',
        bio: <div meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
        khalid khalil, nick doman, jordan matthews, start-up">
              <p>
                Angad is the Technical Co-ordinator at Red Gold Capital.
              </p>
              <p>
                Prior to joining Red Gold Capital, Angad worked as a freelance web developer for SMEs in London.
              </p>
              <p>
                Previously, Angad was a Financial and Technology Consultant at Dream and Dart, an online investor platform, based in New Delhi, India. Initially he worked as a front-end developer, but he expanded his understanding and moved into an internal consulting role which required him to advise the founder on financial decisions.
              </p>
              <p>
                Angad holds a Master of Science (Msc) in Information Management for Business from University College London (UCL). Whilst at UCL, Angad gathered knowledge in the financial sector by studying business analytics, decision and risk analysis, and financial management.
              </p>
             </div>,
        email: 'angad.singh@redgoldcapital.co.uk',
        picture: <img className="pic" alt="" src={ require('./pictures/Angad.jpg') } />,
        link: <Link target="_blank" title="LinkedIn"
          to="https://www.linkedin.com/in/angad-singh-0a978713a/">
          <img alt="" src={ require('./pictures/linkedInLogo.svg') } className="linked-in" meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
          khalid khalil, nick doman, jordan matthews, start-up"/>
        </Link>,
      },

      image: <img alt="BioPic" src={ require('./pictures/Team.jpg') } meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
      khalid khalil, nick doman, jordan matthews, start-up"/>,
    }
  }

  render() {
    return (
            <div className="Meet" meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
            khalid khalil, nick doman, jordan matthews, start-up">
              <Banner photo={ this.state.image } />
              <Title title={ this.state.title }/>
              <table>
                <tr>
                  <Profile image={ this.state.profile_1.picture } title={ this.state.profile_1.name }
                    bio={ this.state.profile_1.bio } link={ this.state.profile_1.link } email={ this.state.profile_1.email }/>
                </tr>
                <tr>
                  <Profile image={ this.state.profile_8.picture } title={ this.state.profile_8.name }
                    bio={ this.state.profile_8.bio } link={ this.state.profile_8.link } email={ this.state.profile_8.email }/>
                </tr>
                <tr>
                  <Profile image={ this.state.profile_2.picture } title={ this.state.profile_2.name }
                    bio={ this.state.profile_2.bio } link={ this.state.profile_2.link } email={ this.state.profile_2.email }/>
                </tr>
                <tr>
                  <Profile image={ this.state.profile_3.picture } title={ this.state.profile_3.name }
                    bio={ this.state.profile_3.bio } link={ this.state.profile_3.link } email={ this.state.profile_3.email }/>
                </tr>
                <tr>
                  <Profile image={ this.state.profile_4.picture } title={ this.state.profile_4.name }
                    bio={ this.state.profile_4.bio } link={ this.state.profile_4.link } email={ this.state.profile_4.email }/>
                </tr>
                <tr>
                  <Profile image={ this.state.profile_5.picture } title={ this.state.profile_5.name }
                    bio={ this.state.profile_5.bio } link={ this.state.profile_5.link } email={ this.state.profile_5.email }/>
                </tr>
                <tr>
                  <Profile image={ this.state.profile_6.picture } title={ this.state.profile_6.name }
                    bio={ this.state.profile_6.bio } link={ this.state.profile_6.link } email={ this.state.profile_6.email }/>
                </tr>
                <tr>
                  <Profile image={ this.state.profile_7.picture } title={ this.state.profile_7.name }
                    bio={ this.state.profile_7.bio } link={ this.state.profile_7.link } email={ this.state.profile_7.email }/>
                </tr>
              </table>
            </div>
          );
  }
}
