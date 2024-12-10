function Detail({ type }) {
    const result = results.find((item) => item.type === type) || {};
  
    return (
      <DetailContainer>
        <Work>하는 일</Work>
        <WorkDescription>
        {result.introduction || "No introduction available."}</WorkDescription>
        <Job>관련 직업</Job>
        <JobDescription>
          {result.relatedJobs?.join(", ") || "No related jobs."}
        </JobDescription>
  
        <Core>핵심 능력</Core>
        <CoreDescription>{result.coreSkills?.join(", ") || "No core skills."}</CoreDescription>
  
        <TagsTitle>태그</TagsTitle>
        <TagsContainer>
          <Tag>{result.tags?.join(", ") || "No tags."}</Tag>
        </TagsContainer>
      </DetailContainer>
    );
  }
  
  export default Detail;