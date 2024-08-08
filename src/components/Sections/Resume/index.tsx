import {FC, memo} from 'react';

import {education, SectionId, skills} from '../../../data/data'; 
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        {/*  <ResumeSection title="Work">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection> */}
        <ResumeSection title="Skills">
          <div className="list-decimal list-inside">
            <h3 className="text-lg font-bold text-neutral-800">Hard Skills</h3>
            <p>
              {' '}
              Proficient in troubleshooting, handling, installing and maintaining software and hardware. currently
              practicing my coding skills in HTML, CSS, JavaScript, React, and Next.js, responsive design, and web
              development.
            </p>
          </div>
          <br />
          <div>
            <h3 className="text-lg font-bold text-neutral-800">Soft Skills</h3>
            <p>
              Strong logical reasoning, decision-making, problem-solving abilities, attention to detail and excellent
              communication skills.
            </p>
          </div>
          {/*<p className="pb-8">Proficient in troubleshooting, handling, installing and maintaining software and hardware, since I speak english and spanish,
            translating is also a skill I have developed, I have experience in customer service, sales, and marketing. Strong logical reasoning, decision-making, problem-solving abilities, attention to detail and excellent communication skills
          </p> */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
