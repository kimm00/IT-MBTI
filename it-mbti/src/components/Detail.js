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