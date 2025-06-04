import React from 'react';
import Search from './Search';
import Recommendations from './Recommendations';
import PopularTags from './PopularTags';

const RightBar = () => {
  return (
    <div className='flex flex-col gap-4 sticky top-0 h-max pt-2'>
      <Search/>
      <PopularTags/>
      <Recommendations/>
      <div className='text-textGray text-sm flex gap-x-4 flex-wrap'>
        
      </div>
    </div>
  );
}

export default RightBar;

