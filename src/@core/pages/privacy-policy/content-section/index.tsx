'use client';
import { useState } from 'react';
import privacyContents from './privacy';
const PrivacyContentSection = () => {
  const [contents, setContents] = useState(privacyContents);

  const setActive = (id: number) => {
    const temp = [...contents];
    temp.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      } else {
        item.selected = true;
      }
    });
    setContents(temp);
  };
  return (
    <section className="content-section">
      <div className="menu-container">
        <ul>
          {contents.map((item, index: number) => (
            <li className={item.selected ? 'active' : ''} key={index}>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setActive(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`content-container ${
          contents.find((x) => x.selected)?.gap ? 'with-gap' : ''
        }`}
      >
        {contents
          .find((x) => x.selected)
          ?.contents.map((item, index: number) => (
            <div key={index}>
              <p key={index}>{item.body}</p>
              {item.child && item.child.length > 0 && (
                <ul className={item.child_type}>
                  {item.child.map((child, index2: number) => (
                    <li key={`li${index}.${index2}`}>{child.content}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

export default PrivacyContentSection;
