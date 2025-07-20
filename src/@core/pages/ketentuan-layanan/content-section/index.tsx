'use client';
import { useState } from 'react';
import ketentuans from './ketentuans';
const KetentuanLayananContentSection = () => {
  const [contents, setContents] = useState(ketentuans);

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
              <a onClick={() => setActive(item.id)}>{item.title}</a>
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
          ?.contents.map((item: any, index: number) => (
            <div key={index}>
              <p key={index}>{item.body}</p>
              {item.description && <p>{item.description}</p>}
              {item.child && item.child.length > 0 && (
                <ul className={item.child_type}>
                  {item.child.map((child: any, index2: number) => (
                    <div key={`div${index}.${index2}`}>
                      <li>{child.content}</li>
                      {child.content_start && <p>{child.content_start}</p>}
                      {child.subs && (
                        <ul className={child.sub_type}>
                          {child.subs.map((sub: any, index3: number) => (
                            <li key={`${index}${index2}${index3}`}>
                              {sub.text}
                              {sub.sub_childs && (
                                <ul>
                                  {sub.sub_childs.map(
                                    (sub_child: any, index4: number) => (
                                      <li
                                        key={`${index}${index2}${index3}${index4}`}
                                      >
                                        {sub_child}
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                      {child.content_end && <p>{child.content_end}</p>}
                    </div>
                  ))}
                </ul>
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

export default KetentuanLayananContentSection;
