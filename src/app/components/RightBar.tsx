import React from 'react';
import Search from './Search';
import Recommendations from './Recommendations';
import PopularTags from './PopularTags';

const RightBar = () => {
  return (
    <div>
      <Search/>
      <PopularTags/>
      <Recommendations/>
      <div className=''>
        
      </div>
    </div>
  );
}

export default RightBar;

