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
  top: 20px;
  left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const WorkDescription = styled.p`
  position: absolute;
  top: 60px;
  left: 25px;
  right: 20px;
  font-size: 16px;
  color: #555;
  line-height: 1.5;
`;

const Job = styled.h3`
  position: absolute;
  top: 170px;
  left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const JobDescription = styled.p`
  position: absolute;
  top: 210px;
  left: 25px;
  right: 20px;
  font-size: 16px;
  color: #555;
  line-height: 1.5;
`;


function Detail({ type }) {
    const result = results.find((item) => item.type === type) || {};
  
    return (
      <DetailContainer>
        <Work>work</Work>
        <WorkDescription>
        {result.introduction || "No introduction available."}</WorkDescription>
        <Job>related job</Job>
        <JobDescription>
          {result.relatedJobs?.join(", ") || "No related jobs."}
        </JobDescription>
  
        <Core>core ability</Core>
        <CoreDescription>{result.coreSkills?.join(", ") || "No core skills."}</CoreDescription>
  
        <TagsTitle>tag</TagsTitle>
        <TagsContainer>
          <Tag>{result.tags?.join(", ") || "No tags."}</Tag>
        </TagsContainer>
      </DetailContainer>
    );
  }
  
  export default Detail;