.text1{
    font-size: 25px;
    font-weight: 600;
    margin-right: 200px;
  }

  .text3 {
    font-size: 25px;
    font-weight: 400;
    white-space: pre-line;
    line-height: 1.6;
    text-align: right;
    margin-right: 50px;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <div className="logo">
        <img src="/img/seoultech.svg" alt="main-logo" />
      </div>
      <div className="contents">
        {}
        <div>
          <span className="text1">Seoul National University of Science and Technology</span>
        </div>
        <div className="text3">
        ITM OSS PROJECT
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;
