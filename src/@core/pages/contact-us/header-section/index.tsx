const ContactUsHeaderSection = (props: { objLang: any }) => {
  const { objLang } = props;
  return (
    <section className="contact-us-header-section">
      <div className="header-container">
        <h2>{objLang.title}</h2>
        <div className="header-subcontainer">
          <p>{objLang.description}</p>
          <p>
            {objLang.to}{' '}
            <span>
              <a href="mailto:help@triv.co.id">help@triv.co.id</a>
            </span>{' '}
            |{' '}
            <span>
              <a href="mailto:rey@triv.co.id">Contact our CEO</a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUsHeaderSection;
