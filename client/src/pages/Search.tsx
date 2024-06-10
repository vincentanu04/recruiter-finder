import { useState } from 'react';

interface Recruiter {
  name: string;
  email: string;
}

const Search = () => {
  const [jobUrl, setJobUrl] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [recruiters, setRecruiters] = useState<Recruiter[]>([]);

  const handleSearch = async () => {
    const response: Recruiter[] = await new Promise((resolve) =>
      setTimeout(
        () => resolve([{ name: 'HAHA', email: 'HAHA@gmail.com' }]),
        1000
      )
    );

    setRecruiters(response);
  };

  return (
    <div>
      <h2>Find Recruiters</h2>
      <input
        type='text'
        value={jobUrl}
        onChange={(e) => setJobUrl(e.target.value)}
        placeholder='Job URL'
      />
      <input
        type='text'
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        placeholder='Company Name'
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {recruiters.map((recruiter) => (
          <div key={recruiter.email}>
            <h3>{recruiter.name}</h3>
            <p>Email: {recruiter.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
