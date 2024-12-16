import React from "react";
import styled from "styled-components";
import results from "../data/results.json";

const DetailContainer = styled.div`
  position: relative;
  width: 530px;
  height: 470px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;
const Work = styled.h3`
  position: absolute;
  top: 5px;
  left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const WorkDescription = styled.p`
  position: absolute;
  top: 40px;
  left: 25px;
  right: 20px;
  font-size: 16px;
  color: #555;
  line-height: 1.5;
`;
const JobD = styled.h3`
  position: absolute;
  top: 100px;
  left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const JobDescription = styled.p`
  position: absolute;
  top: 135px;
  left: 25px;
  right: 20px;
  font-size: 16px;
  color: #555;
  line-height: 1.5;
`;

const Job = styled.h3`
  position: absolute;
  top: 235px;
  left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const RelatedJobs = styled.p`
  position: absolute;
  top: 270px;
  left: 25px;
  right: 20px;
  font-size: 16px;
  color: #555;
  line-height: 1.5;
`;


const Core = styled.h3`
  position: absolute;
  top: 310px;
  left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const CoreDescription = styled.p`
  position: absolute;
  top: 350px;
  left: 25px;
  font-size: 16px;
  color: #555;
`;

const TagsTitle = styled.h3`
  position: absolute;
  top: 400px;
  left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const TagsContainer = styled.div`
  position: absolute;
  top: 460px;
  left: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.span`
  background-color: #f0f0f0;
  color: #333;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

function Detail({ type }) {
  const result = results.find((item) => item.type === type) || {};


  
    return (
      <DetailContainer>
        <Work>work</Work>
        <WorkDescription>
        {result.introduction || "No introduction available."}</WorkDescription>
        <JobD>JobDescription</JobD>
        <JobDescription>
          {result.jobDescription || "No job description."}
        </JobDescription>
        <Job>related job</Job>
        <RelatedJobs>
          {result.relatedJobs?.join(", ") || "No related jobs."}
        </RelatedJobs>
  
        <Core>core ability</Core>
        <CoreDescription>{result.coreSkills?.join(", ") || "No core skills."}</CoreDescription>
  
        <TagsTitle>tag</TagsTitle>
        <TagsContainer>
          {result.tags?.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          )) || <Tag>No tags.</Tag>}
        </TagsContainer>
      </DetailContainer>
    );
  }
  
  export default Detail;