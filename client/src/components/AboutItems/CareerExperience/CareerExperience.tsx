import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import styled from 'styled-components';

const CareerBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 3rem;
`;

const Divider = styled.hr`
    height: 6rem;
`;

const TechBio = styled.h3`
    text-align: center;
    padding: 2rem;
`;

interface ICareerEvent {
    event: string;
    time?: string;
};

const CAREER: ICareerEvent[] = [
    {
        event: "D.E.Shaw & Co."
    },
    {
        event: "Zoho Corporation"
    },
    {
        event: "Coimbatore Institute of Technology"
    },
]

const TECH_BIO : string = `
I began my journey with competitive programming, 
mastering problem-solving skills. Currently, I'm 
diving into software engineering, focusing on 
clean code. I'm familiar with Node.js and React,
and passionate about new technologies while seeking 
deeper understanding of all topics I come across.
`;


const CareerExperience = () => {
    return (
        <CareerBox>
        <Timeline position="alternate" sx={{
            minWidth: "40%"
        }}>
            {
                CAREER.map((item: ICareerEvent, idx: number) => {
                    return (
                        <TimelineItem key={idx}>
                            <TimelineSeparator>
                                <TimelineDot color='secondary' />
                                {
                                    (idx !== CAREER.length - 1) &&
                                    <TimelineConnector />
                                }
                            </TimelineSeparator>
                            <TimelineContent>{item.event}</TimelineContent>
                        </TimelineItem>
                    )
                })
            }
        </Timeline>
        <Divider />
        <TechBio>
            {TECH_BIO}
        </TechBio>
        </CareerBox>
    )
};

export default CareerExperience;

