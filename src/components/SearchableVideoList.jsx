import React, { useState } from 'react'
import SearchInput from './SearchInput'
import VideoList from './VideoList'

const SearchableVideoList = ({videos}) => {
    const [searchText, setSearchText] = useState('')

    const filterVideos = (list, text)=>{
        if (list.length > 0 && text.length === 0) {
            return list
        }else if (list.length > 0 && text.length > 0) {
            const result = list.filter(item => item.title.toLowerCase().includes(text.toLowerCase()))
            return result
        }
        // return []
    }
    const foundVideos = filterVideos(videos, searchText)

    const HandleSearchText = (text)=>{
        setSearchText(text.target.value)
    }

  return (
    <>
        <SearchInput value={searchText} HandleSearchText={HandleSearchText} />
        <VideoList videos={foundVideos} emptyHeading={'No matches for "' + searchText + '"'} />
    </>
  )
}

export default SearchableVideoList