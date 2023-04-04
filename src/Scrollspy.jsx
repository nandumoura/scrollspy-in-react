
import React, { useState, useEffect, useRef } from 'react';
import { Stack, Link } from '@chakra-ui/react';

function ScrollspySections({ sections }) {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = sectionRefs.current.map(ref => ref.offsetTop - 100);
      const currentScrollPosition = window.scrollY;

      const newActiveSectionIndex = sectionOffsets.findIndex(
        offset => offset > currentScrollPosition
      );

      setActiveSection(newActiveSectionIndex > 0 ? newActiveSectionIndex - 1 : 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSectionRef = (ref, index) => {
    sectionRefs.current[index] = ref;
  };

  return (
    <Stack direction="row" spacing={4}>
      <Stack as="nav" spacing={4}>
        {sections.map((section, index) => (
          <Link key={index} href={`#${section.name}`} className={activeSection === index ? 'active' : ''}>
            {section.name}
          </Link>
        ))}
      </Stack>
      <Stack as="main" spacing={8}>
        {sections.map((section, index) => (
          <section key={index} id={section.name} ref={ref => handleSectionRef(ref, index)}>
            <h1>{section.name}</h1>
            <p>{section.description}</p>
          </section>
        ))}
      </Stack>
    </Stack>
  );
}

export default ScrollspySections
